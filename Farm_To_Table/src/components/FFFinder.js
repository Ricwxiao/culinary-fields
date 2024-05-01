import React from "react";
import farmsData from '../data/FARMS.json';
import { NavLink } from "react-router-dom";

export default function FFFinder(props) {
    // let farmsArr = []
    // for (let farmObj in farmsData) {
    //     farmsArr.map
    // }
    return(
        <div>
            <h1>Recommended Farms</h1>
            <FarmsList/>
        </div>
    )

    function FarmsList(props) {
        return(
            farmsData.map((farmObj, index) => {
                return (
                    <NavLink to={"/farmerInfo"} key={index}>
                        <div>
                            <h3>{farmObj.name}</h3>
                            <a href={farmObj.website}>Website</a>
                            <p>{farmObj.address}</p>
                            <button>Learn More</button>
                        </div>
                    </NavLink>
                )
            })
        )
    }
}