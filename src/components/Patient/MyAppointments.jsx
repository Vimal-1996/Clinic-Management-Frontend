import React, { useEffect } from 'react'
import { useState } from 'react'
import { addNewAppointment, getDoctorDetails, getUserAppointments } from './Apicalls'

const MyAppointments = ({ data1 }) => {
  const [doctors, setDoctors] = useState([])
  const [appointments, setAppointments] = useState([])
  const [appointmentDate, setappointmentDate] = useState("")
  const [session, setSession] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [patientName, setPatientName] = useState(data1)

  useEffect(() => {
    getDoctorDetails()
      .then((response) => { setDoctors(response.data.doctors); })
      .catch((error_details) => { console.log(error_details) })

    getUserAppointments(data1)
      .then((response) => { setAppointments(response.data.appointments); })
      .catch((error_details) => { console.log(error_details) })
  }, [])


  const cancelAppointment=(appointmentId)=>{
    console.log("cancel appointment")
    console.log(appointmentId)
  }

  const handleAppointmentModalSubmit = (e) => {
    e.preventDefault()
    const appointmentInfo = { appointmentDate, appointmentTime, session, doctorName, patientName }
    addNewAppointment(appointmentInfo)
      .then((response) => { console.log(response.data); window.location.reload(); })
      .catch((err) => { console.log(err) })
  }

  const handleAppointmentDate = (e) => {
    setappointmentDate(e.target.value)
  }

  const handleAppointmentTime = (e) => {
    setAppointmentTime(e.target.value)
  }


  const handleDoctorName = (e) => {
    setDoctorName(e.target.value)
  }

  const handlePatientName = (e) => {
    setPatientName(data1)
  }

  const handleSession = (e) => {
    setSession(e.target.value)
  }



  return (
    <div className='container-fluid'>
      <div className="alert alert-danger" role='alert'>
        <a href='' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#addAppointmentModal"><h3 className=''>Add Appointments</h3></a>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h2>My Appointments</h2>
          <div className="row mt-3">
            <div className='container-fluid '>
              <div className="row">
                {
                  appointments.map((element, index) => {
                    return (
                      <div className="col-sm-4"  >
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
                                <button className='btn btn-danger' onClick={()=>cancelAppointment(element._id)}>Cancel Appointment</button>
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
                          doctors.map((item, index) => {
                            return (
                              <option value={item._id}>{item.doctorName}</option>
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

export default MyAppointments