import express from 'express';
import fs from 'fs';
import path from 'path';

const router  = express.Router();

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== "index.js";
  })
  .forEach((file) => {
    require(path.join(__dirname, file))(router);
  });

module.exports = router;