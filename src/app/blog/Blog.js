import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import './blog.css';

export const metadata = {
  title: "Blog Lists",
  description: "Get all type og blogs here",
};

export default async function Blog() {

  const query = `*[_type=='post'] | order(_careatedAt asc)
    {
    title,exceprt,image,
      "slug":slug.current,
      category ->{title,"slug":slug.current},
  }`;

  const categoryquery = `*[_type=='category']{
    title,
    "slug":slug.current
  }`;

  const postLists = await client.fetch(query);
  const categoryLists = await client.fetch(categoryquery);
  console.log(categoryLists);
  console.log(postLists);
  return (
    <div className="blog-blk">
      <main className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12 col-xs-12">
            <div className="row">
              {
                postLists.map((post, id) => (
                  // <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12 col-xs-12" key={id}>
                  <div className="blog-lst-blk" key={id}>
                    <div className="blk-lst-img">
                      <Image src={urlForImage(post.image)} layout="responsive" height={200} width={300} />
                    </div>
                    <h1 className="blg-pst-tlt">{post.title}</h1>
                    <p>{post.exceprt}</p>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </div>
                  // </div>
                ))
              }
            </div>
          </div>

          {/* Category Right Column */}

          {/* <div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 col-xs-12">
          <div className="row">
          
            {
              categoryLists.map((categories,index) => (
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
