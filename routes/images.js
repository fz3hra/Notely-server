const express = require('express');
const image_controller = require("../controllers/images/createImage");
const getImage_controller = require("../controllers/images/getImage");

const path = require('path');

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "test");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
// specifies where multer will save the encoded files
const upload = multer({ storage: storage });

const imageRouter = express.Router();

imageRouter.get('/api/get-images', getImage_controller.getImage_controller);

imageRouter.post('/api/image', upload.single("images"), image_controller.image_controller);

module.exports = imageRouter;