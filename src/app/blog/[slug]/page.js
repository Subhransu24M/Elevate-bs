import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import './singlepost.css';
import TopBar from "../../components/TopBar/TopBar";
// import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import BlogBreadcrumb from "@/app/components/BreadCrumbs/BlogBreadcrumb";

export async function generateMetadata({params}) {
  const query=`*[_type=='post' && slug.current == "${params.slug}"]{
    seotitle,description,keywords
  }[0]
  `;
  const singlePost = await client.fetch(query);
  return {
    title: singlePost.seotitle,
    descriptions: singlePost.descriptions,
    keywords: singlePost.keywords,
  }
}

const HtmlCodeBlock = ({ value }) => {
  return(
  <div dangerouslySetInnerHTML={{ __html: value.code }} />
)
};

const contentImage = ({value}) =>{
  console.log(value);
  return(
    <Image src={urlForImage(value) } width={500} height={400}/>
  )
}

export default async function singlePost({ params}) {
  
  
  const query=`*[_type=='post' && slug.current == "${params.slug}"]{
    title,image,content,'Slug':slug.current,
    'image':image.asset._ref,
    // category ->{title,slug},

    categories[] ->{
      title,'Link':slug.current
    }
    
  }[0]
  `;
  try {
    // Use parameters to avoid potential injection attacks
    const singlePost = await client.fetch(query);
    console.log(singlePost)
    // Handle cases where singlePost is null or undefined
    if (!singlePost) {
      throw new Error("Post not found");
    }

    return (
      <>
       <TopBar/>
       <NavBar/>
       <div className="container-fluid p-0">
       <div className="sngl-pst-img-blk">
              <Image src={urlForImage(singlePost.image)} width={800} height={300} alt={singlePost.image.attribution} priority className="sngl-post-bnr-img"/>
            </div>
       </div>
       <BlogBreadcrumb breadcrumbtitle={singlePost.title} />
       {/* <BreadCrumb page={singlePost.title} />  */}
        <div className="container">
          <h1 className="sngl-tlt-pst">{singlePost.title}</h1>
            {/* <div className="sngl-pst-img-blk">
              <Image src={urlForImage(singlePost.image)} layout="responsive" width={800} height={300} priority/>
            </div> */}
            {singlePost.categories && (
            <div className="sngl-p-cat-level">
              {singlePost.categories.map((category, index) => (
                <level key={index} >
                  <Link className="snglp-catg-level" href={`/category/${category.Link}`}>{category.title}</Link>
                </level>
              ))}
            </div>
          )}
            {/* <p>{singlePost.categories.title}</p> */}
            <div>
              <PortableText value={singlePost.content} components={{
                types:{
                  image: contentImage,
                  htmlCode: HtmlCodeBlock,
                }
              }}/>
            </div>
            
        </div>
        <Footer/>
      </>
        
    );
  }
 catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error fetching post</div>;
}
}


