const regForm = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const birthdate = document.querySelector("#birthdate");
const male = document.querySelector("#gender-male");
const female = document.querySelector("#gender-female");
const address = document.querySelector("#address");
const ukrLang = document.querySelector("#lang-ukr");
const engLang = document.querySelector("#lang-eng");
const italyLang = document.querySelector("#lang-itl");
const subButton = document.querySelector("#submit");
const city = document.querySelector("#city");
const divForTable = document.createElement("div");

const cities = ["Odesa", "Lviv", "Harkiv", "Kyiv"];

cities.forEach(element => {
   const yourCity = document.createElement("option");
   yourCity.value = element;
   yourCity.textContent = element;
   city.appendChild(yourCity);
});

const regData = {
  firstName: "",
  lastName: "",
  birthdate: "",
  gender: "",
  address: "",
  languages: {
    ukrainian: false,
    english: false,
    italian: false
  },
  city: ""
};

function renderTable(obj) {
  regForm.classList.add("hide");
  const table = document.createElement('table');
  
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');

      td1.textContent = key + ":";
      
      if (key === "languages") {
        const languages = Object.keys(obj[key]).filter(lang => obj[key][lang]);
        td2.textContent = languages.join(", ");
      } else {
        td2.textContent = obj[key];
      }

      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
    }
  }
  
  document.body.appendChild(table);
}

subButton.addEventListener("click", event => {
  event.preventDefault();

  regData.firstName = firstName.value;
  regData.lastName = lastName.value;
  regData.birthdate = birthdate.value;
  regData.gender = male.checked ? "male" : "female";
  regData.address = address.value;
  regData.languages.ukrainian = ukrLang.checked;
  regData.languages.english = engLang.checked;
  regData.languages.italian = italyLang.checked;
  regData.city = city.value;

  renderTable(regData);
});
