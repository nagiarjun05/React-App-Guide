import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpensesItem.css';

const ExpenseItem = (props) => {
  console.log(props.location)
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div className='expense-item__price'>{props.location}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;