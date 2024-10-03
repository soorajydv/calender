import { Router } from 'express';
import { AcademicYearsController } from '../controllers/AcademinYearsControllers';

const router = Router();
const academicYearsController = new AcademicYearsController();

router.post('/', academicYearsController.create.bind(academicYearsController));

router.get('/', academicYearsController.getAll.bind(academicYearsController));

// Route to get a single academic year by ID
router.get('/:id', academicYearsController.getById.bind(academicYearsController));

// Route to update an academic year by ID
router.put('/:id', academicYearsController.update.bind(academicYearsController));

// Route to delete an academic year by ID
router.delete('/:id', academicYearsController.delete.bind(academicYearsController));

export default router;
