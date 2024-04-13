

const WooModal = () => {
    return (
        <>
            <button type="button" className="btn btn-primary ecom-mdl-btn" data-bs-toggle="modal" data-bs-target="#wooModal">
                Read More
            </button>


            <div className="modal fade" id="wooModal" tabIndex="-1" aria-labelledby="wooModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="wooModalLabel">WooCommerce Development</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                WooCommerce Development: When it comes to e-commerce website development services in the UK, we stand out with WooCommerce. As a reliable eCommerce website agency in London, we recognize the potential of WooCommerce in creating dynamic online stores. WooCommerce not only offers scalability but also incorporates various payment gateways and shipping options.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WooModal