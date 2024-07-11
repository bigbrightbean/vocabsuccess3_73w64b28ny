// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "If we don't take action on climate change, many species could __________.",
        chinese_question: "如果我们不采取气候变化行动，许多物种可能会 __________。",
        answers: [
            { option: "A", answer: "perish", chinese_answer: "灭亡", chinese_romanization: "mièwáng" },
            { option: "B", answer: "adapt", chinese_answer: "适应", chinese_romanization: "shìyìng" },
            { option: "C", answer: "survive", chinese_answer: "生存", chinese_romanization: "shēngcún" },
            { option: "D", answer: "endure", chinese_answer: "忍受", chinese_romanization: "rěnshòu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perish' metaphorically means to come to an end or cease to exist." +
            "<br><br>" +
            "(B) 'adapt' means make (something) suitable for a new use or purpose; modify." +
            "<br><br>" +
            "(C) 'survive' means continue to live or exist, especially in spite of danger or hardship." +
            "<br><br>" +
            "(D) 'endure' means suffer (something painful or difficult) patiently.",
        chinese_explanation: "(A) '灭亡' 比喻结束或不再存在。" +
            "<br><br>" +
            "(B) '适应' 意味着使（某物）适合新用途或目的；修改。" +
            "<br><br>" +
            "(C) '生存' 意味着继续生活或存在，尤其是在危险或困难中。" +
            "<br><br>" +
            "(D) '忍受' 意味着耐心地忍受（某事痛苦或困难的事）。"
    },
    {
        id: 2,
        question: "To __________ knowledge, it's crucial to review and practice regularly.",
        chinese_question: "要__________知识，定期复习和练习是至关重要的。",
        answers: [
            { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "expel", chinese_answer: "驱逐", chinese_romanization: "qūzhú" },
            { option: "C", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'retain' means continue to have (something); keep possession of. Figuratively, it can mean maintaining knowledge or information." +
            "<br><br>" +
            "(A) 'release' means allow or enable to escape from confinement; set free." +
            "<br><br>" +
            "(B) 'expel' means deprive (someone) of membership of or involvement in a school or other organization." +
            "<br><br>" +
            "(D) 'discard' means get rid of (someone or something) as no longer useful or desirable.",
        chinese_explanation: "(C) '保留'一词意味着继续拥有（某物）；保留。比喻地，它可以表示保持知识或信息。" +
            "<br><br>" +
            "(A) '释放' 意味着允许或使其逃离监禁；释放。" +
            "<br><br>" +
            "(B) '驱逐' 意味着剥夺（某人）在学校或其他组织中的成员资格或参与。" +
            "<br><br>" +
            "(D) '丢弃' 意味着丢弃（某人或某物）作为不再有用或不受欢迎的东西。"
    },
    {
        id: 3,
        question: "She decided to __________ from public life after many years in the spotlight.",
        chinese_question: "在聚光灯下多年后，她决定__________公众生活。",
        answers: [
            { option: "A", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "B", answer: "retire", chinese_answer: "退出", chinese_romanization: "tuìchū" },
            { option: "C", answer: "begin", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "D", answer: "start", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retire' means leave one's job and cease to work, typically upon reaching the normal age for leaving employment. Figuratively, it can mean withdrawing from a prominent or active role." +
            "<br><br>" +
            "(A) 'continue' means persist in an activity or process." +
            "<br><br>" +
            "(C) 'begin' means start; perform or undergo the first part of (an action or activity)." +
            "<br><br>" +
            "(D) 'start' means begin or be reckoned from a particular point in time or space.",
        chinese_explanation: "(B) '退出'一词意味着离开工作岗位，通常是在达到正常离职年龄时停止工作。比喻地，它可以表示从显著或积极的角色中退出。" +
            "<br><br>" +
            "(A) '继续' 意味着在一项活动或过程中坚持。" +
            "<br><br>" +
            "(C) '开始' 意味着开始；进行（一个行动或活动）的第一部分。" +
            "<br><br>" +
            "(D) '开始' 意味着从特定的时间或空间开始或被认为是从某个点开始。"
    },
    {
        id: 4,
        question: "Investors __________ that the market would recover soon after the economic downturn.",
        chinese_question: "投资者__________市场将在经济低迷后很快复苏。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "dread", chinese_answer: "害怕", chinese_romanization: "hàipà" },
            { option: "C", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "D", answer: "anticipate", chinese_answer: "预计", chinese_romanization: "yùjì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'anticipate' means regard as probable; expect or predict. Figuratively, it can mean expecting or predicting future events." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'dread' means anticipate with great apprehension or fear." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(D) '预计'一词意味着认为可能发生；预期或预测。比喻地，它可以表示预期或预测未来事件。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意忽略。" +
            "<br><br>" +
            "(B) '害怕' 意味着怀着极大的恐惧预期。" +
            "<br><br>" +
            "(C) '解雇' 意味着命令或允许离开；遣散。"
    },
    {
        id: 5,
        question: "The market trends will __________ our future strategy.",
        chinese_question: "市场趋势将 __________ 我们的未来策略。",
        answers: [
            { option: "A", answer: "dictate", chinese_answer: "决定", chinese_romanization: "juédìng" },
            { option: "B", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "C", answer: "precede", chinese_answer: "先于", chinese_romanization: "xiān yú" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dictate' metaphorically means to control or decisively affect; determine." +
            "<br><br>" +
            "(B) 'follow' means come after in time or order." +
            "<br><br>" +
            "(C) 'precede' means come before (something) in time." +
            "<br><br>" +
            "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(A) '决定' 比喻控制或决定性地影响；决定。" +
            "<br><br>" +
            "(B) '跟随' 意味着时间或顺序上跟在之后。" +
            "<br><br>" +
            "(C) '先于' 意味着时间上先于（某事）。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
    },
    {
        id: 6,
        question: "The minor issue could __________ into a major problem if not addressed promptly.",
        chinese_question: "如果不及时解决，小问题可能会__________成大问题。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "deescalate", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
            { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'escalate' means increase rapidly. Figuratively, it can mean a situation or problem growing more severe or intense." +
            "<br><br>" +
            "(A) 'diminish' means make or become less." +
            "<br><br>" +
            "(B) 'deescalate' means reduce the intensity of (a conflict or potentially violent situation)." +
            "<br><br>" +
            "(D) 'resolve' means settle or find a solution to (a problem, dispute, or contentious matter).",
        chinese_explanation: "(C) '升级'一词意味着迅速增加。比喻地，它可以表示情况或问题变得更加严重或激烈。" +
            "<br><br>" +
            "(A) '减少' 意味着使或变少。" +
            "<br><br>" +
            "(B) '降级' 意味着减少（冲突或潜在暴力局势）的强度。" +
            "<br><br>" +
            "(D) '解决' 意味着解决或找到（问题、争议或争论事项）的解决方案。"
    },
    {
        id: 7,
        question: "She couldn't help but __________ when she received the acceptance letter from her dream university.",
        chinese_question: "收到梦想大学的录取通知书时，她忍不住__________。",
        answers: [
            { option: "A", answer: "mourn", chinese_answer: "哀悼", chinese_romanization: "āidào" },
            { option: "B", answer: "exult", chinese_answer: "欢欣鼓舞", chinese_romanization: "huānxīn gǔwǔ" },
            { option: "C", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "D", answer: "lament", chinese_answer: "悲叹", chinese_romanization: "bēitàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exult' means show or feel elation or jubilation, especially as the result of a success. Figuratively, it can mean feeling extreme happiness or triumph." + 
            "<br><br>" + 
            "(A) 'mourn' means feel or show deep sorrow or regret for (someone or their death), typically by following conventions such as the wearing of black clothes." + 
            "<br><br>" + 
            "(C) 'regret' means feel sad, repentant, or disappointed over (something that has happened or been done, especially a loss or missed opportunity)." + 
            "<br><br>" + 
            "(D) 'lament' means express passionate grief about.",
        chinese_explanation: "(B) '欢欣鼓舞'一词意味着展示或感到高兴，尤其是因为成功的结果。比喻地，它可以表示感到极度的快乐或胜利。" + 
            "<br><br>" + 
            "(A) '哀悼' 意味着对（某人或他们的死亡）感到深深的悲伤或后悔，通常通过遵循传统，如穿黑衣。" + 
            "<br><br>" + 
            "(C) '后悔' 意味着对（发生或做过的事，尤其是损失或错失机会）感到悲伤、悔恨或失望。" + 
            "<br><br>" + 
            "(D) '悲叹' 意味着表达热情的悲伤。"
    },
    {
        id: 8,
        question: "The economy started to __________ after the market crash.",
        chinese_question: "市场崩溃后，经济开始 __________。",
        answers: [
            { option: "A", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "B", answer: "prosper", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "C", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "D", answer: "flourish", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decline' metaphorically means become smaller, fewer, or less; decrease." + 
            "<br><br>" + 
            "(B) 'prosper' means succeed in material terms; be financially successful." + 
            "<br><br>" + 
            "(C) 'grow' means (of a living thing) undergo natural development by increasing in size and changing physically." + 
            "<br><br>" + 
            "(D) 'flourish' means grow or develop in a healthy or vigorous way, especially as the result of a particularly favorable environment.",
        chinese_explanation: "(A) '衰退' 比喻变得更小、更少或减少；减少。" + 
            "<br><br>" + 
            "(B) '繁荣' 意味着在物质方面取得成功；在经济上取得成功。" + 
            "<br><br>" + 
            "(C) '增长' 意味着（指生物）通过增加体积和身体上的变化而自然发展。" + 
            "<br><br>" + 
            "(D) '兴旺' 意味着在特别有利的环境中健康或茁壮地生长或发展。"
    },
    {
        id: 9,
        question: "The storm would __________ them of any chance to harvest their crops.",
        chinese_question: "风暴将 __________ 他们收获庄稼的任何机会。",
        answers: [
            { option: "A", answer: "boost", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "offer", chinese_answer: "提供", chinese_romanization: "tígōng" },
            { option: "C", answer: "deprive", chinese_answer: "剥夺", chinese_romanization: "bōduó" },
            { option: "D", answer: "create", chinese_answer: "创造", chinese_romanization: "chuàngzào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deprive' metaphorically means to take away or withhold something needed or desired." + 
            "<br><br>" + 
            "(A) 'boost' means help or encourage (something) to increase or improve." + 
            "<br><br>" + 
            "(B) 'offer' means present or proffer (something) for (someone) to accept or reject as so desired." + 
            "<br><br>" + 
            "(D) 'create' means bring (something) into existence.",
        chinese_explanation: "(C) '剥夺' 比喻拿走或扣留所需或所需的东西。" + 
            "<br><br>" + 
            "(A) '增强' 意味着帮助或鼓励（某事物）增加或改善。" + 
            "<br><br>" + 
            "(B) '提供' 意味着提出（某物）以供（某人）根据需要接受或拒绝。" + 
            "<br><br>" + 
            "(D) '创造' 意味着使（某物）存在。"
    },
    {
        id: 10,
        question: "He could __________ a hint of sarcasm in her voice.",
        chinese_question: "他能在她的声音中 __________ 出一丝讽刺的意味。",
        answers: [
            { option: "A", answer: "detect", chinese_answer: "察觉", chinese_romanization: "chájué" },
            { option: "B", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "miss", chinese_answer: "错过", chinese_romanization: "cuòguò" },
            { option: "D", answer: "evade", chinese_answer: "逃避", chinese_romanization: "táobì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'detect' metaphorically means to discover or notice something, especially something that is not easy to see, hear, etc." + 
            "<br><br>" + 
            "(B) 'overlook' means fail to notice (something)." + 
            "<br><br>" + 
            "(C) 'miss' means fail to notice, hear, or understand." + 
            "<br><br>" + 
            "(D) 'evade' means escape or avoid, especially by cleverness or trickery.",
        chinese_explanation: "(A) '察觉' 比喻发现或注意到某事，尤其是不容易看到、听到等。" + 
            "<br><br>" + 
            "(B) '忽略' 意味着未能注意到（某事）。" + 
            "<br><br>" + 
            "(C) '错过' 意味着未能注意到、听到或理解。" + 
            "<br><br>" + 
            "(D) '逃避' 意味着通过巧妙或狡诈逃避或避免。"
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
