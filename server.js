const http = require('http');
const fs = require("fs");

const getContentType = (ext) => {
  if(ext === "css") return "text/css";
  if(ext === "jpg") return "image/jpeg";
}

const server = http.createServer((req, res) => {
  // Your code here

  // To serve up the html
  if(req.method === `GET` && req.url === `/`) {
  const fileContents = fs.readFileSync(`./index.html`, `utf-8`);

  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/html`);
  res.end(fileContents);

  };

  // To serve up the css
  if(req.method === `GET` && req.url === `/static/css/application.css`) {
    const fileContents = fs.readFileSync(`./assets/css/application.css`, `utf-8`);

    res.statusCode = 200;
    res.setHeader(`Content-Type`, `text/css`);
    res.end(fileContents);
  };

  // To serve up the jpeg
  if(req.method === `GET` && req.url === `/static/images/dog.jpg`) {
    const fileContents = fs.readFileSync(`./assets/images/dog.jpg`, `utf-8`);

    res.statusCode = 200;
    res.setHeader(`Content-Type`, `image/jpeg`);
    res.end(fileContents);
  };






  // if(req.method === `GET` && req.url.startsWith(`/static`)) {
  //   const reqUrl = req.url;
  //   console.log(`req url: `, reqUrl);
  //   const urlParts = reqUrl.split(`/static`);
  //   console.log(`url parts: `, urlParts);
  //   const urlPath = urlParts[1];
  //   console.log(`url path: `, urlPath);

  //   const ext = urlPath.split(".")[1];

  //   const responseBody = fs.readFileSync(`./assets/${urlPath}`);

  //   const contentType = getContentType();
  //   res.statusCode = 200;
  //   res.setHeader(`Content-Type`, contentType);
  //   return res.end(responseBody);
  // }

});





const port = 5002;

server.listen(port, () => console.log('Server is listening on port', port));
