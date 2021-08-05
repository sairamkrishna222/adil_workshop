console.log(`Ping.`);

let idx = 0;

function Person(name){
    this.name = name;
    this.id = (function(idx) {return idx})(++idx);;
    this.energy = 100;

}
let jack = new Person("Jack");
let tom = new Person("Tom");
console.log(jack);
console.log(tom);