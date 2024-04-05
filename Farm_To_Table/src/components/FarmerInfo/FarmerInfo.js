import React from "react";
import Badge from "./Badge";


export default function FarmerInfo(props) {

    let name = props.farmName
    

    return(
        <div>
            <h1>{name}</h1>
            {/* Could replace this by the Gallery module */}
            <img src="" alt={"Images of " + name}></img>
            <Badge 
                img="../../../public/imgs/tian_tian_farm.png"
                name="Tian Tian Farm" 
                address="24026 Wax Orchard Rd SW, Vashon, WA 98070" 
            />
        </div>
    )
}