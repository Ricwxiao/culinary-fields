import React from "react";
import Badge from "./FarmerInfo/Badge";

export default function Article() {
    let farmName = "Tian Tian Farm"

    return (
        <div className="articlePage">
            <h1>Story of Tian Tian Farm: Farming for the Asian Community</h1>
            <p className="articleBy">By <span className="authour">Jade Yamazaki Stewart</span> <span className="job">Seattle Times staff reporter</span></p>
            <p>Aug. 12, 2021 at 6:00 am</p>
            <Badge>
                img={`/imgs/tian_tian_farm.png`} 
                name={farmName}
                address={"24026 Wax Orchard Rd SW, Vashon, WA 98070"}
            </Badge>
            <img className="articleImg" src={`/imgs/tian_tian_farm_pic.jpg`} alt={"Images of " + farmName}></img>

            <p className="splt-parag">
                In the heart of Seattle's vibrant urban landscape, a humble Asian farmer tends to rows of vibrant green vegetables, their hands nurturing tender shoots and hearty crops that will soon find their way onto the tables of eager customers. In an illuminating article, we explore the journey of this dedicated farmer as they cultivate a thriving business rooted in tradition and community.
            </p>
            <p className="splt-parag">
                From the fertile soils of their urban farm to the bustling farmers' markets scattered throughout the city, this farmer's story is one of passion, perseverance, and connection. With a deep respect for the land and a commitment to sustainable farming practices, they work tirelessly to grow an array of fresh, nutrient-rich vegetables that reflect their cultural heritage.
            </p>
            <p className="splt-parag">
                As the seasons unfold, so too does the bounty of the farmer's labor, with each harvest bringing a new abundance of produce bursting with flavor and vitality. From crisp, leafy greens to plump, juicy tomatoes and fragrant herbs, their offerings are a testament to the rich diversity of Asian cuisine and the farmers' unwavering dedication to quality.
            </p>
            <p className="quote">
                "Tian Tian (天天) means “daily” in Mandarin, reminding us to take life one day at a time. Our name also reflects nature's gentle, constant motion."
            </p>
            <p className="splt-parag">
                But the journey from farm to table is not without its challenges. From unpredictable weather patterns to the demands of urban farming, the farmer faces obstacles at every turn. Yet, through resourcefulness and resilience, they navigate these hurdles with grace, finding innovative solutions and forging strong bonds with their customers along the way.
            </p>
            <p className="splt-parag">
                At the heart of their business lies a deep connection to the community, with each vegetable sold representing not just sustenance, but a shared story of culture, tradition, and nourishment. Through farmers' markets and community-supported agriculture programs, the farmer fosters relationships with customers who value the freshness and authenticity of locally grown produce.
            </p>
            <button className="previousSpltBtn">
                <span class="material-symbols-outlined">history</span> Previous Spotlights
            </button>
        </div>
    )
}