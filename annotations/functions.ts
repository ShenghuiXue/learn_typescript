const add = (a: number, b: number) : number => {
  return a + b;
};

const add2 : (a: number, b: number) => number = (a, b)  => {
  return a + b;
};


function divide (a: number, b: number) : number {
  return a / b;
}

const multiply = function (a: number, b: number) : number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  return undefined;
}

const throwError = (message : string) => {
  throw new Error (message);
}

const logWeather = ({ date, weather } : {date: Date, weather: string}) => {
  console.log(date);
  console.log(weather);
}