import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser } from '../controllers/servers.js';

const router = Router();

router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getUserById);
router.post('/api/users', createUser);
router.patch('/api/users/:id', updateUser);

export default router;


