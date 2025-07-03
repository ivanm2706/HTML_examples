const str = 'Hello world hello';
const regex = new RegExp('hello', 'gi');


// exec

let match;

while (match !== null) {
  match = regex.exec(str);

  // console.dir(regex.lastIndex); 
}


//match

const matchArr = str.matchAll(/hello/gi);
// console.log(Array.from((matchArr)));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];

console.log(arr2.__proto__);


function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const ivan = new User('Ivan');

ivan.sayHi(); // 👉 Hi, I'm Ivan

console.log(ivan.__proto__ === User.prototype);
console.log(ivan.__proto__);
console.log(User.prototype);
// Object.setPrototypeOf(ivan, {name: "none"});
console.log(ivan.prototype);


ivan.sayHi();

const roma = {
}

Object.setPrototypeOf(roma, ivan);

// roma.sayHi()
function User2(name) {
  this.name = name;
}

console.log(roma instanceof User2)
console.log(User.isPrototypeOf(roma))


