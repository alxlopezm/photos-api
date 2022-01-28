class OWGPhotos {
    constructor() {
      this.totalPhotos= 0;
      this.OWGPhotos = [];
    };
  addPhoto(photosArray,photoElement)  
   {
    return [...photosArray, photoElement];
   }
  };
  
export var OWGPhotosList = new OWGPhotos();