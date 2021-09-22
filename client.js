const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    // IP address here, as a string
    port: 50542, 
    // PORT number here,
  });
  const name = "Name: KAN";
  const moveUp = "Move: up";
  const moveDown = "Move: down";
  const moveLeft = "Move: left";
  const moveRight = "Move: right";
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
  
  return conn;
};

module.exports = { connect };