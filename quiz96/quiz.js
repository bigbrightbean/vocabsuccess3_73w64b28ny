// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To __________ his past mistakes, he volunteered at the local shelter every weekend, hoping to make amends.",
        chinese_question: "为了 __________ 他过去的错误，他每个周末都在当地的庇护所做志愿者，希望能弥补过错。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "repeat", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "C", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "expiate", chinese_answer: "赎罪", chinese_romanization: "shúzuì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'expiate' means to make amends or reparation for guilt or wrongdoing." +
            "<br><br>" +
            "(A) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(B) 'repeat' means to say again something one has already said." +
            "<br><br>" +
            "(C) 'deny' means to state that one refuses to admit the truth or existence of.",
        chinese_explanation: "(D) '赎罪' 意思是为罪过或错误进行弥补或赔偿。" +
            "<br><br>" +
            "(A) '隐藏' 意思是放置或保持在视线之外。" +
            "<br><br>" +
            "(B) '重复' 意思是再次说已经说过的话。" +
            "<br><br>" +
            "(C) '否认' 意思是表示拒绝承认事实或存在。"
    },
    {
        id: 2,
        question: "The nostalgic music served to __________ memories of his childhood, bringing both joy and sadness.",
        chinese_question: "怀旧的音乐唤起了他童年的记忆，带来了欢乐和悲伤。",
        answers: [
            { option: "A", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "B", answer: "evoke", chinese_answer: "唤起", chinese_romanization: "huànqǐ" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evoke' means bring or recall to the conscious mind." +
            "<br><br>" +
            "(A) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'forget' means fail to remember.",
        chinese_explanation: "(B) '唤起' 一词意味着带来或唤起到意识的记忆。" +
            "<br><br>" +
            "(A) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 3,
        question: "To __________ a potential disaster, the pilot quickly changed the plane's course.",
        chinese_question: "为了 __________ 潜在的灾难，飞行员迅速改变了飞机的航线。",
        answers: [
            { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "B", answer: "cause", chinese_answer: "引起", chinese_romanization: "yǐnqǐ" },
            { option: "C", answer: "avert", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "D", answer: "ensure", chinese_answer: "确保", chinese_romanization: "quèbǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'avert' means turn away (one's eyes or thoughts) or prevent or ward off (an undesirable occurrence)." +
            "<br><br>" +
            "(A) 'invite' means make a polite, formal, or friendly request to (someone) to go somewhere or to do something." +
            "<br><br>" +
            "(B) 'cause' means make (something, typically something bad) happen." +
            "<br><br>" +
            "(D) 'ensure' means make certain that (something) shall occur or be the case.",
        chinese_explanation: "(C) '避免' 一词意味着转移（视线或思维）或防止或阻止（不良事件的发生）。" +
            "<br><br>" +
            "(A) '邀请' 意味着礼貌、正式或友好地请求（某人）去某个地方或做某事。" +
            "<br><br>" +
            "(B) '引起' 意味着使（通常是坏事）发生。" +
            "<br><br>" +
            "(D) '确保' 意味着确保（某事）发生或成为事实。"
    },
    {
        id: 4,
        question: "The defendant plans to __________ the court's decision, seeking a new trial.",
        chinese_question: "被告计划 __________ 法院的决定，寻求新的审判。",
        answers: [
            { option: "A", answer: "comply", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "B", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "appeal", chinese_answer: "上诉", chinese_romanization: "shàngsù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'appeal' means make a serious or urgent request, typically to the public." +
            "<br><br>" +
            "(A) 'comply' means act in accordance with a wish or command." +
            "<br><br>" +
            "(B) 'accept' means consent to receive (a thing offered)." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(D) '上诉' 一词意味着提出严肃或紧急的请求，通常是向公众提出。" +
            "<br><br>" +
            "(A) '遵守' 意味着按照愿望或命令行事。" +
            "<br><br>" +
            "(B) '接受' 意味着同意接收（提供的东西）。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意无视。"
    },
    {
        id: 5,
        question: "He tried to __________ himself of every opportunity to improve his skills, taking all the classes he could.",
        chinese_question: "他试图 __________ 自己的每一个机会来提高技能，参加了所有能参加的课程。",
        answers: [
            { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "avail", chinese_answer: "利用", chinese_romanization: "lìyòng" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'avail' means use or take advantage of (an opportunity or available resource)." +
            "<br><br>" +
            "(A) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(C) '利用' 一词意味着利用（机会或可用资源）。" +
            "<br><br>" +
            "(A) '阻碍' 意味着给（某人或某事）制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '拒绝' 意味着驳回为不充分、不合格或有缺陷。"
    },
    {
        id: 6,
        question: "The violent storm __________ the coast, causing significant damage to homes and infrastructure.",
        chinese_question: "暴风雨 __________ 海岸，对房屋和基础设施造成了重大破坏。",
        answers: [
            { option: "A", answer: "missed", chinese_answer: "错过了", chinese_romanization: "cuòguòle" },
            { option: "B", answer: "battered", chinese_answer: "猛烈袭击了", chinese_romanization: "měngliè xíjīle" },
            { option: "C", answer: "avoided", chinese_answer: "避开了", chinese_romanization: "bìkāile" },
            { option: "D", answer: "protected", chinese_answer: "保护了", chinese_romanization: "bǎohùle" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'battered' means strike repeatedly with hard blows." +
            "<br><br>" +
            "(A) 'missed' means fail to hit, reach, or come into contact with (something aimed at)." +
            "<br><br>" +
            "(C) 'avoided' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(D) 'protected' means keep safe from harm or injury.",
        chinese_explanation: "(B) '猛烈袭击了' 一词意味着反复猛烈打击。" +
            "<br><br>" +
            "(A) '错过了' 意味着未能击中、到达或接触（瞄准的目标）。" +
            "<br><br>" +
            "(C) '避开了' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(D) '保护了' 意味着使免受伤害或伤害。"
    },
    {
        id: 7,
        question: "The rude comment was meant to __________ him, but he remained calm and composed.",
        chinese_question: "那句粗鲁的话是为了 __________ 他，但他保持了冷静和镇定。",
        answers: [
            { option: "A", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "demean", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'demean' means cause a severe loss in the dignity of and respect for (someone or something)." +
            "<br><br>" +
            "(A) 'uplift' means raise the level of; improve." +
            "<br><br>" +
            "(B) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(D) 'praise' means express warm approval or admiration of.",
        chinese_explanation: "(C) '贬低' 一词意味着导致尊严和尊重的严重丧失（某人或某物）。" +
            "<br><br>" +
            "(A) '提升' 意味着提高水平；改善。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给予（某人）支持、信心或希望。" +
            "<br><br>" +
            "(D) '赞扬' 意味着表示热情的认可或钦佩。"
    },
    {
        id: 8,
        question: "The witness was asked to __________ that she saw the suspect at the scene of the crime.",
        chinese_question: "证人被要求 __________ 她在犯罪现场看到嫌疑人。",
        answers: [
            { option: "A", answer: "affirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'affirm' means state as a fact; assert strongly and publicly." +
            "<br><br>" +
            "(B) 'deny' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(C) 'question' means ask questions of (someone), especially in an official context." +
            "<br><br>" +
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(A) '确认' 一词意味着作为事实陈述；强烈而公开地断言。" +
            "<br><br>" +
            "(B) '否认' 意味着声明拒绝承认的真相或存在。" +
            "<br><br>" +
            "(C) '质疑' 意味着对（某人）提问，特别是在官方环境中。" +
            "<br><br>" +
            "(D) '拒绝' 意味着驳回为不充分、不合格或有缺陷。"
    },
    {
        id: 9,
        question: "The government launched a campaign to __________ all traces of the invasive species from the local ecosystem.",
        chinese_question: "政府发起了一项运动，旨在从当地生态系统中 __________ 所有入侵物种的痕迹。",
        answers: [
            { option: "A", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
            { option: "B", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "C", answer: "enhance", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "D", answer: "eradicate", chinese_answer: "根除", chinese_romanization: "gēnchú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'eradicate' means destroy completely; put an end to." +
            "<br><br>" +
            "(A) 'nurture' means care for and encourage the growth or development of." +
            "<br><br>" +
            "(B) 'preserve' means maintain (something) in its original or existing state." +
            "<br><br>" +
            "(C) 'enhance' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(D) '根除' 一词意味着完全销毁；结束。" +
            "<br><br>" +
            "(A) '培育' 意味着照顾和鼓励增长或发展。" +
            "<br><br>" +
            "(B) '保护' 意味着保持（某物）的原始或现有状态。" +
            "<br><br>" +
            "(C) '提升' 意味着加强、增加或进一步改善质量、价值或范围。"
    },
    {
        id: 10,
        question: "The journalist promised not to __________ the confidential information she had received from her source.",
        chinese_question: "记者承诺不 __________ 她从消息来源那里得到的机密信息。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "disclose", chinese_answer: "透露", chinese_romanization: "tòulù" },
            { option: "C", answer: "withhold", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disclose' means make (secret or new information) known." +
            "<br><br>" +
            "(A) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'withhold' means refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(D) 'obscure' means keep from being seen; conceal.",
        chinese_explanation: "(B) '透露' 一词意味着使（秘密或新的信息）为人所知。" +
            "<br><br>" +
            "(A) '隐藏' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(C) '保留' 意味着拒绝给予（另一个人应得或渴望的东西）。" +
            "<br><br>" +
            "(D) '遮掩' 意味着不让看到；隐藏。"
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
