import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadToCloudinary(file: File, folder: string = 'wfsk-uploads') {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'auto', 
        },
        (error: any, result: any) => {
          if (error) {
            console.error('CLOUDINARY UPLOAD ERROR DETAILS:', {
              message: error.message,
              http_code: error.http_code,
              name: error.name,
              data: error.data
            });
            reject(new Error(`Cloudinary upload failed: ${error.message || 'Unknown error'}`));
            return;
          }
          resolve(result?.secure_url);
        }

      ).end(buffer);
    });
  } catch (error) {
    console.error('Error processing file for Cloudinary:', error);
    throw new Error('Failed to process file for upload');
  }
}
