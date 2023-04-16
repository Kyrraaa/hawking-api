import express, { Application } from 'express';

import player from './routes/player.route';
import block from './routes/block.route';

const app: Application = express()
const port = 3000;

app.use('/api/player', player);
app.use('/api/block', block);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`Hawking API listening on port ${port}`);
})
