// Mohammad Rahman - CS 310 Lab 3
// One JavaScript file used for the customer form page

const customers = [];

const submitButton = document.getElementById("submitCustomer");
const outputBox = document.getElementById("customerOutput");

if (submitButton) {
    submitButton.addEventListener("click", function () {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;
        const favoriteDrink = document.getElementById("favorite-drink").value;

        const customer = {
            id: customers.length + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            state: state,
            country: country,
            favoriteDrink: favoriteDrink
        };

        customers.push(customer);

        console.clear();
        console.log(customers);

        outputBox.innerHTML = "";

        customers.forEach(function (item) {
            const customerCard = document.createElement("div");
            customerCard.className = "customer-card";

            customerCard.innerHTML = `
                <h3>Customer #${item.id}</h3>
                <p><strong>Name:</strong> ${item.firstName} ${item.lastName}</p>
                <p><strong>Email:</strong> ${item.email}</p>
                <p><strong>State:</strong> ${item.state}</p>
                <p><strong>Country:</strong> ${item.country}</p>
                <p><strong>Favorite Drink:</strong> ${item.favoriteDrink}</p>
            `;

            outputBox.appendChild(customerCard);
        });
    });
}
