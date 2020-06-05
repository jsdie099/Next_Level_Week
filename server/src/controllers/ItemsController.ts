import {Request, Response} from 'express';
import knex from '../database/connection';
class ItemsController {
    async index(req:Request ,res:Response) {
        const items = await knex('items').select("*");

        const serializeItems = items.map((item)=>{
            return {
                id: item.id,
                title : item.title, 
                image_url: `http://192.168.0.102:3333/uploads/${item.image}`
            };
        });//`http://localhost:3333/uploads/${item.image}`

        return res.json(serializeItems);
    }
}
export default ItemsController;