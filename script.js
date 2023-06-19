// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// greet function added to the Person
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
};

// created Employee constructor function
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // inheritance property from Person
    this.jobTitle = jobTitle;  
}

// Inherit the Person prototype inside the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
// this is a Person object
let person = new Person("John", 28);
person.greet();

// this is Employee object
let employee = new Employee("Sean", 29, "Manager");
employee.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
