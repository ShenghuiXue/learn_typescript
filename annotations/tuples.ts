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
