
const ResModal1 = () => {
  return (
    <>
    <button type="button" className="btn btn-primary rest-accnt-mdl-btn" data-bs-toggle="modal" data-bs-target="#restaurantModal1">
                Check Now
            </button>

            <div className="modal fade" id="restaurantModal1" tabIndex="-1" role="dialog" aria-labelledby="restaurantModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title rest-accnt-mdl-tlt" id="restaurantModalLabel">How Accounting is done for restaurants?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="how-accnt-modal-bdy">
                                <p>
                                Our specialized Restaurant Accounting Services in Dubai entail the establishment of a meticulous financial framework. This process involves crafting a comprehensive chart of accounts and systematically categorizing various expenditures. The chart of accounts, a fundamental component of our Restaurant Accounting Services in Dubai, encompasses a range of vital elements, each contributing to the precise tracking and management of your restaurant's financial activities.
                                </p>
                                <ul>
                                    <li><b>Food Inventory:</b> Categorizing perishable and non-perishable assets and operating expenses.</li>
                                    <li><b>Revenue Streams:</b> Tracking drink sales, food sales, and other sources of income.</li>
                                    <li><b>Cost of Goods Sold (COGS):</b> Calculating expenses associated with beverage and food sales, including discounts.</li>
                                    <li><b>Occupancy Costs:</b> Managing rent, building insurance, security services, property maintenance, utilities, and property taxes.</li>
                                    <li><b>Labor Expenditures:</b> Accounting for salaries, wages, health insurance, and staff meals and discounts.</li>
                                    <li><b>Employee Roles:</b> Classifying expenses related to bartenders, bussers, hosts/hostesses, servers, cooks, and dishwashers.</li>
                                    <li><b>Operational Outlays:</b> Addressing matters like bad debt, licenses, corporate taxes, marketing efforts, linens, uniforms, decor, office supplies, fines, penalties, interest payments, and depreciation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ResModal1