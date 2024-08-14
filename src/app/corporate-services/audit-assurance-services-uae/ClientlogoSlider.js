"use client"
import Slider from "react-slick";
import clntlg1 from './images/1.png';
import clntlg2 from './images/2.png';
import clntlg3 from './images/3.png';
import clntlg4 from './images/4.png';
import clntlg5 from './images/5.png';
import clntlg6 from './images/6.png';
import clntlg7 from './images/adgm.png';
import clntlg8 from './images/difc.png';
import clntlg9 from './images/masdar-city.png';
import clntlg10 from './images/dafza.png';
import clntlg11 from './images/ded.png';

import Image from "next/image";

const ClientlogoSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <>
            <div className="audt-assn-logo-blk">
                <div className="container">
                    <div className="row">
                        <Slider {...settings}>
                            <div className="clntlgog">
                                <Image src={clntlg1} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg2} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg3} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg4} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg5} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg6} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg7} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg8} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg9} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg10} />
                            </div>
                            <div className="clntlgog">
                            <Image src={clntlg11} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientlogoSlider