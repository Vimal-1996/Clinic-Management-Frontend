import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import { getCookie } from '../../Storage/cookies'

const Navbar = () => {
    const [user, setUser] = useState("")

    useEffect(() => {
        if (getCookie().emailCookie != null) {
            setUser(getCookie().emailCookie)
        } else {
            setUser("Login")
        }
    })

    return (

        <div className='container-fluid '>
            <nav class="navbar navbar-light navbar-expand-lg bg-gradient">
                <div class="container-fluid d-flex justify-content-center">
                    <a class="navbar-brand text-white" href='/'>Denta-Care</a>
                </div>
                <div class="container-fluid justify-content-center">
                    <form class="row ">
                        <div class="col-md-6 mt-2">
                            <input type="text" class="form-control" id="inputPassword2" placeholder="Search Doctors" />
                        </div>
                        <div class="col-md-6  mt-2">
                            <button type="submit" class="btn btn-primary mb-3">Search</button>
                        </div>
                    </form>
                </div>
                <div class="container-fluid justify-content-start ">
                    <div className="row">
                        <div className="col md-6">
                            <span className="d-block p-2 text-white mt-2">Emergency Number </span>
                            <button type="button" class="btn btn-light my-2">1066</button>
                        </div>
                        <div className="col md-6 ">
                            <span className="d-block p-2 text-white mt-2">Denta-care life line</span>
                            <button type="button" class="btn btn-light my-2" style={{ width: "150px" }}>1860-500-1066</button>
                        </div>
                    </div>
                </div>

            </nav>
            <div className='seperator'>

            </div>
        </div>
    )
}

export default Navbar


