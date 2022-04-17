const fs = require('fs');

// fs.writeFileSync('myTesting.txt', 'Hello There, How are you?'); //? create new file & add text
// fs.appendFileSync('myTesting.txt', ' I am creating by node js fs module'); //? new text line add

// const data = fs.readFileSync('myTesting.txt'); //? file read by Sync

fs.readFile('myTesting.txt', (err, data) => {
    console.log(data.toString());
}); //? by Async and this is best

console.log('Hello');