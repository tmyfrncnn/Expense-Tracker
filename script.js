  // DUMMY DATA
  let transactionHistory = [{
      date: new Date(),
      category: 'food',
      cost: 10000,
    },
    {
      date: new Date(),
      category: 'bill',
      cost: 5000,
    },
    {
      date: new Date(),
      category: 'water',
      cost: 300,
    },
    {
      date: new Date(),
      category: 'pet stuff',
      cost: 100000000,
    },
  ]

  transactionHistory.forEach(function (item) {
    document.querySelector('table').innerHTML += `
      <tr>
        <td>${item.date.toLocaleString()}</td>
        <td>${item.category}</td>
        <td>${item.cost}</td>
      </tr>
    `
  })

  const toBeAddedIncome = document.getElementById('toBeAddedIncome')
  const buttonAddIncome = document.getElementById('buttonAddIncome')

  // Modal and dashboard elements
  const modal = document.getElementById('modal');
  const dashboard = document.getElementById('dashboard');
  const usernameSpan = document.getElementById('username');


  // Function to save username
  function saveUsername() {
    const usernameInput = document.getElementById('usernameInput').value;
    if (usernameInput.trim() !== '') {
      // Update username
      usernameSpan.textContent = usernameInput;

      // Hide modal and show dashboard
      modal.style.display = 'none';
      dashboard.style.display = 'block';
    } else {
      alert('Please enter a valid name.');
    }
  }

  // document.addEventListener("DOMContentLoaded", function () {
  //   var addIncome = document.getElementById("addIncome");
  //   var toggleAddIncome = document.getElementById("toggleAddIncome");

    // VV if nakakita ang function nga naka strictly block ang display daan, the function hides it (after running script (by clicking the button)) dayn using display none. but if ang display kay none, the function shows it again using block 

  //   toggleAddIncome.onclick = function () {
  //     if (addIncome.style.display === "block") {
  //       addIncome.style.display = "none";
  //     } else {
  //       addIncome.style.display = "block";
  //     }
  //   }
  // });

  // for add expense ((again))

  var addExpenseModal = document.getElementById("addExpenseModal");
  var toggleAddExpense = document.getElementById("toggleAddExpense");
  var cancelBtn = document.getElementById("cancelBtn");

  toggleAddExpense.onclick = function () {
    addExpenseModal.style.display = "flex";
  };

  cancelBtn.onclick = function () {
    addExpenseModal.style.display = "none";
  };

  // for add income (trial1) update: not trial anymore bec it wokred hehe UwU

  var toggleAddIncome = document.getElementById("toggleAddIncome");
  var IncomeCancelBtn = document.getElementById("IncomeCancelBtn");

  // new code for when cost will reflect on dashboard upon putting the value on input field

  var addIncomeModal = document.getElementById("addIncomeModal");
  var incomeInputField = document.getElementById ("incomeInputField");
  var IncomeEnterBtn = document.getElementById ("IncomeEnterBtn");
  var totalIncome = document.getElementById ("totalIncome")

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
      alert("Please enter a valid cost.");
  }
};

// ^^ nag hatag ra condition on what is going on if u click
// the enter button. bale, nag hatag sha condition where if
// you add a number sa input field, mureflect sa dashboard
// ang value. and that mag increase na dayn ang number ana
// because of this code:
// totalIncome.textContent = (currentIncome + cost)