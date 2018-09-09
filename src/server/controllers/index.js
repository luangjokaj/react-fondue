import fs from 'fs';
import path from 'path';

const ctrls = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== "index.js";
  })
  .forEach((file) => {
    const controller = file.replace('.js', '');
    ctrls[controller] = require(path.join(__dirname, controller));
  });

module.exports = ctrls;