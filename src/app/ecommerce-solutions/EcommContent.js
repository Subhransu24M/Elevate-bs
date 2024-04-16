import ItForm from "../components/WebForm/ItForm";
import Image from 'next/image';
import Link from 'next/link';
import MagentoModal from "./MagentoModal";
import WooModal from "./WooModal";
import ShopifyModal from "./ShopifyModal";

import planimg from "../../../public/icons/clipboard.png";
import designimg from '../../../public/icons/responsive.png';
import developmentimg from '../../../public/icons/coding (2).png';
import testingimg from '../../../public/icons/employee.png';
import launchimg from '../../../public/icons/deployment.png';

import paymentgatwayimg from '../../../public/icons/secured-payment-gateway.png';
import productattrimg from '../../../public/icons/product-attributes.png';
import multilangualimg from '../../../public/icons/multilangual-support.png';
import offerimg from '../../../public/icons/offer.png';
import seooptimisedimg from '../../../public/icons/seo-optimised.png';
import shippingapiimg from '../../../public/icons/shipping-api.png';
// import { FaLongArrowAltRight } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";

const EcommContent = () => {
    return (
        <>
            <div className="ecommcnt-blk">
                <div className="container">
                    <h1 className="ecomm-hd">Top eCommerce Website Development Company London, UK</h1>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
                            <div className="ecom-tp-hd">

                                <p>Being a prominent eCommerce website agency in London, we possess the insights into driving eCommerce growth. We excel in guiding you through platform selection, crafting user-friendly designs that enhance conversion rates, and developing code that prioritizes top-notch security. Our expertise spans across various platforms, enabling us to construct eCommerce stores in London that guarantee seamless navigation, enhanced shopping cart functionalities, and a streamlined and rapid checkout process.</p>
                                <p>
                                    Whether you're seeking a single-vendor marketplace exclusively owned and operated by you, or a multi-vendor platform where numerous vendors manage virtual storefronts under a unified brand identity, our tailored eCommerce development solutions are adept at fulfilling all your needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <ItForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd Block */}
            <div className="ecomm-snd-blk-bg">
                <div className="ecomm-snd-blk">
                    <div className="container">
                        <h2 className="ecomm-subhd">Helping Buyers & Sellers To Attain Their Goals</h2>
                        <div className="row">
                            <div className="col-md-6 col-lg-7 col-xl-7 col-sm-12 col-xs-12">
                                <div className="ecom-snd-left">
                                    <p>
                                        We love to do web development and we develop what our clients love and we work with clients all over the world to create thoughtful and purposeful websites which are aesthetically appealing, responsive, error free, efficient and optimized..
                                    </p>
                                    <ul>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Shopping Cart Solutions</li>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Shipping Module Development</li>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Website Theme Development</li>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Responsive Web Development</li>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Custom Website Development</li>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Website Maintenance and Support</li>
                                        <li><BsCheck2Square className="ecomm-bs-chk" />Third-Party Integrations</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-5 col-sm-12 col-xs-12">
                                <div className="ecom-bst-blk">
                                    <div className="ecomm-img-blk">
                                        <h2>Boost your sales with our E-commerce Solutions</h2>
                                    </div>
                                    <div className="ecomm-boost-cta">
                                        <Link href="/contact-us" className="btn ecom-bst-cta">Contact us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Block*/}

            <div className="ecomm-thrd-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="wcomm-bg">
                                <div className="ecomm-bg-clr">
                                    <div className="ecomm-tlt">
                                        <h4>WooCommerce Development</h4>
                                        <WooModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="mgnt-bg">
                                <div className="ecomm-bg-clr">
                                    <div className="ecomm-tlt">
                                        <h4>Magento Development</h4>
                                        <MagentoModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                            <div className="shopify-bg">
                                <div className="ecomm-bg-clr">
                                    <div className="ecomm-tlt">
                                        <h4>Shopify Development</h4>
                                        <ShopifyModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th block */}

            <div className="e-comm-sec-4">
                <h2 className="ecomm-subhd">Starting an online store but unsure how to begin? </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12">
                            <p>Take that all-important first step towards a world of opportunities. Reach out to us now or schedule an appointment to kickstart a lasting partnership that will make your eCommerce dreams come true. As an expert eCommerce Website Development Company London, UK we're here to supercharge the online potential of start-ups and businesses, helping you stay ahead in the ever-evolving digital landscape.</p>
                        </div>
                    </div>
                    <div className="e-comm-sec-4-sub-blk">
                        <h2 className="ecomm-subhd">Our streamlined process for E-commerce Website Development</h2>
                        <div className="row">
                            <div className="col-md-12 col-xl-1 col-lg-1 col-sm-12"></div>
                            <div className="col-md-12 col-xl-2 col-lg-2 col-sm-12">
                                <div className="sub-sub-blk">
                                    <Image src={planimg} />
                                    <h4>Planning</h4>
                                    <p>Understand goals, target audience, and features needed.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-2 col-lg-2 col-sm-12">
                                <div className="sub-sub-blk">
                                    <Image src={designimg} />
                                    <h4>Design</h4>
                                    <p>Create a user-friendly layout and visual style.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-2 col-lg-2 col-sm-12">
                                <div className="sub-sub-blk">
                                    <Image src={developmentimg} />
                                    <h4>Development</h4>
                                    <p>Build the website with secure and efficient code.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-2 col-lg-2 col-sm-12">
                                <div className="sub-sub-blk">
                                    <Image src={testingimg} />
                                    <h4>Testing</h4>
                                    <p>Thoroughly check for bugs, usability, and responsiveness.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-2 col-lg-2 col-sm-12">
                                <div className="sub-sub-blk">
                                    <Image src={launchimg} />
                                    <h4>Launch</h4>
                                    <p>Deploy the website and ensure a seamless start.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-1 col-lg-1 col-sm-12"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5th block */}

            <div className="e-comm-sec-5">
                <h2 className="ecomm-subhd">Elevating Your Sales with Enhanced E-commerce Functions</h2>
                <p>Experience sales elevation through our advanced eCommerce website development services in the UK.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className="e-comm-sec-5-box">
                                <div className="ecom-sec5-box-icon">
                                    <Image src={paymentgatwayimg} className="ecom-payment-img" />
                                </div>
                                <h4>Secured Payment Gateways</h4>
                                <p>Implement highly secure payment gateways to facilitate the safe transfer of online payments and safeguard client data.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className="e-comm-sec-5-box">
                                <div className="ecom-sec5-box-icon">
                                    <Image src={productattrimg} className="ecom-payment-img" />
                                </div>
                                <h4>Manage Product Attributes</h4>
                                <p>Efficiently configure product attributes such as product type and price relevance, effectively shaping customer decisions.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                            <div className="e-comm-sec-5-box">
                                <div className="ecom-sec5-box-icon">
                                    <Image src={multilangualimg} className="ecom-payment-img" />
                                </div>
                                <h4>Multilangual Support</h4>
                                <p>Implement multi-language functionality to cater to a global audience, allowing customers to access your website in their preferred language for a more inclusive shopping experience.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                                <div className="e-comm-sec-5-box2">
                                    <div className="ecom-sec5-box-icon">
                                        <Image src={offerimg} className="ecom-payment-img" />
                                    </div>
                                    <h4>Manage Offers & Discounts</h4>
                                    <p>Employ personalized offers and discounts through channels like email, text, and social media, effectively boosting customer engagement and driving sales.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                                <div className="e-comm-sec-5-box2">
                                    <div className="ecom-sec5-box-icon">
                                        <Image src={seooptimisedimg} className="ecom-payment-img" />
                                    </div>
                                    <h4>SEO Optimised Website</h4>
                                    <p>Create a search engine optimized website with streamlined site architecture, optimized product pages, and comprehensive image alt text.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                                <div className="e-comm-sec-5-box2">
                                    <div className="ecom-sec5-box-icon">
                                        <Image src={shippingapiimg} className="ecom-payment-img" />
                                    </div>
                                    <h4>Shipping API Integration</h4>
                                    <p>Integrate shipping APIs seamlessly, enabling real-time and accurate shipping calculations, tracking, and order management.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 5th block */}

            <div className="ecomm-conv-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 mt-5 mb-5">
                            <h2 className="ecomm-conv-tlt">THE E-COMMERCE SOLUTIONS FOR EVERY NICHE</h2>
                            <p>Contact us to assist you in selecting the perfect platform for your store and creating a tailor-made eCommerce solution from the ground up. We're here to help you achieve your eCommerce goals and make the process of eCommerce Website Design in London, hasslefree.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EcommContent
