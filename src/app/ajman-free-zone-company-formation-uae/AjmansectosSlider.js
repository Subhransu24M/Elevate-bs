"use client"
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import foodbeverage from './images/food-&-beverage.jpg';
import automotive from './images/automotive.jpg';
import healthbeauty from './images/health-&-beauty.jpg';
import construction from './images/construction.jpg';
import education from './images/Education-2.jpg';
import agriculture from './images/agriculture.jpg';
import oilgas from './images/oil-&-gas.jpg';
import paperpackage from './images/paper-&-package.jpg';
import jewellery from './images/Jewellery.jpg';
import media from './images/media-2.jpg';
import marine from './images/marine.jpg';
import textile from './images/textile.jpg';
import advancetech from './images/advance-technology.jpg';
import sports from './images/sports.jpg';
import chemicalindustry from './images/chemical-industry.jpg';

const AjmansectorsSlider = () => {
    const slidercontent = [
        {
            title: "Food & Beverage",
            image: foodbeverage
        },
        {
            title: "Automotive",
            image: automotive
        },
        {
            title: "Health & Beauty",
            image: healthbeauty
        },
        {
            title: "Construction",
            image: construction
        },
        {
            title: "Education",
            image: education
        },
        {
            title: "Agriculture",
            image: agriculture
        },
        {
            title: "Oil & Gas",
            image: oilgas
        },
        {
            title: "Paper & Packaging",
            image: paperpackage
        },
        {
            title: "Jewellery(Gold & Diamonds)",
            image: jewellery
        },
        {
            title: "Media",
            image: media
        },
        {
            title: "Marine",
            image: marine
        },
        {
            title: "Textile",
            image: textile
        },
        {
            title: "Advanced Technology",
            image: advancetech
        },
        {
            title: "Sports",
            image: sports
        },
        {
            title: "Chemical Industry",
            image: chemicalindustry
        },
    ];
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
    return (
        <>
            <div className="ajmansectorslider">
                <Slider {...settings}>
                    {slidercontent.map((content, index) =>
                        <div key={index} className='ajmanimgsld-blk'>
                            <div className='ajman-sld-img-tlt-blk'>
                            <h5>{content.title}</h5>
                            </div>
                            <div className='ajman-slierdimg-blk'>
                            <Image className="ajmansldimg" src={content.image} alt="ajman company formation" style={{ width: '100%', height: '300px',objectFit:'cover' }}/> 
                            </div>
                        </div>
                    )}

                </Slider>

            </div>
        </>
    )
}
export default AjmansectorsSlider