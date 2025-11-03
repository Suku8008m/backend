import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome !");
});

app.listen(PORT, () => {
  console.log(`Server Running on port http://localhost:${PORT}`);
});
