import express from "express";
import cors from "cors";
import { connectDB } from "./database";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Error!!", err);
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Working Properly" });
});

///Router Import
import authRouter from "./routes/auth.routes";

//routes for user auth
app.use("/api/v1/auth", authRouter);

//Other Routes
app.use("/*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Invalid Route" });
});

export default app;
