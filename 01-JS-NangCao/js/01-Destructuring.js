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