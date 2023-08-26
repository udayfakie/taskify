const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001;
require("dotenv").config();
const Todo = require("./model/todo");
const bodyParser = require("body-parser");

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("is working");
});

app.get("/todo", async (req, res) => {
  try {
    const text = await Todo.find();
    console.log("Fetched todo items:", text);
    res.json(text);
  } catch (error) {
    console.error("Error fetching todo items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/createdTodo", async (req, res) => {
  const createTodo = req.body.todo;
  const newTodo = new Todo({ title: createTodo });
  await newTodo.save();
  res.json(newTodo);
  console.log(createTodo);
});
app.delete('/:_id', async (req, res) => {
  const todoId = req.params.id;
  try {
    await Todo.findByIdAndDelete(todoId);
    res.status(204).send(); 
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
 console.log(todoId);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
