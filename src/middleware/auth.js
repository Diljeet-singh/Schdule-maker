const jsonwebtoken = require("jsonwebtoken");
const Employees = require("../models/employees");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "");
    const decoded = jwt.verify(token, "schedulemaker");
    const employee = await Employees.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!employee) {
      throw new Error();
    }

    req.token = token;
    req.employee = employee;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
