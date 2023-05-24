import React from 'react'
import { Link} from 'react-router-dom';

function Home1() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid bg-light">
                    <a class="navbar-brand" href="#">BRUGU</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active"  aria-current="page" href="#"><span data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">Home</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/forms" class="nav-link text-dark"  aria-current="page" href="#"><span  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Register</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/users' class="nav-link text-dark" aria-current="page" href="#"><span  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Users</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Home1;