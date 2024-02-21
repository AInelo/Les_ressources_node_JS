const express = require("express");
const { connect } = require("./connect");
const { Router } = require("./routes");

const app = express();

connect();

app.use("/", Router);

app.listen(4007, () => {
  console.log("Started");
});
