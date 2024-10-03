import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';  // Assuming your data source is configured in `data-source.ts`
import { CalendarEvents } from '../models/CalendarEvents';

export class CalendarEventsService {
  private calendarEventsRepository: Repository<CalendarEvents>;

  constructor() {
    this.calendarEventsRepository = AppDataSource.getRepository(CalendarEvents);
  }

  // Create a new Calendar Event
  async create(data: Partial<CalendarEvents>): Promise<CalendarEvents> {
    const calendarEvent = this.calendarEventsRepository.create(data);
    return await this.calendarEventsRepository.save(calendarEvent);
  }

  // Get all Calendar Events
  async findAll(): Promise<CalendarEvents[]> {
    return await this.calendarEventsRepository.find();
  }

  // Get a single Calendar Event by ID
  async findById(id: number): Promise<CalendarEvents | null> {
    return await this.calendarEventsRepository.findOneBy({ calendareventid: id });
  }

  // Update a Calendar Event by ID
  async update(id: number, data: Partial<CalendarEvents>): Promise<CalendarEvents | null> {
    const calendarEvent = await this.findById(id);
    if (!calendarEvent) return null;

    Object.assign(calendarEvent, data);
    return await this.calendarEventsRepository.save(calendarEvent);
  }

  // Delete a Calendar Event by ID
  async delete(id: number): Promise<boolean> {
    const result = await this.calendarEventsRepository.delete(id);
    return result.affected !== 0;
  }
}
