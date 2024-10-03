import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Days } from '../models/Days';

export class DaysService {
  private daysRepository: Repository<Days>;

  constructor() {
    this.daysRepository = AppDataSource.getRepository(Days);
  }

  // Create a new Day
  async create(data: Partial<Days>): Promise<Days> {
    const day = this.daysRepository.create(data);
    return await this.daysRepository.save(day);
  }

  // Get all Days
  async findAll(): Promise<Days[]> {
    return await this.daysRepository.find();
  }

  // Get a single Day by ID
  async findById(id: number): Promise<Days | null> {
    return await this.daysRepository.findOneBy({ dayid: id });
  }

  // Update a Day by ID
  async update(id: number, data: Partial<Days>): Promise<Days | null> {
    const day = await this.findById(id);
    if (!day) return null;

    Object.assign(day, data);
    return await this.daysRepository.save(day);
  }

  // Delete a Day by ID
  async delete(id: number): Promise<boolean> {
    const result = await this.daysRepository.delete(id);
    return result.affected !== 0;
  }
}
