'use strict';

const fs = require(`fs`).promises;
require(`../../utils/env`);

const {getItemsSuccessResponse} = require(`../../utils/get-response`);

const FILE_NAME = process.env.MOCK_DATA_FILE_NAME;

const ctrlPostsMain = async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILE_NAME);
    const mocks = JSON.parse(fileContent);
    res.json(getItemsSuccessResponse(mocks, {total: mocks.length}));
  } catch (err) {
    res.json(getItemsSuccessResponse([], {total: 0}));
  }
};

module.exports = {
  ctrlPostsMain,
};
