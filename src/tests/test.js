const split = require('../../index');


let json = split.find.quote("Hello 'there \"no\" all' ok `code` na \"why\" mate, im 'bored and bored' ok", 'backtick');
console.log(json);

