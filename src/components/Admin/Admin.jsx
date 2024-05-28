import React from 'react'
import { adminImages } from './images'
import '../Admin/Admin.css'
import { useState } from 'react'
import { postAdminLogin } from './Apicalls'
import { useNavigate } from 'react-router-dom'
import { setCookie,getCookie } from '../../Storage/cookies'


const Admin = () => {
  let navigate = useNavigate();
  const [info, setInfo] = useState({ email: "", password: "" })
  const [error_message, setErrorMessage] = useState("")

  return (
    <div className='container mt-3'>
      <div className='admin_container'>
        <div className='admin_container_1'>
          <img src={adminImages.adminImage1} />
        </div>
        <div className='admin_container_2'>
          <h2>Admin Login</h2>
          <span><h4 style={{ color: "darkred" }}>{error_message}</h4></span>
          <form onSubmit={(e) => {
            e.preventDefault()
            setErrorMessage("")
            setInfo({ ...info, email: "", password: "" })
            postAdminLogin(info.email, info.password).then((res) => {
              setCookie(res.data.token.token,res.data.token.email)
              navigate("/admin/login");
            })
              .catch((err) => {
                setErrorMessage(err.response.data.message)
              })
          }}>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input value={info.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e) => { setInfo({ ...info, email: e.target.value }) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input value={info.password} type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={(e) => { setInfo({ ...info, password: e.target.value }) }} />
            </div>

            <button type="submit" className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin