// const boolArr = [true, false];
// const mixed = [1, "Partha", undefined, null, true, { a: 1 }];
// console.log(mixed);

// Class Methods
// Class methods are created with the same syntax as object methods.

// A JavaScript class is not an object.
// It is a template for JavaScript objects.

// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.

// class className {
//   constructor() {}
//   method1() {}
//   method2() {}
//   method() {}
// }

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const MyCar = new Car("Tesla", 2024);

console.log(`My Car age is ${MyCar.age()} year.`);
