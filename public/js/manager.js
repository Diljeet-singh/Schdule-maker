// const { post } = require("request");

const login = document.querySelector(".loginBtn");

// const account1 = {
//   owner: "Diljeet Singh",
//   username: "ds",
//   pin: 1111,
//   daysofWork: [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ],
//   onOff: [],
//   manager: true,
// };

// const account2 = {
//   owner: "Hardik Saxena",
//   username: "hs",
//   pin: 2222,
//   daysofWork: ["Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
//   onOff: ["OFF", "ON", "ON", "ON"],
//   manager: false,
// };

// const account3 = {
//   owner: "Snehdeep Singh",
//   username: "ss",
//   pin: 3333,
//   daysofWork: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
//   onOff: [],
//   manager: false,
// };

// const account4 = {
//   owner: "Varun Kanda",
//   username: "vk",
//   pin: 4444,
//   daysofWork: ["Monday", "Tuesday", "Thursday", "Saturday", "Sunday"],
//   onOff: [],
//   manager: false,
// };

let accounts = [];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const date = new Date();
let weeks = [];

fetch("/getemployees").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log("error occured");
    } else {
      accounts = [...data];
      console.log(accounts);
    }
  });
});

const lblScheduleWeek = document.querySelector(".headingEmp");
const lblYear = document.querySelector(".year");
const lblMonth = document.querySelector(".month");
const btnChoose = document.querySelector(".choose");
const data = document.querySelector(".data");
const options = document.querySelector(".options");
const donebtn = document.querySelector(".donebtn");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const addEmployee = document.querySelector(".addBtn");

const puttingDates = function () {
  let first = date.getDate() - date.getDay() + 7;

  for (let i = 0; i <= 6; i++) {
    let day = new Date(date.setDate(first)).toISOString().slice(0, 10);
    weeks.push(day);
    const dat = document.querySelector(`.date${i + 1}`);

    const format = weeks[i].toString().split("-");
    dat.innerHTML = `${format[2]}`;
    lblYear.innerHTML = `${format[0]}`;
    lblMonth.innerHTML = `${format[1]}`;
    first += 1;
  }
};

puttingDates();

btnChoose.addEventListener("click", (e) => {
  e.preventDefault();

  if (donebtn.style.opacity === "100") {
    donebtn.style.opacity = "0";
  } else {
    donebtn.style.opacity = "100";
  }
  let c = 0;
  if (data.querySelector(".emp") === null) {
    for (let i = 1; i <= 7; i++) {
      // i can be considered as dayno
      let empAvab = document.querySelector(`.c${i}`);

      empAvab.innerHTML = "";
      let accs;
      accs = accounts
        .filter((acc) => acc.daysOfWork.includes(days[i - 1]))
        .flatMap((ac) => ac.owner);
      accs.forEach(function (name) {
        c++;
        const html = `
        <div class = "empl" style = "text-align: left">
          <input
        type="radio"
        class="emp${i} emp"
        id = "emp${c}"
        name="employee${c}"
        value="${name}"
        />
        <label for="Employee${c}" class='container'> ${name}</label><br>

        </div>
    `;
        empAvab.insertAdjacentHTML("afterend", html);
      });
    }
  }
});

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

options.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

addEmployee.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace("/addEmployee");
});
