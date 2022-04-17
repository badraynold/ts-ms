class Test {
  private name: string;
  private constructor() {
    this.name = "";
  }

  test() {
    this.name = "test";
  }
}

// const t = new Test();
// t.name = "aa";

interface Person {
  name: string;
  age: number;
  greet: (phrase: string) => void;
}

let person1: Person = {
  name: "Rafał",
  age: 33,
  greet: (phrase: string) => {
    console.log(phrase);
  },
};

person1.greet("test");
// person1.name = "adam";
interface I1 {
  name: string;
  age: number;
}

interface I2 {
  name: string;
  sex: string;
}

class IXY implements I1, I2 {
  name: string;
  age: number;
  sex: string;

  constructor() {
    this.name = "Adam";
    this.age = 32;
    this.sex = "F";
  }
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const v: Universal = 5;

interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "abc",
  username: "must start with a capital",
};

const data = 0;
console.log(data ?? data);

// const names: Array<string> =['a',5];
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

function merge<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "No value";
  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "Rafał" }, "name"));
