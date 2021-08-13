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
