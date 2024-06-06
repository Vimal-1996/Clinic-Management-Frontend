import React, { useEffect, useState } from 'react'
import { getCookie } from '../../Storage/cookies'
import '../../components/Admin/AdminPostLogin.css'
import { adminImages } from '../Admin/images'
import DoctorInfo from './DoctorInfo'
import DashboardInfo from './DashboardInfo'
import PatientInfo from './PatientInfo'
import AppointmentInfo from './AppointmentInfo'

const AdminPostLogin = () => {
  const [user, setUser] = useState("")
  const [toggle, setToggle] = useState(1)

  function changeStatus(status) {
    setToggle(status)
  }

  useEffect(() => {
    if (getCookie().emailCookie != null) {
      setUser(getCookie().emailCookie)
    } else {
      setUser("Login")
    }
  })
  return (

    <div className='container-fluid1 d-flex justify-content-around mt-4 '>
      <div className='row custom-row '>

        <div className='col-sm-3 '>
          <div className='col-sm-12 profile-header d-flex justify-content-center p-4 mb-2'>

            <div className='col-sm-12 '>
              <div className='col-sm-12 d-flex justify-content-center'>
                <img src={adminImages.adminImage1} className='admin-image-postlogin' />
              </div>
              <hr></hr>
              <div className='col-sm-12 d-flex justify-content-center'>
                <h4 className=''>Vimal</h4>
              </div>
              <hr></hr>
              <div className='col-sm-12 d-flex justify-content-center'>
                <h4 className=''>Vimal.j.mathew@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className='p-3'>
            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details '>
              <a className='btn' onClick={()=>changeStatus(1)}><h3 className='px-3 py-1'>Dashboard</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn' onClick={()=>changeStatus(2)}> <h3 className='px-3 py-1'>Appointments</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn ' onClick={()=>changeStatus(3)}> <h3 className='px-3 py-1'>Doctors</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn ' onClick={()=>changeStatus(4)}> <h3 className='px-3 py-1'>Patients</h3></a>
            </div>
          </div>

        </div>

        <div className='col-sm-9 d-flex align-items-center'>
          {toggle==1? <DashboardInfo/> : null}
          {toggle==2? <AppointmentInfo/> : null}
          {toggle==3? <DoctorInfo/> : null}
          {toggle==4? <PatientInfo/> : null}
        </div>

      </div>
    </div>

  )
}

export default AdminPostLogin