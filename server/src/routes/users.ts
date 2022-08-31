// import path from "path";

import express from "express";
const router = express.Router();

import { User } from "../models/user";

let users: User[] = [];

const fs = require("fs");
fs.readFile("data.json", "UTF-8", (err: any, fileData: any) => {
  if (err) throw err;

  users = JSON.parse(fileData);
});

//This route will send all the users (Read --> Operation)
router.get("/", (req, res) => {
  // console.log(users);

  res.status(200).json({ users });

  // res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.post("/user", (req, res) => {
  const newUser: User = {
    id: req.body.id.toString(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    role: req.body.role,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json({ message: "User Created.", users: users });
});

router.put("/:userId", (req, res) => {
  const userId = req.params.userId;

  const indexOfUserToBeUpdated = users.findIndex((user) => user.id === userId);

  if (indexOfUserToBeUpdated >= 0) {
    users[indexOfUserToBeUpdated] = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleName: req.body.middleName,
      role: req.body.role,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
    };

    return res.status(200).json({ message: "User Updated.", users: users });
  }
  res.status(404).json({ message: "No User with this Id" });
});

router.delete("/:userId", (req, res) => {
  console.log("Delete URL got hit");

  const userId = req.params.userId;
  users = users.filter((user) => user.id !== userId);
  res
    .status(200)
    .json({ message: `User with id ${userId} has been deleted`, users: users });
});

export default router;
