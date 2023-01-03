// Basic Types
let id: number = 5;
let character: string = 'Amiel Brencis Salipande';
let age: number = 23;
let isDeveloper: boolean = true;
let x: any = 'deez nuts';
x = true;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 'yes', true];

// Tuple
let person: [number, string, boolean] = [1, 'miel', true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'Amiel'],
  [2, 'Brencis'],
  [3, 'Salipande'],
];

// Union
let pid: string | number = 22;
pid = 23;
pid = '23';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Right);

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Amiel',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
const addNum = (x: number, y: number): number => {
  return x + y;
};

console.log(addNum(1, 3));

const log = (message: string | number): void => {
  console.log(message);
};

log('hello');

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const userOne: UserInterface = {
  id: 1,
  name: 'Amiel',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Amiel Brencis', 'Software Developer');
console.log(emp.register());

// Generics
const getArray = (items: any[]) => {
    return new Array().concat(items)
}

let numArray =getArray([1, 2, 3, 4])
let strArray =getArray(['Amiel', 'Brencis', 'Salipande'])
numArray.push('hello')
console.log(numArray)