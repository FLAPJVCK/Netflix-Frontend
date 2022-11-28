import React from "react";
import error404Image from '../../images/404.png'

const CreateElement404 = () => {
    return React.createElement("div",
        {className: "error404"},
        React.createElement("div", {className: "page-not-found"}, "Page Not Found"),
        React.createElement("div", {}, React.createElement("img", {
            className: "image404",
            src: {error404Image},
            alt: "404 error"
        }, null)),
        React.createElement("button", {className: "go-back-to-home"}, "GO BACK TO HOME"))
}

export default CreateElement404
