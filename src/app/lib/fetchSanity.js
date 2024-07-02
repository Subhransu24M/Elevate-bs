import { client } from "../../../sanity/lib/client";


const fetchSanity = async () => {
    const query = `*[_type == "post"]{slug, _updatedAt}`;
    const data = await client.fetch(query);
    console.log(data);
  return data;
}

export default fetchSanity