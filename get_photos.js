import axios           from 'axios';
import {pvUnsplash}    from "./setupPhotoAccess.js";
import {pvPixabay}     from "./setupPhotoAccess.js";
import {pvPexels}      from "./setupPhotoAccess.js";
import {OWGPhotosList} from "./OWGPhotos.js";
import OWGPhoto        from "./OWGPhoto.js"; 




 /**
 * Adds Unsplash photo results to the array that merges all responses
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
  async function parse_unsplash(psData)
  {
   
   for (var i = 0; psData.total ; i++)
     {
      var individualPhoto =   psData.results[i];
      let owgPhoto = new OWGPhoto(individualPhoto.id,'US',individualPhoto.width,individualPhoto.height,individualPhoto.urls.regular);
      OWGPhotosList.OWGPhotos = OWGPhotosList.addPhoto(OWGPhotosList.OWGPhotos,owgPhoto);
    };
    const kk2=  JSON.stringify(OWGPhotosList.OWGPhotos);
    console.log(kk2);     
  }


/**
 * Gets Pexels photo results, parses them and adds parsed content to array that merges all responses
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
async function get_unsplash_photos(request)
  {
    var sRequest = `${pvUnsplash.baseURL + pvUnsplash.photosSearch}client_id=${pvUnsplash.securityKey}&query=${request.query.photo_for}`;
    console.log('Requesting data from  '+sRequest);
    await axios.get(sRequest)
                      .then(res  => {
                                     parse_unsplash(res.data);
                                     })
                      .catch(err => console.log(err));
  }

 /**
 * Parses Pixabay API search results to extract basic photo info to build response
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
  async function parsePixabay(psData)
  {
   for (var i = 0; i < psData.totalHits; i++)
     {
      var individualPhoto =   psData.hits[i];
      let owgPhoto = new OWGPhoto(individualPhoto.id,'PB',individualPhoto.imageWidth,individualPhoto.imageHeight,individualPhoto.previewURL);
      OWGPhotosList.OWGPhotos = OWGPhotosList.addPhoto(OWGPhotosList.OWGPhotos,owgPhoto);
     };
   const pbResult=  JSON.stringify(OWGPhotosList.OWGPhotos);
   console.log(pbResult);
  }

 /**
 * Gets Pixabay photo results, parses them and adds parsed content to array that merges all responses
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
  async function get_pixabay_photos(request)
    {
      var sRequest = `${pvPixabay.baseURL + pvPixabay.photosSearch}key=${pvPixabay.securityKey}&q=${request.query.photo_for}&image_type=photo`;
      console.log('Requesting data from  '+sRequest);
  
      await axios.get(sRequest)
                        .then(res  => {
                                       parsePixabay(res.data);
                                      }
                              )
                        .catch(err => console.log(err));
    }

 /**
 * Parses Pexels API search results to extract basic photo info to build global response
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
async function parse_pexels(psData)
  {
   for (var i = 0; i < psData.photos.length; i++)
     {
     var individualPhoto =   psData.photos[i];
     let owgPhoto = new OWGPhoto(individualPhoto.id,'PX',individualPhoto.width,individualPhoto.height,individualPhoto.url);
     OWGPhotosList.OWGPhotos = OWGPhotosList.addPhoto(OWGPhotosList.OWGPhotos,owgPhoto);
    };
 
  }

 /**
 * Gets Pexels photo results, parses them and adds parsed content to array that merges all responses
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
async function get_pexels_photos(request)
  {
   var sRequest = `${pvPexels.baseURL + pvPexels.photosSearch}query=${request.query.photo_for}&per_page=50`;
   console.log('Requesting data from  '+sRequest);
   await axios.get(sRequest,{ //httpsAgent: agent,
                       headers: {'Authorization': pvPexels.securityKey} 
                      })
                       .then(res  => {
                                      parse_pexels(res.data);
                                     })
                       .catch(err => console.log(err)); 
 };

/**
 * Gets all photo results, parses them and adds parsed content to array
 * 
 * @param  request  HTTP Request object
 * @param  response HTPP Response object
 * @returns void
 */
async function get_all_photos(request,response)
  {
   OWGPhotosList.OWGPhotos.splice(0,OWGPhotosList.OWGPhotos.length)
   await get_pexels_photos(request);
   await get_unsplash_photos(request);
   await get_pixabay_photos(request);
   await response.json(OWGPhotosList);
  };


    

  export default get_all_photos;