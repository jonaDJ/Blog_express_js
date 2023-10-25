const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

//connet to mongodb
const dbURI =
  "mongodb+srv://jonDJ:test123@blogninja.auubd5k.mongodb.net/blog-ninja";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((resylt) => app.listen(3000))
  .catch((err) => console.log(err));

//EJS engine
app.set("view engine", "ejs");

app.use(express.static("public"));
// You have install morgan to use this
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createAt: -1 })
    .then((result) =>
      res.render("index", { title: "All Blogs", blogs: result })
    )
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//middleware
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
