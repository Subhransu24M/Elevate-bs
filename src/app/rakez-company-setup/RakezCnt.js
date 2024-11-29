import rakezimg from './images/RAKEZ.jpg';
import Image from 'next/image';
import RakezBenefits from './RakezBenefits';
import RakezlicenseTypes from './RakezlicenseTypes';
import RakezkeyandDocument from './RakezkeyandDocument';
import RakezlegalSteps from './RakezlegalSteps';
import RakezWhychosus from './RakezWhychosus';

const RakezCnt = () =>{
    return (
        <>
        <div className="rakez-cnt-blk">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                        <div className="rakez-cnt">
                            <h2>RAKEZ Free Zone Company Setup</h2>
                            <p>The Ras Al Khaimah Economic Zone (RAKEZ) is a thriving hub for businesses seeking a strategic location, cost-effective setup options, and global connectivity. Established to merge the strengths of the Ras Al Khaimah Free Trade Zone (RAK FTZ) and RAK Investment Authority (RAKIA), RAKEZ offers tailored solutions for startups, SMEs, and multinational corporations alike.The RAKEZ Free Zone Company Setup is an ideal choice for businesses seeking cost-effective solutions and a strategic location. The RAKEZ Free Zone Company Setup Cost is highly competitive, attracting startups, SMEs, and multinational corporations. Located in Ras Al Khaimah, RAKEZ offers excellent opportunities for RAK Free Zone Company Formation, ensuring global connectivity and seamless access to emerging markets in the Middle East, North Africa, Europe, and Asia.</p>
                            <p>Located in Ras Al Khaimah, this economic zone provides seamless access to emerging markets in the Middle East, North Africa, Europe, and Asia. With its investor-friendly policies, RAKEZ is the ideal choice for entrepreneurs aiming to expand or establish their businesses in a secure and business-centric environment.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                        <div className="rakez-img">
                            <Image src={rakezimg} alt="rakez company setup" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RakezBenefits/>
        <RakezlicenseTypes/>
        <RakezkeyandDocument/>
        <RakezlegalSteps/>
        <RakezWhychosus/>
        </>
    )
}
export default RakezCnt