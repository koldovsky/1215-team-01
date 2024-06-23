//task 1
//Find the smallest integer in the array 
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

function findSmallestInt(arr) {
  return Math.min(...arr);
}


//task 2
//Geometry Basics: Circle Circumference in 2D 
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = ({ radius }) => parseFloat((2 * Math.PI * radius).toFixed(6));

//task 3
//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  const result = [];

  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key] && obj[key].toString().length === 5) {
      result.push(obj[key].toString());
    }
  }

  return result;
}

//task 4
//Understanding closures - the basics
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(function(index) {
      return index;
    }.bind(null, i));
  }

  return res;
}

//task 5
//Fun with ES6 Classes #2 - Animals and Inheritance
//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
