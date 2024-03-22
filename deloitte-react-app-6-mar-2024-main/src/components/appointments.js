import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {firestore} from '../services/Firebase.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // Import useHistory directly
import PaymentPage from './Payment.js';
import { useNavigate } from 'react-router-dom'; 
import "./appointment.css"

const availableTimeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
];

const ProblemOptions = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
];

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  // const history = useHistory();
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleProblemChange = (e) => {
    setSelectedProblem(e.target.value);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Sunday: 0, Saturday: 6
  };

  const isHoliday = (date) => {
    // Add your holiday logic here
    // Return true if the date is a holiday, false otherwise
    return false;
  };

  const filterDates = (date) => {
    return isWeekday(date) && !isHoliday(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // const options ={
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     date: selectedDate,
    //     timeSlot: selectedTimeSlot,
    //     problem: selectedProblem
    //   })
    // }
    // const res = fetch(
    //   'https://paperless-hospital-servi-bf1d1-default-rtdb.firebaseio.com/bookingData.json',
    //   options
    //   )
    //   if(res)
    //   {
    //     alert ("sent")
    //   }
    //   else{
    //     alert ("not sent")
    //   }
//history.push('/payment')
localStorage.setItem('date', selectedDate)
localStorage.setItem('timeSlot', selectedTimeSlot)
localStorage.setItem('problem', selectedProblem)
navigate('/payment')


  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          filterDate={filterDates} 
        />
      </div>
      <div>
        <label>Time Slot:</label>
        <select value={selectedTimeSlot} onChange={handleTimeSlotChange}>
          <option value="">Select a time slot</option>
          {availableTimeSlots.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Problem:</label>
        <select value={selectedProblem} onChange={handleProblemChange}>
          <option value="">Select a problem</option>
          {ProblemOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Appointments;
