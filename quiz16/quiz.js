// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The novel is filled with __________ characters and events that have no basis in reality.",
        chinese_question: "这部小说充满了 __________ 的人物和事件，完全没有现实依据。",
        answers: [
            { option: "A", answer: "real", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "B", answer: "factual", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "authentic", chinese_answer: "真正", chinese_romanization: "zhēnzhèng" },
            { option: "D", answer: "fictitious", chinese_answer: "虚构", chinese_romanization: "xūgòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fictitious' means not real or true; imaginary or fabricated." +
            "<br><br>" +
            "(A) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed." +
            "<br><br>" +
            "(B) 'factual' means concerned with what is actually the case." +
            "<br><br>" +
            "(C) 'authentic' means of undisputed origin and not a copy; genuine.",
        chinese_explanation: "(D) '虚构' 一词意味着不真实或虚构的；想象的或捏造的。" +
            "<br><br>" +
            "(A) '真实' 意味着作为一个事物实际存在或发生的；不是想象或假设的。" +
            "<br><br>" +
            "(B) '事实' 意味着关心实际情况的。" +
            "<br><br>" +
            "(C) '真正' 意味着无可争议的起源，而不是副本；真正的。"
    },
    {
        id: 2,
        question: "The scientist's __________ data, gathered from years of fieldwork and experiments, provided solid evidence to support her groundbreaking theory.",
        chinese_question: "科学家多年来通过实地工作和实验收集的 __________ 数据，为她的突破性理论提供了坚实的证据。",
        answers: [
            { option: "A", answer: "theoretical", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "B", answer: "hypothetical", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "empirical", chinese_answer: "实证", chinese_romanization: "shízhèng" },
            { option: "D", answer: "speculative", chinese_answer: "推测", chinese_romanization: "tuīcè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'empirical' means based on, concerned with, or verifiable by observation or experience rather than theory or pure logic." +
            "<br><br>" +
            "(A) 'theoretical' means based on or calculated through theory rather than experience or practice." +
            "<br><br>" +
            "(B) 'hypothetical' means based on or serving as a hypothesis." +
            "<br><br>" +
            "(D) 'speculative' means engaged in, expressing, or based on conjecture rather than knowledge.",
        chinese_explanation: "(C) '实证' 一词意味着基于观察或经验而非理论或纯逻辑的。" +
            "<br><br>" +
            "(A) '理论' 意味着基于理论而不是经验或实践的。" +
            "<br><br>" +
            "(B) '假设' 意味着基于或作为假设的。" +
            "<br><br>" +
            "(D) '推测' 意味着从事、表达或基于猜测而不是知识的。"
    },
    {
        id: 3,
        question: "Security cameras have become __________ in urban areas, monitoring activities on every street corner.",
        chinese_question: "监控摄像头在城市地区变得 __________，监视每个街角的活动。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
            { option: "B", answer: "ubiquitous", chinese_answer: "无处不在", chinese_romanization: "wú chù bù zài" },
            { option: "C", answer: "scarce", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "D", answer: "uncommon", chinese_answer: "不常见", chinese_romanization: "bù chángjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ubiquitous' means present, appearing, or found everywhere." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(D) 'uncommon' means out of the ordinary; unusual.",
        chinese_explanation: "(B) '无处不在' 一词意味着存在、出现或被发现到处都是。" +
            "<br><br>" +
            "(A) '稀有' 意味着不经常发生的。" +
            "<br><br>" +
            "(C) '缺乏' 意味着不足以满足需求的。" +
            "<br><br>" +
            "(D) '不常见' 意味着不同寻常的；不寻常的。"
    },
    {
        id: 4,
        question: "Her __________ ideas often brought a sense of playfulness and creativity to the office environment.",
        chinese_question: "她的 __________ 想法常常为办公室环境带来一种嬉戏和创造力的感觉。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "whimsical", chinese_answer: "奇思妙想", chinese_romanization: "qísī miàoxiǎng" },
            { option: "C", answer: "grim", chinese_answer: "严峻", chinese_romanization: "yánjùn" },
            { option: "D", answer: "solemn", chinese_answer: "庄重", chinese_romanization: "zhuāngzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
            "<br><br>" +
            "(A) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(C) 'grim' means forbidding or uninviting." +
            "<br><br>" +
            "(D) 'solemn' means formal and dignified.",
        chinese_explanation: "(B) '奇思妙想' 一词意味着玩笑般的古怪或异想天开的，尤其是以一种吸引人和有趣的方式。" +
            "<br><br>" +
            "(A) '严肃' 意味着需要仔细考虑或应用的。" +
            "<br><br>" +
            "(C) '严峻' 意味着令人生畏或不吸引人的。" +
            "<br><br>" +
            "(D) '庄重' 意味着正式和庄严的。"
    },
    {
        id: 5,
        question: "The __________ scientist received numerous awards for her groundbreaking research in genetics.",
        chinese_question: "这位 __________ 的科学家因其在遗传学方面的开创性研究获得了许多奖项。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "默默无闻", chinese_romanization: "mòmò wú wén" },
            { option: "B", answer: "unknown", chinese_answer: "未知", chinese_romanization: "wèizhī" },
            { option: "C", answer: "illustrious", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "D", answer: "unremarkable", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'illustrious' means well known, respected, and admired for past achievements." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(B) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(C) '杰出' 一词意味着因过去的成就而广为人知、受人尊敬和钦佩的。" +
            "<br><br>" +
            "'默默无闻' 意味着未被发现或不为人知的；不确定的。" +
            "<br><br>" +
            "'未知' 意味着不为人知或不熟悉的。" +
            "<br><br>" +
            "'平凡' 意味着不特别有趣或令人惊讶的。"
    },
    {
        id: 6,
        question: "Her __________ praise for the student was more than he deserved.",
        chinese_question: "她对学生的 __________ 赞美超过了他应得的。",
        answers: [
            { option: "A", answer: "moderate", chinese_answer: "适度", chinese_romanization: "shìdù" },
            { option: "B", answer: "restrained", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "C", answer: "extravagant", chinese_answer: "过度", chinese_romanization: "guòdù" },
            { option: "D", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'extravagant' means lacking restraint in spending money or using resources, or excessive in any way." +
            "<br><br>" +
            "(A) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(B) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(D) 'cautious' means careful to avoid potential problems or dangers.",
        chinese_explanation: "(C) '过度' 意味着在花钱或使用资源方面缺乏节制，或以任何方式过度." +
            "<br><br>" +
            "(A) '适度' 意味着在数量、强度、质量或程度上是平均的." +
            "<br><br>" +
            "(B) '克制' 意味着以保留或适度为特征；不动感情的或冷静的." +
            "<br><br>" +
            "(D) '谨慎' 意味着小心避免潜在的问题或危险."
    },
    {
        id: 7,
        question: "The stock market is highly __________, with prices fluctuating wildly on a daily basis.",
        chinese_question: "股市高度 __________，价格每天都在剧烈波动。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "B", answer: "volatile", chinese_answer: "易变", chinese_romanization: "yìbiàn" },
            { option: "C", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" },
            { option: "D", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(B) '易变' 一词意味着迅速且不可预测地变化，尤其是变得更糟。" +
            "<br><br>" +
            "(A) '稳定' 意味着不太可能改变或失败；牢固确立的。" +
            "<br><br>" +
            "(C) '可预测' 意味着能够预测的。" +
            "<br><br>" +
            "(D) '一致' 意味着随着时间的推移以相同的方式行事或完成，尤其是为了公平或准确。"
    },
    {
        id: 8,
        question: "His __________ behavior made it difficult for him to get along with his coworkers.",
        chinese_question: "他的 __________ 行为使他难以与同事相处。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "C", answer: "truculent", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "D", answer: "amiable", chinese_answer: "和蔼", chinese_romanization: "hé'ǎi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'truculent' means eager or quick to argue or fight; aggressively defiant." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'amiable' means having or displaying a friendly and pleasant manner.",
        chinese_explanation: "(C) '好斗' 一词意味着急于或迅速争论或打架；攻击性蔑视的。" +
            "<br><br>" +
            "'友好' 意味着友善和愉快的。" +
            "<br><br>" +
            "'合作' 意味着在实现共同目标的过程中相互协助。" +
            "<br><br>" +
            "'和蔼' 意味着具有或表现出友好和愉快的态度。"
    },
    {
        id: 9,
        question: "The intern's __________ behavior towards the senior executives was seen as overly flattering and insincere.",
        chinese_question: "实习生对高级管理人员的 __________ 行为被认为是过度奉承和不真诚的。",
        answers: [
            { option: "A", answer: "disrespectful", chinese_answer: "不敬", chinese_romanization: "bùjìng" },
            { option: "B", answer: "obsequious", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
            { option: "C", answer: "rude", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "D", answer: "insolent", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obsequious' means obedient or attentive to an excessive or servile degree." +
            "<br><br>" +
            "(A) 'disrespectful' means showing a lack of respect or courtesy." +
            "<br><br>" +
            "(C) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(D) 'insolent' means showing a rude and arrogant lack of respect.",
        chinese_explanation: "(B) '谄媚' 一词意味着顺从或过度或奴性的专注。" +
            "<br><br>" +
            "'不敬' 意味着缺乏尊重或礼貌。" +
            "<br><br>" +
            "'粗鲁' 意味着冒犯性的不礼貌或无礼的。" +
            "<br><br>" +
            "'傲慢' 意味着表现出无礼和傲慢的缺乏尊重。"
    },
    {
        id: 10,
        question: "The divorce proceedings were __________, filled with bitter arguments and accusations.",
        chinese_question: "离婚诉讼非常 __________，充满了激烈的争吵和指责。",
        answers: [
            { option: "A", answer: "amicable", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "C", answer: "friendly", chinese_answer: "友善", chinese_romanization: "yǒushàn" },
            { option: "D", answer: "acrimonious", chinese_answer: "尖酸", chinese_romanization: "jiānsuān" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'acrimonious' means angry and bitter." +
            "<br><br>" +
            "(A) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'friendly' means kind and pleasant.",
        chinese_explanation: "(D) '尖酸' 一词意味着愤怒和苦涩。" +
            "<br><br>" +
            "(A) '友好' 意味着具有友好精神；没有严重的分歧或怨恨。" +
            "<br><br>" +
            "(B) '愉快' 意味着带来快乐满足感或享受。" +
            "<br><br>" +
            "(C) '友善' 意味着友好和愉快的。"
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
