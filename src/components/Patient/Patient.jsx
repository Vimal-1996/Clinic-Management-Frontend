import React from 'react'
import { useState } from 'react'
import PatientImages from './image'
import { LandingImages } from '../LandingPage/Images'
import { useNavigate } from 'react-router-dom'
import '../Patient/Patient.css'
import { userLogin } from './Apicalls'

const Patient = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error_message, setErrorMessage] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const UserLoginInfo = { email, password }
    await userLogin(UserLoginInfo)
      .then((res) => { navigate("/patient/login",{state:res.data.patient});})
      .catch((err) => { console.log(err) })
  }

  return (
    <div className='container-fluid d-flex justify-content-around mt-4 '>
      <div className='row custom-row '>
        <div className='col-sm-6 d-flex justify-content-center'>
          <img src={PatientImages.patientImage1} className='patient-image' />
        </div>

        <div className='col-sm-6 d-flex justify-content-center mt-4'>
          <form className="input-form p-5 shadow" onSubmit={(e) => handleFormSubmit(e)}>
            <div className=''>
              <div className="mb-3">
                <h3>Patient Login</h3>
                <hr></hr>
                <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => handleEmail(e)} />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => handlePassword(e)} />
              </div>
            </div>
            <button type="submit" className="btn submit-btn text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Patient