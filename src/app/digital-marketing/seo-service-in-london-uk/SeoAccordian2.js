import techseoimg from './icons/technical-support.png';
import contentimg from './icons/copy-writing.png';
import analyticsimg from './icons/statistics.png';
import Image from 'next/image';
import Link from 'next/link';
const SeoAccordian2 = () => {
    return (
        <>
            <div className="accordion" id="faq">
                <div className="card">
                    <div className="card-header" id="faqhead4">
                        <Link href="#" className="btn btn-header-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq4"
                            aria-expanded="true" aria-controls="faq4"><Image className="seo-accor-img" src={techseoimg} alt="seo service london uk"/>Technical SEO Mastery</Link>
                    </div>

                    <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-bs-parent="#faq">
                        <div className="card-body">
                            Streamline your site's structure, loading speed, and mobile-friendliness, providing seamless user experiences and favor in search algorithms.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="faqhead5">
                        <Link href="#" className="btn btn-header-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq5"
                            aria-expanded="true" aria-controls="faq5"><Image className="seo-accor-img" src={contentimg} alt="seo service london uk"/>Content Excellence</Link>
                    </div>

                    <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-bs-parent="#faq">
                        <div className="card-body">
                            Develop engaging, informative content that answers user queries, establishing your brand as an industry authority and encouraging valuable organic engagement.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="faqhead6">
                        <Link href="#" className="btn btn-header-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq6"
                            aria-expanded="true" aria-controls="faq6"><Image className="seo-accor-img" src={analyticsimg} alt="seo service london uk"/>Performance Tracking & Analysis</Link>
                    </div>

                    <div id="faq6" className="collapse" aria-labelledby="faqhead6" data-bs-parent="#faq">
                        <div className="card-body">
                            Gain insights into your SEO strategy's effectiveness, adapting and refining approaches to ensure consistent growth and optimal ROI.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeoAccordian2