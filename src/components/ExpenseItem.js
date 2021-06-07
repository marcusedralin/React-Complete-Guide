import React from 'react'
import './ExpenseItem.css';

export default function ExpenseItem() {
    const expenseDate = new Date(2021, 5, 14);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 366.99;


    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    )
}
