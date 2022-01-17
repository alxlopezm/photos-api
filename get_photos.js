  import express, { response } from 'express';
  import fetch from 'node-fetch';
  import https from  'https';
  import http  from  'http';
  import axios from 'axios';

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });  

  const request_headers = {
    "Authorization": "876JHG563492ad6f917000010000016c9626f0f7f847d097e4832397219d3676UKFJYGVHf867rFUTFGHCJ8JHV"
  };

  var options = 
   {
    /*host: '127.0.0.1',
    port: 8888,
    path: 'https://api.pexels.com/v1/search?query=nature&per_page=1',*/
    headers: {'Authorization': '876JHG563492ad6f917000010000016c9626f0f7f847d097e4832397219d3676UKFJYGVHf867rFUTFGHCJ8JHV'}
   };
  
   

  async function get_photos_fetch(request,response)
    {
  
      
      console.log('Loooking for photos of '+request.query.photo_for);
      const pexels_api_url = "https://api.pexels.com/v1/search?query=nature&per_page=1";
      const fetch_response = await fetch(pexels_api_url, {method: 'GET', headers : request_headers,port: 8888,host: '127.0.0.1', agent:httpsAgent});
      console.log('Got fetch response from API!');
      const json_response  = await fetch_response.text();
      console.log('Converted it to Text');
      console.log(`Resp:${json_response}`);
      //response.text(json_response);
      console.log('Sent response');
      /*    
      var req = http.request(options, callback);
      req.end();
      
      console.log('Loooking for photos of '+request.query.photo_for);
     */  
    };

    const agent = new https.Agent({  
      rejectUnauthorized: false
    });

    async function get_photos_axios(request,response)
    {
      
      console.log('Requesting data from  https://api.pexels.com/v1/search?query=nature&per_page=1' +request.query.photo_for);
  
      axios.get('https://api.pexels.com/v1/search?query=nature&per_page=1',{ //httpsAgent: agent,
                                                                             headers: {'Authorization': '876JHG563492ad6f917000010000016c9626f0f7f847d097e4832397219d3676UKFJYGVHf867rFUTFGHCJ8JHV'} 
                                                                           })
                                                         .then(res  => {console.log(res.data);
                                                                        response.json();})
                                                         .catch(err => console.log(err));
      
    };


    

  export default get_photos_axios;