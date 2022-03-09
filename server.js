const express = require("express");
const servesStatic = require("serve-static");
const path = require("path");

const app = express();

//* serves files from our dist
//* directory which now contains the index.html file

app.use("/", serveStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 8080;
app.listen(port);

console.log("listening on port: " + port);
