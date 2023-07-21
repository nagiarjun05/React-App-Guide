import React,{useState} from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from './components/Expenses/ExpenseFilter';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), location:'Nsp'},
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:'Rajouri Garden' },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), location:'Cp' },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), location:'Kirti Nagar'},
];

function App() {
  const [expenses,updateExpenses]=useState(DUMMY_EXPENSES)
  const [filteredYear, setFilterYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear)
    setFilterYear(selectedYear)
  };

  

  const addExpenseHandler=(expense)=>{
    updateExpenses((prevArray)=>{
      return [expense,...prevArray]
    })
  }
  return (
    <div>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
