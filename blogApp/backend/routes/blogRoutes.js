const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

router.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
      // res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
