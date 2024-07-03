import React from 'react'
import './blogbreadcrumb.css';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

const BlogBreadcrumb = ({breadcrumbtitle}) => {
    return (
        <>
            
                <div className='sngl-blog-blk'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sngl-blog-sec">
                                    {/* <h2>Blog</h2> */}
                                    <div className='pr-5'><Link href="/" className='breadcum-p'><HiHome /> Home </Link></div> | <div className='pl-5'>{breadcrumbtitle}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default BlogBreadcrumb