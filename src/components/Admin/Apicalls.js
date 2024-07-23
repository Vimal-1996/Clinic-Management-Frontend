import axios from "axios";
import { getCookie } from "../../Storage/cookies";


export const postAdminLogin = (email, password, role = 'admin') => {
    const userdata = { email, password }
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/login', userdata)
            .then((res) => { resolve(res) })
            .catch((error_message) => { reject(error_message) })
    })
}

export const getPatientDetails = () => {
    return new Promise((resolve, reject) => {

        axios.get('http://localhost:5000/admin/patientDetails', {
            headers: {
                'authorization': `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const getDoctorDetails = () => {
    return new Promise((resolve, reject) => {

        axios.get('http://localhost:5000/admin/doctorDetails', {
            headers: {
                'authorization': `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const addNewDoctorDetails = (doctorDetails) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/addnewdoctor', doctorDetails)
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const addNewPatientDetails = (patientDetails) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/addnewpatient', patientDetails)
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const addAppointmentDetails = (appointmentDetails) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/addnewappointment', appointmentDetails)
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const getAllAppointments = () => {
    return new Promise(async (resolve, reject) => {
        await axios.get('http://localhost:5000/admin/allappointments', {
            headers: {
                authorization: `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((get_result) => { resolve(get_result) })
            .catch((err) => { reject(err) })
    })
}

export const updateAppointmentStatus = (referenceId, appointmentStatus) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/updateappointmentstatus', { referenceId, appointmentStatus })
            .then((result) => { resolve(result) })
            .catch((err) => { reject(err) })
    })
}

export const deleteDoctor = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        await axios.get(`http://localhost:5000/admin/deletedoctor?doctorid=${doctorId}`, {
            headers: {
                authorization: `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((get_result) => resolve(get_result))
            .catch((err) => reject(err))
    })
}

export const deletePatient = (patientId) => {
    console.log(patientId)
    return new Promise(async (resolve, reject) => {
        await axios.get(`http://localhost:5000/admin/deletepatient?patientid=${patientId}`, {
            headers: {
                authorization: `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((get_result) => resolve(get_result))
            .catch((err) => reject(err))
    })
    
}

export const editDoctorDetails = (doctorDetails)=>{
    return new Promise(async(resolve,reject)=>{
        await axios.post(`http://localhost:5000/admin/editdoctor`,doctorDetails, {
            headers: {
                authorization: `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((get_result) => resolve(get_result))
            .catch((err) => console.log(err))
    })
}

export const editPatientDetails = (patientDetails)=>{
    console.log(editPatientDetails)
    return new Promise(async(resolve,reject)=>{
        await axios.post(`http://localhost:5000/admin/editpatient`,patientDetails, {
            headers: {
                authorization: `Bearer ${getCookie().tokenCookie}`
            }
        })
            .then((get_result) => resolve(get_result))
            .catch((err) => console.log(err))
    })
}