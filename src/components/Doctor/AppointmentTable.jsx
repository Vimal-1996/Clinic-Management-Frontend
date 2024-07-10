import React from 'react'

const AppointmentTable = ({ lists }) => {

    const consultPatient=()=>{

    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">sl.no</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Phone</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        lists.map((list,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{list.patientDetails.patientName}</td>
                                <td>{list.appointmentDate}</td>
                                <td>{list.patientDetails.mobileNumber}</td>
                                <td >{list.consultationStatus == "pending" ? <a href={`/doctor/login/consultPatient?patientid=${list.patientDetails._id}&appointmentrefid=${list.appointmentRefid}`} className='bg bg-primary text-white p-1' style={{borderRadius:"10px"}}>Consult</a> : <span className='bg bg-success text-white p-1' style={{borderRadius:"10px"}}>Consulted</span>}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AppointmentTable