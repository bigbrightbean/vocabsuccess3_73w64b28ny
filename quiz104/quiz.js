// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Before uttering a word, she felt compelled to carefully __________ how her words would impact her friend's feelings.",
        chinese_question: "在开口说话之前，她感到有必要仔细__________她的话会如何影响她朋友的感受。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
            { option: "C", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consider' means to think carefully about (something), typically before making a decision. Figuratively, it can mean to take into account or be mindful of." + 
            "<br><br>" + 
            "(A) 'reject' means to dismiss as inadequate, unacceptable, or faulty." + 
            "<br><br>" + 
            "(C) 'dismiss' means to order or allow to leave; send away." + 
            "<br><br>" + 
            "(D) 'overlook' means to fail to notice (something).",
        chinese_explanation: "(B) '考虑'一词意味着仔细思考（某事），通常是在做决定之前。比喻地，它可以表示考虑或注意到。" + 
            "<br><br>" + 
            "(A) '拒绝' 意味着认为不合格、不可接受或有缺陷。" + 
            "<br><br>" + 
            "(C) '解雇' 意味着命令或允许离开；遣散。" + 
            "<br><br>" + 
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 2,
        question: "The company decided to __________ a new strategy to improve sales.",
        chinese_question: "公司决定 __________ 一项新策略以提高销售额。",
        answers: [
            { option: "A", answer: "adopt", chinese_answer: "采用", chinese_romanization: "cǎiyòng" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'adopt' metaphorically means to take up or start to use or follow (an idea, method, or course of action)." + 
            "<br><br>" + 
            "(B) 'reject' means dismiss as inadequate, unacceptable, or faulty." + 
            "<br><br>" + 
            "(C) 'criticize' means indicate the faults of (someone or something) in a disapproving way." + 
            "<br><br>" + 
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(A) '采用' 比喻采取或开始使用或遵循（一个想法、方法或行动方案）。" + 
            "<br><br>" + 
            "(B) '拒绝' 意味着认为不合适、不接受或有缺陷而予以驳回。" + 
            "<br><br>" + 
            "(C) '批评' 意味着以不赞成的方式指出（某人或某物）的缺点。" + 
            "<br><br>" + 
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 3,
        question: "She felt the need to __________ her decisions against criticism.",
        chinese_question: "她觉得有必要 __________ 她的决定以应对批评。",
        answers: [
            { option: "A", answer: "defend", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'defend' metaphorically means to justify or support one's actions or decisions." + 
            "<br><br>" + 
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." + 
            "<br><br>" + 
            "(C) 'undermine' means damage or weaken (someone or something), especially gradually or insidiously." + 
            "<br><br>" + 
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(A) '辩护' 比喻为自己的行为或决定辩解或支持。" + 
            "<br><br>" + 
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" + 
            "<br><br>" + 
            "(C) '破坏' 意味着损害或削弱（某人或某物），特别是逐渐或暗中。" + 
            "<br><br>" + 
            "(D) '拒绝' 意味着认为不合适、不接受或有缺陷而予以驳回。"
    },
    {
        id: 4,
        question: "She decided to __________ her former political beliefs and join a different party.",
        chinese_question: "她决定 __________ 她以前的政治信仰，加入另一个政党。",
        answers: [
            { option: "A", answer: "advocate", chinese_answer: "提倡", chinese_romanization: "tíchàng" },
            { option: "B", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "D", answer: "abjure", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abjure' means to solemnly renounce a belief, cause, or claim." +
            "<br><br>" +
            "(A) 'advocate' means to publicly recommend or support." +
            "<br><br>" +
            "(B) 'accept' means to consent to receive or undertake something." +
            "<br><br>" +
            "(C) 'endorse' means to declare one's public approval or support of.",
        chinese_explanation: "(D) '放弃' 意思是庄严地放弃信仰、事业或主张。" +
            "<br><br>" +
            "(A) '提倡' 意思是公开推荐或支持。" +
            "<br><br>" +
            "(B) '接受' 意思是同意接受或承担某事。" +
            "<br><br>" +
            "(C) '赞同' 意思是公开表示赞同或支持。"
    },
    {
        id: 5,
        question: "The impact of his revolutionary ideas will __________ him, influencing generations to come.",
        chinese_question: "他革命性思想的影响将 __________ 他，影响后代。",
        answers: [
            { option: "A", answer: "precede", chinese_answer: "先于", chinese_romanization: "xiān yú" },
            { option: "B", answer: "outlive", chinese_answer: "比...活得长", chinese_romanization: "bǐ... huó dé cháng" },
            { option: "C", answer: "predecease", chinese_answer: "先于...死", chinese_romanization: "xiān yú... sǐ" },
            { option: "D", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'outlive' means to continue to exist after." +
            "<br><br>" +
            "(A) 'precede' means to come before." +
            "<br><br>" +
            "(C) 'predecease' means to die before someone else." +
            "<br><br>" +
            "(D) 'follow' means to come after.",
        chinese_explanation: "(B) '比...活得长' 意味着比...活得长。" +
            "<br><br>" +
            "(A) '先于' 意味着在...之前到来。" +
            "<br><br>" +
            "(C) '先于...死' 意味着在某人之前去世。" +
            "<br><br>" +
            "(D) '跟随' 意味着在...之后到来。"
    },
    {
        id: 6,
        question: "The architect __________ the plans for the new building, providing a clear and detailed outline.",
        chinese_question: "建筑师 __________ 了新建筑的计划，提供了清晰而详细的纲要。",
        answers: [
            { option: "A", answer: "obscures", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "B", answer: "confuses", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "C", answer: "muddles", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "delineates", chinese_answer: "描绘", chinese_romanization: "miáohuì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'delineates' means describe or portray (something) precisely." +
            "<br><br>" +
            "(A) 'obscures' means keep from being seen; conceal." +
            "<br><br>" +
            "(B) 'confuses' means cause (someone) to become bewildered or perplexed." +
            "<br><br>" +
            "(C) 'muddles' means cause to become confused or bewildered.",
        chinese_explanation: "(D) '描绘' 意味着准确地描述或描绘（某事物）。" +
            "<br><br>" +
            "(A) '模糊' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(B) '混淆' 意味着使某人变得困惑或迷惑。" +
            "<br><br>" +
            "(C) '混乱' 意味着使人困惑或迷惑。"
    },
    {
        id: 7,
        question: "The king decided to __________ his throne, passing the power to his son.",
        chinese_question: "国王决定 __________ 他的王位，将权力传给他的儿子。",
        answers: [
            { option: "A", answer: "abbreviate", chinese_answer: "缩写", chinese_romanization: "suōxiě" },
            { option: "B", answer: "abdicate", chinese_answer: "退位", chinese_romanization: "tuìwèi" },
            { option: "C", answer: "exacerbate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "D", answer: "elucidate", chinese_answer: "阐明", chinese_romanization: "chǎnmíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abdicate' means to renounce one's throne." +
            "<br><br>" +
            "(A) 'abbreviate' means to shorten a word, phrase, or text." +
            "<br><br>" +
            "(C) 'exacerbate' means to make a problem or situation worse." +
            "<br><br>" +
            "(D) 'elucidate' means to make something clear; explain.",
        chinese_explanation: "(B) '退位' 意味着放弃王位。" +
            "<br><br>" +
            "(A) '缩写' 意味着缩短一个词、短语或文本。" +
            "<br><br>" +
            "(C) '恶化' 意味着使问题或情况变得更糟。" +
            "<br><br>" +
            "(D) '阐明' 意味着使某事清晰；解释。"
    },
    {
        id: 8,
        question: "She knew she needed to address the issue, but her tendency to __________ made the situation worse.",
        chinese_question: "她知道需要解决这个问题，但她 __________ 的倾向使情况变得更糟。",
        answers: [
            { option: "A", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "B", answer: "procrastinate", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
            { option: "C", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" },
            { option: "D", answer: "manage", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'procrastinate' figuratively means to delay or postpone action." +
            "<br><br>" +
            "(A) 'confront' means face up to and deal with (a problem or difficult situation)." +
            "<br><br>" +
            "(C) 'resolve' means settle or find a solution to (a problem, dispute, or contentious matter)." +
            "<br><br>" +
            "(D) 'manage' means be in charge of (a company, establishment, or undertaking); administer; run.",
        chinese_explanation: "(B) '拖延' 在比喻意义上意味着延迟或推迟行动。" +
            "<br><br>" +
            "(A) '面对' 意味着面对并处理（问题或困难的情况）。" +
            "<br><br>" +
            "(C) '解决' 意味着解决或找到（问题、争端或有争议的事项）的解决方案。" +
            "<br><br>" +
            "(D) '管理' 意味着负责（公司、机构或事业）；管理；运营。"
    },
    {
        id: 9,
        question: "As the tension in the room eased, his stern expression __________ into a gentle smile.",
        chinese_question: "随着房间里的紧张气氛缓解，他严肃的表情 __________ 为温柔的微笑。",
        answers: [
                { option: "A", answer: "receded", chinese_answer: "退去", chinese_romanization: "tuìqù" },
                { option: "B", answer: "intensified", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "C", answer: "vanished", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
                { option: "D", answer: "emerged", chinese_answer: "出现", chinese_romanization: "chūxiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'receded' means to go or move back or further away from a previous position." +
            "<br><br>" +
            "(B) 'intensified' means to become or make more intense." +
            "<br><br>" +
            "(C) 'vanished' means to disappear suddenly and completely." +
            "<br><br>" +
            "(D) 'emerged' means to move out of or away from something and become visible.",
        chinese_explanation: "(A) '退去' 意味着从先前的位置返回或进一步远离。" +
            "<br><br>" +
            "(B) '加剧' 意味着变得更加激烈或使其变得更加激烈。" +
            "<br><br>" +
            "(C) '消失' 意味着突然完全地消失。" +
            "<br><br>" +
            "(D) '出现' 意味着从某物中或远离某物移出并变得可见。"
    },
    {
        id: 10,
        question: "The spirit of excitement __________ the crowd as the band took the stage, electrifying the atmosphere.",
        chinese_question: "当乐队登上舞台时，兴奋的气氛 __________ 了人群，令整个环境充满活力。",
        answers: [
                { option: "A", answer: "permeated", chinese_answer: "渗透", chinese_romanization: "shèntòu" },
                { option: "B", answer: "escaped", chinese_answer: "逃脱", chinese_romanization: "táotuō" },
                { option: "C", answer: "contained", chinese_answer: "包含", chinese_romanization: "bāohán" },
                { option: "D", answer: "destroyed", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'permeated' means to spread throughout (something); pervade." +
            "<br><br>" +
            "(B) 'escaped' means to break free from confinement or control." +
            "<br><br>" +
            "(C) 'contained' means to have or hold (someone or something) within." +
            "<br><br>" +
            "(D) 'destroyed' means to put an end to the existence of (something) by damaging or attacking it.",
        chinese_explanation: "(A) '渗透' 意味着遍布（某物）；弥漫。" +
            "<br><br>" +
            "(B) '逃脱' 意味着摆脱束缚或控制。" +
            "<br><br>" +
            "(C) '包含' 意味着有或持有（某人或某物）在内。" +
            "<br><br>" +
            "(D) '摧毁' 意味着通过破坏或攻击来结束（某物）的存在。"
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
