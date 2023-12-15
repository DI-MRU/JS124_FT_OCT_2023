// app.js

const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3008;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// Connect to SQLite database
const db = new sqlite3.Database('todos.db');

// Create 'todos' table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL,
    completed BOOLEAN
  )
`);

// CRUD operations

// Create a new todo
app.post('/todos', (req, res) => {
    const { task, completed } = req.body;
    db.run('INSERT INTO todos (task, completed) VALUES (?, ?)', [task, completed], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Todo created successfully' });
    });
  });
// Read all todos
app.get('/todos', (req, res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Read a todo by ID
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM todos WHERE id = ?', id, (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.json(row);
    });
  });

// Update a todo by ID
app.patch('/todos/:id', (req, res) => {
    const { task, completed } = req.body;
    const id = req.params.id;
    db.run('UPDATE todos SET task = ?, completed = ? WHERE id = ?', [task, completed, id], (err) => {
        if (err) {
            console.error(err.message); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ message: 'Todo updated successfully' });
    });
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM todos WHERE id = ?', id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Todo deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
