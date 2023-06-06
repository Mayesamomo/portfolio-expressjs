const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const sequilize = require("./config")
