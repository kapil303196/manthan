const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get("/", async (req, res) => {
    var authenticated;
    try {
        var authenticated =
            (await userData.userBySession(req.cookies.AuthCookie)) !==
            undefined;
    } catch (e) {
        authenticated = false;
    }

    if (authenticated) res.redirect("/private");
    else {
        var data = { pageTitle: "Homepage - If not logged in" };
        res.render("index", data);
    }
});

module.exports = router;
