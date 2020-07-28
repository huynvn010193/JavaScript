const numArr = [1, 2, 3, 4];
let total = 0;

for (let i = 0; i < numArr.length; i++) {
  total += numArr[i];
}

// console.log(`For: ${total}`);

total = 0;
total = numArr.reduce((accmalator, currentValue) => {
  // console.log(`accmalator: ${accmalator} - currentValue: ${currentValue}`);
  return accmalator + currentValue;
});

// console.log(`Reduce: ${total}`);

// Tương tác với array Object
const arrObj = [
  {
    name: "An Vu",
  },
  {
    job: "CEO",
  },
  {
    age: 30,
  },
];

const newObject = arrObj.reduce((accmalator, currentValue) => {
  // console.log(accmalator);
  // console.log(currentValue);
  return {
    ...accmalator,
    ...currentValue,
  };
});

console.log(newObject);

// Tương tác với object
const obj = {
  name: "An Vu",
  job: "CEO",
  age: 30,
};
