const express = require("express");
const router = express.Router();
const userData = require("../data/users");

async function middlewareFunction(req, res, next) {
    const AuthCookie = req.cookies.AuthCookie;
    var user = await userData.userBySession(AuthCookie);
    var authenticated = user !== undefined;
    if (authenticated) {
        next();
    } else {
        var data = {
            pageTitle: "Error: 403",
            pageDescription: "User is not logged in.",
        };
        res.status(403).render("error", data);
    }
}

router.get("/", middlewareFunction, async (req, res) => {
    const AuthCookie = req.cookies.AuthCookie;
    var user = await userData.userBySession(AuthCookie);
    var authenticated = user !== undefined;

    if (authenticated) {
        data = {
            pageTitle: "User Info",
            user: user,
        };

        res.render("private", data);
    } else {
    }
});

module.exports = router;
