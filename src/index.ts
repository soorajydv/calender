import { AppDataSource } from "./data-source";
import "reflect-metadata";
import * as express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";

import academicYearsRoutes from "./routes/academicYearsRoutes";
import CalendarEventsRoutes  from "./routes/calenderEventsRoutes";
import DaysRoutes from "./routes/daysRoutes"

const app = express();
app.use(express.json());

const { PORT = 3000 } = process.env;

app.use('/api/academic-years', academicYearsRoutes);
app.use('/api', CalendarEventsRoutes);
app.use('/api', DaysRoutes);



app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});


AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));