// /components/AuthorityTable.js
"use client"
import { useState } from 'react';
import { authoritiesData } from './authorities';
import { CgArrowLongRight } from "react-icons/cg";

const AuthorityTable = () => {
  const [selectedAuthority, setSelectedAuthority] = useState(authoritiesData[0]);

  const handleAuthorityChange = (e) => {
    const selected = authoritiesData.find(authority => authority.authority === e.target.value);
    setSelectedAuthority(selected);
  };

  return (
    <div className='auth-tbl-main-blk'>
      <div className='auth-sle-auth-blk'>
      <label htmlFor="authority" className='slt-auth-tlt'>Select Authority:</label>
      <select className='slt-fld-blk' id="authority" onChange={handleAuthorityChange}>
        {authoritiesData.map((authority) => (
          <option key={authority.authority} value={authority.authority}>
            {authority.authority}
          </option>
        ))}
      </select>
      </div>

      <table className='frnc-cst-tbl'>
        <thead className='frnc-cst-tbl-thead'>
          <tr className='frnc-cst-tbl-tr-th'>
            <th className='frnc-cst-tbl-th'>Fees</th>
            <th className='frnc-cst-tbl-th'>Requirements</th>
          </tr>
        </thead>
        <tbody className='frncv-tbl-bdy'>
          <tr className='frnc-cst-tbl-tr'>
            <td className='frnc-cst-tbl-td'>
            <ul className='frnc-tbl-ul'>
                {selectedAuthority.fees.map((fee, index) => (
                  <li key={index}><CgArrowLongRight /> {fee}</li>
                ))}
              </ul>
            </td>
            <td className='frnc-cst-tbl-td'>
              <ul className='frnc-tbl-ul'>
                {selectedAuthority.requirements.map((requirement, index) => (
                  <li key={index}><CgArrowLongRight /> {requirement}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthorityTable;
