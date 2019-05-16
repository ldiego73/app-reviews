#! /usr/bin/env node
const fs = require("fs");
const reviewme = require("../src/index");

const config = JSON.parse(fs.readFileSync("./config.json"));
reviewme.start(config);
