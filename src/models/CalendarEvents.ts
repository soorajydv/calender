import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { AcademicYears } from './AcademicYears';
import { HolidaySettings } from './HolidaySettings';

@Entity()
export class CalendarEvents {
  @PrimaryGeneratedColumn()
  calendareventid: number;

  @ManyToOne(() => AcademicYears, academicYear => academicYear.calendarEvents)
  academicyearid: AcademicYears;

  @ManyToOne(() => HolidaySettings, holidaySettings => holidaySettings.holidaysettingid)
  holidaysettingid: HolidaySettings;

  @Column({ type: 'date' })
  eventdate: Date;

  @Column({ type: 'varchar', length: 10 })
  eventtype: string;

  @Column({ type: 'varchar', length: 50 })
  eventname: string;

  @Column({ type: 'int' })
  classid: number;

  @Column({ type: 'int' })
  semesterid: number;

  @Column({ type: 'boolean' })
  isoverride: boolean;

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  modifieddate: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleteddate: Date;
}
