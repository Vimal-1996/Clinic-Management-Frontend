import React from 'react'
import { adminImages } from './images'

const DashboardInfo = () => {
    return (
        <div>
            <div className="col-md-4 m-3">
                <div class="card" style={{ "width": "18rem", "margin": "35px", }}>
                    <img src={adminImages.adminImage1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ "fontWeight": "bold" }}>Doctor Login</h5>
                        <a href="/doctor" class="btn btn-secondary">Doctor Login</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 m-3">
                <div class="card" style={{ "width": "18rem", "margin": "35px" }}>
                    <img src={adminImages.adminImage1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ "fontWeight": "bold" }}>Doctor Login</h5>
                        <a href="/doctor" class="btn btn-secondary">Doctor Login</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 m-3">
                <div class="card" style={{ "width": "18rem", "margin": "35px" }}>
                    <img src={adminImages.adminImage1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ "fontWeight": "bold" }}>Doctor Login</h5>
                        <a href="/doctor" class="btn btn-secondary">Doctor Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardInfo