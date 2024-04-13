
const ComplCbcrModal = () => {
  return (
    <>
    <button type="button" class="btn btn-primary compl-btn" data-bs-toggle="modal" data-bs-target="#exampleModal32">
                Read More
            </button>


            <div class="modal fade" id="exampleModal32" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title compl-btn-tlt" id="exampleModalLabel">Country-by-Country Reporting </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                
                            </button>
                        </div>
                        <div class="modal-body compl-btn-cnt">
                            <p>
                            CbCR is designed to promote transparency in the global taxation landscape. It obliges multinational enterprises (MNEs) to furnish detailed information on their worldwide operations, encompassing revenue, profits, taxes paid, and other essential financial and operational data, broken down for each individual country where the MNE group operates. This reporting provides a comprehensive overview of the MNE group's global activities, including details on revenue, pre-tax profit or loss, income taxes paid and accrued, stated capital, retained earnings, tangible assets, and the number of employees, all reported on a country-by-country basis across all jurisdictions where the MNE group has a presence.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default ComplCbcrModal