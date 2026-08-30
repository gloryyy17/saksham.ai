// Serverless Function for SAKSHAM.AI Tutor with Google Gemini API Integration

async function callGeminiTutor(question, studentClass, language, subject, apiKey) {
  const langName = language === 'mr' ? 'Marathi (मराठी)' : language === 'hi' ? 'Hindi (हिंदी)' : 'English';
  
  const systemInstruction = 
    `You are "Saksham AI Tutor" (सक्षम एआई शिक्षक), a friendly, highly knowledgeable educational tutor dedicated to Maharashtra State Board students from Class 6 to 10.\n` +
    `Current Student: Class ${studentClass} (Maharashtra State Board curriculum).\n` +
    `Output Language: You MUST answer STRICTLY in ${langName}.\n` +
    `Subject Area: ${subject || 'General STEM & Languages'}.\n\n` +
    `Pedagogical Rules:\n` +
    `1. Explain concepts simply and accurately according to Maharashtra State Board textbooks (Balbharati / MSBSHSE syllabus).\n` +
    `2. Structure answers with: Short Definition -> Core Principles/Formulas -> Practical Everyday Example -> Summary Tip.\n` +
    `3. Use Markdown formatting (bold keywords, numbered steps, bullet points).\n` +
    `4. Keep answers concise, age-appropriate, motivating, and educational.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${systemInstruction}\n\nStudent's Question:\n${question}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 800
      }
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${errorBody}`);
  }

  const data = await response.json();
  const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!candidateText) {
    throw new Error('No candidate content returned by Gemini API');
  }

  return candidateText.trim();
}

