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
            <nav className="navbar navbar-light navbar-expand-lg bg-gradient">
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand text-white" href='/'>Denta-Care</a>
                </div>
                <div className="container-fluid justify-content-center">
                    <form className="row ">
                        <div className="col-md-6 mt-2">
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search Doctors" />
                        </div>
                        <div className="col-md-6  mt-2">
                            <button type="submit" className="btn btn-primary mb-3">Search</button>
                        </div>
                    </form>
                </div>
                <div className="container-fluid justify-content-start ">
                    <div className="row">
                        <div className="col md-6">
                            <span className="d-block p-2 text-white mt-2">Emergency Number </span>
                            <button type="button" className="btn btn-light my-2">1066</button>
                        </div>
                        <div className="col md-6 ">
                            <span className="d-block p-2 text-white mt-2">Denta-care life line</span>
                            <button type="button" className="btn btn-light my-2" style={{ width: "150px" }}>1860-500-1066</button>
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


