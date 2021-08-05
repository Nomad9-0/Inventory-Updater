import React, { useState } from 'react';
import './CustomerForm.css';

const CustomerForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredProduct, setEnteredProduct] = useState('');
    const [date, setDate] = useState(new Date());
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const productChangeHandler = (event) => {
        setEnteredProduct(event.target.value);
    };

    const dateChangeHandler = () => {
        setDate(new Date().toLocaleString('en-US'));
    };

    const phoneNumberChangeHandler = (event) => {
        setEnteredPhoneNumber(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const customerData = {
            name: enteredName,
            product: enteredProduct,
            phoneNumber: enteredPhoneNumber,
            email: enteredEmail,
            date: date
        };
        props.onSaveCustomerData(customerData);
        setEnteredName('');
        setEnteredProduct('');
        setDate('');
        setEnteredPhoneNumber('');
        setEnteredEmail('');
    };

    return( 
        <form onSubmit={submitHandler}>
            <div className="new-customer__controls">
                <div className="new-customer__control">
                    <label>Name</label>
                    <input 
                        type='text' 
                        value={enteredName} 
                        onChange={nameChangeHandler} 
                    />
                </div>
                <div className="new-customer__control">
                    <label>Product</label>
                    <input 
                        type='text' 
                        value={enteredProduct} 
                        onChange={productChangeHandler} 
                    />
                </div>
                <div className="new-customer__control">
                    <label>Phone Number</label>
                    <input 
                        type='text' 
                        value={enteredPhoneNumber} 
                        onChange={phoneNumberChangeHandler} 
                    />
                </div>
                <div className="new-customer__control">
                    <label>Email</label>
                    <input 
                        type='text' 
                        value={enteredEmail} 
                        onChange={emailChangeHandler} 
                    />
                </div>
            </div>
            <div className='new-customer__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button onClick={dateChangeHandler} type='submit'>Add Customer</button>
            </div>
        </form>
    );
}

export default CustomerForm;