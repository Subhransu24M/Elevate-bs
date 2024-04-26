

const emailTemplate = (businessname, customername, mobilenumber, email, services) => {
    return (
        <>
            <h3>{customername} has submitted the contact form</h3>
            <p>Business Name : - {businessname}</p>
            <p>Customer Name : - {customername}</p>
            <p>Mobile Number : - {mobilenumber}</p>
            <p>Email Id : - {email}</p>
            <p>Selected Services : - {services}</p>
        </>

    )
}

export default emailTemplate