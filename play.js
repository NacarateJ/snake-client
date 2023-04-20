// connect function sets up a connection and returns an object
const { connect } = require("./client");
// setup interface to handle user input from stdin 
const { setupInput} = require("./input");


console.log("Connecting ...");

const conn = connect();

setupInput(conn);