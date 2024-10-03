import { Router } from 'express';
import { CalendarEventsController } from '../controllers/CalenderEventsController';

const router = Router();
const calendarEventsController = new CalendarEventsController();

router.post('/calendar-events', (req, res) => calendarEventsController.create(req, res));
router.get('/calendar-events', (req, res) => calendarEventsController.getAll(req, res));
router.get('/calendar-events/:id', (req, res) => calendarEventsController.getById(req, res));
router.put('/calendar-events/:id', (req, res) => calendarEventsController.update(req, res));
router.delete('/calendar-events/:id', (req, res) => calendarEventsController.delete(req, res));

export default router;
