import './adgmserviceslist.css';
import adgmserviceslist from './adgmservicesList.json';
import Link from 'next/link';
import Image from 'next/image';
import gmailicon from '../../../public/icons/corporate-icons/gmail.png';
import chaticon from '../../../public/icons/corporate-icons/chat.png';
import callicon from '../../../public/icons/corporate-icons/call.png';

const AdgmServices = () => {
    return (
        <>
            <div className='adgm-servicelist-blk'>
                <div className='container-fluid'>
                    <div className='row' >
                        {adgmserviceslist.map((adgmservicelist, index) =>
                            <div className='col-md-4 col-xl-3 col-lg-3 col-sm-12' key={index}>
                                <div className='adgm-serv-list-box'>
                                <div className='adgm-serv-img-box'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={adgmservicelist.icon} className="bs-serv-icon" alt="adgm services" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" width={40} height={40} />
                                    </div>
                                    </div>
                                    {/* <div className='icn-blk'>{adgmservicelist.icon}</div> */}
                                    <div className='tlt-blk'>
                                        <h5>{adgmservicelist.title}</h5>
                                    </div>
                                    <div className='shortdesc-blk'>
                                        <p>{adgmservicelist.ShortDescription}</p>
                                    </div>

                                    <div className='adgm-btn-blk-row'>
                                        <div className='adgm-btn-blk'>
                                            <button className='btn btn-danger adgm-bs-serv-btn-clr'><Link className="adgm-corp-serv-lrn-btn" href={adgmservicelist.PageLink}>Learn More</Link></button>
                                        </div>
                                        <div className='adgm-action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='adgm-action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" alt="icon" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='adgm-action-icon adgm-call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" alt="icon" /></Link>

                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='adgm-action-icon adgm-gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" alt="icon" /></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdgmServices