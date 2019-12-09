const User = require("../model/mod_user");
const Adduser = require("../model/mod_add_user");
const { normalizeErrors } = require("../helper/mongoose");

//register part
exports.Register = function(req, res) {
  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (err) {
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    } else {
      if (existingUser) {
        return res.status(422).send({
          errors: [
            { title: "Invalid email", details: "Email is already exists" }
          ]
        });
      } else {
        const user1 = req.body;
        //delete user1.passwordConfirmation;
        const user = new User(user1);
        user.save(function(err) {
          if (err) {
            return res
              .status(422)
              .send({ errors: normalizeErrors(err.errors) });
          } else {
            return res.json({ register: true });
          }
        });
      }
    }
  });
  // res.json({username, email});
};
//register end part

// login part
exports.Login = function(req, res) {
  const { email, password } = req.body;

  User.findOne({ email: email, password: password }, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }

    if (!user) {
      return res.status(422).send({
        errors: [
          { title: "Invalid User", details: "Please Check Email or Password" }
        ]
      });
    }
    return res.json({ success: true, data: user });
  });
  // res.json({'success' : true});
};
// fatch uerdata
exports.userdata = function(req, res) {
  User.find({})
    .select("username")
    .select("email")
    .select("birthday")
    // .select("password")
    .exec(function(err, foundUsers) {
      res.json(foundUsers);
    });
};

exports.getuserById = function(req, res) {
  User.findById({ _id: req.params.id })
    .select("username")
    .select("email")
    .select("birthday")
    // .select("password")
    .exec(function(err, foundUsers) {
      res.json(foundUsers);
    });
};

//update section
exports.update = function(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      username: req.body.username,
      email: req.body.email,
      birthday: req.body.birthday,
      password: req.body.password
    },
    {
      new: true
    },
    (err, doc) => {
      if (err) {
        return res.status(422).send({ errors: normalizeErrors(err.errors) });
      } else {
        res.json({ success: true });
        console.log("Updated...");
      }
    }
  );
};

// Delete user byID
exports.deleteRow = function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log("err");
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }
    console.log("Deleted...");
    // return res.status(200).send("done");
    return res.json({ Delete: true });
  });
};

// add user
exports.AddUser = function(req, res) {
  Adduser.findOne({ email: req.body.email }, function(err, existingUser) {
    if (err) {
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    } else {
      if (existingUser) {
        return res.status(422).send({
          errors: [{ title: "Invalid", details: "Email no is already exists" }]
        });
      } else {
        const adduser = req.body;
        const user = new Adduser(adduser);
        user.save(function(err) {
          if (err) {
            return res
              .status(422)
              .send({ errors: normalizeErrors(err.errors) });
          } else {
            return res.json({ register: true });
          }
        });
      }
    }
  });
};

exports.SubUser = function(req, res) {
  Adduser.find({})
    .select("name")
    .select("mobile")
    .select("email")
    .exec(function(err, foundUsers) {
      res.json(foundUsers);
    });
};

exports.SubUpdate = function(req, res) {
  Adduser.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email
    },
    {
      new: true
    },
    (err, doc) => {
      if (err) {
        return res.status(422).send({ errors: normalizeErrors(err.errors) });
      } else {
        res.json({ success: true });
        console.log("Updated...");
      }
    }
  );
};

exports.SubDelete = function(req, res) {
  Adduser.findByIdAndRemove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log("err");
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }
    console.log("Deleted...");
    // return res.status(200).send("done");
    return res.json({ Delete: true });
  });
};
