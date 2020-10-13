const express = require('express');
const cors = require('cors');

const create = require('./tasks/create');
const edit = require('./tasks/edit');
const get = require('./tasks/get');
const remove = require('./tasks/delete');
const complete = require('./tasks/complete');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.route('/tasks/:date').get(get).post(create).delete(remove).put(edit);
app.route('/task/compelete/:date').put(complete)

app.listen(port);
