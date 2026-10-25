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
console.log(regularUser.fullname.username.userfullname); // ----> object me object ko acces 

