const express = require("express");
const router = express.Router();
const request = require("superagent");
const cheerio = require("cheerio");
require("superagent-charset")(request);
const config = require("./config");
const utils = require("./utils");
module.exports = { express, router, request, cheerio, config, utils };
