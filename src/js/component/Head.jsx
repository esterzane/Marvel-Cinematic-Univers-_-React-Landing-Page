import React from "react";

const Header = () => {
    return (
        <div className="card-body container-fluid text-align px-4 py-4">
            <h1 className="card-title fw-light d-inline-block w-50 p-3" >Excelsior, True Believers! </h1>
            <br />
            <p className="card-text position-center fw-light">The Marvel Cinematic Universe has taken us on an incredible journey, filled with heroic adventures, epic battles, and heartwarming moments. From the armored genius of Iron Man to the mythic might of Thor and the web-slinging prowess of Spider-Man, Marvel movies have woven an intricate tapestry of storytelling that captivates audiences of all ages. With each new installment, fans eagerly await the next chapter in this larger-than-life saga, where superheroes rise, villains fall, and the excitement never ends. Get ready to embark on another thrilling adventure in the world of Marvel, where the extraordinary is just a click away..</p>
                <button className="btn btn-outline-danger me-2 mb-2"> ✎ Marvel Cinematic Universe </button>
                <button className="btn btn-outline-success me-2 mb-2"> ✎ Marvel Comics </button>
        </div>
    );

};

export default Header; 
