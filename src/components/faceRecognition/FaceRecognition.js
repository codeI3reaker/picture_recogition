import React from "react";
import FaceBox from '../faceBox/FaceBox';
import "./faceRecognition.css";

const faceRecognition = ({ image, box }) => {
    return (
        <div className="picture-container">
            <img id="picture" src={image} alt="" />
                <FaceBox box={box} />
            
    </div>
    )}

export default faceRecognition;