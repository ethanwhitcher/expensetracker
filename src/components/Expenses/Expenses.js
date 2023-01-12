import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    
    const yearChangeHandler = (enteredYearData) => {
        // gets passed current year of filter
        setFilteredYear(enteredYearData);
    }

    const filteredExpenses = props.items.filter(expense => {
        if (filteredYear === 'all') {
            return expense.date.getFullYear().toString();
        } else {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler}/>
                {/* Maps each expense object passed through props to jsx element*/}
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;