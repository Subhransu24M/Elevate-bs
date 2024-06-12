import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import './footerbottomsticky.css';
import Link from "next/link";

const FooterBottmSticky = () => {
    return (
        <>
            <div className='sticky-bottom-ftr-blk'>
                <div className='container ftr-btm-blk'>
                    <div className='btm-icon'>
                        <Link href="/"><FaHome />
                        <p className="ftr-btm-p">Home</p></Link>
                        </div>
                    <div className='btm-icon'>
                        <Link href="https://api.whatsapp.com/send?phone=971561672533"><FaWhatsapp />
                        <p className="ftr-btm-p">Whatsapp</p></Link>
                        </div>
                    <div className='btm-icon'>
                        <Link href="/contact-us"><MdContacts />
                        <p className="ftr-btm-p">Contact us</p></Link>
                        </div>
                    <div className='btm-icon'>
                        <Link href="tel:971561672533"><IoCallOutline />
                        <p className="ftr-btm-p">Call us</p></Link>
                        </div>
                    <div className='btm-icon'>
                        <Link href="mailto:info@elevatebs.com"><MdAttachEmail />
                        <p className="ftr-btm-p">Email us</p></Link>
                        </div>

                </div>

            </div>
        </>
    )
}

export default FooterBottmSticky