const express = require("express");
const Mainuser = require("../controllers/con_user");
const router = express.Router();

router.post("/register", Mainuser.Register);
router.post("/login", Mainuser.Login);
router.get("/userdata", Mainuser.userdata);
router.get("/userdata/:id", Mainuser.getuserById);
router.post("/update/:id", Mainuser.update);
router.delete("/delete/:id", Mainuser.deleteRow);

router.post("/adduser", Mainuser.AddUser);
router.get("/subuser", Mainuser.SubUser);
router.get("/subuser/:id", Mainuser.getSubUserById);
router.post("/subuser/:id", Mainuser.SubUpdate);
router.delete("/subuser/:id", Mainuser.SubDelete);

module.exports = router;
