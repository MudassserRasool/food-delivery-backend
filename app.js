

const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/order');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://mern2022:mern2022@ac-1vocr4t-shard-00-00.43aaypx.mongodb.net:27017,ac-1vocr4t-shard-00-01.43aaypx.mongodb.net:27017,ac-1vocr4t-shard-00-02.43aaypx.mongodb.net:27017/?ssl=true&replicaSet=atlas-x4e2nh-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// app.use('/api', async (req, res) => {
//   console.log('sadsa')
// });
// app.use('/api/workouts', workoutRouter);
// app.use('/api/user', router);
app.use('/api/orders', orderRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
