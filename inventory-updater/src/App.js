import React, {useState} from "react";
import NewCustomer from './components/Customers/NewCustomer';
import Customers from './components/Customers/Customers.js'
import "./App.css"

const DUMMY_DATA = [
  {
    id: "p1",
    name: "Austin Martin",
    product: 'Edibles',
    phoneNumber: '555-555-5555',
    email: 'test@email.com',
    date: '7/19/2021'
  }
];

const App = () => {
  const [customerWaitlist, setCustomerWaitlist] = useState(DUMMY_DATA);

  const addCustomerWaitlistHandler = customer => {
    setCustomerWaitlist(prevCustomers => {
      return [customer, ...prevCustomers]
    });
  }

  return (
    <div>
      <NewCustomer onAddExpense={addCustomerWaitlistHandler} />
      <h1 className='title'>Customers on Waitlist</h1>
      <Customers items={customerWaitlist}/>
    </div>
  );
}

export default App;
