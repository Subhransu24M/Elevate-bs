"use client";
import React from "react";
import Slider from "react-slick";
import './rakezlicensetypes.css';

const RakezlicenseTypes = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        lazyLoad: true,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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

    // Rakez License Types Array

    const rakezlicenseTypes = [
        { points: "Commercial" },
        { points: "Educational" },
        { points: "E-commerce" },
        { points: "General trading" },
        { points: "Individual" },
        { points: "Industrial" },
        { points: "Media" },
        { points: "Professional" },
        { points: "Service" },
        { points: "Freelance" },
    ]

    return (
        <>
            <div className="rakezlicense-typeblk">
                <div className="rakezlicense-typeblk-bg-clr">
                    <div className="container">
                        <h2>Types of Business Licenses Issued by RAKEZ</h2>
                        <p>RAKEZ offers a variety of customizable licensing options for RAK Free Zone Company Formation, such as:</p>

                        <div className="slider-container">
                            <Slider {...settings}>

                                {rakezlicenseTypes.map((types, rakezIndex) =>
                                    <div className="rakz-lcn-typ-inr-blk" key={rakezIndex}>
                                        <h6>{types.points}</h6>
                                    </div>
                                )}

                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default RakezlicenseTypes