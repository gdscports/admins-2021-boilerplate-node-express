import * as express from 'express';
import {config} from 'dotenv-flow';

// Store variables from .env* files in process.env
config();

// Init our application's express server
const app = express();

app.get('/', (_, res) => res.send('Foo'));

// Get port from process.env, or default to 8080
const port = Number(process.env.PORT) || 8080;

// Start listening for requests
app.listen(port);
console.info(`Listening on port "${port}"`);
