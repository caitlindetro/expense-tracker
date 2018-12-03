const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // this code solves a deprication warning for Mongoose mPromise
mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true });
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo DB is running');
});

const expenseSchema = mongoose.Schema({
  _id: Number,
  month: String,
  description: String,
  budgetedAmount: Number,
  actualAmount: Number
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
