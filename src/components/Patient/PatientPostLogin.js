import React, { useEffect, useState } from 'react'
import { patientImages } from './assets'
import { useLocation, useNavigate } from 'react-router-dom'
import MyAccountEdit from './MyAccountEdit'
import MyAppointments from './MyAppointments'
import MyRequests from './MyRequests'
import MyResults from './MyResults'
import Cookies from "js-cookie"

const PatientPostLogin = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState(null)
    const [patientName, setPatientName] = useState(null)
    const [email, setEmail] = useState(null)
    const [toggle, setToggle] = useState(1);

    useEffect(() => {
        if(location.state){
            setId(location.state ? location.state._id : "")
            setPatientName(location.state ? location.state.patientName : "")
            setEmail(location.state ? location.state.email : "")
        }
    }, [location.state])

    useEffect(()=>{
        if(id && patientName && email){
            Cookies.set("userId", id)
            Cookies.set("patientName",patientName)
            Cookies.set("PatientEmail", email)
        }

    },[id,patientName,email])



    function changeStatus(status) {
        setToggle(status)
    }

    function handleChildResponse(data) {

    }

    function handleLogoutFunc(){
        Cookies.remove("userId")
        Cookies.remove("patientName")
        Cookies.remove("PatientEmail")
        navigate("/patient",{replace:true})

    }

    return (

        <div className='container-fluid1 d-flex justify-content-around mt-4 '>
            <div className='row custom-row '>

                <div className='col-sm-3 '>
                    <div className='col-sm-12 profile-header d-flex justify-content-center p-4 mb-2'>

                        <div className='col-sm-12 '>
                            <div className='col-sm-12 d-flex justify-content-center'>
                                <img src={patientImages.patientImage1} className='admin-image-postlogin' />
                            </div>
                            <hr></hr>
                            <div className='col-sm-12 d-flex justify-content-center'>
                                <h4 className=''>{patientName}</h4>
                            </div>
                            <hr></hr>
                            <div className='col-sm-12 d-flex justify-content-center'>
                                <h4 className=''>{email}</h4>
                            </div>
                        </div>
                    </div>

                    <div className='p-3'>
                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details '>
                            <a className='btn' onClick={() => changeStatus(1)}><h3 className='px-3 py-1'>My Account</h3></a>

                        </div>

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn' onClick={() => changeStatus(2)}> <h3 className='px-3 py-1'>My Appointments</h3></a>
                        </div>

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn ' onClick={() => changeStatus(3)}> <h3 className='px-3 py-1'>My Requests</h3></a>
                        </div>

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn ' onClick={() => changeStatus(4)}> <h3 className='px-3 py-1'>My Results</h3></a>
                        </div>

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn ' onClick={()=> handleLogoutFunc()}> <h3 className='px-3 py-1'>Log out</h3></a>
                        </div>
                    </div>

                </div>

                <div className='col-sm-9 '>
                    <div className=''>
                        {toggle === 1 ? <MyAccountEdit data1={id}/> : null}
                    </div>

                    <div>
                        {toggle === 2 ? <MyAppointments data1={id}/> : null}
                    </div>

                    <div>
                        {toggle === 3 ? <MyRequests data1={id}/> : null}
                    </div>

                    <div>
                        {toggle === 4 ? <MyResults data1={id}/> : null}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PatientPostLogin