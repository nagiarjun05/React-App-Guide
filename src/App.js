import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), location:'Nsp'},
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:'Rajouri Garden' },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), location:'Cp' },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), location:'Kirti Nagar'},
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      {expenses.map(i=>{
        return <ExpenseItem
        id={i.id}
        title={i.title}
        amount={i.amount}
        date={i.date}
        location={i.location}
        ></ExpenseItem>
      })}
    </div>
  );
}

export default App;
