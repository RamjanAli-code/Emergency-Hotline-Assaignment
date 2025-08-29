//heart count
const heartsec = document.getElementsByClassName("heart");
const countsec = document.getElementById("count");
let count = 0;
for (let i = 0; i < heartsec.length; i++) {
    heartsec[i].addEventListener("click", function() {
        count++;
        countsec.textContent = count;
    });
}
//call section alert and coin
const callingsec = document.getElementsByClassName("calling");
const coinsec = document.getElementById("coin");
let coin = 100;
for (let i = 0; i < callingsec.length; i++) {
    callingsec[i].addEventListener("click", function() {
        if (coin < 20) {
            alert(" ⚠️ Warning! Coin less than 20");
            return;
        } else {
            const cardsec = callingsec[i].closest(".card");
            const alertname = cardsec.querySelector("p").textContent;
            const alertnumber = cardsec.querySelector("h3").textContent;
            alert("📞 calling " + alertname + " " + alertnumber);

            coin -= 20;
            coinsec.textContent = coin;
        }
        const containersec = document.getElementById("container");
        const addcontainer = document.createElement("div");
        const cards = callingsec[i].closest(".card");
        const servicename = cards.querySelector("p").textContent;
        const tservicename = cards.querySelector("h1").textContent;
        const servicenumber = cards.querySelector("h3").textContent;
        const time = new Date();
        const localtime = time.toLocaleTimeString();
        addcontainer.innerHTML = `
        <div class=" bg-gray-100 w-full h-[70px] rounded-xl flex  my-3 px-3 justify-between items-center ">
        <div>
        <h1 class="font-bold pt-1 text-xl">${tservicename}</h1>
        <h3 class="font-bold pb-1 text-2xl">${servicenumber}</h3>
        </div>
        <div> 
        <p class=" text-[16px] "> ${localtime}</p>
        </div>

</div> `;
        containersec.appendChild(addcontainer);
        document.getElementById("clear-btn").addEventListener("click", function() {
            containersec.innerHTML = "";
        });
    });
}
//copyalert and copy data
const copysec = document.getElementsByClassName("copy");
const copycnt = document.getElementById("copy-count");
let copycount = 0;
for (let i = 0; i < copysec.length; i++) {
    copysec[i].addEventListener("click", function() {

        const cardsec = copysec[i].closest(".card");
        const alertname = cardsec.querySelector("p").textContent;
        const alertnumber = cardsec.querySelector("h3").textContent;
        alert("Copy Number:  " + alertnumber);
        copycount++
        copycnt.textContent = copycount;
        const text = `${alertnumber}`;
        navigator.clipboard.writeText(text);

    });
}