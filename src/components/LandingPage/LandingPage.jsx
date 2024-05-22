import React from 'react'
import '../LandingPage/LandingPage.css'
import {LandingImages} from '../LandingPage/Images'

const LandingPage = () => {
    return (
        <div>
            <div className="row">
                <div className="container">
                    <img src={LandingImages.backgroundImage}
                        className='landingImage'
                        style={{ "width": "100%", "maxHeight": "500px" }}
                    />

                    <div className="container" style={{"display":"flex"}}>
                        <div className="col-md-4 m-3" style={{"height":"40px"}}>
                            <div class="card" style={{ "width": "18rem", "margin":"35px" }}>
                                <img src={LandingImages.adminImage} class="card-img-top" alt="..." style={{"height":"300px"}}/>
                                <div class="card-body">
                                    <h5 class="card-title" style={{"fontWeight":"bold"}}>Admin Login</h5>
                                    <a href="/admin" class="btn btn-secondary">Admin Login</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-3">
                            <div class="card" style={{ "width": "18rem","margin":"35px"}}>
                                <img src={LandingImages.doctorImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title" style={{"fontWeight":"bold"}}>Doctor Login</h5>
                                   
                                    <a href="/doctor" class="btn btn-secondary">Doctor Login</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 m-3">
                            <div class="card" style={{ "width": "18rem", "margin":"35px" }}>
                                <img src={LandingImages.patientImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title" style={{"fontWeight":"bold"}}>Patient Login</h5>
                                    <a href="/patient" class="btn btn-secondary">Patient Login</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default LandingPage