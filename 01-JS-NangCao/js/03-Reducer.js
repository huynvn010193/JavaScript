const numArr = [1, 2, 3, 4];
let total = 0;

for (let i = 0; i < numArr.length; i++) {
  total += numArr[i];
}

// console.log(`For: ${total}`);

total = 0;
total = numArr.reduce((accmalator, currentValue) => {
  return accmalator + currentValue;
}, 0);

console.log("total", total);

// Bài tập 3: Tìm phần tử lớn nhất trong mảng.
const numberArr = [1, 22, 9, 4];
// C1: sắp xếp -> rồi in ra phần tử đầu tiên
const findMax = numberArr.sort((a, b) => {
  return b - a;
});

console.log(findMax[0]);

// C2 : dùng reducer:
const findMaxRd = numberArr.reduce((acc, it) => (acc > it ? acc : it), 0);

console.log(findMaxRd);

// Bài tập 5: Từ mảng những Obj => Obj.
const arrObject = [
  {
    name: "ABC",
  },
  {
    job: "CEO",
  },
  {
    age: 30,
  },
];

const newObjArrObj = arrObject.reduce((acc, it) => {
  return {
    ...acc,
    ...it,
  };
}, {});

console.log("newObjArrObj", newObjArrObj);
