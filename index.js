var express = require("express");
var eventproxy = require("eventproxy");
var superagent = require("superagent");
var cheerio = require("cheerio");
var app = express();
var url = require("url");
var cnodeUrl = "https://cnodejs.org/";
