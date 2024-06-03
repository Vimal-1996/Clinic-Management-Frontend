import React from 'react'
import { useState } from 'react'
import PatientImages from './image'
import { LandingImages } from '../LandingPage/Images'
import { useNavigate } from 'react-router-dom'
import '../Patient/Patient.css'

const Patient = () => {
  let navigate = useNavigate();
  const [info, setInfo] = useState({ email: "", password: "" })
  const [error_message, setErrorMessage] = useState("")

  return (
    <div className='container-fluid d-flex justify-content-around mt-4 '>
      <div className='row custom-row '>
        <div className='col-sm-6 d-flex justify-content-center'>
          <img src={PatientImages.patientImage1} className='patient-image' />
        </div>

        <div className='col-sm-6 d-flex justify-content-center mt-4'>
          <form className="input-form p-5 shadow" >
            <div className=''>
              <div class="mb-3">
                <h3>Patient Login</h3>
                <hr></hr>
                <label for="exampleInputEmail1" class="fobel" rm-la>Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
            </div>
            <button type="submit" class="btn submit-btn text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Patient