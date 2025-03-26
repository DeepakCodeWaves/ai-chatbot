const express = require("express");
const axios = require("axios");
const config = require("../config");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;
        
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            max_tokens: 100,
        }, {
            headers: { Authorization: `Bearer ${config.openaiApiKey}` }
        });

        res.json({ response: response.data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Error communicating with OpenAI API" });
    }
});

module.exports = router;
