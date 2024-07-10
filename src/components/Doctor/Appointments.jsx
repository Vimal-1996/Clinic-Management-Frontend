import React, { useEffect } from 'react'
import AppointmentTable from './AppointmentTable'
import { useState } from 'react'
import { getMyAppointments } from './apicalls'

const Appointments = ({ doctorId }) => {
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([])
  const [consultedAppointments, setConsultedAppointments] = useState([])

  const fetchAppointments = async () => {
    const appointmentData = localStorage.getItem('appointmentData');
    if (appointmentData) {
      const parsedData = JSON.parse(appointmentData);
      if (parsedData && parsedData._id) {
        try {
          const response = await getMyAppointments(parsedData._id);
          setTodaysAppointments(response.data.appointmentLists[0].todaysAppointments);
          setConsultedAppointments(response.data.appointmentLists[0].consultedAppointments);
          setUpcomingAppointments(response.data.appointmentLists[0].upcomingAppointments);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Parsed appointment data is missing _id");
      }
    } else {
      console.log("No appointment data found in local storage");
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  useEffect(()=>{

  },[todaysAppointments,upcomingAppointments,consultedAppointments])


  return (
    <div className='row'>
      <div className="col-sm-9">
        <h2>Appointments</h2>
        <div className=''>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Todays Appointments</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Upcoming Appointments</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Consulted Appointments</button>
            </li>
          </ul>
          <div className="tab-content mt-2" id="myTabContent">
            <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab"><AppointmentTable lists={todaysAppointments} /></div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><AppointmentTable lists={upcomingAppointments} /></div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><AppointmentTable lists={consultedAppointments} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments