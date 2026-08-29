// Maharashtra State Board Structured Curriculum (Classes 6 to 10)
// Original educational summaries, learning objectives, lessons, examples, practice, and quizzes.

export const classesData = [
  { id: 6, name: "Class 6", name_mr: "इयत्ता ६ वी", name_hi: "कक्षा 6", description: "Maharashtra State Board Class 6 Curriculum" },
  { id: 7, name: "Class 7", name_mr: "इयत्ता ७ वी", name_hi: "कक्षा 7", description: "Maharashtra State Board Class 7 Curriculum" },
  { id: 8, name: "Class 8", name_mr: "इयत्ता ८ वी", name_hi: "कक्षा 8", description: "Maharashtra State Board Class 8 Curriculum" },
  { id: 9, name: "Class 9", name_mr: "इयत्ता ९ वी", name_hi: "कक्षा 9", description: "Maharashtra State Board Class 9 Curriculum" },
  { id: 10, name: "Class 10", name_mr: "इयत्ता १० वी", name_hi: "कक्षा 10", description: "Maharashtra State Board Class 10 Curriculum (SSC Board)" }
];

export const subjectsData = [
  { id: "mathematics", name: "Mathematics", name_mr: "गणित", name_hi: "गणित", icon: "Calculator", color: "blue", applicableClasses: [6, 7, 8, 9, 10] },
  { id: "science", name: "Science", name_mr: "विज्ञान", name_hi: "विज्ञान", icon: "FlaskConical", color: "emerald", applicableClasses: [6, 7, 8] },
  { id: "science1", name: "Science & Technology Part 1", name_mr: "विज्ञान आणि तंत्रज्ञान भाग १", name_hi: "विज्ञान और प्रौद्योगिकी भाग 1", icon: "Atom", color: "emerald", applicableClasses: [9, 10] },
  { id: "science2", name: "Science & Technology Part 2", name_mr: "विज्ञान आणि तंत्रज्ञान भाग २", name_hi: "विज्ञान और प्रौद्योगिकी भाग 2", icon: "Dna", color: "teal", applicableClasses: [9, 10] },
  { id: "english", name: "English (My English Book)", name_mr: "इंग्रजी", name_hi: "अंग्रेजी", icon: "BookOpen", color: "purple", applicableClasses: [6, 7, 8, 9, 10] },
  { id: "marathi", name: "Marathi (मराठी सुलभभारती / बालभारती)", name_mr: "मराठी", name_hi: "मराठी", icon: "Languages", color: "orange", applicableClasses: [6, 7, 8, 9, 10] },
  { id: "hindi", name: "Hindi (हिंदी सुलभभारती / लोकभारती)", name_mr: "हिंदी", name_hi: "हिंदी", icon: "BookMarked", color: "amber", applicableClasses: [6, 7, 8, 9, 10] },
  { id: "socialscience", name: "Social Science (इतिहास, नागरिकशास्त्र व भूगोल)", name_mr: "सामाजिक शास्त्र", name_hi: "सामाजिक शास्त्र", icon: "Globe", color: "indigo", applicableClasses: [6, 7, 8, 9, 10] }
];

