const http = require('http');

const server = http.createServer( (req, res) => {
  try{
    console.log(`req.url : ${req.url}`)
    if (req.url === '/') {
      res.end('Welcome to our home page');
    } else if (req.url === '/about') {
      res.end('Here is our short history');
    }
    else {  
      res.end(`<h1>Opps!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>`);
    }
  }
  catch(e){
    console.log('-------------some error-----------------');
    console.log(e);
  }

  /*
  res.end(`<h1>Opps!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>`);*/
});

server.listen(5000);