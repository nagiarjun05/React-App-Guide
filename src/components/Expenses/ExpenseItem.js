import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem=(prop)=>{
    let [amount,setAmount]=useState(prop.amount)
    // let count=0
    const clickHandler = () => {
        setAmount('100$')
        console.log(amount)
    };
    // const countInc = () => {
    //     count++
    //     document.getElementById('count').innerHTML=count
    //     console.log(count)
    // };
    return (
    <Card className='expense-item'>
        <ExpenseDate date={prop.date}/>
        <ExpenseDetails amount={amount}  location={prop.location}   title={prop.title} />
        <button onClick={clickHandler}>Update Amount</button>
        {/* <button id='count' onClick={countInc}>{count}</button> */}
    </Card>
    )
}

export default ExpenseItem;