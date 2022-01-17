import express from "express"
import get_photos_axios from "./get_photos.js";
import get_photo from "./get_photo.js";
import cors from 'cors';

const app = express();
const APP_PORT = 3000;


app.use(cors());

app.get("/v1/photos/:provider/:id",get_photo)

 
app.get("/v2/photos/search?", cors(),get_photos_axios);


app.listen(APP_PORT,()=> console.log("Listening on port "+APP_PORT));
