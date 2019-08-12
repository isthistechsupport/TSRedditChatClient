import * as SendBird from "sendbird";
import * as Snoowrap from "snoowrap";
import * as fs from "fs";

let sb : SendBird.SendBirdInstance = new SendBird({"appId": "2515BDA8-9D3A-47CF-9325-330BC37ADA13"});

let creds : {userId:String,token:String} = JSON.parse(fs.readFileSync(".\\credentials.json", "utf8"));

