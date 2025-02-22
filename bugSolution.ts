function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | undefined {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Error: Invalid input types for addSafe function");
    return undefined; // or throw an error
  }
}

let result1 = addSafe(10, 5); // Correct usage
let result2 = addSafe("hello", 5); // Safe handling of incorrect input
let result3 = addSafe(10, "world"); //Safe handling of incorrect input