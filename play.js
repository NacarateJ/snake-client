// connect function sets up a connection and returns an object
const { connect } = require("./client");


const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
};


// setup interface to handle user input from stdin
const setupInput = function () {
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


console.log("Connecting ...");
connect();
setupInput();