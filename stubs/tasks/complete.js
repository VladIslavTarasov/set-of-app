const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    db.tasks[req.params.date].forEach(task => {
      if (task.id === req.body.id) {
        task.complete = true;
      }
    });

    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(db));

    res.json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
