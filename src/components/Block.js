import React from "react";

function Block(props) {

    const [toggle, setToggle] = React.useState(false);

    const [borderColor] = React.useState(props.borderColor);
    const [backColor] = React.useState(props.backgroundColor);

    let borCol;
    let bacCol;

    if(toggle) {
        borCol = "green";
        bacCol = "blue";
    }
    else if(toggle) {
        borCol = "blue";
        bacCol = "red";
    }
    else {
        borCol ="red";
        bacCol = "green";
    }

    const block = {
        margin: "20px",
        height: "100px",
        width: "100px",
        weight: "2px",
        borderColor:  borderColor,
        borderStyle: "solid",
        backgroundColor: backColor
    };

    const block2 = {
        margin: "20px",
        height: "100px",
        width: "100px",
        weight: "2px",
        borderColor:  borCol,
        borderStyle: "solid",
        backgroundColor: bacCol
    };


    return(
        <div>
            <div style={block}> blocks 1 </div>

            <div style={block2} onClick={()=>setToggle(!toggle)} > blocks 2 </div>

        </div>
    )

}

export default Block;