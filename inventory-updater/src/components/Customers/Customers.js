import React from "react";
import Card from '../UI/Card';
import CustomerItem from "./CustomerItem";
// import CustomerFilter from "./CustomerFilter";
// import CustomerList from "./CustomerList";
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
                {props.items.map(customer => 
                    <CustomerItem 
                        name={customer.name}
                        product={customer.product}
                        phoneNumber={customer.phoneNumber}
                        email={customer.email}    
                        date={customer.date}
                        key={customer.id}
                    />
                )}
            </Card>
        </div>
    );
}

export default Customers;