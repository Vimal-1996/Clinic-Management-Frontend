import React from 'react'
import { adminImages } from './images'
import '../Admin/Admin.css'
import { useState } from 'react'
import { postAdminLogin } from './Apicalls'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  let navigate = useNavigate();
  const [info, setInfo] = useState({ email: "", password: "" })

  return (
    <div className='container mt-3'>
      <div className='admin_container'>
        <div className='admin_container_1'>
          <img src={adminImages.adminImage1} />
        </div>
        <div className='admin_container_2'>
          <h2>Admin Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            setInfo({ ...info, email: "", password: "" })
            postAdminLogin(info.email, info.password).then((message) => { console.log(message); navigate("/admin/login") }).catch((err) =>{console.log(err); navigate(-1)})
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