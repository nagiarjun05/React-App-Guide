import React from "react";


const ExpenseForm = () =>{
    const titleChangeHandler=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        e.preventDefault()
        console.log(e.target.value)}
    const dateChangeHandler=(e)=>{
        e.preventDefault()
        console.log(e.target.value)}
    const locationChangeHandler=(e)=>{
        e.preventDefault()
        console.log(e.target.value)}
    const clickHandler=()=>{}
    return (<div>
        <form>
            <label for='title'>Expense Title</label>
            <input type="text" onChange={titleChangeHandler} id="title" placeholder="Expense Title...."></input>
            <br></br>
            <label for='date'>Expense Date</label>
            <input type="date" onChange={amountChangeHandler} id="date"></input>
            <br></br>
            <label for='amount'>Expense Amount</label>
            <input type="text" onChange={dateChangeHandler} id="amount" placeholder="Expense Amount...."></input>
            <br></br>
            <label for='location'>Expense Location</label>
            <input type="text" onChange={locationChangeHandler} id="location" placeholder="Expense Location...."></input>
            <br></br>
            <button type="submit" onClick={clickHandler}>Add Expense</button>
        </form>
    </div>
    )
}

export default ExpenseForm;