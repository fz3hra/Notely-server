const Image = require("../../models/images");

async function getImage_controller(req, res)  {
    const images = await Image.find()
    res.send(images);
}

module.exports = {getImage_controller};