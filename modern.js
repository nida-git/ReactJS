// modern.js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const [first, ...rest] = doubled;
const user = {
name: "John",
age: 25
};
const { name, age } = user;
const greet = (name = "Guest") => `Hello ${name}`;