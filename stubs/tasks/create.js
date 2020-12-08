const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    const updateTasks = {
      ...db.tasks,
      [req.params.date]: [
        {
          ...req.body,
          id: uuidv4(),
          complete: false,
          description: req.body.description.split('\n'),
        },
      ].concat(db.tasks[req.params.date] || []),
    };

    fs.writeFileSync(
      path.join(__dirname, '../db.json'),
      JSON.stringify({ ...db, tasks: updateTasks })
    );

    res.status(200).json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
