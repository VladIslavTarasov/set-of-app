const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res, next) => {
  if (!req.query.id) {
    next();
    return
  }
  try {
    const tasks = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    const updateTasks = {
      ...tasks,
      [req.params.date]: tasks[req.params.date].map(task =>
        task.id === req.body.id
          ? { ...req.body, description: req.body.description.split('\n') }
          : task
      ),
    };

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(updateTasks));

    res.status(200).status(200).json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
