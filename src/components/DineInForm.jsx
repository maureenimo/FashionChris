import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Navbar from "./Navbar";
import Footer from "./Footer";

const DineInReservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [tableNumber, setTableNumber] = useState(1);
  const [email, setEmail] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(parseInt(e.target.value, 10));
  };

  const handleTableChange = (e) => {
    setTableNumber(parseInt(e.target.value, 10));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="reservation-form">
        <h1>Reservation</h1>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
        <select value={numberOfGuests} onChange={handleGuestsChange}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} Guest{num !== 0 && 's'}
            </option>
          ))}
        </select>
        <select value={tableNumber} onChange={handleTableChange}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              Table {num + 1}
            </option>
          ))}
        </select>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <button>Book Now</button>
      </div>
      <Footer />
    </div>
  );
};

export default DineInReservation;
