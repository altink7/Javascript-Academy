function calculate(kaufArt) {
    console.log("Calculating ...");
    let appleAktie = new Aktie("Apple (AAPL)", 150, 20);
    let teslaAktie = new Aktie("Tesla (TSLA)", 200, 15);
    let amazonAktie = new Aktie("Amazon (AMZN)", 100, 10);
    let googleAktie = new Aktie("Google (GOOGL)", 120, 12);


    let appleAnzahl = parseFloat(document.getElementById('apple-stock').value);
    let teslaAnzahl = parseFloat(document.getElementById('tesla-stock').value);
    let amazonAnzahl = parseFloat(document.getElementById('amazon-stock').value);
    let googleAnzahl = parseFloat(document.getElementById('google-stock').value);

    let depot = new Depot();

    for (let i = 0; i < appleAnzahl; i++) {
        depot.addAktie(appleAktie);
    }

    for (let i = 0; i < teslaAnzahl; i++) {
        depot.addAktie(teslaAktie);
    }

    for (let i = 0; i < amazonAnzahl; i++) {
        depot.addAktie(amazonAktie);
    }

    for (let i = 0; i < googleAnzahl; i++) {
        depot.addAktie(googleAktie);
    }

    depot.berechneTotalPrice(kaufArt);

    let depotOutput = depot.toString();

    document.getElementById('transaction-output').innerHTML = depotOutput;
}


document.getElementById("calculate-button")
    .addEventListener('click', () => {
        event.preventDefault();
        calculate("einkauf")
    });

document.getElementById("calculate-button-verkauf")
    .addEventListener('click', () => {
        event.preventDefault();
        calculate("verkauf")
    });
