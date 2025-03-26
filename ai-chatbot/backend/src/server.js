const express = require("express");
const cors = require("cors");
const chatRoute = require("./routes/chat");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/chat", chatRoute);
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY ? "Loaded" : "Not Loaded");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
