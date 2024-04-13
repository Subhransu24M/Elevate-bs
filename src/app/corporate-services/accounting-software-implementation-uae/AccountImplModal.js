
const AccountImplModal = () => {
  return (
    <>
    <button type="button" className="btn btn-primary acnt-impl-mdlbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Learn More
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SMEs and Small Regulated Entities:</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>For small and medium-sized enterprises (SMEs), we specialize in establishing cost-effective and adaptable systems that can expand in tandem with your business. These systems encompass not only accounting but also Point of Sale (POS), Inventory, and Customer Relationship Management (CRM) systems essential for your operations. We not only offer guidance on selecting the right systems but also take the lead in implementing them.</p>
                            <ul className="acnt-impl-mdl-ul">
                                <li>We provide advice and implementation services for Accounting & Reporting Systems such as Xero, Quickbooks, Zoho Books, First Bit, and Sage.</li>
                                <li>We offer solutions for CRM, Point of Sale, Inventory, and time management systems that seamlessly integrate with your chosen accounting systems.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default AccountImplModal