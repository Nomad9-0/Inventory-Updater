import React, { useState } from 'react';
import './CustomerForm.css';

const CustomerForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredProduct, setEnteredProduct] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const productChangeHandler = (event) => {
        setEnteredProduct(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    const phoneNumberChangeHandler = (event) => {
        setEnteredPhoneNumber(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const customerData = {
            name: enteredName,
            product: enteredProduct,
            date: new Date(enteredDate),
            phonenumber: enteredPhoneNumber,
            email: enteredEmail
        };
        props.onSaveCustomerData(customerData);
        setEnteredName('');
        setEnteredProduct('');
        setEnteredDate('');
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
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value={enteredDate}
                        onChange={dateChangeHandler} 
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
                <button type='submit'>Add Customer</button>
            </div>
        </form>
    );
}

export default CustomerForm;