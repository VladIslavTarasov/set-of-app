const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const tasksList = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'))).tasks;

    const tasks = Object.keys(tasksList).reduce(
      (a, c) =>
        c.includes(req.params.date) ? { ...a, [c]: (a[c] || []).concat(tasksList[c]) } : a,
      {}
    );

    res.status(200).json(
      successResponse({
        tasks,
      })
    );
  } catch (e) {
    res.json(failureResponse(null));
  }
};
