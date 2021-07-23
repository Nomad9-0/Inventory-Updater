import CustomerItem from "./CustomerItem";
import "./CustomerList.css"

const CustomerList = props => {
    // if (props.items.length === 0) {
    //     return <h2 className='customer-list__fallback'>Found no Customers</h2>
    // }

    return (
        <ul className="customers-list">
            {/* {props.items.map((customer) => ( */}
                {/* <CustomerItem
                    // key={customer.id}
                    // name={customer.name}
                    // phonenumber={customer.phonenumber}
                    // email={customer.email}
                    //date={customer.date}
                /> */}
            {/* ))} */}
            <CustomerItem />
        </ul>
    )
}

export default CustomerList;