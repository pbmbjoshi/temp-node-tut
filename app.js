const _ = require('lodash')

const itmes = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(itmes)

console.log(itmes);
console.log(newItems);

const a = [1]
console.log(a);