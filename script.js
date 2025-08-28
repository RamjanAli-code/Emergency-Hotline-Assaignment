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
            return;
        } else {
            const cardsec = callingsec[i].closest(".card");
            const alertname = cardsec.querySelector("p").textContent;
            const alertnumber = cardsec.querySelector("h3").textContent;
            alert(alertname + "  " + alertnumber);

            coin -= 20;
            coinsec.textContent = coin;
        }
        const containersec = document.getElementById("container");
        const addcontainer = document.createElement("div");
        const cards = callingsec[i].closest(".card");
        const servicename = cards.querySelector("p").textContent;
        const servicenumber = cards.querySelector("h3").textContent;
        addcontainer.innerHTML = `
        <div class=" bg-gray-300 w-full h-[70px] rounded-xl flex flex-col my-3 px-3 ">
        <p class="text-[#5C5C5C] font-bold text-xl ">${servicename}</p>
        <h3 class="font-bold pb-1 text-2xl">${servicenumber}</h3>

</div> `;
        containersec.appendChild(addcontainer);
        document.getElementById("clear-btn").addEventListener("click", function() {
            containersec.innerHTML = "";
        });
    });
}