// const userCtrl = require("../controllers/userCtrl");

// const router = require("express").Router();

// router.post("/register", userCtrl.register);

// module.exports = router;

const userCtrl = require("../controllers/userCtrl");
const router = require("express").Router();

router.post("/register", userCtrl.register);

module.exports = router;
