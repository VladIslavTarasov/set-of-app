const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')));

    db.palette = req.body;
    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(db));

    res.status(200).json(successResponse(null));
  } catch (e) {
    res.json(failureResponse(null));
  }
};
