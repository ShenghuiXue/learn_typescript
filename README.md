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

### Type annotations

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
  ```

### Type inference

```
const color = 'red';
```

`const color` is variable declaration, and `'red'` is the variable initialization. If the declaration and initialization are on the **same line**, then Typescript will figure out the type of `color` for us.

### 'any' Type

- `any` is a type in the typescript.
- `any` means typescript has no idea what the type is - can't check for correct property references.
- Avoid variables with `any` at all costs.
- example on why typescript assign `any` type on coordinates variable:

  ```typescript
  const json = '{"x":18, "y": 20 }';

  // depending on the different input, the return of JSON.parse(...) can be boolean, number, object etc.
  let coordinates = JSON.parse(jason); // coordinates has a type of any
  console.log(coordinates); // {x: 18, y: 20}

  // can can fix it as below
  let coordinates: { x: number; y: number } = JSON.parse(jason);
  ```

### Delayed initialization

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
