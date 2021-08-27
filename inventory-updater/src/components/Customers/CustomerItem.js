import React, {useState} from 'react';
//import CustomerDate from './CustomerDate';
import Card from '../UI/Card';
import './CustomerItem.css';

const CustomerItem = (props) => {
    const [removeCustomer, setRemoveCustomer] = useState([]);

    const sendNotification = () => {
        console.log("message send")
    };

    const removeCustomers = (e) => {
        // const removeCus = e.target.getAttribute("name");
        // setRemoveCustomer(removeCustomer.filter(item => item.name !== removeCus));
        console.log(props.email) // must target id
    }

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
                    <button onClick={sendNotification} type="button">Notify</button>
                    <button onClick={removeCustomers} type='button'>Delete</button>
                </div>
            </Card>
        </li>
    );
}

export default CustomerItem;