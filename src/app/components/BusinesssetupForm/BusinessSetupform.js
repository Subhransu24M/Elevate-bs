"use client"
import './businesssetupform.css';
import { FaRegBuilding, FaRegUser, FaLink, FaPhone, FaCogs } from "react-icons/fa";
import { useState } from 'react';

const BusinessSetupform = () => {
  const [businessname, setBusinessname] = useState('');
  const [customername, setCustomername] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [services, setServices] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call a function to send email using Nodemailer with formData

    if (businessname == "" && customername == "" && email == "" && mobilenumber == "" ) {
        alert("Please enter all the field");
        return;
    }
    setLoading(true);
    setSuccessMessage(''); // Clear any previous messages
    // New Mail Handle

    try {const response = await fetch ('/api/sendEmailBusinesssetup',{
        credentials : 'same-origin',
        method : 'POST',
        headers :{
           'content-type': 'application/json'
        },
        body : JSON.stringify({
            businessname,customername,email,mobilenumber,services
        })
    })
    console.log(await response.json())
    if (response.ok) {
        // Clear form fields
        setBusinessname('');
        setCustomername('');
        setMobilenumber('');
        setEmail('');
        setServices('');
        setSuccessMessage('Thank you for contacting us! 🎉');
    } else {
        console.error(result.message || 'Something went wrong');
        alert('Failed to send your message. Please try again.');
    }
} catch (error) {
    console.error('Error:', error);
}
finally {
    setLoading(false);
}

};

  return (
    <>
      <div className="cmn-frm-blk">
                <form onSubmit={(ev) => handleSubmit (ev)}>
                    <h4>CONTACT US</h4>
                    <div className="row pt-3">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaRegBuilding className="cmn-frm-icn" /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Business Name" name="businessname" id="businessname" value={businessname} onChange={(e) => setBusinessname(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaRegUser className="cmn-frm-icn" /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Your Name" name="customername" id="customername" value={customername} onChange={(e) => setCustomername(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaLink className="cmn-frm-icn" /></div>
                                <input type="email" className="form-control mgnt-frm-input" placeholder="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaPhone className="cmn-frm-icn" /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Contact Number" name="mobilenumber" id="mobilenumber" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                        <p>How soon are you planning to start?</p>
                            <div className="text-blk">
                                <div className="corp-cmn-frm-icon"><FaCogs className="cmn-frm-icn" /></div>
                                <select className="form-control cmn-frm-slt" name="services" id="services" value={services} onChange={(e) => setServices(e.target.value)}>
                                    <option value="Immediately" default>Immediately</option>
                                    <option value="Within 1 month">Within 1 month</option>
                                    <option value="Within 2 months">Within 2 months</option>
                                    <option value="After 3 months">After 3 months </option>

                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <span className='error-clr'>{error}</span> */}
                    {/* <button type="submit" className="btn btn-secondary corp-cmn-frm-btn btn-lg" name="submit" id="submit" value="submit">Submit</button> */}
                    <button type="submit" className="btn btn-secondary corp-cmn-frm-btn btn-lg" name="submit" id="submit" value="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
    </>
  )
}

export default BusinessSetupform