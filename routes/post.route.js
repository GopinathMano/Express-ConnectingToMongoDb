const route = require("express").Router();
const service = require("../services/post.service ");

// CRUD operations : route operations

// read /post
route.get("/", service.findpost);

// POST /post
route.post("/", service.insertingPost);

// PUT /post
route.put("/:id", service.updatingPost);

// Delete /post
route.delete("/:id", service.deletePost);

module.exports = route;
