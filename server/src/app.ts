// import path from "path";

import express from "express";
import bodyParser from "body-parser";
import cors = require("cors");

import userRoutes from "./routes/users";

const app = express();

// app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);

app.listen(5000);
