// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His constant glances at the clock were an __________ that he was eager to leave.",
        chinese_question: "他不断看钟表是他急于离开的__________。",
        answers: [
            { option: "A", answer: "announcement", chinese_answer: "公告", chinese_romanization: "gōnggào" },
            { option: "B", answer: "declaration", chinese_answer: "声明", chinese_romanization: "shēngmíng" },
            { option: "C", answer: "explicitness", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "D", answer: "intimation", chinese_answer: "暗示", chinese_romanization: "ànshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intimation' refers to a subtle or indirect hint or suggestion." +
            "<br><br>" +
            "(A) 'announcement' refers to a public and typically formal statement about a fact, occurrence, or intention." +
            "<br><br>" +
            "(B) 'declaration' refers to a formal or explicit statement or announcement." +
            "<br><br>" +
            "(C) 'explicitness' refers to the quality of being clear and fully expressed.",
        chinese_explanation: "(D) '暗示' 指的是微妙的或间接的提示或建议。" +
            "<br><br>" +
            "(A) '公告' 指的是关于事实、事件或意图的公开且通常是正式的声明。" +
            "<br><br>" +
            "(B) '声明' 指的是正式的或明确的陈述或公告。" +
            "<br><br>" +
            "(C) '明确' 指的是清楚和充分表达的质量。"
    },
    {
        id: 2,
        question: "The luxury brand’s __________ included celebrities, business magnates, and affluent individuals from around the world.",
        chinese_question: "这家奢侈品牌的 __________ 包括来自世界各地的名人、商业巨头和富裕人士。",
        answers: [
            { option: "A", answer: "employees", chinese_answer: "员工", chinese_romanization: "yuángōng" },
            { option: "B", answer: "clientele", chinese_answer: "客户", chinese_romanization: "kèhù" },
            { option: "C", answer: "suppliers", chinese_answer: "供应商", chinese_romanization: "gōngyìngshāng" },
            { option: "D", answer: "competitors", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clientele' means the clients or customers, as of a professional person or shop, considered collectively." +
            "<br><br>" +
            "(A) 'employees' means individuals who work for another person or for a company for wages or a salary." +
            "<br><br>" +
            "(C) 'suppliers' means companies or individuals that provide products or services to another entity." +
            "<br><br>" +
            "(D) 'competitors' means companies or individuals that compete with one another in the same industry.",
        chinese_explanation: "'客户' 一词意味着作为专业人士或商店的客户或顾客，被集体考虑。" +
            "<br><br>" +
            "(A) '员工' 意味着为另一个人或公司工作并获得工资或薪水的个人。" +
            "<br><br>" +
            "(C) '供应商' 意味着向另一实体提供产品或服务的公司或个人。" +
            "<br><br>" +
            "(D) '竞争对手' 意味着在同一行业中互相竞争的公司或个人。"
    },
    {
        id: 3,
        question: "The project gained __________ after receiving additional funding, moving quickly towards completion.",
        chinese_question: "项目在获得额外资金后获得了 __________，迅速朝着完成方向迈进。",
        answers: [
            { option: "A", answer: "inertia", chinese_answer: "惯性", chinese_romanization: "guànxìng" },
            { option: "B", answer: "momentum", chinese_answer: "动力", chinese_romanization: "dònglì" },
            { option: "C", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'momentum' means the quantity of motion of a moving body, measured as a product of its mass and velocity." +
            "<br><br>" +
            "(A) 'inertia' means a tendency to do nothing or to remain unchanged." +
            "<br><br>" +
            "(C) 'stagnation' means the state of not flowing or moving." +
            "<br><br>" +
            "(D) 'delay' means a period of time by which something is late or postponed.",
        chinese_explanation: "(B) '动力' 一词意味着运动物体的运动量，测量为其质量和速度的乘积。" +
            "<br><br>" +
            "(A) '惯性' 意味着倾向于不做任何事或保持不变。" +
            "<br><br>" +
            "(C) '停滞' 意味着不流动或不移动的状态。" +
            "<br><br>" +
            "(D) '延迟' 意味着某事迟到或推迟的一段时间。"
    },
    {
        id: 4,
        question: "The worker sent a __________ to his family back home to support them financially.",
        chinese_question: "工人寄了一笔 __________ 给家人，以支持他们的经济。",
        answers: [
            { option: "A", answer: "bill", chinese_answer: "账单", chinese_romanization: "zhàngdān" },
            { option: "B", answer: "remittance", chinese_answer: "汇款", chinese_romanization: "huìkuǎn" },
            { option: "C", answer: "invoice", chinese_answer: "发票", chinese_romanization: "fāpiào" },
            { option: "D", answer: "payment", chinese_answer: "付款", chinese_romanization: "fùkuǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'remittance' means a sum of money sent in payment or as a gift." +
            "<br><br>" +
            "(A) 'bill' means an amount of money owed for goods supplied or services rendered." +
            "<br><br>" +
            "(C) 'invoice' means a list of goods sent or services provided, with a statement of the sum due for these; a bill." +
            "<br><br>" +
            "(D) 'payment' means the action or process of paying someone or something or of being paid.",
        chinese_explanation: "(B) '汇款' 一词意味着支付或赠送的一笔钱。" +
            "<br><br>" +
            "(A) '账单' 意味着供应的商品或提供的服务所欠的金额。" +
            "<br><br>" +
            "(C) '发票' 意味着发送的货物或提供的服务的清单，并附有应付金额的声明；账单。" +
            "<br><br>" +
            "(D) '付款' 意味着支付某人或某物的行为或过程或被支付。"
    },
    {
        id: 5,
        question: "The poet composed an __________ to mourn the passing of his beloved mentor, capturing his sorrow in poignant verses.",
        chinese_question: "诗人为他心爱的导师的逝世写了一首 __________，用感人的诗句表达了他的悲伤。",
        answers: [
            { option: "A", answer: "ode", chinese_answer: "颂歌", chinese_romanization: "sònggē" },
            { option: "B", answer: "elegy", chinese_answer: "挽歌", chinese_romanization: "wǎngē" },
            { option: "C", answer: "sonnet", chinese_answer: "十四行诗", chinese_romanization: "shísì háng shī" },
            { option: "D", answer: "limerick", chinese_answer: "五行打油诗", chinese_romanization: "wǔháng dǎyǒushī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elegy' means a poem of serious reflection, typically a lament for the dead." +
            "<br><br>" +
            "(A) 'ode' means a lyric poem in the form of an address to a particular subject." +
            "<br><br>" +
            "(C) 'sonnet' means a poem of fourteen lines using any of a number of formal rhyme schemes." +
            "<br><br>" +
            "(D) 'limerick' means a humorous five-line poem with a rhyme scheme aabba.",
        chinese_explanation: "(B) '挽歌' 一词意味着一种严肃反思的诗，通常是为死者而作的哀歌。" +
            "<br><br>" +
            "(A) '颂歌' 意味着一种致特定主题的抒情诗。" +
            "<br><br>" +
            "(C) '十四行诗' 意味着一种使用多种正式押韵形式的十四行诗。" +
            "<br><br>" +
            "(D) '五行打油诗' 意味着一种幽默的五行诗，押韵方案为aabba。"
    },
    {
        id: 6,
        question: "The sudden drop in temperature in July was an __________ that puzzled the meteorologists, who expected a heatwave instead.",
        chinese_question: "七月气温的突然下降是一个 __________，让气象学家感到困惑，他们本预计会有热浪。",
        answers: [
            { option: "A", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
            { option: "B", answer: "aberration", chinese_answer: "反常现象", chinese_romanization: "fǎncháng xiànxiàng" },
            { option: "C", answer: "regularity", chinese_answer: "规律性", chinese_romanization: "guīlǜ xìng" },
            { option: "D", answer: "predictability", chinese_answer: "可预测性", chinese_romanization: "kě yùcè xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aberration' means a departure from what is normal, usual, or expected, typically one that is unwelcome." +
            "<br><br>" +
            "(A) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(C) 'regularity' means the state or quality of being regular." +
            "<br><br>" +
            "(D) 'predictability' means the ability to be predicted.",
        chinese_explanation: "(B) '反常现象' 一词意味着与正常、通常或预期的情况的偏离，通常是不受欢迎的。" +
            "<br><br>" +
            "(A) '常态' 意味着通常、典型或标准的事物。" +
            "<br><br>" +
            "(C) '规律性' 意味着规律的状态或质量。" +
            "<br><br>" +
            "(D) '可预测性' 意味着可以预测的能力。"
    },
    {
        id: 7,
        question: "Many people mistakenly believe that a single __________ can solve all of their health problems, but true wellness often requires a more holistic approach.",
        chinese_question: "许多人误以为一个 __________ 可以解决他们所有的健康问题，但真正的健康往往需要更全面的方法。",
        answers: [
            { option: "A", answer: "toxin", chinese_answer: "毒素", chinese_romanization: "dúsù" },
            { option: "B", answer: "illness", chinese_answer: "疾病", chinese_romanization: "jíbìng" },
            { option: "C", answer: "panacea", chinese_answer: "万能药", chinese_romanization: "wànnéng yào" },
            { option: "D", answer: "remedy", chinese_answer: "疗法", chinese_romanization: "liáofǎ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'panacea' means a solution or remedy for all difficulties or diseases." +
            "<br><br>" +
            "(A) 'toxin' means a poisonous substance produced within living cells or organisms." +
            "<br><br>" +
            "(B) 'illness' means a disease or period of sickness affecting the body or mind." +
            "<br><br>" +
            "(D) 'remedy' means a medicine or treatment for a disease or injury.",
        chinese_explanation: "(C) '万能药' 一词意味着解决所有困难或疾病的解决方案或药物。" +
            "<br><br>" +
            "(A) '毒素' 意味着在活细胞或生物体内产生的有毒物质。" +
            "<br><br>" +
            "(B) '疾病' 意味着影响身体或心灵的疾病或病期。" +
            "<br><br>" +
            "(D) '疗法' 意味着用于治疗疾病或伤害的药物或治疗方法。"
    },
    {
        id: 8,
        question: "There is a clear __________ between what he said and what he did, making it hard to trust his words.",
        chinese_question: "他所说的和他所做的之间有明显的 __________，让人很难信任他的话。",
        answers: [
            { option: "A", answer: "alignment", chinese_answer: "对齐", chinese_romanization: "duì qí" },
            { option: "B", answer: "discrepancy", chinese_answer: "差异", chinese_romanization: "chāyì" },
            { option: "C", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discrepancy' means a lack of compatibility or similarity between two or more facts." +
            "<br><br>" +
            "(A) 'alignment' means arrangement in a straight line or in correct relative positions." +
            "<br><br>" +
            "(C) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect.",
        chinese_explanation: "(B) '差异' 一词意味着两种或多种事实之间缺乏兼容性或相似性。" +
            "<br><br>" +
            "(A) '对齐' 意味着排列在一条直线上或在正确的相对位置上。" +
            "<br><br>" +
            "(C) '一致' 意味着意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发出的音乐音符的组合以产生悦耳的效果。"
    },
    {
        id: 9,
        question: "The poet's __________ on the tombstone was a beautiful tribute to the life of the deceased.",
        chinese_question: "墓碑上的诗人的 __________ 是对已故者生活的美丽致敬。",
        answers: [
            { option: "A", answer: "essay", chinese_answer: "论文", chinese_romanization: "lùnwén" },
            { option: "B", answer: "novel", chinese_answer: "小说", chinese_romanization: "xiǎoshuō" },
            { option: "C", answer: "epitaph", chinese_answer: "墓志铭", chinese_romanization: "mùzhìmíng" },
            { option: "D", answer: "report", chinese_answer: "报告", chinese_romanization: "bàogào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'epitaph' means a phrase or statement written in memory of a person who has died, especially as an inscription on a tombstone." +
            "<br><br>" +
            "(A) 'essay' means a short piece of writing on a particular subject." +
            "<br><br>" +
            "(B) 'novel' means a fictitious prose narrative of book length, typically representing character and action with some degree of realism." +
            "<br><br>" +
            "(D) 'report' means give a spoken or written account of something that one has observed, heard, done, or investigated.",
        chinese_explanation: "(C) '墓志铭' 一词意味着为纪念已故者所写的短语或声明，尤其是作为墓碑上的题词。" +
            "<br><br>" +
            "(A) '论文' 意味着关于特定主题的简短写作。" +
            "<br><br>" +
            "(B) '小说' 意味着一本长度的虚构散文叙事，通常以某种程度的现实主义描绘人物和行动。" +
            "<br><br>" +
            "(D) '报告' 意味着对观察、听到、做过或调查的事情进行口头或书面叙述。"
    },
    {
        id: 10,
        question: "The speaker faced a __________ of questions from the audience, struggling to address them all in the limited time.",
        chinese_question: "演讲者面临着来自观众的 __________ 问题，努力在有限的时间内回答所有问题。",
        answers: [
            { option: "A", answer: "trickle", chinese_answer: "细流", chinese_romanization: "xìliú" },
            { option: "B", answer: "barrage", chinese_answer: "连珠炮", chinese_romanization: "liánzhūpào" },
            { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'barrage' means a concentrated outpouring, as of questions or blows." +
            "<br><br>" +
            "(A) 'trickle' means a small flow of liquid." +
            "<br><br>" +
            "(C) 'whisper' means speak very softly using one's breath without one's vocal cords, especially for the sake of privacy." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(B) '连珠炮' 一词意味着集中涌出的提问或打击。" +
            "<br><br>" +
            "(A) '细流' 意味着少量的液体流动。" +
            "<br><br>" +
            "(C) '低语' 意味着用呼吸非常轻声地说话，尤其是为了隐私。" +
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
