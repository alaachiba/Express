const express = require("express");
const router = express.Router();
let users = require("../Data");
const { v4: uuid_v4 } = require("uuid");

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/add", (req, res) => {
  let newUser = { ...req.body, id: uuid_v4() };
  users.push(newUser);
  res.send({ msg: "user added !", users });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((el) => el.id != id);
  res.send({ msg: "user deleted", users });
});

router.put("/update/:id", (req, res) => {
    let id = req.params.id;
    let userToEdit = users.find((user) => user.id == id);
    let editeduser={...userToEdit,...req.body}

    users = users.map((user, index) => (
    user.id == id ? editeduser:user
    ));

    res.send({ msg: 'User updated!', users});
});

module.exports = router;