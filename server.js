const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.method);
  response.write(`
	<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>Hello there</h1>
</body>
</html>
	`);

  response.end();
});

server.listen(8000, () => {
  console.log("SERVER IS LISTENING ON PORT 8000");
});
