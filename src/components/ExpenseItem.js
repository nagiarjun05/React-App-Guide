import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(data){
    return (
    <div className='expense-item'>
        <ExpenseDate date={data.date}/>
        <ExpenseDetails amount={data.amount}  location={data.location}   title={data.title} />
    </div>
    )
}

export default ExpenseItem;