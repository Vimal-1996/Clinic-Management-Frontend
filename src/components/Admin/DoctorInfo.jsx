import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import { doctorSpecialised, doctorSpeciality } from './assets';
import { addNewDoctorDetails, deleteDoctor, editDoctorDetails } from './Apicalls';
import '../Admin/Admin.css'
import { useNavigate } from 'react-router-dom';

const DoctorInfo = (props) => {
  const [isCheckedArray, setIsCheckedArray] = useState([]);
  const [specialisedValue, setSpecialisedValue] = useState("")
  const [specialityValue, setSpecialityValue] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [id, setId] = useState("")
  const navigate = useNavigate();

  const handleSwitchChange = (event, index) => {
    const newIsCheckedArray = [...isCheckedArray]
    newIsCheckedArray[index] = !newIsCheckedArray[index];
    setIsCheckedArray(newIsCheckedArray)
    console.log(isCheckedArray)
  }

  const handleEdit = (elem) => {
    setId(elem._id)
    setDoctorName(elem.doctorName)
    setSpecialisedValue(elem.specialised)
    setSpecialityValue(elem.speciality)
  }

  const handleDelete = async (id) => {
    await deleteDoctor(id)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err))

  }
  const handleSpecialisedChange = (e) => {
    setSpecialisedValue(e.target.value)
  }

  const handleSpecialityChange = (e) => {
    setSpecialityValue(e.target.value)
  }

  const handleDoctorModalSubmit = async (e) => {
    e.preventDefault();
    const newDoctorDetails = {
      doctorName: doctorName,
      specialised: specialisedValue,
      speciality: specialityValue
    }
    await addNewDoctorDetails(newDoctorDetails)
      .then((response) => { window.location.reload() })
      .catch((err) => { console.log(err) })
  }

  const handleDoctorName = (e) => {
    setDoctorName(e.target.value)
  }

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    await editDoctorDetails({ id, doctorName, specialisedValue, specialityValue })
      .then((res) => {console.log("captured");window.location.reload()})
      .catch((err) => console.log(err))

  }

  useEffect(() => {
    const fetchData = () => {
      const newIsCheckedArray = props.data.doctors.map(doctor => doctor.accountStatus);
      setIsCheckedArray(newIsCheckedArray)
    }
    fetchData();
  }, [props.data.doctors])

  useEffect(() => {
    console.log("effect called1:" + specialisedValue)
  }, [specialisedValue])

  useEffect(() => {
    console.log("effect called2:" + specialityValue)
  }, [specialityValue])


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-sm-12">
          <h2>List of Doctors</h2>
          <div className="row mt-3">
            <div className="col-sm-6 d-flex justify-content-start">
              <a href='' data-bs-toggle="modal" data-bs-target="#addDoctorModal"><h3 className=''>Add Doctors</h3></a>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <a href=''><h3 className=''>Search Doctors</h3></a>
            </div>
            <div className="col-sm-12 mt-4">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">sl.no</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Specialised</th>
                    <th scope="col">Speciality</th>
                    <th scope="col">Account Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.doctors.map((item, index) => (
                    <tr key={index}>
                      <th style={{ fontSize: "20px" }} scope="row">{index + 1}</th>
                      <td style={{ fontSize: "20px" }}>{item.doctorName}</td>
                      <td style={{ fontSize: "20px" }}>{item.specialised}</td>
                      <td style={{ fontSize: "20px" }}>{item.speciality}</td>
                      <td><div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id={`flexSwitchCheckChecked${index}`} checked={isCheckedArray[index]} onChange={(e) => handleSwitchChange(e, index)} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{isCheckedArray[index] ? "Active" : "Inactive"}</label>
                      </div></td>
                      <td style={{ fontSize: "20px" }}>
                        <div className='row'>
                          <div className='col-sm-6'>
                            <a href='' data-bs-toggle="modal" data-bs-target="#editDoctorModal" onClick={() => handleEdit(item)}> <FontAwesomeIcon icon={faMarker} /> </a>
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

      {/* Add doctor Modal */}
      <div class="modal fade" id="addDoctorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Add Doctor</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="row p-4">
                <form className='' onSubmit={(e) => handleDoctorModalSubmit(e)}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Doctor Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='doctorNameInput' value={doctorName} onChange={(e) => handleDoctorName(e)} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Specialised</label>
                    <div class=" mt-0">
                      <select value={specialisedValue} class="form-select" aria-label="Default select example" onChange={(e) => handleSpecialisedChange(e)}>
                        <option >Select Option</option>
                        {
                          doctorSpecialised.specialised.map((spec, index) => {
                            return (
                              <option value={spec}>{spec}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Speciality</label>
                    <div class="dropdown mt-0">
                      <select value={specialityValue} class="form-select" aria-label="Default select example" onChange={handleSpecialityChange}>
                        <option value="" >Select Option</option>
                        {
                          doctorSpeciality.speciality.map((spec, index) => {
                            return (
                              <option value={spec}>{spec}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#007c9d" }}>Add Doctor</button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/*Edit Doctor Modal */}

      <div class="modal fade" id="editDoctorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Edit Doctor</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="row p-4">
                <form className='' onSubmit={(e) => handleSaveChanges(e)}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Doctor Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='doctorNameInput' value={doctorName} readOnly />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Specialised</label>
                    <div class=" mt-0">
                      <select value={specialisedValue} class="form-select" aria-label="Default select example" onChange={(e) => handleSpecialisedChange(e)}>
                        <option >Select Option</option>
                        {
                          doctorSpecialised.specialised.map((spec, index) => {
                            return (
                              <option value={spec}>{spec}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Speciality</label>
                    <div class="dropdown mt-0">
                      <select value={specialityValue} class="form-select" aria-label="Default select example" onChange={handleSpecialityChange}>
                        <option value="" >Select Option</option>
                        {
                          doctorSpeciality.speciality.map((spec, index) => {
                            return (
                              <option value={spec}>{spec}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#007c9d" }}>Save Changes</button>
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

export default DoctorInfo