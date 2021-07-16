import React, {useState} from "react";
// import NewCustomer from './components/Customers/NewCustomer';
// import Customers from './components/Customers/Customers.js'
import "./App.css"

const DUMMY_DATA = [
  {
    id: "p1",
    name: "Austin Martin",
    product: 'Edibles',
    phoneNumber: '555-555-5555',
    email: 'test@email.com'
  },
  {
    id: "p2",
    name: "Karen Smith",
    product: 'Topical',
    phoneNumber: '555-555-5556',
    email: 'test2@email.com'
  },
  {
    id: "p3",
    name: "Jesus Zepeda",
    product: 'Flower',
    phoneNumber: '555-555-5557',
    email: 'test3@email.com'
  },
  {
    id: "p4",
    name: "Mike Powell",
    product: 'Drink',
    phoneNumber: '555-555-5558',
    email: 'test4@email.com'
  },
  {
    id: "p5",
    name: "Zofia Kapkan",
    product: 'Hat',
    phoneNumber: '555-555-5559',
    email: 'test5@email.com'
  },
];

const App = () => {
  //const [customerWaitlist, setCustomerWaitlist] = useState(DUMMY_DATA);

  // const addCustomerWaitlistHandler = customer => {
  //   setCustomerWaitlist(prevCustomers => {
  //     return [customer, ...prevCustomers]
  //   });
  // }

  return (
    <div>
      {/* <NewCustomer onAddExpense={addCustomerWaitlistHandler} /> */}
      {/* <Customers items={customerWaitlist} /> */}
      <h1 className='title'>Customers on Waitlist</h1>
      <div className='list'>
        <ul className='card'>
          <li>
          <h2 className='name'>{DUMMY_DATA[0].name}</h2>
          <p>Waiting for: {DUMMY_DATA[0].product}</p>
          <p>Phone Number: {DUMMY_DATA[0].phoneNumber}</p>
          <p> Email: {DUMMY_DATA[0].email}</p>
          </li>
        </ul>
        <ul className='card'>
          <li>
          <h2 className='name'>{DUMMY_DATA[1].name}</h2>
          <p>Waiting for: {DUMMY_DATA[1].product}</p>
          <p>Phone Number: {DUMMY_DATA[1].phoneNumber}</p>
          <p> Email: {DUMMY_DATA[1].email}</p>
          </li>
        </ul>
        <ul className='card'>
          <li>
          <h2 className='name'>{DUMMY_DATA[2].name}</h2>
          <p>Waiting for: {DUMMY_DATA[2].product}</p>
          <p>Phone Number: {DUMMY_DATA[2].phoneNumber}</p>
          <p> Email: {DUMMY_DATA[2].email}</p>
          </li>
        </ul>
        <ul className='card'>
          <li>
          <h2 className='name'>{DUMMY_DATA[3].name}</h2>
          <p>Waiting for: {DUMMY_DATA[3].product}</p>
          <p>Phone Number: {DUMMY_DATA[3].phoneNumber}</p>
          <p> Email: {DUMMY_DATA[3].email}</p>
          </li>
        </ul>
        <ul className='card'>
          <li>
          <h2 className='name'>{DUMMY_DATA[4].name}</h2>
          <p>Waiting for: {DUMMY_DATA[4].product}</p>
          <p>Phone Number: {DUMMY_DATA[4].phoneNumber}</p>
          <p> Email: {DUMMY_DATA[4].email}</p>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
