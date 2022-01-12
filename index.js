import express from "express"
import get_photos from "./get_photos.js";
import get_photo from "./get_photo.js";
import cors from 'cors';

const app = express();
const APP_PORT = 3000;

// GET, PUT, POST, DELETE
// app.get("/",(req,res)=>{res.send("Hellow World");})
//app.get("/",(req,res)=>{res.json(products);})

app.use(cors());

app.get("/v1/photos/:provider/:id",get_photo)

 
app.get("/v2/photos/search?", cors(),get_photos);


app.listen(APP_PORT,()=> console.log("Listening on port "+APP_PORT));
