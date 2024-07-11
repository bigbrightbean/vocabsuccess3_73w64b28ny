// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager dismissed the employee's concerns as __________, saying they were not worth discussing.",
        chinese_question: "经理认为员工的担忧是 __________ 的，说它们不值得讨论。",
        answers: [
            { option: "A", answer: "important", chinese_answer: "重要", chinese_romanization: "zhòngyào" },
            { option: "B", answer: "significant", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" },
            { option: "C", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" },
            { option: "D", answer: "substantial", chinese_answer: "实质性", chinese_romanization: "shízhì xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(A) 'important' means of great significance or value." +
            "<br><br>" +
            "(B) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(D) 'substantial' means of considerable importance, size, or worth.",
        chinese_explanation: "(C) '微不足道' 一词意味着价值或重要性很小。" +
            "<br><br>" +
            "(A) '重要' 意味着具有重大意义或价值。" +
            "<br><br>" +
            "(B) '显著' 意味着足够大或重要，值得注意。" +
            "<br><br>" +
            "(D) '实质性' 意味着具有相当的重要性、规模或价值。"
    },
    {
        id: 2,
        question: "The CEO's __________ decision-making skills ensured the company's steady growth even during tough economic times.",
        chinese_question: "首席执行官 __________ 的决策能力确保了公司即使在经济困难时期也能稳定增长。",
        answers: [
            { option: "A", answer: "capricious", chinese_answer: "反复无常", chinese_romanization: "fǎnfù wúcháng" },
            { option: "B", answer: "prudent", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "D", answer: "impetuous", chinese_answer: "冲动", chinese_romanization: "chōngdòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prudent' means showing care and thought for the future." +
            "<br><br>" +
            "(A) 'capricious' means given to sudden changes of mood or behavior." +
            "<br><br>" +
            "(C) 'reckless' means without thinking or caring about the consequences." +
            "<br><br>" +
            "(D) 'impetuous' means acting quickly without thought or care.",
        chinese_explanation: "(B) '谨慎' 一词意味着对未来表现出关心和思考。" +
            "<br><br>" +
            "(A) '反复无常' 意味着情绪或行为的突然变化。" +
            "<br><br>" +
            "(C) '鲁莽' 意味着不考虑后果。" +
            "<br><br>" +
            "(D) '冲动' 意味着不加思索或不顾后果地快速行动。"
    },
    {
        id: 3,
        question: "The manager’s __________ attitude towards the employees’ concerns led to a decrease in workplace morale.",
        chinese_question: "经理对员工关心的问题表现出 __________ 的态度，导致工作场所士气下降。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "B", answer: "compassionate", chinese_answer: "有同情心", chinese_romanization: "yǒu tóngqíngxīn" },
            { option: "C", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "attentive", chinese_answer: "细心", chinese_romanization: "xìxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(B) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(A) '漠不关心'一词意味着没有特别的兴趣。" +
            "<br><br>" +
            "(B) '有同情心' 意味着感受到或表现出对他人的同情和关心。" +
            "<br><br>" +
            "(C) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(D) '细心' 意味着密切关注某事。"
    },
    {
        id: 4,
        question: "The teacher’s __________ feedback on the students' essays helped them improve their writing skills significantly.",
        chinese_question: "老师对学生作文的 __________ 反馈帮助他们显著提高了写作技能。",
        answers: [
            { option: "A", answer: "constructive", chinese_answer: "建设性", chinese_romanization: "jiànshèxìng" },
            { option: "B", answer: "destructive", chinese_answer: "破坏性", chinese_romanization: "pòhuàixìng" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'constructive' means serving a useful purpose; helpful." +
            "<br><br>" +
            "(B) 'destructive' means causing great harm or damage." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(D) 'vague' means unclear or not precise.",
        chinese_explanation: "(A) '建设性'一词意味着有用的；有帮助的。" +
            "<br><br>" +
            "(B) '破坏性' 意味着造成巨大伤害或破坏。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(D) '模糊' 意味着不清楚或不精确。"
    },
    {
        id: 5,
        question: "The professor’s __________ lecture on quantum physics made the complex subject understandable and engaging for the students.",
        chinese_question: "教授关于量子物理学的 __________ 讲座使复杂的主题对学生来说变得可理解且引人入胜。",
        answers: [
            { option: "A", answer: "confusing", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "C", answer: "tedious", chinese_answer: "枯燥", chinese_romanization: "kūzào" },
            { option: "D", answer: "enlightening", chinese_answer: "启发", chinese_romanization: "qǐfā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enlightening' means giving greater knowledge and understanding about a subject." +
            "<br><br>" +
            "(A) 'confusing' means making someone unable to understand." +
            "<br><br>" +
            "(B) 'obscure' means not clear or hard to understand." +
            "<br><br>" +
            "(C) 'tedious' means too long, slow, or dull.",
        chinese_explanation: "(D) '启发'一词意味着提供关于一个主题的更多知识和理解。" +
            "<br><br>" +
            "(A) '混乱' 意味着让某人无法理解。" +
            "<br><br>" +
            "(B) '模糊' 意味着不清楚或难以理解。" +
            "<br><br>" +
            "(C) '枯燥' 意味着太长、太慢或乏味。"
    },
    {
        id: 6,
        question: "The team’s __________ performance in the championship game demonstrated their exceptional skills and determination.",
        chinese_question: "球队在冠军赛中的 __________ 表现展示了他们卓越的技能和决心。",
        answers: [
            { option: "A", answer: "stellar", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "C", answer: "lackluster", chinese_answer: "无光", chinese_romanization: "wúguāng" },
            { option: "D", answer: "subpar", chinese_answer: "次等", chinese_romanization: "cìděng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stellar' means exceptionally good; outstanding." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(C) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring." +
            "<br><br>" +
            "(D) 'subpar' means below an average level.",
        chinese_explanation: "(A) '杰出'一词意味着特别好；优秀。" +
            "<br><br>" +
            "(B) '平庸' 意味着质量中等；不是很好。" +
            "<br><br>" +
            "(C) '无光' 意味着缺乏活力、力量或信念；不感兴趣或不感人。" +
            "<br><br>" +
            "(D) '次等' 意味着低于平均水平。"
    },
    {
        id: 7,
        question: "The novelist's __________ narrative style, rich with vivid descriptions and intricate plots, kept readers engaged and eagerly anticipating each new chapter.",
        chinese_question: "小说家的 __________ 叙述风格，充满了生动的描述和复杂的情节，使读者全神贯注，并迫切期待每一个新章节。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "B", answer: "prosaic", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "vivid", chinese_answer: "生动", chinese_romanization: "shēngdòng" },
            { option: "D", answer: "dull", chinese_answer: "乏味", chinese_romanization: "fáwèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vivid' means producing powerful feelings or strong, clear images in the mind." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious." +
            "<br><br>" +
            "(B) 'prosaic' means having the style or diction of prose; lacking poetic beauty." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(C) '生动'一词意味着产生强烈的感情或在脑海中形成清晰的形象。" +
            "<br><br>" +
            "(A) '单调' 意味着枯燥乏味，重复。" +
            "<br><br>" +
            "(B)'平凡' 意味着具有散文的风格或措辞；缺乏诗意的美。" +
            "<br><br>" +
            "(D) '乏味' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 8,
        question: "The engineer's __________ solution to the complex problem, using advanced technology, saved the company millions of dollars.",
        chinese_question: "工程师对复杂问题的 __________ 解决方案，采用了先进技术，为公司节省了数百万美元。",
        answers: [
            { option: "A", answer: "inefficient", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "B", answer: "impractical", chinese_answer: "不切实际", chinese_romanization: "bùqiè shíjì" },
            { option: "C", answer: "ingenious", chinese_answer: "巧妙", chinese_romanization: "qiǎomiào" },
            { option: "D", answer: "flawed", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ingenious' means clever, original, and inventive." +
            "<br><br>" +
            "(A) 'inefficient' means not achieving maximum productivity." +
            "<br><br>" +
            "(B) 'impractical' means not adapted for use or action." +
            "<br><br>" +
            "(D) 'flawed' means having imperfections.",
        chinese_explanation: "(C) '巧妙'一词意味着聪明、原创和发明。" +
            "<br><br>" +
            "(A) '无效' 意味着没有达到最大生产力。" +
            "<br><br>" +
            "(B) '不切实际' 意味着不适合使用或行动。" +
            "<br><br>" +
            "(D) '有缺陷' 意味着有瑕疵。"
    },
    {
        id: 9,
        question: "The author's __________ descriptions painted vivid images in the reader's mind, bringing the story's setting to life.",
        chinese_question: "作者 __________ 的描述在读者的脑海中描绘出生动的画面，使故事的背景栩栩如生。",
        answers: [
            { option: "A", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "intricate", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intricate' means having many complexly arranged elements; elaborate and detailed." +
            "<br><br>" +
            "(A) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation; unclear or uncertain." +
            "<br><br>" +
            "(D) 'frivolous' means not having any serious purpose or value; silly or trivial.",
        chinese_explanation: "(B) '复杂的' 意味着有许多复杂排列的元素；复杂而详细。" +
            "<br><br>" +
            "(A) '平凡的' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(C) '模糊的' 意味着可以有多种解释；不清楚或不确定。" +
            "<br><br>" +
            "(D) '轻浮的' 意味着没有任何严肃的目的或价值；愚蠢或琐碎。"
    },
    {
        id: 10,
        question: "The hiker found a __________ spot by the bubbling brook, where he could sit and enjoy the peaceful sounds of nature.",
        chinese_question: "远足者在潺潺的小溪旁找到了一个 __________ 的地方，他可以坐下来享受大自然的宁静声音。",
        answers: [
            { option: "A", answer: "bustling", chinese_answer: "熙熙攘攘的", chinese_romanization: "xīxīrǎngrǎng de" },
            { option: "B", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "C", answer: "hectic", chinese_answer: "忙碌的", chinese_romanization: "mánglù de" },
            { option: "D", answer: "frenetic", chinese_answer: "疯狂的", chinese_romanization: "fēngkuáng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serene' means calm, peaceful, and untroubled; tranquil." +
            "<br><br>" +
            "(A) 'bustling' means full of energetic and noisy activity." +
            "<br><br>" +
            "(C) 'hectic' means characterized by intense activity, confusion, or haste." +
            "<br><br>" +
            "(D) 'frenetic' means fast and energetic in a rather wild and uncontrolled way.",
        chinese_explanation: "(B) '宁静的' 意味着平静、安详、无忧；宁静。" +
            "<br><br>" +
            "(A) '熙熙攘攘的' 意味着充满活力和喧闹的活动。" +
            "<br><br>" +
            "(C) '忙碌的' 意味着充满强烈的活动、混乱或匆忙。" +
            "<br><br>" +
            "(D) '疯狂的' 意味着以相当狂野和失控的方式快速而有活力。"
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
