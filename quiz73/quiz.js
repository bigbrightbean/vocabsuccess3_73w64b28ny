// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The business executives gathered for a __________ at the downtown hotel to discuss the new merger.",
        chinese_question: "商业主管们在市中心的酒店聚集参加 __________，讨论新的合并事宜。",
        answers: [
            { option: "A", answer: "breakfast", chinese_answer: "早餐", chinese_romanization: "zǎocān" },
            { option: "B", answer: "luncheon", chinese_answer: "午餐会", chinese_romanization: "wǔcān huì" },
            { option: "C", answer: "dinner", chinese_answer: "晚餐", chinese_romanization: "wǎncān" },
            { option: "D", answer: "snack", chinese_answer: "点心", chinese_romanization: "diǎnxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'luncheon' means a formal lunch, or a formal word for lunch." +
            "<br><br>" +
            "(A) 'breakfast' means the first meal of the day." +
            "<br><br>" +
            "(C) 'dinner' means the main meal of the day, taken either around midday or in the evening." +
            "<br><br>" +
            "(D) 'snack' means a small amount of food eaten between meals.",
        chinese_explanation: "(B) '午餐会' 一词意味着正式的午餐，或午餐的正式说法。" +
            "<br><br>" +
            "(A) '早餐' 意味着一天的第一餐。" +
            "<br><br>" +
            "(C) '晚餐' 意味着一天的主餐，通常在中午或晚上吃。" +
            "<br><br>" +
            "(D) '点心' 意味着两餐之间吃的一小部分食物。"
    },
    {
        id: 2,
        question: "He has a __________ to overthink every decision, often causing delays in his work.",
        chinese_question: "他有 __________ 过度思考每一个决定，常常导致工作延误。",
        answers: [
            { option: "A", answer: "disinclination", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "B", answer: "propensity", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "C", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
            { option: "D", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'propensity' means an inclination or natural tendency to behave in a particular way." +
            "<br><br>" +
            "(A) 'disinclination' means a reluctance or lack of enthusiasm." +
            "<br><br>" +
            "(C) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(D) 'aversion' means a strong dislike or disinclination.",
        chinese_explanation: "(B) '倾向' 一词意味着行为上的倾向或自然倾向。" +
            "<br><br>" +
            "(A) '不情愿' 意味着不愿意或缺乏热情。" +
            "<br><br>" +
            "(C) '勉强' 意味着不愿意做某事。" +
            "<br><br>" +
            "(D) '厌恶' 意味着强烈的厌恶或不情愿。"
    },
    {
        id: 3,
        question: "The __________ was hired to influence legislation in favor of the company's interests.",
        chinese_question: "这位 __________ 被雇来影响立法，以支持公司的利益。",
        answers: [
            { option: "A", answer: "volunteer", chinese_answer: "志愿者", chinese_romanization: "zhìyuàn zhě" },
            { option: "B", answer: "activist", chinese_answer: "活动家", chinese_romanization: "huódòng jiā" },
            { option: "C", answer: "lobbyist", chinese_answer: "游说者", chinese_romanization: "yóushuì zhě" },
            { option: "D", answer: "intern", chinese_answer: "实习生", chinese_romanization: "shíxí shēng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lobbyist' means a person who takes part in an organized attempt to influence legislators." +
            "<br><br>" +
            "(A) 'volunteer' means a person who freely offers to take part in an enterprise or undertake a task." +
            "<br><br>" +
            "(B) 'activist' means a person who campaigns to bring about political or social change." +
            "<br><br>" +
            "(D) 'intern' means a student or trainee who works, sometimes without pay, at a trade or occupation in order to gain work experience.",
        chinese_explanation: "(C) '游说者' 一词意味着参与有组织的企图影响立法者的人。" +
            "<br><br>" +
            "(A) '志愿者' 意味着自由参加企业或承担任务的人。" +
            "<br><br>" +
            "(B) '活动家' 意味着为实现政治或社会变革而开展活动的人。" +
            "<br><br>" +
            "(D) '实习生' 意味着为了获得工作经验而在某一行业或职业中工作的学生或实习生，有时无偿。"
    },
    {
        id: 4,
        question: "The community faced severe __________ when the hurricane destroyed homes and businesses, leaving many people homeless.",
        chinese_question: "当飓风摧毁房屋和企业，导致许多人无家可归时，社区面临严重的 __________。",
        answers: [
            { option: "A", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "fortune", chinese_answer: "好运", chinese_romanization: "hǎoyùn" },
            { option: "C", answer: "adversity", chinese_answer: "逆境", chinese_romanization: "nìjìng" },
            { option: "D", answer: "luxury", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adversity' means difficulties; misfortune." +
            "<br><br>" +
            "(A) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(B) 'fortune' means chance or luck as an arbitrary force affecting human affairs." +
            "<br><br>" +
            "(D) 'luxury' means the state of great comfort and extravagant living.",
        chinese_explanation: "(C) '逆境' 一词意味着困难；不幸。" +
            "<br><br>" +
            "(A) '繁荣' 意味着繁荣的状态。" +
            "<br><br>" +
            "(B) '好运' 意味着影响人类事务的任意力量。" +
            "<br><br>" +
            "(D) '奢侈' 意味着极大的舒适和奢华的生活状态。"
    },
    {
        id: 5,
        question: "The politician faced __________ after being caught in a bribery scandal, losing all credibility and public support.",
        chinese_question: "这位政客在贿赂丑闻中被抓后面临 __________，失去了所有的信誉和公众支持。",
        answers: [
            { option: "A", answer: "honor", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "B", answer: "ignominy", chinese_answer: "耻辱", chinese_romanization: "chǐrǔ" },
            { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ignominy' means public shame or disgrace." +
            "<br><br>" +
            "(A) 'honor' means high respect; great esteem." +
            "<br><br>" +
            "(C) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
            "<br><br>" +
            "(D) 'admiration' means respect and warm approval.",
        chinese_explanation: "(B) '耻辱' 一词意味着公众的耻辱或耻辱。" +
            "<br><br>" +
            "(A) '荣誉' 意味着高度尊重；极大的尊重。" +
            "<br><br>" +
            "(C) '尊重' 意味着对某人或某物因其能力、品质或成就而产生的深深的钦佩。" +
            "<br><br>" +
            "(D) '钦佩' 意味着尊重和热情的认可。"
    },
    {
        id: 6,
        question: "Strict __________ to the medication regimen is essential for the treatment to be effective and prevent relapse.",
        chinese_question: "严格 __________ 药物方案对于治疗有效和防止复发至关重要。",
        answers: [
            { option: "A", answer: "deviation", chinese_answer: "偏离", chinese_romanization: "piānlí" },
            { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "adherence", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "D", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adherence' means the act of sticking to a rule, policy, or plan." +
            "<br><br>" +
            "(A) 'deviation' means the action of departing from an established course or accepted standard." +
            "<br><br>" +
            "(B) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'abandonment' means the action or fact of abandoning or being abandoned.",
        chinese_explanation: "(C) '遵守' 一词意味着坚持规则、政策或计划的行为。" +
            "<br><br>" +
            "(A) '偏离' 意味着离开既定路线或接受的标准的行为。" +
            "<br><br>" +
            "(B) '疏忽' 意味着未能妥善照顾做某事。" +
            "<br><br>" +
            "(D) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 7,
        question: "The king's sudden __________ shocked the nation, as he stepped down from the throne to marry a commoner.",
        chinese_question: "国王突然 __________ 震惊了全国，因为他退位娶了一位平民。",
        answers: [
            { option: "A", answer: "coronation", chinese_answer: "加冕", chinese_romanization: "jiāmiǎn" },
            { option: "B", answer: "abdication", chinese_answer: "退位", chinese_romanization: "tuìwèi" },
            { option: "C", answer: "ascension", chinese_answer: "登基", chinese_romanization: "dēngjī" },
            { option: "D", answer: "reign", chinese_answer: "统治", chinese_romanization: "tǒngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abdication' means the act of renouncing the throne." +
            "<br><br>" +
            "(A) 'coronation' means the ceremony of crowning a sovereign or a sovereign's consort." +
            "<br><br>" +
            "(C) 'ascension' means the act of rising to an important position or a higher level." +
            "<br><br>" +
            "(D) 'reign' means the period during which a sovereign rules.",
        chinese_explanation: "(B) '退位' 一词意味着放弃王位的行为。" +
            "<br><br>" +
            "(A) '加冕' 意味着加冕国王或国王配偶的仪式。" +
            "<br><br>" +
            "(C) '登基' 意味着升至重要职位或更高水平的行为。" +
            "<br><br>" +
            "(D) '统治' 意味着国王统治的时期。"
    },
    {
        id: 8,
        question: "The __________ between the marketing and sales teams led to a significant increase in the company's revenue.",
        chinese_question: "营销团队和销售团队之间的 __________ 导致公司收入显著增加。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "B", answer: "competition", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "C", answer: "synergy", chinese_answer: "协同", chinese_romanization: "xiétóng" },
            { option: "D", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'synergy' means the interaction or cooperation of two or more organizations, substances, or other agents to produce a combined effect greater than the sum of their separate effects." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(B) 'competition' means the activity or condition of striving to gain or win something by defeating or establishing superiority over others." +
            "<br><br>" +
            "(D) 'discord' means disagreement between people.",
        chinese_explanation: "(C) '协同' 意味着两个或多个组织、物质或其他代理人的互动或合作，产生比他们单独效果总和更大的联合效果。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(B) '竞争' 意味着通过击败或确立对他人的优势来努力获得或赢得某物的活动或条件。" +
            "<br><br>" +
            "(D) '不和' 意味着人们之间的分歧。"
    },
    {
        id: 9,
        question: "Everyone knew he was a __________, always pretending to be an art expert but lacking real knowledge.",
        chinese_question: "每个人都知道他是个 __________，总是假装是艺术专家但缺乏真正的知识。",
        answers: [
            { option: "A", answer: "professional", chinese_answer: "专业人士", chinese_romanization: "zhuānyè rénshì" },
            { option: "B", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" },
            { option: "C", answer: "poseur", chinese_answer: "装模作样的人", chinese_romanization: "zhuāngmúzuòyàng de rén" },
            { option: "D", answer: "artist", chinese_answer: "艺术家", chinese_romanization: "yìshùjiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'poseur' means a person who acts in an affected manner in order to impress others." +
            "<br><br>" +
            "(A) 'professional' means relating to or connected with a profession." +
            "<br><br>" +
            "(B) 'scholar' means a specialist in a particular branch of study, especially the humanities; a distinguished academic." +
            "<br><br>" +
            "(D) 'artist' means a person who creates art.",
        chinese_explanation: "(C) '装模作样的人' 一词意味着为了给他人留下深刻印象而装腔作势的人。" +
            "<br><br>" +
            "(A) '专业人士' 意味着与职业有关或连接的。" +
            "<br><br>" +
            "(B) '学者' 意味着某一特定研究领域的专家，尤其是人文学科；杰出的学者。" +
            "<br><br>" +
            "(D) '艺术家' 意味着创造艺术的人。"
    },
    {
        id: 10,
        question: "She allowed herself the __________ of a luxurious spa day after months of hard work.",
        chinese_question: "经过几个月的辛苦工作，她允许自己享受一个奢华的水疗日作为 __________。",
        answers: [
            { option: "A", answer: "abstinence", chinese_answer: "节制", chinese_romanization: "jiézhì" },
            { option: "B", answer: "indulgence", chinese_answer: "纵容", chinese_romanization: "zòngróng" },
            { option: "C", answer: "restraint", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "D", answer: "deprivation", chinese_answer: "剥夺", chinese_romanization: "bōduó" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indulgence' means the action or fact of indulging." +
            "<br><br>" +
            "(A) 'abstinence' means the practice of restraining oneself from indulging in something, typically alcohol." +
            "<br><br>" +
            "(C) 'restraint' means a measure or condition that keeps someone or something under control." +
            "<br><br>" +
            "(D) 'deprivation' means the damaging lack of material benefits considered to be basic necessities in a society.",
        chinese_explanation: "(B) '纵容' 一词意味着纵容的行为或事实。" +
            "<br><br>" +
            "(A) '节制' 意味着约束自己不去放纵某事物的行为，通常是指酒精。" +
            "<br><br>" +
            "(C) '克制' 意味着保持某人或某事受控的措施或条件。" +
            "<br><br>" +
            "(D) '剥夺' 意味着社会中被认为是基本必需品的物质利益的损害性缺乏。"
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