function getLocalFallback(question, studentClass, language) {
  const q = question.toLowerCase();

  // MARATHI FALLBACK
  if (language === 'mr') {
    if (q.includes('गुरुत्वाकर्षण') || q.includes('gravity') || q.includes('gravitation')) {
      return `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी विज्ञान):**\n\n` +
        `गुरुत्वाकर्षण म्हणजे विश्वातील कोणत्याही दोन वस्तूंमध्ये असणारे नैसर्गिक परस्पर आकर्षण बल होय.\n\n` +
        `१. **न्यूटनचा वैश्विक नियम:** $F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$\n` +
        `२. **गुरुत्वीय त्वरण (g):** पृथ्वीच्या पृष्ठभागावर सरासरी ९.८ m/s² असते.\n` +
        `३. **दैनिक उदाहरण:** झाडावरून पडणारे फळ पृथ्वीच्या गुरुत्वाकर्षण बलामुळे थेट जमिनीवर येते.`;
    } else if (q.includes('परिमेय') || q.includes('rational') || q.includes('संख्या')) {
      return `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी गणित):**\n\n` +
        `**परिमेय संख्यांची संकल्पना:**\n\n` +
        `१. ज्या संख्या $p/q$ या रूपात लिहिता येतात, त्यांना **परिमेय संख्या** म्हणतात (येथे $p$ आणि $q$ पूर्णांक असतात व $q \\neq 0$).\n` +
        `२. **उदाहरणे:** ३/५, -७/२, ०, ४, २२/७.\n` +
        `३. संख्यारेषेवर कोणत्याही दोन परिमेय संख्यांच्या दरम्यान अगणित परिमेय संख्या असतात.`;
    } else if (q.includes('दाब') || q.includes('pressure') || q.includes('बल') || q.includes('force')) {
      return `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी विज्ञान):**\n\n` +
        `१. **दाब:** एकक क्षेत्रफळावर लंब दिशेने प्रयुक्त होणाऱ्या बलाला **दाब** (Pressure) म्हणतात.\n` +
        `२. **सूत्र:** $\\text{दाब} = \\frac{\\text{बल}}{\\text{क्षेत्रफल}} \\quad (P = F/A)$\n` +
        `३. **एकक:** दाबाचे एस.आय. एकक **पास्कल (Pa)** किंवा $\\text{N/m}^2$ आहे.`;
    } else {
      return `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी):**\n\n` +
        `महाराष्ट्र राज्य मंडळाच्या इयत्ता ${studentClass} वी च्या अभ्यासक्रमानुसार या संकल्पनेचा सराव स्वाध्यायाच्या माध्यमातून करा. अधिक तपशीलांसाठी विशिष्ट प्रश्न विचारा!`;
    }
  }

  // HINDI FALLBACK
  else if (language === 'hi') {
    if (q.includes('गुरुत्वाकर्षण') || q.includes('gravity') || q.includes('gravitation')) {
      return `**सक्षम एआई शिक्षक (कक्षा ${studentClass} विज्ञान):**\n\n` +
        `गुरुत्वाकर्षण ब्रह्मांड में किन्हीं दो पिंडों के बीच लगने वाला आकर्षण बल है।\n\n` +
        `1. **न्यूटन का नियम:** $F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$\n` +
        `2. **गुरुत्वीय त्वरण (g):** पृथ्वी की सतह पर इसका मान 9.8 m/s² होता है।\n` +
        `3. **उदाहरण:** पेड़ से गिरा फल पृथ्वी के गुरुत्वाकर्षण के कारण जमीन पर गिरता है।`;
    } else if (q.includes('परिमेय') || q.includes('rational') || q.includes('संख्या')) {
      return `**सक्षम एआई शिक्षक (कक्षा ${studentClass} गणित):**\n\n` +
        `**परिमेय संख्याएं:**\n\n` +
        `१. वे संख्याएँ जिन्हें $p/q$ के रूप में लिखा जा सके (जहाँ $p, q$ पूर्णांक हैं और $q \\neq 0$), **परिमेय संख्याएँ** कहलाती हैं।\n` +
        `२. **उदाहरण:** 3/5, -4/7, 0, 8, 22/7।`;
    } else {
      return `**सक्षम एआई शिक्षक (कक्षा ${studentClass}):**\n\n` +
        `कृपया अपना प्रश्न थोड़ा और स्पष्ट करके पूछें, मैं चरणबद्ध रूप से हल समझाऊंगा।`;
    }
  }

  // ENGLISH FALLBACK
  else {
    if (q.includes('gravity') || q.includes('gravitation') || q.includes('newton')) {
      return `**Saksham AI Tutor (Class ${studentClass} Science):**\n\n` +
        `**Concept of Gravitation:**\n` +
        `Gravitation is the universal force of mutual attraction acting between all matter.\n\n` +
        `1. **Newton's Universal Law:** $F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$\n` +
        `   *(where $G = 6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$)*\n` +
        `2. **Acceleration due to Gravity ($g$):** On Earth's surface, $g \\approx 9.8 \\text{ m/s}^2$.\n` +
        `3. **Everyday Example:** An apple falling from a branch accelerates towards Earth's center.`;
    } else if (q.includes('rational') || q.includes('irrational') || q.includes('number')) {
      return `**Saksham AI Tutor (Class ${studentClass} Mathematics):**\n\n` +
        `**Rational Numbers:**\n\n` +
        `1. **Definition:** Any number that can be expressed in the form $\\frac{p}{q}$ (where $p, q \\in \\mathbb{Z}$ and $q \\neq 0$) is a **Rational Number**.\n` +
        `2. **Examples:** $\\frac{3}{5}, -\\frac{7}{2}, 0, 4, \\frac{22}{7}$.\n` +
        `3. **Representation:** Between any two rational numbers, there exist infinitely many rational numbers on the number line.`;
    } else {
      return `**Saksham AI Tutor (Class ${studentClass}):**\n\n` +
        `According to the Maharashtra State Board Class ${studentClass} curriculum:\n\n` +
        `• Feel free to ask specific formulas, definitions, or textbook doubts in Mathematics, Science, and English!\n` +
        `• Type your exact question for step-by-step guidance.`;
    }
  }
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      response: 'Method not allowed'
    });
  }

  // Body Parsing
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  const {
    question,
    studentClass = 8,
    language = 'mr',
    subject = 'general'
  } = body || {};

  if (!question || typeof question !== 'string' || question.trim() === '') {
    return res.status(400).json({
      error: 'Question is required',
      response: 'Question is required'
    });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY;
  let responseText = '';
  let provider = 'local';

  if (apiKey && apiKey.trim() !== '' && !apiKey.includes('your-')) {
    try {
      responseText = await callGeminiTutor(question, studentClass, language, subject, apiKey.trim());
      provider = 'gemini';
    } catch (geminiErr) {
      console.warn('Gemini API call failed, using curriculum fallback:', geminiErr.message);
      responseText = getLocalFallback(question, studentClass, language);
    }
  } else {
    responseText = getLocalFallback(question, studentClass, language);
  }

  return res.status(200).json({
    success: true,
    provider,
    language,
    studentClass,
    response: responseText
  });
}