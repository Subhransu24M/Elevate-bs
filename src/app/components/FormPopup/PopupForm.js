"use client"
import React, { useState } from 'react';
import './popupform.css';

const Popupform = () => {
  const [formData, setFormData] = useState({
    Company: '',
    'Last Name': '',
    Email: '',
    Mobile: '',
    Website: '',
    Description: '',
    LEADCF13: 'BUSINESS COLLABORATION',
    'Lead Source': 'Website',
    LEADCF20: 'https://elevatebs.com/contact',
    'Lead Status': 'Pre-Qualified'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mandatoryFields = ['Company', 'Last Name', 'Email', 'Mobile'];
    for (let field of mandatoryFields) {
      if (!formData[field]) {
        alert(`${field} cannot be empty.`);
        return;
      }
    }

    // Submit the form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://crm.zoho.com/crm/WebToLeadForm';
    form.acceptCharset = 'UTF-8';
    form.target = '_self';

    for (let key in formData) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = formData[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
      <form id='webform' onSubmit={handleSubmit}>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Company'>Company Name</label></div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Company' name='Company' maxLength='200' value={formData.Company} onChange={handleChange} />
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Last_Name'>Full Name</label></div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Last_Name' name='Last Name' maxLength='80' value={formData['Last Name']} onChange={handleChange} />
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Email'>Email</label></div>
          <div className='zcwf_col_fld'>
            <input type='email' id='Email' name='Email' maxLength='100' value={formData.Email} onChange={handleChange} />
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Mobile'>Mobile</label></div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Mobile' name='Mobile' maxLength='30' value={formData.Mobile} onChange={handleChange} />
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Website'>Website</label></div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Website' name='Website' maxLength='255' value={formData.Website} onChange={handleChange} />
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Description'>Description</label></div>
          <div className='zcwf_col_fld'>
            <textarea id='Description' name='Description' value={formData.Description} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='LEADCF13'>Enquiry Type</label></div>
          <div className='zcwf_col_fld'>
            <select id='LEADCF13' name='LEADCF13' value={formData.LEADCF13} onChange={handleChange}>
              <option value='-None-'>-None-</option>
              <option value='AUDITING'>AUDITING</option>
              <option value='ACCOUNTING & VAT'>ACCOUNTING & VAT</option>
              <option value='VAT'>VAT</option>
              <option value='CORPORATE TAX SERVICES'>CORPORATE TAX SERVICES</option>
              <option value='AML & COMPLIANCE'>AML & COMPLIANCE</option>
              <option value='DIGITAL MARKETING'>DIGITAL MARKETING</option>
              <option value='CORPORATE SERVICES'>CORPORATE SERVICES</option>
              <option value='ICV CERTIFICATION SERVICE'>ICV CERTIFICATION SERVICE</option>
              <option value='LIQUIDATION'>LIQUIDATION</option>
              <option value='ESR & PRO SERVICES'>ESR & PRO SERVICES</option>
              <option value='BUSINESS COLLABORATION'>BUSINESS COLLABORATION</option>
            </select>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Lead_Source'>Lead Source</label></div>
          <div className='zcwf_col_fld'>
            <select id='Lead_Source' name='Lead Source' value={formData['Lead Source']} onChange={handleChange}>
              <option value='-None-'>-None-</option>
              <option value='Advertisement'>Advertisement</option>
              <option value='Exiting Client'>Exiting Client</option>
              <option value='SM/SEO/DM/Web/Site/App'>SM/SEO/DM/Web/Site/App</option>
              <option value='BD Team(Call/Mail)'>BD Team(Call/Mail)</option>
              <option value='Refereed by Acct Team'>Refereed by Acct Team</option>
              <option value='Refereed by Client'>Refereed by Client</option>
              <option value='Cold Calling'>Cold Calling</option>
              <option value='Business Consultant'>Business Consultant</option>
              <option value='Direct Client'>Direct Client</option>
              <option value='E-Mail'>E-Mail</option>
              <option value='Website'>Website</option>
              <option value='Google AdWords'>Google AdWords</option>
            </select>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='LEADCF20'>Source URL</label></div>
          <div className='zcwf_col_fld'>
            <input type='text' id='LEADCF20' name='LEADCF20' maxLength='450' value={formData.LEADCF20} onChange={handleChange} />
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '15px', fontFamily: 'Georgia' }}><label htmlFor='Lead_Status'>Lead Status</label></div>
          <div className='zcwf_col_fld'>
            <select id='Lead_Status' name='Lead Status' value={formData['Lead Status']} onChange={handleChange}>
              <option value='-None-'>-None-</option>
              <option value='Attempted to Contact'>Attempted to Contact</option>
              <option value='Contact in Future'>Contact in Future</option>
              <option value='Contacted'>Contacted</option>
              <option value='Pre-Qualified'>Pre-Qualified</option>
            </select>
          </div>
        </div>
        <button type='submit' className='formsubmit'>Submit</button>
      </form>
    </div>
  );
};

export default Popupform;
