import CorporateForm from "@/app/components/CorporateForm/CorporateForm";
import LocalPartModal from "./LocalPartModal"
import LocalPartModal2 from "./LocalPartModal2"
import LocalPartnerComp from "./LocalPartnerComp"
import localpartimg from './images/local-partner-arrangement.jpg';
import Image from 'next/image';

const LocalPartnerCnt = () => {
  return (
    <>
    <div className="lcl-par-sec1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 colsm-12 col-xs-12">
                            <h1>Local Sponsor in Dubai, UAE</h1>
                            <p>Setting up a business on your own can be a complex endeavor, with numerous legal considerations to address. When it comes to establishing a business in a foreign country like Dubai, the process becomes even more challenging. Dubai, home to a significant expat population, is a popular choice for international entrepreneurs looking to start their companies. One of the primary challenges expats face when setting up a business in Dubai is foreign ownership restrictions. In the city's mainland, businesses with commercial or industrial licenses can only be 49% owned by expatriates, while the remaining 51% must be owned by a local sponsor in the UAE. However, it's important to note that, as of June 2021, regulations have allowed for 100% foreign ownership of commercial and manufacturing licenses in the UAE.</p>
                            <p>To establish a business in Dubai, you'll need an Emirati sponsor, who can either act as a sleeping partner with an agreed annual remuneration and an investor protection agreement or as a local service agent, depending on the type of license your company requires by law. If you choose to set up your business in one of the free zones in Dubai, you won't need a local sponsor, as free zones operate independently from mainland laws, and you have the flexibility to define your geographical boundaries as you see fit.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 colsm-12 col-xs-12">
                           <Image src={localpartimg} className="lcl-part-img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lcl-par-sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 colsm-12 col-xs-12">
                            <h2 className="lcl-part-sec2-tlt">Who is a Local Sponsor in Dubai?</h2>
                            <p className="lcl-part-sec2-cnt">A local sponsor, also known as a local service agent in Dubai, is an individual or corporate entity that complies with UAE company law and regulatory requirements. They are required for non-UAE or GCC nationals (foreign investors) who want to invest in and operate a company in Dubai, Abu Dhabi, Sharjah, or anywhere else in the UAE. According to UAE law for mainland companies, foreign investors must have a local resident, typically a UAE national, as a sponsor. In exchange for a fee, the sponsor hands over full control of the business and the authority to manage its daily operations to the foreign investor through a power of attorney. This arrangement ensures that all earnings are held in the name of the business and not in the name of the local partner.</p>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 colsm-12 col-xs-12">
                            <h2 className="lcl-part-sec2-tlt">Who Can Be a Local Sponsor in Dubai?</h2>
                            <p className="lcl-part-sec2-cnt">There are different types of local business sponsorship available in the UAE:</p>
                           <LocalPartnerComp/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lcl-par-sec3">
                <div className="container">
                    <h2 className="lcl-par-sec3-tlt">Why Do Businesses Need a Local Sponsor in Dubai?</h2>
                    <p className="lcl-par-sec3-cnt"> A local sponsor helps a company engage in local trade within the UAE industry. Companies with local sponsors are eligible for 100% tax exemption, and foreign investors have the option to repatriate 100% of their income. Such businesses can also establish unlimited divisions or branches across the country and bid for various private and government contracts that may not be available to free zone or professional service firms without local sponsors. Foreign investors can also obtain investor status, allowing them to secure residence visas for themselves and their dependents.</p>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12 lcl-mdl-btn-clmn">
                            <LocalPartModal/>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12 lcl-mdl-btn-clmn">
                            <LocalPartModal2/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lcl-par-sec4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                           <h2 className="lcl-part-sec4-tlt">Why opt for Elevate as your choice for a local sponsor in Dubai? </h2>
                           <p className="lcl-part-sec4-cnt">Whether you require a local sponsor or aim to establish a business without one, Elevate is your ideal partner. We offer comprehensive guidance and support for all aspects of business setup in Dubai, equipping you with the essential tools to initiate, operate, and expand your enterprise in the UAE.</p>
                           <p className="lcl-part-sec4-cnt">Our commitment lies in providing our clients with the most optimal start to business ownership. Therefore, we prioritize understanding your specific needs before recommending the most appropriate solution.</p>
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

export default LocalPartnerCnt