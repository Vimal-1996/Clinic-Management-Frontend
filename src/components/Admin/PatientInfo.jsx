import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';


const PatientInfo = (props) => {
  const [isCheckedArray, setIsCheckedArray] = useState(new Array(props.data.patients.length).fill(true));
 

  const handleSwitchChange = (event,index) => {
    const newIsCheckedArray = [...isCheckedArray]
    newIsCheckedArray[index] = !newIsCheckedArray[index];
    setIsCheckedArray(newIsCheckedArray)
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className='container-fluid'>
      <div class="row">
        <div class="col-sm-12">
          <h2>List of Patients</h2>
          <div className="row mt-3">
            <div className="col-sm-6 d-flex justify-content-start">
              <a href=''><h3 className=''>Add Patients</h3></a>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <a href=''><h3 className=''>Search Patients</h3></a>
            </div>
            <div className="col-sm-12 mt-4">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">sl.no</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Mobile number</th>
                    <th scope="col">Account Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody> 
                {props.data.patients.map((item,index)=>(
                  <tr key={index}>
                      <th style={{ fontSize: "20px" }} scope="row">{index+1}</th>
                      <td style={{ fontSize: "20px" }}>{item.patientName}</td>
                      <td style={{ fontSize: "20px" }}>{item.age}</td>
                      <td style={{ fontSize: "20px" }}>{item.mobileNumber}</td>
                      <td><div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id={`flexSwitchCheckChecked${index}`} checked={isCheckedArray[index]} onChange={(e)=>handleSwitchChange(e,index)} />
                        <label class="form-check-label" for="flexSwitchCheckChecked">{isCheckedArray[index] ? "Active":"Inactive"}</label>
                      </div></td>
                      <td style={{ fontSize: "20px" }}>
                        <div>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo