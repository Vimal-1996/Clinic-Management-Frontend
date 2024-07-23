import React, { useEffect, useState } from 'react'
import { adminImages } from './assets'
import AppointmentInfo from './AppointmentInfo';

const DashboardInfo = (props) => {
    const [doctorCount, setDoctorCount] = useState(0);
    const [patientCount, setPatientCount] = useState(0);
    const [appointmentCount, setAppointmentCount] = useState(0);

    useEffect(() => {
        props.data1 && props.data1.doctors ? setDoctorCount(props.data1.doctors.length) : setDoctorCount(0)
        props.data2 && props.data2.patients ? setPatientCount(props.data2.patients.length) : setPatientCount(0)
        props.data3 && props.data3.appointments ? setAppointmentCount(props.data3.appointments.length) : setAppointmentCount(0)
    }, [props.data1, props.data2, props.data3])

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className="row d-flex justify-content-center ">

                <div className="col-sm-4 d-flex justify-content-center" style={{ height: "200px" }} >
                    
                        <div className="card" style={{ width: "400px" }}>
                            <div className="card-body shadow" >
                                <div className="row">
                                    <div className="col-sm-8 d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                                        <h1 className="">Doctors</h1>
                                    </div>
                                    <div className="col-sm-4 d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                                        <h1>{doctorCount}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>

                <div className="col-sm-4 d-flex justify-content-center">
                   
                        <div className="card " style={{ width: "400px" }}>
                            <div className="card-body shadow">
                                <div className="row">

                                    <div className="col-sm-8 d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                                        <h1 className="">Patients</h1>
                                    </div>
                                    <div className="col-sm-4 d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                                        <h1>{patientCount}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>

                <div className="col-sm-4 d-flex justify-content-center" >
                        <div className="card " style={{ width: "400px" }}>
                            <div className="card-body shadow">
                                <div className="row">
                                    <div className="col-sm-8 d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                                        <h1 className="">Appointments</h1>
                                    </div>
                                    <div className="col-sm-4 d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                                        <h1>{appointmentCount}</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        </div>
    )
}

export default DashboardInfo