
const mySym = Symbol("key1")

const JsUser = {
    name: "Hariom",
    "full name": "Hariom Bairagi",
    [mySym]: "mykey1", 
    email: "hariom@gmail.com",
    age: "20",
    location: "Ujjain",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hariombairagi@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hariomchat@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



 
