import CONFIG from '../config';
import { Storage } from '@google-cloud/storage';
import { Service } from 'typedi';
import { UserDto } from '../models/user';
import { BadRequestError } from 'routing-controllers';

const storage = new Storage({
	projectId: CONFIG.GC_PROJECT_ID,
	credentials: {
		private_key: CONFIG.GC_PRIVATE_KEY, // eslint-disable-line
		client_email: CONFIG.GC_CLIENT_EMAIL // eslint-disable-line
	}
});

const bucket = storage.bucket(CONFIG.GC_BUCKET);

@Service('storageService')
export class StorageService {
	async uploadToStorage(
		file: Express.Multer.File,
		folder: 'pictures' | 'resumes',
		user: UserDto
	) {
		if (!file) throw new Error('No image file');
		else if (folder === 'pictures' && !file.originalname.match(/\.(jpg|jpeg|png|gif)$/i))
			throw new Error(`File: ${file.originalname} is an invalid image type`);
		else if (folder === 'resumes' && !file.originalname.match(/\.(pdf)$/i))
			throw new BadRequestError(`File: ${file.originalname} must be a .pdf file`);

		const fileName = `${folder}/${user.email.replace('@', '_')}`;
		const fileUpload = bucket.file(fileName);

		return new Promise<string>((resolve, reject) => {
			const blobStream = fileUpload.createWriteStream({
				metadata: {
					contentType: file.mimetype,
					cacheControl: 'no-cache, max-age=0'
				}
			});

			blobStream.on('error', error => {
				console.error('Error uploading file to folder:', folder, error);
				reject(error);
			});

			blobStream.on('finish', () => {
				// The public URL can be used to directly access the file via HTTP.
				resolve(`https://storage.googleapis.com/${CONFIG.GC_BUCKET}/${fileName}`);
			});

			blobStream.end(file.buffer);
		});
	}
}
