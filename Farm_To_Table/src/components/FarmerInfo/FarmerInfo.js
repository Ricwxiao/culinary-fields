import React from "react";
import Badge from "./Badge";
import FARMS from "../../data/farms.json"
import farmImg from "../../imgs/tian_tian_farm.png"


export default function FarmerInfo(props) {

    let farmName = props.farmName
    
    function findFarmByName(farms, name) {
        return farms.find(farm => farm.name === name);
    }

    let farm = findFarmByName(FARMS, farmName)

    return(
        <div>
            <h1>{farmName}</h1>
            {/* Could replace this by the Gallery module */}
            <img src="" alt={"Images of " + farmName}></img>
            <Badge 
                img={farmImg}
                name={farmName}
                address={"24026 Wax Orchard Rd SW, Vashon, WA 98070"}
            />
            <div className="growsContainer">
                <div>
                    <h3>Grows</h3>
                    <p>Learn More</p>
                </div>
                <div className="produceCloset">
                    <div className="produceGrown">
                        <img src="" alt="cabbage icon" />
                        <p>Nappa Cabbage</p>
                    </div>
                    <div className="produceGrown">
                        <img src="" alt="bittermelon icon" />
                        <p>Bitter Melon</p>
                    </div>
                    <div className="produceGrown">
                        <img src="" alt="bok choy icon" />
                        <p>Bok Choy</p>
                    </div>
                    <div className="produceGrown">
                        <img src="" alt="red onion icon" />
                        <p>Red Onion</p>
                    </div>
                </div>
            </div>
            <div className="socialsContainer">
                <div className="socialLink">
                    <img src="" alt="Instagram Icon" />
                    <p>@tiantian.farm</p>
                </div>
                <div className="socialLink">
                    <img src="" alt="Facebook Icon" />
                    <p>@Tian Tian Farm</p>
                </div>
                <div className="socialLink">
                    <img src="" alt="Webpage Icon" />
                    <p>tiantianfarmseattle.com</p>
                </div>
                <button>Sign Up for their CSA</button>
            </div>
            <div className="stories">
                <h2>Our Stories</h2>
                <p>
                    Elizabeth Whitman and Steven Hsieh began dreaming up Tian Tian Farm in 2020 during apprenticeships at organic farms in Oregon.
                </p>
                <p>
                    Elizabeth is a second-generation Chinese American. She grew up eating home-cooked kungpao chicken (宮保雞丁), tofu stir fry (豆腐乾), and her grandfather’s hot chili oil (辣椒). Her farming aspirations date back to childhood, when she tried to plant corn, carrots, and cucumbers in the rock-stubbled clay soils of her home state of Connecticut. Before farming, she worked full-time as a journalist in Jordan, New York, and Arizona. Her cat, Scout, is Tian Tian’s director of rodent control.
                </p>
                <p>
                    Steven is a second-generation Taiwanese American whose fondest food memories revolve around Sunday morning dim sum. Also a former newspaper reporter, he decided to switch careers after discovering a new kind of joy during misty morning harvests. He lived in Seattle from 2017 to 2018, when he served as news editor at The Stranger.
                </p>
            </div>
        </div>
    )
}