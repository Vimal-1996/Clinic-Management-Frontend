import React from 'react'
import { useState } from 'react'
import { doctorImages } from './images'
import '../Doctor/Doctor.css'
import { doctorLogin } from './apicalls'
import { useNavigate } from 'react-router-dom'

const Doctor = () => {
  const navigate = useNavigate()
  const [doctorDetails, setDoctorDetails] = useState({
    doctorEmail: "",
    doctorPassword: ""
  })

  const handleDoctorDetails = (e) => {
    setDoctorDetails((prevDoctor) => ({
      ...prevDoctor,
      [e.target.name]: e.target.value
    }))
  }

  const handleDoctorSubmit = async(e) => {
    e.preventDefault();
    console.log()
    await doctorLogin(doctorDetails)
      .then((res) => { {console.log(res.data.doctor);navigate("/doctor/login", { state: res.data.doctor }) }})
      .catch((err) => console.log(err))
  }

  return (
    <div className='container-fluid d-flex justify-content-around mt-4 '>
      <div className='row custom-row '>
        <div className='col-sm-6  col-md-6 col-lg-6  col-xl-6 d-flex justify-content-center'>
          <img src={doctorImages.doctorImage1} className='doctor-image' />
        </div>

        <div className='container-fluid col-sm-6 col-md-6 col-lg-6  col-xl-6 d-flex justify-content-center '>
          <form className="input-form p-5 shadow" onSubmit={handleDoctorSubmit}>
            <div className=''>
              <div class="mb-3">
                <h3>Doctor Login</h3>
                <hr></hr>
                <label for="exampleInputEmail1" class="fobel" rm-la>Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="doctorEmail" value={doctorDetails.doctorEmail} onChange={handleDoctorDetails} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name='doctorPassword' value={doctorDetails.doctorPassword} onChange={handleDoctorDetails} />
              </div>
            </div>
            <button type="submit" class="btn submit-btn text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Doctor