// Age-appropriate Maharashtra State Board Opportunities (Competitions, Science Exhibitions, Scholarships)

export const opportunitiesData = [
  {
    id: "opp_inspire_manak",
    title: "INSPIRE Awards - MANAK (Department of Science & Technology)",
    title_mr: "इन्स्पायर अवॉर्ड्स - मानक (विज्ञान व तंत्रज्ञान विभाग, भारत सरकार)",
    title_hi: "इन्स्पायर अवार्ड्स - मानक (विज्ञान एवं प्रौद्योगिकी विभाग)",
    organization: "Government of India & Maharashtra State Board",
    category: "exhibition",
    minClass: 6,
    maxClass: 10,
    deadline: "2026-10-15",
    prize: "₹10,000 Project Grant + State Showcase",
    description: "Submit an original grassroots innovation or practical scientific idea addressing rural challenges (like water conservation, agriculture, energy).",
    description_mr: "ग्रामीण भागातील समस्यांवर (पाणी, शेती, ऊर्जा) आधारित नाविन्यपूर्ण वैज्ञानिक कल्पनेची किंवा मॉडेलची राज्यस्तरीय निवड.",
    description_hi: "ग्रामीण चुनौतियों पर आधारित नवाचार और व्यावहारिक वैज्ञानिक मॉडल के लिए ₹10,000 का अनुदान।",
    requiredSkills: [
      { skillId: "practical_inquiry", weight: 0.45 },
      { skillId: "project_execution", weight: 0.35 },
      { skillId: "communication", weight: 0.20 }
    ],
    missingSkillRecommendation: {
      skillId: "practical_inquiry",
      recommendedSubject: "science",
      recommendedChapterId: "c8_sci_ch3",
      recommendedChapterTitle: "Force and Pressure / Living World",
      recommendedChapterTitle_mr: "बल आणि दाब / सजीव सृष्टी",
      recommendedChapterTitle_hi: "बल और दाब / सजीव जगत"
    }
  },
  {
    id: "opp_nmms_scholarship",
    title: "National Means-cum-Merit Scholarship Scheme (NMMS) 2026",
    title_mr: "राष्ट्रीय आर्थिक दुर्बल घटक शिष्यवृत्ती योजना (NMMS २०२६)",
    title_hi: "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति योजना (NMMS 2026)",
    organization: "Maharashtra State Council of Examination (MSCE Pune)",
    category: "scholarship",
    minClass: 8,
    maxClass: 8,
    deadline: "2026-11-30",
    prize: "₹12,000 per year Scholarship for Classes 9 to 12",
    description: "Prestigious statewide scholarship exam testing Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT) in Science, Social Science, and Mathematics.",
    description_mr: "महाराष्ट्र राज्य परीक्षा परिषद पुणे द्वारे इयत्ता ८ वी च्या विद्यार्थ्यांसाठी शिष्यवृत्ती परीक्षा (बौद्धिक क्षमता चाचणी व शालेय क्षमता चाचणी).",
    description_hi: "कक्षा 8 के विद्यार्थियों के लिए राज्य स्तरीय योग्यता छात्रवृत्ति परीक्षा (₹12,000 प्रति वर्ष)।",
    requiredSkills: [
      { skillId: "math_problem_solving", weight: 0.50 },
      { skillId: "practical_inquiry", weight: 0.30 },
      { skillId: "communication", weight: 0.20 }
    ],
    missingSkillRecommendation: {
      skillId: "math_problem_solving",
      recommendedSubject: "mathematics",
      recommendedChapterId: "c8_math_ch1",
      recommendedChapterTitle: "Rational Numbers & Parallel Lines",
      recommendedChapterTitle_mr: "परिमेय संख्या व समांतर रेषा",
      recommendedChapterTitle_hi: "परिमेय संख्याएं और समानांतर रेखाएं"
    }
  },
  {
    id: "opp_state_science_fair",
    title: "Maharashtra State Level Children's Science Fair",
    title_mr: "महाराष्ट्र राज्यस्तरीय बाल विज्ञान प्रदर्शन २०२६",
    title_hi: "महाराष्ट्र राज्य स्तरीय बाल विज्ञान मेला 2026",
    organization: "SCERT Maharashtra",
    category: "competition",
    minClass: 6,
    maxClass: 10,
    deadline: "2026-12-05",
    prize: "Trophy, State Certificate & Research Mentorship",
    description: "Demonstrate practical science models focusing on Sustainable Agriculture, Clean Tech, and Smart Rural Systems in Ahmednagar/Kopargaon district and state finals.",
    description_mr: "शाश्वत शेती, पर्यावरणपूरक तंत्रज्ञान आणि ग्रामीण विकासावर आधारित कार्यक्षम वैज्ञानिक प्रतिकृती प्रदर्शन.",
    description_hi: "टिकाऊ कृषि और पर्यावरण अनुकूल तकनीकी मॉडलों के लिए राज्य स्तरीय प्रदर्शनी।",
    requiredSkills: [
      { skillId: "project_execution", weight: 0.40 },
      { skillId: "practical_inquiry", weight: 0.40 },
      { skillId: "digital_literacy", weight: 0.20 }
    ],
    missingSkillRecommendation: {
      skillId: "project_execution",
      recommendedSubject: "projects",
      recommendedChapterId: "proj_c8_sci_water",
      recommendedChapterTitle: "Household Water Audit & Solar Concentrator",
      recommendedChapterTitle_mr: "घरगुती जलसंधारण प्रकल्प",
      recommendedChapterTitle_hi: "जल संरक्षण एवं सोलर प्रोजेक्ट"
    }
  },
  {
    id: "opp_junior_tech_challenge",
    title: "Maharashtra Junior Digital Problem Solvers Challenge",
    title_mr: "महाराष्ट्र कनिष्ठ डिजिटल समस्या निवारण आव्हान",
    title_hi: "महाराष्ट्र जूनियर डिजिटल प्रॉब्लम सॉल्वर्स चैलेंज",
    organization: "Saksham Foundation & STEM India",
    category: "workshop",
    minClass: 7,
    maxClass: 10,
    deadline: "2026-09-28",
    prize: "Digital STEM Kit & Coding Certificate",
    description: "Solve offline logic puzzles, algorithm charts, and build digital knowledge posters using lightweight offline technology.",
    description_mr: "ऑफलाइन तर्कशुद्ध कोडी, फ्लोचार्ट आणि डिजिटल साक्षरतेवर आधारित स्पर्धा.",
    description_hi: "डिजिटल साक्षरता, एल्गोरिदम और तकनीकी प्रोजेक्ट्स पर आधारित ऑनलाइन-ऑफलाइन प्रतियोगिता।",
    requiredSkills: [
      { skillId: "digital_literacy", weight: 0.50 },
      { skillId: "math_problem_solving", weight: 0.30 },
      { skillId: "communication", weight: 0.20 }
    ],
    missingSkillRecommendation: {
      skillId: "digital_literacy",
      recommendedSubject: "science1",
      recommendedChapterId: "c10_sci1_ch1",
      recommendedChapterTitle: "Gravitation & Computational Physics",
      recommendedChapterTitle_mr: "गुरुत्वाकर्षण आणि डिजिटल सूत्रे",
      recommendedChapterTitle_hi: "गुरुत्वाकर्षण और डिजिटल गणना"
    }
  }
];

// Weighted match score calculator
export function calculateOpportunityMatch(opportunity, studentSkills = {}) {
  let weightedScore = 0;
  let totalWeight = 0;
  let lowestSkillId = null;
  let lowestSkillScore = 100;

  for (const req of opportunity.requiredSkills) {
    const studentScore = studentSkills[req.skillId] !== undefined ? studentSkills[req.skillId] : 60; // Default baseline
    weightedScore += studentScore * req.weight;
    totalWeight += req.weight;

    if (studentScore < lowestSkillScore) {
      lowestSkillScore = studentScore;
      lowestSkillId = req.skillId;
    }
  }

  const matchRate = totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 70;
  return {
    matchRate: Math.min(98, Math.max(45, matchRate)),
    missingSkillId: lowestSkillId || opportunity.requiredSkills[0]?.skillId,
    lowestSkillScore
  };
}

export function getOpportunitiesForClass(classId) {
  const cId = parseInt(classId, 10);
  return opportunitiesData.filter(opp => cId >= opp.minClass && cId <= opp.maxClass);
}

export function getOpportunityById(id) {
  return opportunitiesData.find(opp => opp.id === id) || null;
}
