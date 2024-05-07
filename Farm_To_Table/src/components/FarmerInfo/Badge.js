import React from "react";
import '../../index.css';

export default function Badge(props) {
    return (
        <div className="badge">
            <img src={props.img} alt={"logo of "+props.name}></img>
            <div className="labels">
                <h3>{props.name}</h3>
                <p>{props.address}</p>
            </div>
        </div>
    )
}