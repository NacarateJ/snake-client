// establishes a connection with the game server
const net = require("net");

const { IP, PORT, NAME } = require("./constants");

// connect function sets up a connection and returns an object
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Server's: ", data);
  });

  // event listener
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // The conn object that Node returned, represents the connection that we have with the server
  // The conn object is full of useful methods and properties that can now be used to interact with the server!
  return conn;
};

module.exports = { connect };
