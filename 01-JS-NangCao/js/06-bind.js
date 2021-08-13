this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thảo",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
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
const getTeacherName3 = teacher.getFullName.bind(student);
console.log("getTeacherName3", getTeacherName3());
