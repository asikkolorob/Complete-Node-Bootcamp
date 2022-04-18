const http = require("http");
const fs = require('fs');

const newServer = http.createServer((request, respons) => {
   const myreadStream = fs.createReadStream(__dirname + '/data.txt' , 'utf8');
   myreadStream.pipe(respons);
});

newServer.listen(3000);
console.log("server successfully created in 3000 port");
