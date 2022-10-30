import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/routes";

/* CONFIG */
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

/* EXPORT */
export default app;
