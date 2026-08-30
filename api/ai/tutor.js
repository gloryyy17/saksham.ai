export default function handler(req, res) {
  // 1. Enable Global CORS Headers for Vercel Serverless
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      response: 'Method not allowed'
    });
  }

  // 2. Safe Body Parsing (handles parsed JSON, JSON strings, or undefined)
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

  const q = question.toLowerCase();
  let responseText = '';

  // MARATHI
  if (language === 'mr') {
    if (q.includes('गुरुत्वाकर्षण') || q.includes('gravity') || q.includes('gravitation')) {
      responseText =
        `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी विज्ञान):**\n\n` +
        `गुरुत्वाकर्षण म्हणजे विश्वातील कोणत्याही दोन वस्तूंमध्ये असणारे नैसर्गिक परस्पर आकर्षण बल होय.\n\n` +
        `१. **न्यूटनचा वैश्विक नियम:** $F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$\n` +
        `२. **गुरुत्वीय त्वरण (g):** पृथ्वीच्या पृष्ठभागावर सरासरी ९.८ m/s² असते.\n` +
        `३. **दैनिक उदाहरण:** झाडावरून पडणारे फळ पृथ्वीच्या गुरुत्वाकर्षण बलामुळे थेट जमिनीवर येते.`;
    } else if (q.includes('परिमेय') || q.includes('rational') || q.includes('अपरिमेय') || q.includes('संख्या')) {
      responseText =
        `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी गणित):**\n\n` +
        `**परिमेय संख्यांची संकल्पना:**\n\n` +
        `१. ज्या संख्या $p/q$ या रूपात लिहिता येतात, त्यांना **परिमेय संख्या** म्हणतात (येथे $p$ आणि $q$ पूर्णांक असतात व $q \\neq 0$).\n` +
        `२. **उदाहरणे:** ३/५, -७/२, ०, ४, २२/७.\n` +
        `३. संख्यारेषेवर कोणत्याही दोन परिमेय संख्यांच्या दरम्यान अगणित परिमेय संख्या असतात.`;
    } else if (q.includes('दाब') || q.includes('pressure') || q.includes('बल') || q.includes('force')) {
      responseText =
        `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी विज्ञान):**\n\n` +
        `१. **दाब:** एकक क्षेत्रफळावर लंब दिशेने प्रयुक्त होणाऱ्या बलाला **दाब** (Pressure) म्हणतात.\n` +
        `२. **सूत्र:** $\\text{दाब} = \\frac{\\text{बल}}{\\text{क्षेत्रफळ}} \\quad (P = F/A)$\n` +
        `३. **एकक:** दाबाचे एस.आय. एकक **पास्कल (Pa)** किंवा $\\text{N/m}^2$ आहे.`;
    } else if (q.includes('पेशी') || q.includes('cell') || q.includes('तंतुकणिका') || q.includes('केंद्रक')) {
      responseText =
        `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी विज्ञान):**\n\n` +
        `• **पेशी:** सजीवांचा रचनात्मक व कार्यात्मक मूलभूत घटक.\n` +
        `• **तंतुकणिका (Mitochondria):** पेशीचे ऊर्जा केंद्र (Powerhouse of Cell) जे ATP तयार करते.\n` +
        `• **केंद्रक (Nucleus):** पेशीच्या सर्व जैविक कार्यांचे नियंत्रण करते.`;
    } else {
      responseText =
        `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी):**\n\n` +
        `तुमच्या प्रश्नाचा अभ्यास केला आहे. महाराष्ट्र राज्य मंडळाच्या अभ्यासक्रमानुसार या संकल्पनेचा सराव स्वाध्यायाच्या माध्यमातून करा. अधिक तपशीलांसाठी विशिष्ट प्रश्न विचारा!`;
    }
  }

  // HINDI
  else if (language === 'hi') {
    if (q.includes('गुरुत्वाकर्षण') || q.includes('gravity') || q.includes('gravitation')) {
      responseText =
        `**सक्षम एआई शिक्षक (कक्षा ${studentClass} विज्ञान):**\n\n` +
        `गुरुत्वाकर्षण ब्रह्मांड में किन्हीं दो पिंडों के बीच लगने वाला आकर्षण बल है।\n\n` +
        `1. **न्यूटन का नियम:** $F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$\n` +
        `2. **गुरुत्वीय त्वरण (g):** पृथ्वी की सतह पर इसका मान 9.8 m/s² होता है।\n` +
        `3. **उदाहरण:** पेड़ से गिरा फल पृथ्वी के गुरुत्वाकर्षण के कारण जमीन पर गिरता है।`;
    } else if (q.includes('परिमेय') || q.includes('rational') || q.includes('संख्या')) {
      responseText =
        `**सक्षम एआई शिक्षक (कक्षा ${studentClass} गणित):**\n\n` +
        `**परिमेय संख्याएं:**\n\n` +
        `१. वे संख्याएँ जिन्हें $p/q$ के रूप में लिखा जा सके (जहाँ $p, q$ पूर्णांक हैं और $q \\neq 0$), **परिमेय संख्याएँ** कहलाती हैं।\n` +
        `२. **उदाहरण:** 3/5, -4/7, 0, 8, 22/7।`;
    } else if (q.includes('दाब') || q.includes('pressure') || q.includes('बल') || q.includes('force')) {
      responseText =
        `**सक्षम एआई शिक्षक (कक्षा ${studentClass} विज्ञान):**\n\n` +
        `१. **दाब:** प्रति इकाई क्षेत्रफल पर लगने वाले लंबवत बल को दाब कहते हैं।\n` +
        `२. **सूत्र:** $\\text{दाब} = \\frac{\\text{बल}}{\\text{क्षेत्रफल}} \\quad (P = F/A)$\n` +
        `३. **मात्रक:** दाब का SI मात्रक **पास्कल (Pa)** है।`;
    } else {
      responseText =
        `**सक्षम एआई शिक्षक (कक्षा ${studentClass}):**\n\n` +
        `कृपया अपना प्रश्न थोड़ा और स्पष्ट करके पूछें, मैं चरणबद्ध रूप से हल समझाऊंगा।`;
    }
  }

  // ENGLISH
  else {
    if (q.includes('gravity') || q.includes('gravitation') || q.includes('newton')) {
      responseText =
        `**Saksham AI Tutor (Class ${studentClass} Science):**\n\n` +
        `**Concept of Gravitation:**\n` +
        `Gravitation is the universal force of mutual attraction acting between all matter.\n\n` +
        `1. **Newton's Universal Law:** $F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$\n` +
        `   *(where $G = 6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$)*\n` +
        `2. **Acceleration due to Gravity ($g$):** On Earth's surface, $g \\approx 9.8 \\text{ m/s}^2$.\n` +
        `3. **Everyday Example:** An apple falling from a branch accelerates towards Earth's center.`;
    } else if (q.includes('rational') || q.includes('irrational') || q.includes('fraction') || q.includes('number')) {
      responseText =
        `**Saksham AI Tutor (Class ${studentClass} Mathematics):**\n\n` +
        `**Rational Numbers:**\n\n` +
        `1. **Definition:** Any number that can be expressed in the form $\\frac{p}{q}$ (where $p$ and $q$ are integers and $q \\neq 0$) is a **Rational Number**.\n` +
        `2. **Examples:** $\\frac{3}{5}, -\\frac{7}{2}, 0, 4, \\frac{22}{7}$.\n` +
        `3. **Representation:** Between any two rational numbers, there exist infinitely many rational numbers on the number line.`;
    } else if (q.includes('pressure') || q.includes('force') || q.includes('pascal')) {
      responseText =
        `**Saksham AI Tutor (Class ${studentClass} Science):**\n\n` +
        `**Force & Pressure:**\n\n` +
        `1. **Definition:** Pressure is defined as the perpendicular force acting per unit area.\n` +
        `2. **Formula:** $$\\text{Pressure} = \\frac{\\text{Force}}{\\text{Area}} \\quad (P = \\frac{F}{A})$$\n` +
        `3. **SI Unit:** **Pascal (Pa)** or $\\text{N/m}^2$.\n` +
        `4. **Example:** Sharp knives cut easily because the tiny surface area creates high pressure with little force.`;
    } else if (q.includes('cell') || q.includes('mitochondria') || q.includes('nucleus') || q.includes('organelle')) {
      responseText =
        `**Saksham AI Tutor (Class ${studentClass} Science):**\n\n` +
        `**Cell Structure & Organelles:**\n\n` +
        `• **Cell:** The fundamental structural and functional unit of life.\n` +
        `• **Mitochondria:** The 'Powerhouse of the Cell' producing ATP energy.\n` +
        `• **Nucleus:** Stores genetic DNA and regulates all cell functions.`;
    } else {
      responseText =
        `**Saksham AI Tutor (Class ${studentClass}):**\n\n` +
        `According to the Maharashtra State Board Class ${studentClass} curriculum:\n\n` +
        `• Feel free to ask specific formulas, definitions, or textbook doubts in Mathematics, Science, and English!\n` +
        `• Type your exact question or use the Voice Assistant for step-by-step guidance.`;
    }
  }

  return res.status(200).json({
    success: true,
    language,
    studentClass,
    response: responseText
  });
}