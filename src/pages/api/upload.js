import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const file = await new Promise((resolve, reject) => {
    const form = formidable();
    form.on('file', (formName, file) => {
      resolve(file);
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
    });
  });

  try {
    const data = await cloudinary.uploader.unsigned_upload(
      file.filepath,
      'my-uploads'
    );
    return res.status(200).json(data.secure_url);
  } catch (error) {
    console.error(error);
  }
}
