interface Reportable {
  summary(): string
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
} 

const oldCivic = {
  name: 'civic',
  year: new Date(1000000000000),
  broken: true, 
  summary(): string {
    return "Summary Report for a car";
  }
}; 

const drinkA = {
  name: 'drink A', 
  weight: 100,
  weightUnit: "gram",
  summary() : string {
    return "Very good drink summary";
  }
} 

printSummary(oldCivic);
printSummary(drinkA);