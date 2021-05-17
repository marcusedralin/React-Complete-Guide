import React from 'react'
import './ExpenseItem.css';

export default function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>May 15 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$376.92</div>
            </div>
        </div>
    )
}
