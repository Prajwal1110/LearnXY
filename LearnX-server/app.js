import express from 'express';
import { config } from 'dotenv'; // Change 'form' to 'from'
import course from "../LearnX-server/routes/courseRoutes.js"
config({
    path: './config/config.env',
});

const app = express();

app.use("/api/v1", course);

app.listen(process.env.PORT, () => {
    console.log(`LearnX-server listening on port ${process.env.PORT}`);
});
