import axios from "axios";


export const postAdminLogin = (email,password)=>{
    const userdata = {email,password}
    return new Promise(async(resolve,reject)=>{
        await axios.post('http://localhost:5000/admin/login',userdata)
        .then((res)=>{resolve(res)})
        .catch((error_message)=>{reject(error_message)})
    })
}