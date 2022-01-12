  import express, { response } from 'express';
  import fetch from 'node-fetch';
  

  const request_headers = {
    "Authorization": "876JHG563492ad6f917000010000016c9626f0f7f847d097e4832397219d3676UKFJYGVHf867rFUTFGHCJ8JHV"
  };

  async function get_photos(request,response)
    {
      console.log('Loooking for photos of '+request.query.photo_for);
      const pexels_api_url = "https://api.pexels.com/v1/search?query=nature&per_page=1";
      const fetch_response = await fetch(pexels_api_url, {method: 'GET', headers : request_headers});
      const json_response  = await fetch_response.json();
      response.json(json_response);

    };


 

  export default get_photos;