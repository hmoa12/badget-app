// Object destructuring

// const person = {
//   name: 'Mohammad',
//   age: 21,
//   location: {
//     city: 'Kabul',
//     temp: 23
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// console.log(`It is ${temperature} degrees in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// }

// const { name: publisherNmae = 'Self-Published'} = book.publisher;
// console.log(publisherNmae);


// Array destructuring

// const address = ['Dashte Barchi', 'Kabul', 'Afghanistan'];
// const [, city, country] = address;
// console.log(`You are in ${city} ${country}`);

const item = ['Coffe (hot)', '$2.00', '$5.00', '$10.00'];

const [itemName, , mPrice] = item;

console.log(`A medium ${itemName} costs ${mPrice}`)