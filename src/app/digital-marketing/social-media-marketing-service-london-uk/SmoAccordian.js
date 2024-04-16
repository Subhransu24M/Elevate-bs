import { BsFillArrowDownSquareFill } from "react-icons/bs";
import Link from 'next/link';
const SmoAccordian = () => {
  return (
    <>
    <div id="main smo-sec-accord">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="accordion" id="faq">
                                <div className="card">
                                    <div className="card-header" id="faqhead1">
                                        <Link href="#" className="btn btn-header-link smo-a" data-bs-toggle="collapse" data-bs-target="#faq1"
                                            aria-expanded="true" aria-controls="faq1"> Understanding Organic Social Strategy <span className="sm-bs-dwnarw-icon"><BsFillArrowDownSquareFill /></span></Link>
                                    </div>

                                    <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-bs-parent="#faq">
                                        <div className="card-body">
                                            <ul className="smo-accrd-ul">
                                                <li>Amplifying brand visibility</li>
                                                <li>Establishing a vibrant online community</li>
                                                <li>Engaging audiences in the research phase </li>
                                                <li>Nurturing relationships with existing clientele</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="accordion" id="faq">
                                <div className="card">
                                    <div className="card-header" id="faqhead2">
                                        <Link href="#" className="btn btn-header-link collapsed smo-a" data-bs-toggle="collapse" data-bs-target="#faq2"
                                            aria-expanded="true" aria-controls="faq2">Exploring the Realm of Paid Social Strategy: <span className="sm-bs-dwnarw-icon"><BsFillArrowDownSquareFill /></span></Link> 
                                    </div>

                                    <div id="faq2" className="collapse show" aria-labelledby="faqhead2" data-bs-parent="#faq">
                                        <div className="card-body">
                                            <ul className="smo-accrd-ul">
                                                <li>Directing users to your website</li>
                                                <li>Generating leads via dedicated landing pages</li>
                                                <li>Engaging audiences keen on </li>
                                                <li>Complementing other paid advertising avenues </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SmoAccordian