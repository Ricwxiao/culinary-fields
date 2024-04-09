import React from "react";

export default function Badge(props) {
    return (
        <div className="badge">
            <img src={props.img} alt={"logo of "+props.name}></img>
            <h1>{props.name}</h1>
            <p>{props.address}</p>
        </div>
    )
}