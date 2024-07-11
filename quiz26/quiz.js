// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ project required skills in engineering, design, and marketing.",
        chinese_question: "这个 __________ 的项目需要工程、设计和市场营销方面的技能。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "multifaceted", chinese_answer: "多方面", chinese_romanization: "duō fāngmiàn" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当", chinese_romanization: "zhíjié liǎo dàng" },
            { option: "D", answer: "unidimensional", chinese_answer: "单一维度", chinese_romanization: "dānyī wéidù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'multifaceted' means having many facets or aspects." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'unidimensional' means having only one dimension.",
        chinese_explanation: "(B) '多方面' 一词意味着有很多方面或方面。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(C) '直截了当' 意味着不复杂且易于完成或理解的。" +
            "<br><br>" +
            "(D) '单一维度' 意味着只有一个维度。"
    },
    {
        id: 2,
        question: "The air was __________ with the scent of freshly baked bread, making everyone in the neighborhood hungry.",
        chinese_question: "空气中弥漫着新鲜烤面包的香气，让附近的每个人都觉得饥饿。",
        answers: [
            { option: "A", answer: "devoid", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "B", answer: "redolent", chinese_answer: "弥漫着", chinese_romanization: "mímàn zhe" },
            { option: "C", answer: "empty", chinese_answer: "空", chinese_romanization: "kōng" },
            { option: "D", answer: "lacking", chinese_answer: "空虚", chinese_romanization: "kōngxū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'redolent' means strongly reminiscent or suggestive of (something)." +
            "<br><br>" +
            "(A) 'devoid' means entirely lacking or free from." +
            "<br><br>" +
            "(C) 'empty' means containing nothing; not filled or occupied." +
            "<br><br>" +
            "(D) 'lacking' means deficient in something needed or usual.",
        chinese_explanation: "(B) '弥漫着' 一词意味着非常地让人想起或暗示着（某事）。" +
            "<br><br>" +
            "(A) '缺乏' 意味着完全缺乏或没有。" +
            "<br><br>" +
            "(C) '空' 意味着什么都没有；没有填满或占用。" +
            "<br><br>" +
            "(D) '空虚' 意味着缺乏需要或通常的东西。"
    },
    {
        id: 3,
        question: "The table collapsed because it was made of __________ materials that couldn't support the weight.",
        chinese_question: "桌子塌了，因为它是用 __________ 的材料制成的，无法承受重量。",
        answers: [
            { option: "A", answer: "sturdy", chinese_answer: "结实", chinese_romanization: "jiēshi" },
            { option: "B", answer: "robust", chinese_answer: "强健", chinese_romanization: "qiángjiàn" },
            { option: "C", answer: "flimsy", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "D", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flimsy' means comparatively light and insubstantial; easily damaged." +
            "<br><br>" +
            "(A) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(B) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(D) 'durable' means able to withstand wear, pressure, or damage; hard-wearing.",
        chinese_explanation: "(C) '脆弱' 一词意味着相对轻且不坚固；容易损坏。" +
            "<br><br>" +
            "(A) '结实' 意味着坚固和牢固地建造。" +
            "<br><br>" +
            "(B) '强健' 意味着强壮和健康；有活力的。" +
            "<br><br>" +
            "(D) '耐用' 意味着能够承受磨损、压力或损坏；耐用的。"
    },
    {
        id: 4,
        question: "The __________ aroma of freshly baked bread filled the kitchen, inviting everyone to come and have a taste.",
        chinese_question: "刚出炉的面包 __________ 的香味充满了厨房，吸引每个人都来尝一尝。",
        answers: [
            { option: "A", answer: "repugnant", chinese_answer: "令人厌恶", chinese_romanization: "lìng rén yànwù" },
            { option: "B", answer: "acrid", chinese_answer: "刺鼻", chinese_romanization: "cìbí" },
            { option: "C", answer: "enticing", chinese_answer: "诱人", chinese_romanization: "yòurén" },
            { option: "D", answer: "bland", chinese_answer: "平淡", chinese_romanization: "píngdàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'enticing' means attractive or tempting." +
            "<br><br>" +
            "(A) 'repugnant' means extremely distasteful or unacceptable." +
            "<br><br>" +
            "(B) 'acrid' means having an irritatingly strong and unpleasant taste or smell." +
            "<br><br>" +
            "(D) 'bland' means lacking strong features or characteristics.",
        chinese_explanation: "(C) '诱人' 一词意味着有吸引力或诱人的。" +
            "<br><br>" +
            "(A) '令人厌恶' 意味着极其令人反感或不可接受的。" +
            "<br><br>" +
            "(B) '刺鼻' 意味着有一种刺激性强烈且令人不快的味道或气味。" +
            "<br><br>" +
            "(D) '平淡' 意味着缺乏鲜明特点或特征。"
    },
    {
        id: 5,
        question: "The project was completed in a __________ manner, leading to inconsistent results and numerous errors.",
        chinese_question: "该项目以 __________ 的方式完成，导致结果不一致和大量错误。",
        answers: [
            { option: "A", answer: "haphazard", chinese_answer: "随意", chinese_romanization: "suíyì" },
            { option: "B", answer: "organized", chinese_answer: "有组织", chinese_romanization: "yǒu zǔzhī" },
            { option: "C", answer: "systematic", chinese_answer: "系统", chinese_romanization: "xìtǒng" },
            { option: "D", answer: "methodical", chinese_answer: "有条不紊", chinese_romanization: "yǒu tiáo bù wěn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haphazard' means lacking any obvious order or plan." +
            "<br><br>" +
            "(B) 'organized' means arranged in a systematic way." +
            "<br><br>" +
            "(C) 'systematic' means done according to a fixed plan or system." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(A) '随意'一词意味着缺乏任何明显的秩序或计划。" +
            "<br><br>" +
            "(B) '有组织' 意味着以系统的方式安排。" +
            "<br><br>" +
            "(C) '系统' 意味着按照固定的计划或系统进行。" +
            "<br><br>" +
            "(D) '有条不紊' 意味着按照系统的或既定的程序进行。"
    },
    {
        id: 6,
        question: "The news from the battlefield was __________, with heavy casualties reported on both sides.",
        chinese_question: "从战场上传来的消息 __________，双方都有大量伤亡报告。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "B", answer: "bright", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
            { option: "C", answer: "grim", chinese_answer: "严峻", chinese_romanization: "yánjùn" },
            { option: "D", answer: "hopeful", chinese_answer: "乐观", chinese_romanization: "lèguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grim' means forbidding or uninviting." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(D) 'hopeful' means feeling or inspiring optimism about a future event.",
        chinese_explanation: "(C) '严峻' 一词意味着令人沮丧的或不令人愉快的。" +
            "<br><br>" +
            "(A) '愉快' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(B) '明亮' 意味着发出或反射大量光；闪耀。" +
            "<br><br>" +
            "(D) '乐观' 意味着对未来事件感到或激发乐观。"
    },
    {
        id: 7,
        question: "The tension in the room was __________, making everyone feel uncomfortable.",
        chinese_question: "房间里的紧张气氛是 __________ 的，让每个人都感到不舒服。",
        answers: [
            { option: "A", answer: "intangible", chinese_answer: "无形", chinese_romanization: "wúxíng" },
            { option: "B", answer: "palpable", chinese_answer: "可感知", chinese_romanization: "kě gǎnzhī" },
            { option: "C", answer: "invisible", chinese_answer: "隐形", chinese_romanization: "yǐnxíng" },
            { option: "D", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'palpable' means so intense as to seem almost tangible; able to be touched or felt." +
            "<br><br>" +
            "(A) 'intangible' means unable to be touched or grasped; not having a physical presence." +
            "<br><br>" +
            "(C) 'invisible' means unable to be seen." +
            "<br><br>" +
            "(D) 'hidden' means kept out of sight; concealed.",
        chinese_explanation: "(B) '可感知' 一词意味着强烈到几乎可以触摸到的；能够被触摸或感觉到的。" +
            "<br><br>" +
            "(A) '无形' 意味着无法触摸或抓住的；没有实体存在的。" +
            "<br><br>" +
            "(C) '隐形' 意味着无法看到的。" +
            "<br><br>" +
            "(D) '隐藏' 意味着隐藏起来；隐藏的。"
    },
    {
        id: 8,
        question: "She was __________ in her decision to pursue a career in medicine, despite the challenges she faced.",
        chinese_question: "尽管面临挑战，她依然 __________ 地决定从事医学事业。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "resolute", chinese_answer: "坚定", chinese_romanization: "jiāndìng" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "indecisive", chinese_answer: "优柔寡断", chinese_romanization: "yōuróu guǎduàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resolute' means admirably purposeful, determined, and unwavering." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'indecisive' means not settling an issue; not having or showing the ability to make decisions quickly and effectively.",
        chinese_explanation: "(B) '坚定' 一词意味着目标明确、决心和不动摇的。" +
            "<br><br>" +
            "(A) '犹豫' 意味着行动或讲话时犹豫不决、不确定或缓慢。" +
            "<br><br>" +
            "(C) '不确定' 意味着不能依靠的；不确定或不明确的。" +
            "<br><br>" +
            "(D) '优柔寡断' 意味着未解决问题的；没有或不表现出快速有效做出决定的能力。"
    },
    {
        id: 9,
        question: "In the distance, they could see the mountains rising __________ beyond the horizon.",
        chinese_question: "在远处，他们可以看到 __________ 地平线上的群山。",
        answers: [
            { option: "A", answer: "here", chinese_answer: "这里", chinese_romanization: "zhèlǐ" },
            { option: "B", answer: "near", chinese_answer: "附近", chinese_romanization: "fùjìn" },
            { option: "C", answer: "yonder", chinese_answer: "那边", chinese_romanization: "nà biān" },
            { option: "D", answer: "close", chinese_answer: "近", chinese_romanization: "jìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'yonder' means at some distance in the direction indicated; over there." +
            "<br><br>" +
            "(A) 'here' means in, at, or to this place or position." +
            "<br><br>" +
            "(B) 'near' means at or to a short distance away; nearby." +
            "<br><br>" +
            "(D) 'close' means a short distance away or apart in space or time.",
        chinese_explanation: "(C) '那边' 一词意味着在指示的方向上某个距离；在那里。" +
            "<br><br>" +
            "(A) '这里' 意味着在这个地方或位置。" +
            "<br><br>" +
            "(B) '附近' 意味着在或到不远的距离；在附近。" +
            "<br><br>" +
            "(D) '近' 意味着在空间或时间上相隔不远。"
    },
    {
        id: 10,
        question: "The witness's __________ testimony was later proven to be false, damaging the credibility of the case.",
        chinese_question: "证人的 __________ 证词后来被证明是假的，损害了案件的可信度。",
        answers: [
            { option: "A", answer: "truthful", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "B", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "mendacious", chinese_answer: "虚假", chinese_romanization: "xūjiǎ" },
            { option: "D", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mendacious' means not telling the truth; lying." +
            "<br><br>" +
            "(A) 'truthful' means telling or expressing the truth; honest." +
            "<br><br>" +
            "(B) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(C) '虚假' 一词意味着不讲真话；撒谎。" +
            "<br><br>" +
            "(A) '真实' 意味着讲述或表达事实；诚实的。" +
            "<br><br>" +
            "(B) '诚实' 意味着没有欺骗和虚伪；真诚的。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有虚伪或欺骗；源自真实感情的。"
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
