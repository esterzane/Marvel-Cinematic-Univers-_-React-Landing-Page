import React from "react";

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-dark bg-gradient text-light bg-opacity-25">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1600px-Marvel_Logo.svg.png" alt="Logo" width="75" height="35" class="d-inline-block align-text-top" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="collapsenavbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"> ➃ Fantastic Four </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Ⓐ Avangers </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> ⎊ Guardians of Galaxy </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> ⴵ Black Panther ~ Black Widow </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;

