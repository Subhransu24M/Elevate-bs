import './caddress.css';
import { IoCallOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import Image from 'next/image';
// import { SlLocationPin } from "react-icons/sl";


const Caddress = () => {
    const caddressDetails = [
        {
            Location: "DUBAI - JLT",
            Image_URL: "/images/contact-us-image/dubai-jlt.jpg",
            License: "(License No DMCC 402183)",
            Company_Name: "Elevate Business Solutions DMCC",
            Address: "Office No: 1203,1204 & 1207, HDS Business Center, Cluster M, JLT, Dubai, UAE",
            Phone_Number: "+971 (0) 44258131",
            Phone_Number_optional: "",
            Mobile_Number: "+971 56 167 2533",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: ""
        },
        {
            Location: "DUBAI - BUSINESS BAY",
            Image_URL: "/images/contact-us-image/dubai-business-bay.jpg",
            License: "(DED Trade License No: 687256)",
            Company_Name: "Elevate First Accounting & Auditing",
            Address: "The Exchange Tower, Business Bay, Po Box No: 336293 Dubai, United Arab Emirates",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "+971 56 167 2533",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: ""
        },
        {
            Location: "ABU DHABI",
            Image_URL: "/images/contact-us-image/adgm.jpg",
            Company_Name: "Elevate Global BPM Ltd",
            License: "(ADGM License No: 20213)",
            Address: "Office No: 2310, Addax Tower, Al Reem Island, Abu Dhabi, UAE",
            Phone_Number: "+971 (0) 26719099",
            // Phone_Number_optional: "26719099",
            Mobile_Number: "+971 56 167 2533",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "USA",
            Image_URL: "/images/contact-us-image/USA-Texas.jpg",
            Company_Name: "Elevate Business Solutions LLC",
            License: "(EIN no: 365140296)",
            Address: "5900 Balcones Dr STE 300, Austin, TX 78731, USA",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "UK",
            Image_URL: "/images/contact-us-image/UK-London.jpg",
            Company_Name: "Elevate International Business Solutions LTD",
            License: "(Company Number 14051546)",
            Address: "128 City Road, London, EC1V 2NX, UK",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "+44 7386 246959",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "INDIA - BHUBANESWAR",
            Image_URL: "/images/contact-us-image/India-Bhubaneswar.jpg",
            Company_Name: "Elevate First Business Pvt. Ltd",
            License: "(CIN No.U74999DL2017PTC312701)",
            Address: "Plot No: GA-161, Gayatri Vihar, Patia , Bhubaneswar, Odisha-751024, INDIA",
            Phone_Number: "+91 674 353 5676",
            Phone_Number_optional: "",
            Mobile_Number: "+91 89841 97663",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "INDIA - NOIDA",
            Image_URL: "/images/contact-us-image/India-Noida.jpg",
            Company_Name: "Elevate First Business Pvt. Ltd",
            License: "(CIN No.U82990OD2023PTC042144)",
            Address: "Office N0-605, Tower-4, Assotech Business Cresterra Sector 135, Noida, UP , 201304",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "+91 78095 20225",
            Email_Id: "info@elevatebs.com",
            Email_Id_Optional: "",
        },
        {
            Location: "PORTUGAL - LISBON",
            Image_URL: "/images/contact-us-image/portugal-lisbon.jpeg",
            Company_Name: "ELEVATE INTERBRIDGE, UNIPESSOAL LDA",
            License: "(NIF/NIPC: 518762882)",
            Address: "Avenida Engenheiro Arantes e Oliveira, No. 3, Ground Floor, Areeiro, Lisbon, Postal Code 1900-221",
            Phone_Number: "",
            Phone_Number_optional: "",
            Mobile_Number: "+971 56 167 2533",
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
                                    <div className='cont-loc-img-blk'>
                                        <Image src={addresslist.Image_URL} width={300} height={150}alt="elevate business solutions global locations" />
                                    </div>
                                    <h5 className='cpmname-tlt'>{addresslist.Company_Name}</h5>
                                    <p className='cpmname-license-p'>{addresslist.License}</p>
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