const express = require('express');
const cors = require('cors');

const create = require('./tasks/create');
const edit = require('./tasks/edit');
const get = require('./tasks/get');
const remove = require('./tasks/delete');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.route('/tasks/:date').get(get).post(create).put(edit).delete(remove);

app.listen(port);
