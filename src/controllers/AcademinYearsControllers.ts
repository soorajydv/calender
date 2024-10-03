import { Request, Response } from 'express';
import { AcademicYearsService } from '../services/AcademinYearsService';

export class AcademicYearsController {
  private academicYearsService: AcademicYearsService;

  constructor() {
    this.academicYearsService = new AcademicYearsService();
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const academicYear = await this.academicYearsService.create(req.body);
      res.status(201).json(academicYear);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const academicYears = await this.academicYearsService.findAll();
      res.status(200).json(academicYears);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const academicYear = await this.academicYearsService.findOne(+id);
      if (academicYear) {
        res.status(200).json(academicYear);
      } else {
        res.status(404).json({ message: 'Academic Year not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const updatedAcademicYear = await this.academicYearsService.update(+id, req.body);
      if (updatedAcademicYear) {
        res.status(200).json(updatedAcademicYear);
      } else {
        res.status(404).json({ message: 'Academic Year not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.academicYearsService.delete(+id);
      res.status(204).send(); // No content response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
