//task 1 +
//Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

//task 2
//DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
//
function DNAtoRNA(dna) {
  let rna = dna.split("");
  rna.forEach((letter, index) => {
    if (letter === "T") {
      rna[index] = "U";
    }
  });
  return rna.join("");
}

//Task 3 +
//Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//Task 4 +
//Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}
