let som = 0;
let text = document.querySelector("#name");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let dough = document.querySelector("#dough");
let size = document.querySelector("#size");
let on = document.querySelector("#on");
let add = document.querySelector("#add");
let user = document.querySelector("#user");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let select = document.querySelector("#select");
let fun0 = document.querySelector("#fun0");
let pizzafirst = document.querySelector("#pizzafirst");
let pizzasecound = document.querySelector("#pizzasecound");
let pizzaUz = document.querySelector("#pizzaUz");
let pizza = document.querySelector("#pizza");
let total = document.querySelector("#total");
let btn = document.querySelector("#btn");
let wrapper = document.querySelector(".pizza__wrapper");

function myfun() {
  text.textContent = "name :";
  text.textContent += user.value;
  phone.textContent = "Phone :";
  phone.textContent += tel.value;
  address.textContent = "Address :";
  address.textContent += email.value;
  dough.textContent = "Dough thickness: ";
  dough.textContent += select.value;
  
  function hisobla() {
    if (select.value === "Thin") {
      som += 10;
    } else if (select.value === "Medium") {
      som += 12;
    } else if (select.value === "Thick") {
      som += 15;
    }
  }
  on.textContent = "";
  add.textContent = "";
  hisobla();
  
  if (fun0.children[0].children[0].checked) {
    size.textContent = "Size :";
    size.textContent += "  25 sm";
    som += 10;
  }
  if (fun0.children[1].children[0].checked) {
    size.textContent = "Size :";
    size.textContent += "  30 sm";
    som += 12;
  }
  if (fun0.children[2].children[0].checked) {
    size.textContent = "Size :";
    size.textContent += "  35 sm";
    som += 15;
  }
  if (pizzafirst.children[0].children[0].checked) {
    on.textContent += "  Tomato";
    som += 5;
  }
  if (pizzafirst.children[1].children[0].checked) {
    on.textContent += "  Pickled cucumber";
    som += 5;
  }
  if (pizzasecound.children[0].children[0].checked) {
    on.textContent += "  Turkey meat";
    som += 5;
  }
  if (pizzasecound.children[1].children[0].checked) {
    on.textContent += "  Mushroom";
    som += 5;
  }
  if (pizzaUz.children[0].children[0].checked) {
    on.textContent += "  Olive";
    som += 5;
  }
  if (pizzaUz.children[1].children[0].checked) {
    on.textContent += "  Horse meat";
    som += 5;
  }
  if (pizza.children[0].children[0].checked) {
    add.textContent += "  Pepper  ";
    som += 5;
  }
  if (pizza.children[1].children[0].checked) {
    add.textContent += "  Sausage cucumber  ";
    som += 5;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.add("add");
  total.textContent = "Total :";
  total.textContent += som;
  total.textContent += `💸`
});


//? Dark Light Mode
function ThemeDark() {
  document.documentElement.setAttribute("data-theme", "dark");
  document.cookie = "themeIs=dark; max-age=30758400; path=/";
}
function ThemeLight() {
  document.documentElement.setAttribute("data-theme", "light");
  document.cookie = "themeIs=light; max-age=30758400; path=/";
}
//button function
function themeswitch() {
  if (document.documentElement.getAttribute("data-theme") === "light") {
    // Light to Dark
    ThemeDark();
  } else {
    // Dark to Light
    ThemeLight();
  }
}
function checkColorScheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      ThemeDark();
    } else {
      ThemeLight();
    }
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function checkCookieTheme() {
    var themeIs = getCookie("themeIs");
    console.log(themeIs);
    if (themeIs == null) {
      checkColorScheme();
    } else {
      document.documentElement.setAttribute("data-theme", themeIs);
    }
  }
  window.onload = checkCookieTheme;