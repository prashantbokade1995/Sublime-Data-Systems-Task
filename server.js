// // const express = require('express');
// // const cors = require('cors');
// // const mongoose = require('mongoose');



// // // Connect to MongoDB
// // mongoose.connect('mongodb://127.0.0.1:27017/todo_list')
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //   })
// //   .catch((error) => {
// //     console.error('Failed to connect to MongoDB', error);
// //   });

// // // Define the TODO schema
// // const todoSchema = new mongoose.Schema({
// //   title: String,
// //   // description: String,
// //   // completed: Boolean
// // });

// // // Create a model based on the schema
// // const Todo = mongoose.model('Todo', todoSchema);

// // // Create an Express.js app
// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Create a route to handle creating a new TODO item
// // app.post('/api/todos', (req, res) => {
// //   const todo = new Todo({
// //     title: req.body.title,
// //     // description: req.body.description,
// //     // completed: req.body.completed
// //   });

// //   todo.save()
// //     .then(() => {
// //       res.status(201).json(todo);
// //     })
// //     .catch((error) => {
// //       res.status(500).json({ error: 'Failed to create TODO item' });
// //     });
// // });

// // // Create a route to fetch all TODO items
// // app.get('/api/todos', (req, res) => {
// //   Todo.find()
// //     .then((todos) => {
// //       res.json(todos);
// //     })
// //     .catch((error) => {
// //       res.status(500).json({ error: 'Failed to fetch TODO items' });
// //     });
// // });

// // // Create a route to fetch a specific TODO item by its ID
// // app.get('/api/todos/:id', (req, res) => {
// //   Todo.findById(req.params.id)
// //     .then((todo) => {
// //       if (todo) {
// //         res.json(todo);
// //       } else {
// //         res.status(404).json({ error: 'TODO item not found' });
// //       }
// //     })
// //     .catch((error) => {
// //       res.status(500).json({ error: 'Failed to fetch TODO item' });
// //     });
// // });

// // // Create a route to update a TODO item
// // app.put('/api/todos/:id', (req, res) => {
// //   Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
// //     .then((todo) => {
// //       if (todo) {
// //         res.json(todo);
// //       } else {
// //         res.status(404).json({ error: 'TODO item not found' });
// //       }
// //     })
// //     .catch((error) => {
// //       res.status(500).json({ error: 'Failed to update TODO item' });
// //     });
// // });

// // // Create a route to delete a TODO item
// // app.delete('/api/todos/:id', (req, res) => {
// //   Todo.findByIdAndRemove(req.params.id)
// //     .then((todo) => {
// //       if (todo) {
// //         res.json({ message: 'TODO item deleted' });
// //       } else {
// //         res.status(404).json({ error: 'TODO item not found' });
// //       }
// //     })
// //     .catch((error) => {
// //       res.status(500).json({ error: 'Failed to delete TODO item' });
// //     });
// // });

// // // Start the server
// // app.listen(8000, () => {
// //   console.log('Server listening on port 8000');
// // });




// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');


// // const MONGODB_URI = process.env.MONGODB_URI

// const MONGODB_URI = "mongodb://127.0.0.1:27017/todo_list";

// const connectDb = async () => {
//     try {
//         await mongoose.connect(MONGODB_URI);
//         console.log("Db connected successfully");
//     } catch (error) {
//         console.log("Error connecting to mongodb", error);
//     }
// };
// connectDb();
// // // Connect to MongoDB
// // mongoose.connect('mongodb://127.0.0.1:27017/todo_list')
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //   })
// //   .catch((error) => {
// //     console.error('Failed to connect to MongoDB', error);
// //   });

// // Define the TODO schema
// const todoSchema = new mongoose.Schema({
//   title: String,
// });

// // Create a model based on the schema
// const Todo = mongoose.model('Todo', todoSchema);

// // Create an Express.js app
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Create a route to handle creating a new TODO item
// app.post('/api/todos', async (req, res) => {
//   try {
//     const todo = new Todo({
//       title: req.body.title,
//     });

//     const savedTodo = await todo.save();
//     res.status(201).json(savedTodo);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create TODO item' });
//   }
// });

// // Create a route to fetch all TODO items
// app.get('/api/todos', async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch TODO items' });
//   }
// });

// // Create a route to fetch a specific TODO item by its ID
// app.get('/api/todos/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ error: 'TODO item not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch TODO item' });
//   }
// });

// // Create a route to update a TODO item
// app.put('/api/todos/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ error: 'TODO item not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update TODO item' });
//   }
// });

// // Create a route to delete a TODO item
// app.delete('/api/todos/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findByIdAndRemove(req.params.id);
//     if (todo) {
//       res.json({ message: 'TODO item deleted' });
//     } else {
//       res.status(404).json({ error: 'TODO item not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete TODO item' });
//   }
// });

// // Start the server
// app.listen(8000, () => {
//   console.log('Server listening on port 8000');
// });





require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI

mongoose.set('strictQuery', false);
const connectDb = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Db connected successfully");
    } catch (error) {
        console.log("Error connecting to mongodb", error);
    }
};
connectDb();


const todoSchema = new mongoose.Schema({
  title: String,
});


const Todo = mongoose.model('Todo', todoSchema);


const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
    });

    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create TODO item' });
  }
});


app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TODO items' });
  }
});


app.get('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'TODO item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TODO item' });
  }
});


app.put('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'TODO item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update TODO item' });
  }
});


app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    if (todo) {
      res.json({ message: 'TODO item deleted' });
    } else {
      res.status(404).json({ error: 'TODO item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete TODO item' });
  }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
