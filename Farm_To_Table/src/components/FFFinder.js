import React from "react";
import farmsData from "../data/farms.json"
import { NavLink, useParams } from "react-router-dom";

export default function FFFinder(props) {
    // let farmsArr = []
    // for (let farmObj in farmsData) {
    //     farmsArr.map
    // }
    return(
        <div className="fffPage">
            <h1>Recommended Farms</h1>
            <div className="farmListContainer">
                <FarmsList/>
            </div>
        </div>
    )

    function FarmsList(props) {
        return(
            farmsData.map((farmObj) => (
                    <div className="farmListItem" key={farmObj.id}>
                        <img src={farmObj.logo} className="farmLogo"/>
                        <div className="textInfo">
                            <h3>{farmObj.name}</h3>
                            <a href={farmObj.website} target="_blank" className="websiteLink"><span class="material-symbols-outlined">language</span><span className="textInAnchor">Website</span></a>
                            <p><span class="material-symbols-outlined">pin_drop</span>{farmObj.address}</p>
                            <div className="learnMoreBtn">
                                <NavLink to={`/farmerinfo/${farmObj.id}`}>
                                    <button>Learn More</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            )
        )
    }
}