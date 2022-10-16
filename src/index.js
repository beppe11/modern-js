const name = "岩元";
const age = 51;
const msg = `私の名前は${name}です。年齢は${age}才です。`;
console.log(msg);

const func = (num1, num2) => num1 + num2;
console.log(func(10, 20));

const func2 = (val1, val2) => ({
  name: val1,
  age: val2
});

console.log(func2("Iwamoto", 51));

const person = {
  name: "Iwamoto Go",
  age: 51
};

const { name: name2, age: age2 } = person;
const message = `私の名前は${name2}です。年齢は${age2}才です。`;
console.log(message);

const arr = [1, 2, 3];
const [v1, v2, v3] = arr;
console.log(v1 + v2 + v3);

const sayHello = (name = "Guest") => console.log(`Hello, ${name}!`);

sayHello();
sayHello("Go");

const { address = "Osaka" } = person;
console.log(`${address}`);

const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = [1, 2];
const arr5 = [...arr4];
console.log(arr4);
arr5[0] = 10;

const nameArr = ["Iwamoto", "Suzuki", "Yamada"];
nameArr.map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];
const numArr2 = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(numArr2);

nameArr.map((name, index) => console.log(`${index + 1} is ${name}`));
