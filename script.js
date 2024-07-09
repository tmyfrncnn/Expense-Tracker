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

  buttonAddIncome.onclick = function () {
    wallet.addIncome(parseInt(toBeAddedIncome.value))
  }

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

  // for add income (trial1)

  // var addIncomeModal = document.getElementById("addIncomeModal");
  // var toggleAddIncome = document.getElementById("toggleAddIncome");
  // var IncomeCancelBtn = document.getElementById("IncomeCancelBtn");

  // toggleAddIncome.onclick = function () {
  //   addIncomeModal.style.display = "flex";
  // };

  // IncomeCancelBtnancelBtn.onclick = function () {
  //   addIncomeModal.style.display = "none";
  // };