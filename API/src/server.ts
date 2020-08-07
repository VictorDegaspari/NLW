import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

//corpo {request.body}: dados para cracao ou 
//att de um registro
//route params --> identificar recurso da rota
//query params --> listagem/paginacao/filtros

app.use(routes);

app.listen(3333);