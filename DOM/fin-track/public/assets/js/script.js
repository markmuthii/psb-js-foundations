// This script manages a simple financial tracker for balance, income, and expenses
let balance = 0; // Current balance
let income = 0; // Total income
let expenses = 0; // Total expenses

let transactions = [];

let filteredTransactions = [];

// Get references to the DOM elements displaying the values
const balanceEl = document.querySelector("#balance");
const incomeEl = document.querySelector("#income");
const expensesEl = document.querySelector("#expenses");

// Reference to the transaction form
const addTransactionForm = document.querySelector("form");

const transactionsTableBody = document.getElementById(
  "transactions-table-body"
);

const typeFilterEl = document.getElementById("filter-type");
const descriptionFilterEl = document.getElementById("filter-description");
const dateRangeFilterEl = document.getElementById("flatpickr-range");

// Loads the current balances into the DOM
const loadBalances = () => {
  balanceEl.textContent = balance;
  incomeEl.textContent = income;
  expensesEl.textContent = expenses;
};

const loadTransactions = (transactions) => {
  let output = "";

  transactions.forEach((transaction, i) => {
    output += `
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          ${transaction.id}
        </th>
        <td class="px-6 py-4">${transaction.amount}</td>
        <td class="px-6 py-4">${transaction.date}</td>
        <td class="px-6 py-4">${transaction.trxType}</td>
        <td class="px-6 py-4">${transaction.description}</td>
      </tr>
    `;
  });

  transactionsTableBody.innerHTML =
    output || "<p class='text-center'>No transactions</p>";
};

const filterTransactions = (type, description, dateRange) => {
  filteredTransactions = transactions;

  if (type) {
    filteredTransactions =
      type === "all"
        ? filteredTransactions
        : filteredTransactions.filter((transaction) => {
            return (
              transaction.trxType === type[0].toUpperCase() + type.slice(1)
            );
          });
  }

  if (description) {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(description.toLowerCase());
    });
  }

  if (dateRange) {
    const dates = dateRange.split(" to ");

    const [start, end] = dates;

    filteredTransactions = filteredTransactions.filter((transaction) => {
      let [day, month, year] = transaction.date.split("/");
      month = parseInt(month) - 1;

      const trxDate = new Date(year, month, day);

      const startDate = new Date(start);
      const endDate = new Date(end);

      console.log({ startDate, endDate, trxDate });

      return (
        trxDate.getTime() >= startDate.getTime() &&
        trxDate.getTime() <= endDate.getTime()
      );
    });
  }

  loadTransactions(filteredTransactions);
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

  // income / expense
  // Income / Expense

  console.log(trxType[0].toUpperCase() + trxType.slice(1));

  console.log(new Date().toLocaleDateString());

  const transaction = {
    id: transactions.length + 1,
    date: new Date().toLocaleDateString(),
    amount,
    trxType: trxType[0].toUpperCase() + trxType.slice(1),
    description,
  };

  transactions.push(transaction);

  localStorage.setItem(
    "cashFlow",
    JSON.stringify({
      balance,
      income,
      expenses,
    })
  );

  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Update the DOM with new values
  loadBalances();

  loadTransactions(transactions);
};

// Initialize balances on page load
window.onload = () => {
  const cashFlow = JSON.parse(localStorage.getItem("cashFlow"));
  transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  filteredTransactions = transactions;

  console.log(transactions);

  balance = cashFlow?.balance || 0;
  income = cashFlow?.income || 0;
  expenses = cashFlow?.expenses || 0;

  loadBalances();
  loadTransactions(transactions);
};

// Attach form submission handler
addTransactionForm.onsubmit = formSubmitted;

typeFilterEl.onchange = (e) => {
  filterTransactions(e.target.value, descriptionFilterEl.value);
};

descriptionFilterEl.onkeyup = (e) => {
  filterTransactions(typeFilterEl.value, e.target.value);
};

dateRangeFilterEl.onchange = (e) => {
  if (e.target.value.includes("to")) {
    filterTransactions(
      typeFilterEl.value,
      descriptionFilterEl.value,
      e.target.value
    );
  }
};
