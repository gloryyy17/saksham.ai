export default function handler(req, res) {
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

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  const { question = '', studentClass = 8, language = 'mr' } = body || {};

  let breakdown = {};
  if (language === 'mr') {
    breakdown = {
      stepGiven: "दिलेली माहिती: त्रिकोणाचा पाया (b) = १२ सेमी, उंची (h) = ८ सेमी.",
      stepFormula: "वापरण्याचे सूत्र: त्रिकोणाचे क्षेत्रफळ = १/२ × पाया × उंची (A = ½ × b × h)",
      stepCalculation: "पायरीनुसार सोडवणूक:\n१. सूत्रामध्ये किमती भरा: A = ½ × १२ × ८\n२. गणना: A = ६ × ८\n३. A = ४८ चौ. सेमी.",
      stepAnswer: "अंतिम उत्तर: दिलेल्या त्रिकोणाचे क्षेत्रफळ ४८ चौ. सेमी. आहे.",
      stepExplanation: "स्पष्टीकरण: त्रिकोणाचे क्षेत्रफळ हे काटकोन चौकोनाच्या निम्मे असते, म्हणून १/२ ने गुणले जाते."
    };
  } else if (language === 'hi') {
    breakdown = {
      stepGiven: "दिया गया है: त्रिभुज का आधार (b) = 12 सेमी, ऊंचाई (h) = 8 सेमी।",
      stepFormula: "सूत्र: त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊंचाई (A = ½ × b × h)",
      stepCalculation: "चरण-दर-चरण हल:\n1. मान रखें: A = ½ × 12 × 8\n2. गणना: A = 6 × 8\n3. A = 48 वर्ग सेमी।",
      stepAnswer: "अंतिम उत्तर: त्रिभुज का क्षेत्रफल 48 सेमी² है।",
      stepExplanation: "सरल व्याख्या: त्रिभुज का क्षेत्रफल समान आधार और ऊंचाई वाले आयत का आधा होता है।"
    };
  } else {
    breakdown = {
      stepGiven: "Given in the problem: Base of triangle (b) = 12 cm, Height (h) = 8 cm.",
      stepFormula: "Core Formula: Area of Triangle = ½ × Base × Height (A = ½ × b × h)",
      stepCalculation: "Step-by-step calculation:\n1. Substitute values: A = ½ × 12 × 8\n2. Multiply: A = 6 × 8\n3. A = 48 sq cm.",
      stepAnswer: "Final Answer: Area of the triangle is 48 cm².",
      stepExplanation: "Concept: The area of any triangle is exactly half of the surrounding bounding rectangle."
    };
  }

  return res.status(200).json({
    success: true,
    extractedQuestion: question || "Find the area of triangle with base 12cm and height 8cm",
    language,
    studentClass,
    solution: breakdown
  });
}
