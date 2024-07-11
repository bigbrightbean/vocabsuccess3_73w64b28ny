// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To address the issue, the community leaders decided to __________ a new program that would benefit everyone.",
        chinese_question: "为了解决这个问题，社区领导决定 __________ 一个新的项目，让每个人都受益。",
        answers: [
            { option: "A", answer: "terminate", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" },
            { option: "B", answer: "conclude", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "initiate", chinese_answer: "启动", chinese_romanization: "qǐdòng" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'initiate' means to cause a process or action to begin." +
            "<br><br>" +
            "(A) 'terminate' means to bring to an end." +
            "<br><br>" +
            "(B) 'conclude' means to bring something to an end." +
            "<br><br>" +
            "(D) 'delay' means to make someone or something late or slow.",
        chinese_explanation: "(C) '启动' 一词意味着使一个过程或行动开始。" +
            "<br><br>" +
            "(A) '终止' 意味着结束某事。" +
            "<br><br>" +
            "(B) '结束' 意味着结束某事。" +
            "<br><br>" +
            "(D) '延迟' 意味着使某人或某事迟到或缓慢。"
    },
    {
        id: 2,
        question: "To __________ the effects of the accident, the company implemented new safety protocols immediately.",
        chinese_question: "为了 __________ 事故的影响，公司立即实施了新的安全协议。",
        answers: [
            { option: "A", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "mitigate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mitigate' means to make less severe, serious, or painful." +
            "<br><br>" +
            "(A) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(B) '减轻' 一词意味着使某事变得不那么严重、严重或痛苦。" +
            "<br><br>" +
            "(A) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '加强' 意味着变得或使更加剧烈。"
    },
    {
        id: 3,
        question: "After much discussion, the committee members finally __________ on the best course of action.",
        chinese_question: "经过大量讨论，委员会成员最终 __________ 了最佳行动方案。",
        answers: [
            { option: "A", answer: "disagreed", chinese_answer: "不同意", chinese_romanization: "bù tóngyì" },
            { option: "B", answer: "debated", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
            { option: "C", answer: "concurred", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "D", answer: "diverged", chinese_answer: "分歧", chinese_romanization: "fēnqí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'concurred' means to agree." +
            "<br><br>" +
            "(A) 'disagreed' means to have or express a different opinion." +
            "<br><br>" +
            "(B) 'debated' means to argue about a subject, especially in a formal manner." +
            "<br><br>" +
            "(D) 'diverged' means to separate from another route, especially a main one, and go in a different direction.",
        chinese_explanation: "(C) '同意' 一词意味着同意。" +
            "<br><br>" +
            "(A) '不同意' 意味着有或表达不同的意见。" +
            "<br><br>" +
            "(B) '辩论' 意味着就某个主题进行争论，尤其是以正式的方式。" +
            "<br><br>" +
            "(D) '分歧' 意味着与另一条路线分开，尤其是主要路线，并走向不同的方向。"
    },
    {
        id: 4,
        question: "During the meeting, she managed to __________ her enthusiasm for the project, convincing everyone of its potential.",
        chinese_question: "在会议期间，她设法 __________ 她对项目的热情，令人信服其潜力。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "C", answer: "conceal", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "evince", chinese_answer: "表明", chinese_romanization: "biǎomíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'evince' means to show or express clearly." +
            "<br><br>" +
            "(A) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(B) 'suppress' means to forcibly put an end to." +
            "<br><br>" +
            "(C) 'conceal' means to keep something secret or prevent it from being known.",
        chinese_explanation: "(D) '表明' 意思是清晰地展示或表达。" +
            "<br><br>" +
            "(A) '隐藏' 意思是放置或保持在视线之外。" +
            "<br><br>" +
            "(B) '压制' 意思是强行终止。" +
            "<br><br>" +
            "(C) '掩盖' 意思是保守秘密或防止被知道。"
    },
    {
        id: 5,
        question: "The detective was able to __________ the suspect as a tall man with a distinctive tattoo on his left arm.",
        chinese_question: "侦探能够将嫌疑人 __________ 为一个左臂上有独特纹身的高个男子。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "C", answer: "misidentify", chinese_answer: "误认", chinese_romanization: "wùrèn" },
            { option: "D", answer: "characterize", chinese_answer: "描绘", chinese_romanization: "miáohuì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'characterize' means to describe the distinctive nature or features of." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'confuse' means to make something more complex or less easy to understand." +
            "<br><br>" +
            "(C) 'misidentify' means to identify incorrectly.",
        chinese_explanation: "(D) '描绘' 一词意味着描述独特的性质或特征。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '混淆' 意味着使某事更加复杂或不易理解。" +
            "<br><br>" +
            "(C) '误认' 意味着错误地识别。"
    },
    {
        id: 6,
        question: "He tried to __________ his friends into believing his tall tales, but they saw through his tricks.",
        chinese_question: "他试图 __________ 朋友们相信他的荒诞故事，但他们看穿了他的诡计。",
        answers: [
            { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "B", answer: "enlighten", chinese_answer: "启发", chinese_romanization: "qǐfā" },
            { option: "C", answer: "inform", chinese_answer: "通知", chinese_romanization: "tōngzhī" },
            { option: "D", answer: "bamboozle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bamboozle' means to fool or cheat someone." +
            "<br><br>" +
            "(A) 'clarify' means to make a statement or situation less confused and more comprehensible." +
            "<br><br>" +
            "(B) 'enlighten' means to give someone greater knowledge and understanding about a subject." +
            "<br><br>" +
            "(C) 'inform' means to give someone facts or information.",
        chinese_explanation: "(D) '欺骗' 一词意味着愚弄或欺骗某人。" +
            "<br><br>" +
            "(A) '澄清' 意味着使声明或情况不那么混乱和更易理解。" +
            "<br><br>" +
            "(B) '启发' 意味着给某人提供更大的知识和理解。" +
            "<br><br>" +
            "(C) '通知' 意味着给某人提供事实或信息。"
    },
    {
        id: 7,
        question: "She __________ her success to hard work and perseverance, believing these qualities were crucial to achieving her goals.",
        chinese_question: "她将自己的成功 __________ 于努力工作和毅力，相信这些品质对实现目标至关重要。",
        answers: [
            { option: "A", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "dismisses", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "attributes", chinese_answer: "归因", chinese_romanization: "guīyīn" },
            { option: "D", answer: "doubts", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'attributes' means to regard something as being caused by." +
            "<br><br>" +
            "(A) 'ignores' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'dismisses' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'doubts' means to feel uncertain about.",
        chinese_explanation: "(C) '归因' 一词意味着认为某事是由...引起的。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '否认' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(D) '怀疑' 意味着感到不确定。"
    },
    {
        id: 8,
        question: "His rude remarks were intended to __________ his opponent and provoke a reaction during the debate.",
        chinese_question: "他粗鲁的言论旨在 __________ 他的对手并在辩论中激起反应。",
        answers: [
            { option: "A", answer: "pacify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "B", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "C", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "D", answer: "antagonize", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'antagonize' means to cause someone to become hostile." +
            "<br><br>" +
            "(A) 'pacify' means to quell the anger, agitation, or excitement of." +
            "<br><br>" +
            "(B) 'soothe' means to gently calm a person or their feelings." +
            "<br><br>" +
            "(C) 'please' means to cause someone to feel happy and satisfied.",
        chinese_explanation: "(D) '激怒' 一词意味着使某人变得敌对。" +
            "<br><br>" +
            "(A) '安抚' 意味着平息愤怒、激动或兴奋。" +
            "<br><br>" +
            "(B) '抚慰' 意味着轻柔地安抚某人或他们的感情。" +
            "<br><br>" +
            "(C) '取悦' 意味着使某人感到高兴和满意。"
    },
    {
        id: 9,
        question: "The budget committee will __________ funds to various departments based on their projected needs for the upcoming year.",
        chinese_question: "预算委员会将根据各部门对来年的预期需求 __________ 资金。",
        answers: [
            { option: "A", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "B", answer: "squander", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "C", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "D", answer: "collect", chinese_answer: "收集", chinese_romanization: "shōují" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allocate' means to distribute resources or duties for a particular purpose." +
            "<br><br>" +
            "(A) 'withhold' means to refuse to give something that is due or desired by another." +
            "<br><br>" +
            "(B) 'squander' means to waste something in a reckless and foolish manner." +
            "<br><br>" +
            "(D) 'collect' means to bring or gather together items, typically when scattered or widespread.",
        chinese_explanation: "(C) '分配' 一词意味着为特定目的分配资源或职责。" +
            "<br><br>" +
            "(A) '扣留' 意味着拒绝给予某人应得或期望的东西。" +
            "<br><br>" +
            "(B) '浪费' 意味着以鲁莽和愚蠢的方式浪费某物。" +
            "<br><br>" +
            "(D) '收集' 意味着将分散或广泛分布的物品收集在一起。"
    },
    {
        id: 10,
        question: "The whistleblower __________ that the company had been illegally dumping toxic waste into the river for years.",
        chinese_question: "告密者 __________ 该公司多年来一直非法将有毒废物排入河中。",
        answers: [
            { option: "A", answer: "refuted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "B", answer: "alleged", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "C", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "proved", chinese_answer: "证明", chinese_romanization: "zhèngmíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'alleged' means to claim or assert that someone has done something illegal or wrong, typically without proof." +
            "<br><br>" +
            "(A) 'refuted' means to prove a statement or theory to be wrong or false." +
            "<br><br>" +
            "(C) 'denied' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'proved' means to demonstrate the truth or existence of something by evidence or argument.",
        chinese_explanation: "(B) '指控' 一词意味着声称或断言某人做了非法或错误的事情，通常没有证据。" +
            "<br><br>" +
            "(A) '反驳' 意味着证明某一陈述或理论是错误或虚假的。" +
            "<br><br>" +
            "(C) '否认' 意味着声明一个人拒绝承认某事的真实性或存在。" +
            "<br><br>" +
            "(D) '证明' 意味着通过证据或论证证明某事的真实性或存在。"
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
