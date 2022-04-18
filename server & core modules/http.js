const http = require("http");

const newServer = http.createServer((request, respons) => {
    if (request.url === "/") {
        respons.write("Hello Programmer!"),
            respons.write("I am from node js on the browser");
        respons.end();
    } else if (request.url === '/about') {
        respons.write('Hey, Welcome to about page!');
        respons.end();
    }
    else {
        respons.write('Invelid URL, Please check your URL,')
        respons.write('Thank you!')
        respons.end();
    }
});

newServer.listen(3000);
console.log("server successfully created in 3000 port");
