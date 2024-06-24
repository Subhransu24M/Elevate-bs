"use client"
import Link from 'next/link';
import './slider.css';
import { CldVideoPlayer } from 'next-cloudinary';
import { v4 as uuidv4 } from 'uuid';
import '../../../../node_modules/next-cloudinary/dist/cld-video-player.css';

const Slider = () => {
    // Generate a unique ID for the video player
    const videoId = uuidv4();

    return (
        <div className="video-blk">
            <CldVideoPlayer 
                id={videoId}  // Use the unique ID here
                src="https://res.cloudinary.com/dpa8rgat7/video/upload/f_auto/v1718965894/dubai_vcm1ei.mp4"
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
                    data-aos-duration="400" 
                    data-aos-easing="linear"
                >
                    <span className='sl-hd-spn '>INNOVATIVE</span> SUPPORT SYSTEM
                </h2>
                <p 
                    className='animationsldrp' 
                    data-aos="fade-up" 
                    data-aos-duration="500" 
                    data-aos-easing="linear"
                >
                    We provide innovative support system to any business.
                </p>
                <Link 
                    href="/contact-us" 
                    className="btn sld-cta-btn" 
                    data-aos="fade-zoom-in" 
                    data-aos-duration="600" 
                    data-aos-easing="linear"
                >
                    Contact us
                </Link>
            </div>
        </div>
    )
}

export default Slider;
