import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import MiddleEastDeskCntListItem from "./MiddleEastDeskCntListItem"
import Image from 'next/image';
import middledeskimg from './images/middle-desk.jpg';

const MiddleEastDeskCnt = () => {
  return (
    <>
    <div className="mdl-east-des-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <h1 className="mdl-east-hd">Middle East Desk services in UK, London</h1>
                            <p>Are you a UK-based business looking to expand your horizons into the flourishing markets of the Middle East? Elevate is your trusted partner, dedicated to facilitating your journey to success in the Middle East. Discover how we can elevate your business to new heights in the region.</p>
                            <p>People from the UK are increasingly drawn to the UAE, Qatar, and other Arab nations for business due to a combination of factors, including favorable tax policies, a strategic location at the crossroads of global trade routes, robust economies, access to a growing consumer base, and business-friendly regulations. These countries offer a unique opportunity for international entrepreneurs and companies to expand their operations, tap into emerging markets, and enjoy the benefits of a stable and supportive business environment.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <Image src={middledeskimg} className="mdl-eastimg" alt="middle east desk service london uk"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mdl-east-des-sec2-bgimg">
                <div className="mdl-east-des-sec2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                                <h2 className="mdl-east-hd">What is Middle East Desk Services in UK?</h2>
                                <p>Middle East Desk Services in the UK typically refer to specialized services provided by organizations, government agencies, or businesses that focus on facilitating trade, investment, and business relations between the United Kingdom and countries in the Middle East region. These services are designed to support companies and individuals looking to expand their operations, establish partnerships, or navigate the complexities of doing business in the Middle East.</p>
                                <MiddleEastDeskCntListItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mdl-east-des-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <h2 className="mdl-east-hd">Choose Elevate as your Middle East Consultant in UK,London</h2>
                            <p>Elevate is your trusted partner for Company formation in the dynamic markets of the United Arab Emirates (UAE), Qatar, and Saudi Arabia (also known as the Arab region). In recent years, an increasing number of entrepreneurs and businesses from the UK have been flocking to these countries for the numerous advantages they offer when it comes to setting up and running a business. The combination of favorable business conditions, infrastructure, connectivity, and a growing consumer base make these countries ideal destinations for company formation. Elevate's expertise and local knowledge ensure a smooth and successful entry into these dynamic markets, allowing businesses to thrive and prosper in the heart of the Middle East.</p>
                        </div>
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                           <CorporateForm/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MiddleEastDeskCnt