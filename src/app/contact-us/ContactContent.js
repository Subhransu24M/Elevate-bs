import ItForm from "../components/WebForm/ItForm"


const ContactContent = () => {
  return (
   <>
   <div className="ebs-contact">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-xs-12">
              <ItForm/>
            </div>
            <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 col-xs-12 map-responsive">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.112031940232!2d55.1380504!3d25.0641917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cade31e1b59%3A0x614a8d71940f5eaa!2sElevate%20Business%20Solutions%20DMCC!5e0!3m2!1sen!2sin!4v1659423740492!5m2!1sen!2sin"
                width="600"
                height="500"
                style={{ border: 7 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default ContactContent