export const curriculumData = {
  // -------------------------------------------------------------
  // CLASS 8
  // -------------------------------------------------------------
  8: {
    mathematics: [
      {
        id: "c8_math_ch1",
        classId: 8,
        subjectId: "mathematics",
        chapterNumber: 1,
        title: "Rational and Irrational Numbers",
        title_mr: "परिमेय व अपरिमेय संख्या",
        title_hi: "परिमेय और अपरिमेय संख्याएं",
        description: "Understanding rational numbers, representing on number lines, and exploring irrational numbers like √2.",
        description_mr: "परिमेय संख्यांची संकल्पना, संख्यारेषेवर परिमेय संख्या दाखवणे आणि अपरिमेय संख्यांचा परिचय.",
        description_hi: "संख्या रेखा पर परिमेय संख्याएं दर्शाना और अपरिमेय संख्याओं का अध्ययन।",
        estimatedMinutes: 45,
        learningObjectives: [
          "Define rational numbers in the form p/q (where q ≠ 0)",
          "Show rational numbers on a number line",
          "Compare rational numbers and find numbers between them",
          "Identify and construct irrational numbers such as √2, √3"
        ],
        learningObjectives_mr: [
          "p/q रूपातील परिमेय संख्यांची व्याख्या समजून घेणे (येथे q ≠ 0)",
          "संख्यारेषेवर परिमेय संख्या अचूकपणे दाखवणे",
          "परिमेय संख्यांची तुलना करणे आणि त्यांच्यामधील संख्या शोधणे",
          "√२, √३ सारख्या अपरिमेय संख्या ओळखणे आणि रेखाटणे"
        ],
        learningObjectives_hi: [
          "p/q रूप में परिमेय संख्याओं की परिभाषा समझना (जहाँ q ≠ 0)",
          "संख्या रेखा पर परिमेय संख्याओं को दर्शाना",
          "परिमेय संख्याओं की तुलना करना",
          "√2 और √3 जैसी अपरिमेय संख्याओं को पहचानना"
        ],
        lessons: [
          {
            id: "c8_math_ch1_l1",
            lessonNumber: 1,
            title: "Introduction to Rational Numbers & Number Line",
            title_mr: "परिमेय संख्या व संख्यारेषा ओळख",
            title_hi: "परिमेय संख्या और संख्या रेखा का परिचय",
            topic: "Representation on Number Line",
            topic_mr: "संख्यारेषेवरील निरूपण",
            topic_hi: "संख्या रेखा पर निरूपण",
            objective: "Learn to plot fractions and rational numbers on a standard number line.",
            objective_mr: "संख्यारेषेवर अपूर्णांक आणि परिमेय संख्या अचूक दाखवायला शिकणे.",
            objective_hi: "संख्या रेखा पर भिन्नों और परिमेय संख्याओं को दर्शाना सीखना।",
            explanation: [
              {
                type: "paragraph",
                text: "The numbers of the form p/q are called rational numbers. Here, p and q are integers, but q is never zero. The set of rational numbers includes all natural numbers, whole numbers, integers, and fractions.",
                text_mr: "ज्या संख्या p/q या रूपात लिहिता येतात त्यांना परिमेय संख्या म्हणतात. येथे p आणि q हे पूर्णांक असतात, परंतु q हा शून्य नसतो. परिमेय संख्यांमध्ये सर्व नैसर्गिक संख्या, पूर्ण संख्या, पूर्णांक आणि अपूर्णांकांचा समावेश होतो.",
                text_hi: "जिन संख्याओं को p/q के रूप में लिखा जा सकता है उन्हें परिमेय संख्याएँ कहते हैं। यहाँ p और q पूर्णांक हैं तथा q कभी शून्य नहीं होता। इसमें प्राकृत संख्याएँ, पूर्ण संख्याएँ, पूर्णांक और भिन्न शामिल हैं।"
              },
              {
                type: "highlight",
                text: "Key Rule: To show 7/3 on a number line, divide each unit distance between integers into 3 equal parts. The 7th mark to the right of 0 is 7/3.",
                text_mr: "महत्त्वाचा नियम: संख्यारेषेवर ७/३ दाखवण्यासाठी, प्रत्येक एकक अंतराचे ३ समान भाग करा. शून्याच्या उजवीकडील ७ वा बिंदू म्हणजे ७/३ होय.",
                text_hi: "मुख्य नियम: संख्या रेखा पर 7/3 दर्शाने के लिए प्रत्येक इकाई दूरी को 3 बराबर भागों में विभाजित करें। शून्य के दाईं ओर 7वाँ बिंदु 7/3 होगा।"
              }
            ],
            examples: [
              {
                question: "Show the numbers 2/5, 4/5, and -3/5 on a single number line.",
                question_mr: "एकाच संख्यारेषेवर २/५, ४/५ आणि -३/५ या संख्या दाखवा.",
                question_hi: "एक ही संख्या रेखा पर 2/5, 4/5 और -3/5 संख्याएं दर्शाइए।",
                solutionSteps: [
                  "Step 1: Draw a straight horizontal line and mark origin point O as 0.",
                  "Step 2: Since denominator is 5, divide each unit distance (0 to 1, 1 to 2, 0 to -1) into 5 equal parts.",
                  "Step 3: Count 2 parts to the right for 2/5, and 4 parts to the right for 4/5.",
                  "Step 4: Count 3 parts to the left of 0 for -3/5."
                ],
                solutionSteps_mr: [
                  "पायरी १: एक सरळ रेषा काढा आणि मध्यभागी ० (आरंभबिंदू) चिन्हांकित करा.",
                  "पायरी २: छेद ५ असल्यामुळे प्रत्येक एकक अंतराचे (० ते १, ० ते -१) ५ समान भाग करा.",
                  "पायरी ३: शून्याच्या उजवीकडे २ भाग मोजून २/५ आणि ४ भाग मोजून ४/५ बिंदू निश्चित करा.",
                  "पायरी ४: शून्याच्या डावीकडे ३ भाग मोजून -३/५ बिंदू निश्चित करा."
                ],
                solutionSteps_hi: [
                  "चरण 1: एक सीधी रेखा खींचें और मूल बिंदु 0 अंकित करें।",
                  "चरण 2: हर 5 होने के कारण प्रत्येक इकाई दूरी को 5 बराबर भागों में विभाजित करें।",
                  "चरण 3: 0 के दाईं ओर 2 भाग पर 2/5 तथा 4 भाग पर 4/5 दर्शाएं।",
                  "चरण 4: 0 के बाईं ओर 3 भाग पर -3/5 दर्शाएं।"
                ]
              }
            ],
            practice: [
              {
                question: "Which point lies exactly between -2/3 and 4/3 on a number line?",
                question_mr: "संख्यारेषेवर -२/३ आणि ४/३ यांच्या तंतोतंत मध्यभागी कोणती संख्या असेल?",
                question_hi: "संख्या रेखा पर -2/3 और 4/3 के ठीक मध्य में कौन सी संख्या होगी?",
                options: ["1/3", "2/3", "0", "1"],
                correctIndex: 0,
                hint: "Find average: (-2/3 + 4/3) ÷ 2 = (2/3) ÷ 2 = 1/3.",
                hint_mr: "सरासरी काढा: (-२/३ + ४/३) ÷ २ = (२/३) ÷ २ = १/३.",
                hint_hi: "औसत निकालें: (-2/3 + 4/3) ÷ 2 = (2/3) ÷ 2 = 1/3."
              }
            ]
          },
          {
            id: "c8_math_ch1_l2",
            lessonNumber: 2,
            title: "Comparison of Rational Numbers & Decimal Form",
            title_mr: "परिमेय संख्यांची तुलना व दशांश रूप",
            title_hi: "परिमेय संख्याओं की तुलना और दशमलव रूप",
            topic: "Cross-Multiplication & Recurring Decimals",
            topic_mr: "तिरकस गुणाकार आणि आवर्ती दशांश",
            topic_hi: "तिर्यक गुणन और आवर्ती दशमलव",
            objective: "Compare rational numbers a/b and c/d using cross multiplication and convert to decimal form.",
            objective_mr: "a/b आणि c/d परिमेय संख्यांची तुलना तिरकस गुणाकाराने करणे आणि दशांश रूपात रूपांतर करणे.",
            objective_hi: "a/b और c/d परिमेय संख्याओं की तुलना करना और दशमलव रूप निकालना।",
            explanation: [
              {
                type: "paragraph",
                text: "If a/b and c/d are two rational numbers with positive denominators: If a×d < b×c, then a/b < c/d. If a×d = b×c, then a/b = c/d. If a×d > b×c, then a/b > c/d.",
                text_mr: "जर a/b आणि c/d या दोन परिमेय संख्यांचे छेद धन असतील: जर a×d < b×c असेल, तर a/b < c/d. जर a×d = b×c असेल, तर a/b = c/d. जर a×d > b×c असेल, तर a/b > c/d.",
                text_hi: "यदि a/b और c/d दो धनात्मक हर वाली संख्याएँ हैं: यदि a×d < b×c, तो a/b < c/d. यदि a×d = b×c, तो a/b = c/d. यदि a×d > b×c, तो a/b > c/d."
              }
            ],
            examples: [
              {
                question: "Compare the numbers: -7/9 and 4/5.",
                question_mr: "-७/९ आणि ४/५ या संख्यांची तुलना करा.",
                question_hi: "-7/9 और 4/5 की तुलना कीजिए।",
                solutionSteps: [
                  "A negative number is always smaller than a positive number.",
                  "Therefore, -7/9 < 4/5."
                ],
                solutionSteps_mr: [
                  "ऋण संख्या नेहमी धन संख्येपेक्षा लहान असते.",
                  "म्हणून, -७/९ < ४/५."
                ],
                solutionSteps_hi: [
                  "ऋणात्मक संख्या हमेशा धनात्मक संख्या से छोटी होती है।",
                  "इसलिए, -7/9 < 4/5."
                ]
              }
            ],
            practice: [
              {
                question: "Convert 9/11 into recurring decimal form.",
                question_mr: "९/११ चे आवर्ती दशांश रूप कोणते?",
                question_hi: "9/11 का आवर्ती दशमलव रूप क्या होगा?",
                options: ["0.8181...", "0.888...", "0.9191...", "0.7272..."],
                correctIndex: 0,
                hint: "9 ÷ 11 gives 0.818181... written as 0.81 with a bar over 81.",
                hint_mr: "९ ला ११ ने भागल्यास ०.८१८४... म्हणजेच ०.८१ (८१ वर आडवी रेघ) येते.",
                hint_hi: "9 को 11 से भाग देने पर 0.818181... प्राप्त होता है।"
              }
            ]
          }
        ],
        quiz: {
          id: "quiz_c8_math_ch1",
          title: "Class 8 Rational Numbers Assessment",
          title_mr: "इयत्ता ८ वी परिमेय संख्या घटक चाचणी",
          title_hi: "कक्षा 8 परिमेय संख्या मूल्यांकन क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "Which of the following is NOT a rational number?",
              question_mr: "खालीलपैकी कोणती संख्या परिमेय संख्या नाही?",
              question_hi: "निम्नलिखित में से कौन सी संख्या परिमेय संख्या नहीं है?",
              options: ["-3/4", "0", "√2", "22/7"],
              correctIndex: 2,
              explanation: "√2 cannot be expressed as p/q where p and q are integers with q ≠ 0, so it is irrational.",
              explanation_mr: "√२ ही संख्या p/q या रूपात लिहिता येत नाही, म्हणून ती अपरिमेय संख्या आहे.",
              explanation_hi: "√2 को p/q के रूप में नहीं लिखा जा सकता, इसलिए यह एक अपरिमेय संख्या है।"
            },
            {
              id: "q2",
              questionNumber: 2,
              question: "The decimal representation of a rational number can be:",
              question_mr: "परिमेय संख्येचे दशांश रूप कसे असू शकते?",
              question_hi: "परिमेय संख्या का दशमलव रूप कैसा हो सकता है?",
              options: ["Terminating or non-terminating recurring", "Non-terminating non-recurring only", "Only terminating", "Infinite non-repeating"],
              correctIndex: 0,
              explanation: "Rational numbers always have terminating or non-terminating recurring decimal forms.",
              explanation_mr: "परिमेय संख्येचे दशांश रूप खंडित किंवा अखंड आवर्ती स्वरूपाचे असते.",
              explanation_hi: "परिमेय संख्याओं का दशमलव रूप सांत अथवा असांत आवर्ती होता है।"
            },
            {
              id: "q3",
              questionNumber: 3,
              question: "Between any two distinct rational numbers, there are:",
              question_mr: "कोणत्याही दोन भिन्न परिमेय संख्यांच्या दरम्यान किती परिमेय संख्या असतात?",
              question_hi: "किन्हीं दो परिमेय संख्याओं के बीच कितनी परिमेय संख्याएं होती हैं?",
              options: ["Only 1", "Only 10", "Infinitely many", "Zero"],
              correctIndex: 2,
              explanation: "There are infinitely many rational numbers between any two rational numbers.",
              explanation_mr: "कोणत्याही दोन परिमेय संख्यांच्या दरम्यान अगणित (असंख्य) परिमेय संख्या असतात.",
              explanation_hi: "किन्हीं दो भिन्न परिमेय संख्याओं के बीच अनंत परिमेय संख्याएँ होती हैं।"
            },
            {
              id: "q4",
              questionNumber: 4,
              question: "Comparing -5/8 and -3/8, which statement is true?",
              question_mr: "-५/८ आणि -३/८ ची तुलना करताना कोणते विधान सत्य आहे?",
              question_hi: "-5/8 और -3/8 की तुलना करने पर कौन सा कथन सही है?",
              options: ["-5/8 > -3/8", "-5/8 < -3/8", "-5/8 = -3/8", "Cannot be determined"],
              correctIndex: 1,
              explanation: "Since denominators are positive and -5 < -3, -5/8 < -3/8.",
              explanation_mr: "छेद समान असून ऋण ५ हे ऋण ३ पेक्षा लहान असल्याने, -५/८ < -३/८.",
              explanation_hi: "हर समान होने पर -5 < -3 होने के कारण, -5/8 < -3/8 सही है।"
            },
            {
              id: "q5",
              questionNumber: 5,
              question: "If we construct √2 on a number line using Pythagoras theorem with sides 1 and 1, the hypotenuse is:",
              question_mr: "संख्यारेषेवर पायथागोरसच्या सिद्धांतानुसार १ आणि १ बाजू असलेल्या काटकोन त्रिकोणाचा कर्ण किती लांबीचा असेल?",
              question_hi: "पाइथागोरस प्रमेय के अनुसार 1 और 1 भुजा वाले समकोण त्रिभुज का कर्ण कितना होगा?",
              options: ["1", "√2", "2", "√3"],
              correctIndex: 1,
              explanation: "Hypotenuse = √(1² + 1²) = √2 units.",
              explanation_mr: "कर्ण = √(१² + १²) = √२ एकक.",
              explanation_hi: "कर्ण = √(1² + 1²) = √2 इकाई।"
            }
          ]
        }
      },
      {
        id: "c8_math_ch2",
        classId: 8,
        subjectId: "mathematics",
        chapterNumber: 2,
        title: "Parallel Lines and Transversals",
        title_mr: "समांतर रेषा व छेदिका",
        title_hi: "समानांतर रेखाएं और तिर्यक छेदी रेखा",
        description: "Angles made by transversal: corresponding angles, alternate angles, and interior angles.",
        description_mr: "छेदिकेमुळे होणारे कोन: संगत कोन, व्युत्क्रम कोन आणि आंतरकोन यांचे गुणधर्म.",
        description_hi: "तिर्यक रेखा द्वारा बनने वाले कोण: संगत कोण, एकांतर कोण और अंतः कोण।",
        estimatedMinutes: 40,
        learningObjectives: [
          "Identify parallel lines and a transversal",
          "Understand the Corresponding Angles theorem",
          "Apply Alternate Angles and Interior Angles properties"
        ],
        learningObjectives_mr: [
          "समांतर रेषा व त्यांची छेदिका ओळखणे",
          "संगत कोनांचा गुणधर्म समजून घेणे",
          "व्युत्क्रम कोन व आंतरकोनांचे गुणधर्म वापरून उदाहरणे सोडवणे"
        ],
        learningObjectives_hi: [
          "समानांतर रेखाएं और तिर्यक रेखा को पहचानना",
          "संगत कोण गुणधर्म समझना",
          "एकांतर कोण और अंतः कोण के गुणों का प्रयोग करना"
        ],
        lessons: [
          {
            id: "c8_math_ch2_l1",
            lessonNumber: 1,
            title: "Properties of Angles Formed by Parallel Lines",
            title_mr: "समांतर रेषांच्या छेदिकेमुळे होणाऱ्या कोनांचे गुणधर्म",
            title_hi: "समानांतर रेखाओं द्वारा बने कोणों के गुणधर्म",
            topic: "Corresponding, Alternate and Interior Angles",
            topic_mr: "संगत कोन, व्युत्क्रम कोन आणि आंतरकोन",
            topic_hi: "संगत, एकांतर और अंतः कोण",
            objective: "Recognize that pairs of corresponding angles and alternate angles are congruent, and interior angles are supplementary.",
            objective_mr: "संगत कोनांच्या आणि व्युत्क्रम कोनांच्या जोड्या एकरूप असतात, तर आंतरकोनांची बेरीज १८०° असते हे शिकणे.",
            objective_hi: "संगत और एकांतर कोण सर्वांगसम होते हैं तथा अंतः कोण संपूरक (180°) होते हैं।",
            explanation: [
              {
                type: "paragraph",
                text: "When two parallel lines are intersected by a transversal: 1. Corresponding angles are congruent. 2. Alternate angles (both interior and exterior) are congruent. 3. Interior angles on the same side of the transversal are supplementary (sum = 180°).",
                text_mr: "दोन समांतर रेषांना एका छेदिकेने छेदल्यास: १. संगत कोनांची प्रत्येक जोडी एकरूप असते. २. व्युत्क्रम कोनांची प्रत्येक जोडी एकरूप असते. ३. छेदिकेच्या एकाच बाजूच्या आंतरकोनांची बेरीज १८०° (पूरक) असते.",
                text_hi: "जब दो समानांतर रेखाओं को एक तिर्यक रेखा काटती है: 1. संगत कोण बराबर होते हैं। 2. एकांतर कोण बराबर होते हैं। 3. तिर्यक रेखा के एक ही ओर के अंतः कोणों का योग 180° होता है।"
              }
            ],
            examples: [
              {
                question: "In two parallel lines, if one interior angle on a side of the transversal is 70°, find the other interior angle on the same side.",
                question_mr: "दोन समांतर रेषांच्या छेदिकेच्या एकाच बाजूचा एक आंतरकोन ७०° चा असल्यास, दुसरा आंतरकोन काढा.",
                question_hi: "यदि तिर्यक रेखा के एक ओर का अंतः कोण 70° है, तो उसी ओर का दूसरा अंतः कोण ज्ञात कीजिए।",
                solutionSteps: [
                  "Interior angles on the same side are supplementary (sum = 180°).",
                  "Angle + 70° = 180°",
                  "Angle = 180° - 70° = 110°."
                ],
                solutionSteps_mr: [
                  "आंतरकोन पूरक असतात (बेरीज = १८०°).",
                  "दुसरा कोन + ७०° = १८०°",
                  "दुसरा कोन = १८०° - ७०° = ११०°."
                ],
                solutionSteps_hi: [
                  "अंतः कोण संपूरक होते हैं (योग = 180°).",
                  "कोण + 70° = 180°",
                  "कोण = 180° - 70° = 110°."
                ]
              }
            ],
            practice: [
              {
                question: "If a corresponding angle pair has one angle measure as 115°, what is the measure of the other corresponding angle?",
                question_mr: "जर संगत कोनांच्या जोडीतील एका कोनाचे माप ११५° असेल, तर दुसऱ्या कोनाचे माप किती असेल?",
                question_hi: "यदि संगत कोणों के युग्म में एक कोण 115° है, तो दूसरे कोण का माप क्या होगा?",
                options: ["65°", "115°", "180°", "90°"],
                correctIndex: 1,
                hint: "Corresponding angles of parallel lines are congruent (equal).",
                hint_mr: "समांतर रेषांचे संगत कोन एकरूप (समान मापाचे) असतात.",
                hint_hi: "समानांतर रेखाओं के संगत कोण बराबर होते हैं।"
              }
            ]
          }
        ],
        quiz: {
          id: "quiz_c8_math_ch2",
          title: "Class 8 Parallel Lines Quiz",
          title_mr: "इयत्ता ८ वी समांतर रेषा चाचणी",
          title_hi: "कक्षा 8 समानांतर रेखा क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "How many pairs of corresponding angles are formed when a transversal intersects two lines?",
              question_mr: "दोन रेषांना एका छेदिकेने छेदल्यावर संगत कोनांच्या किती जोड्या तयार होतात?",
              question_hi: "दो रेखाओं को एक तिर्यक रेखा द्वारा काटने पर संगत कोणों के कितने युग्म बनते हैं?",
              options: ["2", "4", "6", "8"],
              correctIndex: 1,
              explanation: "There are 4 pairs of corresponding angles formed.",
              explanation_mr: "एकूण ४ संगत कोनांच्या जोड्या तयार होतात.",
              explanation_hi: "कुल 4 संगत कोणों के युग्म बनते हैं।"
            }
          ]
        }
      }
    ],
    science: [
      {
        id: "c8_sci_ch1",
        classId: 8,
        subjectId: "science",
        chapterNumber: 1,
        title: "Living World and Classification of Microbes",
        title_mr: "सजीव सृष्टी व सूक्ष्मजीवांचे वर्गीकरण",
        title_hi: "सजीव जगत और सूक्ष्मजीवों का वर्गीकरण",
        description: "Robert Whittaker's Five Kingdom Classification and study of Bacteria, Fungi, Protozoa, Algae, and Viruses.",
        description_mr: "रॉबर्ट व्हिटाकर यांची पंचसृष्टी वर्गीकरण पद्धती आणि जिवाणू, कवक, आदिजीव, शैवाल व विषाणूंचा अभ्यास.",
        description_hi: "रॉबर्ट व्हिटेकर की पंचजगत प्रणाली तथा जीवाणु, कवक, प्रोटोजोआ, शैवाल और विषाणु का अध्ययन।",
        estimatedMinutes: 50,
        learningObjectives: [
          "Understand criteria for Five Kingdom Classification",
          "Identify characteristics of Kingdom Monera, Protista, Fungi",
          "Classify microorganisms based on size and structure"
        ],
        learningObjectives_mr: [
          "पंचसृष्टी वर्गीकरणाचे निकष समजून घेणे",
          "मोनेरा, प्रोटिस्टा आणि कवक सृष्टीची वैशिष्ट्ये ओळखणे",
          "सूक्ष्मजीवांचे आकार व संरचनेनुसार वर्गीकरण करणे"
        ],
        learningObjectives_hi: [
          "पंचजगत वर्गीकरण के मानदंड समझना",
          "मोनेरा, प्रोटिस्टा और कवक जगत की विशेषताएं पहचानना",
          "सूक्ष्मजीवों का आकार एवं संरचना के आधार पर वर्गीकरण करना"
        ],
        lessons: [
          {
            id: "c8_sci_ch1_l1",
            lessonNumber: 1,
            title: "Five Kingdom Classification & Monera, Protista, Fungi",
            title_mr: "पंचसृष्टी वर्गीकरण पद्धत व मोनेरा, प्रोटिस्टा, कवक",
            title_hi: "पंचजगत वर्गीकरण तथा मोनेरा, प्रोटिस्टा, कवक",
            topic: "Whittaker's 5 Kingdoms",
            topic_mr: "व्हिटाकर यांची पंचसृष्टी",
            topic_hi: "व्हिटेकर की 5 जगत",
            objective: "Learn the classification of living organisms proposed by Robert Whittaker (1969).",
            objective_mr: "रॉबर्ट व्हिटाकर (१९६९) यांनी मांडलेली सजीवांची वर्गीकरण पद्धती शिकणे.",
            objective_hi: "रॉबर्ट व्हिटेकर (1969) द्वारा प्रस्तावित सजीव वर्गीकरण प्रणाली का अध्ययन करना।",
            explanation: [
              {
                type: "paragraph",
                text: "In 1969, Robert Whittaker classified all living organisms into 5 Kingdoms: 1. Monera (e.g. bacteria), 2. Protista (e.g. Amoeba, Paramecium), 3. Fungi (e.g. Yeast, Mushroom), 4. Plantae, 5. Animalia.",
                text_mr: "१९६९ मध्ये रॉबर्ट व्हिटाकर यांनी सजीवांची ५ सृष्टींमध्ये विभागणी केली: १. मोनेरा (उदा. विविध जिवाणू), २. प्रोटिस्टा (उदा. अमिबा, पॅरामेशिअम), ३. कवक (उदा. यीस्ट, बुरशी), ४. वनस्पती, ५. प्राणी.",
                text_hi: "1969 में रॉबर्ट व्हिटेकर ने सजीवों को 5 जगत में बाँटा: 1. मोनेरा (जीवाणु), 2. प्रोटिस्टा (अमीबा), 3. कवक (यीस्ट, फफूंद), 4. पादप, 5. प्राणी।"
              }
            ],
            examples: [
              {
                question: "Which kingdom includes unicellular prokaryotic organisms like Lactobacilli?",
                question_mr: "लॅक्टोबॅसिलाय सारख्या एकपेशीय आणि आदिकेंद्रकी सजीवांचा समावेश कोणत्या सृष्टीत होतो?",
                question_hi: "लैक्टोबैसिली जैसे एककोशिकीय प्रोकैरियोटिक सजीव किस जगत में आते हैं?",
                solutionSteps: [
                  "Organisms without a distinct nucleus (prokaryotes) belong to Kingdom Monera.",
                  "Lactobacilli are bacteria and belong to Kingdom Monera."
                ],
                solutionSteps_mr: [
                  "स्पष्ट केंद्रक नसलेले आदिकेंद्रकी सजीव 'मोनेरा' सृष्टीत येतात.",
                  "लॅक्टोबॅसिलाय हे जिवाणू असून मोनेरा सृष्टीमध्ये समाविष्ट आहेत."
                ],
                solutionSteps_hi: [
                  "अस्पष्ट केंद्रक वाले प्रोकैरियोटिक सजीव मोनेरा जगत में आते हैं।",
                  "लैक्टोबैसिली जीवाणु होने के कारण मोनेरा जगत के सदस्य हैं।"
                ]
              }
            ],
            practice: [
              {
                question: "Amoeba moves using which locomotive organelle?",
                question_mr: "अमिबा हालचालीसाठी कोणत्या अवयवाचा उपयोग करतो?",
                question_hi: "अमीबा चलन के लिए किस अंग का उपयोग करता है?",
                options: ["Cilia", "Pseudopodia (False feet)", "Flagella", "Tentacles"],
                correctIndex: 1,
                hint: "Amoeba extends temporary projections called pseudopodia (छद्मपाद).",
                hint_mr: "अमिबा 'छद्मपाद' (खोटे पाय) पुढे करून हालचाल करतो.",
                hint_hi: "अमीबा 'कूटपाद' (छद्मपाद) के द्वारा गति करता है।"
              }
            ]
          }
        ],
        quiz: {
          id: "quiz_c8_sci_ch1",
          title: "Microbes Classification Quiz",
          title_mr: "सूक्ष्मजीव वर्गीकरण चाचणी",
          title_hi: "सूक्ष्मजीव वर्गीकरण क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "Which of the following is a unicellular eukaryotic organism?",
              question_mr: "खालीलपैकी कोणता सजीव एकपेशीय दृश्यकेंद्रकी आहे?",
              question_hi: "निम्नलिखित में से कौन सा सजीव एककोशिकीय यूकैरियोटिक है?",
              options: ["Bacteria", "Amoeba", "Human", "Banyan tree"],
              correctIndex: 1,
              explanation: "Amoeba belongs to Kingdom Protista and is a unicellular eukaryote.",
              explanation_mr: "अमिबा हा प्रोटिस्टा सृष्टीतील एकपेशीय दृश्यकेंद्रकी सजीव आहे.",
              explanation_hi: "अमीबा प्रोटिस्टा जगत का एककोशिकीय यूकैरियोटिक जीव है।"
            }
          ]
        }
      },
      {
        id: "c8_sci_ch3",
        classId: 8,
        subjectId: "science",
        chapterNumber: 3,
        title: "Force and Pressure",
        title_mr: "बल आणि दाब",
        title_hi: "बल और दाब",
        description: "Contact and non-contact forces, balanced and unbalanced forces, inertia, pressure on solids, liquids, and atmospheric pressure.",
        description_mr: "संपर्क व असंपर्क बले, जडत्व, स्थायू, द्रव आणि वायूंचा दाब व वातावरणीय दाबाचा अभ्यास.",
        description_hi: "संपर्क और असंपर्क बल, जड़त्व, ठोस, द्रव और वायुमंडलीय दाब का अध्ययन।",
        estimatedMinutes: 45,
        learningObjectives: [
          "Distinguish contact forces from non-contact forces",
          "Understand Newton's first law and Inertia",
          "Calculate Pressure = Force ÷ Area"
        ],
        learningObjectives_mr: [
          "संपर्क आणि असंपर्क बलांमधील फरक ओळखणे",
          "जडत्वाची संकल्पना समजून घेणे",
          "दाब = बल ÷ क्षेत्रफळ हे सूत्र वापरून उदाहरणे सोडवणे"
        ],
        learningObjectives_hi: [
          "संपर्क और असंपर्क बल में अंतर समझना",
          "जड़त्व का सिद्धांत समझना",
          "दाब = बल ÷ क्षेत्रफल सूत्र से गणना करना"
        ],
        lessons: [
          {
            id: "c8_sci_ch3_l1",
            lessonNumber: 1,
            title: "Concept of Force and Pressure",
            title_mr: "बल व दाबाची संकल्पना",
            title_hi: "बल और दाब की अवधारणा",
            topic: "Pressure Formula & SI Units",
            topic_mr: "दाबाचे सूत्र व एस.आय. एकक",
            topic_hi: "दाब का सूत्र और SI मात्रक",
            objective: "Define pressure as force per unit area and its SI unit Pascal (N/m²).",
            objective_mr: "एकाक क्षेत्रफळावर प्रयुक्त होणाऱ्या लंबा बलाला दाब म्हणतात हे शिकणे आणि त्याचे एकक पास्कल (N/m²) समजून घेणे.",
            objective_hi: "प्रति इकाई क्षेत्रफल पर लगने वाले लंबवत बल को दाब कहते हैं। इसका SI मात्रक पास्कल (N/m²) है।",
            explanation: [
              {
                type: "paragraph",
                text: "Pressure is defined as Force per unit Area (P = F / A). The SI unit of force is Newton (N) and area is m², so the unit of pressure is N/m², also known as Pascal (Pa).",
                text_mr: "एकाक क्षेत्रफळावर लंब दिशेने प्रयुक्त होणाऱ्या बलाला 'दाब' म्हणतात. दाब = बल / क्षेत्रफळ. बलाचे एकक न्यूटन (N) आणि क्षेत्रफळाचे एकक मीटर² (m²) असल्याने दाबाचे एकक N/m² म्हणजेच पास्कल (Pa) आहे.",
                text_hi: "प्रति इकाई क्षेत्रफल पर आरोपित बल को 'दाब' कहते हैं। दाब = बल / क्षेत्रफल। इसका SI मात्रक न्यूटन/मीटर² (N/m²) या पास्कल (Pa) होता है।"
              }
            ],
            examples: [
              {
                question: "A force of 100 N acts perpendicular to an area of 2 m². Calculate the pressure.",
                question_mr: "२ m² क्षेत्रफळावर १०० N चे बल प्रयुक्त केले असता निर्माण होणारा दाब किती?",
                question_hi: "2 m² क्षेत्रफल पर 100 N का बल लगने पर दाब कितना होगा?",
                solutionSteps: [
                  "Formula: Pressure = Force ÷ Area",
                  "P = 100 N ÷ 2 m² = 50 N/m² (or 50 Pa)."
                ],
                solutionSteps_mr: [
                  "सूत्र: दाब = बल ÷ क्षेत्रफळ",
                  "दाब = १०० N ÷ २ m² = ५० पास्कल (N/m²)."
                ],
                solutionSteps_hi: [
                  "सूत्र: दाब = बल ÷ क्षेत्रफल",
                  "दाब = 100 N ÷ 2 m² = 50 पास्कल (Pa)।"
                ]
              }
            ],
            practice: [
              {
                question: "Why do camels walk easily in desert sand compared to humans?",
                question_mr: "उंटाचे पाय वाळवंटात सहजपणे का रुतत नाहीत?",
                question_hi: "ऊँट रेगिस्तान में आसानी से क्यों चल पाता है?",
                options: ["Broad soles increase area, reducing pressure", "Camels are very light", "Sand does not have friction", "Camels jump high"],
                correctIndex: 0,
                hint: "Broader feet mean larger area, so pressure on sand decreases.",
                hint_mr: "पायांचे तळवे पसरट असल्याने क्षेत्रफळ वाढते आणि वाळूवर पडणारा दाब कमी होतो.",
                hint_hi: "चौड़े तलवों से क्षेत्रफल बढ़ता है जिससे रेत पर दाब कम हो जाता है।"
              }
            ]
          }
        ],
        quiz: {
          id: "quiz_c8_sci_ch3",
          title: "Force and Pressure Quiz",
          title_mr: "बल आणि दाब चाचणी",
          title_hi: "बल और दाब क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "The SI unit of pressure is:",
              question_mr: "दाबाचे एस.आय. (SI) एकक कोणते?",
              question_hi: "दाब का SI मात्रक क्या है?",
              options: ["Joule", "Pascal (N/m²)", "Newton", "Watt"],
              correctIndex: 1,
              explanation: "The SI unit of pressure is Pascal (N/m²).",
              explanation_mr: "दाबाचे एस.आय. एकक पास्कल (N/m²) आहे.",
              explanation_hi: "दाब का SI मात्रक पास्कल (N/m²) है।"
            }
          ]
        }
      }
    ],
    english: [
      {
        id: "c8_eng_ch1",
        classId: 8,
        subjectId: "english",
        chapterNumber: 1,
        title: "A Time to Believe",
        title_mr: "ए टाइम टू बिलीव्ह (कविता)",
        title_hi: "ए टाइम टू बिलीव (कविता)",
        description: "Poetic appreciation, optimism, figurative language, and grammar vocabulary.",
        description_mr: "कवितेचे रसग्रहण, आशावादी दृष्टीकोन आणि व्याकरण.",
        description_hi: "कविता का भावार्थ, आशावादी दृष्टिकोण और व्याकरण।",
        estimatedMinutes: 30,
        learningObjectives: [
          "Understand the core theme of hope and self-belief",
          "Identify rhyming words and poetic devices"
        ],
        learningObjectives_mr: [
          "आत्मविश्वास आणि आशेचा संदेश समजून घेणे",
          "यमक जुळणारे शब्द आणि भाषिक अलंकार ओळखणे"
        ],
        learningObjectives_hi: [
          "आशा और आत्मविश्वास का संदेश समझना",
          "तुकबंदी और भाषा की सुंदरता को पहचानना"
        ],
        lessons: [
          {
            id: "c8_eng_ch1_l1",
            lessonNumber: 1,
            title: "Appreciation of 'A Time to Believe'",
            title_mr: "'A Time to Believe' कवितेचे रसग्रहण",
            title_hi: "'A Time to Believe' कविता का भावार्थ",
            topic: "Theme & Message",
            topic_mr: "मध्यवर्ती कल्पना व संदेश",
            topic_hi: "केंद्रीय भाव और संदेश",
            objective: "Learn the message of courage, hope, and believing in miracles.",
            objective_mr: "कवितेतून जीवनातील चमत्कार आणि आशेवर विश्वास ठेवण्याचा संदेश शिकणे.",
            objective_hi: "कविता से आशा और विश्वास की प्रेरणा लेना।",
            explanation: [
              {
                type: "paragraph",
                text: "The poem 'A Time to Believe' teaches us that believing is knowing that everyday is a new beginning and trusting that miracles do happen. It urges us to see the wonder in stardust and the wisdom of aging hearts.",
                text_mr: "'A Time to Believe' ही कविता आपल्याला शिकवते की प्रत्येक दिवस ही एक नवी सुरुवात असते आणि जगात चमत्कार घडतात यावर विश्वास ठेवला पाहिजे.",
                text_hi: "यह कविता हमें सिखाती है कि विश्वास का अर्थ है हर दिन को एक नई शुरुआत मानना और उम्मीद बनाए रखना।"
              }
            ],
            examples: [],
            practice: []
          }
        ],
        quiz: {
          id: "quiz_c8_eng_ch1",
          title: "Class 8 English Poetry Quiz",
          title_mr: "इयत्ता ८ वी इंग्रजी कविता चाचणी",
          title_hi: "कक्षा 8 अंग्रेजी कविता क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "What does the poet mean by 'To believe is to know life is a gift'?",
              question_mr: "कवीच्या मते 'विश्वास ठेवणे म्हणजे जीवन ही एक देणगी आहे हे जाणणे' याचा काय अर्थ आहे?",
              question_hi: "कवि के अनुसार 'जीवन एक उपहार है' का क्या अर्थ है?",
              options: ["Life is precious and should be cherished", "Life is easy", "Life needs no work", "Life is boring"],
              correctIndex: 0,
              explanation: "The poet emphasizes that life is a valuable gift to be lived with gratitude and hope.",
              explanation_mr: "कवी जीवनाला अत्यंत मौल्यवान मानून ते कृतज्ञतेने जगण्याचा संदेश देतात.",
              explanation_hi: "कवि जीवन को एक अमूल्य उपहार मानते हैं जिसे आशा के साथ जीना चाहिए।"
            }
          ]
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // CLASS 10 (SSC State Board)
  // -------------------------------------------------------------
  10: {
    mathematics: [
      {
        id: "c10_math_ch1",
        classId: 10,
        subjectId: "mathematics",
        chapterNumber: 1,
        title: "Linear Equations in Two Variables",
        title_mr: "दोन चलांमधील रेषीय समीकरणे",
        title_hi: "दो चरों वाले रैखिक समीकरण",
        description: "Simultaneous linear equations, graphical method, Cramer's Rule (Determinants), and applications.",
        description_mr: "एकसामयिक समीकरणे, आलेख पद्धती, क्रेमरची पद्धती (निश्चयक) आणि शाब्दिक उदाहरणे.",
        description_hi: "युगपत समीकरण, आलेख विधि, क्रेमर का नियम (निश्चयक) और अनुप्रयोग।",
        estimatedMinutes: 55,
        learningObjectives: [
          "Solve simultaneous equations using elimination and Cramer's Rule",
          "Plot and solve linear equations using graphs",
          "Apply equations to solve practical word problems"
        ],
        learningObjectives_mr: [
          "लोप पद्धत आणि क्रेमरच्या नियमाने एकसामयिक समीकरणे सोडवणे",
          "आलेख पद्धतीने समीकरणांची उकल शोधणे",
          "दैनंदिन जीवनातील शाब्दिक उदाहरणे सोडवणे"
        ],
        learningObjectives_hi: [
          "विलोपन विधि और क्रेमर के नियम से युगपत समीकरण हल करना",
          "आलेख विधि द्वारा समीकरणों का हल ज्ञात करना",
          "व्यावहारिक इबारती प्रश्नों को हल करना"
        ],
        lessons: [
          {
            id: "c10_math_ch1_l1",
            lessonNumber: 1,
            title: "Cramer's Rule & Determinants",
            title_mr: "क्रेमरची पद्धती व निश्चयक",
            title_hi: "क्रेमर का नियम और निश्चयक",
            topic: "Determinant Method (Cramer's Method)",
            topic_mr: "निश्चयक पद्धती (क्रेमरची पद्धत)",
            topic_hi: "निश्चयक विधि (क्रेमर विधि)",
            objective: "Understand how to compute determinants and find values of x = Dx/D and y = Dy/D.",
            objective_mr: "निश्चयकाची किंमत काढणे आणि x = Dx/D, y = Dy/D या सूत्रांनी उकल काढणे शिकणे.",
            objective_hi: "निश्चयक का मान निकालना और x = Dx/D, y = Dy/D द्वारा हल प्राप्त करना।",
            explanation: [
              {
                type: "paragraph",
                text: "For equations a1x + b1y = c1 and a2x + b2y = c2: D = (a1·b2 - a2·b1), Dx = (c1·b2 - c2·b1), Dy = (a1·c2 - a2·c1). Then x = Dx / D and y = Dy / D (provided D ≠ 0).",
                text_mr: "a१x + b१y = c१ आणि a२x + b२y = c२ या समीकरणांसाठी: D = (a१·b२ - a२·b१), Dx = (c१·b२ - c२·b१), Dy = (a१·c२ - a२·c१). त्यानंतर x = Dx / D आणि y = Dy / D (येथे D ≠ ० असावा).",
                text_hi: "समीकरण a1x + b1y = c1 और a2x + b2y = c2 के लिए: D = (a1·b2 - a2·b1), Dx = (c1·b2 - c2·b1), Dy = (a1·c2 - a2·c1)। x = Dx / D और y = Dy / D (जहाँ D ≠ 0)।"
              }
            ],
            examples: [
              {
                question: "Find the value of determinant: | 5  3 | / | -7  0 |",
                question_mr: "| ५  ३ | / | -७  ० | या निश्चयकाची किंमत काढा.",
                question_hi: "निश्चयक | 5  3 | / | -7  0 | का मान ज्ञात कीजिए।",
                solutionSteps: [
                  "Formula: | a  b | / | c  d | = (a·d - b·c)",
                  "= (5 × 0) - (3 × -7)",
                  "= 0 - (-21) = 21."
                ],
                solutionSteps_mr: [
                  "सूत्र: (a·d - b·c)",
                  "= (५ × ०) - (३ × -७)",
                  "= ० - (-२१) = २१."
                ],
                solutionSteps_hi: [
                  "सूत्र: (a·d - b·c)",
                  "= (5 × 0) - (3 × -7)",
                  "= 0 + 21 = 21."
                ]
              }
            ],
            practice: [
              {
                question: "If Dx = 49, Dy = -63 and D = 7, find the value of x.",
                question_mr: "जर Dx = ४९, Dy = -६३ आणि D = ७ असेल, तर x ची किंमत किती?",
                question_hi: "यदि Dx = 49, Dy = -63 और D = 7 हो, तो x का मान क्या होगा?",
                options: ["7", "-9", "49", "1/7"],
                correctIndex: 0,
                hint: "x = Dx ÷ D = 49 ÷ 7 = 7.",
                hint_mr: "x = Dx ÷ D = ४९ ÷ ७ = ७.",
                hint_hi: "x = Dx ÷ D = 49 ÷ 7 = 7."
              }
            ]
          }
        ],
        quiz: {
          id: "quiz_c10_math_ch1",
          title: "Class 10 Linear Equations Quiz",
          title_mr: "इयत्ता १० वी दोन चलांमधील रेषीय समीकरणे चाचणी",
          title_hi: "कक्षा 10 रैखिक समीकरण क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "Which of the following is a linear equation in two variables?",
              question_mr: "खालीलपैकी कोणते दोन चलांमधील रेषीय समीकरण आहे?",
              question_hi: "निम्नलिखित में से कौन सा दो चरों वाला रैखिक समीकरण है?",
              options: ["4m + 3n = 12", "x² - 3y = 5", "4/x + 5/y = 4", "0x + 6y - 3 = 0"],
              correctIndex: 0,
              explanation: "4m + 3n = 12 has two variables m and n with degree 1 and non-zero coefficients.",
              explanation_mr: "४m + ३n = १२ मध्ये m आणि n ही दोन चले असून प्रत्येकाचा कोटी १ आहे आणि सहगुणक शून्य नाहीत.",
              explanation_hi: "4m + 3n = 12 में दो चर m और n हैं जिनकी घात 1 है।"
            }
          ]
        }
      }
    ],
    science1: [
      {
        id: "c10_sci1_ch1",
        classId: 10,
        subjectId: "science1",
        chapterNumber: 1,
        title: "Gravitation",
        title_mr: "गुरुत्वाकर्षण",
        title_hi: "गुरुत्वाकर्षण",
        description: "Kepler's Laws, Newton's Universal Law of Gravitation, acceleration due to gravity (g), free fall, and escape velocity.",
        description_mr: "केप्लरचे नियम, न्यूटनचा वैश्विक गुरुत्वाकर्षणाचा सिद्धांत, गुरुत्वीय त्वरण (g), मुक्त पतन आणि मुक्तिवेग.",
        description_hi: "केप्लर के नियम, न्यूटन का गुरुत्वाकर्षण नियम, गुरुत्वीय त्वरण (g), मुक्त पतन और पलायन वेग।",
        estimatedMinutes: 50,
        learningObjectives: [
          "State and explain Kepler's Three Laws of Planetary Motion",
          "Apply Newton's formula F = G·(m1·m2)/r²",
          "Differentiate mass (m) and weight (W = mg)",
          "Calculate escape velocity for Earth"
        ],
        learningObjectives_mr: [
          "केप्लरचे ग्रहांच्या गतीविषयक तीन नियम समजून घेणे",
          "न्यूटनचे गुरुत्वाकर्षणाचे सूत्र F = G·(m१·m२)/r² वापरणे",
          "वस्तुमान (m) आणि वजन (W = mg) यातील फरक स्पष्ट करणे",
          "मुक्तिवेगाची (Escape Velocity) संकल्पना समजून घेणे"
        ],
        learningObjectives_hi: [
          "केप्लर के ग्रहों की गति संबंधी तीनों नियम समझना",
          "न्यूटन का गुरुत्वाकर्षण सूत्र F = G·(m1·m2)/r² समझना",
          "द्रव्यमान और भार के बीच अंतर स्पष्ट करना",
          "पलायन वेग की अवधारणा समझना"
        ],
        lessons: [
          {
            id: "c10_sci1_ch1_l1",
            lessonNumber: 1,
            title: "Kepler's Laws & Newton's Law of Gravitation",
            title_mr: "केप्लरचे नियम व न्यूटनचा गुरुत्वाकर्षणाचा सिद्धांत",
            title_hi: "केप्लर के नियम और न्यूटन का गुरुत्वाकर्षण नियम",
            topic: "Universal Gravitation & Inverse Square Law",
            topic_mr: "वैश्विक गुरुत्वाकर्षण व व्यस्त वर्ग नियम",
            topic_hi: "सार्वत्रिक गुरुत्वाकर्षण और व्युत्क्रम वर्ग नियम",
            objective: "Master Kepler's 3 laws and calculate gravitational force between two objects.",
            objective_mr: "केप्लरचे ३ नियम आणि दोन वस्तूंमधील गुरुत्वीय बलाची गणना शिकणे.",
            objective_hi: "केप्लर के नियम और दो वस्तुओं के बीच गुरुत्वाकर्षण बल की गणना सीखना।",
            explanation: [
              {
                type: "paragraph",
                text: "Kepler's 1st Law: The orbit of a planet is an ellipse with the Sun at one of the foci. Kepler's 2nd Law: The line joining the planet and the Sun sweeps equal areas in equal intervals of time. Kepler's 3rd Law: The square of orbital period is proportional to cube of mean distance (T² ∝ r³).",
                text_mr: "केप्लरचा पहिला नियम: ग्रहाची कक्षा ही लंबवर्तुळाकार असून सूर्य त्या कक्षेच्या एका नाभीवर असतो. केप्लरचा दुसरा नियम: ग्रहाला सूर्याशी जोडणारी सरळ रेषा समान कालावधीत समान क्षेत्रफळ व्यापते. केप्लरचा तिसरा नियम: ग्रहाच्या आवर्तकालाचा वर्ग हा सूर्यापासूनच्या सरासरी अंतराच्या घनाला समानुपाती असतो (T² ∝ r³).",
                text_hi: "केप्लर का प्रथम नियम: ग्रह की कक्षा दीर्घवृत्ताकार होती है तथा सूर्य उसके एक फोकस पर होता है। द्वितीय नियम: ग्रह और सूर्य को मिलाने वाली रेखा समान समय में समान क्षेत्रफल तय करती है। तृतीय नियम: परिक्रमण काल का वर्ग सूर्य से औसत दूरी के घन के समानुपाती होता है (T² ∝ r³)।"
              },
              {
                type: "highlight",
                text: "Newton's Law: F = G · (m1 · m2) / r², where G = 6.67 × 10⁻¹¹ N·m²/kg² is the Universal Gravitational Constant.",
                text_mr: "न्यूटनचा सिद्धांत: F = G · (m१ · m२) / r², येथे G = ६.६७ × १०⁻¹¹ N·m²/kg² हा वैश्विक गुरुत्वीय स्थिरांक आहे.",
                text_hi: "न्यूटन का नियम: F = G · (m1 · m2) / r², जहाँ G = 6.67 × 10⁻¹¹ N·m²/kg² सार्वत्रिक गुरुत्वीय स्थिरांक है।"
              }
            ],
            examples: [
              {
                question: "What happens to the gravitational force between two objects if the distance between them is doubled?",
                question_mr: "दोन वस्तूंमधील अंतर दुप्पट केले तर त्यांच्यातील गुरुत्वीय बलावर काय परिणाम होईल?",
                question_hi: "यदि दो वस्तुओं के बीच की दूरी दोगुनी कर दी जाए, तो गुरुत्वाकर्षण बल पर क्या प्रभाव पड़ेगा?",
                solutionSteps: [
                  "Force is inversely proportional to square of distance (F ∝ 1/r²).",
                  "If distance becomes 2r, new force F' = F / 2² = F / 4.",
                  "The force becomes one-fourth of its original value."
                ],
                solutionSteps_mr: [
                  "बल हे अंतराच्या वर्गाच्या व्यस्त प्रमाणात असते (F ∝ १/r²).",
                  "अंतर दुप्पट (२r) केल्यास नवीन बल F' = F / २² = F / ४ होईल.",
                  "म्हणजेच गुरुत्वीय बल मूळ बलाच्या १/४ (पावपट) होईल."
                ],
                solutionSteps_hi: [
                  "बल दूरी के वर्ग के व्युत्क्रमानुपाती होता है (F ∝ 1/r²)।",
                  "दूरी दोगुनी (2r) करने पर बल F' = F / 4 हो जाएगा।",
                  "अर्थात बल मूल मान का एक-चौथाई हो जाएगा।"
                ]
              }
            ],
            practice: [
              {
                question: "What is the value of acceleration due to gravity (g) at the center of the Earth?",
                question_mr: "पृथ्वीच्या केंद्राशी गुरुत्वीय त्वरण (g) चे मूल्य किती असते?",
                question_hi: "पृथ्वी के केंद्र पर गुरुत्वीय त्वरण (g) का मान क्या होता है?",
                options: ["9.8 m/s²", "9.77 m/s²", "0 m/s²", "Infinite"],
                correctIndex: 2,
                hint: "At Earth's center, mass attracts equally from all directions, so effective g = 0.",
                hint_mr: "पृथ्वीच्या केंद्रावर सर्व बाजूंनी समान आकर्षण असल्याने g = ० असते.",
                hint_hi: "पृथ्वी के केंद्र पर गुरुत्वीय त्वरण शून्य (0) होता है।"
              }
            ]
          }
        ],
        quiz: {
          id: "quiz_c10_sci1_ch1",
          title: "Class 10 Gravitation Quiz",
          title_mr: "इयत्ता १० वी गुरुत्वाकर्षण चाचणी",
          title_hi: "कक्षा 10 गुरुत्वाकर्षण क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "The value of Universal Gravitational Constant G was first experimentally measured by:",
              question_mr: "वैश्विक गुरुत्वीय स्थिरांक G चे मूल्य सर्वप्रथम प्रयोगाद्वारे कोणी मोजले?",
              question_hi: "सार्वत्रिक गुरुत्वीय स्थिरांक G का मान सर्वप्रथम किसने मापा?",
              options: ["Isaac Newton", "Henry Cavendish", "Galileo Galilei", "Johannes Kepler"],
              correctIndex: 1,
              explanation: "Henry Cavendish first measured the value of G using a sensitive torsion balance.",
              explanation_mr: "हेन्री कॅव्हेंडिश यांनी प्रयोगाद्वारे G चे अचूक मूल्य मोजले.",
              explanation_hi: "हेनरी कैवेंडिश ने सर्वप्रथम G का मान प्रायोगिक रूप से ज्ञात किया था।"
            }
          ]
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // CLASSES 6, 7, 9 (Representative Seed Data)
  // -------------------------------------------------------------
  6: {
    mathematics: [
      {
        id: "c6_math_ch1",
        classId: 6,
        subjectId: "mathematics",
        chapterNumber: 1,
        title: "Basic Concepts in Geometry",
        title_mr: "भूमितीतील मूलभूत संबोध",
        title_hi: "ज्यामिति की मूलभूत अवधारणाएं",
        description: "Points, line segments, rays, lines, collinear points, and planes.",
        description_mr: "बिंदू, रेषाखंड, किरण, रेषा, एकरेषीय बिंदू आणि प्रतल यांची ओळख.",
        description_hi: "बिंदु, रेखाखंड, किरण, रेखा और समतल की समझ।",
        estimatedMinutes: 35,
        learningObjectives: ["Identify points, lines, rays, segments", "Understand collinear and non-collinear points"],
        learningObjectives_mr: ["बिंदू, रेषा, किरण व रेषाखंड ओळखणे", "एकरेषीय व नैकरेषीय बिंदू समजणे"],
        learningObjectives_hi: ["बिंदु, रेखा, किरण और रेखाखंड पहचानना", "संरेख और असंरेख बिंदु समझना"],
        lessons: [
          {
            id: "c6_math_ch1_l1",
            lessonNumber: 1,
            title: "Points, Lines, and Planes",
            title_mr: "बिंदू, रेषा आणि प्रतल",
            title_hi: "बिंदु, रेखा और समतल",
            topic: "Geometric Fundamentals",
            topic_mr: "भूमितीची मूलतत्त्वे",
            topic_hi: "ज्यामिति के मूल तत्व",
            objective: "Learn basic building blocks of geometry.",
            objective_mr: "भूमितीतील मूलभूत घटक शिकणे.",
            objective_hi: "ज्यामिति की मूलभूत इकाइयाँ सीखना।",
            explanation: [
              {
                type: "paragraph",
                text: "A point is a tiny dot shown by a sharp pencil. A line extends infinitely in both directions. A plane is a flat surface extending endlessly.",
                text_mr: "बिंदू म्हणजे पेन्सिलच्या टोकाने कागदावर काढलेला सूक्ष्म ठिपका. रेषा दोन्ही दिशांना अमर्याद वाढते. प्रतल हा सपाट पृष्ठभाग असून सर्व दिशांना अमर्याद पसरतो.",
                text_hi: "बिंदु एक सूक्ष्म चिह्न है। रेखा दोनों दिशाओं में अनंत तक बढ़ती है। समतल एक सपाट सतह है जो अनंत तक फैली होती है।"
              }
            ],
            examples: [],
            practice: []
          }
        ],
        quiz: {
          id: "quiz_c6_math_ch1",
          title: "Class 6 Geometry Basics Quiz",
          title_mr: "इयत्ता ६ वी भूमिती पायाभूत चाचणी",
          title_hi: "कक्षा 6 ज्यामिति क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "How many lines can pass through two distinct points?",
              question_mr: "दोन भिन्न बिंदूंमधून किती रेषा जाऊ शकतात?",
              question_hi: "दो भिन्न बिंदुओं से होकर कितनी रेखाएं खींची जा सकती हैं?",
              options: ["Only one line", "Infinite lines", "Two lines", "Zero"],
              correctIndex: 0,
              explanation: "Only one unique straight line passes through two distinct points.",
              explanation_mr: "दोन भिन्न बिंदूंमधून फक्त आणि फक्त एकच रेषा जाऊ शकते.",
              explanation_hi: "किन्हीं दो भिन्न बिंदुओं से केवल एक ही रेखा गुजर सकती है।"
            }
          ]
        }
      }
    ]
  },
  7: {
    mathematics: [
      {
        id: "c7_math_ch1",
        classId: 7,
        subjectId: "mathematics",
        chapterNumber: 1,
        title: "Geometrical Constructions",
        title_mr: "भौमितिक रचना",
        title_hi: "ज्यामितीय रचनाएं",
        description: "Angle bisector, perpendicular bisector of a segment, property of angle bisectors of a triangle.",
        description_mr: "कोनदुभाजक, रेषाखंडाचा लंबदुभाजक आणि त्रिकोणाच्या कोनदुभाजकांचे गुणधर्म.",
        description_hi: "कोण समद्विभाजक, रेखाखंड का लंब समद्विभाजक और त्रिभुज की रचना।",
        estimatedMinutes: 40,
        learningObjectives: ["Construct angle bisectors", "Construct perpendicular bisectors of line segments"],
        learningObjectives_mr: ["कोनदुभाजक काढणे", "रेषाखंडाचा लंबदुभाजक काढणे"],
        learningObjectives_hi: ["कोण समद्विभाजक खींचना", "रेखाखंड का लंब समद्विभाजक बनाना"],
        lessons: [
          {
            id: "c7_math_ch1_l1",
            lessonNumber: 1,
            title: "Angle Bisector and Perpendicular Bisector",
            title_mr: "कोनदुभाजक व लंबदुभाजक",
            title_hi: "कोण समद्विभाजक और लंब समद्विभाजक",
            topic: "Constructions",
            topic_mr: "रचना",
            topic_hi: "रचनाएँ",
            objective: "Learn to divide angles and segments into two equal halves with compass.",
            objective_mr: "कंपासच्या साहाय्याने कोन आणि रेषाखंडाचे दोन समान भाग करणे शिकणे.",
            objective_hi: "परकार की सहायता से कोण और रेखाखंड को दो बराबर भागों में बाँटना।",
            explanation: [
              {
                type: "paragraph",
                text: "An angle bisector divides an angle into two equal parts. A perpendicular bisector divides a line segment into two equal halves at right angles (90°).",
                text_mr: "कोनदुभाजक कोनाचे दोन समान भाग करतो. लंबदुभाजक रेषाखंडाचे ९० अंशाच्या कोनात दोन समान भाग करतो.",
                text_hi: "कोण समद्विभाजक कोण को दो बराबर भागों में बाँटता है। लंब समद्विभाजक रेखाखंड को 90° पर दो समान भागों में बाँटता है।"
              }
            ],
            examples: [],
            practice: []
          }
        ],
        quiz: {
          id: "quiz_c7_math_ch1",
          title: "Class 7 Constructions Quiz",
          title_mr: "इयत्ता ७ वी रचना चाचणी",
          title_hi: "कक्षा 7 रचना क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "The angle bisectors of a triangle are:",
              question_mr: "त्रिकोणाचे तिन्ही कोनदुभाजक कसे असतात?",
              question_hi: "त्रिभुज के तीनों कोण समद्विभाजक कैसे होते हैं?",
              options: ["Concurrent (Meet at a single point)", "Parallel", "Never meet", "Perpendicular to base"],
              correctIndex: 0,
              explanation: "The angle bisectors of a triangle are concurrent and their point of concurrence is called the Incentre.",
              explanation_mr: "त्रिकोणाचे तिन्ही कोनदुभाजक एकाच बिंदूत छेदतात म्हणजेच ते 'एकाच संपाती' (Concurrent) असतात.",
              explanation_hi: "त्रिभुज के कोण समद्विभाजक संगामी (एक बिंदु पर मिलने वाले) होते हैं।"
            }
          ]
        }
      }
    ]
  },
  9: {
    science1: [
      {
        id: "c9_sci_ch1",
        classId: 9,
        subjectId: "science1",
        chapterNumber: 1,
        title: "Laws of Motion",
        title_mr: "गतीचे नियम",
        title_hi: "गति के नियम",
        description: "Distance and displacement, speed and velocity, acceleration, Newton's three laws of motion.",
        description_mr: "अंतर व विस्थापन, चाल व वेग, त्वरण, न्यूटनचे गतीविषयक तीन नियम व संवेग अक्षय्यतेचा सिद्धांत.",
        description_hi: "दूरी और विस्थापन, चाल और वेग, त्वरण तथा न्यूटन के गति नियम।",
        estimatedMinutes: 50,
        learningObjectives: ["Differentiate distance from displacement", "Apply Newton's three laws of motion"],
        learningObjectives_mr: ["अंतर आणि विस्थापनातील फरक समजणे", "न्यूटनच्या तिन्ही नियमांची उदाहरणे सोडवणे"],
        learningObjectives_hi: ["दूरी और विस्थापन में अंतर स्पष्ट करना", "न्यूटन के गति नियमों को समझना"],
        lessons: [
          {
            id: "c9_sci_ch1_l1",
            lessonNumber: 1,
            title: "Motion, Speed, and Velocity",
            title_mr: "गती, चाल आणि वेग",
            title_hi: "गति, चाल और वेग",
            topic: "Scalars and Vectors in Motion",
            topic_mr: "अदिश व सदिश राशी",
            topic_hi: "अदिश और सदिश राशियाँ",
            objective: "Understand concepts of scalar speed and vector velocity.",
            objective_mr: "चाल ही अदिश राशी आणि वेग ही सदिश राशी आहे हे समजून घेणे.",
            objective_hi: "चाल और वेग के सिद्धांतों को समझना।",
            explanation: [
              {
                type: "paragraph",
                text: "Distance is the actual length of path traveled. Displacement is the minimum straight line distance between starting and finishing points.",
                text_mr: "अंतर म्हणजे प्रत्यक्षात कापलेले एकूण अंतर होय. विस्थापन म्हणजे सुरुवातीचा बिंदू आणि अंतिम बिंदू यांमधील सर्वात कमी सरळ अंतर होय.",
                text_hi: "दूरी तय किए गए वास्तविक पथ की लंबाई है। विस्थापन प्रारंभिक और अंतिम बिंदु के बीच की न्यूनतम सीधी दूरी है।"
              }
            ],
            examples: [],
            practice: []
          }
        ],
        quiz: {
          id: "quiz_c9_sci_ch1",
          title: "Class 9 Laws of Motion Quiz",
          title_mr: "इयत्ता ९ वी गतीचे नियम चाचणी",
          title_hi: "कक्षा 9 गति के नियम क्विज़",
          totalMarks: 5,
          passingMarks: 3,
          questions: [
            {
              id: "q1",
              questionNumber: 1,
              question: "Newton's First Law of Motion describes which physical property?",
              question_mr: "न्यूटनचा गतीविषयक पहिला नियम कोणत्या गुणधर्माची व्याख्या करतो?",
              question_hi: "न्यूटन का प्रथम गति नियम किस भौतिक गुण की व्याख्या करता है?",
              options: ["Inertia (जडत्व)", "Force only", "Velocity", "Friction"],
              correctIndex: 0,
              explanation: "Newton's first law defines Inertia — the inability of a body to change its state of rest or uniform motion by itself.",
              explanation_mr: "न्यूटनचा पहिला नियम 'जडत्व' या गुणधर्माची व्याख्या करतो.",
              explanation_hi: "न्यूटन का प्रथम नियम 'जड़त्व' की व्याख्या करता है।"
            }
          ]
        }
      }
    ]
  }
};

