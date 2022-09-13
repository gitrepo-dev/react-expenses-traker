const action = require("./action");
const actionTypes = require("./types");
const saga = require("./saga");
const services = require("./services");
const reducer = require("./reducer");
const interfaces = require("./interface");

module.exports = [
  action,
  actionTypes,
  saga,
  services,
  reducer,
  interfaces
];
