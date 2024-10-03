import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { HolidaySettings } from './HolidaySettings';
import { CalendarEvents } from './CalendarEvents';

@Entity()
export class AcademicYears {
  @PrimaryGeneratedColumn()
  academicyearid: number;

  @Column({ type: 'uuid', default: () => 'uuid_generate_v4()' })
  guid: string;

  @Column({ type: 'varchar', length: 4 })
  year: string;

  @Column({ type: 'varchar', length: 10 })
  term: string;

  @OneToMany(() => HolidaySettings, holidaySettings => holidaySettings.academicyearid)
  holidaySettings: HolidaySettings[];

  @OneToMany(() => CalendarEvents, calendarEvents => calendarEvents.academicyearid)
  calendarEvents: CalendarEvents[];
}
