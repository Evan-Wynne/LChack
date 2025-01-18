// track
let budget = 20000000000; // €8 Billion
const budgetDisplay = document.getElementById("budget");
const footerBudgetDisplay = document.getElementById("footer-budget");

// update display
function updateMoney() {
    const formattedBudget = new Intl.NumberFormat("en-IE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(budget);

    budgetDisplay.textContent = `Remaining: ${formattedBudget}`;
    footerBudgetDisplay.textContent = `Remaining: ${formattedBudget}`;
}

// Add event listeners to all items
document.querySelectorAll(".item").forEach((item) => {
    const price = parseInt(item.getAttribute("data-price"));
    let quantity = 0;

    const quantityDisplay = item.querySelector(".quantity");
    const plusButton = item.querySelector(".plus");
    const minusButton = item.querySelector(".minus");

    plusButton.addEventListener("click", () => {
        if (budget - price >= 0) {
            quantity++;
            budget -= price;
            quantityDisplay.textContent = quantity;
            updateMoney();
        }
    });

    minusButton.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            budget += price;
            quantityDisplay.textContent = quantity;
            updateMoney();
        }
    });
});

// Initial budget update
updateMoney();