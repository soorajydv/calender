import { Router } from 'express';
import { DaysController } from '../controllers/DaysController';

const router = Router();
const daysController = new DaysController();

router.post('/days', (req, res) => daysController.create(req, res));
router.get('/days', (req, res) => daysController.getAll(req, res));
router.get('/days/:id', (req, res) => daysController.getById(req, res));
router.put('/days/:id', (req, res) => daysController.update(req, res));
router.delete('/days/:id', (req, res) => daysController.delete(req, res));

export default router;
