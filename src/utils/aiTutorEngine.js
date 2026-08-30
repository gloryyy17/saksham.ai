// AI Tutor Knowledge & Reasoning Engine for Maharashtra State Board (Classes 6-10)
// Works seamlessly both client-side (offline/standalone) and within Serverless API handlers.

import { curriculumData } from '../data/curriculumData';

/**
 * Knowledge Base for high-frequency curriculum topics in Marathi, Hindi, and English
 */
const knowledgeBase = {
  mr: [
    {
      keywords: ['गुरुत्वाकर्षण', 'gravity', 'gravitation', 'न्यूटन'],
      subject: 'विज्ञान',
      title: 'गुरुत्वाकर्षण (Gravitation)',
      content: (c) =>
        `**सक्षम एआय शिक्षक (इयत्ता ${c} वी विज्ञान - गुरुत्वाकर्षण):**\n\n` +
        `गुरुत्वाकर्षण म्हणजे विश्वातील कोणत्याही दोन वस्तुमानांमध्ये असणारे नैसर्गिक परस्पर आकर्षण बल होय.\n\n` +
        `१. **न्यूटनचा वैश्विक गुरुत्वाकर्षणाचा नियम:** विश्वातील प्रत्येक वस्तू इतर वस्तूला एका निश्चित बलाने आकर्षित करते. हे बल वस्तूंच्या वस्तुमानाच्या गुणाकाराशी समानुपाती आणि अंतराच्या वर्गाशी व्यस्त प्रमाणात असते:\n` +
        `   $$F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$$\n` +
        `२. **गुरुत्वीय त्वरण (g):** पृथ्वीच्या पृष्ठभागावर सरासरी मूल्य **९.८ m/s²** असते.\n` +
        `३. **दैनिक उदाहरण:** झाडावरून तुटलेले फळ थेट जमिनीवर पडते, कारण पृथ्वी त्यावर खालील दिशेने गुरुत्वाकर्षण बल लावते.`
    },
    {
      keywords: ['परिमेय', 'rational', 'अपरिमेय', 'irrational', 'संख्या', 'number'],
      subject: 'गणित',
      title: 'परिमेय व अपरिमेय संख्या (Rational Numbers)',
      content: (c) =>
        `**सक्षम एआय शिक्षक (इयत्ता ${c} वी गणित - परिमेय संख्या):**\n\n` +
        `**परिमेय संख्यांची व्याख्या व गुणधर्म:**\n\n` +
        `१. **व्याख्या:** ज्या संख्या $p/q$ या रूपात लिहिता येतात, त्यांना **परिमेय संख्या** म्हणतात (येथे $p$ आणि $q$ पूर्णांक असतात व $q \\neq 0$).\n` +
        `२. **उदाहरणे:** $3/5, -7/2, 0, 4, 12/17$.\n` +
        `३. **दशांश रूप:** परिमेय संख्यांचे दशांश रूप एकतर खंडित (terminating) असते किंवा अखंड आवर्ती (non-terminating recurring) असते.\n` +
        `४. **संख्यारेषेवरील स्थान:** संख्यारेषेवर दोन परिमेय संख्यांच्या दरम्यान अगणित (असंख्य) परिमेय संख्या असतात.`
    },
    {
      keywords: ['दाब', 'pressure', 'बल', 'force', 'पास्कल', 'pascal'],
      subject: 'विज्ञान',
      title: 'बल आणि दाब (Force and Pressure)',
      content: (c) =>
        `**सक्षम एआय शिक्षक (इयत्ता ${c} वी विज्ञान - बल व दाब):**\n\n` +
        `१. **दाबाची व्याख्या:** एकक क्षेत्रफळावर लंब दिशेने प्रयुक्त होणाऱ्या बलाला **दाब** (Pressure) म्हणतात.\n` +
        `२. **मुख्य सूत्र:** $\\text{दाब} = \\frac{\\text{बल}}{\\text{क्षेत्रफळ}} \\quad (P = \\frac{F}{A})$\n` +
        `३. **SI एकक:** दाबाचे एस.आय. एकक **पास्कल (Pascal - Pa)** किंवा $\\text{N/m}^2$ आहे.\n` +
        `४. **व्यावहारिक उदाहरण:** सुईचे टोक टोकदार (कमी क्षेत्रफळ) असल्यामुळे कमी बलानेही जास्त दाब निर्माण होतो व सुई सहज आत जाते.`
    },
    {
      keywords: ['पेशी', 'cell', 'अंगके', 'organelles', 'केंद्रक', 'तंतुकणिका', 'mitochondria'],
      subject: 'विज्ञान',
      title: 'पेशी आणि पेशी अंगके (Cell Structure)',
      content: (c) =>
        `**सक्षम एआय शिक्षक (इयत्ता ${c} वी विज्ञान - पेशी रचना):**\n\n` +
        `१. **पेशी:** सजीवांचा रचनात्मक व कार्यात्मक मूलभूत घटक म्हणजे पेशी होय.\n` +
        `२. **तंतुकणिका (Mitochondria):** पेशीचे 'ऊर्जा केंद्र' (Powerhouse of the Cell) म्हणून ओळखले जाते, जिथे ATP स्वरूपात ऊर्जा तयार होते.\n` +
        `३. **केंद्रक (Nucleus):** पेशीच्या सर्व जैविक कार्यांवर नियंत्रण ठेवते आणि आनुवंशिक माहिती साठवते.\n` +
        `४. **हरितलवके (Chloroplasts):** वनस्पती पेशींमध्ये प्रकाशसंश्लेषणाद्वारे अन्न तयार करण्याचे काम करतात.`
    },
    {
      keywords: ['विद्युत', 'current', 'electricity', 'रोध', 'resistance', 'ओहम', 'ohm', 'व्होल्ट'],
      subject: 'विज्ञान',
      title: 'धारा विद्युत (Current Electricity)',
      content: (c) =>
        `**सक्षम एआय शिक्षक (इयत्ता ${c} वी विज्ञान - धारा विद्युत):**\n\n` +
        `१. **विद्युत धारा (I):** वाहकातून वाहणाऱ्या विद्युत प्रभार प्रवाहाच्या दराला विद्युत धारा म्हणतात ($I = Q/t$). एकक: **अँपिअर (A)**.\n` +
        `२. **विभवांतर (V):** एकक धनप्रभार एका बिंदूपासून दुसऱ्या बिंदूपर्यंत नेण्यासाठी करावे लागणारे कार्य ($V = W/Q$). एकक: **व्होल्ट (V)**.\n` +
        `३. **ओहमचा नियम:** $V = I \\cdot R$, जिथे $R$ म्हणजे वाहकाचा रोध (एकक: ओहम $\\Omega$).`
    },
    {
      keywords: ['प्रकाशसंश्लेषण', 'photosynthesis', 'वनस्पती', 'plant'],
      subject: 'विज्ञान',
      title: 'प्रकाशसंश्लेषण (Photosynthesis)',
      content: (c) =>
        `**सक्षम एआय शिक्षक (इयत्ता ${c} वी विज्ञान):**\n\n` +
        `वनस्पती सूर्यप्रकाश, हरितद्रव्य, पाणी आणि कार्बन डायऑक्साईड यांच्या साहाय्याने स्वतःचे अन्न (ग्लुकोज) स्वतः तयार करतात, या प्रक्रियेला **प्रकाशसंश्लेषण** म्हणतात.\n\n` +
        `• **रासायनिक समीकरण:** $6CO_2 + 6H_2O + \\text{सूर्यप्रकाश} \\rightarrow C_6H_{12}O_6 + 6O_2$\n` +
        `• या प्रक्रियेत ऑक्सिजन वायू बाहेर सोडला जातो, जो सर्व सजीवांच्या श्वसनासाठी आवश्यक असतो.`
    }
  ],
  hi: [
    {
      keywords: ['गुरुत्वाकर्षण', 'gravity', 'gravitation', 'न्यूटन'],
      subject: 'विज्ञान',
      title: 'गुरुत्वाकर्षण (Gravitation)',
      content: (c) =>
        `**सक्षम एआई शिक्षक (कक्षा ${c} विज्ञान - गुरुत्वाकर्षण):**\n\n` +
        `गुरुत्वाकर्षण ब्रह्मांड में किन्हीं भी दो द्रव्यमान युक्त पिंडों के बीच लगने वाला प्राकृतिक आकर्षण बल है।\n\n` +
        `१. **न्यूटन का सार्वत्रिक नियम:** दो पिंडों के बीच आकर्षण बल उनके द्रव्यमान के गुणनफल के समानुपाती और दूरी के वर्ग के व्युत्क्रमानुपाती होता है:\n` +
        `   $$F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$$\n` +
        `२. **गुरुत्वीय त्वरण (g):** पृथ्वी की सतह पर इसका मानक मान **9.8 m/s²** होता है।\n` +
        `३. **दैनिक उदाहरण:** पेड़ से टूटा फल नीचे पृथ्वी की ओर ही गिरता है क्योंकि पृथ्वी उस पर गुरुत्वाकर्षण बल लगाती है।`
    },
    {
      keywords: ['परिमेय', 'rational', 'संख्या', 'number', 'अपरिमेय'],
      subject: 'गणित',
      title: 'परिमेय संख्याएँ (Rational Numbers)',
      content: (c) =>
        `**सक्षम एआई शिक्षक (कक्षा ${c} गणित - परिमेय संख्याएं):**\n\n` +
        `१. **परिभाषा:** वे संख्याएं जिन्हें $p/q$ के रूप में लिखा जा सके (जहाँ $p$ और $q$ पूर्णांक हैं तथा $q \\neq 0$), **परिमेय संख्याएँ** कहलाती हैं।\n` +
        `२. **उदाहरण:** $3/4, -5/7, 0, 8, 22/7$.\n` +
        `३. **दशमलव प्रसार:** परिमेय संख्याओं का दशमलव प्रसार या तो शांत (terminating) होता है या अनवसानी आवर्ती (non-terminating repeating) होता है।\n` +
        `४. दो परिमेय संख्याओं के बीच अनंत परिमेय संख्याएँ पाई जाती हैं।`
    },
    {
      keywords: ['दाब', 'pressure', 'बल', 'force', 'पास्कल', 'pascal'],
      subject: 'विज्ञान',
      title: 'बल तथा दाब (Force and Pressure)',
      content: (c) =>
        `**सक्षम एआई शिक्षक (कक्षा ${c} विज्ञान - बल और दाब):**\n\n` +
        `१. **दाब की परिभाषा:** प्रति एकांक क्षेत्रफल पर लंबवत लगने वाले बल को **दाब** कहते हैं।\n` +
        `२. **सूत्र:** $\\text{दाब} = \\frac{\\text{बल}}{\\text{क्षेत्रफल}} \\quad (P = \\frac{F}{A})$\n` +
        `३. **मात्रक:** दाब का SI मात्रक **पास्कल (Pa)** अथवा $\\text{N/m}^2$ है।\n` +
        `४. **उदाहरण:** चौड़े पट्टे वाले बैग कंधे पर कम दाब डालते हैं, जिससे भारी बैग उठाना भी आसान हो जाता है।`
    },
    {
      keywords: ['विद्युत', 'current', 'electricity', 'धारा', 'प्रतिरोध'],
      subject: 'विज्ञान',
      title: 'विद्युत धारा (Current Electricity)',
      content: (c) =>
        `**सक्षम एआई शिक्षक (कक्षा ${c} विज्ञान):**\n\n` +
        `१. **विद्युत धारा (I):** आवेश के प्रवाह की दर को विद्युत धारा कहते हैं ($I = Q/t$), मात्रक: **एम्पियर (A)**।\n` +
        `२. **ओम का नियम:** नियत ताप पर चालक के सिरों का विभवांतर उसमें प्रवाहित धारा के समानुपाती होता है ($V = I \\cdot R$)।`
    }
  ],
  en: [
    {
      keywords: ['gravity', 'gravitation', 'newton', 'gravitational'],
      subject: 'Science',
      title: 'Gravitation',
      content: (c) =>
        `**Saksham AI Tutor (Class ${c} Science — Gravitation):**\n\n` +
        `**Concept of Gravitation:**\n` +
        `Gravitation is the fundamental natural force of mutual attraction acting between all objects with mass in the universe.\n\n` +
        `1. **Newton's Universal Law of Gravitation:**\n` +
        `   Every object attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them:\n` +
        `   $$F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}$$\n` +
        `   *(Where $G = 6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ is the Universal Gravitational Constant)*\n\n` +
        `2. **Acceleration Due to Gravity ($g$):**\n` +
        `   On the surface of Earth, average $g \\approx 9.8 \\text{ m/s}^2$.\n\n` +
        `3. **Daily Life Example:**\n` +
        `   An apple falling from a tree accelerates downward towards Earth's center due to the Earth's gravitational pull.`
    },
    {
      keywords: ['rational', 'irrational', 'number', 'fraction', 'p/q'],
      subject: 'Mathematics',
      title: 'Rational & Irrational Numbers',
      content: (c) =>
        `**Saksham AI Tutor (Class ${c} Mathematics — Rational Numbers):**\n\n` +
        `**Definition & Key Properties:**\n\n` +
        `1. **Definition:** A number that can be expressed in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$, is called a **Rational Number**.\n` +
        `2. **Examples:** $\\frac{3}{5}, -\\frac{7}{2}, 0, 4, \\frac{22}{7}$.\n` +
        `3. **Decimal Representation:**\n` +
        `   • Terminating decimals (e.g., $7/4 = 1.75$)\n` +
        `   • Non-terminating recurring decimals (e.g., $1/3 = 0.333...$ or $0.\\bar{3}$)\n` +
        `4. **Number Line:** There are infinitely many rational numbers between any two given rational numbers.`
    },
    {
      keywords: ['pressure', 'force', 'pascal', 'thrust', 'area'],
      subject: 'Science',
      title: 'Force and Pressure',
      content: (c) =>
        `**Saksham AI Tutor (Class ${c} Science — Force & Pressure):**\n\n` +
        `1. **Definition of Pressure:** Pressure is defined as the perpendicular force (thrust) acting per unit surface area.\n` +
        `2. **Formula:** $$\\text{Pressure} = \\frac{\\text{Force}}{\\text{Area}} \\quad (P = \\frac{F}{A})$$\n` +
        `3. **SI Unit:** **Pascal (Pa)** or $\\text{N/m}^2$.\n` +
        `4. **Key Principle:** Decreasing surface area increases pressure (e.g. sharp needle tips, cutting edge of knives); increasing surface area decreases pressure (e.g. wide backpack straps, heavy truck tyres).`
    },
    {
      keywords: ['cell', 'organelle', 'mitochondria', 'nucleus', 'membrane', 'chloroplast'],
      subject: 'Science',
      title: 'Cell and Cell Organelles',
      content: (c) =>
        `**Saksham AI Tutor (Class ${c} Science — Cell Structure):**\n\n` +
        `• **Cell:** The fundamental structural and functional unit of all living organisms.\n` +
        `• **Mitochondria:** Known as the **"Powerhouse of the Cell"** because they synthesize energy in the form of ATP (Adenosine Triphosphate).\n` +
        `• **Nucleus:** Contains genetic material (DNA/Chromosomes) and directs all vital cellular activities.\n` +
        `• **Chloroplast:** Found in plant cells, containing green chlorophyll responsible for photosynthesis.`
    },
    {
      keywords: ['electricity', 'current', 'resistance', 'ohm', 'voltage', 'circuit'],
      subject: 'Science',
      title: 'Current Electricity',
      content: (c) =>
        `**Saksham AI Tutor (Class ${c} Science — Current Electricity):**\n\n` +
        `1. **Electric Current ($I$):** The rate of flow of electric charge ($I = Q / t$). SI unit: **Ampere (A)**.\n` +
        `2. **Potential Difference ($V$):** Work done in moving unit positive charge between two points ($V = W / Q$). SI unit: **Volt (V)**.\n` +
        `3. **Ohm's Law:** At constant temperature, current through a conductor is proportional to voltage across its ends: $$V = I \\cdot R$$\n` +
        `   *(Where $R$ is Electrical Resistance in Ohms $\\Omega$)*.`
    },
    {
      keywords: ['photosynthesis', 'chlorophyll', 'stomata', 'glucose'],
      subject: 'Science',
      title: 'Photosynthesis',
      content: (c) =>
        `**Saksham AI Tutor (Class ${c} Science — Plant Nutrition):**\n\n` +
        `**Photosynthesis** is the biochemical process by which green plants synthesize glucose using sunlight, chlorophyll, water, and atmospheric carbon dioxide.\n\n` +
        `• **Chemical Equation:** $$6CO_2 + 6H_2O + \\text{Sunlight} \\xrightarrow{\\text{Chlorophyll}} C_6H_{12}O_6 + 6O_2$$\n` +
        `• Oxygen ($O_2$) is released as a vital byproduct into the atmosphere.`
    }
  ]
};

/**
 * Searches syllabus dataset for matching chapter/lesson
 */
function searchCurriculumDatabase(query, studentClass, language) {
  const classObj = curriculumData[studentClass] || curriculumData[8] || {};
  const qLower = query.toLowerCase();

  for (const subjectKey in classObj) {
    const chapters = classObj[subjectKey] || [];
    for (const chapter of chapters) {
      const title = (language === 'mr' ? chapter.title_mr : language === 'hi' ? chapter.title_hi : chapter.title) || chapter.title || '';
      const desc = (language === 'mr' ? chapter.description_mr : language === 'hi' ? chapter.description_hi : chapter.description) || chapter.description || '';
      
      const titleMatch = title.toLowerCase().includes(qLower) || qLower.includes(title.toLowerCase().slice(0, 5));
      const descMatch = desc.toLowerCase().includes(qLower);

      if (titleMatch || descMatch) {
        // Found matching chapter
        const objectives = (language === 'mr' ? chapter.learningObjectives_mr : language === 'hi' ? chapter.learningObjectives_hi : chapter.learningObjectives) || chapter.learningObjectives || [];
        const objList = objectives.slice(0, 3).map((o, i) => `${i + 1}. ${o}`).join('\n');

        if (language === 'mr') {
          return `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी - ${title}):**\n\n` +
            `${desc}\n\n` +
            `**मुख्य अभ्यास मुद्दे:**\n${objList}\n\n` +
            `या प्रकरणातील कोणताही विशिष्ट प्रश्न किंवा गणितीय उदाहरण विचारल्यास मी टप्प्याटप्प्याने समजावून सांगेन.`;
        } else if (language === 'hi') {
          return `**सक्षम एआई शिक्षक (कक्षा ${studentClass} - ${title}):**\n\n` +
            `${desc}\n\n` +
            `**मुख्य अध्ययन बिंदु:**\n${objList}\n\n` +
            `इस अध्याय से संबंधित कोई भी विशिष्ट प्रश्न पूछें, मैं चरणबद्ध समाधान दूंगा।`;
        } else {
          return `**Saksham AI Tutor (Class ${studentClass} — ${title}):**\n\n` +
            `${desc}\n\n` +
            `**Key Learning Objectives:**\n${objList}\n\n` +
            `Feel free to ask any specific problem or textbook doubt from this chapter for step-by-step guidance!`;
        }
      }
    }
  }

  return null;
}

/**
 * Main response generator function
 */
export function generateAITutorResponse(question, studentClass = 8, language = 'mr') {
  if (!question || typeof question !== 'string' || question.trim() === '') {
    if (language === 'mr') return 'कृपया तुमचा प्रश्न विचारा.';
    if (language === 'hi') return 'कृपया अपना प्रश्न पूछें।';
    return 'Please enter a valid question.';
  }

  const qLower = question.toLowerCase();
  const langKey = ['mr', 'hi', 'en'].includes(language) ? language : 'mr';
  const list = knowledgeBase[langKey] || knowledgeBase.mr;

  // 1. Direct keyword match in curated knowledge base
  for (const item of list) {
    const matched = item.keywords.some((k) => qLower.includes(k.toLowerCase()));
    if (matched) {
      return item.content(studentClass);
    }
  }

  // 2. Cross-language keyword fallback (e.g. English query asked while Marathi mode is active)
  for (const lang of ['en', 'mr', 'hi']) {
    const altList = knowledgeBase[lang] || [];
    for (const item of altList) {
      const matched = item.keywords.some((k) => qLower.includes(k.toLowerCase()));
      if (matched) {
        return item.content(studentClass);
      }
    }
  }

  // 3. Search structured curriculumData.js
  const syllabusMatch = searchCurriculumDatabase(question, studentClass, language);
  if (syllabusMatch) {
    return syllabusMatch;
  }

  // 4. Pedagogical context-aware default response
  if (language === 'mr') {
    return `**सक्षम एआय शिक्षक (इयत्ता ${studentClass} वी):**\n\n` +
      `महाराष्ट्र राज्य मंडळाच्या इयत्ता ${studentClass} वी च्या अभ्यासक्रमानुसार तुमच्या प्रश्नाचा अभ्यास केला.\n\n` +
      `• **अभ्यास टीप:** या घटकाची मूळ व्याख्या समजून घेऊन पाठ्यपुस्तकातील स्वाध्याय सोडवल्यास संकल्पना अधिक स्पष्ट होईल.\n` +
      `• **अधिक मदत:** तुम्हाला गणित, विज्ञान किंवा इंग्रजीतील कोणताही नेमका प्रश्न विचारायचा असल्यास येथे टाईप करा किंवा माईक वापरा!`;
  } else if (language === 'hi') {
    return `**सक्षम एआई शिक्षक (कक्षा ${studentClass}):**\n\n` +
      `महाराष्ट्र स्टेट बोर्ड कक्षा ${studentClass} पाठ्यक्रम के अनुसार आपके प्रश्न का विश्लेषण किया गया है:\n\n` +
      `• **अध्ययन सुझाव:** इस विषय के मुख्य सूत्रों और परिभाषाओं को लिखकर अभ्यास करें।\n` +
      `• **आगे सहायता:** कृपया अपना प्रश्न अधिक विशिष्ट रूप से पूछें ताकि मैं चरण-दर-चरण समाधान दे सकूँ!`;
  } else {
    return `**Saksham AI Tutor (Class ${studentClass}):**\n\n` +
      `According to the Maharashtra State Board Class ${studentClass} Curriculum:\n\n` +
      `• **Study Tip:** Break down complex topics into fundamental definitions, core formulas, and real-world examples.\n` +
      `• **Next Step:** You can ask any specific numerical problem, definition, or grammar doubt in Mathematics, Science, or English!`;
  }
}
