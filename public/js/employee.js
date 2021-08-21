const setAva = document.querySelector(".setAva");
const donebtn = document.querySelector(".donebtn");
let currentAccount;

setAva.addEventListener("click", (e) => {
  e.preventDefault();
  if (donebtn.style.opacity === "100") {
    donebtn.style.opacity = "0";
  } else {
    donebtn.style.opacity = "100";
  }

  for (let i = 1; i <= 7; i++) {
    const empA = document.querySelector(`.c${i}`);
    console.log(empA);

    empA.innerHTML = `
        <div class = "empl" style = "text-align: left">
          <input
        type="radio"
        class="emplOn"
        id="emplOn${i}"
        name="onoff${i}"
        />
        <label for="on" class='container'> On </label><br>
  
        <input 
        type="radio"
        class="emplOff${i}"
        id="emplOff${i}"
        name="onoff${i}"/>
        <label for="off" class="container"> Off </label><br>
  
        </div>
    `;
  }
});

donebtn.addEventListener("click", (e) => {
  e.preventDefault();

  for (let i = 0; i < 7; i++) {
    const OnOff = document.querySelector(`.c${i}`);

    if (document.getElementById(`emplOn${i}`).checked) {
      OnOff.innerHTML = ` <div class = "empl" style = "text-align: centre"> ON`;
      let day = document.querySelector(`.day${i}`).innerHTML;
      let arr = day.split(" ");
      this.currentAccount.daysofWork[j] = arr[0];
    }
  }
});
