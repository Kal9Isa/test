const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("Gello!");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
