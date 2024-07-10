import React, { useEffect } from 'react'
import { useState } from 'react'
import { getUserAppointments } from './Apicalls'

const MyRequests = ({ data1 }) => {
  const [appointments, setAppointments] = useState([])
  const [pendingAppointments, setPendingAppointments] = useState([])
  
  useEffect(() => {
    getUserAppointments(data1)
      .then((response) => {
        setAppointments(response.data.appointments);
      })
      .catch((error_details) => { console.log(error_details) })
  }, [])


  return (
    <div className="row">
      <div className="col-sm-12">
        <h2>My Requests</h2>
        <div className="row mt-3">
          <div className='container-fluid '>
            <div className="row">
              {
                appointments.map((element, index) => {
                  if (element.appointmentStatus !== 'Confirmed') {
                    return (
                      <div key={index}  className="col-sm-4"  >
                        <div className="card" style={{ width: "450px", paddingTop: "10px", paddingBottom: "20px" }}>
                          <div className="card-body shadow" >
                            <div className="row">
                              <div className="col-sm-12 " style={{ height: "290px", paddingBottom: "10px" }}>
                                <h4 className="">Appointment Date :{element.appointmentDate} </h4>
                                <h4 className="">Session :{element.session}</h4>
                                <h4 className="">Time :{element.time}</h4>
                                <h4 className="">Doctor Name :{element.doctorDetails.doctorName} </h4>
                                <h4 className="">Patient Name :{element.patientDetails.patientName}</h4>
                                <h4 className="">Appointment Ref Id :{element.appointmentRefid}</h4>
                                <h4 className="">Appointment Status :{element.appointmentStatus}</h4>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }

                })




              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRequests