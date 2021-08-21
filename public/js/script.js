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

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

let currentAccount;

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

login.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username == inputLoginUsername.value
  );

  console.log(currentAccount.password);

  if (
    currentAccount?.password === inputLoginPin.value &&
    currentAccount.manager
  ) {
    window.location.replace("/manager");
  } else if (
    currentAccount?.password === inputLoginPin.value &&
    !currentAccount.manager
  ) {
    window.location.replace("/employee");
  } else {
    alert("Wrong password or username");
  }
});
