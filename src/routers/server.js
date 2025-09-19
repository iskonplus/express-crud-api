import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/servers.js';

const router = Router();

router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getUserById);
router.post('/api/users', createUser);

export default router;


