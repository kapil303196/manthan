const homeRoute = require("./home");
const loginRoute = require("./login");
const privateRoute = require("./private");
const logoutRoute = require("./logout");

function constructorMethod(app) {
    app.use("/", homeRoute);
    app.use("/login", loginRoute);
    app.use("/private", privateRoute);
    app.use("/logout", logoutRoute);

    app.use("*", (req, res) => {
        var data = {
            pageTitle: "Error: 404",
            pageDescription: "Page not found.",
        };
        res.status(404).render("error", data);
    });
}

module.exports = constructorMethod;
