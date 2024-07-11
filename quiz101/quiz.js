// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She decided to __________ her inheritance after her grandfather passed away.",
        chinese_question: "在她的祖父去世后，她决定 __________ 她的遗产。",
        answers: [
            { option: "A", answer: "claim", chinese_answer: "声称", chinese_romanization: "shēngchēng" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'claim' means to state or assert that something is the case, typically without providing evidence or proof." +
            "<br><br>" +
            "(B) 'reject' means to refuse to accept, consider, or use." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(A) '声称' 意味着陈述或断言某事是事实，通常不提供证据或证明。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝接受、考虑或使用。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 2,
        question: "In a display of sheer dominance, the team managed to __________ their rivals, leaving no doubt about their superiority.",
        chinese_question: "在一场绝对优势的比赛中，这支球队设法 __________ 了他们的对手，毫无疑问地展示了他们的优越性。",
        answers: [
            { option: "A", answer: "lose to", chinese_answer: "输给", chinese_romanization: "shū gěi" },
            { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "C", answer: "befriend", chinese_answer: "与……交朋友", chinese_romanization: "yǔ... jiāo péngyǒu" },
            { option: "D", answer: "trounce", chinese_answer: "击败", chinese_romanization: "jíbài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'trounce' means to defeat heavily in a contest." +
            "<br><br>" +
            "(A) 'lose to' means to be defeated by someone." +
            "<br><br>" +
            "(B) 'assist' means to help someone typically by doing a share of the work." +
            "<br><br>" +
            "(C) 'befriend' means to act as a friend to someone.",
        chinese_explanation: "(D) '击败' 意思是在比赛中重创对手。" +
            "<br><br>" +
            "(A) '输给' 意思是被某人击败。" +
            "<br><br>" +
            "(B) '帮助' 意思是通过分担工作来帮助某人。" +
            "<br><br>" +
            "(C) '与……交朋友' 意思是与某人交朋友。"
    },
    {
        id: 3,
        question: "Based on his tone of voice, she could __________ that he was not happy with the decision.",
        chinese_question: "根据他的语气，她可以__________他对这个决定不满意。",
        answers: [
            { option: "A", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "infer", chinese_answer: "推断", chinese_romanization: "tuīduàn" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infer' means to deduce or conclude information from evidence and reasoning rather than from explicit statements." +
            "<br><br>" +
            "(A) 'guess' means to estimate or suppose without sufficient information to be sure of being correct." +
            "<br><br>" +
            "(B) 'deny' means to state that one refuses to admit the truth or existence of something." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(C) '推断' 意味着从证据和推理中推测或得出信息，而不是从明确的陈述中得出。" +
            "<br><br>" +
            "(A) '猜测' 意味着在没有足够信息确保正确的情况下估计或假设。" +
            "<br><br>" +
            "(B) '否认' 意味着声明拒绝承认某事的真实性或存在。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 4,
        question: "It's hard to __________ how much time the project will take.",
        chinese_question: "很难 __________ 项目需要多长时间。",
        answers: [
            { option: "A", answer: "estimate", chinese_answer: "估计", chinese_romanization: "gūjì" },
            { option: "B", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
            { option: "C", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "ignore", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'estimate' metaphorically means to make an educated guess." +
            "<br><br>" +
            "(B) 'guarantee' means to provide a formal assurance or promise." +
            "<br><br>" +
            "(C) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '估计' 比喻进行有根据的猜测。" +
            "<br><br>" +
            "(B) '保证' 意味着提供正式保证或承诺。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '无视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The company decided to __________ several positions to cut costs.",
        chinese_question: "公司决定__________几个职位以减少成本。",
        answers: [
            { option: "A", answer: "create", chinese_answer: "创建", chinese_romanization: "chuàngjiàn" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
            { option: "D", answer: "add", chinese_answer: "添加", chinese_romanization: "tiānjiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'eliminate' means to completely remove or get rid of something." +
            "<br><br>" +
            "(A) 'create' means to bring something into existence." +
            "<br><br>" +
            "(B) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(D) 'add' means to join something to something else so as to increase the size, number, or amount.",
        chinese_explanation: "(C) '消除'一词意味着完全移除或摆脱某物。" +
            "<br><br>" +
            "(A) '创建' 意味着将某物带入存在。" +
            "<br><br>" +
            "(B) '增加' 意味着在大小、数量或程度上变得更大。" +
            "<br><br>" +
            "(D) '添加' 意味着将某物加入另一个物体，以增加其大小、数量或数量。"
    },
    {
        id: 6,
        question: "He tends to __________ people's reactions carefully to gauge their true feelings.",
        chinese_question: "他倾向于仔细__________人们的反应以判断他们的真实感受。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "D", answer: "disturb", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'observe' means to notice or perceive something and register it as being significant. Figuratively, it can mean to watch attentively." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(B) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'disturb' means to interfere with the normal arrangement or functioning of something.",
        chinese_explanation: "(C) '观察'一词意味着注意到或感知某事并将其注册为重要的。比喻地，它可以表示专注地观看。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(B) '使困惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '打扰' 意味着干扰某物的正常安排或功能。"
    },
    {
        id: 7,
        question: "He decided to __________ from the company and join their competitors due to disagreements with management.",
        chinese_question: "由于与管理层意见不合，他决定__________公司，加入竞争对手。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "defect", chinese_answer: "背叛", chinese_romanization: "bèipàn" },
            { option: "C", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "D", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'defect' means an imperfection or fault. Figuratively, it can mean to abandon a position or association, often to join an opposing group." +
            "<br><br>" +
            "(A) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'improve' means to make or become better." +
            "<br><br>" +
            "(D) 'strengthen' means to make or become stronger.",
        chinese_explanation: "(B) '背叛'一词意味着不完美或故障。比喻地，它可以表示放弃某个职位或关系，通常是加入对立的一方。" +
            "<br><br>" +
            "(A) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '改善' 意味着使变得更好。" +
            "<br><br>" +
            "(D) '加强' 意味着使变得更强。"
    },
    {
        id: 8,
        question: "He eventually __________ to the temptation of eating the entire cake.",
        chinese_question: "最终，他 __________ 了吃掉整个蛋糕的诱惑。",
        answers: [
            { option: "A", answer: "succumbed", chinese_answer: "屈服", chinese_romanization: "qūfú" },
            { option: "B", answer: "abstained", chinese_answer: "节制", chinese_romanization: "jiézhì" },
            { option: "C", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "D", answer: "conquered", chinese_answer: "征服", chinese_romanization: "zhēngfú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'succumbed' metaphorically means to yield to a temptation or desire." + 
            "<br><br>" + 
            "(B) 'abstained' means to restrain oneself from doing or enjoying something." + 
            "<br><br>" + 
            "(C) 'avoided' means to keep away from or stop oneself from doing (something)." + 
            "<br><br>" + 
            "(D) 'conquered' means to successfully overcome (a problem or weakness).",
        chinese_explanation: "(A) '屈服' 比喻屈从于诱惑或欲望。" + 
            "<br><br>" + 
            "(B) '节制' 意味着克制自己不做或享受某事。" + 
            "<br><br>" + 
            "(C) '避免' 意味着远离或阻止自己做（某事）。" + 
            "<br><br>" + 
            "(D) '征服' 意味着成功地克服（问题或弱点）。"
    },
    {
        id: 9,
        question: "The two parties agreed to let a neutral third party __________ their dispute.",
        chinese_question: "双方同意让中立的第三方来 __________ 他们的争端。",
        answers: [
            { option: "A", answer: "arbitrate", chinese_answer: "仲裁", chinese_romanization: "zhòngcái" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arbitrate' means to reach an authoritative judgment or settlement." + 
            "<br><br>" + 
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." + 
            "<br><br>" + 
            "(C) 'escalate' means increase rapidly." + 
            "<br><br>" + 
            "(D) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(A) '仲裁' 意味着达成权威性的判决或解决方案。" + 
            "<br><br>" + 
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" + 
            "<br><br>" + 
            "(C) '升级' 意味着迅速增加。" + 
            "<br><br>" + 
            "(D) '解散' 意味着命令或允许离开；送走。"
    },
    {
        id: 10,
        question: "Her love for him could __________ any obstacle, no matter how great.",
        chinese_question: "她对他的爱可以 __________ 任何障碍，无论多么大。",
        answers: [
            { option: "A", answer: "weaken", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "B", answer: "endure", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "C", answer: "falter", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'endure' metaphorically means to continue or last despite adversity or difficulty." +
            "<br><br>" +
            "(A) 'weaken' means make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(C) 'falter' means start to lose strength or momentum." +
            "<br><br>" +
            "(D) 'diminish' means make or become less.",
        chinese_explanation: "(B) '持续' 比喻尽管遇到逆境或困难，但仍继续或持久。" +
            "<br><br>" +
            "(A) '减弱' 意味着在力量、决心或体力上变弱。" +
            "<br><br>" +
            "(C) '衰退' 意味着开始失去力量或势头。" +
            "<br><br>" +
            "(D) '减少' 意味着使或变得更少。"
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
