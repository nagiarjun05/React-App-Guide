function ExpenseDetails(data){
    return  (<div className='expense-item__description'>
                <h2>{data.title}</h2>
                <h3>{data.location}</h3>
                <div className='expense-item__price'>{data.amount}</div>
            </div>)
}

export default ExpenseDetails;