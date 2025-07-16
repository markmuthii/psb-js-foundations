// Main function to handle dashboard logic and user interactions
const dashboardFuntionality = () => {
  // This script manages a simple financial tracker for balance, income, and expenses
  // Variables to keep track of financial data
  let balance = 0; // Current balance
  let income = 0; // Total income
  let expenses = 0; // Total expenses

  // Array to store all transaction records
  let transactions = [];

  // Array to store transactions after applying filters
  let filteredTransactions = [];

  // Get references to the DOM elements that show balance, income, and expenses
  const balanceEl = document.querySelector("#balance"); // Shows current balance
  const incomeEl = document.querySelector("#income"); // Shows total income
  const expensesEl = document.querySelector("#expenses"); // Shows total expenses

  // Reference to the form used to add new transactions
  const addTransactionForm = document.querySelector("form");

  // Reference to the table body where transaction records are displayed
  const transactionsTableBody = document.getElementById(
    "transactions-table-body"
  );

  // References to filter input elements for searching transactions
  const typeFilterEl = document.getElementById("filter-type"); // Dropdown to filter by type
  const descriptionFilterEl = document.getElementById("filter-description"); // Input to filter by description
  const dateRangeFilterEl = document.getElementById("flatpickr-range"); // Input to filter by date range

  // Updates the balance, income, and expenses shown on the page
  const loadBalances = () => {
    balanceEl.textContent = balance;
    incomeEl.textContent = income;
    expensesEl.textContent = expenses;
  };

  // Displays the list of transactions in the table
  const loadTransactions = (transactions) => {
    let output = "";

    // Loop through each transaction and create a table row
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

    // If there are no transactions, show a message
    transactionsTableBody.innerHTML =
      output || "<p class='text-center'>No transactions</p>";
  };

  // Filters transactions based on type, description, and date range
  // This helps users search for specific records
  const filterTransactions = (type, description, dateRange) => {
    filteredTransactions = transactions;

    // Filter by type (income, expense, or all)
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

    // Filter by description text
    if (description) {
      filteredTransactions = filteredTransactions.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(description.toLowerCase());
      });
    }

    // Filter by date range (if provided)
    if (dateRange) {
      const dates = dateRange.split(" to ");
      const [start, end] = dates;

      filteredTransactions = filteredTransactions.filter((transaction) => {
        // Convert transaction date to Date object
        let [day, month, year] = transaction.date.split("/");
        month = parseInt(month) - 1;
        const trxDate = new Date(year, month, day);

        // Convert filter start and end dates to Date objects
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Check if transaction date is within the selected range
        return (
          trxDate.getTime() >= startDate.getTime() &&
          trxDate.getTime() <= endDate.getTime()
        );
      });
    }

    // Show the filtered transactions in the table
    loadTransactions(filteredTransactions);
  };

  // Handles form submission for adding a new transaction
  const formSubmitted = (e) => {
    e.preventDefault(); // Prevents page reload when form is submitted
    console.log("Form Submitted");

    // Get values from the form fields
    const amount = parseInt(addTransactionForm[0].value); // Amount entered by user
    const trxType = addTransactionForm[1].value; // Transaction type: 'income' or 'expense'
    const description = addTransactionForm[2].value.trim(); // Description entered by user

    // Validate amount (must be a positive number)
    if (isNaN(amount) || amount < 1) {
      alert("Please enter a positive number in the amount field");
      return;
    }

    // Validate transaction type (must be selected)
    if (trxType == 0) {
      alert("Please select a transaction type");
      return;
    }

    // Validate description (must not be empty)
    if (description == "") {
      alert("Please enter a description for the transaction");
      return;
    }

    // Update balance and income/expenses based on transaction type
    if (trxType == "income") {
      // If income, add to balance and income
      balance += amount;
      income += amount;
    } else {
      // If expense, check if balance is enough
      if (balance < amount) {
        alert("Earn some money first");
        return;
      }

      // Subtract from balance and add to expenses
      balance -= amount;
      expenses += amount;
    }

    // Create a transaction object to store the record
    const transaction = {
      id: transactions.length + 1, // Unique transaction ID
      date: new Date().toLocaleDateString(), // Today's date
      amount, // Transaction amount
      trxType: trxType[0].toUpperCase() + trxType.slice(1), // Capitalize type
      description, // Transaction description
    };

    // Add transaction to the list
    transactions.push(transaction);

    // Save updated balances and transactions to localStorage
    localStorage.setItem(
      "cashFlow",
      JSON.stringify({
        balance,
        income,
        expenses,
      })
    );

    localStorage.setItem("transactions", JSON.stringify(transactions));

    // Update the page with new values
    loadBalances();
    loadTransactions(transactions);
  };

  // Load balances and transactions from localStorage (if available)
  const cashFlow = JSON.parse(localStorage.getItem("cashFlow")); // Get saved balances
  transactions = JSON.parse(localStorage.getItem("transactions") || "[]"); // Get saved transactions
  filteredTransactions = transactions;

  // Set initial values (or defaults if not found)
  balance = cashFlow?.balance || 0;
  income = cashFlow?.income || 0;
  expenses = cashFlow?.expenses || 0;

  // Show initial balances and transactions
  loadBalances();
  loadTransactions(transactions);

  // Attach form submission handler to add transaction form
  addTransactionForm.onsubmit = formSubmitted;

  // Filter by type when the dropdown changes
  typeFilterEl.onchange = (e) => {
    filterTransactions(e.target.value, descriptionFilterEl.value);
  };

  // Filter by description as the user types
  descriptionFilterEl.onkeyup = (e) => {
    filterTransactions(typeFilterEl.value, e.target.value);
  };

  // Filter by date range when the input changes
  // Only filter if the range includes 'to' (i.e., a valid range is selected)
  dateRangeFilterEl.onchange = (e) => {
    if (e.target.value.includes("to")) {
      filterTransactions(
        typeFilterEl.value,
        descriptionFilterEl.value,
        e.target.value
      );
    }
  };
};

