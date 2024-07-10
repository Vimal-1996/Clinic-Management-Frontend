import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getPatientDetails, postPrescriptions } from './apicalls';

const Prescriptions = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [patientId, setPatientId] = useState('');
    const [patientName, setPatientName] = useState('')
    const [patientAge, setPatientAge] = useState('')
    const [appointmentReferenceId,setAppointmentReferenceId] = useState('')
    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(text)
        const formData = {
            appointmentReferenceId,
            patientId,
            text
        }
        await postPrescriptions(formData)
            .then((res) => {console.log(res.data);navigate("/doctor/login", { state: JSON.parse(localStorage.getItem('appointmentData')) })})
            .catch((err) => console.log(err))

    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const getPatientId = async () => {
        const searchParams = new URLSearchParams(location.search);
        setPatientId(searchParams.get('patientid'));
        setAppointmentReferenceId(searchParams.get('appointmentrefid'))
    }

    const patientDetails = async () => {
        await getPatientDetails(patientId)
            .then((res) => {
                setPatientName(res.data.patientDetails[0].patientName);
                setPatientAge(res.data.patientDetails[0].age)
                console.log(res.data.patientDetails)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPatientId();
        patientDetails();
    }, [patientId])

    //   useEffect(()=>{
    //     console.log(patientId)
    //   },[patientId])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{ backgroundColor: "beige" }}>
                    <div className='d-flex justify-content-between mt-4'>
                        <div className=''>
                            <div><h3>Name :  {patientName}</h3></div>
                        </div>
                        <div className=''>
                            <div><h3>Age : {patientAge}</h3></div>
                        </div>
                    </div>

                    <div className='' >
                        <div>
                            <h3>Prescription</h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                                <textarea className='form-control' rows="4" value={text} onChange={handleTextChange} style={{ width: '100%', height: '65vh' }}></textarea>
                            </div>
                            <div className='p-3'>
                                <button type='submit' className='btn btn-success '>Submit Changes</button>
                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prescriptions