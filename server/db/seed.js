const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Expense = require('./index.js');

const expenseData = [
  {
    _id: 1,  
    month: 'December',
    description: 'Rent',
    budgetedAmount: 1000,
    actualAmount: 1000
  },
  {
    _id: 2,  
    month: 'December',
    description: 'Internet',
    budgetedAmount: 75,
    actualAmount: 75
  }
]

Expense.create(expenseData);
