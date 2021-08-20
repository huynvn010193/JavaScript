function random() {
  console.log(Math.random());
}

// random();
// random.call();

// GỌi hàm và bind this;

const teacher = {
  firstName: "Minh",
  lastName: "Thu",
};

const me = {
  firstName: "Huy",
  lastName: "Nguyễn",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
    //return `${this.firstName} ${this.lastName}`;
  },
};

me.showFullName();
me.showFullName.call(); // khi dùng call thì undefined undefined do this đang là phạm vi windown
me.showFullName.call(teacher); // vừa bind this vừa gọi phương thức lun.
//me.showFullName.call(me);

// this.firstName2 = "Sơn";
// this.lastName2 = "Đặng";

// function showFullName2() {
//   console.log(`${this.firstName2} ${this.lastName2}`);
// }

// showFullName2();

// ====== Thể hiện tính kế thừa
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  // this : ở đây là đối tượng huynguyen
  Animal.call(this, name, weight);
  this.legs = legs;
}

const huynguyen = new Chicken("Huy Nguyen", 66, 22);

console.log(huynguyen);
