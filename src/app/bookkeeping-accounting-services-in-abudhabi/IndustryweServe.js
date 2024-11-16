"use client"
import Image from "next/image";
import retail from './images/retail.jpg';
import construction from './images/construction.jpeg';
import realestate from './images/real-estate.jpg';
import manufacture from './images/manufacture.jpeg';
import hospitality from './images/hospitality.jpg';
import logistics from './images/logistics.jpeg';
import exportandimport from './images/import-export.jpg';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './industryweserve.css';

const IndustryweServe = () =>{
    const industryNeeds =[
        {
            title: "Retail",
            image: retail
        },
        {
            title: "Construction & Contracting",
            image: construction
        },
        {
            title: "Real Estate",
            image: realestate
        },
        {
            title: "Manufacturing & Distribution",
            image: manufacture
        },
        {
            title: "Hospitality & Healthcare",
            image: hospitality
        },
        {
            title: "Logistics",
            image: logistics
        },
        {
            title: "Export & Import",
            image: exportandimport
        },
    ]

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <>
        <div className="indut-serve-blk">
            <div className="container">
                <h2>Industries We Serve: Tailored Accounting Solutions for Your Unique Needs</h2>
                <p>At Elevate Business Solutions, we understand that each industry has its own unique challenges and requirements.</p>
                <p>
                We recognize that no two organizations are alike, which is why we offer bespoke Accounting Services in Abu Dhabi designed to meet the specific needs of your industry. Our tailored approach combines our deep knowledge and experience to manage your accounts efficiently while supporting your business growth.
                </p>
                <div className="indut-serv-slider">
                <Slider {...settings}>
                    {industryNeeds.map((needs, index) =>
                        <div key={index} className='ajmanimgsld-blk'>
                            <div className='ajman-sld-img-tlt-blk'>
                            <h5>{needs.title}</h5>
                            </div>
                            <div className='ajman-slierdimg-blk'>
                            <Image className="ajmansldimg" src={needs.image} alt="abudhabi bookkeeping services" style={{ width: '100%', height: '300px',objectFit:'cover' }}/> 
                            </div>
                        </div>
                    )}

                </Slider>
                </div>
                <p className="pt-3">No matter your sector, we understand your unique challenges and offer bespoke Accounting & Bookkeeping Services in Abu Dhabi to manage your accounts efficiently and support your business growth.</p>
            </div>
        </div>
        </>
    )
}
export default IndustryweServe