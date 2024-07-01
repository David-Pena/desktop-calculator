export type Operator = "+" | "-" | "*" | "/" | "";

// Define the operations map with explicit function type
export const OPERATIONS_MAP: Record<Operator, ((a: number, b: number) => number) | undefined> =
  {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "": undefined, // "" doesn't need a function, so it's implicitly `undefined` and can be omitted
  };
