import React from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem=(data)=>{
    return (
    <Card className='expense-item'>
        <ExpenseDate date={data.date}/>
        <ExpenseDetails amount={data.amount}  location={data.location}   title={data.title} />
    </Card>
    )
}

export default ExpenseItem;