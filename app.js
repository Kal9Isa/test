const express = require("express");

const app = express();

app.get("/api/update", (req, res) => {
  res.status(200).send("1.19");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
