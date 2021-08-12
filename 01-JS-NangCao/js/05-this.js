// this trong hàm tạo +> đại diện cho các đối tượng được tạo.
// this trong 1 hàm là undifined khi ở 'strict mode'.
// 
const iPhone7 = {
  // thuộc tính - property
  name: "Iphone 7",
  color: "pink",
  weight: "300",

  // Phương thức
  takePhoto() {
    console.log(this);
  },
};

console.log(iPhone7.takePhoto());
