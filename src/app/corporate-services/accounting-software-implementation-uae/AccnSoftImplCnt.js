import CorporateForm from "@/app/components/CorporateForm/CorporateForm"
import Image from 'next/image';
import acntimplimg from './images/account-implementation.jpg';
import AccountingImplAccord from "./AccountingImplAccord";
import AccountImplModal from "./AccountImplModal";
import AccountImplModal2 from "./AccountImplModal2";
import { BsCheck2Square } from "react-icons/bs";
const AccnSoftImplCnt = () => {
  return (
    <>
     <div className="acnt-impl-sec1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                        <h1 className="accn-impl-hd">Driving Growth Through Expert Accounting Software Implementation in UAE</h1>
                        <p>The growth of any business hinges on the effective utilization of systems and software for managing and processing information. A robust system and reliable software are essential across all facets of a company, encompassing areas such as accounting and operational functions. Thus, the selection and implementation of sound accounting software and platforms play a pivotal role in determining a company's growth potential.</p>
                        <p>At Elevate, our mission is to guide you in selecting and integrating the most suitable accounting software and system for your company's Accounting software implementation in UAE. Our focus is on delivering accurate and timely financial and operational insights while also enhancing your overall technological infrastructure. Regardless of whether your business is a startup, operates at a small to medium scale, or is a large corporate entity, the quality of your accounting system fundamentally shapes your growth trajectory. When our clients express concerns about lacking technological advancement, we assure them that we possess the ideal solution to address their needs.</p>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                        <Image src={acntimplimg} className="acnt-impl-img-top"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="acnt-impl-sec2-bg">
        <div className="acnt-impl-sec2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12 ">
                        <h2 className="acnt-impl-sec2-hd">Key advantages of implementing a good accounting software</h2>
                        <AccountingImplAccord/>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                    <h2 className="acnt-impl-hd">Accounting solutions for every business size </h2>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="acnt-impl-sec2-rght">
                                <h5>SMEs & Small Regulated Entities</h5>
                            <AccountImplModal/>
                            </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="acnt-impl-sec2-rght">
                                <h5>Mid-Size, Large, Family Offices</h5>
                            <AccountImplModal2/>
                            </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="acnt-impl-sec3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                        <h2 className="acnt-impl-hd">Your Trusted Partner for Accounting System Implementation in the UAE</h2>
                        <p>Our team specializes in assisting Small and Medium-sized businesses in identifying cost-effective and user-friendly systems. We collaborate with clients to formulate strategies that align with their operational, reporting, and growth needs. When we cannot directly execute an implementation, we serve as advisors, guiding clients in system selection and providing ongoing support for workflow implementation and system training.At Elevate, we are your trusted partner for accounting system implementation in the UAE. Our expertise in serving businesses of all sizes, from SMEs to large enterprises and family offices, sets us apart. </p>
                        <h2 className="acnt-impl-hd">Here's why you should choose Elevate:</h2>
                        <ul className="accnt-soft-impl-ul">
                            <li><BsCheck2Square/> Expertise in diverse systems</li>
                            <li><BsCheck2Square/> Comprehensive solutions</li>
                            <li><BsCheck2Square/> Proven track record</li>
                            <li><BsCheck2Square/> Customized approach</li>
                            <li><BsCheck2Square/> Effective project management</li>
                            <li><BsCheck2Square/> Ongoing support and advisory</li>
                        </ul>                
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                        <div className="acnt-impl-frm-blk">
                            <CorporateForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccnSoftImplCnt