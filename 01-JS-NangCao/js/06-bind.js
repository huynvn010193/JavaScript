this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thảo",
  getFullName(data1, data2) {
    console.log(data1, data2);
    return `${this.firstName} ${this.lastName}`;
  },
  getFullNameBtn(data1, data2) {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const student = {
  firstName: "Huy",
  lastName: "Nguyen",
};

// case 1:
console.log(teacher.getFullName()); // Gọi phương thức.

// case 2:
const getTeacherName = teacher.getFullName; // Gán hàm thôi.
console.log("getTeacherName", getTeacherName()); // Khi gọi hàm ko có đối tượng đằng trước thì sẽ lấy giá trị windown.

// khắc phụ case 2
const getTeacherName2 = teacher.getFullName.bind(teacher); // tạo ra 1 hàm mới và vùng nhớ mới.
console.log("getTeacherName2", getTeacherName2());

// case 3
const getTeacherName3 = teacher.getFullName.bind(student, "huy", "nguyen");
console.log("getTeacherName3", getTeacherName3());

// case 4. Lấy giá trị this từ bind
const button = document.querySelector("button");
button.onclick = teacher.getFullNameBtn.bind(teacher);

// VD2:
console.log("=============VD 2==============");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log($("#heading").innerHTML);

console.log("=============VD 3==============");

// const app = (() => {
//   const cars = ["BMW"];
//   const root = $("#root");
//   return {
//     add(car) {
//       cars.push(car);
//     },
//     delete(car) {
//       car.splice(index, 1);
//     },
//     render() {
//       const html = cars.map((car) => `<li>${car}</li>`).join(""); // dùng join biến mảng thành  1 chuỗi.
//       root.innerHTML = html;
//     },
//   };
// })();

const app = (() => {
  const cars = ["BMW"];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) =>
            `<li>
              ${car}
              <span class="delete" data-index="${index}">&times</span>
            </li>`
        )
        .join(""); // dùng join biến mảng thành  1 chuỗi.
      root.innerHTML = html;
    },
    handleDelete(e) {
      console.log("delete", e.target);
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index);
        this.render();
      }
    },
    init() {
      // handle DOM nếu viết submit.onClick = function() ... => phải đặt 1 biến _this = this Vì
      // function ko hiểu this lấy từ init() => dùng arrow FC do ko bind this.
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();
        input.value = null;
        input.focus();
      };
      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();

app.init();
