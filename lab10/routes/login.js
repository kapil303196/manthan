const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const uuid = require("uuid/v4");

router.post("/", async (req, res) => {
    const username = req.body.name;
    const password = req.body.pass;
    var error_message = "Incorrect username/password.";
    var authenticated = false;
    try {
        authenticated = await userData.checkCreds(username, password);
    } catch (e) {
        error_message = "Empty username/password.";
    }

    if (authenticated) {
        var sID = uuid();
        res.cookie("AuthCookie", sID);
        userData.createSession(username, sID);

        res.redirect("/private");
    } else {
        var data = {
            pageTitle: "Homepage - If not logged in",
            error: error_message,
        };
        res.render("index", data);
    }
});

module.exports = router;
