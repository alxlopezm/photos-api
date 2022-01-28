import Photos from "./photos.js";  

function get_photo(req,res)
   {
    console.log(req.params.provider);
    res.json(Photos.find((photo)=>
                  {
                   return +req.params.id === photo.id
                  }   )
          )
          
   } 

export default get_photo;