// Class-specific diagnostic readiness assessment data for onboarding (Classes 6-10)

export const diagnosticAssessments = {
  8: [
    {
      id: "diag_c8_q1",
      question: "Which of the following is an irrational number?",
      question_mr: "खालीलपैकी कोणती संख्या अपरिमेय संख्या आहे?",
      question_hi: "निम्नलिखित में से कौन सी एक अपरिमेय संख्या है?",
      options: ["3/5", "-7", "√3", "0"],
      correctIndex: 2,
      explanation: "√3 cannot be written as p/q with integer p and q.",
      explanation_mr: "√३ चे मूल्य अखंड अनावर्ती दशांश असल्याने ती अपरिमेय संख्या आहे.",
      explanation_hi: "√3 को p/q के रूप में नहीं लिखा जा सकता, अतः यह अपरिमेय है।"
    },
    {
      id: "diag_c8_q2",
      question: "What is the SI unit of pressure?",
      question_mr: "दाबाचे एस.आय. (SI) एकक कोणते आहे?",
      question_hi: "दाब का SI मात्रक क्या है?",
      options: ["Newton", "Pascal (N/m²)", "Joule", "Watt"],
      correctIndex: 1,
      explanation: "Pressure is force per unit area (N/m² or Pascal).",
      explanation_mr: "दाब = बल / क्षेत्रफळ म्हणजेच पास्कल (N/m²).",
      explanation_hi: "दाब = बल / क्षेत्रफल यानी पास्कल (N/m²)।"
    },
    {
      id: "diag_c8_q3",
      question: "Kingdom Monera includes which type of organisms?",
      question_mr: "मोनेरा सृष्टीमध्ये कोणत्या प्रकारच्या सजीवांचा समावेश होतो?",
      question_hi: "मोनेरा जगत में किस प्रकार के सजीव शामिल हैं?",
      options: ["Unicellular Prokaryotes (Bacteria)", "Multicellular Fungi", "Green Plants", "Animals"],
      correctIndex: 0,
      explanation: "Kingdom Monera consists of unicellular prokaryotes like bacteria.",
      explanation_mr: "मोनेरा सृष्टीत जिवाणूसारखे एकपेशीय आदिकेंद्रकी सजीव येतात.",
      explanation_hi: "मोनेरा जगत में जीवाणु जैसे एककोशिकीय प्रोकैरियोटिक जीव आते हैं।"
    }
  ],
  10: [
    {
      id: "diag_c10_q1",
      question: "In Cramer's rule for simultaneous equations, the formula for x is:",
      question_mr: "क्रेमरच्या पद्धतीमध्ये x ची किंमत काढण्याचे सूत्र कोणते?",
      question_hi: "क्रेमर के नियम में x का मान ज्ञात करने का सूत्र क्या है?",
      options: ["x = Dx / D", "x = D / Dx", "x = Dy / D", "x = Dx × D"],
      correctIndex: 0,
      explanation: "By Cramer's rule, x = Dx / D (where D ≠ 0).",
      explanation_mr: "क्रेमरच्या नियमानुसार x = Dx / D.",
      explanation_hi: "क्रेमर के नियमानुसार x = Dx / D।"
    },
    {
      id: "diag_c10_q2",
      question: "According to Kepler's Third Law, T² is proportional to:",
      question_mr: "केप्लरच्या तिसऱ्या नियमानुसार, T² हा कशाला समानुपाती असतो?",
      question_hi: "केप्लर के तीसरे नियम के अनुसार T² किसके समानुपाती होता है?",
      options: ["r", "r²", "r³", "1/r"],
      correctIndex: 2,
      explanation: "T² ∝ r³ where T is orbital period and r is mean distance.",
      explanation_mr: "आवर्तकालाचा वर्ग T² ∝ r³ (सूर्यापासूनच्या अंतराचा घन).",
      explanation_hi: "परिक्रमण काल का वर्ग T² ∝ r³ (औसत दूरी का घन)।"
    },
    {
      id: "diag_c10_q3",
      question: "The value of acceleration due to gravity (g) on the Earth's surface is approximately:",
      question_mr: "पृथ्वीच्या पृष्ठभागावर गुरुत्वीय त्वरण (g) चे मूल्य अंदाजे किती असते?",
      question_hi: "पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का मान लगभग कितना होता है?",
      options: ["9.8 m/s²", "98 m/s²", "0.98 m/s²", "0 m/s²"],
      correctIndex: 0,
      explanation: "Standard g = 9.8 m/s² on Earth's surface.",
      explanation_mr: "पृथ्वीच्या पृष्ठभागावर g = ९.८ m/s² असते.",
      explanation_hi: "पृथ्वी की सतह पर मानक g = 9.8 m/s² होता है।"
    }
  ],
  6: [
    {
      id: "diag_c6_q1",
      question: "How many lines pass through a single given point?",
      question_mr: "एका बिंदूतून जाणाऱ्या किती रेषा काढता येतात?",
      question_hi: "एक बिंदु से होकर कितनी रेखाएं खींची जा सकती हैं?",
      options: ["Only 1", "Only 2", "Infinite (असंख्य)", "None"],
      correctIndex: 2,
      explanation: "Infinite lines can pass through a single point.",
      explanation_mr: "एकाच बिंदूतून असंख्य रेषा काढता येतात.",
      explanation_hi: "एक बिंदु से होकर अनंत रेखाएं गुजर सकती हैं।"
    }
  ],
  7: [
    {
      id: "diag_c7_q1",
      question: "An angle bisector divides an angle of 80° into two angles of:",
      question_mr: "८०° च्या कोनाचा कोनदुभाजक त्या कोनाचे किती मापाच्या दोन भागात विभाजन करतो?",
      question_hi: "80° के कोण का समद्विभाजक उसे कितने अंश के दो भागों में विभाजित करता है?",
      options: ["40° and 40°", "50° and 30°", "80° and 0°", "45° and 35°"],
      correctIndex: 0,
      explanation: "80° ÷ 2 = 40° each.",
      explanation_mr: "८०° चे दोन समान भाग म्हणजेच प्रत्येकी ४०°.",
      explanation_hi: "80° के दो बराबर भाग यानी प्रत्येक 40°।"
    }
  ],
  9: [
    {
      id: "diag_c9_q1",
      question: "Displacement is a:",
      question_mr: "विस्थापन ही कोणती राशी आहे?",
      question_hi: "विस्थापन कैसी राशि है?",
      options: ["Vector quantity (सदिश राशी)", "Scalar quantity (अदिश राशी)", "Neither", "Constant"],
      correctIndex: 0,
      explanation: "Displacement has both magnitude and direction, so it is a vector.",
      explanation_mr: "विस्थापनाला परिमाण व दिशा दोन्ही असल्याने ती सदिश राशी आहे.",
      explanation_hi: "विस्थापन में परिमाण और दिशा दोनों होते हैं, अतः यह सदिश राशि है।"
    }
  ]
};

export function getDiagnosticQuestionsForClass(classId) {
  const cId = parseInt(classId, 10);
  return diagnosticAssessments[cId] || diagnosticAssessments[8];
}
