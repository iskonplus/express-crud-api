import { Router } from 'express';
import { logIn} from '../controllers/servers.js';

const authRouter = Router();
authRouter.post('/', logIn);

export default authRouter;