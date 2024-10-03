import { Request, Response } from 'express';
import { DaysService } from '../services/DaysServices';

export class DaysController {
  private daysService: DaysService;

  constructor() {
    this.daysService = new DaysService();
  }

  // Create a new Day
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const day = await this.daysService.create(req.body);
      res.status(201).json(day);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all Days
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const days = await this.daysService.findAll();
      res.status(200).json(days);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a single Day by ID
  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const day = await this.daysService.findById(Number(req.params.id));
      if (!day) {
        res.status(404).json({ message: 'Day not found' });
        return;
      }
      res.status(200).json(day);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a Day by ID
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const day = await this.daysService.update(Number(req.params.id), req.body);
      if (!day) {
        res.status(404).json({ message: 'Day not found' });
        return;
      }
      res.status(200).json(day);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a Day by ID
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const success = await this.daysService.delete(Number(req.params.id));
      if (!success) {
        res.status(404).json({ message: 'Day not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
