import Link from "next/link";
import { HiHome } from 'react-icons/hi';
import './breadcrumb.css';
const BreadCrumb = ({ page }) => {
  return (
    <>
    <div className='heroic-bg'>
                <div className='header-banner-blk'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heroic-sec">
                                    <h2>{page}</h2>
                                    {/* <p><a href="">Home | <a href="">{page}</a></a></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='breadcrumb-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12'>
                            <p><Link href="/" className='breadcum-p'><HiHome /> Home </Link> | {page}</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
  )
}

export default BreadCrumb