// Get reference to the main content area where pages are shown
const contentElement = document.getElementById("content");

// Get reference to navigation menu items
const navItems = document.getElementsByClassName("nav-item");

// HTML content for the dashboard page (shows analytics, add form, and transactions)
const dashboardContent = `

<section class="analytics flex justify-between gap-12">
          <div class="card border-orange-500">
            <div id="balance" class="amount">0</div>
            <div>Balance</div>
          </div>
          <div class="card border-green-500">
            <div id="income" class="amount">0</div>
            <div>Income</div>
          </div>
          <div class="card border-red-500">
            <div id="expenses" class="amount">0</div>
            <div>Expenses</div>
          </div>
        </section>

        <section class="form">
          <form class="flex flex-col max-w-[500px] mx-auto gap-4">
            <input
              type="text"
              placeholder="Enter amount"
              class="form-element"
            />
            <select name="" id="" class="form-element">
              <option value="0">Select Transaction Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <textarea
              name=""
              id=""
              placeholder="Description"
              rows="5"
              class="form-element"
            ></textarea>

            <input
              type="submit"
              class="form-element bg-green-500 cursor-pointer"
              value="Add Record"
            />
          </form>
        </section>

        <section class="transactions space-y-2">
          <div class="table-top">
            <form class="flex gap-4">
              <select name="" id="filter-type" class="form-element">
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <input
                type="text"
                placeholder="Search by description"
                class="form-element"
                id="filter-description"
              />
              <input
                type="text"
                class="input max-w-fit form-element"
                placeholder="YYYY-MM-DD to YYYY-MM-DD"
                id="flatpickr-range"
              />

              <button
                type="submit"
                class="form-element bg-green-500 cursor-pointer"
              >
                Export
              </button>
            </form>
          </div>

          <div class="relative overflow-x-auto">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">#</th>
                  <th scope="col" class="px-6 py-3">Amount</th>
                  <th scope="col" class="px-6 py-3">Date</th>
                  <th scope="col" class="px-6 py-3">Trx Type</th>
                  <th scope="col" class="px-6 py-3">Description</th>
                </tr>
              </thead>
              <tbody id="transactions-table-body"></tbody>
            </table>
          </div>
        </section>


`;

// HTML content for the registration page
const registerContent = `

<section
          class="form flex flex-col max-w-[500px] mx-auto justify-center text-center gap-12"
        >
          <h1 class="text-4xl font-bold">Create your Account on Fin-Track</h1>
          <form class="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              class="form-element"
            />

            <input
              type="email"
              placeholder="Enter your email"
              class="form-element"
            />

            <input
              type="text"
              placeholder="Enter your phone"
              class="form-element"
            />

            <input
              type="text"
              placeholder="Enter your username"
              class="form-element"
            />

            <input
              type="password"
              placeholder="*********"
              class="form-element"
            />

            <input
              type="submit"
              class="form-element bg-green-500 cursor-pointer"
              value="Register"
            />
          </form>
        </section>


`;

// HTML content for the login page
const loginContent = `

<section
          class="form flex flex-col max-w-[500px] mx-auto justify-center text-center gap-12"
        >
          <h1 class="text-4xl font-bold">Welcome Back to Fin-Track</h1>
          <form class="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your username"
              class="form-element"
            />

            <input
              type="password"
              placeholder="*********"
              class="form-element"
            />

            <input
              type="submit"
              class="form-element bg-green-500 cursor-pointer"
              value="Login"
            />
          </form>
        </section>

`;

// Handles navigation menu clicks to switch between pages
const linkClicked = (e) => {
  // Show dashboard page and initialize its logic
  if (e.target.textContent.toLowerCase() === "dashboard") {
    contentElement.innerHTML = dashboardContent;
    dashboardFuntionality();
  }
  // Show registration page
  else if (e.target.textContent.toLowerCase() === "register") {
    contentElement.innerHTML = registerContent;
  }
  // Show login page
  else if (e.target.textContent.toLowerCase() === "login") {
    contentElement.innerHTML = loginContent;
  }
  // Show profile page (default)
  else {
    contentElement.innerHTML = `<h1>Profile Page</h1>`;
  }
};

// Add click event listeners to all navigation menu items
for (let navItem of navItems) {
  navItem.addEventListener("click", linkClicked);
}

// When the page loads, show the login page by default
window.onload = () => {
  contentElement.innerHTML = loginContent;
};
