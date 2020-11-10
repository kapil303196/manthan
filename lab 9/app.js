const express = require("express");
const app = express();

const configRoutes = require("./routes");

app.use(express.static("static"));

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
});
