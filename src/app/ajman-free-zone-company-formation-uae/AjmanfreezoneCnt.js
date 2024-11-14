import { MdDoubleArrow } from "react-icons/md";
import AjmansectorsSlider from "./AjmansectosSlider";
import './ajmanfreezone.css';
import AjmanDocuments from "./AjmanDocuments";
import CompanysetupCost from "./CompanysetupCost";
import PhysicalofficePackage from "./PhysicalofficePackage";

const AjmanfreezoneCnt = () =>{

    // Array of key benefit items
    const ajmankeybenefits = [
        {
            point : "100% Foreign Ownership"
        },
        {
            point : "Easy Capital Transfer"
        },
        {
            point : "Cost-Effective Setup"
        },
        {
            point : "Low-Cost Labour"
        },
        {
            point : "Simple Dependent Sponsorship"
        },
        {
            point : "Flexible Business Structures"
        },
        {
            point : "Effortless Port Access"
        },
    ];

    // Array of key benefit items
    const ajmanpackages = [
        {
            point : "Trading Licenses"
        },
        {
            point : "Industrial Licenses"
        },
        {
            point : "Services Licenses"
        },
        {
            point : "Freelancer Licenses"
        },
        {
            point : "General Trading Licenses"
        },
    ];

    return (
        <>
        <div className="ajmandreezon-fst-blk">
            <div className="container">
                <div className="row justify-cnt-center">
                    <div className="ajmanfreezone-fst-tlt">
                        <h1>Seamless Company Formation in Ajman Free Zone: Your Gateway to Success</h1>
                        <p>
                        Ajman Free Zone, established in 1988, is situated in the Ajman Emirate, conveniently close to Sharjah and Dubai. This Free Zone offers an excellent opportunity for Company Formation in Ajman Free Zone, featuring affordable trading licenses and high-quality facilities.
                        </p>
                        <p>
                        Strategically positioned just 2 km from Sharjah and 12 km from Dubai, Ajman Free Zone provides access to the Ajman Port. Covering a total area of 324 sq.m., it presents one of the quickest and simplest processes for company registration and office selection in the UAE.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ajman-benef-package-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="key-benef-blk">
                                <h2>Key Benefits of Ajman Free Zone Company Formation </h2>
                                <p>Enjoy significant perks with Company Formation in Ajman Free Zone, such as full foreign ownership, low setup costs, and easy access to regional markets.</p>
                                <ul>
                                    {ajmankeybenefits.map((benefits,index) =>
                                    <li key={index}><MdDoubleArrow /> {benefits.point}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="ajman-package-blk">
                                <h2>Packages for Business Setup in Ajman Free Zone</h2>
                                <p>At Elevate Business Solutions, we offer a range of Ajman Free Zone business setup packages tailored to different needs:</p>
                                <ul>
                                    {ajmanpackages.map((packages,index) =>
                                    <li key={index}><MdDoubleArrow /> {packages.point}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="ajman-business-sector-blk">
            <div className="container">
            <h2>Strategic Business Sectors in Ajman Free Zone</h2>
            <p>Explore thriving industries with Ajman Free Zone company formation, offering tailored support for different sectors</p>
            <AjmansectorsSlider/>
            </div>
        </div>

        <AjmanDocuments/>

        <div className="ajman-busin-struct-blk">
            <div className="container">
                <h2>Business Structures Available for Ajman Free Zone Business Setup</h2>
                <div className="ajman-bsn-strc-pnt-blk">
                    <ul>
                        <li><b>Free Zone Limited Liability Company (FZ LLC):</b> Ideal for multiple owners, offering limited liability.</li>
                        <li><b>Free Zone Establishment (FZE):</b> Perfect for sole ownership and complete control</li>
                        <li><b>Branches:</b> Expand your existing business into Ajman Free Zone to enhance reach and operations.</li>
                        </ul>
                </div>
            </div>
        </div>

        <div className="ajman-freezone-cmp-cost">
            <CompanysetupCost/>
        </div>

        <div className="ajman-freezone-cmp-cost">
            <PhysicalofficePackage/>
        </div>

        <div className="ajman-cmp-setup-proc">
            <div className="container">
                <h2>Process of Company Setup in Ajman Free Zone,UAE Simplified </h2>
                <p>Starting your new business with Ajman Free Zone company formation has never been easier. We’re here to help you transform your business dreams into reality. Just follow these 3 simple steps:</p>
                <div className="row">
                    <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
                        <div className="cmpsetupbox">
                            <h5>Choose Your Business Type</h5>
                            <p>Select the best option for company formation in Ajman Free Zone, tailored to your specific needs.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
                        <div className="cmpsetupbox">
                            <h5>Submit Your Application with Documents</h5>
                            <p>Provide the required documents to complete your business setup in Ajman Free Zone</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
                        <div className="cmpsetupbox">
                            <h5>Obtain Your Business License</h5>
                            <p>Secure your business license and begin operations, benefiting from a streamlined company setup in Ajman Free Zone, UAE.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="start-business">
            <div className="container">
            <h2>Start Your Business in Ajman Freezone with Elevate Business Solutions</h2>
            <p>Elevate Business Solutions assists clients with company formation in Ajman Free Zone and offers comprehensive PRO consultancy services throughout the year. We help navigate your business setup in Ajman Freezone, ensuring smooth interactions with Freezone authorities and other relevant entities.</p>
            </div>
        </div>
        </>
    )
}

export default AjmanfreezoneCnt