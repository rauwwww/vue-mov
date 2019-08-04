import path from 'path';
import express from 'express';

export default (app: any) => {
  app.use('/files', express.static(path.resolve(__dirname, '../live/uploads')));
};
