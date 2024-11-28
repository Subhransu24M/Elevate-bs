"use client"
import React from "react";
import Slider from "react-slick";
import './completeadgmservice.css';

const CompleteaccountingAdgm = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

    const completeadgmService = [
        {points : "Accounting & Bookkeeping Services"},
        {points : "Accounting System Setup & Training"},
        {points : "Accountant Secondment Services"},
        {points : "Receivables & Payables Management"},
        {points : "Fixed Asset Management Services"},
        {points : "Management Accounting Services"},
        {points : "Accounting Review Services"},
        {points : "CFO Services"},
        {points : "Data Entry or Transaction Processing"},
        {points : "Management Reporting Services"},
        {points : "Audit Support"},
    ]

    return (
        <>
            <div className="compl-adgm-serv-blk">
                <div className="container">
                    <div className="row">
                        <h2>Complete Accounting & Bookkeeping Services in  ADGM by Elevate </h2>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {completeadgmService.map((servicelist,index) =>
                                 <div className="compl-adgm-serv-box" key={index}>
                                    <div className="compl-adgm-serv-inrbox">
                                    <h6>{servicelist.points}</h6>
                                    </div>
                                 
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
export default CompleteaccountingAdgm