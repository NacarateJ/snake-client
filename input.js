const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES,
} = require("./constants");


// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  for (const messageKey of Object.keys(MESSAGES)) {
    if (key === messageKey) {
      connection.write(MESSAGES[messageKey]);
    }
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;

  // gets a reference to the process.stdin object, which represents the standard input stream
  const stdin = process.stdin;

  // setRawMode() means that the data from the input stream will be provided as soon as it's available,
  // rather than waiting for the user to press the enter key
  stdin.setRawMode(true);

  // setEncoding("utf8") means that the data from the input stream will be provided as Unicode characters
  stdin.setEncoding("utf8");

  // resume(), resumes the input stream, which means that data will start flowing through the stream.
  stdin.resume();

  // event listener for stdin
  stdin.on("data", handleUserInput);

  // the stdin object returned by setupInput will allow us to listen for keyboard input and react to it
  return stdin;
};

module.exports = { setupInput };