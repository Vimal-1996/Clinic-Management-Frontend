import React, { useEffect, useState } from 'react'
import { getCookie, deletecookie, setCookie } from '../../Storage/cookies'
import '../../components/Admin/AdminPostLogin.css'
import { adminImages } from '../Admin/assets'
import DoctorInfo from './DoctorInfo'
import DashboardInfo from './DashboardInfo'
import PatientInfo from './PatientInfo'
import AppointmentInfo from './AppointmentInfo'
import { getPatientDetails} from './Apicalls'
import { getDoctorDetails } from './Apicalls'
import { getAllAppointments } from './Apicalls'
import { useNavigate } from 'react-router-dom'



const AdminPostLogin = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState("")
  const [toggle, setToggle] = useState(1)
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [appointments,setAppointments] = useState([])

  useEffect(() => {
    getPatientDetails()
      .then((response) => { setPatients(response.data);})
      .catch((error_details) => { console.log(error_details) })

    getDoctorDetails()
      .then((response) => { setDoctors(response.data) ;})
      .catch((error_details) => { console.log(error_details) })

    getAllAppointments()
    .then((appointment_res)=>{setAppointments(appointment_res.data);})
    .catch((err)=>{console.log(err)})
  }, [])

  function changeStatus(status) {
    setToggle(status)
  }

  function handleChildResponse(data){
    setToggle(data)
  }
  
  function handleLogoutFunctionality(){
    deletecookie(getCookie().token)
    navigate("/admin")
  }


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
                <h4 className=''>{getCookie().emailCookie}</h4>
              </div>
            </div>
          </div>

          <div className='p-3'>
            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details '>
              <a className='btn' onClick={() => changeStatus(1)}><h3 className='px-3 py-1'>Dashboard</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn' onClick={() => changeStatus(2)}> <h3 className='px-3 py-1'>Appointments</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn ' onClick={() => changeStatus(3)}> <h3 className='px-3 py-1'>Doctors</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn ' onClick={() => changeStatus(4)}> <h3 className='px-3 py-1'>Patients</h3></a>
            </div>

            <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
              <a className='btn' onClick={()=>handleLogoutFunctionality()}> <h3 className='px-3 py-1'>Log Out</h3></a>
            </div>
          </div>

        </div>

        <div className='col-sm-9 '>
          <div className='d-flex justify-content-center align-items-center'>
            {toggle == 1 ? <DashboardInfo data1={doctors} data2={patients} data3={appointments}/> : null}
          </div>

          <div>
            {toggle == 2 ? <AppointmentInfo data1={doctors} data2={patients} data3={appointments}/> : null}
          </div>

          <div>
            {toggle == 3 ? <DoctorInfo data ={doctors}/> : null}
          </div>

          <div>
            {toggle == 4 ? <PatientInfo data={patients}  /> : null}
          </div>
        </div>

      </div>
    </div>

  )
}

export default AdminPostLogin