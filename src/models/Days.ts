import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HolidaySettings } from './HolidaySettings';

@Entity()
export class Days {
  @PrimaryGeneratedColumn()
  dayid: number;

  @Column({ type: 'uuid', default: () => 'uuid_generate_v4()' })
  guid: string;

  @Column({ type: 'varchar', length: 10 })
  dayname: string;

  @OneToMany(() => HolidaySettings, holidaySettings => holidaySettings.dayid)
  holidaySettings: HolidaySettings[];
}
