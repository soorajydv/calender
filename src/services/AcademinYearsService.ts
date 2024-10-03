import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { AcademicYears } from '../models/AcademicYears';

export class AcademicYearsService {
  private academicYearsRepository: Repository<AcademicYears>;

  constructor() {
    this.academicYearsRepository = AppDataSource.getRepository(AcademicYears);
  }

  async create(data: Partial<AcademicYears>): Promise<AcademicYears> {
    const academicYear = this.academicYearsRepository.create(data);
    return await this.academicYearsRepository.save(academicYear);
  }

  async findOne(id: number): Promise<AcademicYears | null> {
    return await this.academicYearsRepository.findOne({ where: { academicyearid: id } });
  }

  async findAll(): Promise<AcademicYears[]> {
    return await this.academicYearsRepository.find();
  }

  async update(id: number, data: Partial<AcademicYears>): Promise<AcademicYears | null> {
    await this.academicYearsRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.academicYearsRepository.delete(id);
  }
}
