import CustomerItem from "./CustomerItem";
import "./CustomerList.css"

const CustomerList = props => {
    if (props.items.length === 0) {
        return <h2 className='customer-list__fallback'>Found no Customers</h2>
    }

    return (
        <ul className="customers-list">
            {props.items.map((customer) => (
                <CustomerItem
                    key={customer.id}
                    title={customer.name}
                    amount={customer.phonenumber}
                    date={customer.email}
                />
            ))}
        </ul>
    )
}

export default CustomerList;