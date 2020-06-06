import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

import { celebrate, Joi, Segments } from 'celebrate';


import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();

const pointsController = new PointsController();
const itemsContrlller = new ItemsController();


const upload = multer(multerConfig);




routes.get("/items", itemsContrlller.index);

routes.post(
    "/points", 
    upload.single("image"), 
    celebrate({
        [Segments.BODY]:Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        }).unknown(),
        
    },{abortEarly:false}),
    pointsController.create
);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);


export default routes;