import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import { getCookie } from '../../Storage/cookies'

const Navbar = () => {
    const [user,setUser] = useState("")

    useEffect(()=>{
        if(getCookie().emailCookie!=null){ 
            setUser(getCookie().emailCookie)
        }else{
            setUser("Login")
        }
    })

    return (
        <div>
            <nav className="navbar navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{"color":"white", "fontSize":"25px"}} href='/'>Clinic Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className=""  aria-current="page" href='/doctor'>Doctor Login</a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className=""  aria-current="page" href='/patient'>Patient Login</a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className=""  aria-current="page"href='/admin'>Admin Login</a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className=""aria-current="page"href='/admin'>{user}</a> 
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar