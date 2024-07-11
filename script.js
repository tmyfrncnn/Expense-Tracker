  // DUMMY DATA
  // let transactionHistory = [{
  //     date: new Date(),
  //     category: 'food',
  //     cost: 10000,
  //   },
  //   {
  //     date: new Date(),
  //     category: 'bill',
  //     cost: 5000,
  //   },
  //   {
  //     date: new Date(),
  //     category: 'water',
  //     cost: 300,
  //   },
  //   {
  //     date: new Date(),
  //     category: 'pet stuff',
  //     cost: 100000000,
  //   },
  // ]

  // transactionHistory.forEach(function (item) {
  //   document.querySelector('table').innerHTML += `
  //     <tr>
  //       <td>${item.date.toLocaleString()}</td>
  //       <td>${item.category}</td>
  //       <td>${item.cost}</td>
  //     </tr>
  //   `
  // })

  // document.addEventListener("DOMContentLoaded", function () {
  //   var addIncome = document.getElementById("addIncome");
  //   var toggleAddIncome = document.getElementById("toggleAddIncome");

  // for add expense ((again))

  var addExpenseModal = document.getElementById("addExpenseModal");
  var toggleAddExpense = document.getElementById("toggleAddExpense");
  var expenseCancelBtn = document.getElementById("expenseCancelBtn");
  
  var expenseTitleField = document.getElementById("expenseTitleField");
  var expenseCostField = document.getElementById("expenseCostField");
  var expenseEnterBtn = document.getElementById("expenseEnterBtn");
  var transactionTableBody = document.getElementById("transactionTableBody");
  var totalExpense = document.getElementById("totalExpense");
  var totalIncome = document.getElementById("totalIncome");
  
  toggleAddExpense.onclick = function () {
    addExpenseModal.style.display = "flex";
  };
  
  expenseCancelBtn.onclick = function () {
    addExpenseModal.style.display = "none";
  };
  
  expenseEnterBtn.onclick = function () {
    var incomeValue = parseFloat(totalIncome.textContent);
    if (isNaN(incomeValue) || incomeValue <= 0) {
      alert('Fill income first before entering expense.');
      return;
    }
  
    var expenseTitle = expenseTitleField.value;
    var expenseCost = parseFloat(expenseCostField.value);
  
    if (!expenseTitle || isNaN(expenseCost) || expenseCost <= 0) {
      alert("Please enter a valid expense title and cost.");
      return;
    }
  
    var toBeInsertedData = {
      title: expenseTitle,
      cost: expenseCost.toFixed(2),
    };
  
    let content = `
      <tr>
          <td>${toBeInsertedData.title}</td>
          <td>${toBeInsertedData.cost}</td>
      </tr>
    `;
  
    transactionTableBody.innerHTML += content;
  
    var currentExpense = parseFloat(totalExpense.textContent);
    totalExpense.textContent = (currentExpense + expenseCost).toFixed(2);
  
    expenseTitleField.value = '';
    expenseCostField.value = '';
  
    addExpenseModal.style.display = "none";
  };
  

  // for add income (trial1) update: not trial anymore bec it wokred hehe UwU

  var toggleAddIncome = document.getElementById("toggleAddIncome");
  var IncomeCancelBtn = document.getElementById("IncomeCancelBtn");

  // new code for when cost will reflect on dashboard upon putting the value on input field

  var addIncomeModal = document.getElementById("addIncomeModal");
  var incomeInputField = document.getElementById("incomeInputField");
  var IncomeEnterBtn = document.getElementById("IncomeEnterBtn");
  var totalIncome = document.getElementById("totalIncome")

  toggleAddIncome.onclick = function () {
    addIncomeModal.style.display = "flex";
  };

  IncomeCancelBtn.onclick = function () {
    addIncomeModal.style.display = "none";
  };

  // new code for when cost will reflect on dashboard upon putting the value on input field (1)

  IncomeEnterBtn.onclick = function () {

    // nag make us another variable which is 'cost' and that 'cost's' value is: var cost = x (y.z), where z is a string
    var cost = parseFloat(incomeInputField.value);

    // after making another variable, now we make an if else condition to achieve what we wanted to achieve

    if (!isNaN(cost) && cost > 0) {

      // here we can see we made another variable to use sa next condition sa if else: var currentIncome = x (y.z), where z is another kind of value
      var currentIncome = parseFloat(totalIncome.textContent);

      totalIncome.textContent = (currentIncome + cost).toFixed(2);

      addIncomeModal.style.display = "none";
    } else {
      alert("Fill input in first");
    }
  };

  incomeInputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var cost = parseFloat(incomeInputField.value);
      if (!isNaN(cost) && cost > 0) {
        var currentIncome = parseFloat(totalIncome.textContent);
        totalIncome.textContent = (currentIncome + cost).toFixed(2);
        addIncomeModal.style.display = "none";
      } else {
        alert("Please enter a valid cost.");
      }
    }
  });

  // ^^ nag hatag ra condition on what is going on if u click
  // the enter button. bale, nag hatag sha condition where if
  // you add a number sa input field, mureflect sa dashboard
  // ang value. and that mag increase na dayn ang number ana
  // because of this code:
  // totalIncome.textContent = (currentIncome + cost)