import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request){
  console.log ("trying to send me");
//   console.log(process.env.SMTP_SERVER);
//   console.log(process.env.SMTP_USERNAME);
//   console.log(process.env.SMTP_PASSWORD);
    const { businessname, customername, mobilenumber, email, services } = await request.json();
    const port = parseInt(process.env.SMTP_PORT)
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_SERVER,
            pool: true,
            port,
            secure: port === 465 ? true : false, // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USERNAME,
              pass: process.env.SMTP_PASSWORD,
            },
            tls :{
              rejectUnauthorized : false
            }
          })
    
          const mailOption ={
            from: '"Elevate Business Solutions" <info@elevatebs.com>',
            to: 'subhransuseo18@gmail.com',
            subject: "🎉New submission to your contact form!",
            html:`
             <h3>Elevate Business Solutions  Website Inquiry Details</h3>
             <li>Business Name : <strong>${businessname}</strong></li>
             <li>Customer Name : <strong>${customername}</strong></li>
             <li>Mobile Number : <strong>${mobilenumber}</strong></li>
             <li>Mail Id : <strong>${email}</strong></li>
             <li>Selected Services : <strong>${services}</strong></li>
            `
          }
    
          const result  = await transporter.sendMail(mailOption)
          console.log(result)

          return NextResponse.json({message : "Email Sent Sucessfully"},{status :200})
    } catch (error) {
      console.log(error)
        return NextResponse.json({message : "Email Send Failed"}, {status : 500})

    }
}