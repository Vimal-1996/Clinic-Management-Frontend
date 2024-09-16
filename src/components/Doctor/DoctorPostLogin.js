import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { doctorImages } from './images';
import Appointments from './Appointments'
import Bookings from './Bookings';
import MyPatients from './MyPatients'
import Results from './Results';
import Cookies from "js-cookie"


const DoctorPostLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [_id, setId] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [email, setEmail] = useState("");
    const [toggle, setToggle] = useState(1);

    const setLocalStorage = async () => {
        await setId(location.state ? location.state._id : {})
        await setDoctorName(location.state ? location.state.doctorName : {})
        await setEmail(location.state ? location.state.email : {})

        if (location.state && location.state._id && location.state.doctorName && location.state.email) {
            localStorage.setItem('appointmentData', JSON.stringify({
                _id: location.state._id,
                doctorName: location.state.doctorName,
                doctorEmail: location.state.email
            }));
        }
    }

    useEffect(() => {
        setLocalStorage();
    }, [])

    function changeStatus(status) {
        setToggle(status)
    }

    function handleChildResponse(data) {

    }

    const handleLogoutFunc=()=>{
        if(localStorage.getItem('appointmentData')){
         localStorage.removeItem('appointmentData')  
        }
        navigate('/')
    }

    return (

        <div className='container-fluid1 d-flex justify-content-around mt-4 '>
            <div className='row custom-row '>

                <div className='col-sm-3 '>
                    <div className='col-sm-12 profile-header d-flex justify-content-center p-4 mb-2'>

                        <div className='col-sm-12 '>
                            <div className='col-sm-12 d-flex justify-content-center'>
                                <img src={doctorImages.doctorImage1} className='admin-image-postlogin' />
                            </div>
                            <hr></hr>
                            <div className='col-sm-12 d-flex justify-content-center'>
                                <h4 className=''>{doctorName}</h4>
                            </div>
                            <hr></hr>
                            <div className='col-sm-12 d-flex justify-content-center'>
                                <h4 className=''>{email}</h4>
                            </div>
                        </div>
                    </div>

                    <div className='p-3'>
                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details '>
                            <a className='btn' onClick={() => changeStatus(1)}><h3 className='px-3 py-1'>Appointments</h3></a>

                        </div>

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn' onClick={() => changeStatus(2)}> <h3 className='px-3 py-1'>Bookings</h3></a>
                        </div>

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn ' onClick={() => changeStatus(3)}> <h3 className='px-3 py-1'>My Patients</h3></a>
                        </div>

                        {/* <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn ' onClick={() => changeStatus(4)}> <h3 className='px-3 py-1'>My Results</h3></a>
                        </div> */}

                        <div className='col-sm-12 d-flex justify-content-start  shadow profile-details'>
                            <a className='btn ' onClick={()=>handleLogoutFunc()}> <h3 className='px-3 py-1'>Log out</h3></a>
                        </div>
                    </div>

                </div>

                <div className='col-sm-9 '>
                    <div className=''>
                        {toggle === 1 ? <Appointments doctorId={_id} /> : null}
                    </div>

                    <div>
                        {toggle === 2 ? <Bookings doctorId={_id} /> : null}
                    </div>

                    <div>
                        {toggle === 3 ? <MyPatients doctorId={_id} /> : null}
                    </div>

                    {/* <div>
                        {toggle === 4 ? <Results doctorId={_id} /> : null}
                    </div> */}

                </div>

            </div>
        </div>
    )
}

export default DoctorPostLogin