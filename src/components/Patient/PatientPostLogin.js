import React, { useEffect, useState } from 'react'
import { patientImages } from './assets'
import { useLocation } from 'react-router-dom'
import MyAccountEdit from './MyAccountEdit'
import MyAppointments from './MyAppointments'
import MyRequests from './MyRequests'
import MyResults from './MyResults'

const PatientPostLogin = () => {

    const location = useLocation();
    const [_id, setId] = useState("")
    const [patientName, setPatientName] = useState("")
    const [email, setEmail] = useState("")
    const [toggle, setToggle] = useState(1);

    useEffect(() => {
        setId(location.state ? location.state._id : {})
        setPatientName(location.state ? location.state.patientName : {})
        setEmail(location.state ? location.state.email : {})
    }, [])
    function changeStatus(status) {
        setToggle(status)
    }

    function handleChildResponse(data) {

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
                            <a className='btn ' > <h3 className='px-3 py-1'>Log out</h3></a>
                        </div>
                    </div>

                </div>

                <div className='col-sm-9 '>
                    <div className=''>
                        {toggle === 1 ? <MyAccountEdit /> : null}
                    </div>

                    <div>
                        {toggle === 2 ? <MyAppointments data1={_id}/> : null}
                    </div>

                    <div>
                        {toggle === 3 ? <MyRequests /> : null}
                    </div>

                    <div>
                        {toggle === 4 ? <MyResults /> : null}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PatientPostLogin