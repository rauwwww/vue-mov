import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { sync } from 'mkdirp';
import { generate } from 'shortid';
import { db } from './db';
import { Encoding } from 'node-forge';

const uploadDir = resolve(__dirname, '../../live/uploads');

// Ensure upload directory exists
sync(uploadDir);

const storeUpload = async ({ stream, filename }) => {
  const id = generate();
  const file = `${id}-${filename}`;
  const path = `${uploadDir}/${file}`;
  const urlPath = `files/${file}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path: urlPath }))
      .on('error', reject)
  );
};

const recordFile = (file: any) =>
  db
    .get('uploads')
    .push(file)
    .last()
    .write();

export async function processUpload(file: IDBFile) {
  const { stream, filename, mimetype, encoding } = await file;
  const id = await storeUpload({ stream, filename });
  const path = await storeUpload({ stream, filename });

  return recordFile({ id, filename, mimetype, encoding, path });
}

export interface IDBFile {
  id: any;
  filename: string;
  mimetype: MimeType;
  encoding: Encoding;
  stream?: any;
  path: any;
}
