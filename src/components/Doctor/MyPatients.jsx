import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getPatients } from './apicalls'

const MyPatients = () => {
  const [patients, setPatients] = useState([])

  const getMyPatients = async () => {
    await getPatients(JSON.parse(localStorage.getItem('appointmentData'))._id)
      .then((response) => { setPatients(response.data.mypatients) })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getMyPatients()
  }, [])

  useEffect(() => {
    console.log(patients)
  }, [patients])

  return (
    <div className="row">
      <div className="col-sm-9">
        <div>
          <h3>Patients</h3>
        </div>

        <div>
          <div className="table-responsive">
            <table className='table table-striped'>
            <thead>
              <tr>
                <th scope="col">sl.no</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Session</th>
                <th scope="col">Phone</th>
                <th scope="col">Time</th>
                <th scope='col'>Appointment Ref Id</th>
              </tr>
            </thead>

            <tbody>
              {
                patients.map((patient, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{patient.patientDetails.patientName}</td>
                    <td>{patient.appointmentDate}</td>
                    <td>{patient.session}</td>
                    <td>{patient.patientDetails.mobileNumber}</td>
                    <td>{patient.time}</td>
                    <td>{patient.appointmentRefid}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MyPatients