// iqTest = (accumalator, currentValue) => {
//   console.log(
//     `accumalator: ${accumalator} - currentValue: ${currentValue}`
//   );
//   return accumalator + currentValue;
// };

// function runABC() {
//   console.log(
//     "===========================Tương tác vs arr=============================="
//   );
//   // Tương tác vs arr

//   const numberArr = [1, 22, 9, 4];
//   const a = numberArr.reduce(iqTest, 0);
//   console.log(a);

//   console.log(
//     "===========================Ứng dụng tìm FindMax============================"
//   );
//   // const findMax = numberArr.reduce((acc,val) => {
//   // 	if(val > acc) {
//   // 		acc = val
//   // 	}
//   // 	return acc;
//   // });

//   let findMax = numberArr.reduce((a, b) => (a > b ? a : b));

//   console.log(findMax);

//   // Tương tác vs arrObject
//   console.log(
//     "===========================Tương tác vs arrObject: từ mảng Obj thành 1 Obj=============================="
//   );

//   // Cho mảng arrObject => tạo thành 1 Object {name: "ABC", job: "CEO", age: 30}
//   const arrObject = [
//     {
//       name: "ABC",
//     },
//     {
//       job: "CEO",
//     },
//     {
//       age: 30,
//     },
//   ];

//   console.log("Trước khi dùng Reduce", arrObject);

//   const newObj = arrObject.reduce((accumalator, currentValue) => {
//     console.log("accumalator", accumalator);
//     console.log("currentValue", currentValue);
//     return {
//       ...accumalator,
//       ...currentValue,
//     };
//   }, []);

//   console.log("Tương tác vs arrObject", newObj);

//   // Tương tác Object thường
//   console.log(
//     "===========================Tương tác Object thường: Nối các value của Object thành chuỗi=============================="
//   );
//   const obj = {
//     name: "ABC",
//     job: "CEO",
//     age: 30,
//   };

//   console.log("Object trước khi dùng reducer", obj);

//   //console.log( Object.keys(obj));

//   const result = Object.keys(obj).reduce((accumalator, key) => {
//     console.log("accumalator: ", accumalator);
//     console.log("key: ", key);
//     return (accumalator += obj[key]);
//   }, "");
//   console.log("Chuỗi sau khi dùng reducer:", result);

//   console.log(
//     "=========================== Trải phẳng 1 mảng chứa nhiều mảng con:=============================="
//   );
//   console.log(
//     "=========================== Gôm các phần tử trong mảng lại thành 1 mảng.:=============================="
//   );
//   const flattened = [
//     [0, 1],
//     [2, 3],
//     [6, 9],
//   ];
//   console.log("Mảng ban đầu: ", flattened);
//   const result2 = flattened.reduce((acc, val) => acc.concat(val), []);
//   console.log(result2);

//   console.log(
//     "=========================== Đếm số lần xuất hiện của phần tử trong mảng =============================="
//   );
//   const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
//   console.log("Cho mảng như sau", names);
//   const countedName = names.reduce((allNames, name) => {
//     if (name in allNames) allNames[name]++;
//     else allNames[name] = 1;
//     return allNames;
//   }, {});
//   console.log("Kết quả", countedName);

//   console.log(
//     "=========================== Ứng dụng reduce chuyển mảng 2 chiều thành mảng 1 chiều =============================="
//   );
//   const topics = [
//     {
//       topic: "ReactJS",
//       posts: [
//         { postID: "id1", title: "title1" },
//         { postID: "id2", title: "title2" },
//       ],
//     },
//     {
//       topic: "Vue.js",
//       posts: [
//         { postID: "id3", title: "title3" },
//         { postID: "id4", title: "title4" },
//       ],
//     },
//   ];
//   console.log("Cho mảng như sau", topics);

//   const arrConvert = topics.reduce((acc, val) => {
//     return [...acc, ...val.posts];
//   }, []);

//   console.log("Kết quả", arrConvert);

//   console.log(
//     "==== Ứng dụng: Chuyển array thành object theo giá trị của một thuộc tính ====="
//   );
//   // Cho mảng sau:
//   // Biến đổi mảng posts thành
//   // const dictionary = {
//   //   id1: { postID: "id1", title: "title1" },
//   //   id2: { postID: "id2", title: "title2" },
//   //   id3: { postID: "id3", title: "title3" },
//   //   id4: { postID: "id4", title: "title4" }
//   // };

//   const posts = [
//     { postID: "id1", title: "title1" },
//     { postID: "id2", title: "title2" },
//     { postID: "id3", title: "title3" },
//     { postID: "id4", title: "title4" },
//   ];
//   // Viết hàm getPosts :
//   // + getPost("id1", posts).title => title 1;
//   // + getPost("id2", posts).title => title 2;
//   // + getPost("id3", posts).title => title 3;

//   const getPosts = (id,posts) => {
//     let a;
//     const itemGet = posts.map((item,index) => {
//       if(id === item.postID) {
//         a = item
//       }
//     });
//     return a;
//   }

//   console.log(getPosts("id1",posts).title);

//   const dictionary = posts.reduce((acc, curr) => {
//     acc[curr.postID] = curr;
//     return acc;
//   }, {});

//   const getPost = (postID, dictionary) => {
//     return dictionary[postID];
//   };

//   getPost("id1", dictionary).title;
//   console.log("runABC -> getPost:", getPost("id1", dictionary).title);

//   /*=====================================================*/
//   console.log("==== Tìm phần tử dài nhất trong mảng =====");

//   // output : frontend
//   const listWord = ["love", "easy", "frontend"];
//   console.log("Cho mảng sau: ", listWord);
//   const findTheLongestWord = (wordList) => {
//     // Kiểm tra có phải là mảng hay không hoặc mảng đó có giá trị hay không.
//     if (!Array.isArray(wordList) || wordList.length === 0) return null;
//     return wordList.reduce((theLongestWord, currentWord) => {
//       return theLongestWord.length > currentWord.length
//         ? theLongestWord
//         : currentWord;
//     }, wordList[0]);
//   };
//   const wordLongest = findTheLongestWord(listWord);
//   console.log("Kết quả", wordLongest);

//   /*=====================================================*/
//   console.log("==== Chuyển đổi mảng thành Object =====");
//   const itemList = [
//     { id: "key1", value: "Supperman" },
//     { id: "key2", value: "Wonder Woman" },
//     { id: "key3", value: "Spider Man" },
//   ];

//   console.log("Trước convert", itemList);

//   const itemMap = itemList.reduce((acc, curr) => {
//     acc[curr.id] = curr.value;
//     return acc;
//   }, {});

//   console.log("Sau khi convert: ", itemMap);
// }
