import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{"color":"white", "fontSize":"25px"}} href='/'>Clinic Management System</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class=""  aria-current="page" href='/doctor'>Doctor Login</a>
                            </li>
                        </ul>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class=""  aria-current="page" href='/patient'>Patient Login</a>
                            </li>
                        </ul>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class=""  aria-current="page"href='/admin'>Admin Login</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar