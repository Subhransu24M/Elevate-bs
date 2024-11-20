"use client"
import React from "react";
import Slider from "react-slick";
import './relatedcorporate.css';
import Link from "next/link";
import Image from "next/image";

const RelatedCorporateservices = () => {

    const relatedservices = [
        {
            name: "ADGM Restaurant Accounting",
            // image: adgmrestaurant,
            alt: "ADGM Restaurant Accounting Services",
            link: "/corporate-serviceshttp/restaurant-accounting-services-in-abu-dhabi"
        },
        {
            name: "Bookkeeping Services",
            // image: bookkeeping,
            alt: "Bookkeeping Services",
            link: "/corporate-serviceshttp/bookkeeping-service-uae"
        },
        {
            name: "Liquidation Services",
            // image: liquidation,
            alt: "Liquidation Services",
            link: "/corporate-serviceshttp/company-liquidation-services-uae"
        },
        {
            name: "VAT Registration",
            // image: vatregistration,
            alt: "VAT Registration Services",
            link: "/corporate-serviceshttp/vat-registration-service-dubai-uae"
        },
        {
            name: "Compliance Services",
            // image: compliance,
            alt: "Compliance Services",
            link: "/corporate-services/compliance-services-in-dubai-uae"
        },

        {
            name: "Audit & Assurance Services",
            // image: audit,
            alt: "Audit & Assurance Services",
            link: "/corporate-serviceshttp/audit-assurance-services-uae"
        },
        {
            name: "ISO Certification",
            // image: iso,
            alt: "ISO Certification Services",
            link: "/corporate-serviceshttp/iso-certification-uae"
        },
        {
            name: "SPC Freezone",
            // image: spc,
            alt: "SPC Freezone Services",
            link: "/corporate-serviceshttp/sharjah-publishing-city-free-zone"
        },
        {
            name: "CFO",
            // image: cfo,
            alt: "CFO Services",
            link: "/corporate-services/cfo-services"
        },
        {
            name: "Trademark Registration",
            // image: trademark,
            alt: "Trademark Registration Services",
            link: "/corporate-services/trademark-registration-service-dubai-uae"
        },
        {
            name: "Restaurant Accounting",
            // image: restaurant,
            alt: "Restaurant Accounting Services",
            link: "/corporate-services/restaurant-accounting-bookkeeping-service-dubai-uae"
        },
        {
            name: "Tax Consultancy",
            // image: taxconsultancy,
            alt: "Tax Consultancy Services",
            link: "/corporate-services/best-corporate-tax-consultants-dubai-uae"
        },
        {
            name: "Bank Account Opening",
            // image: bankaccount,
            alt: "Bank Account Opening Services",
            link: "/corporate-services/bank-account-opening-in-dubai"
        },
        {
            name: "Middle East Desk",
            // image: middleeastdesk,
            alt: "Middle East Desk Services",
            link: "/corporate-services/middle-east-desk-service-london-uk"
        },
        {
            name: "Bank Loan Arrangement",
            // image: bankloan,
            alt: "Bank Loan Arrangement Services",
            link: "/corporate-services/uae-bank-loan-agreement-service"
        },
        {
            name: "Local Partner Arrangement",
            // image: localpartner,
            alt: "Local Partner Arrangement Services",
            link: "/corporate-services/local-partner-arrangement-service-uae"
        },
        {
            name: "VAT Deregistration",
            // image: vatderegistration,
            alt: "VAT Deregistration Services",
            link: "/corporate-serviceshttp/vat-deregistration-service-dubai-uae"
        },



    ]

    var settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            
                    <div className="slider-container">
                        <Slider {...settings}>
                            {relatedservices.map((related, relIndex) =>
                                <div className="related-corp-servblk" key={relIndex}>
                                    <div className="relt-serv-box">
                                    <h5>{related.name}</h5>
                                    <Link href={related.link}>Read More</Link>
                                    </div>
                                    
                                </div>
                            )}

                        </Slider>
                    </div>


                
        </>
    )
}
export default RelatedCorporateservices