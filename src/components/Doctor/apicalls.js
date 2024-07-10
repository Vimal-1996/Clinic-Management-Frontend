import axios from "axios"

export const doctorLogin = (doctorDetails) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/doctor/login', doctorDetails)
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}

export const getMyAppointments = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        await axios.get(`http://localhost:5000/doctor/getappointments?id=${doctorId}`)
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}

export const getBookings = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        await axios.get(`http://localhost:5000/doctor/bookings?id=${doctorId}`)
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}

export const getPatientDetails = (patientId) => {
    return new Promise(async (resolve, reject) => {
        await axios.get(`http://localhost:5000/doctor/getpatientinfo?patientid=${patientId}`)
            .then((resposne) => resolve(resposne))
            .catch((err) => reject(err))
    })
}

export const postPrescriptions = (prescriptionDetails)=>{
    return new Promise(async(resolve,reject)=>{
        await axios.post('http://localhost:5000/doctor/prescriptiondetails', prescriptionDetails)
        .then((response) => resolve(response))
        .catch((err) => reject(err))
    })
}

export const getPatients = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        await axios.get(`http://localhost:5000/doctor/getmypatients?id=${doctorId}`)
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}