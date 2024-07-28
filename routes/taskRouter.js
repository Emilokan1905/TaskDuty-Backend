const express = require("express");

const { createTask, getALLTask, editTask, deleteTask,
 } = require("../controllers/taskController");

const router = express.Router();

router.post("/create", createTask);

router.get("/get", getALLTask);

router.patch("/:id", editTask);

router.delete("/:id", deleteTask);

module.exports = router;
