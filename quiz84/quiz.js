// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The river __________ through the valley, creating a winding path that was both beautiful and serene.",
        chinese_question: "河流 __________ 穿过山谷，形成了一条既美丽又宁静的曲折路径。",
        answers: [
            { option: "A", answer: "rushed", chinese_answer: "冲", chinese_romanization: "chōng" },
            { option: "B", answer: "meandered", chinese_answer: "蜿蜒", chinese_romanization: "wānyán" },
            { option: "C", answer: "sprinted", chinese_answer: "奔跑", chinese_romanization: "bēnpǎo" },
            { option: "D", answer: "charged", chinese_answer: "猛冲", chinese_romanization: "měng chōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'meandered' means follow a winding course." +
            "<br><br>" +
            "(A) 'rushed' means move with urgent haste." +
            "<br><br>" +
            "(C) 'sprinted' means run at full speed over a short distance." +
            "<br><br>" +
            "(D) 'charged' means move quickly and violently toward a person or object.",
        chinese_explanation: "(B) '蜿蜒' 一词意味着沿着弯曲的路线。" +
            "<br><br>" +
            "(A) '冲' 意味着急促地移动。" +
            "<br><br>" +
            "(C) '奔跑' 意味着以全速跑短距离。" +
            "<br><br>" +
            "(D) '猛冲' 意味着迅速而猛烈地向人或物移动。"
    },
    {
        id: 2,
        question: "Without any concrete evidence, the detective could only __________ about the suspect's whereabouts.",
        chinese_question: "没有任何具体证据，侦探只能 __________ 嫌疑人的行踪。",
        answers: [
            { option: "A", answer: "know", chinese_answer: "知道", chinese_romanization: "zhīdào" },
            { option: "B", answer: "prove", chinese_answer: "证明", chinese_romanization: "zhèngmíng" },
            { option: "C", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "D", answer: "surmise", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'surmise' means suppose that something is true without having evidence to confirm it." +
            "<br><br>" +
            "(A) 'know' means be aware of through observation, inquiry, or information." +
            "<br><br>" +
            "(B) 'prove' means demonstrate the truth or existence of (something) by evidence or argument." +
            "<br><br>" +
            "(C) 'confirm' means establish the truth or correctness of (something previously believed, suspected, or feared to be the case).",
        chinese_explanation: "(D) '猜测' 一词意味着假定某事是真的但没有证据确认。" +
            "<br><br>" +
            "(A) '知道' 意味着通过观察、询问或信息了解。" +
            "<br><br>" +
            "(B) '证明' 意味着通过证据或论证证明（某事）的真实性或存在。" +
            "<br><br>" +
            "(C) '确认' 意味着确立（之前相信、怀疑或担心的事情）的真相或正确性。"
    },
    {
        id: 3,
        question: "The general attempted to __________ the throne by overthrowing the king through a military coup.",
        chinese_question: "将军试图通过军事政变 __________ 王位，推翻国王。",
        answers: [
            { option: "A", answer: "usurp", chinese_answer: "篡夺", chinese_romanization: "cuàn duó" },
            { option: "B", answer: "inherit", chinese_answer: "继承", chinese_romanization: "jìchéng" },
            { option: "C", answer: "defend", chinese_answer: "保卫", chinese_romanization: "bǎowèi" },
            { option: "D", answer: "secure", chinese_answer: "确保", chinese_romanization: "quèbǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'usurp' means take (a position of power or importance) illegally or by force." +
            "<br><br>" +
            "(B) 'inherit' means receive (money, property, or a title) as an heir at the death of the previous holder." +
            "<br><br>" +
            "(C) 'defend' means resist an attack made on (someone or something); protect from harm or danger." +
            "<br><br>" +
            "(D) 'secure' means fix or attach (something) firmly so that it cannot be moved or lost.",
        chinese_explanation: "(A) '篡夺' 一词意味着非法或通过武力夺取（重要职位或权力）。" +
            "<br><br>" +
            "(B) '继承' 意味着作为前任去世后的继承人接收（金钱、财产或头衔）。" +
            "<br><br>" +
            "(C) '保卫' 意味着抵抗对（某人或某物）的攻击；保护免受伤害或危险。" +
            "<br><br>" +
            "(D) '确保' 意味着牢牢固定或附着（某物），使其不能被移动或丢失。"
    },
    {
        id: 4,
        question: "The company decided to __________ the job offer after discovering discrepancies in the candidate's application.",
        chinese_question: "公司在发现候选人的申请中存在差异后决定 __________ 工作邀请。",
        answers: [
            { option: "A", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "B", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "C", answer: "uphold", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "D", answer: "rescind", chinese_answer: "撤销", chinese_romanization: "chèxiāo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rescind' means revoke, cancel, or repeal (a law, order, or agreement)." +
            "<br><br>" +
            "(A) 'approve' means officially agree to or accept as satisfactory." +
            "<br><br>" +
            "(B) 'confirm' means establish the truth or correctness of (something previously believed, suspected, or feared to be the case)." +
            "<br><br>" +
            "(C) 'uphold' means confirm or support (something that has been questioned).",
        chinese_explanation: "(D) '撤销' 一词意味着撤销、取消或废除（法律、命令或协议）。" +
            "<br><br>" +
            "(A) '批准' 意味着正式同意或接受为满意的。" +
            "<br><br>" +
            "(B) '确认' 意味着确立（之前相信、怀疑或担心的事情）的真相或正确性。" +
            "<br><br>" +
            "(C) '维持' 意味着确认或支持（被质疑的事情）。"
    },
    {
        id: 5,
        question: "The technician was able to __________ the issue with the computer, restoring it to full functionality.",
        chinese_question: "技术员能够 __________ 计算机的问题，使其恢复到完全正常的功能。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "rectify", chinese_answer: "纠正", chinese_romanization: "jiūzhèng" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
            { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rectify' means put (something) right; correct." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'complicate' means make (something) more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'worsen' means make or become worse.",
        chinese_explanation: "(B) '纠正' 一词意味着把（某事）改正；纠正。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '复杂化' 意味着使（某事）更困难或更复杂。" +
            "<br><br>" +
            "(D) '恶化' 意味着使变得更糟。"
    },
    {
        id: 6,
        question: "New immigrants often find it challenging to __________ into the local culture while preserving their own traditions.",
        chinese_question: "新移民常常发现 __________ 当地文化的同时保留自己的传统是具有挑战性的。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "assimilate", chinese_answer: "同化", chinese_romanization: "tónghuà" },
            { option: "D", answer: "isolate", chinese_answer: "孤立", chinese_romanization: "gūlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assimilate' means take in (information, ideas, or culture) and understand fully." +
            "<br><br>" +
            "(A) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'isolate' means cause (a person or place) to be or remain alone or apart from others.",
        chinese_explanation: "(C) '同化' 一词意味着充分吸收（信息、思想或文化）并理解。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不合格、不接受或有缺陷。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '孤立' 意味着使（人或地方）独自或与他人分开。"
    },
    {
        id: 7,
        question: "She tried to __________ her confidence before the presentation by practicing her speech multiple times.",
        chinese_question: "在演讲前，她试图通过多次练习演讲来 __________ 自信心。",
        answers: [
            { option: "A", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "B", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "bolster", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "D", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bolster' means support or strengthen; prop up." +
            "<br><br>" +
            "(A) 'weaken' means make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(B) 'undermine' means erode the base or foundation of (a rock formation)." +
            "<br><br>" +
            "(D) 'reduce' means make smaller or less in amount, degree, or size.",
        chinese_explanation: "(C) '增强' 一词意味着支持或加强；支撑。" +
            "<br><br>" +
            "(A) '削弱' 意味着使或变得在力量、决心或体力上变弱。" +
            "<br><br>" +
            "(B) '破坏' 意味着侵蚀（岩石结构）的基础或基础。" +
            "<br><br>" +
            "(D) '减少' 意味着在数量、程度或大小上变小。"
    },
    {
        id: 8,
        question: "The organization aims to __________ information about healthy living to the general public.",
        chinese_question: "该组织旨在向公众 __________ 健康生活的信息。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "disseminate", chinese_answer: "传播", chinese_romanization: "chuánbō" },
            { option: "C", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "D", answer: "suppress", chinese_answer: "镇压", chinese_romanization: "zhènyā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disseminate' means spread (something, especially information) widely." +
            "<br><br>" +
            "(A) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'withhold' means refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(D) 'suppress' means forcibly put an end to.",
        chinese_explanation: "(B) '传播' 一词意味着广泛传播（某物，特别是信息）。" +
            "<br><br>" +
            "(A) '隐藏' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(C) '扣留' 意味着拒绝给予（应属于或被他人希望的东西）。" +
            "<br><br>" +
            "(D) '镇压' 意味着强行结束。"
    },
    {
        id: 9,
        question: "Many citizens __________ the destruction of the historic building, considering it a significant loss to the community.",
        chinese_question: "许多市民 __________ 这座历史建筑的破坏，认为这是社区的一大损失。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "deplore", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deplore' means feel or express strong disapproval of (something)." +
            "<br><br>" +
            "(A) 'celebrate' means acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(C) '谴责' 一词意味着对（某事）表示强烈不满。" +
            "<br><br>" +
            "(A) '庆祝' 意味着以社交聚会或愉快活动来庆祝（重要或愉快的日子或事件）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着承受所有或部分重量；支撑。"
    },
    {
        id: 10,
        question: "The young artist admired the master painter and tried to __________ his style in her own work.",
        chinese_question: "这位年轻的艺术家钦佩大师画家的作品，并试图在自己的作品中 __________ 他的风格。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "ignore", chinese_answer: "无视", chinese_romanization: "wúshì" },
            { option: "C", answer: "despise", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
            { option: "D", answer: "emulate", chinese_answer: "模仿", chinese_romanization: "mófǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'emulate' means match or surpass (a person or achievement), typically by imitation." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'despise' means feel contempt or a deep repugnance for.",
        chinese_explanation: "(D) '模仿' 一词意味着通过模仿来匹配或超越（一个人或成就）。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当地照顾。" +
            "<br><br>" +
            "(B) '无视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '鄙视' 意味着感到蔑视或深恶痛绝。"
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
