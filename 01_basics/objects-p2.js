// cont tinderUser = new Object()  -----> singleton object

const tinderUser = {}  // -----> non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "hariom"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            userfullname: {
                firstname: "Hariom",
                lastname: "Bairagi",
            }
        }
    }
}
// console.log(regularUser.fullname.username.userfullname); // ----> object me object access

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 1, 
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // --> output array me aara hai [keys]
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const user = {};
console.log(user.fullname?.userfullname);


const obj5 = { name: "Hariom" };
const obj6 = { name: "Rahul" };
const result = Object.assign({}, obj5, obj6);
// console.log(result.name);


