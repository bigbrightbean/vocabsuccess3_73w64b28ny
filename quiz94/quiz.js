// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The grand jury decided to __________ the CEO for his involvement in the financial scandal, leading to his immediate resignation.",
        chinese_question: "大陪审团决定 __________ 这位CEO因其涉及财务丑闻而立即辞职。",
        answers: [
            { option: "A", answer: "acquit", chinese_answer: "宣判无罪", chinese_romanization: "xuānpàn wúzuì" },
            { option: "B", answer: "commend", chinese_answer: "表彰", chinese_romanization: "biǎozhāng" },
            { option: "C", answer: "exonerate", chinese_answer: "赦免", chinese_romanization: "shèmiǎn" },
            { option: "D", answer: "indict", chinese_answer: "起诉", chinese_romanization: "qǐsù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'indict' means formally accuse of or charge with a serious crime." +
            "<br><br>" +
            "(A) 'acquit' means free (someone) from a criminal charge by a verdict of not guilty." +
            "<br><br>" +
            "(B) 'commend' means praise formally or officially." +
            "<br><br>" +
            "(C) 'exonerate' means absolve (someone) from blame for a fault or wrongdoing.",
        chinese_explanation: "(D) '起诉' 一词意味着正式指控或指控严重犯罪。" +
            "<br><br>" +
            "(A) '宣判无罪' 意味着通过无罪判决使（某人）免于刑事指控。" +
            "<br><br>" +
            "(B) '表彰' 意味着正式或官方地表扬。" +
            "<br><br>" +
            "(C) '赦免' 意味着免除（某人）的罪责或错误行为。"
    },
    {
        id: 2,
        question: "To __________ the mistake, the company issued a public apology and offered refunds to affected customers.",
        chinese_question: "为了 __________ 这个错误，公司发布了公开道歉并向受影响的客户提供退款。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "repeat", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "D", answer: "rectify", chinese_answer: "纠正", chinese_romanization: "jiūzhèng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rectify' means to put (something) right; correct." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'repeat' means say again something one has already said.",
        chinese_explanation: "(D) '纠正' 一词意味着将（某事）弄正确；纠正。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '隐藏' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(C) '重复' 意味着再次说已经说过的话。"
    },
    {
        id: 3,
        question: "The company decided to __________ the outdated policy, replacing it with a more modern and effective one.",
        chinese_question: "公司决定 __________ 过时的政策，用更现代和有效的政策取而代之。",
        answers: [
            { option: "A", answer: "implement", chinese_answer: "实施", chinese_romanization: "shíshī" },
            { option: "B", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
            { option: "C", answer: "uphold", chinese_answer: "维护", chinese_romanization: "wéihù" },
            { option: "D", answer: "rescind", chinese_answer: "撤销", chinese_romanization: "chèxiāo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rescind' means revoke, cancel, or repeal (a law, order, or agreement)." +
            "<br><br>" +
            "(A) 'implement' means put (a decision, plan, agreement, etc.) into effect." +
            "<br><br>" +
            "(B) 'enforce' means compel observance of or compliance with (a law, rule, or obligation)." +
            "<br><br>" +
            "(C) 'uphold' means confirm or support (something that has been questioned).",
        chinese_explanation: "(D) '撤销' 一词意味着撤销、取消或废除（法律、命令或协议）。" +
            "<br><br>" +
            "(A) '实施' 意味着将（决定、计划、协议等）付诸实施。" +
            "<br><br>" +
            "(B) '执行' 意味着强制遵守（法律、规则或义务）。" +
            "<br><br>" +
            "(C) '维护' 意味着确认或支持（受到质疑的事物）。"
    },
    {
        id: 4,
        question: "Over the years, the rain and wind had worked to __________ the inscriptions on the old gravestones, making them difficult to read.",
        chinese_question: "多年来，雨水和风已经 __________ 了旧墓碑上的铭文，使其难以辨认。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
            { option: "B", answer: "efface", chinese_answer: "抹去", chinese_romanization: "mǒ qù" },
            { option: "C", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" },
            { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'efface' means erase (a mark) from a surface." +
            "<br><br>" +
            "(A) 'preserve' means maintain (something) in its original or existing state." +
            "<br><br>" +
            "(C) 'highlight' means pick out and emphasize." +
            "<br><br>" +
            "(D) 'protect' means keep safe from harm or injury.",
        chinese_explanation: "(B) '抹去' 一词意味着从表面上擦除（标记）。" +
            "<br><br>" +
            "(A) '保存' 意味着保持（某物）的原始或现有状态。" +
            "<br><br>" +
            "(C) '突出' 意味着挑出并强调。" +
            "<br><br>" +
            "(D) '保护' 意味着使免受伤害或损伤。"
    },
    {
        id: 5,
        question: "The professor was able to __________ the complex theory, making it understandable for all the students.",
        chinese_question: "教授能够 __________ 复杂的理论，使所有学生都能理解。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "B", answer: "elucidate", chinese_answer: "阐明", chinese_romanization: "chǎnmíng" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "D", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elucidate' means make (something) clear; explain." +
            "<br><br>" +
            "(A) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'complicate' means make (something) more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'confuse' means cause (someone) to become bewildered or perplexed.",
        chinese_explanation: "(B) '阐明' 一词意味着使（某事物）清楚；解释。" +
            "<br><br>" +
            "(A) '模糊' 意味着不被看到；隐藏。" +
            "<br><br>" +
            "(C) '复杂化' 意味着通过使其更加复杂使（某事物）更加困难或混乱。" +
            "<br><br>" +
            "(D) '使困惑' 意味着使（某人）变得困惑或困惑。"
    },
    {
        id: 6,
        question: "They tried to __________ the security system by using a backdoor to gain unauthorized access to the building.",
        chinese_question: "他们试图通过使用后门来 __________ 安全系统，以未经授权进入建筑物。",
        answers: [
            { option: "A", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
            { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "circumvent", chinese_answer: "绕过", chinese_romanization: "rào guò" },
            { option: "D", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'circumvent' means find a way around (an obstacle)." +
            "<br><br>" +
            "(A) 'follow' means go or come after (a person or thing proceeding ahead); move or travel behind." +
            "<br><br>" +
            "(B) 'respect' means admire (someone or something) deeply, as a result of their abilities, qualities, or achievements." +
            "<br><br>" +
            "(D) 'confront' means meet (someone) face to face with hostile or argumentative intent.",
        chinese_explanation: "(C) '绕过' 一词意味着找到绕过（障碍）的方法。" +
            "<br><br>" +
            "(A) '遵循' 意味着跟随（前进的人或事物）；在后面移动或旅行。" +
            "<br><br>" +
            "(B) '尊重' 意味着深深钦佩（某人或某物），因为他们的能力、品质或成就。" +
            "<br><br>" +
            "(D) '面对' 意味着以敌对或争论的意图面对（某人）。"
    },
    {
        id: 7,
        question: "He didn't __________ his neighbor's success, but rather admired her hard work and determination.",
        chinese_question: "他没有 __________ 邻居的成功，而是钦佩她的努力和决心。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "begrudge", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'begrudge' means envy (someone) the possession or enjoyment of (something)." +
            "<br><br>" +
            "(A) 'celebrate' means acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '嫉妒' 一词意味着嫉妒（某人）拥有或享受（某物）。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认（一个重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 8,
        question: "After much negotiation, the company agreed to __________ to the union's demands for better working conditions.",
        chinese_question: "经过多次谈判，公司同意 __________ 工会关于改善工作条件的要求。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "accede", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accede' means agree to a demand, request, or treaty." +
            "<br><br>" +
            "(A) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'deny' means state that one refuses to admit the truth or existence of.",
        chinese_explanation: "(B) '同意' 一词意味着同意一个要求、请求或条约。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不够、不接受或有缺陷而不予考虑。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '否认' 意味着表示拒绝承认真相或存在。"
    },
    {
        id: 9,
        question: "The thief decided to __________ with the stolen jewels before the police could catch him, disappearing into the night.",
        chinese_question: "小偷决定在警察抓住他之前 __________ 带着被盗的珠宝消失在夜色中。",
        answers: [
            { option: "A", answer: "confess", chinese_answer: "坦白", chinese_romanization: "tǎnbái" },
            { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "C", answer: "remain", chinese_answer: "停留", chinese_romanization: "tíngliú" },
            { option: "D", answer: "abscond", chinese_answer: "潜逃", chinese_romanization: "qiántáo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abscond' means leave hurriedly and secretly, typically to avoid detection or arrest." +
            "<br><br>" +
            "(A) 'confess' means admit or state that one has committed a crime or is at fault in some way." +
            "<br><br>" +
            "(B) 'reveal' means make (previously unknown or secret information) known to others." +
            "<br><br>" +
            "(C) 'remain' means stay in the place that one has been occupying.",
        chinese_explanation: "(D) '潜逃' 一词意味着匆忙且秘密地离开，通常是为了避免被发现或被捕。" +
            "<br><br>" +
            "(A) '坦白' 意味着承认或声明某人犯了罪或以某种方式有过失。" +
            "<br><br>" +
            "(B) '揭示' 意味着使（先前未知或秘密的信息）为他人所知。" +
            "<br><br>" +
            "(C) '停留' 意味着留在一个人一直占据的位置。"
    },
    {
        id: 10,
        question: "To cover up his mistake, the worker decided to __________ a story about why the project was delayed.",
        chinese_question: "为了掩盖他的错误，工人决定 __________ 一个关于项目为何延迟的故事。",
        answers: [
            { option: "A", answer: "fabricate", chinese_answer: "编造", chinese_romanization: "biānzào" },
            { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "C", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fabricate' means invent or concoct (something), typically with deceitful intent." +
            "<br><br>" +
            "(B) 'reveal' means make (previously unknown or secret information) known to others." +
            "<br><br>" +
            "(C) 'destroy' means put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(D) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(A) '编造' 一词意味着发明或捏造（某物），通常是出于欺骗意图。" +
            "<br><br>" +
            "(B) '揭示' 意味着使（先前未知或秘密的信息）为他人所知。" +
            "<br><br>" +
            "(C) '破坏' 意味着通过损坏或攻击结束（某物）的存在。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许离开；送走。"
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
