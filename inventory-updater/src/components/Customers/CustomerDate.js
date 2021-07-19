import './CustomerDate.css';

const CustomerDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className='customer-date'>
            <div className='customer-date__month'>{month}</div>
            <div className='customer-date__year'>{year}</div>
            <div className='customer-date__day'>{day}</div>
        </div>
    );
}

export default CustomerDate;