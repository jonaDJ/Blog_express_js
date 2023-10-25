const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "The Art of Responsive Web Design",
      snippet:
        "Learn the essential principles and techniques for creating responsive web designs that adapt to various screen sizes and devices. Dive into media queries, flexible layouts, and mobile-first strategies.",
    },
    {
      title: "JavaScript Fundamentals: Variables and Data Types",
      snippet:
        "Explore the fundamental concepts of JavaScript programming, including variables, data types, and how to use them effectively in your web development projects.",
    },
    {
      title: "Optimizing Website Performance for Better User Experience",
      snippet:
        "Discover practical tips and strategies for optimizing website performance, improving page load times, and enhancing the overall user experience on your web applications.",
    },
    {
      title: "Mastering CSS Grid Layouts",
      snippet:
        "Unlock the power of CSS Grid Layouts to create complex, grid-based designs in your web projects. Dive into grid properties, templates, and responsive layout techniques.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
