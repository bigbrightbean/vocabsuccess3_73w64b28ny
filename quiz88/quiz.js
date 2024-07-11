// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The witness's testimony helped to __________ the defendant's alibi, providing additional evidence that he was not at the crime scene.",
        chinese_question: "证人的证词有助于 __________ 被告的不在场证明，提供了额外的证据证明他不在犯罪现场。",
        answers: [
            { option: "A", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "B", answer: "disprove", chinese_answer: "驳斥", chinese_romanization: "bóchì" },
            { option: "C", answer: "corroborate", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
            { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'contradict' means deny the truth of (a statement), especially by asserting the opposite." +
            "<br><br>" +
            "(B) 'disprove' means prove that (something) is false." +
            "<br><br>" +
            "(C) 'corroborate' means confirm or give support to (a statement, theory, or finding)." +
            "<br><br>" +
            "(D) 'weaken' means make or become weaker in power, resolve, or physical strength.",
        chinese_explanation: "(A) '反驳' 意味着否认（陈述）的真实性，尤其是通过断言相反。" +
            "<br><br>" +
            "(B) '驳斥' 意味着证明（某事）是虚假的。" +
            "<br><br>" +
            "(C) '证实' 意味着确认或支持（陈述、理论或发现）。" +
            "<br><br>" +
            "(D) '削弱' 意味着在力量、决心或体力上变得或变弱。"
    },
    {
        id: 2,
        question: "In response to the unfair labor practices, the workers decided to __________ the company until their demands were met.",
        chinese_question: "为了应对不公平的劳动惯例，工人们决定 __________ 该公司，直到他们的要求得到满足。",
        answers: [
            { option: "A", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "boycott", chinese_answer: "抵制", chinese_romanization: "dǐzhì" },
            { option: "D", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'boycott' means to withdraw from commercial or social relations with a country, organization, or person as a punishment or protest." +
            "<br><br>" +
            "(A) 'promote' means to further the progress of something." +
            "<br><br>" +
            "(B) 'support' means to give assistance to." +
            "<br><br>" +
            "(D) 'endorse' means to declare one's public approval or support of.",
        chinese_explanation: "(C) '抵制' 意味着作为惩罚或抗议而退出与一个国家、组织或个人的商业或社会关系。" +
            "<br><br>" +
            "(A) '促进' 意味着促进某事的进展。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(D) '认可' 意味着公开表示赞同或支持。"
    },
    {
        id: 3,
        question: "Without any hard evidence, the scientist could only __________ about the causes of the phenomenon.",
        chinese_question: "没有任何确凿的证据，科学家只能 __________ 现象的原因。",
        answers: [
            { option: "A", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "B", answer: "prove", chinese_answer: "证明", chinese_romanization: "zhèngmíng" },
            { option: "C", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "conjecture", chinese_answer: "推测", chinese_romanization: "tuīcè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'conjecture' means form an opinion or supposition about (something) on the basis of incomplete information." +
            "<br><br>" +
            "(A) 'confirm' means establish the truth or correctness of (something previously believed, suspected, or feared to be the case)." +
            "<br><br>" +
            "(B) 'prove' means demonstrate the truth or existence of (something) by evidence or argument." +
            "<br><br>" +
            "(C) 'refute' means prove (a statement or theory) to be wrong or false; disprove.",
        chinese_explanation: "(D) '推测' 意味着根据不完整的信息对（某事）形成意见或假设。" +
            "<br><br>" +
            "(A) '确认' 意味着确认（之前相信、怀疑或担心的事情）的真实性或正确性。" +
            "<br><br>" +
            "(B) '证明' 意味着通过证据或论据证明（某事）的真实性或存在。" +
            "<br><br>" +
            "(C) '反驳' 意味着证明（陈述或理论）是错误或虚假的；反驳。"
    },
    {
        id: 4,
        question: "The project will __________ various aspects of environmental conservation, including recycling, reforestation, and water management.",
        chinese_question: "该项目将 __________ 环保的各个方面，包括回收、重新造林和水资源管理。",
        answers: [
            { option: "A", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "encompass", chinese_answer: "包含", chinese_romanization: "bāohán" },
            { option: "D", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'encompass' means surround and have or hold within." +
            "<br><br>" +
            "(A) 'exclude' means deny (someone) access to a place, group, or privilege." +
            "<br><br>" +
            "(B) 'simplify' means make (something) simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'separate' means cause to move or be apart.",
        chinese_explanation: "(C) '包含' 意味着围绕并拥有或持有在内。" +
            "<br><br>" +
            "(A) '排除' 意味着拒绝（某人）进入一个地方、团体或特权。" +
            "<br><br>" +
            "(B) '简化' 意味着使（某事）更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '分离' 意味着使移动或分开。"
    },
    {
        id: 5,
        question: "The crew members planned to __________ against the captain due to his harsh treatment and unreasonable demands.",
        chinese_question: "船员们计划 __________ 船长，因为他对待他们的方式太过严厉，要求也不合理。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "obey", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "D", answer: "mutiny", chinese_answer: "叛变", chinese_romanization: "pànbiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mutiny' means refuse to obey the orders of a person in authority." +
            "<br><br>" +
            "(A) 'support' means to give assistance to." +
            "<br><br>" +
            "(B) 'obey' means comply with the command, direction, or request of (a person or a law); submit to the authority of." +
            "<br><br>" +
            "(C) 'assist' means help (someone), typically by doing a share of the work.",
        chinese_explanation: "(D) '叛变' 意味着拒绝服从有权威的人命令。" +
            "<br><br>" +
            "(A) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(B) '服从' 意味着遵守（人的命令、指示或要求）；服从权威。" +
            "<br><br>" +
            "(C) '协助' 意味着帮助（某人），通常是通过分担工作。"
    },
    {
        id: 6,
        question: "His desire to help others __________ him to become a doctor and work in underserved communities.",
        chinese_question: "他帮助他人的愿望 __________ 他成为一名医生并在服务不足的社区工作。",
        answers: [
            { option: "A", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "impelled", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
            { option: "C", answer: "prevented", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "D", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impelled' means drive, force, or urge (someone) to do something." +
            "<br><br>" +
            "(A) 'hindered' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'prevented' means keep (something) from happening or arising." +
            "<br><br>" +
            "(D) 'discouraged' means cause (someone) to lose confidence or enthusiasm.",
        chinese_explanation: "(B) '推动' 一词意味着驱使、强迫或敦促（某人）做某事。" +
            "<br><br>" +
            "(A) '阻碍' 意味着为（某人或某物）制造困难，导致延迟或障碍。" +
            "<br><br>" +
            "(C) '阻止' 意味着阻止（某事）发生或出现。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使（某人）失去信心或热情。"
    },
    {
        id: 7,
        question: "The scientist __________ that the unusual weather patterns were a result of climate change, but more data was needed to confirm this.",
        chinese_question: "科学家 __________ 不寻常的天气模式是气候变化的结果，但需要更多数据来确认这一点。",
        answers: [
            { option: "A", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "theorized", chinese_answer: "理论化", chinese_romanization: "lǐlùn huà" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "refuted", chinese_answer: "驳斥", chinese_romanization: "bóchì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'theorized' means form a theory or set of theories about something." +
            "<br><br>" +
            "(A) 'doubted' means feel uncertain about." +
            "<br><br>" +
            "(C) 'ignored' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'refuted' means prove (a statement or theory) to be wrong or false; disprove.",
        chinese_explanation: "(B) '理论化' 一词意味着对某事形成理论或一组理论。" +
            "<br><br>" +
            "(A) '怀疑' 意味着感到不确定。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '驳斥' 意味着证明（陈述或理论）是错误或虚假的；反驳。"
    },
    {
        id: 8,
        question: "The software engineer worked to __________ the application's performance, making it faster and more efficient.",
        chinese_question: "软件工程师努力 __________ 应用程序的性能，使其运行更快、更高效。",
        answers: [
            { option: "A", answer: "degrade", chinese_answer: "降低", chinese_romanization: "jiàngdī" },
            { option: "B", answer: "optimize", chinese_answer: "优化", chinese_romanization: "yōuhuà" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'optimize' means make the best or most effective use of (a situation, opportunity, or resource)." +
            "<br><br>" +
            "(A) 'degrade' means treat or regard (someone) with contempt or disrespect." +
            "<br><br>" +
            "(C) 'complicate' means make (something) more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction.",
        chinese_explanation: "(B) '优化' 意味着充分利用（情况、机会或资源）。" +
            "<br><br>" +
            "(A) '降低' 意味着以轻蔑或不尊重的态度对待或看待（某人）。" +
            "<br><br>" +
            "(C) '复杂化' 意味着通过使其更复杂来使（某事）更加困难或困惑。" +
            "<br><br>" +
            "(D) '阻碍' 意味着给（某人或某事）制造困难，导致延误或阻碍。"
    },
    {
        id: 9,
        question: "The teacher’s passionate lecture served to __________ her students’ interest in the subject, motivating them to explore further.",
        chinese_question: "老师充满激情的讲座 __________ 了学生们对这门课的兴趣，激励他们进一步探索。",
        answers: [
            { option: "A", answer: "extinguish", chinese_answer: "熄灭", chinese_romanization: "xīmiè" },
            { option: "B", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "C", answer: "kindle", chinese_answer: "激发", chinese_romanization: "jīfā" },
            { option: "D", answer: "dampen", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kindle' means arouse or inspire (an emotion or feeling)." +
            "<br><br>" +
            "(A) 'extinguish' means cause (a fire or light) to cease to burn or shine." +
            "<br><br>" +
            "(B) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(D) 'dampen' means make less strong or intense.",
        chinese_explanation: "(C) '激发' 意味着唤起或激发（情感或感觉）。" +
            "<br><br>" +
            "(A) '熄灭' 意味着使（火或光）停止燃烧或发光。" +
            "<br><br>" +
            "(B) '抑制' 意味着强行结束。" +
            "<br><br>" +
            "(D) '减弱' 意味着使强度或强度减弱。"
    },
    {
        id: 10,
        question: "The constant noise from the construction site began to __________ the residents, disrupting their peace and quiet.",
        chinese_question: "施工现场持续的噪音开始 __________ 居民，打扰了他们的宁静。",
        answers: [
            { option: "A", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "D", answer: "vex", chinese_answer: "恼怒", chinese_romanization: "nǎonù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vex' means make (someone) feel annoyed, frustrated, or worried, especially with trivial matters." +
            "<br><br>" +
            "(A) 'soothe' means gently calm (a person or their feelings)." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other emotions." +
            "<br><br>" +
            "(C) 'comfort' means ease the grief or distress of; console.",
        chinese_explanation: "(D) '恼怒' 意味着使（某人）感到恼火、沮丧或担忧，尤其是琐事。" +
            "<br><br>" +
            "(A) '安抚' 意味着温和地使（人或其情感）平静。" +
            "<br><br>" +
            "(B) '平静' 意味着不表现出或感到紧张、愤怒或其他情绪。" +
            "<br><br>" +
            "(C) '安慰' 意味着减轻悲伤或痛苦；安慰。"
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
