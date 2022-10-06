const truck = document.getElementById("truck");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const upgrade2 = document.getElementById("upgrade2");
const autoclicker = document.getElementById("autoclicker");

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 50;
let upgrade2Price = 200;
let autoclickerPrice = 1000;
let numberOfAutoclickerCookies = 0;

truck.onclick = () => {
  numberOfCookies += numberOfCookiesOnClick;
  counter.innerHTML = `Počet: ${numberOfCookies}`;
};

upgrade.onclick = () => {
  if (numberOfCookies >= upgradePrice) {
    numberOfCookies -= upgradePrice;
    upgradePrice *= 2;
    upgrade.innerHTML = `Buy upgrade: ${upgradePrice}`;
    numberOfCookiesOnClick += 1;
    counter.innerHTML = `Počet: ${numberOfCookies}`;
  }
};

upgrade2.onclick = () => {
  if (numberOfCookies >= upgrade2Price) {
    numberOfCookies -= upgrade2Price;
    upgrade2Price *= 2;
    upgrade2.innerHTML = `Buy better upgrade: ${upgrade2Price}`;
    numberOfCookiesOnClick += 10;
    counter.innerHTML = `Počet: ${numberOfCookies}`;
  }
};

autoclicker.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    numberOfCookies -= autoclickerPrice;
    counter.innerHTML = `Počet: ${numberOfCookies}`;
    if (numberOfAutoclickerCookies == 0) {
      setInterval(() => {
        numberOfCookies += numberOfAutoclickerCookies;
        counter.innerHTML = `Počet: ${numberOfCookies}`;
      }, 1000);
    }
    numberOfAutoclickerCookies++;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
  }
};
