"use strict";
exports.__esModule = true;
var SendBird = require("sendbird");
var fs = require("fs");
var sb = new SendBird({ "appId": "2515BDA8-9D3A-47CF-9325-330BC37ADA13" });
var creds = JSON.parse(fs.readFileSync(".\\credentials.json", "utf8"));
