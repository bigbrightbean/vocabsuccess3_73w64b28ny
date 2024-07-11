// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The skilled chef used a sharp knife to __________ the meat cleanly in two.",
        chinese_question: "熟练的厨师用锋利的刀将肉干净地 __________ 成两半。",
        answers: [
            { option: "A", answer: "join", chinese_answer: "连接", chinese_romanization: "liánjiē" },
            { option: "B", answer: "break", chinese_answer: "打破", chinese_romanization: "dǎpò" },
            { option: "C", answer: "cleave", chinese_answer: "劈开", chinese_romanization: "pīkāi" },
            { option: "D", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cleave' means split or sever (something), especially along a natural line or grain." +
            "<br><br>" +
            "(A) 'join' means link or connect." +
            "<br><br>" +
            "(B) 'break' means separate or cause to separate into pieces as a result of a blow, shock, or strain." +
            "<br><br>" +
            "(D) 'blend' means mix (a substance) with another substance so that they combine together.",
        chinese_explanation: "(C) '劈开' 一词意味着沿自然线或纹理分裂或切断（某物）。" +
            "<br><br>" +
            "(A) '连接' 意味着链接或连接。" +
            "<br><br>" +
            "(B) '打破' 意味着由于打击、震动或应变而分离或使分离成碎片。" +
            "<br><br>" +
            "(D) '混合' 意味着将（某物质）与另一物质混合，使它们结合在一起。"
    },
    {
        id: 2,
        question: "She was able to __________ the underlying tensions in the room, even though no one said a word.",
        chinese_question: "尽管没有人说话，她还是能 __________ 到房间里的潜在紧张气氛。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "perceive", chinese_answer: "察觉", chinese_romanization: "chájué" },
            { option: "C", answer: "miss", chinese_answer: "错过", chinese_romanization: "cuòguò" },
            { option: "D", answer: "neglect", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perceive' figuratively means to recognize or understand something not directly expressed." +
            "<br><br>" +
            "(A) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'miss' means fail to notice, hear, or understand." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '察觉' 在比喻意义上意味着识别或理解未直接表达的事物。" +
            "<br><br>" +
            "(A) '忽视' 意味着不注意；忽略。" +
            "<br><br>" +
            "(C) '错过' 意味着未能注意到、听到或理解。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未能适当照顾。"
    },
    {
        id: 3,
        question: "The bird began to __________ its beautiful song as the sun rose over the horizon.",
        chinese_question: "当太阳升起在地平线上时，鸟儿开始 __________ 它美丽的歌声。",
        answers: [
            { option: "A", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "B", answer: "vocalize", chinese_answer: "发声", chinese_romanization: "fāshēng" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocalize' means to make a sound with the voice, especially by singing." +
            "<br><br>" +
            "(A) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(C) 'silence' means the complete absence of sound." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(B) '发声' 一词意味着用声音发出声音，特别是通过唱歌。" +
            "<br><br>" +
            "(A) '低语' 意味着用呼吸非常轻声地说话而不用声带，尤其是为了保密。" +
            "<br><br>" +
            "(C) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 4,
        question: "The government decided to __________ the outdated law that no longer served the public's interest.",
        chinese_question: "政府决定 __________ 这项已不再符合公众利益的过时法律。",
        answers: [
            { option: "A", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
            { option: "B", answer: "implement", chinese_answer: "实施", chinese_romanization: "shíshī" },
            { option: "C", answer: "abolish", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "D", answer: "uphold", chinese_answer: "维持", chinese_romanization: "wéichí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abolish' means to formally put an end to (a system, practice, or institution)." +
            "<br><br>" +
            "(A) 'enforce' means to compel observance of or compliance with (a law, rule, or obligation)." +
            "<br><br>" +
            "(B) 'implement' means to put (a decision, plan, agreement, etc.) into effect." +
            "<br><br>" +
            "(D) 'uphold' means to maintain or support in the face of possible opposition.",
        chinese_explanation: "(C) '废除' 一词意味着正式结束（一个系统、实践或制度）。" +
            "<br><br>" +
            "(A) '执行' 意味着强制遵守或履行（法律、规则或义务）。" +
            "<br><br>" +
            "(B) '实施' 意味着使（决定、计划、协议等）生效。" +
            "<br><br>" +
            "(D) '维持' 意味着在可能的反对面前维护或支持。"
    },
    {
        id: 5,
        question: "The politician tried to __________ the public's fear by downplaying the seriousness of the situation.",
        chinese_question: "这位政客试图通过淡化局势的严重性来 __________ 公众的恐惧。",
        answers: [
            { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "D", answer: "palliate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'palliate' means to make a disease or its symptoms less severe without removing the cause." +
            "<br><br>" +
            "(A) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'intensify' means to become or make more intense.",
        chinese_explanation: "(D) '减轻' 意思是使疾病或其症状减轻而不去除原因。" +
            "<br><br>" +
            "(A) '加剧' 意思是使问题、糟糕的情况或消极情绪恶化。" +
            "<br><br>" +
            "(B) '忽视' 意思是拒绝注意或承认。" +
            "<br><br>" +
            "(C) '加强' 意思是变得或使更加激烈。"
    },
    {
        id: 6,
        question: "He decided to __________ important information from the investigators, complicating the case further.",
        chinese_question: "他决定 __________ 重要信息，使案件进一步复杂化。",
        answers: [
            { option: "A", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" },
            { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "C", answer: "disclose", chinese_answer: "披露", chinese_romanization: "pīlù" },
            { option: "D", answer: "withhold", chinese_answer: "隐瞒", chinese_romanization: "yǐnmán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'withhold' means to refuse to give something that is due or desired by another." +
            "<br><br>" +
            "(A) 'share' means to give a portion of something to others." +
            "<br><br>" +
            "(B) 'reveal' means to make (previously unknown or secret information) known to others." +
            "<br><br>" +
            "(C) 'disclose' means to make (secret or new information) known.",
        chinese_explanation: "(D) '隐瞒' 一词意味着拒绝给予另一个人应得或想要的东西。" +
            "<br><br>" +
            "(A) '分享' 意味着将某物的一部分给予他人。" +
            "<br><br>" +
            "(B) '揭示' 意味着将（以前未知或秘密的信息）告知他人。" +
            "<br><br>" +
            "(C) '披露' 意味着将（秘密或新信息）告知。"
    },
    {
        id: 7,
        question: "Her voice had the power to __________, leaving everyone in awe and admiration.",
        chinese_question: "她的声音具有 __________ 的力量，让每个人都感到敬畏和钦佩。",
        answers: [
            { option: "A", answer: "repel", chinese_answer: "排斥", chinese_romanization: "páichì" },
            { option: "B", answer: "mesmerize", chinese_answer: "迷住", chinese_romanization: "mízhù" },
            { option: "C", answer: "disgust", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "D", answer: "distract", chinese_answer: "分散注意力", chinese_romanization: "fēnsàn zhùyì lì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mesmerize' figuratively means to fascinate or hold spellbound." +
            "<br><br>" +
            "(A) 'repel' means to drive or force (an attack or attacker) back or away." +
            "<br><br>" +
            "(C) 'disgust' means to cause (someone) to feel revulsion or profound disapproval." +
            "<br><br>" +
            "(D) 'distract' means to prevent (someone) from concentrating on something.",
        chinese_explanation: "(B) '迷住' 在比喻意义上意味着迷住或迷住。" +
            "<br><br>" +
            "(A) '排斥' 意味着驱赶或迫使（攻击或攻击者）后退或离开。" +
            "<br><br>" +
            "(C) '厌恶' 意味着使（某人）感到厌恶或深深不满。" +
            "<br><br>" +
            "(D) '分散注意力' 意味着阻止（某人）集中注意力。"
    },
    {
        id: 8,
        question: "As the deadline approached, they decided to __________ the project differently.",
        chinese_question: "随着截止日期的临近，他们决定以不同的方式 __________ 这个项目。",
        answers: [
            { option: "A", answer: "approach", chinese_answer: "处理", chinese_romanization: "chǔlǐ" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'approach' means to come near or nearer to in distance or time." +
            "<br><br>" +
            "(B) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'retreat' means to withdraw from enemy forces as a result of their superior power or after a defeat." +
            "<br><br>" +
            "(D) 'abandon' means to give up completely.",
        chinese_explanation: "(A) '处理' 意味着在距离或时间上接近或更接近。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '撤退' 意味着由于敌方力量的优越或战败后撤退。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 9,
        question: "She learned to __________ negative thoughts and focus on the positive aspects of life.",
        chinese_question: "她学会了 __________ 负面思想，专注于生活的积极方面。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "entertain", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
            { option: "D", answer: "accept", chinese_answer: "接纳", chinese_romanization: "jiēnà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avoid' metaphorically means to keep away from or steer clear of." +
            "<br><br>" +
            "(B) 'embrace' means to accept (a belief, theory, or change) willingly and enthusiastically." +
            "<br><br>" +
            "(C) 'entertain' means to give attention or consideration to (an idea, suggestion, or feeling)." +
            "<br><br>" +
            "(D) 'accept' means to consent to receive or undertake.",
        chinese_explanation: "(A) '避免' 比喻远离或避开。" +
            "<br><br>" +
            "(B) '接受' 意味着愿意并热情地接受（信念、理论或变化）。" +
            "<br><br>" +
            "(C) '考虑' 意味着给予（想法、建议或感受）注意或考虑。" +
            "<br><br>" +
            "(D) '接纳' 意味着同意接受或承担。"
    },
    {
        id: 10,
        question: "He couldn't __________ thinking about the mysterious stranger he met.",
        chinese_question: "他无法 __________ 想起他遇到的那个神秘的陌生人。",
        answers: [
            { option: "A", answer: "cease", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "C", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "D", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cease' metaphorically means to stop or discontinue an action or thought." +
            "<br><br>" +
            "(B) 'continue' means to persist in an activity or process." +
            "<br><br>" +
            "(C) 'enjoy' means to take delight or pleasure in." +
            "<br><br>" +
            "(D) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(A) '停止' 比喻停止或中断一个行动或想法。" +
            "<br><br>" +
            "(B) '继续' 意味着坚持进行某活动或过程。" +
            "<br><br>" +
            "(C) '享受' 意味着从中获得快乐或乐趣。" +
            "<br><br>" +
            "(D) '忽视' 意味着认为不值得认真考虑。"
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
