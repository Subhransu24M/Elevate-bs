import ItServices from "./ItServices"
import './devdigital.css';
const DevDigital = () => {
    const backgroundimage = "/images/code-bg2.webp";
    return (
        <>
            <div className="hm-it-bg" style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"cover",
        }}>
                <div className="hm-it-blk-bg">
                    <div className="container pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-in-sine">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                                <div className="dev-digi-blk">
                                    <h1>Website Development & Digital Marketing Services</h1>
                                    <p>We offer an extensive range of website development & Digital Marketing services to small, medium and large businesses to boost their online presence. We are open to both government and private firms.</p>
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