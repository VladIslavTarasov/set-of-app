const express = require('express');
const cors = require('cors');

const createTask = require('./tasks/create');
const editTask = require('./tasks/edit');
const getTasks = require('./tasks/get');
const removeTask = require('./tasks/delete');
const completeTask = require('./tasks/complete');

const getPalette = require('./palette/get');
const createPalette = require('./palette/create');
const editPalette = require('./palette/edit');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.route('/tasks/:date').get(getTasks).post(createTask).delete(removeTask).put(editTask);
app.route('/task/compelete/:date').put(completeTask);
app.route('/palette').get(getPalette).post(createPalette).put(editPalette);

app.listen(port);
