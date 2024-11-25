import { HiArrowLongRight } from "react-icons/hi2";

const WhychoseSaifzone = () =>{
    const whychosedata =[
        {points: "100% Foreign Ownership"},
        {points: "100% Repatriation of Capital and Profits"},
        {points: "100% Exemption from Income Taxes"},
        {points: "License Issued Within 24 Hours"},
        {points: "On-Site Labor Accommodation"},
        {points: "Sponsorship and Visas for All Staff"},
        {points: "Access to Over 2 Billion Customers"},
        {points: "Strategic Location"},
        {points: "24-Hour Hotline for Equipment and Labor"},
        {points: "Global and Regional Communications"},
        {points: "Support from Sharjah Chamber of Commerce and Sharjah Expo"},
        {points: "Competitive Fee, Property, and Management Structure"},
        {points: "24x7 Operations"},
    ]
    return(
        <>
        <div className="whychose-blk">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="saif-zone-snd-blk-img">
                            <img src="/images/saif-zone/saif-zone-2.png" alt="saif zone company formation uae" fetchPriority="high" loading="lazy" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div className="saif-zone-why-chos-blk">
                            <h2>Why Choose SAIF Zone Company Formation?</h2>
                            <ul>
                            {whychosedata.map ((data,index) =>
                                <li key={index}><HiArrowLongRight /> {data.points}</li>
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
export default WhychoseSaifzone