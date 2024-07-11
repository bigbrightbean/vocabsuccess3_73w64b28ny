// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "It was a __________ that the more he tried to relax, the more stressed he felt.",
        chinese_question: "这是一个 __________，他越想放松，感觉越紧张。",
        answers: [
            { option: "A", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "B", answer: "paradox", chinese_answer: "悖论", chinese_romanization: "bèilùn" },
            { option: "C", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quedìngxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paradox' means a seemingly absurd or contradictory statement or proposition which when investigated may prove to be well founded or true." +
            "<br><br>" +
            "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(C) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(B) '悖论' 意味着一个看似荒谬或自相矛盾的陈述或命题，经过调查可能被证明是有根据的或真实的。" +
            "<br><br>" +
            "(A) '解决方案' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(C) '事实' 意味着已知或被证明为真的事情。" +
            "<br><br>" +
            "(D) '确定性' 意味着坚定地相信某事是真实的。"
    },
    {
        id: 2,
        question: "The country was in a state of __________ following the sudden resignation of the prime minister, with protests erupting in major cities and political leaders scrambling to restore stability.",
        chinese_question: "总理突然辞职后，国家处于 __________ 状态，主要城市爆发抗议，政治领导人争相恢复稳定。",
        answers: [
            { option: "A", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "B", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "C", answer: "tumult", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tumult' means a loud, confused noise, especially one caused by a large mass of people." +
            "<br><br>" +
            "(A) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(B) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '动荡' 一词意味着响亮、混乱的噪音，特别是由大量人群引起的。" +
            "<br><br>" +
            "(A) '和平' 意味着没有干扰；宁静。" +
            "<br><br>" +
            "(B) '秩序' 意味着根据特定的顺序、模式或方法排列或布置人或物。" +
            "<br><br>" +
            "(D) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情绪。"
    },
    {
        id: 3,
        question: "She had a strong __________ to broccoli, refusing to eat it no matter how it was prepared.",
        chinese_question: "她对西兰花有强烈的 __________，无论怎么烹饪她都拒绝吃。",
        answers: [
            { option: "A", answer: "liking", chinese_answer: "喜爱", chinese_romanization: "xǐ'ài" },
            { option: "B", answer: "preference", chinese_answer: "偏好", chinese_romanization: "piānhào" },
            { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "D", answer: "enjoyment", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(A) 'liking' means a feeling of regard or fondness." +
            "<br><br>" +
            "(B) 'preference' means a greater liking for one alternative over another or others." +
            "<br><br>" +
            "(D) 'enjoyment' means the state or process of taking pleasure in something.",
        chinese_explanation: "(C) '厌恶' 一词意味着强烈的不喜欢或不情愿。" +
            "<br><br>" +
            "(A) '喜爱' 意味着一种尊重或喜爱的感觉。" +
            "<br><br>" +
            "(B) '偏好' 意味着比其他选择更喜欢一个选择。" +
            "<br><br>" +
            "(D) '享受' 意味着在某事中获得的快乐状态或过程。"
    },
    {
        id: 4,
        question: "The plane experienced severe __________ during the flight, causing passengers to feel anxious and uncomfortable.",
        chinese_question: "飞机在飞行过程中经历了严重的 __________，使乘客感到焦虑和不适。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "turbulence", chinese_answer: "湍流", chinese_romanization: "tuānliú" },
            { option: "C", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'turbulence' means violent or unsteady movement of air or water, or of some other fluid." +
            "<br><br>" +
            "(A) 'calm' means the absence of strong emotions; peacefulness." +
            "<br><br>" +
            "(C) 'stability' means the state of being stable." +
            "<br><br>" +
            "(D) 'tranquility' means the quality or state of being tranquil; calm.",
        chinese_explanation: "(B) '湍流' 一词意味着空气、水或其他流体的剧烈或不稳定运动。" +
            "<br><br>" +
            "(A) '平静' 意味着没有强烈的情绪；宁静。" +
            "<br><br>" +
            "(C) '稳定' 意味着稳定的状态。" +
            "<br><br>" +
            "(D) '宁静' 意味着宁静的质量或状态；平静。"
    },
    {
        id: 5,
        question: "The __________ of technology and education has led to new learning opportunities and methods.",
        chinese_question: "科技与教育的 __________ 带来了新的学习机会和方法。",
        answers: [
            { option: "A", answer: "divergence", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "B", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "C", answer: "convergence", chinese_answer: "汇合", chinese_romanization: "huìhé" },
            { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'convergence' means the process or state of converging." +
            "<br><br>" +
            "(A) 'divergence' means the process or state of diverging." +
            "<br><br>" +
            "(B) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(D) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(C) '汇合' 一词意味着汇合的过程或状态。" +
            "<br><br>" +
            "(A) '分歧' 意味着分歧的过程或状态。" +
            "<br><br>" +
            "(B) '分离' 意味着移动或被移动的状态。" +
            "<br><br>" +
            "(D) '冲突' 意味着严重的分歧或争论，通常是长期的。"
    },
    {
        id: 6,
        question: "The article was nothing but a scathing __________ against the new policy, leaving no room for any positive feedback.",
        chinese_question: "这篇文章只是一篇尖刻的 __________，对新政策没有留下任何积极的反馈。",
        answers: [
                { option: "A", answer: "compliment", chinese_answer: "称赞", chinese_romanization: "chēngzàn" },
                { option: "B", answer: "diatribe", chinese_answer: "抨击", chinese_romanization: "pēngjī" },
                { option: "C", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "D", answer: "commendation", chinese_answer: "嘉奖", chinese_romanization: "jiājiǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diatribe' means a forceful and bitter verbal attack against someone or something." +
            "<br><br>" +
            "(A) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(C) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(D) 'commendation' means praise or approval given to someone.",
        chinese_explanation: "(B) '抨击' 意味着对某人或某事进行强烈和尖刻的言语攻击。" +
            "<br><br>" +
            "(A) '称赞' 意味着礼貌地表达赞美或钦佩。" +
            "<br><br>" +
            "(C) '赞扬' 意味着对某人或某物表示赞同或钦佩。" +
            "<br><br>" +
            "(D) '嘉奖' 意味着给予某人的表扬或认可。"
    },
    {
        id: 7,
        question: "The refugees sought __________ in a neighboring country to escape the war and persecution in their homeland.",
        chinese_question: "难民们在邻国寻求 __________，以逃避家乡的战争和迫害。",
        answers: [
            { option: "A", answer: "prison", chinese_answer: "监狱", chinese_romanization: "jiānyù" },
            { option: "B", answer: "asylum", chinese_answer: "庇护", chinese_romanization: "bìhù" },
            { option: "C", answer: "employment", chinese_answer: "就业", chinese_romanization: "jiùyè" },
            { option: "D", answer: "tourism", chinese_answer: "旅游", chinese_romanization: "lǚyóu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'asylum' means the protection granted by a nation to someone who has left their native country as a political refugee." +
            "<br><br>" +
            "(A) 'prison' means a building in which people are legally held as a punishment for a crime they have committed or while awaiting trial." +
            "<br><br>" +
            "(C) 'employment' means the condition of having paid work." +
            "<br><br>" +
            "(D) 'tourism' means the commercial organization and operation of vacations and visits to places of interest.",
        chinese_explanation: "(B) '庇护' 一词意味着一个国家给予政治难民的保护。" +
            "<br><br>" +
            "(A) '监狱' 意味着合法拘留人的建筑，作为对其所犯罪行的惩罚或在等待审判期间。" +
            "<br><br>" +
            "(C) '就业' 意味着拥有有薪工作的状态。" +
            "<br><br>" +
            "(D) '旅游' 意味着假期和参观名胜的商业组织和操作。"
    },
    {
        id: 8,
        question: "The doctor diagnosed the patient as a __________, explaining that his frequent nighttime wanderings were a result of sleepwalking.",
        chinese_question: "医生诊断病人为 __________，解释说他频繁的夜间徘徊是梦游的结果。",
        answers: [
                { option: "A", answer: "somnambulist", chinese_answer: "梦游者", chinese_romanization: "mèngyóuzhě" },
                { option: "B", answer: "insomniac", chinese_answer: "失眠者", chinese_romanization: "shīmiánzhě" },
                { option: "C", answer: "narcoleptic", chinese_answer: "嗜睡者", chinese_romanization: "shìshuìzhě" },
                { option: "D", answer: "night owl", chinese_answer: "夜猫子", chinese_romanization: "yèmāozi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'somnambulist' refers to a person who sleepwalks." +
            "<br><br>" +
            "(B) 'insomniac' describes someone who has difficulty falling or staying asleep." +
            "<br><br>" +
            "(C) 'narcoleptic' refers to someone who suffers from narcolepsy, a condition characterized by an extreme tendency to fall asleep whenever in relaxing surroundings." +
            "<br><br>" +
            "(D) 'night owl' is a term used to describe a person who stays up late at night.",
        chinese_explanation: "(A) '梦游者' 指的是梦游的人。" +
            "<br><br>" +
            "(B) '失眠者' 描述的是难以入睡或保持睡眠的人。" +
            "<br><br>" +
            "(C) '嗜睡者' 指的是患有嗜睡症的人，这种情况的特征是在放松的环境中极度倾向于入睡。" +
            "<br><br>" +
            "(D) '夜猫子' 是用来描述晚睡的人的术语。"
    },
    {
        id: 9,
        question: "Her __________ with the local charity has opened many doors for community service and networking.",
        chinese_question: "她与当地慈善机构的 __________ 为社区服务和建立人脉打开了许多机会。",
        answers: [
            { option: "A", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "affiliation", chinese_answer: "隶属", chinese_romanization: "lìshǔ" },
            { option: "D", answer: "detachment", chinese_answer: "超脱", chinese_romanization: "chāotuō" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'affiliation' means the state or process of affiliating or being affiliated." +
            "<br><br>" +
            "(A) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(B) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(D) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(C) '隶属' 一词意味着隶属或隶属的状态或过程。" +
            "<br><br>" +
            "(A) '分离' 意味着分离或被分离的动作或状态。" +
            "<br><br>" +
            "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(D) '超脱' 意味着客观或超然的状态。"
    },
    {
        id: 10,
        question: "The old man's __________ was evident in his wise decisions and thoughtful advice.",
        chinese_question: "这位老人的 __________ 显现在他的明智决定和深思熟虑的建议中。",
        answers: [
            { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "folly", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
            { option: "C", answer: "sagacity", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
            { option: "D", answer: "foolishness", chinese_answer: "愚笨", chinese_romanization: "yúbèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sagacity' means the quality of being sagacious; wisdom." +
            "<br><br>" +
            "(A) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(B) 'folly' means lack of good sense; foolishness." +
            "<br><br>" +
            "(D) 'foolishness' means lack of good sense or judgment; stupidity.",
        chinese_explanation: "(C) '智慧' 一词意味着智慧的质量；智慧。" +
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(B) '愚蠢' 意味着缺乏良好的判断力；愚蠢。" +
            "<br><br>" +
            "(D) '愚笨' 意味着缺乏良好的判断力；愚蠢。"
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
