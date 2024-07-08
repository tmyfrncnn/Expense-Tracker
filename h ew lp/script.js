// balance n stuff

// Add an `addExpense` function
const wallet = {
    income: 0,
    expense: 0,
    addIncome: function(addedIncome) {
      this.income = this.income + addedIncome
      this.displayInDOM()
    },
    getBalance: function() {
      return this.income - this.expense
    },
  
    // Add expense to DOM
    displayInDOM: function() {
      document.getElementById('totalIncome').innerText = this.income
      document.getElementById('totalBalance').innerText = this.getBalance()
      if(this.income === 0 || this.income < 0) {
        
        // disable
        document.getElementById('toggleEditExpense').classList.add('disabled-btn')
        document.getElementById('toggleDeleteExpense').classList.add('disabled-btn')
        document.getElementById('toggleAddExpense').classList.add('disabled-btn')
      } else {
        
        // enable
        document.getElementById('toggleEditExpense').classList.remove('disabled-btn')
        document.getElementById('toggleDeleteExpense').classList.remove('disabled-btn')
        document.getElementById('toggleAddExpense').classList.remove('disabled-btn')
      }
    }
  }
  
  // DUMMY DATA
  let transactionHistory = [
    {
      date: new Date(),
      category: 'food',
      cost: 10000,
    },
    {
      date: new Date(),
      category: 'korente',
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
  
  transactionHistory.forEach(function(item) {
    document.querySelector('table').innerHTML += `
      <tr>
        <td>${item.date.toLocaleString()}</td>
        <td>${item.category}</td>
        <td>${item.cost}</td>
      </tr>
    `
  })
  // const toBeAddedIncome = document.getElementById('toBeAddedIncome')
  // const buttonAddIncome = document.getElementById('buttonAddIncome')
  
  // buttonAddIncome.onclick = function() {
  //   wallet.addIncome(parseInt(toBeAddedIncome.value))
  // }
  
  // Modal and dashboard elements
  const modal = document.getElementById('modal');
  const dashboard = document.getElementById('dashboard');
  const usernameSpan = document.getElementById('username');
  
  // Add Modal Elements
  const toggleAddExpense = document.getElementById('toggleAddExpense');
  const addExpenseModal = document.getElementById('addExpenseModal');
  
  // Function to show modal
  function showModal() {
    modal.style.display = 'block';
  }
  
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
  
  var addExpense__modal_Content = document.getElementsByClassName ("addExpense__modal-content")
  
  var buttonAddIncome = document.getElementById("toggleAddExpense");
  
  var cancelBtn = document.getElementById("cancelBtn");
  
  buttonAddIncome.onclick = function () {
    modal.style.display = "block";
  }
  
  cancelBtn.onclick = function (){
    modal.style.display = "none";
  }
  