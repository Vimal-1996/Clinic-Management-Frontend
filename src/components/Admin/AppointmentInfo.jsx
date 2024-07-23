import React, { useEffect, useState } from 'react'
import { addAppointmentDetails } from './Apicalls'
import { updateAppointmentStatus } from './Apicalls'

const AppointmentInfo = (props) => {

  const [appointmentDate, setAppointmentDate] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")
  const [session, setSession] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
   
  }, [])

  const handleAppointmentModalSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      appointmentDate,
      appointmentTime,
      session,
      doctorName,
      patientName
    }

    await addAppointmentDetails(appointmentData)
      .then((res) => { window.location.reload() })
      .catch((err) => { console.log(err) })


  }
  const handleAppointmentDate = (e) => {
    setAppointmentDate(e.target.value)
  }

  const handleSession = (e) => {
    setSession(e.target.value)
  }

  const handleAppointmentTime = (e) => {
    setAppointmentTime(e.target.value)
  }

  const handleDoctorName = (e) => {
    setDoctorName(e.target.value)
  }
  const handlePatientName = (e) => {
    setPatientName(e.target.value)
  }

  const changeAppointmentStatus = (referenceId, appointmentStatus) => {
    console.log(referenceId);
    updateAppointmentStatus(referenceId, appointmentStatus)
      .then((res) => { window.location.reload() })
      .catch((err) => { console.log(err) })

  }

  if (!props.data3 || !props.data3.appointments) {
    return (
      
      <div>Loading...</div>
    )
    
  }

  else{
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-sm-12">
            <h2>List of Appointments</h2>
            <div className="row mt-3">
              <div className="col-sm-6 d-flex justify-content-start">
                <a data-bs-toggle="modal" data-bs-target="#addAppointmentModal"><h3 className=''>Add Appointments</h3></a>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <a><h3 className=''>Search Appointments</h3></a>
              </div>
  
              <div className='container-fluid '>
                <div className="row  ">
  
                  {
                    props.data3.appointments.map((elem, index) => {
                      return (
                        <div className="col-sm-4"  >
                          <div className="card" style={{ width: "450px", paddingTop: "10px", paddingBottom: "20px", margin: "10px" }}>
                            <div className="card-body shadow" >
                              <div className="row">
                                <div className="col-sm-12 " style={{ height: "290px", paddingBottom: "10px" }}>
                                  <h4 className="">Appointment Date : {elem.appointmentDate}</h4>
                                  <h4 className="">Session :{elem.session}</h4>
                                  <h4 className="">Time :{elem.time}</h4>
                                  <h4 className="">Doctor Name : {elem.doctorDetails.doctorName}</h4>
                                  <h4 className="">Patient Name :{elem.patientDetails.patientName}</h4>
                                  <h4 className="">Appointment Ref Id :{elem.appointmentRefid}</h4>
                                  <h4 className=''>Appointment Status :{elem.appointmentStatus}</h4>
                                  <button className='btn btn-warning' onClick={() => changeAppointmentStatus(elem.appointmentRefid, elem.appointmentStatus)}>Change Status</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
  
                </div>
              </div>
  
  
  
            </div>
          </div>
        </div>
  
        {/* Add Appointment Modal */}
        <div className="modal fade" id="addAppointmentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">Add Appointment</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row p-4">
                  <form className='' onSubmit={(e) => handleAppointmentModalSubmit(e)}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Appointment Date</label>
                      <input value={appointmentDate} type="date" className="form-control" id="exampleInputDate1" aria-describedby="dateHelp" name='appointmentDateInput' onChange={(e) => handleAppointmentDate(e)} />
                    </div>
  
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Session</label>
                      <div className=" mt-0">
                        <select value={session} onChange={(e) => handleSession(e)} className="form-select" aria-label="Default select example" >
                          <option value="" >Select Option</option>
                          <option value="Morning">Morning</option>
                          <option value="Afternoon">Afternoon</option>
                          <option value="Evening">Evening</option>
                        </select>
                      </div>
                    </div>
  
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Time</label>
                      <input value={appointmentTime} onChange={handleAppointmentTime} type="time" className="form-control" id="exampleInputTime1" aria-describedby="dateHelp" name='appointmentTimeInput' />
                    </div>
  
  
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Doctor Name</label>
                      <div className="dropdown mt-0">
                        <select value={doctorName} onChange={(e) => handleDoctorName(e)} className="form-select" aria-label="Default select example" >
                          <option value="" >Select Option</option>
                          {
                            props.data1.doctors.map((item, index) => {
                              return (
                                <option value={item._id}>{item.doctorName}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
  
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Patient Name</label>
                      <div className="dropdown mt-0">
                        <select value={patientName} onChange={(e) => handlePatientName(e)} className="form-select" aria-label="Default select example"  >
                          <option value="" >Select Option</option>
                          {
                            props.data2.patients.map((item, index) => {
                              return (
                                <option value={item._id}>{item.patientName}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
  
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#007c9d" }}>Add Doctor</button>
                    </div>
                  </form>
                </div>
  
              </div>
  
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default AppointmentInfo