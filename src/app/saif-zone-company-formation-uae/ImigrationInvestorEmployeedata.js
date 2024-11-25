const ImigrationInvestorEmployeedata = () => {

    const imigrationData = {
        "services": [
          {
            "serviceName": "Company Immigration Card (2 Years)",
            "quantity": 1,
            "price": 1410
          },
          {
            "serviceName": "Immigration Security Approval (One Time)",
            "quantity": 1,
            "price": 250
          },
          {
            "serviceName": "E-Channel Registration Fee (Includes AED 1025 refundable Deposit). Renewal fee yearly 1110 AED.",
            "quantity": 1,
            "price": 3135
          }
        ]
      }
      
    const investorData = {
        "services": [
          {
            "serviceName": "Owner/Partner Residence Visa (2 years)",
            "quantity": 1,
            "price": 3625
          },
          {
            "serviceName": "Emirates ID (2 years)",
            "quantity": 1,
            "price": 270
          },
          {
            "serviceName": "Status Change (One time (IF ONLY))",
            "quantity": 1,
            "price": 860
          }
        ]
      }

    const employeeData = {
        "services": [
            {
                "serviceName": "One-month basic salary(Deposit)",
                "quantity":"" ,
                "price": ""
              },
          {
            "serviceName": "One Way Air Ticket (Deposit)",
            "quantity": 1,
            "price": ""
          },
          {
            "serviceName": "Employee Visa (2 years)",
            "quantity": 1,
            "price": 3470
          },
          {
            "serviceName": "Emirates ID (2 years)",
            "quantity": 1,
            "price": 270
          },
          {
            "serviceName": "Status Change (One time (IF ONLY))",
            "quantity": 1,
            "price": 860
          }
        ]
      }

    return (
        <>
            <div className="imigr-invs-empl-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12">
                        <h2>Immigration Charges</h2>
                        <table>
                            <tbody>
                                {imigrationData.services.map((service, index) => (
                                    <tr key={index} className="saif-zone-tr">
                                        <td style={{ padding: '10px' }}>{service.serviceName}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{service.quantity}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{service.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12">
                        <h2>Investor</h2>
                        <table>
                            <tbody>
                                {investorData.services.map((service, index) => (
                                    <tr key={index} className="saif-zone-tr">
                                        <td style={{ padding: '10px' }}>{service.serviceName}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{service.quantity}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{service.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        
                        <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12">
                        <h2>Employee</h2>
                        <table>
                            <tbody>
                                {employeeData.services.map((service, index) => (
                                    <tr key={index} className="saif-zone-tr">
                                        <td style={{ padding: '10px' }}>{service.serviceName}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{service.quantity}</td>
                                        <td style={{ padding: '10px', textAlign: 'right' }}>{service.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ImigrationInvestorEmployeedata