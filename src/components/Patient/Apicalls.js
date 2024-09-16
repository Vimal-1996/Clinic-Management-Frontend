import axios from "axios"

export const userLogin = (userdata) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/patient/login', userdata)
            .then((res) => { resolve(res) })
            .catch((error_message) => { reject(error_message) })
    })
}

export const getDoctorDetails = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/admin/doctorDetails')
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const addNewAppointment = (appointmentDetails) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/patient/appointment', appointmentDetails)
            .then((res) => resolve(res))
            .catch((err) => { reject(err) })
    })
}

export const getUserAppointments = (userId) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/patient/getappointments', { userId })
            .then((res) => resolve(res))
            .catch((err) => { reject(err) })
    })
}

export const getPatientDetails = (userId) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/patient/getpatientdetails?id=${userId}`)
            .then((res) => resolve(res))
            .catch((err) => { reject(err) })
    })
}

export const editPatientDetails = (userInfo) => {
    console.log(userInfo)
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/patient/savepatientdetails', { userInfo })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const getMedicines = (userId) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/patient/medicines`, {
            params: {
                userId: userId
            }
        })
            .then((response) => resolve(response.data))
            .catch((err) => reject(err))
    })
}

