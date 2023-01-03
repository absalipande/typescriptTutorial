"use strict";
// Basic Types
let id = 5;
let character = 'Amiel Brencis Salipande';
let age = 23;
let isDeveloper = true;
let x = 'deez nuts';
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'yes', true];
// Tuple
let person = [1, 'miel', true];
// Tuple Array
let employee;
employee = [
    [1, 'Amiel'],
    [2, 'Brencis'],
    [3, 'Salipande'],
];
// Union
let pid = 22;
pid = 23;
pid = '23';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Amiel',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
const addNum = (x, y) => {
    return x + y;
};
console.log(addNum(1, 3));
const log = (message) => {
    console.log(message);
};
log('hello');
const userOne = {
    id: 1,
    name: 'Amiel',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const miel = new Person(1, 'miel');
const brencis = new Person(2, 'brencis');
console.log(miel, brencis);
console.log(miel.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Amiel Brencis', 'Software Developer');
console.log(emp.register());
// Generics
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Amiel', 'Brencis', 'Salipande']);
numArray.push('hello');
console.log(numArray);
