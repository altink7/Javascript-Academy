class Bankkonto {

    constructor() {
        this.errors = []
    }

    validiereEingaben() {
        this.errors = []

        console.log("Remaining Errors:" + this.errors)
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim()
        const income = parseFloat(document.getElementById("income").value.trim())

        if (!firstName) {
            this.errors.push("Vorname darf nicht leer sein");
        }

        if (!lastName) {
            this.errors.push("Nachname darf nicht leer sein");
        }

        if (!phoneNumber) {
            this.errors.push("Telefonnummer darf nicht leer sein");
        }

        if (isNaN(income) || 500 > income) {
            this.errors.push("Einkommen muss höher als 500 sein.")
        }
    }

    istEingabeKorrekt() {
        console.log("AAAAA: " + this.errors)
        return this.errors.length === 0;
    }
}

const bankkonto = new Bankkonto()
const errorMessage = document.getElementById("errorMessage");
const succesMessage = document.getElementById("successMessage");
const formular = document.getElementById("formular");

document.getElementById("submit").addEventListener("click", () => {
    event.preventDefault()

    console.log("Validating Eingaben ...")
    bankkonto.validiereEingaben()

    if (bankkonto.istEingabeKorrekt()) {
        console.log("Eingabe is correct")
        //errorMessage.style.backgroundColor = "red"
        errorMessage.textContent = ""
        succesMessage.textContent = "Erfolgreich"
        changeCssClass(succesMessage, "success")
    } else {
        console.log("Eingabe is not correct")
        errorMessage.textContent = bankkonto.errors.toString()
        succesMessage.textContent = ""
        changeCssClass(succesMessage, "error")
    }
})

function changeCssClass(htmlElement, cssClass) {
    htmlElement.className = "";
    htmlElement.className = cssClass
    //htmlElement.classList = [];
    //htmlElement.classList.add(cssClass);
}

