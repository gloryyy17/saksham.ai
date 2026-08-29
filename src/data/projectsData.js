// Project-Based Learning Data for Maharashtra State Board Classes 6 to 10

export const projectsData = [
  {
    id: "proj_c8_math_area",
    classId: 8,
    subjectId: "mathematics",
    title: "Measure Your Room & Calculate Surface Area and Tile Costs",
    title_mr: "तुमच्या खोलीचे मोजमाप, क्षेत्रफळ आणि फरशी खर्चाची गणना",
    title_hi: "कमरे का माप, क्षेत्रफल और टाइल लागत की गणना",
    category: "STEM & Practical Mathematics",
    difficulty: "medium",
    estimatedHours: 3,
    points: 100,
    skillsAwarded: ["math_problem_solving", "practical_inquiry", "project_execution"],
    problemStatement: "Most households need flooring or painting estimates. Measure the perimeter and area of a room in your house using a measuring tape or ruler, calculate required 2×2 ft tiles, and estimate total cost.",
    problemStatement_mr: "घरातील एका खोलीचे लांबी आणि रुंदी मोजा. एकूण क्षेत्रफळ (चौरस फूट) काढा, २×२ फुटांच्या किती फरश्या लागतील आणि एकूण अंदाजे खर्च किती येईल याची नोंद करा.",
    problemStatement_hi: "अपने घर के किसी एक कमरे की लंबाई और चौड़ाई मापें। कुल क्षेत्रफल ज्ञात करें और 2×2 फीट की कितनी टाइलें लगेंगी तथा कुल खर्च का अनुमान लगाएं।",
    instructions: [
      "1. Use a measuring tape or 1-meter ruler to measure length (L) and width (W) of your study room or bedroom.",
      "2. Calculate Floor Area = L × W (in square meters or square feet).",
      "3. Account for doors and cupboards to find net usable floor space.",
      "4. Calculate the number of 60cm × 60cm floor tiles needed with 5% extra for edge cutting wastage.",
      "5. Prepare a neat table showing your measurements, step-by-step calculations, and sketch the floor plan."
    ],
    instructions_mr: [
      "१. मोजपट्टी किंवा टेपच्या साहाय्याने खोलीची लांबी (L) आणि रुंदी (W) मोजा.",
      "२. क्षेत्रफळ = लांबी × रुंदी (चौरस मीटर किंवा चौरस फूट) काढा.",
      "३. दरवाजा व कपाटाची जागा वजा करून निव्वळ जागा निश्चित करा.",
      "४. ६० सेमी × ६० सेमी आकाराच्या किती फरश्या लागतील ते काढा (५% जास्तीचा अपव्यय गृहीत धरा).",
      "५. तुमचे मोजमाप, सूत्रे आणि हिशोब एका सुबक तक्त्यात लिहून खोलीचा कच्चा नकाशा जोडा."
    ],
    instructions_hi: [
      "1. मापने वाले फीते से कमरे की लंबाई और चौड़ाई मापें।",
      "2. फर्श का क्षेत्रफल = लंबाई × चौड़ाई ज्ञात करें।",
      "3. 60 सेमी × 60 सेमी की कितनी टाइलों की आवश्यकता होगी इसकी गणना करें।",
      "4. एक स्पष्ट तालिका बनाकर अपने आंकड़े और गणना प्रस्तुत करें।"
    ],
    rubric: [
      { criterion: "Accuracy of Measurements & Floor Plan", points: 30 },
      { criterion: "Correctness of Area & Tile Calculations", points: 40 },
      { criterion: "Neat Presentation & Observations", points: 30 }
    ]
  },
  {
    id: "proj_c8_sci_water",
    classId: 8,
    subjectId: "science",
    title: "Household Water Conservation & Usage Audit (Kopargaon Region Case Study)",
    title_mr: "घरगुती जलसंधारण व पाण्याचा वापर लेखापरीक्षण (कोपरगाव परिसर अभ्यास)",
    title_hi: "घरेलू जल संरक्षण एवं जल उपयोग ऑडिट (कोपरगांव क्षेत्र अध्ययन)",
    category: "Environmental & Practical Science",
    difficulty: "easy",
    estimatedHours: 4,
    points: 100,
    skillsAwarded: ["practical_inquiry", "digital_literacy", "communication"],
    problemStatement: "Track daily water consumption in your home across cooking, cleaning, bathing, and gardening for 3 consecutive days. Propose 3 practical ways to save at least 20% water daily.",
    problemStatement_mr: "३ दिवस सलग तुमच्या घरातील स्वयंपाक, भांडी, आंघोळ आणि झाडांसाठी लागणाऱ्या पाण्याचा हिशोब ठेवा. दैनंदिन वापरात किमान २०% पाणी बचत करण्यासाठी ३ उपाय सुचवा.",
    problemStatement_hi: "3 दिनों तक अपने घर में दैनिक जल उपयोग (खाना पकाना, सफाई, नहाना आदि) का हिसाब रखें और 20% जल बचाने के 3 व्यावहारिक उपाय सुझाएं।",
    instructions: [
      "1. Measure bucket capacities used in your house (e.g. 1 bucket = 15 Litres).",
      "2. Record daily bucket count for drinking/cooking, bathing, washing clothes/dishes, and plants.",
      "3. Calculate average daily water used per person.",
      "4. Identify sources of water wastage (dripping taps, overflowing tanks).",
      "5. Write a short 1-page action plan on how your family can conserve water."
    ],
    instructions_mr: [
      "१. घरातील बादलीची क्षमता मोजा (उदा. १ बादली = १५ लिटर).",
      "२. पिणे, स्वयंपाक, आंघोळ, कपडे-भांडी आणि बागेसाठी लागणाऱ्या बादल्यांची ३ दिवस नोंद ठेवा.",
      "३. घरातील प्रति व्यक्ती सरासरी दैनंदिन वापर काढा.",
      "४. गळके नळ व वाया जाणारे पाणी ओळखून ते रोखण्याचे उपाय लिहा.",
      "५. कुटुंबासाठी पाणी बचतीचा १ पानाचा कृती आराखडा तयार करा."
    ],
    instructions_hi: [
      "1. घर की बाल्टी की क्षमता (उदा. 15 लीटर) के अनुसार 3 दिन का जल उपयोग नोट करें।",
      "2. प्रति व्यक्ति दैनिक औसत जल खपत की गणना करें।",
      "3. पानी की बर्बादी रोकने के उपाय लिखकर अपनी रिपोर्ट तैयार करें।"
    ],
    rubric: [
      { criterion: "Data Collection for 3 Days", points: 35 },
      { criterion: "Mathematical Analysis & Per-Person Average", points: 35 },
      { criterion: "Actionable Water Saving Plan", points: 30 }
    ]
  },
  {
    id: "proj_c10_sci_solar",
    classId: 10,
    subjectId: "science1",
    title: "Build a Simple Solar Oven / Reflection Concentrator Model",
    title_mr: "साधी सौर चूल / सूर्यप्रकाश परावर्तक प्रतिकृती तयार करणे",
    title_hi: "सरल सौर कुकर / परावर्तक मॉडल का निर्माण",
    category: "Applied Physics & Renewable Energy",
    difficulty: "hard",
    estimatedHours: 5,
    points: 100,
    skillsAwarded: ["practical_inquiry", "project_execution", "math_problem_solving"],
    problemStatement: "Demonstrate the greenhouse effect and concentration of solar thermal energy using a cardboard box, aluminium foil, and black absorbent surface to heat water.",
    problemStatement_mr: "पुठ्ठ्याचा खोका, ॲल्युमिनियम फॉइल आणि काळा रंग वापरून सौर ऊर्जा शोषून पाणी गरम करणारी साधी सौर चूल तयार करा.",
    problemStatement_hi: "कार्डबोर्ड बॉक्स और एल्युमिनियम फॉइल की सहायता से एक साधारण सोलर कुकर मॉडल बनाएं और तापमान वृद्धि दर्ज करें।",
    instructions: [
      "1. Line the inside of a cardboard box with shiny aluminium foil to reflect sunlight.",
      "2. Paint a small metal bowl or container matte black inside to absorb heat.",
      "3. Cover the top with a transparent plastic sheet or glass plate.",
      "4. Place 100ml water in sunlight and record temperature rise every 15 minutes for 1 hour."
    ],
    instructions_mr: [
      "१. खोक्याच्या आत ॲल्युमिनियम फॉइल चिकटवून सूर्यप्रकाश एका बिंदूवर परावर्तित करा.",
      "२. उष्णता शोषण्यासाठी आतील लहान धातूच्या भांड्याला काळा रंग द्या.",
      "३. वरून पारदर्शक काच किंवा प्लॅस्टिक शीट लावा.",
      "४. १०० मिली पाणी ठेवून दर १५ मिनिटांनी पाण्याच्या तापमानातील वाढ मोजा."
    ],
    instructions_hi: [
      "1. कार्डबोर्ड में एल्युमिनियम फॉइल लगाएं।",
      "2. काले बर्तन में 100 मिली पानी रखें और पारदर्शी ढक्कन लगाएं।",
      "3. धूप में रखकर हर 15 मिनट में तापमान वृद्धि नोट करें।"
    ],
    rubric: [
      { criterion: "Model Construction & Materials", points: 30 },
      { criterion: "Experimental Data & Temperature Readings", points: 40 },
      { criterion: "Scientific Conclusions on Energy Conversion", points: 30 }
    ]
  }
];

export function getProjectsForClass(classId) {
  const cId = parseInt(classId, 10);
  return projectsData.filter(p => p.classId === cId || (cId >= 6 && cId <= 8 && p.classId === 8) || (cId >= 9 && p.classId === 10));
}

export function getProjectById(projectId) {
  return projectsData.find(p => p.id === projectId) || null;
}
