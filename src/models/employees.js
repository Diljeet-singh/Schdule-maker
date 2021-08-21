const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    minlength: 2,
    maxlength: 6,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  daysOfWork: {
    type: Array,
    default: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  manager: {
    type: Boolean,
    default: false,
  },
});

employeeSchema.methods.generateAuthToken = async function () {
  const employee = this;

  const token = jwt.sign({ _id: employee._id.toString() }, "schedulemaker");
  employee.tokens = employee.tokens.concat({ token });
  await user.save();
  return token;
};

employeeSchema.statics.findByCredentials = async function (username, password) {
  const employees = await Employee.findOne({ username });
  if (!employees) {
    throw new Error("Wrong usernam");
  }
  if (!(password === employees.password)) {
    throw new Error("Wrong password");
  }
  return employees;
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
