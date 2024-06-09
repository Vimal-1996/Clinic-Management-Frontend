import axios from "axios";


export const postAdminLogin = (email,password)=>{
    const userdata = {email,password}
    return new Promise(async(resolve,reject)=>{
        await axios.post('http://localhost:5000/admin/login',userdata)
        .then((res)=>{resolve(res)})
        .catch((error_message)=>{reject(error_message)})
    })
}

export const getPatientDetails = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get('http://localhost:5000/admin/patientDetails')
        .then((res_data)=>{resolve(res_data)})
        .catch((err_data)=>{reject(err_data)})
    })
}