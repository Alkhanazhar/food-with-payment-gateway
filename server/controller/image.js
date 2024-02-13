const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dhbz08p8u',
    api_key: '642611493243887',
    api_secret: 'CD2nNYPWdPxS-Wy_OoVex1nEDNw'
});
module.exports.imageController = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url: result.secure_url,
            public_id: result.public_id
        })

    } catch (error) {
        console.error(error.message);
    }
}