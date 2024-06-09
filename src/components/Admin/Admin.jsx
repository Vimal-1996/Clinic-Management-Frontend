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
    <div className='container-fluid d-flex justify-content-around mt-4 '>
      <div className='row custom-row '>
        <div className='col-sm-6 d-flex justify-content-center'>
          <img src={adminImages.adminImage1} className='admin-image' />
        </div>

        <div className='col-sm-6 d-flex justify-content-center mt-4'>
          <form className="input-form p-5 shadow" onSubmit={(e) => {
            e.preventDefault()
            setErrorMessage("")
            postAdminLogin(info.email, info.password).then((res) => {
              setCookie(res.data.token.token,res.data.token.email)
              navigate("/admin/login");
            })
              .catch((err) => {
                setErrorMessage(err.response.data.message)
              })
          }}>
            <div className=''>
              <div className="mb-3">
                <h3>Admin Login</h3>
                <hr></hr>
                <label for="exampleInputEmail1" className="fobel" rm-la>Email address</label>
                <input type="email" value={info.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e) => { setInfo({ ...info, email: e.target.value }) }}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={info.password} className="form-control" id="exampleInputPassword1" name='password' onChange={(e) => { setInfo({ ...info, password: e.target.value }) }}/>
              </div>
            </div>
            <div className=''>
            <button type="submit" className="btn submit-btn text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin