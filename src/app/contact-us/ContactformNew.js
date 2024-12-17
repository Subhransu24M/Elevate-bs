"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import './contactform.css';
import { FaRegBuilding, FaAddressCard, FaRegUser, FaPhone, FaCogs } from "react-icons/fa";

const ContactformNew = () => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true); // Ensures this code runs only on the client side
    }, []);

    const [businessname, setBusinessname] = useState('');
    const [customername, setCustomername] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [services, setServices] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!businessname || !customername || !mobilenumber || !email || !services) {
            alert("Please fill out all fields.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/sendEmailContact', {
                credentials: 'same-origin',
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ businessname, customername, mobilenumber, email, services }),
            });

            if (response.ok) {
                if (isClient) router.push('/thank-you'); // Use router only if it's safe
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (!isClient) return null; // Avoid rendering the form on the server side

    return (
        <div className="mgntmigrationfrm-blk">
            <form onSubmit={handleSubmit}>
                <h4>CONTACT US</h4>
                <div className="row">
                    {/* Business Name */}
                    <div className="col-12 pb-2">
                        <label htmlFor="businessname">Business Name</label>
                        <div className="text-blk">
                            <FaRegBuilding className="mgnt-migr-frm-icon" />
                            <input
                                type="text"
                                id="businessname"
                                className="form-control mgnt-frm-input"
                                placeholder="Business Name"
                                value={businessname}
                                onChange={(e) => setBusinessname(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Repeat similar patterns for other fields */}
                </div>
                <button type="submit" className="btn btn-secondary mgn-mgr-frm-btn btn-lg" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ContactformNew;
