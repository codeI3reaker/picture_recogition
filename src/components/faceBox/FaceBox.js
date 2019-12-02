import React from "react";
import "./faceBox.css";

const faceBox = ({box}) => {
    return (
        <div
            className="face-box"
            style={{top:box.top_row, right:box.right_col, bottom:box.bottom_row, left:box.left_col }}>

        </div>
    )
}

export default faceBox;