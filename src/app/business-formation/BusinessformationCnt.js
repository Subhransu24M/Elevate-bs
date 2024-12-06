import Link from 'next/link';
import Image from 'next/image';
import gmailicon from '../../../public/icons/corporate-icons/gmail.png';
import chaticon from '../../../public/icons/corporate-icons/chat.png';
import callicon from '../../../public/icons/corporate-icons/call.png';
import businessformationdata from './businessformationData.json';
const BusinessformationCnt = () =>{
    return (
        <>
        <div className='bf-servicelist-blk'>
                <div className='container-fluid'>
                    <div className='row' >
                        {businessformationdata.map((bfdata, index) =>
                            <div className='col-md-4 col-xl-3 col-lg-3 col-sm-12' key={index}>
                                <div className='bf-serv-list-box'>
                                <div className='bf-serv-img-box'>
                                    <div className='bs-ser-img-blk'>
                                        <Image src={bfdata.icon} className="bs-serv-icon" alt="Business Formation services" data-aos="zoom-in" data-aos-easing="linear"
                                            data-aos-duration="800" width={40} height={40} />
                                    </div>
                                    </div>
                                    {/* <div className='icn-blk'>{bfdata.icon}</div> */}
                                    <div className='tlt-blk'>
                                        <h5>{bfdata.title}</h5>
                                    </div>
                                    <div className='shortdesc-blk'>
                                        <p>{bfdata.ShortDescription}</p>
                                    </div>

                                    <div className='bsf-btn-blk-row'>
                                        <div className='bsf-btn-blk'>
                                            <button className='btn btn-danger bsf-bs-serv-btn-clr'><Link className="bsf-corp-serv-lrn-btn" href={bfdata.PageLink}>Learn More</Link></button>
                                        </div>
                                        <div className='bsf-action-btn-blk'>
                                            <Link href="https://api.whatsapp.com/send?phone=971561672533" target="_blank" data-toggle="tooltip" data-placement="top" title="Chat with us"><Image className='bsf-action-icon' src={chaticon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" alt="icon" /></Link>
                                            <Link href="tel:971561672533" data-toggle="tooltip" data-placement="top" title="Call us"><Image className='bsf-action-icon call-icon' src={callicon} data-aos="zoom-in" data-aos-easing="linear"
                                                data-aos-duration="3000" alt="icon" /></Link>

                                            <Link href="mailto:info@elevateauditing.com" data-toggle="tooltip" data-placement="top" title="Mail us"><Image className='bsf-action-icon gmail-icon' src={gmailicon} data-aos="zoom-in" data-aos-easing="linear"
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
export default BusinessformationCnt