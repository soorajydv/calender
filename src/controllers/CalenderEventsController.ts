import { Request, Response } from 'express';
import { CalendarEventsService } from '../services/CalenderEventsService';


export class CalendarEventsController {
  private calendarEventsService: CalendarEventsService;

  constructor() {
    this.calendarEventsService = new CalendarEventsService();
  }

  // Create a new Calendar Event
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const calendarEvent = await this.calendarEventsService.create(req.body);
      res.status(201).json(calendarEvent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all Calendar Events
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const calendarEvents = await this.calendarEventsService.findAll();
      res.status(200).json(calendarEvents);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a single Calendar Event by ID
  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const calendarEvent = await this.calendarEventsService.findById(Number(req.params.id));
      if (!calendarEvent) {
        res.status(404).json({ message: 'Calendar event not found' });
        return;
      }
      res.status(200).json(calendarEvent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a Calendar Event
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const calendarEvent = await this.calendarEventsService.update(Number(req.params.id), req.body);
      if (!calendarEvent) {
        res.status(404).json({ message: 'Calendar event not found' });
        return;
      }
      res.status(200).json(calendarEvent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a Calendar Event
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const success = await this.calendarEventsService.delete(Number(req.params.id));
      if (!success) {
        res.status(404).json({ message: 'Calendar event not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
