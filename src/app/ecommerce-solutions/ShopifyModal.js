

const ShopifyModal = () => {
    return (
        <>
            <button type="button" className="btn btn-primary ecom-mdl-btn" data-bs-toggle="modal" data-bs-target="#shopifyModal">
                Read More
            </button>


            <div className="modal fade" id="shopifyModal" tabIndex="-1" aria-labelledby="shopifyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shopifyModalLabel">Shopify Development</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                            Shopify E-Commerce: Imagine an all-in-one e-commerce platform that takes care of the nitty-gritty for you. Our eCommerce website agency in London, UK, introduces you to Shopify – a hassle-free solution for your online store. Just like a seamless payment experience is crucial, Shopify offers an extensive array of payment options, gift cards, comprehensive reporting, and flexible shipping choices that enhance customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopifyModal