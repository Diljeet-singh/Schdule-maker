// const { response } = require("express");

const submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const obj = {
    owner: document.querySelector(".name").value,
    username: document.querySelector(".userName").value,
    password: document.querySelector(".password").value,
  };

  console.log(obj);
  const jsobj = JSON.stringify(obj);
  fetch("/postemployee", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())

    .then((json) => {
      if (json.errors) {
        return alert("Please fill the details correctly");
      }

      alert("Employee added successfully");
      window.location.replace("/");
    });
});
