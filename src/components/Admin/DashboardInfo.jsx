import React from 'react'
import { adminImages } from './images'

const DashboardInfo = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div class="row d-flex justify-content-center ">
                <div class="col-sm-4 d-flex justify-content-center" style={{ height: "200px"}} >
                    <div class="card" style={{ width: "400px" }}>
                        <div class="card-body shadow" >
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 class="">Doctors</h2>
                                </div>
                                <div className="col-sm-4">
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card " style={{ width: "400px" }}>
                        <div class="card-body shadow">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 class="">Patients</h2>
                                </div>
                                <div className="col-sm-4">
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card " style={{ width: "400px" }}>
                        <div class="card-body shadow">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 class="">Appointments</h2>
                                </div>
                                <div className="col-sm-4">
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardInfo