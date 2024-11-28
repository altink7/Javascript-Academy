function submitOrder() {
    // Start

    console.log("Submitting Order");

    // 1: Create all Products
    let burger = new Product("Cheese Burger", 5);
    let salad = new Product("Salad", 2);
    let fries = new Product("Fries", 3.5);
    let beverage = new Product("Beverage", 3);

    // 2: Get all values
    console.log("Get All Form Values");
    let burgerAmount = parseFloat(document.getElementById("burger").value);
    let isSalatSelected = document.getElementById("salad").checked;
    let isFriesSelected = document.getElementById("fries").checked;
    let isBeverageSelected = document.getElementById("beverage").checked;

    // 3: create Order based on selected Values
    burger.price *= burgerAmount;
    let order = new Order();

    if (burgerAmount > 0) {
        order.addProduct(burger);
    }

    if (isSalatSelected) {
        order.addProduct(salad);
    }

    if (isFriesSelected) {
        order.addProduct(fries);
    }

    if (isBeverageSelected) {
        order.addProduct(beverage)
    }

    // 4: Calculate and Print Order
    order.calculatePrice();
    document.getElementById("receipt-output").innerHTML = order.toString();


    console.log("Order Submission finished!")
    // Finish
}

document.getElementById("submit-order")
    .addEventListener("click", () => submitOrder());