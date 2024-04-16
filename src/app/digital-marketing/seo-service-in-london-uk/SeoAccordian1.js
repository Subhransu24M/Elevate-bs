import keywordimg from './icons/search-engine-optimization.png';
import backlinkimg from './icons/backlink.png';
import onpageimg from './icons/control (1).png';
import Image from 'next/image';
import Link from 'next/link';
const SeoAccordian1 = () => {
    return (
        <>
            <div className="accordion" id="faq">
                <div className="card">
                    <div className="card-header" id="faqhead1">
                        <Link href="#" className="btn btn-header-link" data-bs-toggle="collapse" data-bs-target="#faq1"
                            aria-expanded="true" aria-controls="faq1"><Image className="seo-accor-img" src={keywordimg} />Keyword Research</Link>
                    </div>

                    <div id="faq1" className="collapse" aria-labelledby="faqhead1" data-bs-parent="#faq">
                        <div className="card-body">
                            Uncover the exact terms your audience searches for, ensuring your content aligns perfectly with their needs, driving targeted organic traffic.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="faqhead2">
                        <Link href="#" className="btn btn-header-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq2"
                            aria-expanded="true" aria-controls="faq2"><Image className="seo-accor-img" src={backlinkimg} />Qualitative Backlinking</Link>
                    </div>

                    <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-bs-parent="#faq">
                        <div className="card-body">
                            Elevate your website's authority and trustworthiness with strategic backlinks from high-quality sources, boosting your search ranking and online reputation.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="faqhead3">
                        <Link href="#" className="btn btn-header-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq3"
                            aria-expanded="true" aria-controls="faq3"><Image className="seo-accor-img" src={onpageimg} />On-Page Optimization</Link>
                    </div>

                    <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-bs-parent="#faq">
                        <div className="card-body">
                            Craft compelling meta tags, headers, and content to maximize search engine understanding, enhancing your website's visibility and click-through rates.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeoAccordian1