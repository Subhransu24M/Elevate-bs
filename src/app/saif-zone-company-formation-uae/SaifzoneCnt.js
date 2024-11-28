
import ActivitiesFacilitiessaifzone from './ActivitiesFacilitiessaifzone';
import ImigrationInvestorEmployeedata from './ImigrationInvestorEmployeedata';
import ProServices from './ProServices';
import './saifzone.css';
import SaifzoneBusinessetupcost from './SaifzoneBusinessetupcost';
import SaifzonemultiTrading from './SaifzonemultiTrading';
import SaifzoneTypesProcess from './SaifzoneTypesProcess';
import WhychosesaifElevate from './WhychosesaifElevate';
import WhychoseSaifzone from './WhychoseSaifzone';
const SaifzoneCnt = () =>{
    return(
        <>
        <div className="saifzone-cnt-blk">
            <div className="container">
                <div className="row">
                    <div className="saifzone-cnt-blk-tlt">
                    <h1>Experience Flexibility with SAIF Zone Company Formation- Pay-As-You-Go Business Setup Model</h1>
                    <p>Unlock convenience with just a simple payment for your business license to get started</p>
                    </div>                        
                </div>
                <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="saif-zone-fst-blk">
                        <h2>SAIF Zone Company Formation</h2>
                        <p>Established in 1995, the Sharjah Airport International Free Zone (SAIF Zone) is a leading destination for SAIF Zone company formation. As one of the UAE's premier industrial free zones, SAIF Zone is renowned for its exceptional SAIF Zone company formation services, offering a range of company structures and numerous benefits.</p>
                        <p>With the largest cargo airport in the Middle East and Africa, SAIF Zone ensures efficient and cost-effective transportation and logistics, regardless of your customer base's location.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="saif-zone-fst-img">
                        <img src="/images/saif-zone/saif-zone.jpg" alt="saif zone company formation uae" fetchPriority="high" loading="lazy"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <WhychoseSaifzone/>
        <ActivitiesFacilitiessaifzone/>
        <SaifzoneTypesProcess/>
        <SaifzoneBusinessetupcost/>
        <SaifzonemultiTrading/>
        <ImigrationInvestorEmployeedata/>
        <ProServices/>
        <WhychosesaifElevate/>
        </>
    )
}
export default SaifzoneCnt