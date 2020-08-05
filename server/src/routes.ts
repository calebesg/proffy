import express from 'express';

import ClassesController from './controllers/ClassesController';

const routes = express.Router();

routes.post('/classes', ClassesController.create);
routes.get('/classes', ClassesController.index);

export default routes;
