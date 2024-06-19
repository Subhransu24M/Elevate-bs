import ItServices from "./ItServices"
import './devdigital.css';
const DevDigital = () => {
    return (
        <>
            <div className="hm-it-bg">
            <div className="hm-it-blk-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                            <div className="dev-digi-blk">
                                <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Website Development & Digital Marketing Services</h2>
                                <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="500">We offer an extensive range of website development & Digital Marketing services to small, medium and large businesses to boost their online preesence. We are open to both government and private firms.</p>
                            </div>
                        </div>
                    </div>
                    <ItServices />
                </div>
            </div>
            </div>
        </>
    )
}

export default DevDigital