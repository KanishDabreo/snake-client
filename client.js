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
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.write(`${name} has connected!!!`);
  
  //below adjusts the connect function to handle incoming data
  conn.on('data', (data) => {
    console.log(data);
  })
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })  
  return conn;
};

module.exports = connect;