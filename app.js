const express = require('express');
const mongoose = require('mongoose');
const regestrationRoutes = require('./routes/regestrationRoutes');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes')

const app = express();
const PORT = 3005;

const DB_NAME = 'tasksDatabase';
mongoose.connect(`mongodb+srv://bhavini:bhavini@cluster0.vvkdrux.mongodb.net/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

app.use(express.json());
// Use the CORS middleware
app.use(cors());

app.use('/regestration', regestrationRoutes);
app.use('/auth', authRoutes);
app.use('/tasks',taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
