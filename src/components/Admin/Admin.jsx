import React from 'react'
import { adminImages } from './images'
import '../Admin/Admin.css'

const Admin = () => {
  return (
    <div className='container mt-3'>
      <div className='admin_container'>
        <div className='admin_container_1'>
          <img src={adminImages.adminImage1} />
        </div>
        <div className='admin_container_2'>
          <h2>Admin Login</h2>
          <form>
            
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" class="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin