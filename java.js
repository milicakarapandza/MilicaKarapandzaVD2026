let lokacije = ["Dolomiti", "Išgl", "Kranjska Gora", "Skopelos", "Tara"];

function brojDana(od, doo) {
    let d1 = new Date(od);
    let d2 = new Date(doo);
    let razlika = (d2 - d1) / (1000 * 60 * 60 * 24);
    return razlika;
}

function formatIme(ime, prezime) {
    return ime.trim().charAt(0).toUpperCase() + ime.slice(1).toLowerCase() + " " +
           prezime.trim().toUpperCase();
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let lokacija = document.getElementById("location").value;
    let od = document.getElementById("date-from").value;
    let doo = document.getElementById("date-to").value;
    let ime = document.getElementById("first-name").value;
    let prezime = document.getElementById("last-name").value;

    if (lokacija === "" || od === "" || doo === "") {
        alert("Popunite sva polja!");
        return;
    }

    let dani = brojDana(od, doo);
    let punoIme = formatIme(ime, prezime);

    let cenaPoDanu;
    switch(lokacija) {
        case "Dolomiti": cenaPoDanu = 120; break;
        case "Išgl": cenaPoDanu = 150; break;
        case "Kranjska Gora": cenaPoDanu = 90; break;
        case "Skopelos": cenaPoDanu = 110; break;
        case "Tara": cenaPoDanu = 70; break;
        default: cenaPoDanu = 100;
    }

    let ukupno = dani * cenaPoDanu;

    prikaziRezultat(punoIme, lokacija, dani, ukupno);
});


function prikaziRezultat(ime, lokacija, dani, cena) {
    let div = document.createElement("div");

    div.innerHTML =
    "<h3>Rezervacija uspešna!</h3>" +
    "<p><b>Korisnik:</b> " + ime + "</p>" +
    "<p><b>Lokacija:</b> " + lokacija + "</p>" +
    "<p><b>Broj dana:</b> " + dani + "</p>" +
    "<p><b>Ukupna cena:</b> " + cena + "€</p>";

    div.style.background = "#57595B";
    div.style.color = "#452829";
    div.style.padding = "15px";
    div.style.marginTop = "20px";
    div.style.borderRadius = "10px";

    document.querySelector(".form-container").appendChild(div);
}

function uvecaj(element) {
    element.style.transform = "scale(1.05)";
}

function vrati(element) {
    element.style.transform = "scale(1)";
}

for (let i = 0; i < lokacije.length; i++) {
    console.log("Dostupna lokacija: " + lokacije[i]);
}