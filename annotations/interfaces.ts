interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string
}


const oldCivic = {
  name: 'civic',
  year: new Date(1000000000000),
  broken: true, 
  summary(): string {
    return "Test summary";
  }
}; 

const printVehicle = (vehicle: Vehicle) : void => {
  console.log("name", vehicle.name);
  console.log("year", vehicle.year);
  console.log("is broken?", vehicle.broken);
}

const printVehicle2 = ({ name, year, summary }: Vehicle) : void => {
  console.log("name", name);
  console.log("year", year);
  console.log(summary());
}

printVehicle2(oldCivic);