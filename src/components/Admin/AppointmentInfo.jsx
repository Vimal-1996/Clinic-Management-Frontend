import React from 'react'

const AppointmentInfo = () => {
  return (
    <div className='container-fluid'>
      <div class="row">
        <div class="col-sm-12">
          <h2>List of Appointments</h2>
          <div className="row mt-3">
            <div className="col-sm-6 d-flex justify-content-start">
              <a href=''><h3 className=''>Add Appointments</h3></a>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <a href=''><h3 className=''>Search Appointments</h3></a>
            </div>

            <div className='container-fluid d-flex justify-content-center align-items-center'>
              <div class="row d-flex justify-content-center ">
                <div class="col-sm-4 d-flex justify-content-center mt-2"  >
                  <div class="card" style={{ width: "400px" }}>
                    <div class="card-body shadow" >
                      <div className="row">
                        <div className="col-sm-8 " style={{ height: "200px" }}>
                          <h4 class="">Appointment Date :</h4>
                          <h4 class="">Session :</h4>
                          <h4 class="">Time :</h4>
                          <h4 class="">Booking for :</h4>
                          <h4 class="">Appointment Ref Id :</h4>
                        </div>
                        <div className="col-sm-4" style={{ height: "200px" }}>
                          <h1></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 d-flex justify-content-center mt-2"  >
                  <div class="card" style={{ width: "400px" }}>
                    <div class="card-body shadow" >
                      <div className="row">
                        <div className="col-sm-8 " style={{ height: "200px" }}>
                          <h4 class="">Appointment Date :</h4>
                          <h4 class="">Session :</h4>
                          <h4 class="">Time :</h4>
                          <h4 class="">Booking for :</h4>
                          <h4 class="">Appointment Ref Id :</h4>
                        </div>
                        <div className="col-sm-4" style={{ height: "200px" }}>
                          <h1></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 d-flex justify-content-center mt-2"  >
                  <div class="card" style={{ width: "400px" }}>
                    <div class="card-body shadow" >
                      <div className="row">
                        <div className="col-sm-8 " style={{ height: "200px" }}>
                          <h4 class="">Appointment Date :</h4>
                          <h4 class="">Session :</h4>
                          <h4 class="">Time :</h4>
                          <h4 class="">Booking for :</h4>
                          <h4 class="">Appointment Ref Id :</h4>
                        </div>
                        <div className="col-sm-4" style={{ height: "200px" }}>
                          <h1></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentInfo