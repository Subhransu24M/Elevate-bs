import Link from 'next/link';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { client } from '../../../sanity/lib/client';


export default async function Category() {

  const categoryquery = `*[_type=='category']{
    title,
    "slug":slug.current
  }`;
  const categoryquerylist = await client.fetch(categoryquery);
  console.log(categoryquerylist);

  const categorypostquery = `*[_type=='post']{
    title,
    category ->{"slug":slug.current,title}
  }`;
  const categorypostquerylist = await client.fetch(categorypostquery);
  console.log(categorypostquerylist);

  return (
    <>
      <TopBar/>
      <NavBar/>

        {
          categoryquerylist.map((categoryList) =>(
            
            <div>
              <Link href={`/category/${categoryList.slug}`}>{categoryList.title}</Link>
            </div>
          ))
        }
        <Footer/>
    </>
  )
}
