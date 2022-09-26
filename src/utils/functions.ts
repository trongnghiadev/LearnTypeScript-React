// function total(a: number, b: number){
//   return a + b;
// }
// function total(a: string, b: string){
//   return a + b;
// }
// total(5,7); // 12
// total('evondev', 'is developer'); // evondev is developer
// function overloading: function have the same name, same amount or different amount of parameters, different type and same or different return type
// function total(a: number, b: number): number;
// function total(a: string, b: string): string;
// function total(a: any, b: any) {
//   return a + b;
// }
// total(5, 7); // 12
// total("a", "b"); // ab
interface Coordinate {
  x: number;
  y: number;
}
// {x: number; y: number}: Coordinate
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
// Type assertion `as`
parseCoordinate({ x: 10, y: 20 });
parseCoordinate(10, 20);
// Normal function
function addNumbers(a: number, b: number): number {
  return a + b;
}
// Arrow function
const addStrings = (x: string, y: string): string => {
  return `${x} ${y}`;
};
// Default parameters
function addNumbersWithDefaultParams(a: number = 10, b: number = 20): number {
  return a + b;
}
addNumbersWithDefaultParams(); // 30
// Union types
function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} ${description} ${amount}`;
}
format("evondev", "developer", 50);
format("evondev", "developer", "50");
// Void functions
function contact(email: string, phone: number): void {
  console.log(email, phone);
}
// Promise functions
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
// Rest parameters
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}
information(1, "evondev", "tuan"); // ["evondev", "tuan"]
// With callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
// Function params with params
function handleFilterArray(
  number: number[],
  fillter: (n: number) => number
): number[] {
  return number.map((i) => fillter(i));
}
// Function as types
type UpdateArray = (n: number) => number;
function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // 5 10 15 20 25
// Function return function
function handleValue(val: number): (n: number) => number {
  return (n: number): number => n * val;
}
const value = handleValue(5);
console.log(value(10)); // 50
