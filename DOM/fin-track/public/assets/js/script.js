const dashboardFuntionality = () => {
  // This script manages a simple financial tracker for balance, income, and expenses
  let balance = 0; // Current balance
  let income = 0; // Total income
  let expenses = 0; // Total expenses

  let transactions = []; // Array to store all transactions

  let filteredTransactions = []; // Array to store filtered transactions for display

  // Get references to the DOM elements displaying the values
  const balanceEl = document.querySelector("#balance"); // Balance display element
  const incomeEl = document.querySelector("#income"); // Income display element
  const expensesEl = document.querySelector("#expenses"); // Expenses display element

  // Reference to the transaction form
  const addTransactionForm = document.querySelector("form");

  // Reference to the table body where transactions will be listed
  const transactionsTableBody = document.getElementById(
    "transactions-table-body"
  );

  // References to filter input elements
  const typeFilterEl = document.getElementById("filter-type"); // Filter by type
  const descriptionFilterEl = document.getElementById("filter-description"); // Filter by description
  const dateRangeFilterEl = document.getElementById("flatpickr-range"); // Filter by date range

  // Loads the current balances into the DOM
  const loadBalances = () => {
    balanceEl.textContent = balance;
    incomeEl.textContent = income;
    expensesEl.textContent = expenses;
  };

  // Loads the transactions into the table in the DOM
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

    // If there are no transactions, show a message
    transactionsTableBody.innerHTML =
      output || "<p class='text-center'>No transactions</p>";
  };

  // Filters transactions based on type, description, and date range
  const filterTransactions = (type, description, dateRange) => {
    filteredTransactions = transactions;

    // Filter by type if provided
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

    // Filter by description if provided
    if (description) {
      filteredTransactions = filteredTransactions.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(description.toLowerCase());
      });
    }

    // Filter by date range if provided
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

    // Load the filtered transactions into the table
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

    // Create a transaction object
    const transaction = {
      id: transactions.length + 1, // Unique transaction ID
      date: new Date().toLocaleDateString(), // Transaction date
      amount, // Transaction amount
      trxType: trxType[0].toUpperCase() + trxType.slice(1), // Transaction type (capitalized)
      description, // Transaction description
    };

    // Add transaction to the array
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

    // Update the DOM with new values
    loadBalances();

    loadTransactions(transactions);
  };

  // Initialize balances and transactions
  const cashFlow = JSON.parse(localStorage.getItem("cashFlow")); // Retrieve balances from localStorage
  transactions = JSON.parse(localStorage.getItem("transactions") || "[]"); // Retrieve transactions from localStorage
  filteredTransactions = transactions;

  balance = cashFlow?.balance || 0;
  income = cashFlow?.income || 0;
  expenses = cashFlow?.expenses || 0;

  loadBalances();
  loadTransactions(transactions);

  // Attach form submission handler
  addTransactionForm.onsubmit = formSubmitted;

  // Filter by type when the type filter changes
  typeFilterEl.onchange = (e) => {
    filterTransactions(e.target.value, descriptionFilterEl.value);
  };

  // Filter by description as the user types
  descriptionFilterEl.onkeyup = (e) => {
    filterTransactions(typeFilterEl.value, e.target.value);
  };

  // Filter by date range when the date range changes
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

// Get reference to the main content element
const contentElement = document.getElementById("content");

// Get referenct to the nav items
const navItems = document.getElementsByClassName("nav-item");

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

const linkClicked = (e) => {
  if (e.target.textContent.toLowerCase() === "dashboard") {
    contentElement.innerHTML = dashboardContent;

    dashboardFuntionality();
  } else if (e.target.textContent.toLowerCase() === "register") {
    contentElement.innerHTML = registerContent;
  } else if (e.target.textContent.toLowerCase() === "login") {
    contentElement.innerHTML = loginContent;
  } else {
    contentElement.innerHTML = `<h1>Profile Page</h1>`;
  }
};

for (let navItem of navItems) {
  navItem.addEventListener("click", linkClicked);
}

window.onload = () => {
  contentElement.innerHTML = loginContent;
};
