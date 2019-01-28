const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const normalizePort = require("normalize-port");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use("/", index);

const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log(`Listening on port ${port}`);
});
