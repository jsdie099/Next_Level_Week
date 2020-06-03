import express, { request, response, json } from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,"..","uploads")));



app.listen(3333);



/*
    GET: Buscar uma ou mais informações do back-end
    POST: Criar uma nova informação no back-end
    PUT: Atualizar uma informação existente do back-end
    DELETE: Remover uma informação do back-end

    REQUEST PARAMS (é obrigatório ser usado na requisição): Parâmetros que vem na própria rota que identificam um recurso
    QUERY PARAMS (é opcional ser usado na requisição): São parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
    REQUEST BODY: Parâmetros para criação/atualização de informações




const users = [
    'Juliano',
    'Diego',
    'Robson'
];
app.get("/users", (request,response)=>{
    const search = request.query.search?.toString();
    const filteredUsers = (search)? users.filter((user)=>user.includes(search)) : users;
    return response.json(filteredUsers);
});

app.get("/users/:id", (request ,response)=>{
    const id = Number(request.params.id);
    return response.json(users[id]);
});

app.post("/users", (request, response)=>{
    const data = request.body;
    const user = {
        name:data.name,
        email: data.email
    }
    return response.json(user);
});

*/

