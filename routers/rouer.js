const express = require("express");
const User = require("../controllers/con_user");
const router = express.Router();

router.post("/register", User.Register);

router.post("/login", User.Login);

router.post("/userdata", User.userdata);

router.post("/userdata/:id", User.getuserById);

router.post("/update/:id", User.update);

router.delete("/delete/:id", User.deleteRow);

router.post("/adduser", User.AddUser);
router.post("/subuser", User.SubUser);
router.post("/subuser/:id", User.SubUpdate);
router.delete("/subuser/:id", User.SubDelete);

module.exports = router;
