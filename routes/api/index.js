const router = require("express").Router();
const creelRoutes = require("./creels");

router.use("/creels", creelRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
