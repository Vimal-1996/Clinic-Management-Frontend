import axios from "axios";


export const postAdminLogin = (email, password) => {
    const userdata = { email, password }
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/login', userdata)
            .then((res) => { resolve(res) })
            .catch((error_message) => { reject(error_message) })
    })
}

export const getPatientDetails = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/admin/patientDetails')
            .then((res_data) => { resolve(res_data) })
            .catch((err_data) => { reject(err_data) })
    })
}

export const getDoctorDetails = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/admin/doctorDetails')
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
        await axios.get('http://localhost:5000/admin/allappointments')
            .then((get_result) => { resolve(get_result) })
            .catch((err) => { reject(err) })
    })
}

export const updateAppointmentStatus = (referenceId,appointmentStatus) => {
    return new Promise(async (resolve, reject) => {
        await axios.post('http://localhost:5000/admin/updateappointmentstatus', {referenceId,appointmentStatus})
            .then((result) => { resolve(result) })
            .catch((err) => { reject(err) })
    })
}