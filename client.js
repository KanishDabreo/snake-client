const net = require("net");
const { IP, PORT, name, moveUp, moveDown, moveLeft, moveRight, msg} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    // IP address here, as a string
    port: PORT, 
    // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //below adjusts the connect function to handle incoming data
  conn.on('data', (data) => {
    console.log(data);
  })
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`${name}`);
    setTimeout(() => conn.write(`${moveUp}`), 1000);
    setTimeout(() => conn.write(`${moveDown}`), 1020);
    setTimeout(() => conn.write(`${moveLeft}`), 1030);
    setTimeout(() => conn.write(`${moveRight}`), 1400);
  })
  conn.on('connect', () => {
    console.log("Successfully msgd your classmates");
    //conn.write(`${msg}`);
    setTimeout(() => conn.write(`${msg}`), 5000);
  })
  return conn;
};

module.exports = { connect };