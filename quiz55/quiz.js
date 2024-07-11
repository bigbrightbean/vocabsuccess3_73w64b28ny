// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the urgent need for action, the public showed a surprising amount of __________ toward the issue.",
        chinese_question: "尽管急需采取行动，公众对该问题表现出惊人的 __________。",
        answers: [
            { option: "A", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" },
            { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(A) 'concern' means relate to; be about." +
            "<br><br>" +
            "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'interest' means the state of wanting to know or learn about something or someone.",
        chinese_explanation: "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(A) '关心' 意味着与...有关；关于。" +
            "<br><br>" +
            "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '兴趣' 意味着想要了解或学习某事或某人的状态。"
    },
    {
        id: 2,
        question: "The professor's __________ on the theory was detailed and informative, helping the students understand the complex concept.",
        chinese_question: "教授对这一理论的 __________ 非常详细和信息丰富，帮助学生理解复杂的概念。",
        answers: [
            { option: "A", answer: "exposition", chinese_answer: "阐述", chinese_romanization: "chǎnshù" },
            { option: "B", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "hypothesis", chinese_answer: "假说", chinese_romanization: "jiǎshuō" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exposition' means a comprehensive description and explanation of an idea or theory." +
            "<br><br>" +
            "(B) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(D) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
        chinese_explanation: "(A) '阐述' 一词意味着对一个想法或理论的全面描述和解释。" +
            "<br><br>" +
            "(B) '混乱' 意味着缺乏理解；不确定。" +
            "<br><br>" +
            "(C) '假设' 意味着在没有证据的情况下认为某事是真实的或必然会发生的事情。" +
            "<br><br>" +
            "(D) '假说' 意味着基于有限证据作为进一步调查的起点提出的假设或建议的解释。"
    },
    {
        id: 3,
        question: "His __________ was evident when he criticized others for behavior that he himself frequently engaged in.",
        chinese_question: "当他批评他人行为时，他的 __________ 显而易见，因为他自己经常这样做。",
        answers: [
            { option: "A", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "hypocrisy", chinese_answer: "虚伪", chinese_romanization: "xūwěi" },
            { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hypocrisy' means the practice of claiming to have moral standards or beliefs to which one's own behavior does not conform; pretense." +
            "<br><br>" +
            "(A) 'sincerity' means the absence of pretense, deceit, or hypocrisy." +
            "<br><br>" +
            "(B) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(D) 'integrity' means the quality of being honest and having strong moral principles; moral uprightness.",
        chinese_explanation: "(C) '虚伪' 一词意味着声称拥有道德标准或信仰，而自己的行为却不符合这些标准或信仰的做法；伪装。" +
            "<br><br>" +
            "(A) '真诚' 意味着没有伪装、欺骗或虚伪。" +
            "<br><br>" +
            "(B) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(D) '正直' 意味着诚实和具有强烈道德原则的品质；道德正直。"
    },
    {
        id: 4,
        question: "The two friends sought __________ after their argument, wanting to restore their relationship to its former state.",
        chinese_question: "两位朋友在争吵后寻求 __________，希望恢复他们之前的关系。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "C", answer: "reconciliation", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "D", answer: "estrangement", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reconciliation' means the restoration of friendly relations." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(B) 'division' means the action of separating something into parts, or the process of being separated." +
            "<br><br>" +
            "(D) 'estrangement' means the fact of no longer being on friendly terms or part of a social group.",
        chinese_explanation: "(C) '和解' 一词意味着恢复友好关系。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(B) '分裂' 意味着将某物分成几部分的动作，或被分开的过程。" +
            "<br><br>" +
            "(D) '疏远' 意味着不再友好或不再是某个社会团体的一部分的事实。"
    },
    {
        id: 5,
        question: "Under the rule of the __________, the citizens had no freedom of speech and were constantly monitored by the state.",
        chinese_question: "在 __________ 的统治下，公民没有言论自由，并且被国家不断监视。",
        answers: [
            { option: "A", answer: "democrat", chinese_answer: "民主主义者", chinese_romanization: "mínzhǔ zhǔyì zhě" },
            { option: "B", answer: "despot", chinese_answer: "暴君", chinese_romanization: "bàojūn" },
            { option: "C", answer: "leader", chinese_answer: "领导者", chinese_romanization: "lǐngdǎo zhě" },
            { option: "D", answer: "reformer", chinese_answer: "改革者", chinese_romanization: "gǎigé zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despot' means a ruler or other person who holds absolute power, typically one who exercises it in a cruel or oppressive way." +
            "<br><br>" +
            "(A) 'democrat' means an advocate or supporter of democracy." +
            "<br><br>" +
            "(C) 'leader' means the person who leads or commands a group, organization, or country." +
            "<br><br>" +
            "(D) 'reformer' means a person who makes changes to something in order to improve it.",
        chinese_explanation: "(B) '暴君' 一词意味着拥有绝对权力的统治者或其他人，通常以残酷或压迫的方式行使权力。" +
            "<br><br>" +
            "(A) '民主主义者' 意味着民主的倡导者或支持者。" +
            "<br><br>" +
            "(C) '领导者' 意味着领导或指挥一个团体、组织或国家的人。" +
            "<br><br>" +
            "(D) '改革者' 意味着为了改进而对某事进行变革的人。"
    },
    {
        id: 6,
        question: "The new policy will be under __________ for the first few months to ensure its effectiveness, with experts closely monitoring its implementation.",
        chinese_question: "新政策在前几个月将接受 __________，以确保其有效性，专家将密切监控其实施情况。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "scrutiny", chinese_answer: "审查", chinese_romanization: "shěnchá" },
            { option: "C", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scrutiny' means critical observation or examination." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'disregard' means the action or state of ignoring something." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(B) '审查' 一词意味着批判性的观察或检查。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(C) '无视' 意味着忽略某事的行为或状态。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 7,
        question: "The accountant found a significant __________ between the company's reported earnings and its actual bank statements.",
        chinese_question: "会计发现公司报告的收入和实际银行对账单之间存在显著 __________。",
        answers: [
            { option: "A", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
            { option: "B", answer: "similarity", chinese_answer: "相似性", chinese_romanization: "xiāngsì xìng" },
            { option: "C", answer: "discrepancy", chinese_answer: "差异", chinese_romanization: "chāyì" },
            { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'discrepancy' means a lack of compatibility or similarity between two or more facts." +
            "<br><br>" +
            "(A) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness." +
            "<br><br>" +
            "(B) 'similarity' means the state or fact of being similar." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.",
        chinese_explanation: "(C) '差异' 意味着两个或多个事实之间缺乏兼容性或相似性。" +
            "<br><br>" +
            "(A) '一致性' 意味着在应用某事时的符合性，通常是为了逻辑、准确性或公平的缘故。" +
            "<br><br>" +
            "(B) '相似性' 意味着相似的状态或事实。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发声的音乐音符的组合，以产生具有愉悦效果的和弦和和弦进行。"
    },
    {
        id: 8,
        question: "After the long flight, a feeling of __________ overcame him, making him want to do nothing but sleep.",
        chinese_question: "长途飞行后，一种 __________ 的感觉涌上心头，让他只想睡觉。",
        answers: [
            { option: "A", answer: "energy", chinese_answer: "精力", chinese_romanization: "jīnglì" },
            { option: "B", answer: "lethargy", chinese_answer: "昏睡", chinese_romanization: "hūnshuì" },
            { option: "C", answer: "vigor", chinese_answer: "活力", chinese_romanization: "huólì" },
            { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lethargy' means a lack of energy and enthusiasm." +
            "<br><br>" +
            "(A) 'energy' means the strength and vitality required for sustained physical or mental activity." +
            "<br><br>" +
            "(C) 'vigor' means physical strength and good health." +
            "<br><br>" +
            "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(B) '昏睡' 意味着缺乏能量和热情。" +
            "<br><br>" +
            "(A) '精力' 意味着持续身体或精神活动所需的力量和活力。" +
            "<br><br>" +
            "(C) '活力' 意味着身体强壮和健康。" +
            "<br><br>" +
            "(D) '兴奋' 意味着极大的热情和渴望的感觉。"
    },
    {
        id: 9,
        question: "The __________ surrounding the politician's remarks created a heated debate among the public.",
        chinese_question: "围绕政治家言论的 __________ 引发了公众的激烈辩论。",
        answers: [
            { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
            { option: "B", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "C", answer: "controversy", chinese_answer: "争议", chinese_romanization: "zhēngyì" },
            { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'controversy' means a prolonged public dispute or debate." +
            "<br><br>" +
            "(A) 'consensus' means general agreement." +
            "<br><br>" +
            "(B) 'tranquility' means the quality or state of being calm." +
            "<br><br>" +
            "(D) 'harmony' means the quality of forming a pleasing and consistent whole.",
        chinese_explanation: "(C) '争议' 一词意味着一种长期的公众争论或辩论。" +
            "<br><br>" +
            "(A) '共识' 意味着普遍的同意。" +
            "<br><br>" +
            "(B) '宁静' 意味着平静的质量或状态。" +
            "<br><br>" +
            "(D) '和谐' 意味着形成一个令人愉快和一致的整体的质量。"
    },
    {
        id: 10,
        question: "The new policy faced strong __________ from various groups who believed it was unfair, leading to protests and public demonstrations.",
        chinese_question: "新政策遭到各方的强烈 __________，他们认为这是不公平的，导致了抗议和公众示威。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "B", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "endorsement", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'opposition' means resistance or dissent." +
            "<br><br>" +
            "(A) 'approval' means the action of officially agreeing to something." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of." +
            "<br><br>" +
            "(D) 'endorsement' means an act of giving one's public approval or support to someone or something.",
        chinese_explanation: "'反对' 一词意味着抵抗或异议。" +
            "<br><br>" +
            "(A) '批准' 意味着正式同意某事的行为。" +
            "<br><br>" +
            "(C) '支持' 意味着承担全部或部分重量。" +
            "<br><br>" +
            "(D) '认可' 意味着公开表示同意或支持某人或某事的行为。"
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
