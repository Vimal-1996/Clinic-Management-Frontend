import React from 'react'
import '../LandingPage/LandingPage.css'
import { LandingImages } from '../LandingPage/Images'

const LandingPage = () => {
    return (
        <div className='container-fluid d-flex justify-content-around mt-4 '>
            <div className='row custom-row'>
                <div class="col-md-3 mt-2 p-4 d-flex justify-content-center shadow-sm">
                    <a href='/appointment'>
                        <div class="card p-3" style={{ "width": "14rem" }}>
                            <div className='d-flex justify-content-center'>
                                <img src={LandingImages.appointments} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body d-flex justify-content-center">
                                <h6 class="card-title">Book Appointment</h6>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-md-3  mt-2 p-4 d-flex justify-content-center shadow-sm">
                    <a href='/admin'>
                        <div class="card p-3" style={{ "width": "14rem" }}>
                            <div className='d-flex justify-content-center'>
                                <img src={LandingImages.adminImage} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body d-flex justify-content-center">
                                <h5 class="card-title">Admin Login</h5>

                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-md-3  mt-2 p-4 d-flex justify-content-center shadow-sm">
                    <a href='/doctor'>
                        <div class="card p-3 d-flex" style={{ "width": "14rem" }}>
                            <div className='d-flex justify-content-center'>
                                <img src={LandingImages.doctorImage} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body d-flex justify-content-center">
                                <h5 class="card-title">Doctor Login</h5>

                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-md-3  mt-2 p-4 d-flex justify-content-center shadow-sm">
                    <a href='/patient'>
                        <div class="card p-3" style={{ "width": "14rem" }}>
                            <div className='d-flex justify-content-center'>
                                <img src={LandingImages.patientImage} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body d-flex justify-content-center">
                                <h5 class="card-title">User Login</h5>

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}



export default LandingPage