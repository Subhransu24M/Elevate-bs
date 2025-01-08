import './caddress.css';
import { IoCallOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
// import { SlLocationPin } from "react-icons/sl";


const Caddress = () => {
    const caddressDetails = [
        {
            Location: "DUBAI,JLT",
            Company_Name: "Elevate Business Solutions DMCC",
            Address: "Office No: 1203 & 1207, HDS Business Center, Cluster M, JLT, Dubai, UAE",
            Phone_Number: "+971 (0) 44258131",
            Phone_Number_optional: "",
            Mobile_Number: "+971 56 167 2533",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: ""
        },
        {
            Location: "ABU DHABI",
            Company_Name: "Elevate Global BPM Ltd",
            Address: "Office No: 2310, Addax Tower, Al Reem Island, Abu Dhabi, UAE",
            Phone_Number: "+971 (0) 26719099",
            // Phone_Number_optional: "26719099",
            Mobile_Number: "+971 56 167 2533",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "USA",
            Company_Name: "Elevate International Business Solutions LLC",
            Address: "105 N 1st St., #429, San Jose, California 95103, USA",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "+1 408 786 5433",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "UK",
            Company_Name: "Elevate International Business Solutions LTD",
            Address: "128 City Road, London, EC1V 2NX, UK",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "+44 7393 845255",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "INDIA",
            Company_Name: "Elevate First Business Pvt. Ltd",
            Address: "Plot No: GA-161, Gayatri Vihar, Patia , Bhubaneswar, Odisha-751024, INDIA",
            Phone_Number: "+91 674 353 5676",
            Phone_Number_optional: "",
            Mobile_Number: "+91 89841 97663",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        }
    ]
    return (
        <>
            <div className='caddress-blk'>
                <div className='container'>
                    <div className='row'>
                        {caddressDetails.map((addresslist, caddIndex) =>
                            <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12' key={caddIndex}>
                                <div className='cadd-box'>
                                    <h5 className='caddr-loc'>{addresslist.Location}</h5>
                                    <h5 className='cpmname-tlt'>{addresslist.Company_Name}</h5>
                                    <p className='cpmname-addr-p'>
                                    {addresslist.Address}</p>
                                    {addresslist.Phone_Number && (
                                        <div className='caddr-cnt'>
                                            <p><IoCallOutline className='caddr-cta-icn'/>

                                                {addresslist.Phone_Number && (
                                                    <a href={`tel:${addresslist.Phone_Number}`}>{addresslist.Phone_Number}</a>
                                                )}
                                                {addresslist.Phone_Number && addresslist.Phone_Number_optional && " | "}
                                                {addresslist.Phone_Number_optional && (
                                                    <a href={`tel:${addresslist.Phone_Number_optional}`}>
                                                        {addresslist.Phone_Number_optional}
                                                    </a>
                                                )}
                                            </p>
                                        </div>
                                    )}
                                    {addresslist.Mobile_Number && (
                                        <div className='caddr-cnt'>
                                        <p><CiMobile3 className='caddr-cta-icn'/>

                                            <a href={`tel:${addresslist.Mobile_Number}`}>{addresslist.Mobile_Number}</a>
                                        </p>
                                        </div>
                                    )}
                                    {addresslist.Email_Id && (
                                        <div className='caddr-cnt'>
                                        <p><IoMailOutline className='caddr-cta-icn'/>

                                            
                                            {addresslist.Email_Id && (
                                                <a href={`tel:${addresslist.Email_Id}`}>{addresslist.Email_Id}</a>
                                            )}
                                            {addresslist.Email_Id && addresslist.Email_Id_Optional && " | "}
                                            {addresslist.Email_Id_Optional && (
                                                <a href={`tel:${addresslist.Email_Id_Optional}`}>
                                                    {addresslist.Email_Id_Optional}
                                                </a>
                                            )}
                                        </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}
export default Caddress