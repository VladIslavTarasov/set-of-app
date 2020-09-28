const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const tasks = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    const updateTasks = {
      ...tasks,
      [req.params.date]: (tasks[req.params.date] || []).concat({
        ...req.body,
        id: uuidv4(),
        complete: false,
        description: req.body.description.split('\n'),
      }),
    };

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(updateTasks));

    res.status(200).json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
