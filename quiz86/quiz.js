// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In order to __________ the delivery process, the company hired additional staff.",
        chinese_question: "为了 __________ 交付过程，公司雇佣了更多的员工。",
        answers: [
            { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "B", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" },
            { option: "D", answer: "obstruct", chinese_answer: "阻挡", chinese_romanization: "zǔdǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'expedite' means make (an action or process) happen sooner or be accomplished more quickly." +
            "<br><br>" +
            "(A) 'delay' means make (someone or something) late or slow." +
            "<br><br>" +
            "(B) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'obstruct' means block (an opening, path, road, etc.); be or get in the way of.",
        chinese_explanation: "(C) '加快' 一词意味着使（行动或过程）更快发生或完成。" +
            "<br><br>" +
            "(A) '延迟' 意味着使（某人或某物）迟到或缓慢。" +
            "<br><br>" +
            "(B) '阻碍' 意味着为（某人或某物）制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(D) '阻挡' 意味着阻塞（开口、道路等）；妨碍。"
    },
    {
        id: 2,
        question: "He was accused of trying to __________ evidence to cover up his involvement in the crime.",
        chinese_question: "他被指控试图 __________ 证据以掩盖他在犯罪中的参与。",
        answers: [
            { option: "A", answer: "fabricate", chinese_answer: "伪造", chinese_romanization: "wěizào" },
            { option: "B", answer: "destroy", chinese_answer: "销毁", chinese_romanization: "xiāohuǐ" },
            { option: "C", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "D", answer: "authenticate", chinese_answer: "认证", chinese_romanization: "rènzhèng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fabricate' means invent or concoct (something), typically with deceitful intent." +
            "<br><br>" +
            "(B) 'destroy' means put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(C) 'reveal' means make (previously unknown or secret information) known to others." +
            "<br><br>" +
            "(D) 'authenticate' means prove or show (something) to be true, genuine, or valid.",
        chinese_explanation: "(A) '伪造' 一词意味着发明或捏造（某事），通常带有欺骗意图。" +
            "<br><br>" +
            "(B) '销毁' 意味着通过破坏或攻击使（某物）不复存在。" +
            "<br><br>" +
            "(C) '揭示' 意味着将（先前未知或秘密的信息）告知他人。" +
            "<br><br>" +
            "(D) '认证' 意味着证明或表明（某事）是真实、真实或有效的。"
    },
    {
        id: 3,
        question: "During his lecture, the professor would occasionally __________ to tell an amusing anecdote.",
        chinese_question: "在讲课期间，教授偶尔会 __________ 讲一个有趣的轶事。",
        answers: [
            { option: "A", answer: "focus", chinese_answer: "集中", chinese_romanization: "jízhōng" },
            { option: "B", answer: "concentrate", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
            { option: "C", answer: "adhere", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "D", answer: "digress", chinese_answer: "偏离", chinese_romanization: "piānlí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'digress' means leave the main subject temporarily in speech or writing." +
            "<br><br>" +
            "(A) 'focus' means the center of interest or activity." +
            "<br><br>" +
            "(B) 'concentrate' means focus all one's attention or mental effort on a particular object or activity." +
            "<br><br>" +
            "(C) 'adhere' means stick fast to (a surface or substance).",
        chinese_explanation: "(D) '偏离' 意味着在讲话或写作中暂时离开主要话题。" +
            "<br><br>" +
            "(A) '集中' 意味着兴趣或活动的中心。" +
            "<br><br>" +
            "(B) '专注' 意味着将所有注意力或精神努力集中在特定对象或活动上。" +
            "<br><br>" +
            "(C) '坚持' 意味着紧贴（表面或物质）。"
    },
    {
        id: 4,
        question: "The negative reviews did not __________ from the overall success of the movie.",
        chinese_question: "负面评论并未 __________ 这部电影的整体成功。",
        answers: [
            { option: "A", answer: "detract", chinese_answer: "减损", chinese_romanization: "jiǎnsǔn" },
            { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "D", answer: "magnify", chinese_answer: "放大", chinese_romanization: "fàngdà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'detract' means reduce or take away the worth or value of." +
            "<br><br>" +
            "(B) 'enhance' means intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(C) 'improve' means make or become better." +
            "<br><br>" +
            "(D) 'magnify' means make (something) appear larger than it is, especially with a lens or microscope.",
        chinese_explanation: "(A) '减损' 一词意味着减少或减少某物的价值。" +
            "<br><br>" +
            "(B) '增强' 意味着加强、增加或进一步提高质量、价值或范围。" +
            "<br><br>" +
            "(C) '改善' 意味着使更好或变得更好。" +
            "<br><br>" +
            "(D) '放大' 意味着使（某物）看起来比实际更大，尤其是用透镜或显微镜。"
    },
    {
        id: 5,
        question: "The word 'science' is __________ from the Latin word 'scientia,' which means knowledge.",
        chinese_question: "“科学”一词 __________ 于拉丁语“scientia”，意思是知识。",
        answers: [
            { option: "A", answer: "invented", chinese_answer: "发明", chinese_romanization: "fāmíng" },
            { option: "B", answer: "derived", chinese_answer: "来源", chinese_romanization: "láiyuán" },
            { option: "C", answer: "obscured", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "negated", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'derived' means obtain something from (a specified source)." +
            "<br><br>" +
            "(A) 'invented' means create or design (something that has not existed before); be the originator of." +
            "<br><br>" +
            "(C) 'obscured' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'negated' means nullify; make ineffective.",
        chinese_explanation: "(B) '来源' 一词意味着从（特定来源）获得某物。" +
            "<br><br>" +
            "(A) '发明' 意味着创造或设计（以前不存在的东西）；成为发明者。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(D) '否定' 意味着使无效；使无效。"
    },
    {
        id: 6,
        question: "The novel __________ life in the 19th century with vivid detail and accuracy.",
        chinese_question: "这部小说 __________ 了19世纪的生活，细节生动且准确。",
        answers: [
            { option: "A", answer: "distorted", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "B", answer: "obscured", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "C", answer: "negated", chinese_answer: "否定", chinese_romanization: "fǒudìng" },
            { option: "D", answer: "depicted", chinese_answer: "描绘", chinese_romanization: "miáohuì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'depicted' means show or represent by a drawing, painting, or other art form." +
            "<br><br>" +
            "(A) 'distort' means pull or twist out of shape." +
            "<br><br>" +
            "(B) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'negate' means nullify; make ineffective.",
        chinese_explanation: "(D) '描绘' 一词意味着通过绘画、图画或其他艺术形式展示或表现。" +
            "<br><br>" +
            "(A) '扭曲' 意味着拉或扭出形状。" +
            "<br><br>" +
            "(B) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(C) '否定' 意味着使无效；使无效。"
    },
    {
        id: 7,
        question: "The teacher's question was designed to __________ thoughtful responses from the students.",
        chinese_question: "老师的问题旨在 __________ 学生的深思熟虑的回答。",
        answers: [
            { option: "A", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "B", answer: "elicit", chinese_answer: "引出", chinese_romanization: "yǐnchū" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elicit' means evoke or draw out (a response, answer, or fact) from someone in reaction to one's own actions or questions." +
            "<br><br>" +
            "(A) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(B) '引出' 一词意味着通过某人的行动或问题唤起或引出（回应、答案或事实）。" +
            "<br><br>" +
            "(A) '抑制' 意味着强行结束。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 8,
        question: "The scientists were able to __________ a new theory based on their recent discoveries.",
        chinese_question: "科学家们能够根据他们最近的发现 __________ 一个新理论。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "B", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "formulate", chinese_answer: "制定", chinese_romanization: "zhìdìng" },
            { option: "D", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'formulate' means create or devise methodically (a strategy or a proposal)." +
            "<br><br>" +
            "(A) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(B) 'destroy' means put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(D) 'obscure' means keep from being seen; conceal.",
        chinese_explanation: "(C) '制定' 一词意味着有条不紊地创建或设计（策略或提议）。" +
            "<br><br>" +
            "(A) '使困惑' 意味着使（某人）感到迷惑或困惑。" +
            "<br><br>" +
            "(B) '破坏' 意味着通过损坏或攻击结束（某物）的存在。" +
            "<br><br>" +
            "(D) '掩盖' 意味着使不被看到；隐藏。"
    },
    {
        id: 9,
        question: "The stock prices tend to __________ dramatically during times of economic uncertainty.",
        chinese_question: "在经济不确定时期，股票价格往往会剧烈 __________。",
        answers: [
            { option: "A", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "B", answer: "fluctuate", chinese_answer: "波动", chinese_romanization: "bōdòng" },
            { option: "C", answer: "remain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "D", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fluctuate' means rise and fall irregularly in number or amount." +
            "<br><br>" +
            "(A) 'stabilize' means make or become unlikely to change, fail, or decline." +
            "<br><br>" +
            "(C) 'remain' means continue to exist, especially after other similar or related people or things have ceased to do so." +
            "<br><br>" +
            "(D) 'decrease' means make or become smaller or fewer in size, amount, intensity, or degree.",
        chinese_explanation: "(B) '波动' 一词意味着数量或数量不规则地上升和下降。" +
            "<br><br>" +
            "(A) '稳定' 意味着使变得不太可能改变、失败或下降。" +
            "<br><br>" +
            "(C) '保持' 意味着继续存在，特别是在其他类似或相关的人或事物已停止存在之后。" +
            "<br><br>" +
            "(D) '减少' 意味着使变得更小或更少。"
    },
    {
        id: 10,
        question: "She tried to __________ on behalf of her friend to resolve the dispute.",
        chinese_question: "她试图代表她的朋友 __________ 解决争端。",
        answers: [
            { option: "A", answer: "intercede", chinese_answer: "调解", chinese_romanization: "tiáojiě" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "provoke", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "D", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intercede' means intervene on behalf of another." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'provoke' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone." +
            "<br><br>" +
            "(D) 'escalate' means increase rapidly.",
        chinese_explanation: "(A) '调解' 一词意味着代表另一个人进行干预。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(C) '刺激' 意味着激发或引起（通常是强烈或不受欢迎的反应或情感）。" +
            "<br><br>" +
            "(D) '升级' 意味着迅速增加。"
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
