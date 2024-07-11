// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ decision to climb the mountain alone without any gear surprised everyone.",
        chinese_question: "他单独徒手攀登这座山的 __________ 决定让每个人都感到惊讶。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "C", answer: "temerarious", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "D", answer: "prudent", chinese_answer: "慎重", chinese_romanization: "shènzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'temerarious' means reckless; rash." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(C) '鲁莽' 一词意味着鲁莽；草率的。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '小心' 意味着确保避免潜在的危险、事故或伤害；谨慎的。" +
            "<br><br>" +
            "(D) '慎重' 意味着以对未来的关心和考虑行事的。"
    },
    {
        id: 2,
        question: "The design of the building was purely __________, focusing on function over form.",
        chinese_question: "这栋建筑的设计纯粹是 __________ 的，注重功能而非形式。",
        answers: [
            { option: "A", answer: "decorative", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "B", answer: "ornamental", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "C", answer: "aesthetic", chinese_answer: "美学", chinese_romanization: "měixué" },
            { option: "D", answer: "utilitarian", chinese_answer: "实用", chinese_romanization: "shíyòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'utilitarian' means designed to be useful or practical rather than attractive." +
            "<br><br>" +
            "(A) 'decorative' means serving to make something look more attractive; ornamental." +
            "<br><br>" +
            "(B) 'ornamental' means serving or intended as an ornament; decorative." +
            "<br><br>" +
            "(C) 'aesthetic' means concerned with beauty or the appreciation of beauty.",
        chinese_explanation: "(D) '实用' 一词意味着设计为有用或实用而不是吸引人的。" +
            "<br><br>" +
            "(A) '装饰' 意味着用于使某物看起来更吸引人的；装饰性的。" +
            "<br><br>" +
            "(B) '装饰' 意味着作为装饰或意图作为装饰的；装饰性的。" +
            "<br><br>" +
            "(C) '美学' 意味着关注美或欣赏美的。"
    },
    {
        id: 3,
        question: "The billionaire's __________ display of wealth included gold-plated cars and diamond-encrusted watches.",
        chinese_question: "那位亿万富翁 __________ 的财富展示包括镀金的汽车和镶钻的手表。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "humble", chinese_answer: "谦卑", chinese_romanization: "qiānbēi" },
            { option: "C", answer: "ostentatious", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
            { option: "D", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '炫耀' 一词意味着以庸俗或自命不凡的方式展示；旨在给人留下深刻印象或吸引注意。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的能力或成就没有过高估计或自负的。" +
            "<br><br>" +
            "(B) '谦卑' 意味着对自己的重要性有或表现出适度或低估的。" +
            "<br><br>" +
            "(D) '简单' 意味着容易理解或完成；没有难度。"
    },
    {
        id: 4,
        question: "The beauty of the sunset was __________, leaving everyone speechless.",
        chinese_question: "日落的美丽是 __________ 的，令所有人都说不出话来。",
        answers: [
            { option: "A", answer: "describable", chinese_answer: "可描述", chinese_romanization: "kě miáoshù" },
            { option: "B", answer: "ineffable", chinese_answer: "难以形容", chinese_romanization: "nányǐ xíngróng" },
            { option: "C", answer: "expressible", chinese_answer: "可表达", chinese_romanization: "kě biǎodá" },
            { option: "D", answer: "explainable", chinese_answer: "可解释", chinese_romanization: "kě jiěshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ineffable' means too great or extreme to be expressed or described in words." +
            "<br><br>" +
            "(A) 'describable' means able to be described." +
            "<br><br>" +
            "(C) 'expressible' means able to be expressed." +
            "<br><br>" +
            "(D) 'explainable' means able to be explained.",
        chinese_explanation: "(B) '难以形容' 一词意味着伟大或极端到无法用言语表达或描述的。" +
            "<br><br>" +
            "(A) '可描述' 意味着能够被描述的。" +
            "<br><br>" +
            "(C) '可表达' 意味着能够被表达的。" +
            "<br><br>" +
            "(D) '可解释' 意味着能够被解释的。"
    },
    {
        id: 5,
        question: "The __________ storage unit was able to hold all of their furniture and still had room for more.",
        chinese_question: "这个 __________ 的储物单元能够容纳他们所有的家具，并且还有更多的空间。",
        answers: [
            { option: "A", answer: "cramped", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "B", answer: "tiny", chinese_answer: "微小", chinese_romanization: "wēixiǎo" },
            { option: "C", answer: "small", chinese_answer: "小", chinese_romanization: "xiǎo" },
            { option: "D", answer: "capacious", chinese_answer: "宽敞", chinese_romanization: "kuānchǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'capacious' means having a lot of space inside; roomy." +
            "<br><br>" +
            "(A) 'cramped' means feeling or causing someone to feel uncomfortably confined or hemmed in by lack of space." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(D) '宽敞' 意味着内部有很多空间；宽敞。" +
            "<br><br>" +
            "(A) '狭窄' 意味着感觉或导致某人因缺乏空间而感到不舒服。" +
            "<br><br>" +
            "(B) '微小' 意味着非常小。" +
            "<br><br>" +
            "(C) '小' 意味着尺寸小于正常或通常的。"
    },
    {
        id: 6,
        question: "The climbers faced a __________ situation when their ropes began to fray halfway up the mountain.",
        chinese_question: "当登山者的绳子在山腰开始磨损时，他们面临 __________ 的局面。",
        answers: [
            { option: "A", answer: "secure", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "B", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "precarious", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
            { option: "D", answer: "firm", chinese_answer: "牢固", chinese_romanization: "láogù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
            "<br><br>" +
            "(A) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(B) 'stable' means not likely to give way or overturn; firmly fixed." +
            "<br><br>" +
            "(D) 'firm' means having a solid, almost unyielding surface or structure.",
        chinese_explanation: "(C) '危险' 一词意味着没有牢固地固定或处于位置；极有可能倒塌或坍塌的危险。" +
            "<br><br>" +
            "(A) '安全' 意味着固定或牢固地固定，以免失去、变松或丢失。" +
            "<br><br>" +
            "(B) '稳定' 意味着不太可能给方式或翻倒；牢固地固定。" +
            "<br><br>" +
            "(D) '牢固' 意味着具有坚固、几乎不屈不挠的表面或结构。"
    },
    {
        id: 7,
        question: "The conversation quickly became __________, causing the listeners to lose interest.",
        chinese_question: "对话很快变得 __________，让听众失去了兴趣。",
        answers: [
            { option: "A", answer: "interesting", chinese_answer: "有趣", chinese_romanization: "yǒuqù" },
            { option: "B", answer: "engaging", chinese_answer: "吸引人", chinese_romanization: "xīyǐnrén" },
            { option: "C", answer: "banal", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "D", answer: "exciting", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'banal' means so lacking in originality as to be obvious and boring." +
            "<br><br>" +
            "(A) 'interesting' means arousing curiosity or interest; holding or catching the attention." +
            "<br><br>" +
            "(B) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(D) 'exciting' means causing great enthusiasm and eagerness.",
        chinese_explanation: "(C) '平庸' 一词意味着缺乏原创性以至于明显和无聊。" +
            "<br><br>" +
            "(A) '有趣' 意味着引起好奇心或兴趣；吸引或抓住注意力。" +
            "<br><br>" +
            "(B) '吸引人' 意味着迷人和有吸引力。" +
            "<br><br>" +
            "(D) '激动' 意味着引起极大的热情和热切。"
    },
    {
        id: 8,
        question: "The review was rather __________, failing to delve into the deeper aspects of the novel.",
        chinese_question: "这篇评论相当 __________，未能深入探讨小说的深层方面。",
        answers: [
            { option: "A", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "B", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "C", answer: "profound", chinese_answer: "深刻", chinese_romanization: "shēnkè" },
            { option: "D", answer: "exhaustive", chinese_answer: "全面", chinese_romanization: "quánmiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(A) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(C) 'profound' means very great or intense." +
            "<br><br>" +
            "(D) 'exhaustive' means examining, including, or considering all elements.",
        chinese_explanation: "(B) '肤浅' 一词意味着存在或发生在表面上。" +
            "<br><br>" +
            "(A) '彻底' 意味着在每一个细节上都是完整的。" +
            "<br><br>" +
            "(C) '深刻' 意味着非常伟大或强烈。" +
            "<br><br>" +
            "(D) '全面' 意味着审查、包括或考虑所有元素。"
    },
    {
        id: 9,
        question: "The child's __________ smile brightened everyone's day at the shelter.",
        chinese_question: "孩子 __________ 的笑容照亮了收容所里的每一天。",
        answers: [
            { option: "A", answer: "sullen", chinese_answer: "阴沉", chinese_romanization: "yīnchén" },
            { option: "B", answer: "radiant", chinese_answer: "灿烂", chinese_romanization: "cànlàn" },
            { option: "C", answer: "grim", chinese_answer: "阴森", chinese_romanization: "yīnsēn" },
            { option: "D", answer: "somber", chinese_answer: "忧郁", chinese_romanization: "yōuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'radiant' means shining or glowing brightly." +
            "<br><br>" +
            "(A) 'sullen' means bad-tempered and sulky." +
            "<br><br>" +
            "(C) 'grim' means very serious or gloomy." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone.",
        chinese_explanation: "(B) '灿烂' 意味着明亮或发光。" +
            "<br><br>" +
            "(A) '阴沉' 意味着脾气不好和闷闷不乐。" +
            "<br><br>" +
            "(C) '阴森' 意味着非常严肃或阴郁。" +
            "<br><br>" +
            "(D) '忧郁' 意味着颜色或音调暗淡。"
    },
    {
        id: 10,
        question: "The ancient artifact was incredibly __________, requiring careful handling to prevent damage.",
        chinese_question: "这件古代文物非常 __________，需要小心处理以防止损坏。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "B", answer: "sturdy", chinese_answer: "结实", chinese_romanization: "jiēshi" },
            { option: "C", answer: "robust", chinese_answer: "强健", chinese_romanization: "qiángjiàn" },
            { option: "D", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(B) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(C) 'robust' means strong and healthy." +
            "<br><br>" +
            "(D) 'durable' means able to withstand wear, pressure, or damage.",
        chinese_explanation: "(A) '脆弱'一词意味着容易破碎或受损。" +
            "<br><br>" +
            "(B) '结实' 意味着坚固且牢固建造。" +
            "<br><br>" +
            "(C) '强健' 意味着强壮和健康。" +
            "<br><br>" +
            "(D) '耐用' 意味着能够承受磨损、压力或损坏。"
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
