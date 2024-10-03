import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AcademicYears } from './AcademicYears';
import { Days } from './Days';

@Entity()
export class HolidaySettings {
  @PrimaryGeneratedColumn()
  holidaysettingid: number;

  @Column({ type: 'uuid', default: () => 'uuid_generate_v4()' })
  guid: string;

  @ManyToOne(() => AcademicYears, academicYear => academicYear.holidaySettings)
  academicyearid: AcademicYears;

  @ManyToOne(() => Days, day => day.holidaySettings)
  dayid: Days;
}
