export {};

// A class member cannot have the 'const' keyword in TS

// EXAMPLE 1 - Use the `readonly` modifier to solve the error

class Employee {
  readonly name = 'Bobby Hadz';
  readonly age = 30;

  logName() {
    console.log(this.name);
  }
}

const emp = new Employee();

emp.logName(); // 👉️ "Bobby Hadz"

console.log(emp.name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 2 - Using the `static` keyword with `readonly`

// export class Employee {
//   // 👇️ public if you need to access from outside the class
//   public static readonly department = 'Accounting';

//   // 👇️ private if you need to access only from inside this class
//   private static readonly salary = 100;

//   // 👇️ protected if you need to access only from this class
//   // and its subclasses
//   protected static readonly age = 30;

//   logSalary() {
//     console.log(Employee.salary);
//     console.log(Employee.age);
//   }
// }

// // 👇️ Access on class (NOT on instances)
// console.log(Employee.department);

// ---------------------------------------------------

// // EXAMPLE 3 - Declaring a constant outside the class

// const name = 'Bobby Hadz';

// export class Employee {
//   logName() {
//     console.log(name);
//   }
// }

// const employee = new Employee();

// employee.logName(); // 👉️ "Bobby Hadz"
