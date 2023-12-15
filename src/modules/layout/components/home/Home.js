import React from "react";
import {Link} from 'react-router-dom';

let Home = () => {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                        <h3 className="display-3 animated slideInDown">Welcome to BrainsKart</h3>
                        <p className="lead px-3 animated slideInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate deleniti dolorum eaque eius, eveniet explicabo impedit incidunt laudantium perspiciatis placeat quae, quod saepe sapiente sunt temporibus unde veniam vitae!</p>
                        <Link to="/products/men" className="btn btn-brains btn-sm animated zoomIn">Shop Now</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;
