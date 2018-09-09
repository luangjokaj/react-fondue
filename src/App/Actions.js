import fetch from "isomorphic-fetch";

export function fetchPosts( ) {
  return fetch( "/api/v1/posts" )
    .then( res => res.json( ) )
    .then( res => res.Posts );
}
