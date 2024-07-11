// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The police were called in to __________ the riot, using tear gas and water cannons to disperse the angry crowd.",
        chinese_question: "警察被叫来 __________ 骚乱，使用催泪瓦斯和水炮驱散愤怒的人群。",
        answers: [
            { option: "A", answer: "incite", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
            { option: "B", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "C", answer: "quell", chinese_answer: "平息", chinese_romanization: "píngxī" },
            { option: "D", answer: "provoke", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quell' means put an end to (a rebellion or other disorder), typically by the use of force." +
            "<br><br>" +
            "(A) 'incite' means encourage or stir up (violent or unlawful behavior)." +
            "<br><br>" +
            "(B) 'escalate' means increase rapidly." +
            "<br><br>" +
            "(D) 'provoke' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone.",
        chinese_explanation: "(C) '平息' 意味着通过使用武力结束（叛乱或其他骚乱）。" +
            "<br><br>" +
            "(A) '煽动' 意味着鼓励或煽动（暴力或非法行为）。" +
            "<br><br>" +
            "(B) '升级' 意味着迅速增加。" +
            "<br><br>" +
            "(D) '激怒' 意味着刺激或引起（通常是强烈或不受欢迎的反应或情绪）。"
    },
    {
        id: 2,
        question: "After much debate, she decided to __________ to the committee’s decision, even though she had her reservations.",
        chinese_question: "经过激烈的辩论，她决定 __________ 委员会的决定，尽管她有保留意见。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "object", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "acquiesce", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
            { option: "D", answer: "protest", chinese_answer: "抗议", chinese_romanization: "kàngyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acquiesce' means accept something reluctantly but without protest." +
            "<br><br>" +
            "(A) 'resist' means withstand the action or effect of." +
            "<br><br>" +
            "(B) 'object' means express or feel disapproval, dislike, or opposition." +
            "<br><br>" +
            "(D) 'protest' means a statement or action expressing disapproval of or objection to something.",
        chinese_explanation: "(C) '默许' 意味着不情愿地接受某事，但没有抗议。" +
            "<br><br>" +
            "(A) '抵抗' 意味着经受住……的作用或影响。" +
            "<br><br>" +
            "(B) '反对' 意味着表达或感到不赞成、不喜欢或反对。" +
            "<br><br>" +
            "(D) '抗议' 意味着表示反对或反对某事的声明或行动。"
    },
    {
        id: 3,
        question: "The fan blades __________ back and forth, providing a gentle breeze throughout the room.",
        chinese_question: "风扇的叶片来回 __________，在整个房间里提供轻柔的微风。",
        answers: [
            { option: "A", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "B", answer: "oscillate", chinese_answer: "摆动", chinese_romanization: "bǎidòng" },
            { option: "C", answer: "remain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "D", answer: "steady", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oscillate' means move or swing back and forth at a regular speed." +
            "<br><br>" +
            "(A) 'stagnate' means cease developing; become inactive or dull." +
            "<br><br>" +
            "(C) 'remain' means continue to exist, especially after other similar or related people or things have ceased to do so." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(B) '摆动' 意味着以规则的速度来回移动或摆动。" +
            "<br><br>" +
            "(A) '停滞' 意味着停止发展；变得不活跃或迟钝。" +
            "<br><br>" +
            "(C) '保持' 意味着继续存在，特别是在其他类似或相关的人或事物停止存在之后。" +
            "<br><br>" +
            "(D) '稳定' 意味着牢固固定、支撑或平衡；不摇晃或移动。"
    },
    {
        id: 4,
        question: "His reckless driving could __________ the safety of everyone on the road, causing potential accidents.",
        chinese_question: "他的鲁莽驾驶可能 __________ 每个人的安全，造成潜在的事故。",
        answers: [
            { option: "A", answer: "secure", chinese_answer: "保障", chinese_romanization: "bǎozhàng" },
            { option: "B", answer: "jeopardize", chinese_answer: "危及", chinese_romanization: "wēijí" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "safeguard", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jeopardize' means put (someone or something) into a situation in which there is a danger of loss, harm, or failure." +
            "<br><br>" +
            "(A) 'secure' means fix or attach (something) firmly so that it cannot be moved or lost." +
            "<br><br>" +
            "(C) 'protect' means keep safe from harm or injury." +
            "<br><br>" +
            "(D) 'safeguard' means protect from harm or damage with an appropriate measure.",
        chinese_explanation: "(B) '危及' 意味着将（某人或某事）置于可能造成损失、伤害或失败的危险境地。" +
            "<br><br>" +
            "(A) '保障' 意味着将某物牢固地固定或附着，以免移动或丢失。" +
            "<br><br>" +
            "(C) '保护' 意味着使免受伤害或损害。" +
            "<br><br>" +
            "(D) '维护' 意味着通过适当的措施保护免受伤害或损害。"
    },
    {
        id: 5,
        question: "Despite his achievements, some critics continued to __________ his work, claiming it lacked originality and depth.",
        chinese_question: "尽管他取得了成就，一些批评家仍然 __________ 他的作品，声称它缺乏原创性和深度。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "D", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disparage' means regard or represent as being of little worth." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'endorse' means declare one's public approval or support of.",
        chinese_explanation: "(D) '贬低' 意味着认为或表示某物的价值很低。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达对……的热情认可或钦佩。" +
            "<br><br>" +
            "(B) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '认可' 意味着公开表示支持或赞同。"
    },
    {
        id: 6,
        question: "As the excitement of the holiday season began to __________, people returned to their normal routines.",
        chinese_question: "随着假日季节的兴奋感开始 __________，人们回到了正常的日常生活中。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "C", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "D", answer: "wane", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'wane' means (of a state or feeling) decrease in vigor, power, or extent; become weaker." +
            "<br><br>" +
            "(A) 'increase' means become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(B) 'flourish' means grow or develop in a healthy or vigorous way." +
            "<br><br>" +
            "(C) 'grow' means undergo natural development by increasing in size and changing physically.",
        chinese_explanation: "(D) '减弱' 意味着（状态或感觉）在活力、力量或程度上减少；变弱。" +
            "<br><br>" +
            "(A) '增加' 意味着在大小、数量、强度或程度上变大或使变大。" +
            "<br><br>" +
            "(B) '繁荣' 意味着以健康或强劲的方式生长或发展。" +
            "<br><br>" +
            "(C) '增长' 意味着通过增加大小和物理变化自然发展。"
    },
    {
        id: 7,
        question: "Before publishing the article, the journalist needed to __________ all the facts to ensure accuracy.",
        chinese_question: "在发表文章之前，记者需要 __________ 所有事实以确保准确性。",
        answers: [
            { option: "A", answer: "falsify", chinese_answer: "伪造", chinese_romanization: "wěizào" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "verify", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "D", answer: "assume", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'verify' means make sure or demonstrate that (something) is true, accurate, or justified." +
            "<br><br>" +
            "(A) 'falsify' means alter (information or evidence) so as to mislead." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'assume' means suppose to be the case, without proof.",
        chinese_explanation: "(C) '验证' 意味着确保或证明（某事）真实、准确或有依据的。" +
            "<br><br>" +
            "(A) '伪造' 意味着篡改（信息或证据）以误导。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '假设' 意味着在没有证据的情况下假定情况属实。"
    },
    {
        id: 8,
        question: "She could __________ a faint scent of jasmine in the air, indicating that spring was finally approaching.",
        chinese_question: "她能 __________ 到空气中有一丝茉莉花的香味，这表明春天终于要来了。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "perceive", chinese_answer: "感知", chinese_romanization: "gǎnzhī" },
            { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "overlook", chinese_answer: "俯视", chinese_romanization: "fǔshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perceive' means become aware or conscious of (something); come to realize or understand." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(B) '感知' 意味着变得意识到或认识到（某事）；意识到或理解。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能正确照顾。" +
            "<br><br>" +
            "(D) '俯视' 意味着未能注意到（某事）。"
    },
    {
        id: 9,
        question: "If you don't complete the project on time, you will __________ your right to the bonus payment.",
        chinese_question: "如果你不能按时完成项目，你将 __________ 获得奖金的权利。",
        answers: [
            { option: "A", answer: "gain", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "B", answer: "secure", chinese_answer: "确保", chinese_romanization: "quèbǎo" },
            { option: "C", answer: "claim", chinese_answer: "声称", chinese_romanization: "shēngchēng" },
            { option: "D", answer: "forfeit", chinese_answer: "丧失", chinese_romanization: "sàngshī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forfeit' means lose or be deprived of (property or a right or privilege) as a penalty for wrongdoing." +
            "<br><br>" +
            "(A) 'gain' means obtain or secure (something desired, favorable, or profitable)." +
            "<br><br>" +
            "(B) 'secure' means fix or attach (something) firmly so that it cannot be moved or lost." +
            "<br><br>" +
            "(C) 'claim' means state or assert that something is the case, typically without providing evidence or proof.",
        chinese_explanation: "(D) '丧失' 意味着作为违法行为的惩罚而失去或被剥夺（财产或权利或特权）。" +
            "<br><br>" +
            "(A) '获得' 意味着获得或确保（某物所需、受欢迎或有利的东西）。" +
            "<br><br>" +
            "(B) '确保' 意味着将（某物）牢固地固定或附着，以免移动或丢失。" +
            "<br><br>" +
            "(C) '声称' 意味着陈述或断言某事属实，通常未提供证据或证明。"
    },
    {
        id: 10,
        question: "They loved to __________ about their childhood days, sharing stories of adventures and mischief.",
        chinese_question: "他们喜欢 __________ 童年时光，分享冒险和淘气的故事。",
        answers: [
            { option: "A", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "B", answer: "reminisce", chinese_answer: "回忆", chinese_romanization: "huíyì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reminisce' means indulge in enjoyable recollection of past events." +
            "<br><br>" +
            "(A) 'forget' means fail to remember." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(B) '回忆' 意味着沉浸在愉快的过去事件的回忆中。" +
            "<br><br>" +
            "(A) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
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
