import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import blogRoute from "./routes/blog.route.js";
import newsletterRouter from "./routes/newsletter.route.js";
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: [
        "https://careerio-frontend.vercel.app", "https://careerio-frontend-o7aaaohnc-shahariar-developers-projects.vercel.app"
    ],
    credentials: true
};


app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;


// api's
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/newsletter", newsletterRouter);
// testing purpose
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})

