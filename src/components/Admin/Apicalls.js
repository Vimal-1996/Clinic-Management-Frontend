import axios from "axios";


export const postAdminLogin = (email,password)=>{
    const userdata = {email,password}
    return new Promise(async(resolve,reject)=>{
        await axios.post('http://localhost:5000/admin/login',userdata)
        .then((res)=>resolve("Successfully received message"))
        .catch((_)=>reject("Error in login post messsage"))
    })
}