import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import './NewCustomer.css';

const NewCustomer = (props) => {  
    const [isEditing, setIsEditing] = useState(false)

    const saveCustomerDataHandler = (enteredCustomerData) => {
        const customerData = {
            ...enteredCustomerData,
            id: Math.random().toString()
        };
        props.onAddCustomer(customerData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return ( 
        <div className='new-customer'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <CustomerForm onSaveExpenseData={saveCustomerDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewCustomer;