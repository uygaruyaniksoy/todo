import * as express from 'express';
import * as path from 'path';
import { setupMongo } from './mongo';
import { router } from './routes';

const app = express();
const CLIENT_BUILD_PATH = path.join(__dirname, '../getir-todo');

app.use(express.static(CLIENT_BUILD_PATH));

app.use(express.json());
app.use('/api', router);

app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

setupMongo();

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

