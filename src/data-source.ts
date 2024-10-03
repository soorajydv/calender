import "reflect-metadata";
import { DataSource } from "typeorm";
import { AcademicYears } from "./models/AcademicYears";
import { CalendarEvents } from "./models/CalendarEvents";
import { Days } from "./models/Days";
import { HolidaySettings } from "./models/HolidaySettings";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: "sooraj",
  password: "sooraj",
  database: "Test",

  synchronize: true,
  logging: true,
  entities: [AcademicYears,CalendarEvents,Days,HolidaySettings],
  migrations: ["./src/migrations/*.ts"],
  subscribers: [],
});

