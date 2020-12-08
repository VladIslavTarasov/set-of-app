const fs = require('fs');
const path = require('path');

const { successResponse, failureResponse } = require('../responses');

module.exports = res => {
  try {
    const palette = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'))).palette;

    res.status(200).json(
      successResponse({
        palette: Object.keys(palette).length ? palette : null,
      })
    );
  } catch (e) {
    res.json(failureResponse(null));
  }
};
