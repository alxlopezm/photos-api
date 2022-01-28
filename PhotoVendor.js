class PhotoVendor {
  constructor(vendorName, baseURL, photosSearch, individualPhotoSearch, securityKey) {
    this.vendorName = vendorName;
    this.baseURL = baseURL;
    this.photosSearch = photosSearch;
    this.individualPhotoSearch = individualPhotoSearch;
    this.securityKey = securityKey;
  };
}

export default PhotoVendor;