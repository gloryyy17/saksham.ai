export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            response: 'Method not allowed'
        });
    }

    const {
        question,
        studentClass = 8,
        language = 'mr'
    } = req.body || {};

    if (!question || question.trim() === '') {
        return res.status(400).json({
            response: 'Question is required'
        });
    }

    const q = question.toLowerCase();

    let responseText = '';

    // MARATHI
    if (language === 'mr') {

        if (
            q.includes('गुरुत्वाकर्षण') ||
            q.includes('gravity') ||
            q.includes('gravitation')
        ) {
            responseText =
                `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी विज्ञान):**\n\n` +
                `गुरुत्वाकर्षण म्हणजे विश्वातील कोणत्याही दोन वस्तूंमध्ये असणारे नैसर्गिक आकर्षण बल होय.\n\n` +
                `१. न्यूटनच्या नियमानुसार प्रत्येक वस्तू इतर वस्तूंना आकर्षित करते.\n` +
                `२. पृथ्वीवरील गुरुत्वीय त्वरणाचे मूल्य अंदाजे ९.८ m/s² आहे.\n` +
                `३. उदाहरण: झाडावरून पडणारे फळ पृथ्वीच्या गुरुत्वाकर्षणामुळे खाली येते.`;
        }

        else if (
            q.includes('दाब') ||
            q.includes('pressure') ||
            q.includes('बल') ||
            q.includes('force')
        ) {
            responseText =
                `**सक्षम एआय शिक्षक:**\n\n` +
                `दाब = बल ÷ क्षेत्रफळ (P = F/A)\n\n` +
                `दाबाचे SI एकक पास्कल (Pa) आहे.`;
        }

        else {
            responseText =
                `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी):**\n\n` +
                `तुमच्या प्रश्नाचा अभ्यास केला आहे. कृपया प्रश्न थोडा अधिक स्पष्टपणे विचारा, मी तो सोप्या भाषेत समजावून सांगतो.`;
        }
    }

    // HINDI
    else if (language === 'hi') {

        if (
            q.includes('गुरुत्वाकर्षण') ||
            q.includes('gravity') ||
            q.includes('gravitation')
        ) {
            responseText =
                `**सक्षम एआई शिक्षक (कक्षा ${studentClass} विज्ञान):**\n\n` +
                `गुरुत्वाकर्षण दो वस्तुओं के बीच लगने वाला आकर्षण बल है।\n\n` +
                `पृथ्वी का गुरुत्वाकर्षण वस्तुओं को अपनी ओर खींचता है।`;
        }

        else {
            responseText =
                `**सक्षम एआई शिक्षक:**\n\n` +
                `कृपया अपना प्रश्न थोड़ा स्पष्ट करके पूछें।`;
        }
    }

    // ENGLISH
    else {

        if (
            q.includes('gravity') ||
            q.includes('gravitation')
        ) {
            responseText =
                `**Saksham AI Tutor (Class ${studentClass} Science):**\n\n` +
                `Gravitation is the natural force of attraction between objects.\n\n` +
                `Earth's gravity pulls objects towards its centre.`;
        }

        else {
            responseText =
                `**Saksham AI Tutor:**\n\n` +
                `Please ask your question more clearly and I will explain it step by step.`;
        }
    }

    return res.status(200).json({
        response: responseText
    });
}