import TopBar from "@/app/components/TopBar/TopBar";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import { client } from "../../../../sanity/lib/client";


export default async function categoryData({params}) {
  
      const query = `*[_type == "post" && category->slug.current == "${params.slug}"]{
        title,
        excerpt
    }`;

    console.log(query);

    try {
      
      const categoryDatas = await client.fetch(query) ;
    console.log(categoryDatas);

      if (!categoryDatas) {
        throw new Error("Category Data not found");
      }

    return (
        <>
        <TopBar/>
        <NavBar/>
        
            {
                categoryDatas.map((post,i) => (
                    <div key={i}>
                        <h1>{post.title}</h1>
                    </div>

                ))
            }

            <Footer/>
        </>
    );
  }
  catch (error) {
     console.error("Error fetching post:", error);
     return <div>Error fetching post</div>;
 }
}
