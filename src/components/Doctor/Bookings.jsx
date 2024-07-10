import React, { useState } from 'react'
import AppointmentTable from './AppointmentTable'
import { useEffect } from 'react'
import { getBookings } from './apicalls'

const Bookings = () => {
  const [bookings, setBookings] = useState([])

  const getMyBookings = async () => {
    await getBookings(JSON.parse(localStorage.getItem('appointmentData'))._id)
      .then((response) => { setBookings(response.data.bookings) })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  useEffect(() => {
    console.log(bookings)
  }, [bookings])

  return (
    <div className='row'>
      <div className="col-sm-9">
        <div>
          <h3>Bookings</h3>
        </div>

        <div>
          <div className='table-responsive'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">sl.no</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Appointment Date</th>
                  <th scope="col">Phone</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  bookings.map((booking, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{booking.patientDetails.patientName}</td>
                      <td>{booking.appointmentDate}</td>
                      <td>{booking.patientDetails.mobileNumber}</td>
                      <div>
                        <td className='btn btn-success'>Accept</td>
                        <td className='btn btn-danger m-1'>Reject</td>
                      </div>

                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Bookings