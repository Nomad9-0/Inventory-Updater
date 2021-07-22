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
                    <h2>{props.name}</h2>
                    <span>{props.id}</span>
                    <p>{props.product}</p>
                    <p>{props.phonenumber}</p>
                    <p>{props.email}</p>
                </div>
            </Card>
        </li>
    );
}

export default CustomerItem;