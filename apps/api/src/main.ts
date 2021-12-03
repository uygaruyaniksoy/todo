import * as express from 'express';
import { setupMongo } from './mongo';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/api', router);

setupMongo();

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

