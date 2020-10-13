const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const tasks = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    const updateTasks = {
      ...tasks,
      [req.params.date]: tasks[req.params.date].filter(task => task.id !== req.query.id),
    };

    if (!updateTasks[req.params.date].length) {
      delete updateTasks[req.params.date];
    }

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(updateTasks));

    res.status(200).json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
