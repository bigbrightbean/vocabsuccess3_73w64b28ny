// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ smell from the polluted river made the nearby residents complain to the authorities.",
        chinese_question: "污染河流散发出的 __________ 气味让附近的居民向当局抱怨。",
        answers: [
            { option: "A", answer: "refreshing", chinese_answer: "令人耳目一新的", chinese_romanization: "lìngrén ěrmù yīxīn de" },
            { option: "B", answer: "clean", chinese_answer: "干净的", chinese_romanization: "gānjìng de" },
            { option: "C", answer: "sweet", chinese_answer: "甜美的", chinese_romanization: "tiánměi de" },
            { option: "D", answer: "noisome", chinese_answer: "恶臭的", chinese_romanization: "èchòu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'noisome' means having an extremely offensive smell." +
            "<br><br>" +
            "(A) 'refreshing' means giving a fresh sense of energy or an invigorating effect." +
            "<br><br>" +
            "(B) 'clean' means free from dirt, marks, or stains." +
            "<br><br>" +
            "(C) 'sweet' means having the pleasant taste characteristic of sugar or honey.",
        chinese_explanation: "(D) '恶臭的' 意味着有极其令人反感的气味。" +
            "<br><br>" +
            "(A) '令人耳目一新的' 意味着给予新鲜的能量或振奋的效果。" +
            "<br><br>" +
            "(B) '干净的' 意味着没有污垢、痕迹或污渍的。" +
            "<br><br>" +
            "(C) '甜美的' 意味着具有糖或蜂蜜的宜人味道。"
    },
    {
        id: 2,
        question: "Our plans are __________ upon the weather, so we will decide on the day of the event.",
        chinese_question: "我们的计划 __________ 天气而定，所以我们会在活动当天决定。",
        answers: [
            { option: "A", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "B", answer: "independent", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
            { option: "C", answer: "contingent", chinese_answer: "视情况而定的", chinese_romanization: "shì qíngkuàng ér dìng de" },
            { option: "D", answer: "assured", chinese_answer: "保证的", chinese_romanization: "bǎozhèng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contingent' means subject to chance; occurring or existing only if certain circumstances are the case." +
            "<br><br>" +
            "(A) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(B) 'independent' means free from outside control; not subject to another's authority." +
            "<br><br>" +
            "(D) 'assured' means confident; protected against discontinuance or change.",
        chinese_explanation: "(C) '视情况而定的' 一词意味着依靠机会的；只有在某些情况下才会发生或存在的。" +
            "<br><br>" +
            "(A) '确定的' 意味着确知的；超出怀疑的。" +
            "<br><br>" +
            "(B) '独立的' 意味着不受外部控制的；不受他人权威支配的。" +
            "<br><br>" +
            "(D) '保证的' 意味着自信的；受到保护不被中断或改变的。"
    },
    {
        id: 3,
        question: "Her __________ understanding of the new software allowed her to master its functions quickly without needing extensive training.",
        chinese_question: "她对新软件的 __________ 理解使她在不需要大量培训的情况下迅速掌握了其功能。",
        answers: [
            { option: "A", answer: "logical", chinese_answer: "逻辑的", chinese_romanization: "luójí de" },
            { option: "B", answer: "analytical", chinese_answer: "分析的", chinese_romanization: "fēnxī de" },
            { option: "C", answer: "intuitive", chinese_answer: "直觉的", chinese_romanization: "zhíjué de" },
            { option: "D", answer: "methodical", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive." +
            "<br><br>" +
            "(A) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(B) 'analytical' means relating to or using analysis or logical reasoning." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(C) '直觉的' 一词意味着基于或使用感觉为真实的，即使没有有意识的推理；本能的。" +
            "<br><br>" +
            "(A) '逻辑的' 意味着按照逻辑或正式论证的规则。" +
            "<br><br>" +
            "(B) '分析的' 意味着与分析或逻辑推理有关的。" +
            "<br><br>" +
            "(D) '系统的' 意味着按照系统或既定程序完成的。"
    },
    {
        id: 4,
        question: "The company faced __________ measures after violating environmental regulations.",
        chinese_question: "公司因违反环境法规而面临 __________ 措施。",
        answers: [
            { option: "A", answer: "rewarding", chinese_answer: "奖励的", chinese_romanization: "jiǎnglì de" },
            { option: "B", answer: "punitive", chinese_answer: "惩罚的", chinese_romanization: "chéngfá de" },
            { option: "C", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" },
            { option: "D", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'punitive' means inflicting or intended as punishment." +
            "<br><br>" +
            "(A) 'rewarding' means providing satisfaction; gratifying." +
            "<br><br>" +
            "(C) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(D) 'forgiving' means ready and willing to forgive.",
        chinese_explanation: "(B) '惩罚的' 一词意味着施加或打算作为惩罚。" +
            "<br><br>" +
            "(A) '奖励的' 意味着提供满意；令人满足。" +
            "<br><br>" +
            "(C) '宽松的' 意味着（惩罚或有权威的人）宽容、仁慈或宽容的。" +
            "<br><br>" +
            "(D) '宽恕的' 意味着准备和愿意原谅的。"
    },
    {
        id: 5,
        question: "Basic human rights are __________, applying to all individuals regardless of their background or nationality.",
        chinese_question: "基本人权是 __________ 的，适用于所有个人，不论他们的背景或国籍。",
        answers: [
            { option: "A", answer: "local", chinese_answer: "地方的", chinese_romanization: "dìfāng de" },
            { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "universal", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" },
            { option: "D", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'universal' means applicable to all cases." +
            "<br><br>" +
            "(A) 'local' means belonging or relating to a particular area or neighborhood, typically exclusively so." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent; few, small, or short." +
            "<br><br>" +
            "(D) 'rare' means (of an event, situation, or condition) not occurring very often.",
        chinese_explanation: "(C) '普遍的' 一词意味着适用于所有情况。" +
            "<br><br>" +
            "(A) '地方的' 意味着属于或涉及特定区域或社区的，通常是独有的。" +
            "<br><br>" +
            "(B) '有限的' 意味着在大小、数量或范围上受到限制的；少、短或短。" +
            "<br><br>" +
            "(D) '罕见的' 意味着（事件、情况或条件）不经常发生的。"
    },
    {
        id: 6,
        question: "They used a __________ shelter made of branches and leaves to protect themselves from the sudden rainstorm.",
        chinese_question: "他们用树枝和树叶搭建了一个 __________ 的庇护所，以保护自己免受突如其来的暴雨。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "makeshift", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "C", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'makeshift' means serving as a temporary substitute; sufficient for the time being." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'fixed' means fastened securely in position.",
        chinese_explanation: "(B) '临时的' 意味着作为临时替代品；暂时足够的。" +
            "<br><br>" +
            "(A) '永久的' 意味着持续或打算无限期地持续或保持不变的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着不太可能改变或失败；牢固确立的。" +
            "<br><br>" +
            "(D) '固定的' 意味着牢固地固定在位置上。"
    },
    {
        id: 7,
        question: "His __________ procrastination often led to missed deadlines and last-minute work.",
        chinese_question: "他 __________ 的拖延经常导致错过截止日期和最后一刻的工作。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "C", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "D", answer: "inveterate", chinese_answer: "根深蒂固的", chinese_romanization: "gēnshēndìgù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inveterate' means having a particular habit, activity, or interest that is long-established and unlikely to change." +
            "<br><br>" +
            "(A) 'occasional' means occurring or done infrequently and irregularly." +
            "<br><br>" +
            "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent.",
        chinese_explanation: "(D) '根深蒂固的' 意味着有某种长期形成且不太可能改变的习惯、活动或兴趣。" +
            "<br><br>" +
            "(A) '偶尔的' 意味着不经常和不规律地发生或完成的。" +
            "<br><br>" +
            "(B) '犹豫的' 意味着试探性的、不确定的或行动或说话缓慢的。" +
            "<br><br>" +
            "(C) '临时的' 意味着仅持续有限时间的；不是永久的。"
    },
    {
        id: 8,
        question: "The __________ political climate has everyone on edge, uncertain about what the future holds.",
        chinese_question: "__________ 的政治气候让每个人都紧张不安，对未来的不确定。",
        answers: [
            { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
            { option: "B", answer: "current", chinese_answer: "当前", chinese_romanization: "dāngqián" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "outdated", chinese_answer: "过时", chinese_romanization: "guòshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'current' means belonging to the present time; happening now." +
            "<br><br>" +
            "(A) 'past' means gone by in time and no longer existing." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'outdated' means no longer produced or used; out of date.",
        chinese_explanation: "(B) '当前' 一词意味着属于现在的时间；正在发生的。" +
            "<br><br>" +
            "(A) '过去' 意味着在时间上已经过去，不再存在。" +
            "<br><br>" +
            "(C) '无关' 意味着与某事无关或不相关。" +
            "<br><br>" +
            "(D) '过时' 意味着不再生产或使用；过时的。"
    },
    {
        id: 9,
        question: "The queen ruled as a __________ nation, making decisions without interference from other countries.",
        chinese_question: "女王以 __________ 国家统治，做出决策而不受其他国家干涉。",
        answers: [
            { option: "A", answer: "dependent", chinese_answer: "依赖", chinese_romanization: "yīlài" },
            { option: "B", answer: "sovereign", chinese_answer: "主权", chinese_romanization: "zhǔquán" },
            { option: "C", answer: "subordinate", chinese_answer: "从属", chinese_romanization: "cóngshǔ" },
            { option: "D", answer: "colonized", chinese_answer: "殖民", chinese_romanization: "zhímín" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sovereign' means possessing supreme or ultimate power." +
            "<br><br>" +
            "(A) 'dependent' means relying on someone or something else for support." +
            "<br><br>" +
            "(C) 'subordinate' means lower in rank or position." +
            "<br><br>" +
            "(D) 'colonized' means having been settled and ruled by another country.",
        chinese_explanation: "(B) '主权' 一词意味着拥有至高无上的权力。" +
            "<br><br>" +
            "(A) '依赖' 意味着依靠他人或其他事物的支持。" +
            "<br><br>" +
            "(C) '从属' 意味着等级或地位较低。" +
            "<br><br>" +
            "(D) '殖民' 意味着被另一个国家定居和统治。"
    },
    {
        id: 10,
        question: "The company is looking to hire __________ employees who will start working next month.",
        chinese_question: "公司正在寻找将于下个月开始工作的 __________ 员工。",
        answers: [
            { option: "A", answer: "former", chinese_answer: "前", chinese_romanization: "qián" },
            { option: "B", answer: "prospective", chinese_answer: "未来", chinese_romanization: "wèilái" },
            { option: "C", answer: "retired", chinese_answer: "退休", chinese_romanization: "tuìxiū" },
            { option: "D", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prospective' means expected or expecting to be something particular in the future." +
            "<br><br>" +
            "(A) 'former' means having previously filled a particular role or been a particular thing." +
            "<br><br>" +
            "(C) 'retired' means having left one's job and ceased to work." +
            "<br><br>" +
            "(D) 'past' means gone by in time and no longer existing.",
        chinese_explanation: "(B) '未来' 一词意味着预期或期待将来成为某个特定的人或事物。" +
            "<br><br>" +
            "(A) '前' 意味着以前担任过特定角色或曾是特定事物。" +
            "<br><br>" +
            "(C) '退休' 意味着已经离开工作岗位并停止工作。" +
            "<br><br>" +
            "(D) '过去' 意味着时间已经过去，不再存在。"
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
