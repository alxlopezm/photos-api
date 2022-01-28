import PhotoVendor from './PhotoVendor.js';

var anotherone  = new PhotoVendor("US","https://api.unsplash.com","/search/photos","x","kL1m4F0-CGQ6a9oMHL_liMmPmijkPYHRi-aBBNYCpiI");

export default anotherone;

export var pvUnsplash = new PhotoVendor("US","https://api.unsplash.com","/search/photos/?","x","kL1m4F0-CGQ6a9oMHL_liMmPmijkPYHRi-aBBNYCpiI");
export var pvPixabay   = new PhotoVendor("PB","https://pixabay.com","/api/?","x","25004445-c028de3853d052415f32900ff");
export var pvPexels   = new PhotoVendor("PX","https://api.pexels.com","/v1/search?","x","563492ad6f917000010000016c9626f0f7f847d097e4832397219d36");

