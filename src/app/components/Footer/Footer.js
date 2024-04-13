"use client"
import Image from 'next/image';
import Link from 'next/link';
import './footer.css';
import ftrlogo from '../../../../public/logo/ebs-logo.png';
import ftrfacebook from '../../../../public/social-icons/facebook-1.png';
import ftrinstagram from '../../../../public/social-icons/instagram-1.png';
import ftrlinkedin from '../../../../public/social-icons/linkedin-1.png';
import ftrtwitter from '../../../../public/social-icons/twitter.png';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { addressdata } from "./FooterAddress";
import React, { useState } from 'react';
const Footer = () => {

    const [ctitle, setCtitle] = useState(addressdata[0].ctitle);
    const [cdetails, setCdetails] = useState(addressdata[0].cdetails);
    const [cmobileno, setMobileno] = useState(addressdata[0].cmobileno);
    const [ctelno, setTelno] = useState(addressdata[0].ctelno);
    const [cmailid, setMailid] = useState(addressdata[0].cmailid);

    const publish = (event) => {
        const value = event.target.value;

        if (value === "UAE") {
            setCtitle(addressdata[0].ctitle);
            setCdetails(addressdata[0].cdetails);
            setMobileno(addressdata[0].cmobileno);
            setTelno(addressdata[0].ctelno);
            setMailid(addressdata[0].cmailid);
        }
        else if (value === "USA") {
            setCtitle(addressdata[1].ctitle);
            setCdetails(addressdata[1].cdetails);
            setMobileno(addressdata[1].cmobileno);
            setTelno(addressdata[1].ctelno);
            setMailid(addressdata[1].cmailid);
        }
        else if (value === "UK") {
            setCtitle(addressdata[2].ctitle);
            setCdetails(addressdata[2].cdetails);
            setMobileno(addressdata[2].cmobileno);
            setTelno(addressdata[2].ctelno);
            setMailid(addressdata[2].cmailid);
        }
        else if (value === "INDIA") {
            setCtitle(addressdata[3].ctitle);
            setCdetails(addressdata[3].cdetails);
            setMobileno(addressdata[3].cmobileno);
            setTelno(addressdata[3].ctelno);
            setMailid(addressdata[3].cmailid);
        }
    }



    return (
        <>
            <div className='ftr-bg'>
                <div className="ftr-blk">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
                                <div className="fir-inr">
                                    <div className="ftr-logo">
                                        <Image src={ftrlogo} width={150} height={150} />
                                    </div>
                                    <p>Capitalizing on its 15 years of cutting edge expertise in Corporate Services, IT Services & Digital Marketing.</p>
                                    <div className="ftr-scl">
                                        <Link href="#"><Image src={ftrfacebook} width={40} height={40} /></Link>
                                        <Link href="#"><Image src={ftrinstagram} width={40} height={40} /></Link>
                                        <Link href="#"><Image src={ftrlinkedin} width={40} height={40} /></Link>
                                        <Link href="#"><Image src={ftrtwitter} width={40} height={40} /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                                <div className="fir-inr">
                                    <h4>Services</h4>
                                    <hr className='ftr-hr' />
                                    <ul>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">Website Development</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">E-Commerce Solutions</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">App Development</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">Digital Marketing</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">SEO</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">Google Ads</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">Social Media Marketing</Link></li>
                                        <li><FaArrowRightFromBracket className='ftr-arrow' /><Link href="#">Corporate Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12 col-xs-12">
                                <div className="fir-inr">
                                    <h4>Get in Touch</h4>
                                    <hr className='ftr-hr' />
                                </div>
                                <div className="adrsec">
                                    {
                                        addressdata.map((val) => {
                                            return (
                                                <button key="{id}"
                                                    type="button"
                                                    className="btn btn-link ftr-adrs"
                                                    onClick={publish}
                                                    value={val.id}>
                                                    {val.id}
                                                </button>
                                            );
                                        })
                                    }
                                </div>
                                <div className='hm-ftr-addrs-blk'>
                                    <h5 className="ftr-adrs-tlt" >{ctitle}</h5>
                                    <p className="ftr-adrs-txt" ><b>Address:</b> {cdetails}</p>
                                    <p className="ftr-adrs-txt" ><b>Tel No. :</b> {ctelno}</p>
                                    <p className="ftr-adrs-txt" ><b>Mobile No :</b> {cmobileno}</p>
                                    <p className="ftr-adrs-txt" ><b>Mail Id :</b> {cmailid}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer