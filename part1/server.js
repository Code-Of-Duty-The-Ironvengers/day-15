// MERN
// M - MongoDB
// E - ExpressJS
// R - React
// N - Node

const express = require("express");
// here we import the express package

const app = express();
// here we initialize an http server. Much simpler right??
// home-page -> www.booking.com -> /

// here we tell the server to handle a GET request to the page '/'
console.log("ABSOLUTE PATH TO CURRENT FILE", __dirname);
app.get("/", (request, response) => {
  // here we response with Home Page
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response) => {
  //   response.send("You are in the about us page");
  const string = `${__dirname}/views/about.html`;
  response.sendFile(string);
});

app.get("/contact", (request, response) => {
  response.send("Heres out contact page");
});

// way to handle all next requests
// app.get("*", (request, response) => {
//   response.send("EVerything else");
// });

// Here we "plug" the server and start it
app.listen(5500, () => {
  console.log("Running on localhost:5500");
});

// require('just-a-string') // external modules / packages
// require('./a-path-to-a-file') // internal modules / packages
// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log(request.method);
//   response.write(`
// 	<!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Document</title>
// </head>
// <body>
// 	<h1>Hello there</h1>
// </body>
// </html>
// 	`);

//   response.end();
// });

// server.listen(8000, () => {
//   console.log("SERVER IS LISTENING ON PORT 8000");
// });
