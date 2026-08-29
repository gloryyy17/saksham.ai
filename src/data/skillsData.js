// SAKSHAM.AI Skill Passport Architecture & Formula

export const skillsTaxonomy = [
  {
    id: "math_problem_solving",
    name: "Mathematics & Problem Solving",
    name_mr: "गणितीय समस्या निवारण व तर्कशुद्धता",
    name_hi: "गणितीय समस्या समाधान और तार्किकता",
    category: "academic",
    icon: "Calculator",
    color: "blue",
    description: "Ability to apply algebraic formulas, geometric logic, and arithmetic calculations.",
    description_mr: "बीजगणिती सूत्रे, भूमितीचे नियम आणि अंकगणिताचे अचूक उपयोजन करण्याची क्षमता.",
    description_hi: "बीजगणितीय सूत्र और ज्यामितीय नियमों को लागू करने की क्षमता।"
  },
  {
    id: "practical_inquiry",
    name: "Scientific Inquiry & Observation",
    name_mr: "प्रायोगिक व वैज्ञानिक संशोधन",
    name_hi: "प्रायोगिक एवं वैज्ञानिक अन्वेषण",
    category: "practical",
    icon: "Microscope",
    color: "emerald",
    description: "Hands-on data collection, hypothesis testing, and laboratory reasoning.",
    description_mr: "प्रत्यक्ष निरीक्षण, विज्ञानाचे प्रयोग आणि नोंदींचे अचूक विश्लेषण.",
    description_hi: "प्रायोगिक आंकड़े एकत्रित करना और वैज्ञानिक निष्कर्ष निकालना।"
  },
  {
    id: "digital_literacy",
    name: "Digital & Technology Literacy",
    name_mr: "डिजिटल व तंत्रज्ञान साक्षरता",
    name_hi: "डिजिटल एवं तकनीकी साक्षरता",
    category: "digital",
    icon: "Cpu",
    color: "indigo",
    description: "Using offline digital tools, AI learning systems, and interactive simulations.",
    description_mr: "डिजिटल साधने, ऑफलाइन तंत्रज्ञान आणि एआय सहाय्यकाचा प्रभावी वापर.",
    description_hi: "डिजिटल टूल्स और एआई शिक्षण का प्रभावी उपयोग।"
  },
  {
    id: "project_execution",
    name: "Project & Innovation Execution",
    name_mr: "प्रकल्प व नवनिर्मिती अंमलबजावणी",
    name_hi: "परियोजना एवं नवाचार क्रियान्वयन",
    category: "project",
    icon: "Hammer",
    color: "orange",
    description: "Translating theoretical concepts into real-world models and actionable prototypes.",
    description_mr: "पुस्तकी ज्ञानाचे प्रत्यक्ष मॉडेल किंवा प्रयोगामध्ये रूपांतर करण्याची कौशल्यक्षमता.",
    description_hi: "सिद्धांतों को वास्तविक मॉडल और व्यावहारिक प्रोजेक्ट में बदलना।"
  },
  {
    id: "communication",
    name: "Communication & Expression",
    name_mr: "संवाद व भाषिक अभिव्यक्ती",
    name_hi: "संवाद एवं भाषाई अभिव्यक्ति",
    category: "communication",
    icon: "MessageSquare",
    color: "teal",
    description: "Clear presentation of solutions in Marathi, Hindi, and English.",
    description_mr: "मराठी, हिंदी आणि इंग्रजीतून विचार व उत्तरे सुस्पष्टपणे मांडणे.",
    description_hi: "मराठी, हिंदी और अंग्रेजी में स्पष्ट अभिव्यक्ति।"
  }
];

// Strict Transparent Skill Formula:
// Skill Score = (Course Completion × 0.30) + (Quiz Performance × 0.30) + (Project Performance × 0.40)
export function calculateSkillScore(courseCompletionPct, quizAveragePct, projectAveragePct) {
  const completionPart = (courseCompletionPct || 0) * 0.30;
  const quizPart = (quizAveragePct || 0) * 0.30;
  const projectPart = (projectAveragePct || 0) * 0.40;

  const total = Math.round(completionPart + quizPart + projectPart);
  return Math.min(100, Math.max(0, total));
}
