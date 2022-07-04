const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

const words = ['Yo Yo', 'Lighthouse', 'Labs'];

tail(words);
assertEqual(words.length, 3);
