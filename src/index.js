import fruits from './Fruits';
import { RandomChoice, RemoveChoice } from './helpers';

let fruit = RandomChoice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = RemoveChoice(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);

