import React, { useState, useEffect } from 'react';

const BookingData = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase
    fetch('https://paperless-hospital-servi-bf1d1-default-rtdb.firebaseio.com/bookingData.json')
      .then(response => response.json())
      .then(data => {
        // Convert the fetched object into an array of bookings
        const fetchedBookings = Object.keys(data).map(key => {
          return {
            id: key,
            date: formatDate(new Date(data[key].date)),
            timeSlot: data[key].timeSlot,
            problem: data[key].problem
          };
        });
        setBookings(fetchedBookings);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div>
      <h2>Booking Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Problem</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.date}</td>
              <td>{booking.timeSlot}</td>
              <td>{booking.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingData;
