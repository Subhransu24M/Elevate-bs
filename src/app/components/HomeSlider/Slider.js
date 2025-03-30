"use client"
// import slider1 from '../../../../public/slider-banner/slider-1.webp';
// import slider1 from '../../../../public/images/dubai-img-c.jpg';
// import diwalislider from '../../../../public/slider-banner/EBS-diwali-slider-24.jpg';
import slider1 from './sliderimage/dubai-slider-f2.png';
import Image from 'next/image';
import Link from 'next/link';
import './slider.css';
import { CiLocationArrow1 } from "react-icons/ci";
import ramadansslider from './ramadan/eid.jpg';


const Slider = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="2000" >
                    <Image src={ramadansslider} className="d-block w-100 sldimg" alt="merry christmas 2025" />
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <Image src={slider1} className="d-block w-100 sldimg" alt="innovative support system" priority/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='animationsldrtlt' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear" data-aos-delay="100"><span className='sl-hd-spn '>INNOVATIVE</span> SUPPORT SYSTEM</h2>
                            <p className='animationsldrp' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear" data-aos-delay="600">We provide innovative support system to any business.</p>
                            <Link href="/contact-us" type="button" className="btn sld-cta-btn" data-aos="fade-zoom-in" data-aos-duration="800" data-aos-easing="linear" data-aos-delay="900">Contact us <CiLocationArrow1 />
                            </Link>
                        </div>                     
                    </div>     
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </>
    )
}

export default Slider