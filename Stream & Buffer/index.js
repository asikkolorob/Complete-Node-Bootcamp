
const fs = require('fs');

const clientReadStream = fs.createReadStream(`${__dirname}/data.txt`); //? read stream
const clientWriteStream = fs.createWriteStream(`${__dirname}/newData.txt`); //? read stream

//? ! way
clientReadStream.on('data', (chunk) => {
    // console.log(chunk.toString()); // previus
    clientWriteStream.write(chunk); //? create new file than push inSite file
})
//? ................

//? 2 way
clientReadStream.pipe(clientWriteStream);
//? ................

