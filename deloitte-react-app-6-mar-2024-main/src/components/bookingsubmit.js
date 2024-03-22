import React from "react";
import Appointments from "./appointments";
import Firebaseapp from "../services/Firebase";


function App(){
    booking = (selectedDate, selectedTimeSlot, selectedProblem) => {
        const saveToFirebase = Firebaseapp.firestore();
        saveToFirebase.collection('paperless-hospital-services').add({
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          problem: selectedProblem
    
        })
      }

      return (
        <Appointments booking={booking} />
      )
}

export default App