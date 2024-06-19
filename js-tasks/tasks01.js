// task 1
// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//

let laLigaGoals = 30
let copaDelReyGoals = 6
let championsLeagueGoals = 20

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// task 2
// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// ++
function makeNegative(num) {
  if (num <= 0) return num;
  return num * -1;
}
// 
function makeNegative(num) {
  // Code?
  if (num > 0) {
    num = -num;
    return num;
  } else {
    return num;
  }
}
//
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

//
let num = 5
function makeNegative(num) {
  if (num<=0){
    return num
  }
  else{ 
    let negativenum = -num
    return negativenum
  }
}

//
function makeNegative(num) {
  switch (true) {
    case num > 0:
      return -num;
      break;
    default:
      return num;
  }
}
// task 3
// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// ++
function move(position, roll) {
  return position + roll * 2;
}
// +
function move (position, roll) {
  const newPosition = position + roll * 2;
 return newPosition;

//
  function move (position, roll) {
  switch (roll) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    return position + roll * 2;
    break;
    }
}
}
// task 4
// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
//++
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }
  return "Hello guest";
}

// +
function greet(name, owner) {
  // Add code here
  let currentUserGreet;
  if (name === owner) {
    currentUserGreet = "Hello boss";
    return currentUserGreet;
  } else {
    currentUserGreet = "Hello guest";
    return currentUserGreet;
  }
}
// + +
function greet (name, owner) {
  // Add code here
  return name === owner ? "Hello boss" : "Hello guest";
}

//
function greet(name, owner) {
  switch (name) {
    case owner:
      return 'Hello boss';
    default:
      return 'Hello guest';
  }
}


// task 5 + 
// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time * 0.5);
}

//
function litres(time) {
  const roundedTime = Math.floor(time * 0.5);
  switch (true) {
    case roundedTime >= 0:
      return roundedTime;
    default:
      return 0;
  }
}
// task 6
// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// + 
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 1) return true;
  if (flower2 % 2 === 0 && flower1 % 2 === 1) return true;
  return false;
}

function lovefunc(flower1, flower2) {
  // moment of truth +
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
//+ + 
function lovefunc(flower1, flower2){
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}

//
function lovefunc(flower1, flower2){
  const firstFlower = flower1 % 2;
  const secondFlower = flower2 % 2;
  switch (true) {
      case (firstFlower === 0 && secondFlower != 0):
      case (firstFlower != 0 && secondFlower === 0):
      return true;
  default:
  return false
  }
}





