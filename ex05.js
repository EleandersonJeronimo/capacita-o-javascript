const numbers = [1, 2, 3, 4, 5];

const [a, b, c] = numbers;
console.log(a, b, c);

const [,,,...d] = numbers;
console.log(d);

const person = {
    name : 'John',
    age : 30,
    city : 'New York'
};

const {name, age, city} = person;
console.log(name, age, city);

const personResume = {name, age};
console.log(personResume);