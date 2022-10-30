const Image = require("../../models/images");

async function image_controller (req, res) {
    try {
        const image = req.file.filename;
        var createImage = new Image({
        image
    });
    createImage = await createImage.save()
    res.send(createImage);
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports = {image_controller};