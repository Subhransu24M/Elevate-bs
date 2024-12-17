import { CiLocationArrow1 } from "react-icons/ci";
import FooterNew from "../components/Footer/FooterNew"
import NewNavbar from "../components/NavBar/NewNavbar"
import './thankyou.css';
import Link from "next/link";
const page = () =>{
    return (
        <>
        <div className="fullwrapper">
            <NewNavbar/>
             <div className="container-fluid">
                <div className="row">
                    <div className="thankupgblk">
                        <div className="thnkupgcntblk">
                        <h2>Thank you !!!</h2>
                        <p>Our team will get back to you soon</p>
                        <p>For more information, visit our website</p>
                        <div className="thank-cta-blk">
                        <Link href="/" className="thank-cta-blk-lnk">Home <CiLocationArrow1 />
                        </Link>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
            <FooterNew/>
        </div>
        </>
    )
}
export default page