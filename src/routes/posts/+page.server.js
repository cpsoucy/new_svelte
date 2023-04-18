// import { posts } from './data.js';

export async function load({fetch}) {
  const rand = Math.floor(Math.random() * 10000) + 1;

  const url = 'https://random-d.uk/' + rand + '&limit=12'; //what does &limit do here?
  const request = await fetch(url);
  const results = await request.json();
  const ducks = results.data;

  return {
    ducks,
    summaries: posts.map((post) => ({
    slug: post.slug,
    title: post.title
    }))
  };
}

// export async function load({ fetch }) {  
//   const page = Math.floor(Math.random() * 10000) + 1;

//   const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,medium_display&page=' + page + '&limit=12';

//   const artReq = await fetch(url);
  
//   const artRes = await artReq.json();

//   const artworks = artRes.data;

//   return {
//     artworks
//   }
// }