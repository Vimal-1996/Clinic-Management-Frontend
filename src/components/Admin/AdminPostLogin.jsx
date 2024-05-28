import React, { useEffect, useState } from 'react'
import { getCookie } from '../../Storage/cookies'
import '../../components/Admin/Admin.css'
import { adminImages } from '../Admin/images'
import DoctorInfo from './DoctorInfo'
import DashboardInfo from './DashboardInfo'
import PatientInfo from './PatientInfo'
import AppointmentInfo from './AppointmentInfo'

const AdminPostLogin = () => {
  const [user, setUser] = useState("")
  const [toggle,setToggle] = useState(1)

  function changeStatus(status){
    console.log(status)
  }
  useEffect(() => {
    if (getCookie().emailCookie != null) {
      setUser(getCookie().emailCookie)
    } else {
      setUser("Login")
    }
  })
  return (

    <div className='maincontainer'>
      <div className="sidebar">
        <div className="sidebarheader">
          <img src={adminImages.adminImage1} style={{ height: '90%', width: '80%' }}></img>
        </div>
        <div className='sidebarfooter'>
          <h4><a href='#' onClick={()=>{
            setToggle(1)
            changeStatus(1)
          }}>Dashboard</a></h4>
          <h4><a href='#' onClick={()=>{
            setToggle(2)
            changeStatus(2)
          }}>Doctors</a></h4>
          <h4><a href='#' onClick={()=>{
            setToggle(3)
            changeStatus(3)
          }}>Patients</a></h4>
          <h4><a href='#' onClick={()=>{
            setToggle(4)
            changeStatus(4)
          }}>Appointments</a></h4>
        </div>
      </div>
      <div className="bodypart">
        <div className='m-4'><h3>Welcome Admin</h3></div>
        <div className="adm-container">
          {toggle == 1 ? <DashboardInfo/>:null}
          {toggle == 2 ? <DoctorInfo/>:null}
          {toggle == 3 ? <PatientInfo/>:null}
          {toggle == 4 ? <AppointmentInfo/>:null}
        </div>
        


      </div>


    </div>


  )
}

export default AdminPostLogin