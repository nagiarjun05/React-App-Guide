import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (prop) =>{
    const saveDataHandler=enteredData=>{
        prop.onAddExpense(enteredData)
    }
    return (<div className="new-expense">
            <ExpenseForm onSaveExpense={saveDataHandler}></ExpenseForm>
    </div>
    )
}

export default NewExpense;