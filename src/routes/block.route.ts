import { Router, Request, Response } from 'express';
import * as blockController from '../controllers/block.controller'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    blockController.getAll(req, res);
});

router.get('/:identifier', (req: Request, res: Response) => {
    blockController.getByIdentifier(req, res);
});

export default router;
