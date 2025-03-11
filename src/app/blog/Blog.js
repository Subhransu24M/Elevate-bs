import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import './blog.css';
import { format } from 'date-fns';
// export const metadata = {
//   title: "Blog Lists",
//   description: "Get all type og blogs here",
// };

const formatDate = (dateString) => {
  const date = new Date(dateString);
  // Use format function from date-fns to format the date
  // return format(date, 'dd-MM-yyyy'); // For format "02-07-2024"
  return format(date, 'dd-MMM-yyyy'); // For format "07-Feb-2024"
};

export default async function Blog() {

  // const query = `*[_type=='post'] | order(_createdAt asc)
  //   {
  //   title,exceprt,image,_createdAt,
  //     "slug":slug.current,
  //     category ->{title,"slug":slug.current},
  // }`;

  const postquery =`*[_type=='post'] | order(_createdAt desc)
  {
  title,exceprt,image,_createdAt,
  "slug":slug.current,
  category ->{title,"slug":slug.current},
  }`;

  const categoryquery = `*[_type=='category']{
    title,
    "slug":slug.current
  }`;

  const postLists = await client.fetch(postquery);
  const categoryLists = await client.fetch(categoryquery);
  console.log(categoryLists);
  console.log(postLists);
  return (
    <div className="blog-blk">
      <main className="container">
        <div className="row">
          <div className="col-md-6 col-xl-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="row">
              {
                postLists.map((post, id) => (

                  <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12 col-xs-12" key={id}>
                    <div className="blog-lst-blk" key={id}>
                      <div className="blk-lst-img" >
                        {post.image ? (
                          <Image src={urlForImage(post.image)} height={200} width={300} alt={post.image.attribution} className="blog-img-size" />
                        ) : (
                          <p>No Image Avaliable</p>
                        )}
                        <div className="pbls-dt-blk">
                          <level className="date-lvl">Publish at : {formatDate(post._createdAt)}</level>
                        </div>
                      </div>

                      <h1 className="blg-pst-tlt">{post.title}</h1>
                      <p className="blg-excp-p">
                        {/* {post.exceprt} */}
                        {post.exceprt.length > 150 ? `${post.exceprt.slice(0, 150)}...` : post.exceprt}
                        </p>
                      <Link href={`/blog/${post.slug}`} className="blg-rd-btn">Read More</Link>
                    </div>
                  </div>

                ))
              }
            </div>

          </div>

          {/* Category Right Column */}

          {/* < div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 col-xs-12" >
            <div className="row">

              {
                categoryLists.map((categories, index) => (
                  <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12" key={index}>
                    <div className="category-lists">
                      <Link href={`/category/${categories.slug}`}>{categories.title}</Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div> */}


        </div>
      </main>
    </div>
  )
}
