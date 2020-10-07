const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const seeds = require("./scripts/seedDB")
require ("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    app.use(express.static(path.join(__dirname, "/client/build")));
    // Express will serve up the front-end index.html file if it doesn't recognize the route
    app.get('*', function (req, res) {
        const index = path.join(__dirname, '/client/build', 'index.html');
        res.sendFile(index);
    });
}

app.use(routes);

app.use(passport.initialize());

require("./config/pass")(passport);

app.use("/api/users", users);

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log(`🌎 ==> API server now on port ${PORT}!`);
        seeds.up(db.Creel);
    });
});

