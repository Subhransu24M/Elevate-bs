import './freelancevisa.css';
import Image from 'next/image';
import freelancevisaimg from '../freelance-visa-dubai-uae/images/freelance-visa-registration.jpg';
import frcvisawhychosimg from './images/visaimg.jpg';
import dubaivisaprocimg from './images/visa-process.jpg'
import FreelncvisaAccord from './FreelncvisaAccord';
import EligibilityRequirements from './EligibilityRequirements';
import DocReqvisa from './DocReqvisa';
import FreelancpermitAccord from './FreelancpermitAccord';
import freezoneimg from './images/freezone.jpg';
import AuthorityTable from './AuthorityTable';
import FreelancevisaApplicationProcess from './FreelancevisaApplicationProcess';
import VisabenefitMdl from './VisabenefitMdl';
import FaqVisa from './FaqVisa';
const FreelancevisaCnt = () => {
  return (
    <>
      <div className='freelncvisa-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
              <div className='frclnc-visa-fst-lft-blk'>
                <h1 className='frclnc-visa-fst-lft-tlt'>Freelance Visa in Dubai: Everything You Need to Know</h1>
                <p>Dubai is becoming a top destination for freelancers worldwide, thanks to its strategic location, robust infrastructure, and vibrant lifestyle. This guide provides you with detailed information on obtaining a freelance visa in Dubai, covering various authorities, requirements, and costs. Whether you're an artist, writer, IT specialist, or consultant, Dubai offers a welcoming environment for freelancers.</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
              <Image className="frncvsimg" src={freelancevisaimg} alt="freelance visa in dubai uae" />
            </div>
          </div>
        </div>
      </div>

      <div className='why-chosfrc-vs-db-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
              <Image className='frcvisa-whychos-img' src={frcvisawhychosimg} alt="freelance visa in dubai uae" />
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12'>
              <div className='whychoscnt-blk'>
                <h2 className='whychoscnt-blk-tlt'>Why Choose Dubai for Freelancing? Benefits of a Freelance Visa in UAE</h2>
                <FreelncvisaAccord />
              </div>
            </div>
          </div>
          <div className='elgb-bg'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6'>
              <div className='req-blk'>
                <h2 className='req-visa-tlt'>Eligibility Requirements for a Freelance Visa in Dubai</h2>
                <p>To qualify for a freelance license in UAE, applicants must meet these criteria:</p>
                <EligibilityRequirements/>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6'>
            <div className='req-blk'>
            <h2 className='req-visa-tlt'>Documents Required to Obtain a Dubai Freelance Visa</h2>
            <p>When applying for a freelance license in UAE , you will need to submit:</p>
            <DocReqvisa/>
            </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <div className='frlnc-permt-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='frlnc-prmt-cnt'>
                <h2 className='frlnc-prmt-cnt-tlt'>Top Free Zones for Freelance Permits in Dubai and UAE</h2>
                <p>Several free zones in the UAE offer freelance permits, each focusing on specific industries and providing unique benefits:</p>
                <FreelancpermitAccord/>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <Image className="frzonevisimg" src={freezoneimg} alt="freezone freelance visa in dubai"  />
            </div>
          </div>
        </div>
      </div>

      <div className='fren-lcn-cst-blk'>
        <div className='container'>
          <h2 className='fren-lcn-cst-tlt'>Freelance Permit and License Costs in UAE Free Zones</h2>
          <p className='fren-lcn-cst-p'>Discover the freelance visa cost in Dubai and explore various fee structures for permits and licenses across different UAE free zones.</p>
          <div className='row'>
            <div className='frn-lcn-cst-tbl-blk'>
                <AuthorityTable/>
            </div>
          </div>
        </div>
      </div>

      <div className='fren-vis-app-proc-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12'>
              <div className='frenlapp-proc-blk'>
                <h2>Application Process for a Freelance Visa in Dubai</h2>
                <p>Step-by-Step Guide to Obtaining Your Visa for Freelance Business in Dubai </p>
              <FreelancevisaApplicationProcess/>
              </div>
            </div>
            <div className='col-md-5 col-lg-5 col-xl-5 col-sm-12'>
              <div className='dub-visa-benf-img'>
                <Image src={dubaivisaprocimg} alt="freelance dubai visa processing" className='dubaivisaprocimgcls' />
                <div className='dub-visa-benf-cnt-blk'>
                  <h2>Benefits of Holding a Freelance Visa in Dubai</h2>
                  <VisabenefitMdl/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='frncvisafaq-blk-bg'>
        <div className='frncvisafaq-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='frncvisafaqblk'>
                  <h2>FAQ</h2>
                  <p>( About Freelance Visas in Dubai )</p>
                  <FaqVisa/>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
               <div className='elvguid-cnt'>
                <h2>Let Elevate Guide You in Obtaining a Freelance Visa in Dubai</h2>
                <p>Obtaining a freelance visa in Dubai opens up a world of opportunities for independent professionals. From flexible working conditions to tax benefits and a high quality of life, Dubai is an excellent choice for freelancers.</p>
                <p>Whether you are a seasoned freelancer or just starting, navigating the visa process can be complex. Partnering with an experienced service provider like Elevate ensures that your application is handled efficiently and in compliance with all regulations. Elevate offers specialized support for obtaining a freelance visa in Dubai, helping you focus on your work while we handle the paperwork.</p>
                <p>For more information on how to get your freelance visa and make the most of your freelancing career in Dubai, contact Elevate today. Let us help you take the next step in your professional journey!</p>
               </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default FreelancevisaCnt