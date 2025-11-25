import React, { useState } from 'react';
import './Payment.css';
import { Link } from 'react-router-dom';
function Payment() {
  const [name, setName] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [password, setPassword] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleCardnumberChange = (e) => {
    setCardnumber(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password != password) {

      alert("password Not Match");
    }
    else {

      alert('Payment successfully completed.Check your e-mail to claim your gift!!    Tap on home icon below to return to home');
    }
    e.preventDefault();

  }
  return (
    <div className='pymt_form1'>
      <form className="pymt_form" onSubmit={(e) => { handleSubmit(e) }}>
        <h2 className='payment_details'> Payment Details </h2>
        <img src='https://tse4.mm.bing.net/th?id=OIP.O02FGeYGqzQxGfZfTb9slAHaBc&pid=Api&P=0'></img>
        <div>
          <label className='pay-title' >Name on Card:</label><br />
          <input className='pymt_input' type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />
        </div>
        <div>
          <label className='pay-title' >Card Number:</label><br />
          <input className='pymt_input' type="text" value={cardnumber} required onChange={(e) => { handleCardnumberChange(e) }} /><br />
        </div>
        <div>
          <label className='pay-title'>CVV:</label><br />
          <input className='pymt_input' type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
        </div>
        <div>
          <label className='pay-title'>Expiration Month:</label><br />
          <input className='pymt_input' type="text" value={month} required onChange={(e) => { handleMonthChange(e) }} /><br />
        </div>
        <div>
          <label className='pay-title'>Expiration Year: </label><br />
          <input className='pymt_input' type="text" value={year} required onChange={(e) => { handleYearChange(e) }} /><br></br>
        </div>
        <div>
          <Link to="/succes">
          <button type="submit" className='paynow'>
            Pay Now
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Payment;