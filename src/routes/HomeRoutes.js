import { Router } from 'express';
import homeController from '../controllers/HomeControllers.js';

const router = new Router();

router.get('/', homeController.register);

export default router;
