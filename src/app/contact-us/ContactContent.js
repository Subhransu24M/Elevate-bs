import ItForm from "../components/WebForm/ItForm";
import cntimgbs from './images/support.png';
import Image from "next/image";
const ContactContent = () => {
  return (
   <>
   <div className="ebs-contact">
    <div className="container">
      <div className="ebs-contactblk">
        <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
              <div className="cnt-blkinrpart">
              <h2>We're here to support </h2>
              <p>Whether you have a question or need assistance, we're here to help. Reach out to us through the form and our team will get back to you as soon as possible.</p>
              <div className="cntimgbsblk">
              <Image src={cntimgbs} alt="contact us" />
              </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
            <div className="cnt-blkinrpart">
              <ItForm/>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-xs-12 map-responsive">
            <div className="cnt-blkinrpart ifrm-resp">
            <iframe className="resp-ifrm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.112031940232!2d55.1380504!3d25.0641917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cade31e1b59%3A0x614a8d71940f5eaa!2sElevate%20Business%20Solutions%20DMCC!5e0!3m2!1sen!2sin!4v1659423740492!5m2!1sen!2sin"
                width="600"
                height="300"
                style={{ border: 7 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
            </div>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default ContactContent