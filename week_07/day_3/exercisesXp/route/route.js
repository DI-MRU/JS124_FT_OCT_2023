import express from "express";
const router = express.Router();

const todos = [];
const books = [];

router.get("/", (req, res) => {
  res.send("This my Homepage");
});

router.get("/about", (req, res) => {
  res.send("This my About page");
});

router.get("/todos", (req, res) => {
  res.json(todos);
});

router.post("/todos", (req, res) => {
  const { names, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    names,
    description,
    completed: false,
  };
  if (!names || !description) {
    return res
      .status(400)
      .json({ msg: "Please include names and description" });
  }

  todos.push(newTodo);
  res.json(newTodo);
});

router.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { names, description, completed } = req.body;
  const updatedTodo = todos.find((todos) => todos.id === parseInt(id));

  if (!updatedTodo) {
    return res.status(400).json({ msg: `No todo with the id of ${id}` });
  }

  updatedTodo.names = names;
  updatedTodo.description = description;
  updatedTodo.completed = completed;
  res.json(updatedTodo);
});

router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const deleteTodo = todos.find((todos) => todos.id === parseInt(id));
  if (!deleteTodo) {
    return res.status(400).json({ msg: `No todo with the id of ${id}` });
  }
  todos.splice(todos.indexOf(deleteTodo), 1);
  res.json(deleteTodo);
});
router.get("/books", (req, res) => {
  res.json(books);
});
router.post("/books", (req, res) => {
  const { names, description } = req.body;
  const newBooks = {
    id: books.length + 1,
    names,
    description,
    completed: false,
  };
  if (!names || !description) {
    return res
      .status(400)
      .json({ msg: "Please include names and description" });
  }

  books.push(newBooks);
  res.json(newBooks);
});

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { names, description, completed } = req.body;
  const updatedBooks = books.find((books) => books.id === parseInt(id));

  if (!updatedBooks) {
    return res.status(400).json({ msg: `No books with the id of ${id}` });
  }

  updatedBooks.names = names;
  updatedBooks.description = description;
  updatedBooks.completed = completed;
  res.json(updatedBooks);
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const deleteBooks = books.find((books) => books.id === parseInt(id));
  if (!deleteBooks) {
    return res.status(400).json({ msg: `No books with the id of ${id}` });
  }
  books.splice(books.indexOf(deleteBooks), 1);
  res.json(deleteBooks);
});

export default router;
