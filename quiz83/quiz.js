// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her sudden arrival at the meeting seemed to __________ everyone, as they were not prepared for her presence.",
        chinese_question: "她突然出现在会议上似乎让每个人都感到 __________，因为他们没有准备好迎接她的到来。",
        answers: [
            { option: "A", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "B", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "C", answer: "settle", chinese_answer: "安顿", chinese_romanization: "āndùn" },
            { option: "D", answer: "discomfit", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discomfit' means to make someone feel uneasy or embarrassed." +
            "<br><br>" +
            "(A) 'welcome' means to greet someone in a friendly way." +
            "<br><br>" +
            "(B) 'please' means to cause someone to feel happy and satisfied." +
            "<br><br>" +
            "(C) 'settle' means to resolve or reach an agreement about something.",
        chinese_explanation: "(D) '使困惑' 意思是让某人感到不安或尴尬。" +
            "<br><br>" +
            "(A) '欢迎' 意思是以友好的方式迎接某人。" +
            "<br><br>" +
            "(B) '取悦' 意思是让某人感到高兴和满意。" +
            "<br><br>" +
            "(C) '安顿' 意思是解决或达成某事的协议。"
    },
    {
        id: 2,
        question: "The scandal served to __________ the politician's reputation, making it difficult for him to regain public trust.",
        chinese_question: "这起丑闻使这位政客的声誉受到 __________，使他难以重新获得公众信任。",
        answers: [
            { option: "A", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
            { option: "B", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "discredit", chinese_answer: "败坏", chinese_romanization: "bàihuài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discredit' means harm the good reputation of someone or something." +
            "<br><br>" +
            "(A) 'enhance' means intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(B) 'strengthen' means make or become stronger." +
            "<br><br>" +
            "(C) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(D) '败坏' 一词意味着损害某人或某物的良好声誉。" +
            "<br><br>" +
            "(A) '提高' 意味着增强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(B) '加强' 意味着使变强或变强。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 3,
        question: "After hearing about his friend's loss, he called to __________ and offer his support during the difficult time.",
        chinese_question: "听说朋友的失去后，他打电话去 __________ 并在困难时期提供支持。",
        answers: [
            { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'commiserate' means express or feel sympathy or pity; sympathize." +
            "<br><br>" +
            "(A) 'criticize' means indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(C) '同情' 一词意味着表达或感受到同情或怜悯；同情。" +
            "<br><br>" +
            "(A) '批评' 意味着以不赞成的方式指出（某人或某物）的错误。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许离开；遣散。"
    },
    {
        id: 4,
        question: "The teacher had to __________ the student for repeatedly disrupting the class, hoping it would improve his behaviour.",
        chinese_question: "老师不得不 __________ 这名学生，因为他屡次扰乱课堂，希望这能改善他的行为。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "chastise", chinese_answer: "惩戒", chinese_romanization: "chéngjiè" },
            { option: "C", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "D", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chastise' means rebuke or reprimand severely." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'reward' means give something to (someone) in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(D) 'compliment' means a polite expression of praise or admiration.",
        chinese_explanation: "(B) '惩戒' 一词意味着严厉地斥责或责备。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(C) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。" +
            "<br><br>" +
            "(D) '赞美' 意味着一种礼貌的赞扬或钦佩的表达。"
    },
    {
        id: 5,
        question: "She tried to __________ her friend into going to the party with her, using flattery and promises of a good time.",
        chinese_question: "她试图 __________ 她的朋友和她一起去参加聚会，用奉承和美好的时光来诱哄。",
        answers: [
            { option: "A", answer: "force", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
            { option: "B", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "cajole", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" },
            { option: "D", answer: "threaten", chinese_answer: "威胁", chinese_romanization: "wēixié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cajole' means persuade someone to do something by sustained coaxing or flattery." +
            "<br><br>" +
            "(A) 'force' means make (someone) do something against their will." +
            "<br><br>" +
            "(B) 'dissuade' means persuade (someone) not to take a particular course of action." +
            "<br><br>" +
            "(D) 'threaten' means state one's intention to take hostile action against someone in retribution for something done or not done.",
        chinese_explanation: "(C) '哄骗' 一词意味着通过持续的哄劝或奉承来说服某人做某事。" +
            "<br><br>" +
            "(A) '强迫' 意味着使（某人）违背自己的意愿做某事。" +
            "<br><br>" +
            "(B) '劝阻' 意味着说服（某人）不采取某特定行动。" +
            "<br><br>" +
            "(D) '威胁' 意味着表示有意对某人采取敌对行动以报复某事的行为或不作为。"
    },
    {
        id: 6,
        question: "The project was delayed because the company had to __________ a new agreement with the suppliers after the initial one fell through.",
        chinese_question: "由于最初的协议失败，公司不得不与供应商 __________ 新协议，导致项目延迟。",
        answers: [
            { option: "A", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "B", answer: "dissolve", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
            { option: "C", answer: "contract", chinese_answer: "签订", chinese_romanization: "qiāndìng" },
            { option: "D", answer: "terminate", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contract' means enter into a formal and legally binding agreement." +
            "<br><br>" +
            "(A) 'expand' means become or make larger or more extensive." +
            "<br><br>" +
            "(B) 'dissolve' means close down or dismiss (an assembly or official body)." +
            "<br><br>" +
            "(D) 'terminate' means bring to an end.",
        chinese_explanation: "(C) '签订' 一词意味着订立正式的具有法律约束力的协议。" +
            "<br><br>" +
            "(A) '扩展' 意味着变得或使变大或更广泛。" +
            "<br><br>" +
            "(B) '解散' 意味着关闭或解散（一个议会或官方机构）。" +
            "<br><br>" +
            "(D) '终止' 意味着结束。"
    },
    {
        id: 7,
        question: "He would often __________ his competitors in order to make his own achievements seem more impressive.",
        chinese_question: "他经常 __________ 他的竞争对手，以使自己的成就显得更为令人印象深刻。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "C", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "D", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disparage' means regard or represent as being of little worth." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'commend' means praise formally or officially." +
            "<br><br>" +
            "(D) 'compliment' means a polite expression of praise or admiration.",
        chinese_explanation: "(B) '贬低' 一词意味着认为或代表某事物价值低。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(C) '表扬' 意味着正式或官方地赞扬。" +
            "<br><br>" +
            "(D) '赞美' 意味着一种礼貌的赞扬或钦佩的表达。"
    },
    {
        id: 8,
        question: "He tended to __________ the efforts of his colleagues, often belittling their hard work in front of others.",
        chinese_question: "他倾向于 __________ 同事们的努力，经常在别人面前贬低他们的辛勤工作。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "deprecate", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deprecate' means express disapproval of." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'admire' means regard with respect or warm approval." +
            "<br><br>" +
            "(D) 'support' means give assistance to, especially financially; enable to function or act.",
        chinese_explanation: "(B) '贬低' 一词意味着表示不赞成。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(C) '钦佩' 意味着以尊重或热情的认可对待。" +
            "<br><br>" +
            "(D) '支持' 意味着给予援助，特别是经济上；使其能够运作或行动。"
    },
    {
        id: 9,
        question: "The leader's fiery speech served to __________ the crowd, sparking a wave of protests across the city.",
        chinese_question: "领导人的激烈讲话 __________ 了人群，引发了全市范围的抗议浪潮。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平息", chinese_romanization: "píngxī" },
            { option: "B", answer: "appease", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "C", answer: "pacify", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "D", answer: "incite", chinese_answer: "煽动", chinese_romanization: "shāndòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'incite' means encourage or stir up (violent or unlawful behavior)." +
            "<br><br>" +
            "(A) 'calm' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(B) 'appease' means pacify or placate (someone) by acceding to their demands." +
            "<br><br>" +
            "(C) 'pacify' means quell the anger, agitation, or excitement of.",
        chinese_explanation: "(D) '煽动' 一词意味着鼓励或煽动（暴力或非法行为）。" +
            "<br><br>" +
            "(A) '平息' 意味着使（某人）安静和平静；抚慰。" +
            "<br><br>" +
            "(B) '安抚' 意味着通过满足他们的要求来平息或安抚（某人）。" +
            "<br><br>" +
            "(C) '抚慰' 意味着平息愤怒、激动或兴奋。"
    },
    {
        id: 10,
        question: "The high cost of the equipment __________ many small businesses from entering the market.",
        chinese_question: "设备的高成本 __________ 了许多小企业进入市场。",
        answers: [
            { option: "A", answer: "enable", chinese_answer: "使能够", chinese_romanization: "shǐ nénggòu" },
            { option: "B", answer: "preclude", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "C", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "D", answer: "permit", chinese_answer: "准许", chinese_romanization: "zhǔnxǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'preclude' means prevent from happening; make impossible." +
            "<br><br>" +
            "(A) 'enable' means give (someone or something) the authority or means to do something." +
            "<br><br>" +
            "(C) 'allow' means let (someone) have or do something." +
            "<br><br>" +
            "(D) 'permit' means give authorization or consent to (someone) to do something.",
        chinese_explanation: "(B) '阻止' 一词意味着防止发生；使不可能。" +
            "<br><br>" +
            "(A) '使能够' 意味着给予（某人或某物）权力或手段做某事。" +
            "<br><br>" +
            "(C) '允许' 意味着让（某人）拥有或做某事。" +
            "<br><br>" +
            "(D) '准许' 意味着给予（某人）做某事的授权或同意。"
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
