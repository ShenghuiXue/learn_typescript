# learn_typescript

My notes for the Udemy course: [typescript-the-complete-developers-guide](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## Environment setup

Install typescript compiler

```
npm install -g typescript ts-node
tsc --help
```

`tsc` stands for the type script compiler. used to compile type script as plain javascript.

`tsc index.ts` will compile the typescript into the javascript and then we can run the compiled code with `node index.js`.

Alternatively, we can run the typescript code directly using `ts-node index.ts`.

## What is a Type System

**Type:** Easy way to refer to the different properties + functions that a value has. (and summarized to a single word)

- Primitive Types: number, boolean, string, symbol, void, undefined, null
- Object types: functions, arrays, classes, objects

**Type annotations**: Code we add to tell Typescript what type of value will refer to.

**Type inference**: Typescript tries to figure out what type of value a variable refers to.

## Type annotations

- Annotations in primitive types and simple objects:

  ```typescript
  let apples: number = 5;
  let speed: string = 'fast';
  let hasName: boolean = true;

  let nothing: null = null;
  let nothing: undefined = undefined;

  let now: Date = new Date();
  ```

- Annotations for the complicated syntax:

  ```typescript
  // array
  let colors: string[] = ['red', 'greed', 'blue'];
  const myNumbers: number[] = [1, 2, 3];

  // classes
  class Car {}
  let car: Car = new Car();

  // Object literal
  let point: { x: number; y: number} = { // note ; is used in { }
    x: 10,
    yL 20
  }
  ```

- Annotations for the functions:

  ```typescript
  // (i: number) => void is the description (definition) of the function
  const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
  };

  const add = (a: number, b: number): number => {
    return a + b;
  };

  const multiply = function (a: number, b: number): number {
    return a * b;
  };

  function divide(a: number, b: number): number {
    return a / b;
  }

  // if the return type of a function is void, then this function can return as undefined.
  const logger = (message: string): void => {
    console.log(message);
    return undefined;
  };

  // never type will guarantee not return any thing at all, not even undefined
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  // destructing with Annotations (ES2015 syntax)
  const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
    console.log(date);
    console.log(weather);
  };
  ```

## Type inference

```typescript
const color = 'red';
```

`const color` is variable declaration, and `'red'` is the variable initialization. If the declaration and initialization are on the **same line**, then Typescript will figure out the type of `color` for us.

```typescript
const add = (a: number, b: number) => {
  return a + b;
};
```

In this example, Typescript will figure out that the function should return a number.

## 'any' Type

- `any` is a type in the typescript.
- `any` means typescript has no idea what the type is - can't check for correct property references.
- Avoid variables with `any` at all costs.
- Example on why typescript assign `any` type on coordinates variable:

  ```typescript
  const json = '{"x":18, "y": 20 }';

  // depending on the different input, the return of JSON.parse(...) can be boolean, number, object etc.
  let coordinates = JSON.parse(jason); // coordinates has a type of any
  console.log(coordinates); // {x: 18, y: 20}

  // can can fix it as below
  let coordinates: { x: number; y: number } = JSON.parse(jason);
  ```

## Delayed initialization

- Declare a variable on one line and initialize it later.

  ```typescript
  let numbers : number = [1,2,3];

  let foundNumber: boolean; // delayed initialization

  for (let i = 0; i < numbers.length; i++>) {
    if (numbers[i] === 100) {
      foundNumber = true;
    }
  }
  ```

## Destructuring with Objects

```typescript
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 55,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

## Tuples and type alias in Typescript

- Tuple is an array-like structure where each element represents some property of a record.

* Tuple is not commonly used.

- An use case of tuple is the row of csv files.
- Example of tuple and type alias:

  ```Typescript
  // Object
  const drink = {
    color : "brown",
    carbonated: true,
    sugar: 40
  }

  // This is a type annotation of tuple
  const drink2: [string, boolean, number] = ['brown', true, 40];

  // type alias
  type Drink = [string, boolean, number];
  const drink3: Drink = ['brown', true, 40];
  ```

## Interface

- Interface can be used to define the type of objects.
- Interface **does not** need to define all the properties of a object.
- We can use a single interface to be used for very different things.
- We can create functions that accept arguments that are typed with interfaces.
- Objects/classes can decide to 'implement' a given interface to ork with a function.
- Interface make the code more reusable.

  ```typescript
  // define an interface that has summary function
  interface Reportable {
    summary(): string;
  }

  // define a function and the input of this method is annotated with the defined interface
  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };

  const oldCivic = {
    name: 'civic',
    year: new Date(1000000000000),
    broken: true,
    summary(): string {
      return 'Summary Report for a car';
    },
  };

  const drinkA = {
    name: 'drink A',
    weight: 100,
    weightUnit: 'gram',
    summary(): string {
      return 'Very good drink summary';
    },
  };

  

  printSummary(oldCivic);
  printSummary(drinkA);
  ```
## Class

- Class is the blue print to create an object with some fields (values) and methods (functions) to represent a thing.

### Classes and inheritance

- `extends` key word is used to create a child class from a parent class. The child class inherit all the fields and methods from the parent class.
- We can override the methods in child class.
- We can assign the values of the fields in the `constructor`.
- `super` refers to the parent constructor.

  ```typescript
  class Vehicle {
    private color: string;

    constructor(color: string) {
      this.color = color;
    }

    // short cut to the lines above
    // constructor (private color: string) {}

    public drive() : void {
      console.log ("vehicle driving ...."); 
    }
    protected honk(): void {
      console.log ("Vehicle honk ...");
    }
  }

  class Car extends Vehicle {
    constructor (public wheels: number, color: string) { 
    // note: color does not have public modifier, 
    // because color belongs to the parent class
      super(color);
    }
    protected honk(): void {
      console.log ("beep ...");
    } 
  }

  const car = new Car('red');
  car.drive();
  car.honk();
  ```

### Modifiers in class

- `public`: can be called anywhere, anytime.
  - If a method/field does not have any modifier, it is considered as `public` method by default.
- `private`: can only be called by the other methods in this class.
- `protected` can be called by other methods in this class and by other methods in child classes.
- Modifiers can be added to the methods and the fields in a class.

## Map project (Interface project)

### Definitely Typed Naming Scheme

Read more information from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

- Original library name: `faker`
- Definitely Typed Naming and type definition file: `@types/faker`
- install `npm install --save @types/faker`

### Interesting points

- Different between `export` and `export default`.
- In typescript world, we should avoid using `default export` if we can.
- `!` in Typescript is non-null assertion operator
- `?` symbol is used in optional parameter in function, optional chaining, or optional properties in object.

## Sort project (Abstract class project)

### tsc and tsconfig.json

- We can create a `tsconfig.json` file to config how to compile typescript.
  - `tsc --init` will create the `tsconfig.json` file.
  - We can defined the input and output directory inside of `tsconfig.json` file.
    - `"outDir": "./build",`
    - `"rootDir": "./src",`  
  - run `tsc` command to compile all the ts files
  - run `tsc -w` to automatically re-compile the ts file into js file, once new ts file is added into the input directory or the existing ts file is modified.
  - Install two additional modules to automate the compile and running ts code using `npm install nodemon concurrently`.
    - `nodemon` automatically rerun the code anytime when the code is changed.
    - `concurrently` will help us to run **multiple** scripts at the same time.
    - here is the script setup in the package.json. Once set, `npm start` will run tart:build and start:run at the same time at the same time.

      ```json
        "scripts": {
          "start:build": "tsc -w",
          "start:run": "nodemon build/index.js",
          "start": "concurrently npm:start:*" 
        },
      ```

### Type guard

- `typeof` is used in the primitive types => number, string, boolean etc.
- `instanceof` is used in every other types that is created with a constructor function.

### `get` keyword

- `get` keyword will bind an object property to a function. When this property is looked up now the getter function is called. The return value of the getter function then determines which property is returned.

### Abstract class

- Abstract class cannot be used to create an instance of object directly.
- Can contain implemented classes.
- List all the method signatures that will eventually be implemented in the future.

  ```typescript
  export abstract class Sorter{
    abstract length : number;
    // same as // abstract get length(): number;
    abstract compare (leftInd: number, rightInd: number) : boolean;
    abstract swap (leftIndex: number, rightIndex: number) : void;

    // bubble sort
    sort () : void {
      const length: number  = this.length;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j ++) {
          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1);
          }
        }
      }
    }
  }
  ```

- `Interfaces` vs. `Abstract classes`
  - Interface:
    - Sets up a contract between different classes.
    - Use when very different objects that we want to work together. For example, in the previous section, *User* and *Company* are very different from the *Map* object, we just implements *Mappable* to *User* and *Company*.
    - Promotes **loose coupling**.
  - Inheritance/Abstract classes
    - Sets up a contract between different classes.
    - Use when we are trying to build up a definition of an object/class. For example, in this section, the *Sorter* class has something to do with data, so the *NumbersCollections* and *CharactersCollections* classes are extended with *Sorter*.
    - **Strongly couples** classes together.

## Stats project

- any time when you use the build-in library in typescript, you need to install `@types/node`.

  ```bash
  npm install @types/node
  ```

### Enum

- Enum can be applied the a small set fixed values that are closely related.
- The primary goal is to signal to other engineers that these are all closely related values.

  ```javascript
  enum MatchResult {
    HomeWin  = 'H',
    AwayWin = 'A',
    Draw = 'D'
  }
  ```
