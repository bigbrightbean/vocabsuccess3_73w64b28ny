// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's inflammatory remarks were designed to __________ the public and gain media attention.",
        chinese_question: "这位政治家的煽动性言论旨在 __________ 公众并引起媒体关注。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "C", answer: "pacify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "D", answer: "agitate", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'agitate' means to stir up or excite (public) interest in a cause." +
            "<br><br>" +
            "(A) 'calm' means to make someone tranquil and quiet." +
            "<br><br>" +
            "(B) 'soothe' means to gently calm a person or their feelings." +
            "<br><br>" +
            "(C) 'pacify' means to quell the anger, agitation, or excitement of.",
        chinese_explanation: "(D) '激动' 一词意味着激起或引起（公众）对某一事业的兴趣。" +
            "<br><br>" +
            "(A) '平静' 意味着使某人安静和平。" +
            "<br><br>" +
            "(B) '抚慰' 意味着轻柔地安抚某人或他们的感情。" +
            "<br><br>" +
            "(C) '安抚' 意味着平息愤怒、激动或兴奋。"
    },
    {
        id: 2,
        question: "Through years of hard work and dedication, he managed to __________ a vast knowledge of the subject.",
        chinese_question: "通过多年的努力和奉献，他设法 __________ 了对该学科的广泛知识。",
        answers: [
            { option: "A", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "B", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquire' means to buy or obtain for oneself." +
            "<br><br>" +
            "(B) 'lose' means to be deprived of or cease to have or retain." +
            "<br><br>" +
            "(C) 'forget' means to fail to remember." +
            "<br><br>" +
            "(D) 'discard' means to get rid of something as no longer useful or desirable.",
        chinese_explanation: "(A) '获得' 一词意味着购买或获得。" +
            "<br><br>" +
            "(B) '失去' 意味着被剥夺或停止拥有或保留。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '丢弃' 意味着摆脱不再有用或不需要的东西。"
    },
    {
        id: 3,
        question: "The harsh critic didn't hesitate to __________ the new restaurant, writing a scathing review that highlighted every flaw.",
        chinese_question: "苛刻的评论家毫不犹豫地 __________ 这家新餐馆，写了一篇尖刻的评论，突出了每一个缺点。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "lambaste", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lambaste' means to criticize someone or something harshly." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'compliment' means a polite expression of praise or admiration.",
        chinese_explanation: "(B) '严厉批评' 一词意味着严厉地批评某人或某事。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '赞美' 意味着一种礼貌的赞美或钦佩的表达。"
    },
    {
        id: 4,
        question: "The new regulations __________ changes in the company's procedures, requiring a complete overhaul.",
        chinese_question: "新规定 __________ 公司程序的变更，需要彻底的改造。",
        answers: [
            { option: "A", answer: "negated", chinese_answer: "否定", chinese_romanization: "fǒudìng" },
            { option: "B", answer: "necessitated", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "C", answer: "prevented", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
            { option: "D", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'necessitated' means to make something necessary as a result or consequence." +
            "<br><br>" +
            "(A) 'negated' means to nullify or make ineffective." +
            "<br><br>" +
            "(C) 'prevented' means to stop something from happening or arising." +
            "<br><br>" +
            "(D) 'hindered' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(B) '需要' 一词意味着作为结果或后果使某事成为必要。" +
            "<br><br>" +
            "(A) '否定' 意味着使无效或无效。" +
            "<br><br>" +
            "(C) '防止' 意味着阻止某事发生或产生。" +
            "<br><br>" +
            "(D) '阻碍' 意味着为某人或某事制造困难，导致延迟或阻碍。"
    },
    {
        id: 5,
        question: "The construction crew used a large machine to __________ the old building into rubble.",
        chinese_question: "施工队使用一台大型机器将旧建筑 __________ 成瓦砾。",
        answers: [
            { option: "A", answer: "assemble", chinese_answer: "组装", chinese_romanization: "zǔzhuāng" },
            { option: "B", answer: "construct", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "C", answer: "pulverize", chinese_answer: "粉碎", chinese_romanization: "fěnsuì" },
            { option: "D", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pulverize' means to reduce to fine particles." +
            "<br><br>" +
            "(A) 'assemble' means to fit together the separate component parts of something." +
            "<br><br>" +
            "(B) 'construct' means to build or erect something." +
            "<br><br>" +
            "(D) 'repair' means to restore something damaged, faulty, or worn to a good condition.",
        chinese_explanation: "(C) '粉碎' 一词意味着将某物还原为细小的颗粒。" +
            "<br><br>" +
            "(A) '组装' 意味着将某物的各个组成部分装配在一起。" +
            "<br><br>" +
            "(B) '建造' 意味着建造或竖立某物。" +
            "<br><br>" +
            "(D) '修理' 意味着将损坏、有故障或磨损的东西恢复到良好的状态。"
    },
    {
        id: 6,
        question: "The judge decided to __________ the defendant after new evidence proved his innocence.",
        chinese_question: "在新证据证明被告无罪后，法官决定 __________ 被告。",
        answers: [
            { option: "A", answer: "convict", chinese_answer: "定罪", chinese_romanization: "dìngzuì" },
            { option: "B", answer: "charge", chinese_answer: "起诉", chinese_romanization: "qǐsù" },
            { option: "C", answer: "exonerate", chinese_answer: "免罪", chinese_romanization: "miǎnzuì" },
            { option: "D", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exonerate' means to absolve someone from blame for a fault or wrongdoing." +
            "<br><br>" +
            "(A) 'convict' means to declare someone to be guilty of a criminal offense." +
            "<br><br>" +
            "(B) 'charge' means to formally accuse someone of something, especially an offense under law." +
            "<br><br>" +
            "(D) 'accuse' means to charge someone with an offense or crime.",
        chinese_explanation: "(C) '免罪' 一词意味着解除对某人过错或错误行为的责任。" +
            "<br><br>" +
            "(A) '定罪' 意味着宣布某人犯有刑事罪行。" +
            "<br><br>" +
            "(B) '起诉' 意味着正式指控某人某事，特别是法律下的犯罪。" +
            "<br><br>" +
            "(D) '指控' 意味着指控某人犯罪或犯罪。"
    },
    {
        id: 7,
        question: "She was asked to __________ the recorded meeting into written form for future reference.",
        chinese_question: "她被要求将录制的会议 __________ 成书面形式以供将来参考。",
        answers: [
            { option: "A", answer: "delete", chinese_answer: "删除", chinese_romanization: "shānchú" },
            { option: "B", answer: "transcribe", chinese_answer: "抄写", chinese_romanization: "chāoxiě" },
            { option: "C", answer: "summarize", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'transcribe' means to put thoughts, speech, or data into written or printed form." +
            "<br><br>" +
            "(A) 'delete' means remove or obliterate." +
            "<br><br>" +
            "(C) 'summarize' means give a brief statement of the main points of something." +
            "<br><br>" +
            "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(B) '抄写' 一词意味着将思想、演讲或数据变成书面或打印形式。" +
            "<br><br>" +
            "(A) '删除' 意味着移除或抹去。" +
            "<br><br>" +
            "(C) '总结' 意味着简要陈述某事的要点。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；有意忽视。"
    },
    {
        id: 8,
        question: "The teacher chose to __________ the student privately, offering constructive criticism rather than reprimanding him in front of the class.",
        chinese_question: "老师选择私下 __________ 学生，提供建设性的批评，而不是在全班面前训斥他。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "reprove", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reprove' means to reprimand or censure someone." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'reward' means a thing given in recognition of service, effort, or achievement.",
        chinese_explanation: "(C) '责备' 一词意味着训斥或谴责某人。" +
            "<br><br>" +
            "(A) '表扬' 意味着表达热情的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；有意忽视。" +
            "<br><br>" +
            "(D) '奖励' 意味着为了表彰服务、努力或成就而给予的东西。"
    },
    {
        id: 9,
        question: "The scandal served to __________ his reputation, making it hard for him to find work.",
        chinese_question: "这起丑闻损害了他的声誉，使他很难找到工作。",
        answers: [
            { option: "A", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "discredit", chinese_answer: "使丧失信誉", chinese_romanization: "shǐ sàngshī xìnyù" },
            { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'discredit' means to harm the good reputation of someone or something." +
            "<br><br>" +
            "(A) 'boost' means help or encourage something to increase or improve." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'enhance' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(C) '使丧失信誉' 一词意味着损害某人或某物的良好声誉。" +
            "<br><br>" +
            "(A) '提升' 意味着帮助或鼓励某事增加或改善。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '提高' 意味着增强、增加或进一步改善质量、价值或程度。"
    },
    {
        id: 10,
        question: "She decided to __________ her love for him, making her feelings known once and for all.",
        chinese_question: "她决定 __________ 她对他的爱，最终表露了自己的感情。",
        answers: [
            { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "conceal", chinese_answer: "隐瞒", chinese_romanization: "yǐnmán" },
            { option: "C", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "avow", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'avow' means to assert or confess openly." +
            "<br><br>" +
            "(A) 'deny' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(B) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'hide' means put or keep out of sight; conceal from the view or notice of others.",
        chinese_explanation: "(D) '承认' 一词意味着公开断言或承认。" +
            "<br><br>" +
            "(A) '否认' 意味着声明拒绝承认某事的真实性或存在。" +
            "<br><br>" +
            "(B) '隐瞒' 意味着不让人看到；隐藏。" +
            "<br><br>" +
            "(C) '隐藏' 意味着将某物放在或保留在视线之外；隐藏不让他人看到。"
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
