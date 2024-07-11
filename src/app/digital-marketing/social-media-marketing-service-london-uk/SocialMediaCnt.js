import ItForm from "@/app/components/WebForm/ItForm"
import Image from 'next/image';
import facebookimg from './icons/facebook.png';
import instagramimg from './icons/instagram.png';
import youtubeimg from './icons/youtube.png';
import pinterestimg from './icons/pinterest.png';
import linkedinimg from './icons/linkedin.png';
// import engaudvideo from './videos/website-traffic.mp4';
import audienceengagement from './images/audiance-engagement.jpg';
import websitetraffic from './images/web-traffic.jpg';
import brandawarness from './images/brand-awarness.webp';
import datainsights from './images/data-insights.jpg';
import SmoAccordian from "./SmoAccordian";
const SocialMediaCnt = () => {
  return (
    <>
      <div className="sm-sec-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
              <div className="smo-sec1-leftlblk">
                <h1 className="smm-hd">London's Premier <br /><span className="smo-tlt-span">Social Media Marketing Agency</span></h1>
                <p>In today's interconnected world, platforms like Facebook, X, Instagram, and more have seamlessly woven into the daily routines of billions of individuals. The global reach of Facebook alone encompasses over a quarter of the planet's population, with a staggering 2 billion active users. As a seasoned Social Media Marketing Agency in London, UK, we recognize that social media marketing is a digital conduit to connect with customers, cultivate brand recognition, and seamlessly promote products and services in the spaces users frequent most—while they scroll through their feeds. </p>
              </div>

            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
              <div className="digi-cmn-frm-smo-blk">
                <ItForm/>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="smo-sec-2-sub">
        <div className="container">
          <h2 className="smm-subhd">Key Benefits for Brand Growth and Engagement</h2>
          <p>As a premier Social Media Marketing Company in London, UK, we amplify brand growth and engagement, leveraging the key benefits of strategic social media campaigns.</p>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <div className="smo-sec2-imgbox">
                {/* Need Image */}
                <Image src={audienceengagement} alt="social media marketing service london uk"/>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
              <div className="smo-sec2-box">
                <h3 className="smm-subhd-3">Engage the Audience</h3>
                <p>Social media marketing enables direct interaction with your audience through posts, comments, and messages. By fostering meaningful conversations and responding to inquiries, you cultivate a loyal community around your brand, enhancing customer trust and loyalty.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="smo-sec-3-sub">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                <div className="smo-sec3-box">
                  <h3 className="smm-subhd-3">Boost Website Traffic</h3>
                  <p>Utilizing social media platforms as channels to share your website content drives targeted traffic. Engaging posts with compelling visuals and links intrigue users to explore your site further, contributing to increased website visits and potential conversions.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                <div className="smo-sec2-imgbox">
                  {/* Need Image */}
                  <Image src={websitetraffic} alt="social media marketing service london uk"/>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="smo-sec-4-sub">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                <div className="smo-sec2-imgbox">
                  {/* Need Image */}
                  <Image src={brandawarness} alt="social media marketing service london uk"/>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                <div className="smo-sec2-box">
                  <h3 className="smm-subhd-3">Amplify Brand Awareness</h3>
                  <p>Strategic social media campaigns expose your brand to a broader audience. As users engage with and share your content, your brand gains exposure beyond your existing followers, fostering organic growth and boosting brand recognition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="smo-sec-5-sub">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                <div className="smo-sec3-box">
                  <h3 className="smm-subhd-3">Data-Driven Insights</h3>
                  <p>Social media platforms provide valuable analytics about your audience's behavior and preferences. These insights help refine your strategies, allowing you to create content that resonates, post at optimal times, and adapt your approach based on data-backed trends.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                <div className="smo-sec2-imgbox">
                  {/* Need Image */}
                  <Image src={datainsights} alt="social media marketing service london uk"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm-sec-3">
        <div className="container">
          <h2 className="smm-subhd">Navigating Organic and Paid Social Strategies: Finding the Right Fit for Your Brand</h2>
          <p>In the realm of social media marketing, the distinction between organic and paid strategies holds paramount importance. When seeking expertise, not all "Social Media Marketing in London" or "Social Media Agency In London" services that appear in your search results will excel in both domains. These two approaches, though distinct, often harmonize to form a comprehensive marketing strategy.</p>
        </div>

      <SmoAccordian/>
      </div>
      <div className="smo-sec-4">
        <div className="container">
          <h2 className="smm-subhd">Use Social Media Platforms as a Lead Generation Machine</h2>
          <p>As a leading Social Media Agency in London, we'll harness the power of social media platforms to transform them into potent lead generation engines, driving growth and conversions for your business.</p>
          <div className="row">
            <div className="col-md-12 col-lg-1 col-xl-1 col-sm-12 col-xs-12"></div>
            <div className="col-md-12 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
              <Image src={facebookimg} className="smm-scl-img" alt="social media marketing service london uk"/>
            </div>
            <div className="col-md-12 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
              <Image src={instagramimg} className="smm-scl-img" alt="social media marketing service london uk"/>
            </div>
            <div className="col-md-12 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
              <Image src={youtubeimg} className="smm-scl-img" alt="social media marketing service london uk"/>
            </div>
            <div className="col-md-12 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
              <Image src={pinterestimg} className="smm-scl-img" alt="social media marketing service london uk"/>
            </div>
            <div className="col-md-12 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
              <Image src={linkedinimg} className="smm-scl-img" alt="social media marketing service london uk"/>
            </div>
            <div className="col-md-12 col-lg-1 col-xl-1 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialMediaCnt