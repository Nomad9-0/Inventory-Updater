import React from 'react';
import CustomerDate from './CustomerDate';
import Card from '../UI/Card';
import './CustomerItem.css';

const CustomerItem = (props) => {
    return (
        <li>
            <Card className="customer-item">
                <CustomerDate date={props.date} />
                <div className="customer-item__description">
                    <h2>{props.name}</h2>
                </div>
            </Card>
        </li>
    );
}

export default CustomerItem;