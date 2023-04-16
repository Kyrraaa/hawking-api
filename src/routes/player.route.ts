import { Router, Request, Response } from 'express';
import * as playerController from '../controllers/player.controller'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    playerController.getAll(req, res);
});

router.get('/:uuid', (req: Request, res: Response) => {
    playerController.getByUuid(req, res);
});

router.get('/:uuid?/block', (req: Request, res: Response) => {
    playerController.getBlockByPlayerUuid(req, res);
});

export default router;
