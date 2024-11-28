import { HashMap } from "./hashmap.js";

const myHashMap = new HashMap(16,0.75);

// 12 initial entries
myHashMap.set('apple', 'red');
myHashMap.set('banana', 'yellow');
myHashMap.set('carrot', 'orange');
myHashMap.set('dog', 'brown');
myHashMap.set('elephant', 'gray');
myHashMap.set('frog', 'green');
myHashMap.set('grape', 'purple');
myHashMap.set('hat', 'black');
myHashMap.set('ice cream', 'white');
myHashMap.set('jacket', 'blue');
myHashMap.set('kite', 'pink');
myHashMap.set('lion', 'golden');
console.log(myHashMap.buckets);
console.log(myHashMap.length());

// Change value for existing key
myHashMap.set('apple', 'new');

// 13th entry to trigger resize
myHashMap.set('moon', 'silver');
console.log(myHashMap.buckets);
console.log(myHashMap.length());

// Other various functions
console.log(myHashMap.get('kite'));
console.log(myHashMap.contains('hat'));
console.log(myHashMap.keys());
console.log(myHashMap.values());
console.log(myHashMap.entries());

// Destructive functions

console.log(myHashMap.contains('apple'));
myHashMap.remove('apple');
console.log(myHashMap.get('apple'));
console.log(myHashMap.contains('apple'));

// console.log(myHashMap.buckets);
// myHashMap.clear();
// console.log(myHashMap.buckets);
