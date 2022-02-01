const express = require("express");
const app = express();
const people = require("./routes/people");

// Middleware
app.use(express.json());
// People Router
app.use("/api/people", people);

app.listen(5000, () => console.log("Server is listening port 5000..."));
