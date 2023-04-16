import { Response, Request } from 'express';
import * as playerService from '../services/player.service'
import Player from '../database/models/player';

async function getAll(req: Request, res: Response) {
    const promisePlayers = playerService.getAll();

    return promisePlayers.then((players: Player[]) => {
        res.status(200).send(players);
    }).catch((error: any) => {
        res.status(400).send({ message: "An error occured", error })
    })
}

async function getByUuid(req: Request, res: Response) {
    const promisePlayer = playerService.getByUuid(req.params.uuid);

    return promisePlayer.then((player: Player) => {
        if (!player) {
            return res.status(404).send({ message: `Player '${req.params.uuid}' not found` });
          }
        res.status(200).send(player);
    }).catch((error: any) => {
        res.status(400).send({ message: "An error occured", error })
    })
}

async function getBlockByPlayerUuid(req: Request, res: Response) {
    const promisePlayerBlocks = playerService.getBlockByPlayerUuid(req.params.uuid);

    return promisePlayerBlocks.then((player: Player) => {
        if (!player) {
            return res.status(404).send({ message: `Player '${req.params.uuid}' not found` });
          }
        res.status(200).send(player);
    }).catch((error: any) => {
        res.status(400).send({ message: "An error occured", error })
    })
}

export {
    getAll,
    getByUuid,
    getBlockByPlayerUuid
}
