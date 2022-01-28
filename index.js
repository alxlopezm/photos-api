import express        from "express"
import get_all_photos from "./get_photos.js";
import get_photo      from "./get_photo.js";


const app = express();
const APP_PORT = 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.get("/v1/photos/:provider/:id",get_photo)

 
app.get("/v1/photos/search?", get_all_photos);


app.listen(APP_PORT,()=> console.log("Listening on port "+APP_PORT));
