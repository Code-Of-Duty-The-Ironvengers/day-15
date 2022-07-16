const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public")); // makes whatever is in the public folder accessible to everyone
app.set("view engine", "hbs");
// tells express that whenever response.render is called, to look for hbs files inside of the views folder

const students = [
  { name: "Kira" },
  { name: "Vicent" },
  { name: "Guillermo" },
  { name: "Daiane" },
  { name: "Tony" },
  { name: "Asem" },
  { name: "Pelayo" },
  { name: "Maxime" },
  { name: "João" },
  { name: "Tiffany" },
  { name: "Elvan" },
  { name: "Nico" },
  { name: "Diana" },
  { name: "Palash" },
];

app.get("/", (request, response) => {
  //   response.send("Back in the beggining");
  response.render("home-page", {
    mufasa: students,
    isCool: false,
    title: "Home Page",
  });
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About page" });
});

app.listen(3000, () => {
  console.log("Ok, this is a starting server on port 3000");
});

// MVC  MVC Architechture, or MVC Pattern
// Model -> we'll see next week ,I think -> connection to the DB, database schemas, etc
// View -> we've been using it but not calling it like that -> view is, literally, what the user receives
// Controller -> we've been seeing it, but not calling it like that -> the thing that handles requests
