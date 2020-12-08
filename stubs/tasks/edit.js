const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    const updateTasks = {
      ...db.tasks,
      [req.params.date]: db.tasks[req.params.date].map(task =>
        task.id === req.body.id ? { ...task, ...req.body } : task
      ),
    };

    fs.writeFileSync(
      path.join(__dirname, '../db.json'),
      JSON.stringify({ ...db, tasks: updateTasks })
    );

    res.status(200).status(200).json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
