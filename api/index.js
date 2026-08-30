const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/ai/tutor", (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({
            error: "Question is required"
        });
    }

    // Test response first
    if (question.includes("गुरुत्वाकर्षण")) {
        return res.json({
            answer:
                "गुरुत्वाकर्षण म्हणजे दोन वस्तूंमध्ये निर्माण होणारे आकर्षण बल. पृथ्वी आपल्याला स्वतःकडे खेचते, त्यामुळे आपण जमिनीवर राहतो."
        });
    }

    return res.json({
        answer: "हा प्रश्न समजला. कृपया थोडा अधिक तपशील द्या."
    });
});

module.exports = app;