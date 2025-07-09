// This script manages a simple financial tracker for balance, income, and expenses
let balance = 0; // Current balance
let income = 0; // Total income
let expenses = 0; // Total expenses

// Get references to the DOM elements displaying the values
const balanceEl = document.querySelector("#balance");
const incomeEl = document.querySelector("#income");
const expensesEl = document.querySelector("#expenses");

// Reference to the transaction form
const addTransactionForm = document.querySelector("form");

// Loads the current balances into the DOM
const loadBalances = () => {
  balanceEl.textContent = balance;
  incomeEl.textContent = income;
  expensesEl.textContent = expenses;
};

// Handles form submission for adding a transaction
const formSubmitted = (e) => {
  e.preventDefault(); // Prevents default form submission behavior
  console.log("Form Submitted");

  // Get values from the form fields
  const amount = parseInt(addTransactionForm[0].value); // Transaction amount
  const trxType = addTransactionForm[1].value; // Transaction type: 'income' or 'expense'
  const description = addTransactionForm[2].value.trim(); // Transaction description

  // Validate amount
  if (isNaN(amount) || amount < 1) {
    alert("Please enter a positive number in the amount field");
    return;
  }

  // Validate transaction type
  if (trxType == 0) {
    alert("Please select a transaction type");
    return;
  }

  // Validate description
  if (description == "") {
    alert("Please enter a description for the transaction");
    return;
  }

  if (trxType == "income") {
    // If income, increase balance and income
    balance += amount;
    income += amount;
  } else {
    // If expense, check if balance is sufficient
    if (balance < amount) {
      alert("Earn some money first");
      return;
    }

    // Decrease balance and increase expenses
    balance -= amount;
    expenses += amount;
  }

  // Update the DOM with new values
  loadBalances();
};

// Initialize balances on page load
window.onload = loadBalances;

// Attach form submission handler
addTransactionForm.onsubmit = formSubmitted;
