import React from 'react'

const MagentoModal = () => {
  return (
    <>

      <button type="button" className="btn btn-primary ecom-mdl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Read More
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Magento Development</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Magento E-Commerce: As a distinguished eCommerce website development company in London, UK, we bring you the power of Magento. With our expertise in eCommerce website development in London, we create tailored solutions that seamlessly integrate inventory management, payment gateways, and captivating designs. Say goodbye to technical worries – we handle everything from web hosting to security, ensuring your focus remains on growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MagentoModal