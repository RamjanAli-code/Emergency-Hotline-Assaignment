const heartsec = document.getElementsByClassName("heart");
const countsec = document.getElementById("count");
let count = 0;
for (let i = 0; i < heartsec.length; i++) {
    heartsec[i].addEventListener("click", function() {
        count++;
        countsec.textContent = count;
    });
}
const callingsec = document.getElementsByClassName("calling");
const coinsec = document.getElementById("coin");
let coin = 100;
for (let i = 0; i < heartsec.length; i++) {
    callingsec[i].addEventListener("click", function() {
        if (coin < 20) {
            alert(" ⚠️ Warning! Coin less than 20");
        } else {
            const cardsec = callingsec[i].closest(".card");
            const alertname = cardsec.querySelector("p").textContent;
            const alertnumber = cardsec.querySelector("h3").textContent;
            alert(alertname + "  " + alertnumber);

            coin -= 20;
            coinsec.textContent = coin;
        }
    });
}