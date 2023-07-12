import React,{useState} from "react";
import './ExpenseForm.css'


const ExpenseForm = () =>{
    const [enterTitle,setEnteredTitle]=useState('')
    const [enterAmount,setEnteredAmount]=useState('')
    const [enterDate,setEnteredDate]=useState('')
    const [enterLocation,setEnteredLocation]=useState('')
    // const [userInput,setUserInput]=useState({ enterTitle:'', enterAmount:'', enterDate:'', enterLocation:'' })

    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
        // setUserInput((prevState)=>{
        //     return {...prevState,enterTitle:e.target.value}})
    }
    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
        // setUserInput((prevState)=>{
        //     return {...prevState,enterAmount:e.target.value}})
    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
        // setUserInput((prevState)=>{
        //     return {...prevState,enterDate:e.target.value}})
    }
    const locationChangeHandler=(e)=>{
        setEnteredLocation(e.target.value)
        // setUserInput((prevState)=>{
        //     return {...prevState,enterLocation:e.target.value}})        
    }
    const clickHandler=(e)=>{
        e.preventDefault()
        const newExpense={title:enterTitle,amount:enterAmount,date:enterDate,location:enterLocation}
        console.log(newExpense)
    }

return (<form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for='title'>Expense Title</label>
                    <input type="text" onChange={titleChangeHandler} id="title" placeholder="Expense Title...."></input>
                </div>
                <div className="new-expense__control">
                    <label for='amount'>Expense Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={dateChangeHandler} id="amount" placeholder="Expense Amount...."></input>
                </div>
                <div className="new-expense__control">
                    <label for='date'>Expense Date</label>
                    <input type="date" min="2020-01-01" step="2023-07-12" onChange={amountChangeHandler} id="date"></input>
                </div>
                <div className="new-expense__control">
                    <label for='location'>Expense Location</label>
                    <input type="text" onChange={locationChangeHandler} id="location" placeholder="Expense Location...."></input>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={clickHandler}>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;