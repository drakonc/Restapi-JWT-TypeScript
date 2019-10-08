import  express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();

import authRoutes from "./routes/auth";

// Setting
app.set('port', 3000 || process.env.PORT)

//Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/auth',authRoutes);

export default app;
