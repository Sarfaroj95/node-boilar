const express = require("express");
const Mainuser = require("../controllers/con_user");
const router = express.Router();

router.post("/register", Mainuser.Register);
router.post("/login", Mainuser.Login);
router.post("/userdata", Mainuser.userdata);
router.post("/userdata/:id", Mainuser.getuserById);
router.post("/update/:id", Mainuser.update);
router.delete("/delete/:id", Mainuser.deleteRow);

router.post("/adduser", Mainuser.AddUser);
router.post("/subuser", Mainuser.SubUser);
router.post("/subuser/:id", Mainuser.SubUpdate);
router.delete("/subuser/:id", Mainuser.SubDelete);

module.exports = router;
