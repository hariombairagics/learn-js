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
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);

