const { get } = require("lodash");

const message = 'Node JS';
console.log(message);

class User {
    constructor(name) {
        this.name = name;
    }


    get name() {
        return this.name
    }
}

const mango = new User('Mango');

console.log(mango.name);