class FormValidator {
    constructor(form) {
        this.errors = [];
    }

    validate() {
        this.errors = [];
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const country = document.getElementById("country").value;
        const terms = document.getElementById("terms").checked;
        const income = parseFloat(document.getElementById("income").value);

        if (!firstName) this.errors.push("Vorname darf nicht leer sein");
        if (!lastName) this.errors.push("Nachname darf nicht leer sein");
        if (!/^\d+$/.test(phone)) this.errors.push("Telefonnummer darf keine Buchstaben enthalten");
        if (!terms) this.errors.push("Die Geschäftsbedingungen müssen akzeptiert werden");
        if (isNaN(income) || income <= 500) this.errors.push("Einkommen muss höher als 500 sein");
    }

    isValid() {
        console.log("Errors:", this.errors);
        return this.errors.length === 0;
    }
}

const form = document.getElementById("businessAccountForm");
const validator = new FormValidator(form);

const updateTermsLabel = () => {
    const country = document.getElementById("country").value;
    const termsLabel = document.getElementById("termsLabel");
    const checkbox = document.getElementById("terms");
    const countryTerms = {
        DE: "Ich akzeptiere die Geschäftsbedingungen von Deutschland",
        AT: "Ich akzeptiere die Geschäftsbedingungen von Österreich",
        CH: "Ich akzeptiere die Geschäftsbedingungen der Schweiz",
    };
    termsLabel.textContent = "";
    termsLabel.appendChild(checkbox);
    termsLabel.append(` ${countryTerms[country]}`);
};

form.country.addEventListener("change", updateTermsLabel);

document.getElementById("submitButton").addEventListener("click", () => {
    validator.validate();
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    if (validator.isValid()) {
        form.style.backgroundColor = "green";
        successMessage.textContent = "Formular erfolgreich übermittelt!";
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = validator.errors.join(", ");
        successMessage.textContent = "";
    }
});

document.getElementById("showAccountButton").addEventListener("click", () => {
    const accountData = {
        Vorname: form.firstName.value,
        Nachname: form.lastName.value,
        Telefonnummer: form.phone.value,
        Geschlecht: form.gender.value,
        Land: form.country.value,
        Einkommen: form.income.value,
    };
    alert(`Geschäftskonto Daten:\n${JSON.stringify(accountData, null, 2)}`);
});
