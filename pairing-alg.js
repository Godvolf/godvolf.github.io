
// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')
 
// Data which will write in a file.
const actors = ["Adam", "Ania", "Kuba", "Weronika", "Paweł", "Agata"];

let pairs = []
let isCorrect = false;
while (!isCorrect) {
    pairs = [];
    let duplicates = false;
    const randomized = [...actors].sort((a, b) => 0.5 - Math.random());
    actors.map((actor,index) => {
        if (actor === randomized[index]) {
            duplicates = true;
        } else {
            pairs.push({from: actor, to: randomized[index]});
        }
    })
    if (!duplicates) {
        isCorrect = true
    }
}
console.log(pairs)
// Write data in 'Output.txt' .
fs.writeFile('./src/Output.js', `export const pairs = ${JSON.stringify(pairs)}`, (err) => {
 
    // In case of a error throw err.
    if (err) throw err;
})