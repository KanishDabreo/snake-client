let connection;
//listens to the input
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  //translates to eng from comp lang ..specifies which language to
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
    console.log("Move: up")
  }
  if (key === "a") {
    connection.write("Move: left");
    console.log("Move: left")
  }
  if (key === "s") {
    connection.write("Move: down");
    console.log("Move: down")
  }
  if (key === "d") {
    connection.write("Move: right");
    console.log("Move: right")
  }
}

module.exports = { setupInput };