// Helper getter functions
export function getClasses() {
  return classesData;
}

export function getSubjectsForClass(classId) {
  const cId = parseInt(classId, 10);
  return subjectsData.filter(sub => sub.applicableClasses.includes(cId));
}

export function getChapters(classId, subjectId) {
  const cId = parseInt(classId, 10);
  if (curriculumData[cId] && curriculumData[cId][subjectId]) {
    return curriculumData[cId][subjectId];
  }
  return [];
}

export function getChapterById(chapterId) {
  for (const cId in curriculumData) {
    for (const subId in curriculumData[cId]) {
      const found = curriculumData[cId][subId].find(ch => ch.id === chapterId);
      if (found) return found;
    }
  }
  return null;
}

export function getLessonById(lessonId) {
  for (const cId in curriculumData) {
    for (const subId in curriculumData[cId]) {
      for (const ch of curriculumData[cId][subId]) {
        const found = ch.lessons?.find(l => l.id === lessonId);
        if (found) return { ...found, chapter: ch };
      }
    }
  }
  return null;
}

export function getQuizById(quizId) {
  for (const cId in curriculumData) {
    for (const subId in curriculumData[cId]) {
      for (const ch of curriculumData[cId][subId]) {
        if (ch.quiz && ch.quiz.id === quizId) {
          return { ...ch.quiz, chapter: ch };
        }
      }
    }
  }
  return null;
}
