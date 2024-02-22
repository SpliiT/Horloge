function horloge() {
  const date = new Date();
  const heures = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();
  const hour = heures * 30;
  const minute = minutes * 6;
  const second = secondes * 6;
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}
setInterval(horloge, 1000);

function DigiHorloge() {
    let now = new Date();
    let heure = now.getHours();
    let minute = now.getMinutes();
    let seconde = now.getSeconds();
    let miliseconde = now.getMilliseconds();
    heure = heure < 10 ? "0" + heure : heure;
    minute = minute < 10 ? "0" + minute : minute;
    seconde = seconde < 10 ? "0" + seconde : seconde;
    miliseconde = miliseconde < 100 ? "0" + miliseconde : miliseconde;
  
    let horloge = heure + ":" + minute + ":" + seconde + ":" + miliseconde;
  
    document.getElementById("horloge").innerHTML = horloge;
      setTimeout(DigiHorloge, 50);
  }
    DigiHorloge();