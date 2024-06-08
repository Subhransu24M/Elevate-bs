import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
// import singlePost from "./[slug]/page";

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

  const categoryquery =`*[_type=='category']{
    title,
    "slug":slug.current
  }`;

  const postLists = await client.fetch(query);
  const categoryLists = await client.fetch(categoryquery);
  console.log(categoryLists);
  console.log(postLists);
  return (

    <main className="container">
      <h4>Blog Lists</h4>
      <div className="row">
        <div className="col-md-6 col-xl-9 col-lg-9 col-sm-12 col-xs-12">
          <div className="row">
            {
              postLists.map((post,id) => (
                <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12 col-xs-12" key={id}>
                  <div className="blog-lst-blk">
                    <div className="blk-lst-img">
                      <Image src={urlForImage(post.image)} height={200} width={300} />
                      <h1>{post.title}</h1>
                      <h6>{post.exceprt}</h6>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Category Right Column */}

        <div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 col-xs-12">
          <div className="row">
          
            {
              categoryLists.map(categories => (
                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                  <div className="category-lists">
                  {/* <h6>{categories.title}</h6> */}
                    <Link href={`/category/${categories.slug}`}>{categories.title}</Link>
                  </div>
                </div>
              ))
            }
          </div>

        </div>


      </div>
    </main>
  )
}
