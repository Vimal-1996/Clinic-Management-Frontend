import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
//import AddPatientModal from './AddPatientModal';
import { doctorSpecialised, doctorSpeciality } from './assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addNewDoctorDetails, addNewPatientDetails, deletePatient, editDoctorDetails, editPatientDetails } from './Apicalls';
import { useNavigate } from 'react-router-dom';

const PatientInfo = (props) => {
  const navigate = useNavigate();
  const [isCheckedArray, setIsCheckedArray] = useState([]);
  const [isModalOpen, setIsModalopen] = useState(false)
  const [patientName, setPatientName] = useState("")
  const [patientAge, setPatientAge] = useState("")
  const [patientMobileNumber, setPatientMobileNumber] = useState("")
  const [id,setPatientId] = useState("")


  const handleEdit = (item) => {
    setPatientName(item.patientName)
    setPatientAge(item.age)
    setPatientMobileNumber(item.mobileNumber)
    setPatientId(item._id)
  }

  const handleDelete = async (id) => {
    await deletePatient(id)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err))

  }

  const handlePatientName = (e) => {
    setPatientName(e.target.value)
  }

  const handlePatientAge = (e) => {
    setPatientAge(e.target.value)
  }

  const handlePatientMobileNumber = (e) => {
    setPatientMobileNumber(e.target.value)
  }

  const handlePatientModalSubmit = async (e) => {
    e.preventDefault();
    const patientDetails = {
      patientName: patientName,
      patientAge: patientAge,
      patientMobileNumber: patientMobileNumber
    }
    await addNewPatientDetails(patientDetails)
      .then((response) => { window.location.reload() })
      .catch((err) => { console.log(err) })
  }

  const editPatientModalSubmit = async (e) => {
    e.preventDefault()
    let patientDetails = {
      id:id,
      patientName: patientName,
      age: patientAge,
      mobileNumber: patientMobileNumber
    }
    await editPatientDetails(patientDetails)
      .then(() => window.location.reload())
      .catch((err) => console.log(err))
  }

  const handleSwitchChange = (event, index) => {
    const newIsCheckedArray = [...isCheckedArray]
    newIsCheckedArray[index] = !newIsCheckedArray[index];
    setIsCheckedArray(newIsCheckedArray)
    console.log(isCheckedArray);
  }

  useEffect(() => {
    const fetchData = () => {
      const newIsCheckedArray = props.data.patients.map(doctor => doctor.accountStatus);
      setIsCheckedArray(newIsCheckedArray)
    }
    fetchData();
  }, [props.data.patients])

  useEffect(() => {
    console.log(isCheckedArray);
  }, [isCheckedArray])

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-sm-12">
          <h2>List of Patients</h2>
          <div className="row mt-3">
            <div className="col-sm-6 d-flex justify-content-start">
              <a href='#' data-bs-toggle="modal" data-bs-target="#addPatientModal"><h3 className=''>Add Patients</h3></a>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <a href=''><h3 className=''>Search Patients</h3></a>
            </div>
            <div className="col-sm-12 mt-4">
              <table className="table table-hover">
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
                  {props.data.patients.map((item, index) => (
                    <tr key={index}>
                      <th style={{ fontSize: "20px" }} scope="row">{index + 1}</th>
                      <td style={{ fontSize: "20px" }}>{item.patientName}</td>
                      <td style={{ fontSize: "20px" }}>{item.age}</td>
                      <td style={{ fontSize: "20px" }}>{item.mobileNumber}</td>
                      <td><div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id={`flexSwitchCheckChecked${index}`} checked={isCheckedArray[index]} onChange={(e) => handleSwitchChange(e, index)} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{isCheckedArray[index] ? "Active" : "Inactive"}</label>
                      </div></td>
                      <td style={{ fontSize: "20px" }}>
                        <div className='row'>
                          <div className='col-sm-6' >
                            <a href='#' data-bs-toggle="modal" data-bs-target="#editPatientModal" onClick={(e) => handleEdit(item)}><FontAwesomeIcon icon={faMarker} /></a>
                          </div>
                          <div className='col-sm-6'>
                            <FontAwesomeIcon icon={faTrash} onClick={(e) => handleDelete(item._id)} />
                          </div>
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

      {/* Add Patient Modal */}
      <div class="modal fade" id="addPatientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Add Patient</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="row p-4">
                <form className='' onSubmit={(e) => handlePatientModalSubmit(e)}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={patientName} onChange={(e) => handlePatientName(e)} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="Number" class="form-control" id="exampleInputSpecialised" min={1} max={110} value={patientAge} onChange={(e) => handlePatientAge(e)} />

                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={patientMobileNumber} onChange={(e) => handlePatientMobileNumber(e)} />

                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#007c9d" }}>Add Patient</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*Edit Patient Modal */}
      <div class="modal fade" id="editPatientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Edit Patient</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="row p-4">
                <form className='' onSubmit={(e) => editPatientModalSubmit(e)}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={patientName} readOnly />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="Number" class="form-control" id="exampleInputSpecialised" min={1} max={110} value={patientAge} onChange={(e) => handlePatientAge(e)} />

                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={patientMobileNumber} onChange={(e) => handlePatientMobileNumber(e)} />

                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#007c9d" }}>Save Patient</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo