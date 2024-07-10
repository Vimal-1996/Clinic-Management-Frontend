import React, { useEffect, useState } from 'react'
import { editPatientDetails, getPatientDetails } from './Apicalls'

const MyAccountEdit = ({ data1 }) => {
  const [patient, setPatient] = useState({
    patientName: '',
    age: '',
    mobileNumber: '',
    email: '',
    password: ''
  });
  var id;
  const [alertBoxStatus, setAlertBoxStatus] = useState(false)

  useEffect(() => {
    getPatientDetails(data1)
      .then((res) => {
        setPatient(res.data.patient);
      })
      .catch((err) => console.log(err))
  }, [data1])

  const handleEditPatientInfoSubmit = (e) => {

    e.preventDefault();
    editPatientDetails(patient)
      .then((res) => {
        setAlertBoxStatus(true)

        setTimeout(()=>{
          setAlertBoxStatus(false)
        },1000)
      })
      .catch((err) => console.log(err))

  }

  const handlePatientDetails = (e) => {
    setPatient((prevPatient) => ({
      ...prevPatient,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        {
          alertBoxStatus && <InfoEditAlertBox/>
        }
        
        <div className="col-md-9 p-3" style={{ backgroundColor: "#C3CFD8", borderRadius: "20px" }}>
          <form className='' onSubmit={(e) => handleEditPatientInfoSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Patient Name</label>
              <input value={patient && patient.patientName} type="text" className="form-control" id="patientName" name='patientName' onChange={handlePatientDetails} />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
              <input value={patient && patient.age} type="text" className="form-control" id="age" name='age' onChange={handlePatientDetails} />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
              <input type="text" value={patient && patient.mobileNumber} className="form-control" id="mobileNumber" name='mobileNumber' onChange={handlePatientDetails} />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input type="email" value={patient && patient.email} className="form-control" id="email" name='email' onChange={handlePatientDetails} />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="text" value={patient && patient.password} className="form-control" id="password" name='password' onChange={handlePatientDetails} />
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#007c9d" }}>Save Changes</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

const InfoEditAlertBox = () => {
  return (
    <div class="alert alert-dark d-flex justify-content-center" role="alert">
      <h3>Details Updated</h3>
    </div>
  )
}

export default MyAccountEdit