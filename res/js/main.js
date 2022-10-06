const truck = document.getElementById("truck");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const upgrade2 = document.getElementById("upgrade2");

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 50;
let upgrade2Price = 200;

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
