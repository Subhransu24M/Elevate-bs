import { HiArrowLongRight } from "react-icons/hi2";
const ActivitiesFacilitiessaifzone = () => {
    const activitiesdata = [
        { points: "Trading & Logistics" },
        { points: "Light Manufacturing & Assembly" },
        { points: "E-Commerce & Technology" },
        { points: "Media & Advertising" },
        { points: "Professional Services" },
        { points: "Healthcare & Education" },
        { points: "And many more!" },

    ]

    const facilitiesdata = [
        { points: "Office Space" },
        { points: "Plots of Land" },
        { points: "Temporary Storage Facilities" },
        { points: "Container Parking Area." },
        { points: "Bunker Facilities" },
        { points: "Labour Accommodation" },

    ]
    return (
        <>
            <div className="saifzone-actv-faci-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="saifzone-actv-faci-blk-cnt">
                                <h2>Permitted Business Activities within  SAIF Zone Company Formation</h2>
                                <p>SAIF Zone Company Formation supports a broad spectrum of business activities, including:</p>
                                <ul>
                                    {activitiesdata.map((activities, actIndex) =>
                                        <li key={actIndex}><HiArrowLongRight /> {activities.points}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="saifzone-actv-faci-blk-cnt">
                                <h2>SAIF Zone Facilities for Business Setup in Sharjah Airport Free Zone</h2>
                                <p>SAIF Zone provides a range of facilities to ensure that businesses can operate smoothly and efficiently:</p>
                                <ul>
                                    {facilitiesdata.map((facilities, facIndex) =>
                                        <li key={facIndex}><HiArrowLongRight /> {facilities.points}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ActivitiesFacilitiessaifzone