

const AccountImplModal2 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary acnt-impl-mdlbtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Learn More
            </button>


            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Mid-Size, Large, Family Offices:</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div className="modal-body">
                           <p>For larger organizations, we offer a range of value-added services that are often challenging for internal teams to handle on their own. Our experts conduct comprehensive assessments of your firm's needs and provide independent recommendations for the most suitable systems. Our approach prioritizes cost-effectiveness, efficiency, and usability, ensuring that your team can fully leverage the chosen solutions. We believe that simplicity and alignment with existing skills can often yield the best results. While some Enterprise Resource Planning (ERP) systems promise to do it all, they often come with hefty customization costs and may overwhelm your current workforce.</p>
                           <ul className="acnt-impl-mdl-ul">
                            <li>We conduct thorough evaluations of system requirements across various functions, including operations, procurement, accounting, reporting, HR, CRM, and Inventory management.</li>
                            <li>We create a Gap report, outlining the specific needs and expectations of your company's stakeholders and users.</li>
                            <li>Our team conducts research to identify potential systems suitable for implementation.</li>
                            <li>We collaborate with senior management and owners to assess system demonstrations from vendors, providing guidance on system and vendor selection.</li>
                            <li>If necessary, we can take on roles as project managers and subject matter experts on the client's side, helping oversee 3rd party vendors during system implementation.</li>
                            <li>We assist senior managers and owners in staff training, documenting new processes, and providing advisory support for restructuring and team recruitment related to the new technology.</li>
                           </ul>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default AccountImplModal2