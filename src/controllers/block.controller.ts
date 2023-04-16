import { Response, Request } from 'express';
import * as blockService from '../services/block.service';
import AuthorizedBlock from '../database/models/authorized-block';

async function getAll(req: Request, res: Response) {
    const promiseBlocks = blockService.getAll();

    return promiseBlocks.then((authorizedBlocks: AuthorizedBlock[]) => {
        res.status(200).send(authorizedBlocks);
    }).catch((error: any) => {
        console.log(error);
        res.status(400).send({ message: "An error occured", error })
    })
}

async function getByIdentifier(req: Request, res: Response) {
    const promiseBlocks = blockService.getByIdentifier(req.params.identifier);

    return promiseBlocks.then((authorizedBlock: AuthorizedBlock) => {
        if (!authorizedBlock) {
            return res.status(404).send({ message: `Block '${req.params.identifier}' not found` });
          }
        res.status(200).send(authorizedBlock);
    }).catch((error: any) => {
        console.log(error);
        res.status(400).send({ message: "An error occured", error })
    })
}

export {
    getAll,
    getByIdentifier
}
