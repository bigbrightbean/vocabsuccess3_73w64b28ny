// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ comments during the serious discussion annoyed his colleagues, who were trying to focus on the issue at hand.",
        chinese_question: "他在严肃讨论中的 __________ 评论让同事们感到恼火，他们正试图专注于眼前的问题。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "facetious", chinese_answer: "滑稽", chinese_romanization: "huájī" },
            { option: "C", answer: "solemn", chinese_answer: "庄重", chinese_romanization: "zhuāngzhòng" },
            { option: "D", answer: "grave", chinese_answer: "严重", chinese_romanization: "yánzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'facetious' means treating serious issues with deliberately inappropriate humor." +
            "<br><br>" +
            "(A) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(C) 'solemn' means formal and dignified." +
            "<br><br>" +
            "(D) 'grave' means giving cause for alarm; serious.",
        chinese_explanation: "(B) '滑稽' 一词意味着用故意不适当的幽默处理严重问题。" +
            "<br><br>" +
            "(A) '严肃' 意味着需要仔细考虑或应用的。" +
            "<br><br>" +
            "(C) '庄重' 意味着正式和庄严的。" +
            "<br><br>" +
            "(D) '严重' 意味着引起警觉的；严重的。"
    },
    {
        id: 2,
        question: "The student's __________ solution to the math problem overlooked several important steps, resulting in an incorrect answer.",
        chinese_question: "这名学生对数学问题的 __________ 解决方案忽略了几个重要步骤，导致答案错误。",
        answers: [
            { option: "A", answer: "complex", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "B", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "C", answer: "facile", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "D", answer: "detailed", chinese_answer: "详细", chinese_romanization: "xiángxì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'facile' means appearing neat and comprehensive only by ignoring the true complexities of an issue; superficial." +
            "<br><br>" +
            "(A) 'complex' means consisting of many different and connected parts." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(D) 'detailed' means having many details or facts; showing attention to detail.",
        chinese_explanation: "(C) '肤浅' 一词意味着通过忽略问题的真正复杂性而显得整齐和全面；表面的。" +
            "<br><br>" +
            "(A) '复杂' 意味着由许多不同和相互连接的部分组成的。" +
            "<br><br>" +
            "(B) '彻底' 意味着对每一个细节都很完整；不表面或部分的。" +
            "<br><br>" +
            "(D) '详细' 意味着有许多细节或事实；显示出对细节的关注。"
    },
    {
        id: 3,
        question: "Despite numerous warnings, he remained __________, never changing his bad behavior.",
        chinese_question: "尽管多次警告，他仍然 __________，从未改变他的不良行为。",
        answers: [
            { option: "A", answer: "reformable", chinese_answer: "可改正", chinese_romanization: "kě gǎizhèng" },
            { option: "B", answer: "corrigible", chinese_answer: "可修正", chinese_romanization: "kě xiūzhèng" },
            { option: "C", answer: "incorrigible", chinese_answer: "无可救药", chinese_romanization: "wú kě jiù yào" },
            { option: "D", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incorrigible' means not able to be corrected, improved, or reformed." +
            "<br><br>" +
            "(A) 'reformable' means able to be changed for the better." +
            "<br><br>" +
            "(B) 'corrigible' means capable of being corrected, rectified, or reformed." +
            "<br><br>" +
            "(D) 'obedient' means complying or willing to comply with orders or requests; submissive to another's authority.",
        chinese_explanation: "(C) '无可救药' 一词意味着无法纠正、改进或改革的。" +
            "<br><br>" +
            "(A) '可改正' 意味着能够被改正的。" +
            "<br><br>" +
            "(B) '可修正' 意味着能够被纠正、修正或改革的。" +
            "<br><br>" +
            "(D) '顺从' 意味着遵从或愿意遵从命令或要求；服从他人的权威。"
    },
    {
        id: 4,
        question: "Her __________ approach to research ensured that every step of the experiment was carefully planned and executed.",
        chinese_question: "她的 __________ 研究方法确保实验的每一步都经过精心策划和执行。",
        answers: [
            { option: "A", answer: "haphazard", chinese_answer: "随意", chinese_romanization: "suíyì" },
            { option: "B", answer: "unplanned", chinese_answer: "无计划", chinese_romanization: "wú jìhuà" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hǔnluàn" },
            { option: "D", answer: "methodological", chinese_answer: "系统", chinese_romanization: "xìtǒng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'methodological' means relating to the systematic, theoretical analysis of the methods applied to a field of study." +
            "<br><br>" +
            "(A) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(B) 'unplanned' means not planned." +
            "<br><br>" +
            "(C) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(D) '系统' 一词意味着与应用于某一研究领域的方法的系统的、理论的分析有关的。" +
            "<br><br>" +
            "(A) '随意' 意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(B) '无计划' 意味着没有计划。" +
            "<br><br>" +
            "(C) '混乱' 意味着处于完全混乱和无序的状态。"
    },
    {
        id: 5,
        question: "The boundaries of the new national park were clearly __________ on the map to ensure proper management and conservation efforts.",
        chinese_question: "新国家公园的边界在地图上被清晰地 __________，以确保适当的管理和保护工作。",
        answers: [
            { option: "A", answer: "obscured", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "distorted", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "C", answer: "delineated", chinese_answer: "描绘", chinese_romanization: "miáohuì" },
            { option: "D", answer: "confused", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'delineated' means described or portrayed (something) precisely." +
            "<br><br>" +
            "(A) 'obscured' means kept from being seen; concealed." +
            "<br><br>" +
            "(B) 'distorted' means pulled or twisted out of shape; contorted." +
            "<br><br>" +
            "(D) 'confused' means (of a person) unable to think clearly; bewildered.",
        chinese_explanation: "(C) '描绘' 一词意味着准确地描述或描绘（某事）。" +
            "<br><br>" +
            "(A) '隐藏' 意味着被遮挡不被看见的；隐瞒的。" +
            "<br><br>" +
            "(B) '扭曲' 意味着被拉或扭出形状的；扭曲的。" +
            "<br><br>" +
            "(D) '混淆' 意味着（指人）不能清楚地思考的；困惑的。"
    },
    {
        id: 6,
        question: "The __________ arrangement of books made it difficult to find any specific title.",
        chinese_question: "书籍的 __________ 排列使得很难找到任何特定的书名。",
        answers: [
            { option: "A", answer: "orderly", chinese_answer: "有序", chinese_romanization: "yǒuxù" },
            { option: "B", answer: "haphazard", chinese_answer: "杂乱", chinese_romanization: "záluàn" },
            { option: "C", answer: "systematic", chinese_answer: "系统", chinese_romanization: "xìtǒng" },
            { option: "D", answer: "organized", chinese_answer: "有组织", chinese_romanization: "yǒu zǔzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(A) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(C) 'systematic' means done or acting according to a fixed plan or system; methodical." +
            "<br><br>" +
            "(D) 'organized' means arranged or structured in a systematic way.",
        chinese_explanation: "(B) '杂乱' 一词意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(A) '有序' 意味着整齐且有条理地排列。" +
            "<br><br>" +
            "(C) '系统' 意味着按照固定计划或系统进行的；有条理的。" +
            "<br><br>" +
            "(D) '有组织' 意味着以系统的方式安排或结构的。"
    },
    {
        id: 7,
        question: "She was a __________ person who loved hosting parties and meeting new people.",
        chinese_question: "她是一个 __________ 的人，喜欢举办聚会和结识新朋友。",
        answers: [
            { option: "A", answer: "introverted", chinese_answer: "内向", chinese_romanization: "nèixiàng" },
            { option: "B", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
            { option: "C", answer: "gregarious", chinese_answer: "合群", chinese_romanization: "héqún" },
            { option: "D", answer: "shy", chinese_answer: "害羞", chinese_romanization: "hàixiū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gregarious' means (of a person) fond of company; sociable." +
            "<br><br>" +
            "(A) 'introverted' means shy, reticent, and typically self-centered." +
            "<br><br>" +
            "(B) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people.",
        chinese_explanation: "(C) '合群' 一词意味着（指一个人）喜欢与人交往；社交的。" +
            "<br><br>" +
            "(A) '内向' 意味着害羞、沉默寡言且通常自我中心的。" +
            "<br><br>" +
            "(B) '矜持' 意味着缓慢地表现出情感或意见。" +
            "<br><br>" +
            "(D) '害羞' 意味着在与他人相处时表现出矜持或紧张。"
    },
    {
        id: 8,
        question: "His __________ decision to climb the mountain without proper gear shocked his friends.",
        chinese_question: "他在没有适当装备的情况下爬山的 __________ 决定让他的朋友们感到震惊。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "temerarious", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "C", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "D", answer: "prudent", chinese_answer: "明智", chinese_romanization: "míngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'temerarious' means reckless; rash." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(B) '鲁莽' 一词意味着鲁莽的；轻率的。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(C) '小心' 意味着确保避免潜在的危险、意外或伤害；谨慎的。" +
            "<br><br>" +
            "(D) '明智' 意味着表现出关心和考虑未来的行为。"
    },
    {
        id: 9,
        question: "The marathon runner was __________, pushing through fatigue and pain to reach the finish line.",
        chinese_question: "这位马拉松选手 __________，克服疲劳和疼痛到达终点线。",
        answers: [
            { option: "A", answer: "exhausted", chinese_answer: "疲惫", chinese_romanization: "píbèi" },
            { option: "B", answer: "indefatigable", chinese_answer: "不屈不挠", chinese_romanization: "bù qū bù náo" },
            { option: "C", answer: "weary", chinese_answer: "疲倦", chinese_romanization: "píjuàn" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yù shuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indefatigable' means persisting tirelessly." +
            "<br><br>" +
            "(A) 'exhausted' means very tired." +
            "<br><br>" +
            "(C) 'weary' means feeling or showing tiredness." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(B) '不屈不挠' 一词意味着坚持不懈。" +
            "<br><br>" +
            "(A) '疲惫' 意味着非常累。" +
            "<br><br>" +
            "(C) '疲倦' 意味着感到或表现出疲劳。" +
            "<br><br>" +
            "'昏昏欲睡' 意味着受嗜睡症影响；迟钝和冷漠。"
    },
    {
        id: 10,
        question: "The ancient ruins were full of __________ carvings that no one could decipher.",
        chinese_question: "古老的遗迹上充满了无人能解的 __________ 雕刻。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "straightforward", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "enigmatic", chinese_answer: "神秘", chinese_romanization: "shénmì" },
            { option: "D", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'enigmatic' means difficult to interpret or understand; mysterious." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '神秘' 一词意味着难以解释或理解；神秘的。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '简单' 意味着简单易懂或容易理解。" +
            "<br><br>" +
            "(D) '明显' 意味着容易感知或理解；清楚的、自明的或显而易见的。"
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
