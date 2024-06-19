import slider1 from '../../../../public/slider-banner/slider-1.webp';
import eidslider from './eidimage/eid-al-adha-2024.jpeg';
import Image from 'next/image';
import Link from 'next/link';
// import {slidervideo} from '../../../../public/video/dubai.mp4'
import './slider.css';

const Slider = () => {
    return (
        <>
            {/* <div className='hm-slider-vdo'>
           <video src={require('../../../../public/dubai.mp4')} autoPlay muted loop className="nextvideoshm" />
           </div> */}


            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">

                    {/* <div className="carousel-item active">
                        <Image src={eidslider} className="d-block w-100 sldimg" alt="eid al adha 2024" />
                    </div> */}


                    <div className="carousel-item">
                        <Image src={slider1} className="d-block w-100 sldimg" alt="innovative support system" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='animationsldrtlt' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear" data-aos-delay="100"><span className='sl-hd-spn '>INNOVATIVE</span> SUPPORT SYSTEM</h2>
                            <p className='animationsldrp' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear" data-aos-delay="600">We provide innovative support system to any business.</p>
                            <Link href="/contact-us" type="button" className="btn sld-cta-btn" data-aos="fade-zoom-in" data-aos-duration="800" data-aos-easing="linear" data-aos-delay="900">Contact us</Link>
                        </div>
                    </div>



                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider