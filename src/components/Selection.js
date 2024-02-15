import React from "react";
import { useState } from "react";

const Selection = ({ applyColor }) => {
const[bgColor, setBgColor] = useState("");

const changeColor = () => {
    applyColor((background) => {
      setBgColor(background);
    });
}

    return (
        <div className="fix-box" style={{backgroundColor: bgColor.background,width:200,height:200,border:"1px solid gray"}} onClick={changeColor}>
            <p>Selection</p>
        </div>
    )
}

export default Selection;
