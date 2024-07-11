// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ texts of the religion have been followed and revered for centuries.",
        chinese_question: "这个宗教的 __________ 文本已经被遵循和崇敬了几个世纪。",
        answers: [
            { option: "A", answer: "apocryphal", chinese_answer: "杜撰的", chinese_romanization: "dùzhuàn de" },
            { option: "B", answer: "nontraditional", chinese_answer: "非传统的", chinese_romanization: "fēi chuántǒng de" },
            { option: "C", answer: "canonical", chinese_answer: "经典的", chinese_romanization: "jīngdiǎn de" },
            { option: "D", answer: "unorthodox", chinese_answer: "非正统的", chinese_romanization: "fēi zhèngtǒng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'canonical' means according to or ordered by canon law; accepted as being accurate and authoritative." +
            "<br><br>" +
            "(A) 'apocryphal' means (of a story or statement) of doubtful authenticity, although widely circulated as being true." +
            "<br><br>" +
            "(B) 'nontraditional' means not based on or conforming to what is generally done or believed." +
            "<br><br>" +
            "(D) 'unorthodox' means contrary to what is usual, traditional, or accepted; not orthodox.",
        chinese_explanation: "(C) '经典的' 一词意味着根据或由教会法规定的；被接受为准确和权威的。" +
            "<br><br>" +
            "(A) '杜撰的' 意味着（指故事或声明）真实性可疑，尽管被广泛传播为真实的。" +
            "<br><br>" +
            "(B) '非传统的' 意味着不基于或不符合通常做或相信的。" +
            "<br><br>" +
            "(D) '非正统的' 意味着与通常的、传统的或公认的相反的；不正统的。"
    },
    {
        id: 2,
        question: "Despite the clear evidence presented to him, he remained __________ and refused to admit his mistake.",
        chinese_question: "尽管有明确的证据，他仍然 __________，拒绝承认自己的错误。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "B", answer: "compliant", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "obdurate", chinese_answer: "固执", chinese_romanization: "gùzhí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'obdurate' means stubbornly refusing to change one's opinion or course of action." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
            "<br><br>" +
            "(C) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(D) '固执' 一词意味着顽固地拒绝改变自己的意见或行动方针。" +
            "<br><br>" +
            "(A) '灵活' 意味着能够轻松弯曲而不折断的。" +
            "<br><br>" +
            "(B) '服从' 意味着倾向于同意他人或遵守规则，尤其是过度地。" +
            "<br><br>" +
            "(C) '合作' 意味着在实现共同目标方面相互帮助。"
    },
    {
        id: 3,
        question: "The company's growth remained __________ for years, with no significant changes in its market position or revenue.",
        chinese_question: "公司的增长多年来一直 __________，在市场地位或收入上没有显著变化。",
        answers: [
            { option: "A", answer: "dynamic", chinese_answer: "动态", chinese_romanization: "dòngtài" },
            { option: "B", answer: "static", chinese_answer: "静态", chinese_romanization: "jìngtài" },
            { option: "C", answer: "fluctuating", chinese_answer: "波动", chinese_romanization: "bōdòng" },
            { option: "D", answer: "progressive", chinese_answer: "进步", chinese_romanization: "jìnbù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'static' means lacking in movement, action, or change." +
            "<br><br>" +
            "(A) 'dynamic' means characterized by constant change, activity, or progress." +
            "<br><br>" +
            "(C) 'fluctuating' means rising and falling irregularly in number or amount." +
            "<br><br>" +
            "(D) 'progressive' means happening or developing gradually or in stages; proceeding step by step.",
        chinese_explanation: "(B) '静态' 一词意味着缺乏运动、行动或变化的。" +
            "<br><br>" +
            "(A) '动态' 意味着以不断变化、活动或进步为特征的。" +
            "<br><br>" +
            "(C) '波动' 意味着数量或数量不规则地上升和下降。" +
            "<br><br>" +
            "(D) '进步' 意味着逐渐或分阶段发生或发展的；一步一步地进行。"
    },
    {
        id: 4,
        question: "Their __________ dispute over the inheritance led to years of bitterness and hostility between the siblings.",
        chinese_question: "他们关于遗产的 __________ 争执导致了兄弟姐妹之间多年的怨恨和敌意。",
        answers: [
            { option: "A", answer: "amicable", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "rancorous", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
            { option: "C", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "D", answer: "friendly", chinese_answer: "友善", chinese_romanization: "yǒushàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancorous' means characterized by bitterness or resentment." +
            "<br><br>" +
            "(A) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(B) '怨恨' 一词意味着充满苦涩或怨恨的。" +
            "<br><br>" +
            "(A) '友好' 意味着具有友好的精神；没有严重的分歧或怨恨。" +
            "<br><br>" +
            "(C) '愉快' 意味着带来幸福满意或享受的感觉。" +
            "<br><br>" +
            "(D) '友善' 意味着友好和愉快。"
    },
    {
        id: 5,
        question: "The scientist's theory was __________, supported by extensive research and undeniable evidence.",
        chinese_question: "科学家的理论是 __________ 的，得到了广泛研究和不可否认的证据支持。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "B", answer: "unconvincing", chinese_answer: "不可信", chinese_romanization: "bù kěxìn" },
            { option: "C", answer: "questionable", chinese_answer: "可疑", chinese_romanization: "kěyí" },
            { option: "D", answer: "unassailable", chinese_answer: "无可争辩", chinese_romanization: "wú kě zhēngbiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unassailable' means unable to be attacked, questioned, or defeated." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'unconvincing' means failing to make someone believe that something is true or valid." +
            "<br><br>" +
            "(C) 'questionable' means doubtful as regards truth or quality.",
        chinese_explanation: "(D) '无可争辩' 意味着无法被攻击、质疑或击败。" +
            "<br><br>" +
            "(A) '弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(B) '不可信' 意味着未能使某人相信某事是真实或有效的。" +
            "<br><br>" +
            "(C) '可疑' 意味着对真实性或质量表示怀疑。"
    },
    {
        id: 6,
        question: "The team’s __________ preparation for the event ensured they were ready for any challenges that came their way.",
        chinese_question: "团队对活动的 __________ 准备确保他们准备好迎接任何挑战。",
        answers: [
            { option: "A", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "B", answer: "hasty", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "C", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" },
            { option: "D", answer: "casual", chinese_answer: "随意", chinese_romanization: "suíyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(B) 'hasty' means done with excessive speed." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount." +
            "<br><br>" +
            "(D) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(A) '彻底'一词意味着对每个细节的完全关注。" +
            "<br><br>" +
            "(B) '匆忙' 意味着以过快的速度完成。" +
            "<br><br>" +
            "(C) '最小' 意味着最小的数量。" +
            "<br><br>" +
            "(D) '随意' 意味着放松和不关心。"
    },
    {
        id: 7,
        question: "The artist’s __________ use of light and shadow gave the painting a sense of depth and realism.",
        chinese_question: "艺术家对光影的 __________ 运用使这幅画具有深度和现实感。",
        answers: [
            { option: "A", answer: "masterful", chinese_answer: "高超", chinese_romanization: "gāochāo" },
            { option: "B", answer: "amateur", chinese_answer: "业余", chinese_romanization: "yèyú" },
            { option: "C", answer: "crude", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "D", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'masterful' means performed or performing very skillfully." +
            "<br><br>" +
            "(B) 'amateur' means engaging or engaged in without payment; non-professional." +
            "<br><br>" +
            "(C) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(D) 'clumsy' means awkward in movement or in handling things.",
        chinese_explanation: "(A) '高超'一词意味着非常熟练地执行或表现。" +
            "<br><br>" +
            "(B) '业余' 意味着无报酬地从事或参与；非专业的。" +
            "<br><br>" +
            "(C) '粗糙' 意味着处于自然或未加工状态；尚未加工或提炼。" +
            "<br><br>" +
            "(D) '笨拙' 意味着动作笨拙或处理事情时笨拙。"
    },
    {
        id: 8,
        question: "The forest was a __________ sanctuary, filled with vibrant flora and the soothing sounds of nature.",
        chinese_question: "这片森林是一个 __________ 的圣地，充满了生机勃勃的植物和宁静的自然声音。",
        answers: [
            { option: "A", answer: "desolate", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" },
            { option: "B", answer: "tranquil", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tranquil' means peaceful and calm." +
            "<br><br>" +
            "(A) 'desolate' means empty and barren." +
            "<br><br>" +
            "(C) 'chaotic' means very disorganized." +
            "<br><br>" +
            "(D) 'mundane' means ordinary and dull.",
        chinese_explanation: "(B) '宁静' 意味着和平与安静。" +
            "<br><br>" +
            "(A) '荒凉' 意味着空旷和荒芜。" +
            "<br><br>" +
            "(C) '混乱' 意味着非常混乱。" +
            "<br><br>" +
            "(D) '平凡' 意味着普通和单调。"
    },
    {
        id: 9,
        question: "The __________ relationship between the two countries made diplomatic negotiations difficult and tense.",
        chinese_question: "两国之间 __________ 的关系使得外交谈判变得困难和紧张。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "B", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "strained", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "D", answer: "easygoing", chinese_answer: "随和", chinese_romanization: "suíhé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'strained' means not relaxed or comfortable; tense or uneasy." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(B) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(D) 'easygoing' means relaxed and casual in style or manner.",
        chinese_explanation: "(C) '紧张' 一词意味着不放松或不舒服；紧张或不安的。" +
            "<br><br>" +
            "(A) '放松' 意味着没有紧张和焦虑；轻松。" +
            "<br><br>" +
            "(B) '和谐' 意味着形成一个令人愉快或一致的整体。" +
            "<br><br>" +
            "(D) '随和' 意味着风格或举止轻松随意的。"
    },
    {
        id: 10,
      question: "The villain's __________ plan involved stealing classified information from the government.",
        chinese_question: "这个反派的 __________ 计划涉及从政府窃取机密信息。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "B", answer: "nefarious", chinese_answer: "邪恶", chinese_romanization: "xié'è" },
            { option: "C", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "D", answer: "moral", chinese_answer: "道德", chinese_romanization: "dàodé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nefarious' means (typically of an action or activity) wicked or criminal." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'moral' means concerned with the principles of right and wrong behavior.",
        chinese_explanation: "(B) '邪恶' 一词意味着（通常指行为或活动）邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '正直' 意味着具有或表现出高道德标准的。" +
            "<br><br>" +
            "(C) '诚实' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(D) '道德' 意味着关心是非行为的原则的。"
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
