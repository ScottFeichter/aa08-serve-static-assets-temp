const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here

  // static assets -------------------------------
  if(req.method === `GET` && req.url === `/`) {
    const resBody = fs.readFileSync('./index.html', `utf-8`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end(resBody);
  }

  if(req.method === `GET` && req.url === `/static/css/application.css`) {
    const resBody = fs.readFileSync('./static/assets/css/application.css', `text/css`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    return res.end(resBody);
  }

  if(req.method === `GET` && req.url === `/static/assets/css/application.css`) {
    const resBody = fs.readFileSync('./index.html');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end(resBody);
  }

  if(req.method === `GET` && req.url === `/static/assets/images/dog.jpg`) {
    const resBody = fs.readFileSync('./index.html');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    return res.end(resBody);
  }

});





const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
