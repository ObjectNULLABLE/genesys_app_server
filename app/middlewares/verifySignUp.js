const User = require('../models/user');

const ROLES = ["user", "admin", "moderator"]

const emailRegex = RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  if (req.body.username.length <= 2) {
    res.status(400).send({ message: "Failed! Username too short!" });
    return;
  }
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    if (!emailRegex.test(req.body.email)) {
      res.status(400).send({ message: "Failed! Please provide valid email!" });
      return;
    }
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      next();
    });
    //Password
    if (req.body.password.length < 4) {
      res.status(400).send({ message: "Failed! Password should contain at least 4 characters!" });
      return;
    }
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;