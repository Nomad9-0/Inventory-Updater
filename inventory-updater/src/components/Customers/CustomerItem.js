import React from 'react';
//import CustomerDate from './CustomerDate';
import Card from '../UI/Card';
import './CustomerItem.css';

const CustomerItem = (props) => {
    return (
        <li>
            <Card className="customer-item">
                {/* <CustomerDate date={props.date} /> */}
                <div className="customer-item__description">
                    <h2>{props.name}</h2>|
                    <p>{props.product}</p>|
                    <p>{props.phoneNumber}</p>|
                    <p>{props.email}</p>|
                    <p>{props.date}</p>
                </div>
                <div>
                    <button type="button">Notify</button>
                    <button type='button'>Delete</button>
                </div>
            </Card>
        </li>
    );
}

export default CustomerItem;