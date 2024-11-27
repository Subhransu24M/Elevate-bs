import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link"
const WhatisifzaCost = () =>{
    return (
        <>
        <div className="whatifza-cost-blk">
            <div className="container">
                <div className="row">
                    <h2>What is the JAFZA Company Formation Cost</h2>
                    <div className="whatis-p">
                    <p>The typical cost for a standard JAFZA license begins at AED 15,000*. However, the final price can vary based on the license type, business nature, and the number of activities involved. Besides the license fee, additional expenses may include registration fees, visa processing, PRO services, and office space.</p>
                    </div>
                    <div className="whatis-ifza-cost-btn-blk">
                        <Link href="/contact-us">Get Started Today <CiLocationArrow1 />
                        </Link>
                    </div>
                    <div className="whatis-p">
                        <p>Elevate Business Solutions  offers expert guidance throughout the JAFZA offshore company formation process. Contact us to simplify your setup and begin your journey towards global business success with company formation in JAFZA offshore.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default WhatisifzaCost