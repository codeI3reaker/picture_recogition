import React from "react";
import './imageLinkForm.css';

const ImageLinkForm = (props) => { 
    return (
        <div>
        <p className = "fa3">
            This magic brain will detect faces
        </p>

            <div className = " center form pa4 br3 shadow-5">
                <input
                    className="f4 pa2 w-70 center"
                    type="text"
                    onChange={props.userInput}
                />
                <button
                    className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={props.userSubmitPic}
                >Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm