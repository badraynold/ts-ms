// decorators

const Logger = (logString: string) => {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
};

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const element = document.getElementById(hookId);
    const p = new constructor();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person...");
  }
}

const p = new Person();
console.log(p);

// --

function Log(target: any, propertyName: string | Symbol) {
  console.log("Just log");
  console.log(target);
  console.log(propertyName);
}

class Product {
  @Log
  private _price: number;

  @Log
  private _state: boolean;

  constructor() {
    this._price = 10;
    this._state = true;
  }
}

const pr = new Product();

function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this);
    console.log(this.message);
  }
}

const printer = new Printer();
// printer.showMessage();

document.addEventListener("click", printer.showMessage);
