let user = {
    firstname: "Huy",
    lastname: "Nguyen",
    email:"hpn010193@gmail.com",
    address:{
        block: 3,
        number: '27/1'
    }
}
// const firstname = user.firstname;
// const lastname = user.lastname;

// Destructuring.
const { firstname, lastname, email, address } = user;
const { block, number, street = "PVT" } = address

// Destructuring. Array
var names = ['Khoa','Hung','Hanh','Linh','Hanh'];
const [first,seacond,third,...girlname] = names;

// Map
var students = new Map();
students.set('id1',{name:'Khoa'});
students.set('id2',{name:'Huy'});
students.set('id3',{name:'Vũ'});

for ([id,info] of students)
{
    const {name,age = 7} = info;
    console.log(`${name} is ${age} years  old and has id: ${id}`);
}

