const express = require("express");

const path = require("path");

const app = express();

const port = 3003;

const bodyParser = require("body-parser"); // middleware

app.use(express.static(path.join(__dirname, "public"))); // C:\Users\sober\Desktop\Projekty Node.js\pomodoro-tracker\public

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const trackerRoutes = require("./routes/main");

app.use(trackerRoutes);

app.listen(port);
