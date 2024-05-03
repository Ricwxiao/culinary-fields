import React from "react";
import Badge from "./Badge";
import { RecipeCard } from "../Recipe";
import farmsData from "../../data/FARMS.json"
import { useParams } from "react-router-dom";


export default function FarmerInfo(props) {
    let { id } = useParams();

    let ttf = {
        "id": 0,
        "img": "../imgs/tian_tian_farm.png",
        "name": "Tian Tian Farm",
        "address": "24026 Wax Orchard Rd SW, Vashon, WA 98070",
        "website": "https://www.tiantian.farm/"
    };

    let farm = farmsData.find(farm => farm.id === id) ?? ttf

    console.log(`now showing FarmerInfo for an id of ${id}, and the farm should be ${farm}`)

    return (

        <div className="farmInfo">

            <h1>{farm.name}</h1>

            <div className="profileRow">
                <img className="coverPic" src={`/imgs/tian_tian_farm_pic.jpg`} alt={"Images of " + farm.name}></img>
                <div className="badgeAndGrows">
                    <Badge 
                        img={`/imgs/tian_tian_farm.png`} 
                        name={farm.name}
                        address={farm.address}
                    />
                    <div className="growsContainer">

                        <div className="titleRow">
                            <h3>Grows</h3>
                            <p>Learn More</p>
                        </div>

                        <div className="produceCloset">

                            <div className="produceRow">
                                <div className="produceGrown">
                                    <img src={`/imgs/produce_icons/nappa_cabbage.png`} alt="cabbage icon" />
                                    <p>Nappa Cabbage</p>
                                </div>
                                <div className="produceGrown">
                                    <img src={`/imgs/produce_icons/bitter_melon.png`} alt="bittermelon icon" />
                                    <p>Bitter Melon</p>
                                </div>
                            </div>

                            <div className="produceRow">
                                <div className="produceGrown">
                                    <img src={`/imgs/produce_icons/bok_choy.png`} />
                                    <p>Bok Choy</p>
                                </div>
                                <div className="produceGrown">
                                    <img src={`/imgs/produce_icons/red_onion.png`} />
                                    <p>Red Onion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="socialsContainer">
                <div className="socialLink" id="igLink">
                    <img src={`/imgs/social_icons/instagram_logo.svg`} alt="Instagram Icon" />
                    <p><a href="https://www.instagram.com/tiantian.farm/">@tiantian.farm</a></p>
                </div>
                <div className="socialLink" id="fbLink">
                    <img src={`/imgs/social_icons/facebook_logo.svg`} alt="Facebook Icon" />
                    <p><a href="https://m.facebook.com/TianTianfarm">@Tian Tian Farm</a></p>
                </div>
                <div className="socialLink" id="webLink">
                    <img src={`/imgs/social_icons/website_logo.svg`} alt="Webpage Icon" />
                    <p><a href="https://www.tiantian.farm">www.tiantian.farm</a></p>
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
            <div className="starringContainer">
                <h2>Starring Recipes</h2>
                <div className="recipe-list">
                    <RecipeCard name={'Stir Fried Bittermelon'} user= {'Goya Farm (Sara)'} likes= {'1k+'} image={'Stir_Fried_Bittermelon.png'}/>
                </div>
            </div>
        </div>
    );
}
