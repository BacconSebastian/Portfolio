import React from "react";

import './Spinner.css'


const Spinner = (props) => {
    return (
        <div className={"spinner " + props.class}>
            <div className="spinning"></div>
        </div>
    )
}

export default Spinner