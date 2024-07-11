// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The speaker’s __________ delivery of the speech captivated the audience and left a lasting impression.",
        chinese_question: "演讲者 __________ 的演讲吸引了观众并留下了深刻的印象。",
        answers: [
            { option: "A", answer: "eloquent", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "disjointed", chinese_answer: "支离破碎", chinese_romanization: "zhīlí pòsuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eloquent' means fluent or persuasive in speaking or writing." +
            "<br><br>" +
            "(B) 'hesitant' means unsure or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious." +
            "<br><br>" +
            "(D) 'disjointed' means lacking a coherent sequence or connection.",
        chinese_explanation: "(A) '雄辩'一词意味着在讲话或写作中流利或有说服力。" +
            "<br><br>" +
            "(B) '犹豫' 意味着不确定或行动缓慢。" +
            "<br><br>" +
            "(C) '单调' 意味着乏味、沉闷和重复。" +
            "<br><br>" +
            "(D) '支离破碎' 意味着缺乏连贯的顺序或连接。"
    },
    {
        id: 2,
        question: "The project failed due to the __________ planning and lack of organization.",
        chinese_question: "项目失败是由于 __________ 的规划和缺乏组织。",
        answers: [
            { option: "A", answer: "methodical", chinese_answer: "有条不紊", chinese_romanization: "yǒutiáo bù wěn" },
            { option: "B", answer: "systematic", chinese_answer: "系统", chinese_romanization: "xìtǒng" },
            { option: "C", answer: "haphazard", chinese_answer: "杂乱无章", chinese_romanization: "záluàn wúzhāng" },
            { option: "D", answer: "orderly", chinese_answer: "整齐", chinese_romanization: "zhěngqí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(A) 'methodical' means done according to a systematic or established form of procedure." +
            "<br><br>" +
            "(B) 'systematic' means done or acting according to a fixed plan or system; methodical." +
            "<br><br>" +
            "(D) 'orderly' means neatly and methodically arranged.",
        chinese_explanation: "(C) '杂乱无章' 一词意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(A) '有条不紊' 意味着根据系统或既定程序完成的。" +
            "<br><br>" +
            "(B) '系统' 意味着根据固定计划或系统完成或行动；有条不紊的。" +
            "<br><br>" +
            "(D) '整齐' 意味着整齐有条不紊地安排。"
    },
    {
        id: 3,
         question: "The detective's __________ observations quickly led to the identification of the suspect.",
        chinese_question: "侦探 __________ 的观察迅速导致了嫌疑人的识别。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "naive", chinese_answer: "幼稚", chinese_romanization: "yòuzhì" },
            { option: "C", answer: "perspicacious", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "D", answer: "foolish", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perspicacious' means having a ready insight into and understanding of things." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general." +
            "<br><br>" +
            "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'foolish' means lacking good sense or judgment.",
        chinese_explanation: "(C) '敏锐' 一词意味着对事物有准备的洞察力和理解力。" +
            "<br><br>" +
            "(A) '无知' 意味着普遍缺乏知识或意识。" +
            "<br><br>" +
            "(B) '幼稚' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(D) '愚蠢' 意味着缺乏良好的判断力。"
    },
    {
        id: 4,
        question: "The committee members had __________ opinions on the issue, making it difficult to reach a consensus.",
        chinese_question: "委员会成员对该问题有 __________ 的意见，因此难以达成共识。",
        answers: [
            { option: "A", answer: "similar", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "B", answer: "identical", chinese_answer: "相同", chinese_romanization: "xiāngtóng" },
            { option: "C", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "disparate", chinese_answer: "截然不同", chinese_romanization: "jiérán bùtóng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disparate' means essentially different in kind; not allowing comparison." +
            "<br><br>" +
            "(A) 'similar' means resembling without being identical." +
            "<br><br>" +
            "(B) 'identical' means similar in every detail; exactly alike." +
            "<br><br>" +
            "(C) 'harmonious' means forming a pleasing or consistent whole.",
        chinese_explanation: "(D) '截然不同' 一词意味着本质上不同的；不允许比较的。" +
            "<br><br>" +
            "(A) '相似' 意味着相似但不完全相同。" +
            "<br><br>" +
            "(B) '相同' 意味着每个细节都相似；完全相同的。" +
            "<br><br>" +
            "(C) '和谐' 意味着形成一个令人愉快或一致的整体。"
    },
    {
        id: 5,
        question: "After the long hike, they enjoyed a __________ afternoon by the lake, basking in the sun.",
        chinese_question: "长途跋涉后，他们在湖边度过了一个 __________ 的下午，享受着阳光。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "B", answer: "lively", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "C", answer: "languid", chinese_answer: "慵懒", chinese_romanization: "yōnglǎn" },
            { option: "D", answer: "vigorous", chinese_answer: "精力旺盛", chinese_romanization: "jīnglì wàngshèng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'languid' means displaying or having a disinclination for physical exertion or effort; slow and relaxed." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'vigorous' means strong, healthy, and full of energy.",
        chinese_explanation: "(C) '慵懒' 一词意味着表现或具有不愿进行体力活动或努力的倾向；缓慢而放松的。" +
            "<br><br>" +
            "(A) '精力充沛' 意味着表现出或涉及极大的活动或活力。" +
            "<br><br>" +
            "(B) '活跃' 意味着充满生命力和能量的；积极和外向的。" +
            "<br><br>" +
            "(D) '精力旺盛' 意味着强壮、健康和充满能量的。"
    },
    {
        id: 6,
    question: "The climber found himself in a __________ position on the cliff, with loose rocks beneath his feet.",
    chinese_question: "登山者发现自己处于悬崖上的 __________ 位置，脚下是松散的岩石。",
    answers: [
        { option: "A", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "B", answer: "precarious", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
        { option: "C", answer: "secure", chinese_answer: "稳固", chinese_romanization: "wěngù" },
        { option: "D", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
        "<br><br>" +
        "(A) 'stable' means not likely to change or fail; firmly established." +
        "<br><br>" +
        "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
        "<br><br>" +
        "(D) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost.",
    chinese_explanation: "(B) '危险' 一词意味着未被牢固固定或处于危险中；很可能倒塌或坍塌。" +
        "<br><br>" +
        "(A) '稳定' 意味着不太可能改变或失败的；牢固确立的。" +
        "(C) '稳固' 意味着固定或牢固，以免让步、变松或丢失的。" +
        "<br><br>" +
        "(D) '安全' 意味着受到保护或不暴露于危险或风险的；不太可能受到伤害或丢失的。"
    },
    {
        id: 7,
        question: "His argument seemed convincing at first, but it was actually based on __________ reasoning.",
        chinese_question: "他的论点乍一看很有说服力，但实际上是基于 __________ 的推理。",
        answers: [
            { option: "A", answer: "sound", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "B", answer: "reliable", chinese_answer: "可靠", chinese_romanization: "kěkào" },
            { option: "C", answer: "solid", chinese_answer: "坚实", chinese_romanization: "jiānshí" },
            { option: "D", answer: "specious", chinese_answer: "似是而非", chinese_romanization: "sì shì ér fēi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'specious' means superficially plausible, but actually wrong." +
            "<br><br>" +
            "(A) 'sound' means based on reason, sense, or judgment." +
            "<br><br>" +
            "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(C) 'solid' means firm and stable in shape; not liquid or fluid.",
        chinese_explanation: "(D) '似是而非' 一词意味着表面上似乎合理，但实际上是错误的。" +
            "<br><br>" +
            "(A) '合理' 意味着基于理由、感官或判断的。" +
            "<br><br>" +
            "(B) '可靠' 意味着质量或性能始终如一的好；值得信赖的。" +
            "<br><br>" +
            "(C) '坚实' 意味着形状牢固稳定的；不是液体或流体的。"
    },
    {
        id: 8,
        question: "The __________ fox managed to outsmart the hunters and escape from the trap.",
        chinese_question: "这只 __________ 的狐狸成功地骗过了猎人并逃脱了陷阱。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "B", answer: "wily", chinese_answer: "狡猾", chinese_romanization: "jiǎohuá" },
            { option: "C", answer: "straightforward", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "D", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wily' means skilled at gaining an advantage, especially deceitfully." +
            "<br><br>" +
            "(A) 'naive' means (of a person or action) showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(B) '狡猾' 一词意味着擅长获得优势，尤其是欺骗性地。" +
            "<br><br>" +
            "(A) '天真' 意味着（指人或行为）表现出缺乏经验、智慧或判断的。" +
            "<br><br>" +
            "(C) '直率' 意味着不复杂且易于完成或理解的。" +
            "<br><br>" +
            "(D) '诚实' 意味着没有欺骗和虚伪的；真诚的。"
    },
    {
        id: 9,
        question: "The __________ salesman tricked customers into buying overpriced products.",
        chinese_question: "这位 __________ 的销售员欺骗顾客购买高价产品。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "guileful", chinese_answer: "狡猾", chinese_romanization: "jiǎohuá" },
            { option: "C", answer: "straightforward", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "D", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'guileful' means deceitful or cunning." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '狡猾' 一词意味着欺骗或狡猾的。" +
            "<br><br>" +
            "(A) '诚实' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(C) '直接' 意味着不复杂且易于完成或理解的。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有伪装或欺骗的；源于真实感情的。"
    },
    {
        id: 10,
        question: "The weather in the mountains can be quite __________, changing from sunny to stormy in minutes.",
        chinese_question: "山区的天气可以非常 __________，从晴天到暴风雨只需几分钟。",
        answers: [
            { option: "A", answer: "capricious", chinese_answer: "变化无常的", chinese_romanization: "biànhuà wúcháng de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "constant", chinese_answer: "不变的", chinese_romanization: "bùbiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capricious' means given to sudden and unaccountable changes of mood or behavior." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'constant' means occurring continuously over a period of time.",
        chinese_explanation: "(A) '变化无常的' 意味着情绪或行为突然且无法解释的变化。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不太可能改变或失败；稳固建立的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(D) '不变的' 意味着在一段时间内持续发生的。"
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
