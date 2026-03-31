import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./lib/db.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import authRouter from "./routes/authRoutes.js";
import thumbnailRouter from "./routes/thumbnailRoutes.js";
import userRouter from "./routes/userRoutes.js";

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean;
    userId: string;
  }
}

await connectDB();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://prompt2thumb.vercel.app",
    ],
    credentials: true,
  }),
);
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI as string,
      collectionName: "sessions",
    }),
  }),
);
app.use(express.json());

// Health Check
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live");
});

//Routes

app.use("/api/auth", authRouter);
app.use("/api/thumbnail", thumbnailRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
