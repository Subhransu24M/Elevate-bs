import Image from 'next/image';
import trdmarkimg1 from './images/trademark-reg.webp';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import HowtoRegTrdCnt from './HowtoRegTrdCnt';
import CorporateForm from '@/app/components/CorporateForm/CorporateForm';
import { FaLongArrowAltRight } from "react-icons/fa";
const TrademarkContent = () => {
  return (
    <>
      <div className="trd-mar-sec1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <h1 className='trdmark-hd'>Trademark Registration in the Dubai,UAE</h1>
              <p>Trademark Registration is an essential and highly effective system designed to safeguard the identity of business products. In accordance with UAE Federal Law No. 37 of 1992 on Trademarks, a trademark can take the form of distinctive symbols, words, logos, signs, names, labels, designs, pictures, titles, hallmarks, seals, patterns, announcements, packaging, or any other individual or grouped marks. Registering trademarks allows businesses, whether individuals or organizations, to establish a clear association between their products, goods, or services and their brand. </p>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <div className='trdmark-img'>
              <Image src={trdmarkimg1} alt="trademark registration service dubai uae"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trd-mar-sec2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <h2 className='trdmark-hd2'>Benefits of Trademark Certification</h2>
              <ul>
                <li><FaLongArrowAltRight/>Safeguards company products and preserves brand identity.</li>
                <li><FaLongArrowAltRight/>Facilitates effortless brand and product recognition, minimizing duplication.</li>
                <li><FaLongArrowAltRight/>Establishes a perception of quality and trust in delivered products and services.</li>
                <li><FaLongArrowAltRight/>Offers protection against competitors who offer substandard goods or services under a similar mark.</li>
                <li><FaLongArrowAltRight/>Enhances brand reputation and market position.</li>
                <li><FaLongArrowAltRight/>Provides exclusive rights and legal recourse.</li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <h2 className='trdmark-hd2'>Requirements for Trademark Registration in UAE</h2>
              <div className="row mt-5">
                <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12 pl-0 pr-0">
                  <div className="trd-mark-req-box">
                    <h6>Individual Applicant</h6>
                    <Modal1/>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12 pl-0 pr-0">
                  <div className="trd-mark-req-box">
                    <h6>Company/Business</h6>
                    <Modal2/>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12 pl-0 pr-0">
                  <div className="trd-mark-req-box">
                    <h6>Foreign Company</h6>
                    <Modal3/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trd-mar-sec3-bgimg">
        <div className="trd-mar-sec3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                <h2 className='trdmark-hd2'>How to register Trademark in UAE?</h2>
                <p>Registering a trademark in the United Arab Emirates (UAE) involves several steps and processes. Here's a general guide on how to register trademark in UAE:</p>
                <HowtoRegTrdCnt/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trd-mar-sec4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
              <h2 className='trdmark-hd2'>Why Choose Elevate for Trademark Registration in UAE?</h2>
              <p>Registering a trademark in the UAE may seem simple, but any mistakes in the application or document submission can lead to rejection. Therefore, it is highly recommended to seek the assistance of an experienced business consultant who is well-versed in the trademark registration process in the UAE. </p>
              <ul>
                <li><FaLongArrowAltRight/>Advise and assist with the process of registering trademarks through a comprehensive search report, selection, and retention of trademarks.</li>
                <li><FaLongArrowAltRight/>Manage the preparation and prosecution of trademark applications.</li>
                <li><FaLongArrowAltRight/>Handle the maintenance of trademark rights, including the timely payment of renewal fees.</li>
                <li><FaLongArrowAltRight/>Record amendments to trademarks, such as changes in name, address, assignment, merger, mortgage, licensing, and franchising of rights.</li>
                <li><FaLongArrowAltRight/>Conduct market investigations to detect potential cases of counterfeiting and piracy.</li>
                <li><FaLongArrowAltRight/>Provide assistance in filing complaints against trademark infringement across the UAE.</li>
                <li><FaLongArrowAltRight/>File applications for recording registered trademarks with customs authorities in the UAE.</li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
              <div className="trdmark-frm-blk">
                <CorporateForm/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TrademarkContent