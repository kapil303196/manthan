const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    var data = {
        pageTitle: "Logout",
    };

    res.cookie("AuthCookie", "", { expires: new Date() });
    res.clearCookie("AuthCookie");

    res.render("logout", data);
});

module.exports = router;
