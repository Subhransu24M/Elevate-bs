"use client"
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './contactform.css';
import { FaRegBuilding, FaAddressCard, FaRegUser, FaPhone, FaCogs } from "react-icons/fa";


const ContactForm = () => {
    const router = useRouter();
    const [businessname, setBusinessname] = useState('');
    const [customername, setCustomername] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [services, setServices] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call a function to send email using Nodemailer with formData

        if (businessname == "" && customername == "" && mobilenumber == "" && email == "" && services == "") {
            alert("Please enter all the field");
            return;
        }
        setLoading(true);
        setSuccessMessage(''); // Clear any previous messages

        // New Mail Handle

        try {
            const response = await fetch('/api/sendEmailContact', {
                credentials: 'same-origin',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    businessname, customername, mobilenumber, email, services
                })
            });
            console.log(await response.json());
            if (response.ok) {
                // Clear form fields
                setBusinessname('');
                setCustomername('');
                setMobilenumber('');
                setEmail('');
                setServices('');
                setSuccessMessage('Thank you for contacting us! 🎉');
                // Navigate to the Thank You page
                router.push('/thank-you');
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
            <div className="mgntmigrationfrm-blk">
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <h4>CONTACT US</h4>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaRegBuilding /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Business Name" name="businessname" id="businessname" value={businessname} onChange={(e) => setBusinessname(e.target.value)} required />
                            </div>

                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaRegUser /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Your Name" name="customername" id="customername" value={customername} onChange={(e) => setCustomername(e.target.value)} required />
                            </div>

                        </div>

                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaPhone /></div>
                                <input type="text" className="form-control mgnt-frm-input" placeholder="Contact Number" name="mobilenumber" id="mobilenumber" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} required />
                            </div>

                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaAddressCard /></div>
                                <input type="email" className="form-control mgnt-frm-input" placeholder="Email ID" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 pb-2">
                            <div className="text-blk">
                                <div className="mgnt-migr-frm-icon"><FaCogs /></div>
                                <select className="form-control cmn-frm-slt" name="services" id="services"
                                    // value={formData.services} onChange={handleInputChange}
                                    //  value={services} onChange={(e) => setServices(e.target.value)}

                                    value={services} onChange={(e) => setServices(e.target.value)}

                                >
                                    <option>Select Service</option>
                                    <option value="Website Development">Website Development</option>
                                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Corporate Services">Corporate Services</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <span className='error-clr'>{error}</span> */}
                    {/* <button type="submit" className="btn btn-secondary mgn-mgr-frm-btn btn-lg">Submit</button> */}
                    <button type="submit" className="btn btn-secondary mgn-mgr-frm-btn btn-lg" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </>
    )
}

export default ContactForm