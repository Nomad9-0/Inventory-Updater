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
  },
  {
    id: "p2",
    name: "Karen Smith",
    product: 'Topical',
    phoneNumber: '555-555-5556',
    email: 'test2@email.com',
    date: '6/11/2021'
  },
  {
    id: "p3",
    name: "Jesus Zepeda",
    product: 'Flower',
    phoneNumber: '555-555-5557',
    email: 'test3@email.com',
    date: '7/1/2021'
  },
  {
    id: "p4",
    name: "Mike Powell",
    product: 'Drink',
    phoneNumber: '555-555-5558',
    email: 'test4@email.com',
    date: '5/12/2020'
  },
  {
    id: "p5",
    name: "Zofia Kapkan",
    product: 'Hat',
    phoneNumber: '555-555-5559',
    email: 'test5@email.com',
    date: '7/15/2020'
  },
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
