"use client"
import Link from 'next/link';
import './slider.css';
import { CldVideoPlayer } from 'next-cloudinary';
import '../../../../node_modules/next-cloudinary/dist/cld-video-player.css';

const Slider = () => {
    return (
        
                <div className="video-blk">
                    <CldVideoPlayer 
                        id="unique-video-id"
                        src="https://res.cloudinary.com/dpa8rgat7/video/upload/v1718965894/dubai_vcm1ei.mp4"
                        autoplay 
                        muted 
                        loop 
                        className="nextvideoshm" 
                        controls={false}
                        width="1920" height="1080"
                    />
                    <div className="video-caption">
                        <h2 
                            className='animationsldrtlt' 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-easing="linear" 
                            data-aos-delay="100"
                        >
                            <span className='sl-hd-spn '>INNOVATIVE</span> SUPPORT SYSTEM
                        </h2>
                        <p 
                            className='animationsldrp' 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-easing="linear" 
                            data-aos-delay="600"
                        >
                            We provide innovative support system to any business.
                        </p>
                        <Link 
                            href="/contact-us" 
                            className="btn sld-cta-btn" 
                            data-aos="fade-zoom-in" 
                            data-aos-duration="800" 
                            data-aos-easing="linear" 
                            data-aos-delay="900"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            
    )
}

export default Slider;
