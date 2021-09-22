const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    // IP address here, as a string
    port: 50542, 
    // PORT number here,
  });
  const name = 'KAN';
  // interpret incoming data as text
  conn.setEncoding("utf8");
  //below adjusts the connect function to handle incoming data
  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
};

console.log("Connecting ...");
connect();