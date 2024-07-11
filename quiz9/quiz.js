// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The connection between the two events was __________, and many doubted they were related.",
        chinese_question: "这两件事之间的联系非常 __________，很多人怀疑它们是相关的。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强", chinese_romanization: "qiáng" },
            { option: "B", answer: "tenuous", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "C", answer: "solid", chinese_answer: "稳固", chinese_romanization: "wěngù" },
            { option: "D", answer: "firm", chinese_answer: "牢固", chinese_romanization: "láogù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tenuous' means very weak or slight." +
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(C) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(D) 'firm' means having a solid, almost unyielding surface or structure.",
        chinese_explanation: "(B) '脆弱' 一词意味着非常虚弱或微小。" +
            "<br><br>" +
            "'强' 意味着有力量搬动重物或执行其他需要体力的任务。" +
            "<br><br>" +
            "'稳固' 意味着形状牢固且稳定；不是液体或流体。" +
            "<br><br>" +
            "'牢固' 意味着具有坚固、几乎不屈不挠的表面或结构。"
    },
    {
        id: 2,
        question: "The artist's latest sculpture was __________, lacking any distinct shape or form.",
        chinese_question: "艺术家的最新雕塑是 __________ 的，缺乏任何明确的形状或形式。",
        answers: [
            { option: "A", answer: "defined", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "B", answer: "structured", chinese_answer: "有结构", chinese_romanization: "yǒu jiégòu" },
            { option: "C", answer: "amorphous", chinese_answer: "无形", chinese_romanization: "wúxíng" },
            { option: "D", answer: "organized", chinese_answer: "有组织", chinese_romanization: "yǒu zǔzhī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amorphous' means without a clearly defined shape or form." +
            "<br><br>" +
            "(A) 'defined' means having clear or definite limits." +
            "<br><br>" +
            "(B) 'structured' means arranged or organized in a specific way." +
            "<br><br>" +
            "(D) 'organized' means arranged or structured in a systematic way.",
        chinese_explanation: "(C) '无形' 一词意味着没有明确定义的形状或形式。" +
            "<br><br>" +
            "(A) '明确' 意味着有明确或确定的界限。" +
            "<br><br>" +
            "(B) '有结构' 意味着以特定方式安排或组织。" +
            "<br><br>" +
            "(D) '有组织' 意味着以系统的方式安排或组织。"
    },
    {
        id: 3,
        question: "Her __________ performance earned her the Employee of the Month award.",
        chinese_question: "她的 __________ 表现为她赢得了月度最佳员工奖。",
        answers: [
            { option: "A", answer: "poor", chinese_answer: "糟糕", chinese_romanization: "zāogāo" },
            { option: "B", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "C", answer: "exemplary", chinese_answer: "模范", chinese_romanization: "mófàn" },
            { option: "D", answer: "mediocre", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exemplary' means serving as a desirable model; representing the best of its kind." +
            "<br><br>" +
            "(A) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(B) 'average' means achieving an average standard; not extraordinary." +
            "<br><br>" +
            "(D) 'mediocre' means of only moderate quality; not very good.",
        chinese_explanation: "(C) '模范' 一词意味着作为理想模型的；代表其类型中最好的。" +
            "<br><br>" +
            "'糟糕' 意味着缺乏足够的钱来维持在社会中被认为舒适或正常的标准。" +
            "<br><br>" +
            "'平均' 意味着达到平均标准；不非凡的。" +
            "<br><br>" +
            "'普通' 意味着质量中等的；不太好的。"
    },
    {
        id: 4,
        question: "He was so __________ that he believed every scam email he received.",
        chinese_question: "他如此 __________，相信他收到的每一封诈骗邮件。",
        answers: [
            { option: "A", answer: "gullible", chinese_answer: "轻信的", chinese_romanization: "qīngxìn de" },
            { option: "B", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "C", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gullible' means easily persuaded to believe something; credulous." +
            "<br><br>" +
            "(B) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(C) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'shrewd' means having or showing sharp powers of judgment.",
        chinese_explanation: "(A) '轻信的' 意味着容易被说服相信某事；轻信的。" +
            "<br><br>" +
            "'怀疑的' 意味着不容易被说服；有疑虑或保留的。" +
            "<br><br>" +
            "'谨慎的' 意味着小心以避免潜在问题或危险的。" +
            "<br><br>" +
            "'精明的' 意味着具有或表现出敏锐的判断力的。"
    },
    {
        id: 5,
        question: "Feeling __________, he apologized for his harsh words and sought to make amends.",
        chinese_question: "他感到 __________，为自己的苛刻言辞道歉，并试图弥补。",
        answers: [
            { option: "A", answer: "unapologetic", chinese_answer: "不道歉", chinese_romanization: "bù dàoqiàn" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "unrepentant", chinese_answer: "不后悔", chinese_romanization: "bù hòuhuǐ" },
            { option: "D", answer: "contrite", chinese_answer: "忏悔", chinese_romanization: "chànhuǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contrite' means feeling or expressing remorse or penitence; affected by guilt." +
            "<br><br>" +
            "(A) 'unapologetic' means not acknowledging or expressing regret." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'unrepentant' means showing no regret for one's wrongdoings.",
        chinese_explanation: "(D) '忏悔' 一词意味着感到或表达悔恨或忏悔；受到内疚的影响。" +
            "<br><br>" +
            "(A) '不道歉' 意味着不承认或表达遗憾。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '不后悔' 意味着对自己的过错没有表现出悔意。"
    },
    {
        id: 6,
        question: "They conducted a __________ investigation to avoid attracting attention to their findings.",
        chinese_question: "他们进行了 __________ 的调查，以避免引起对其发现的注意。",
        answers: [
            { option: "A", answer: "public", chinese_answer: "公开", chinese_romanization: "gōngkāi" },
            { option: "B", answer: "open", chinese_answer: "开放", chinese_romanization: "kāifàng" },
            { option: "C", answer: "surreptitious", chinese_answer: "秘密", chinese_romanization: "mìmì" },
            { option: "D", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surreptitious' means kept secret, especially because it would not be approved of." +
            "<br><br>" +
            "(A) 'public' means open to everyone." +
            "<br><br>" +
            "(B) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up." +
            "<br><br>" +
            "(D) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen.",
        chinese_explanation: "(C) '秘密' 一词意味着保密，尤其是因为不会被认可。" +
            "<br><br>" +
            "'公开' 意味着对所有人开放。" +
            "<br><br>" +
            "'开放' 意味着允许通过空旷空间进行访问、通行或查看。" +
            "<br><br>" +
            "'透明' 意味着允许光线通过，以便可以清晰地看到后面的物体。"
    },
    {
        id: 7,
        question: "The chemicals in the factory were found to be __________, causing long-term health problems for workers.",
        chinese_question: "工厂中的化学品被发现是 __________ 的，导致工人长期的健康问题。",
        answers: [
            { option: "A", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "B", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "C", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "D", answer: "pernicious", chinese_answer: "有害", chinese_romanization: "yǒuhài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pernicious' means having a harmful effect, especially in a gradual or subtle way." +
            "<br><br>" +
            "(A) 'harmless' means not likely to cause harm." +
            "<br><br>" +
            "(B) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(C) 'safe' means protected from or not exposed to danger or risk.",
        chinese_explanation: "(D) '有害' 一词意味着有害的影响，尤其是逐渐或微妙的方式。" +
            "<br><br>" +
            "'无害' 意味着不太可能造成伤害。" +
            "<br><br>" +
            "'有益' 意味着带来好的结果；有利或有益的。" +
            "<br><br>" +
            "'安全' 意味着受到保护或不暴露于危险或风险中。"
    },
    {
        id: 8,
       question: "The student's __________ reply to the teacher's question earned him a reprimand.",
        chinese_question: "学生对老师问题的 __________ 回答使他受到了训斥。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "B", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "insolent", chinese_answer: "傲慢无礼", chinese_romanization: "àomàn wúlǐ" },
            { option: "D", answer: "courteous", chinese_answer: "彬彬有礼", chinese_romanization: "bīnbīn yǒu lǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insolent' means showing a rude and arrogant lack of respect." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(C) '傲慢无礼' 一词意味着表现出无礼和傲慢的缺乏尊重。" +
            "<br><br>" +
            "'礼貌' 意味着表现出对他人的尊重和体贴的行为。" +
            "<br><br>" +
            "'尊重' 意味着感到或表现出敬意。" +
            "<br><br>" +
            "'彬彬有礼' 意味着礼貌、尊重或体贴的态度。"
    },
    {
        id: 9,
        question: "The route to the summit was so __________ that it took the hikers much longer to reach the top than they had anticipated.",
        chinese_question: "通往山顶的路线非常 __________，这使得登山者花了比预期更长的时间才到达顶峰。",
        answers: [
            { option: "A", answer: "direct", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "B", answer: "circuitous", chinese_answer: "迂回", chinese_romanization: "yūhuí" },
            { option: "C", answer: "straightforward", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'circuitous' means longer than the most direct way." +
            "<br><br>" +
            "(A) 'direct' means extending or moving from one place to another without changing direction or stopping." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(B) '迂回' 一词意味着比最直接的方式更长。" +
            "<br><br>" +
            "'直接' 意味着从一个地方延伸或移动到另一个地方，而不改变方向或停止。" +
            "<br><br>" +
            "'简单' 意味着简单易懂或容易理解。" +
            "<br><br>" +
            "'清晰' 意味着容易感知、理解或解释。"
    },
    {
        id: 10,
        question: "The teacher was considered too __________, often letting students off with just a warning.",
        chinese_question: "老师被认为太 __________，经常只是警告学生。",
        answers: [
            { option: "A", answer: "strict", chinese_answer: "严格", chinese_romanization: "yángé" },
            { option: "B", answer: "harsh", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "D", answer: "severe", chinese_answer: "严重", chinese_romanization: "yánzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(A) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'severe' means very great; intense.",
        chinese_explanation: "(C) '宽容' 一词意味着比预期的更仁慈或宽容。" +
            "<br><br>" +
            "'严格' 意味着要求遵守和观察有关行为的规则。" +
            "<br><br>" +
            "'严厉' 意味着对感官来说不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "'严重' 意味着非常大；强烈。"
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
