import React, { useState } from "react";
import Card from '../UI/Card';
// import CustomerFilter from "./CustomerFilter";
import CustomerList from "./CustomerList";
import './Customers.css';


const Customers = (props) => {
    // const [filteredYear, setFilteredYear] = useState('2020');

    // const filterChangeHandler = selectedYear => {
    //     setFilteredYear(selectedYear);
    // }

    // const filteredCustomers = props.items.filter(customer => {
    //    //return customer.date.getFullYear().toString() === filteredYear;
    // })

    return(
        <div>
            <Card className='customers'>
                {/* <CustomerFilter selected={filteredYear} onChangeFilter={filterChangeHandler} /> */}
                {/* <CustomerList items={filteredCustomers} />  */}
                <CustomerList /> 
            </Card>
        </div>
    );
}

export default Customers;