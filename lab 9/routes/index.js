const path = require("path");

const constructorMethod = (app) => {
    app.use("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../static/index.html"));
    });
};

module.exports = constructorMethod;
