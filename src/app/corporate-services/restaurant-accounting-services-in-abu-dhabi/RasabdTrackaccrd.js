
const RasabdTrackaccrd = () => {
    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseOne" aria-expanded="false" aria-controls="rastrack-collapseOne">
                        Sales Tracking 
                        </button>
                    </h2>
                    <div id="rastrack-collapseOne" className="accordion-collapse collapse" aria-labelledby="ras-trackOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Track daily sales to monitor income and categorize it accurately. Outsourcing can streamline this process, integrating sales data with POS systems for better reconciliation.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseTwo" aria-expanded="false" aria-controls="rastrack-collapseTwo">
                        Cost of Goods Sold (COGS) 
                        </button>
                    </h2>
                    <div id="rastrack-collapseTwo" className="accordion-collapse collapse" aria-labelledby="ras-trackTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Track COGS to ensure menu pricing is profitable and identify cost-saving opportunities.</div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseThree" aria-expanded="false" aria-controls="rastrack-collapseThree">
                        Labor Costs  
                        </button>
                    </h2>
                    <div id="rastrack-collapseThree" className="accordion-collapse collapse" aria-labelledby="ras-trackThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Monitor labor costs, including salaries and benefits, to manage expenses and improve productivity.</div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseFour" aria-expanded="false" aria-controls="rastrack-collapseFour">
                        Inventory Management   
                        </button>
                    </h2>
                    <div id="rastrack-collapseFour" className="accordion-collapse collapse" aria-labelledby="ras-trackFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Track inventory levels to minimize waste and ensure adequate supply for menu items.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseFive" aria-expanded="false" aria-controls="rastrack-collapseFive">
                        Accounts Receivable and Payable    
                        </button>
                    </h2>
                    <div id="rastrack-collapseFive" className="accordion-collapse collapse" aria-labelledby="ras-trackFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Keep an eye on accounts receivable (money owed to you) and accounts payable (money you owe) to maintain healthy cash flow.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseSix" aria-expanded="false" aria-controls="rastrack-collapseSix">
                        Cash Flow Management     
                        </button>
                    </h2>
                    <div id="rastrack-collapseSix" className="accordion-collapse collapse" aria-labelledby="ras-trackSix" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Track cash flow to ensure sufficient funds for expenses and identify areas for improvement.</div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="ras-trackSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rastrack-collapseSeven" aria-expanded="false" aria-controls="rastrack-collapseSeven">
                        Taxation     
                        </button>
                    </h2>
                    <div id="rastrack-collapseSeven" className="accordion-collapse collapse" aria-labelledby="ras-trackSeven" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Accurately track taxes payable, including income, payroll, and sales taxes.</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RasabdTrackaccrd