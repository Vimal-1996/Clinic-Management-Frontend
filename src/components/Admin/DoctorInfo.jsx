import React, { useState } from 'react'

const DoctorInfo = () => {
  const [isChecked,setIsChecked] = useState(1)
  const handleSwitchChange = ()=>{
    setIsChecked(!isChecked)
  }

  return (
    <div className='container-fluid'>
      <div class="row">
        <div class="col-sm-12">
          <h2>List of Doctors</h2>
          <div className="row mt-3">
            <div className="col-sm-6 d-flex justify-content-start">
              <a href=''><h3 className=''>Add Doctors</h3></a>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <a href=''><h3 className=''>Search Doctors</h3></a>
            </div>
            <div className="col-sm-12 mt-4">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">sl.no</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Specialised</th>
                    <th scope="col">Speciality</th>
                    <th scope='col'>Account Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td style={{fontSize:"20px"}}>Mark</td>
                    <td style={{fontSize:"20px"}}>Otto</td>
                    <td style={{fontSize:"20px"}}>@mdo</td>
                    <td style={{fontSize:"20px"}}><div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked= {isChecked} onChange={handleSwitchChange}/>
                      <label class="form-check-label" for="flexSwitchCheckChecked">Operational</label>
                    </div></td>
                    <td style={{fontSize:"20px"}}>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorInfo