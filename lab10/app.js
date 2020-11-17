const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const configRoutes = require("./routes");
const userData = require("./data/users");
const app = express();

app.use(async function (req, res, next) {
    console.log("Current Timestamp:", new Date().toUTCString());
    console.log("Request Method", req.method);
    console.log("Request Route", req.originalUrl);

    const AuthCookie =
        req.cookies && req.cookies.AuthCookie ? req.cookies.AuthCookie : false;
    var user = await userData.userBySession(AuthCookie);
    var authenticated = user !== undefined;
    if (authenticated) {
        console.log("Authenticated User");
    } else {
        console.log("Non-Authenticated User");
    }
    next();
});
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
configRoutes(app);

app.listen(3000, () => {
    console.log("Routes running on http://localhost:3000");
});
