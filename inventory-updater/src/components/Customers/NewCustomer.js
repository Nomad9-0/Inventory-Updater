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
        props.onAddExpense(customerData);
        console.log(customerData);
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
            {!isEditing && <button onClick={startEditingHandler}>Add New Customer</button>}
            {isEditing && <CustomerForm onSaveCustomerData={saveCustomerDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewCustomer;