const express = require("express");
const Employees = require("../models/employees");

const router = new express.Router();

router.post("/postemployee", async (req, res) => {
  const user = new Employees(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/getemployees", async (req, res) => {
  try {
    const emps = await Employees.find({});
    res.send(emps);
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/employee/login", async (req, res) => {
  try {
    const employee = await Employees.findByCredentials(
      req.body.username,
      req.body.password
    );

    res.send(employee);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/employee/setAvailablity/:id", async (req, res) => {
  // const updates = Object.keys(req.body);
  // const allowedUpdates = ["daysOfWork"];

  try {
    // updates.forEach((update) => (req.employee[update] = req.body[update]));
    // await req.employee.save();
    // res.send(req.employee);
    const employee = await Employees.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!employee) {
      return res.status(404).send();
    }

    res.send(req.employee);
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
