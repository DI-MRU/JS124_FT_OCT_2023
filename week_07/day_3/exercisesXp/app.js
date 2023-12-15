import express from "express";
import router from "./route/route.js";

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Server is listening to port 3000"));
