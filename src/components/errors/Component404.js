import React from "react";
import error404Image from '../../images/404.png'

class Component404 extends React.Component {
    render() {
        return (
            <div className="error404">
                <div className="page-not-found">Page Not Found</div>
                <div>
                    <img className="image404" src={error404Image} alt="404 error"/>
                </div>
                <button className="go-back-to-home">GO BACK TO HOME</button>
            </div>
        )
    }
}

export default Component404
