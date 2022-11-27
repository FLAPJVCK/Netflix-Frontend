import React from "react";
import error404Image from "../../images/404.png";

class PureComponent404 extends React.PureComponent{
    render() {
        return(
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

export default PureComponent404
