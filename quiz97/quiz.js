// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His salary is __________ with his experience and the responsibilities he holds in the company.",
        chinese_question: "他的薪水与他的经验和在公司中的职责 __________。",
        answers: [
            { option: "A", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "B", answer: "disproportional", chinese_answer: "不成比例的", chinese_romanization: "bùchéng bǐlì de" },
            { option: "C", answer: "commensurated", chinese_answer: "相称的", chinese_romanization: "xiāngchèn de" },
            { option: "D", answer: "incompatible", chinese_answer: "不兼容的", chinese_romanization: "bù jiānróng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'commensurated' means corresponding in size or degree; in proportion." +
            "<br><br>" +
            "(A) 'unrelated' means not related or linked." +
            "<br><br>" +
            "(B) 'disproportional' means out of proportion; too large or too small in comparison with something else." +
            "<br><br>" +
            "(D) 'incompatible' means so different in nature as to be incapable of coexisting.",
        chinese_explanation: "(C) '相称的' 一词意味着在大小或程度上相对应；成比例的。" +
            "<br><br>" +
            "(A) '无关的' 意味着没有关联或联系。" +
            "<br><br>" +
            "(B) '不成比例的' 意味着与其他东西相比过大或过小。" +
            "<br><br>" +
            "(D) '不兼容的' 意味着本质上如此不同，以至于无法共存。"
    },
    {
        id: 2,
        question: "Over time, their constant arguments began to __________ the once close relationship between the two friends.",
        chinese_question: "随着时间的推移，他们不断的争吵开始 __________ 这两位朋友之间曾经亲密的关系。",
        answers: [
            { option: "A", answer: "mend", chinese_answer: "修补", chinese_romanization: "xiūbǔ" },
            { option: "B", answer: "estrange", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" },
            { option: "C", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "D", answer: "bond", chinese_answer: "结合", chinese_romanization: "jiéhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'estrange' means cause (someone) to be no longer close or affectionate to someone; alienate." +
            "<br><br>" +
            "(A) 'mend' means repair (something that is broken or damaged)." +
            "<br><br>" +
            "(C) 'strengthen' means make or become stronger." +
            "<br><br>" +
            "(D) 'bond' means join or be joined securely to something else.",
        chinese_explanation: "(B) '疏远' 一词意味着使（某人）不再对某人亲近或感情深厚；使疏远。" +
            "<br><br>" +
            "(A) '修补' 意味着修理（破碎或损坏的东西）。" +
            "<br><br>" +
            "(C) '加强' 意味着使或变得更强。" +
            "<br><br>" +
            "(D) '结合' 意味着与其他东西牢固地连接或被连接。"
    },
    {
        id: 3,
        question: "He tried to __________ his colleague's achievements by making negative remarks about their work.",
        chinese_question: "他试图通过发表关于同事工作的负面评论来 __________ 他们的成就。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'belittle' means make (someone or something) seem unimportant." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'encourage' means give support, confidence, or hope to (someone).",
        chinese_explanation: "(C) '贬低' 一词意味着使（某人或某事）显得不重要。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予（某人）支持、信心或希望。"
    },
    {
        id: 4,
        question: "The company plans to __________ its workforce by hiring additional staff to meet the increasing demand.",
        chinese_question: "公司计划通过雇用额外员工来 __________ 其劳动力，以满足不断增长的需求。",
        answers: [
            { option: "A", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "diminish", chinese_answer: "缩减", chinese_romanization: "suōjiǎn" },
            { option: "C", answer: "decrease", chinese_answer: "降低", chinese_romanization: "jiàngdī" },
            { option: "D", answer: "augment", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'augment' means to make (something) greater by adding to it; increase." +
            "<br><br>" +
            "(A) 'reduce' means to make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'decrease' means to make or become smaller or fewer in size, amount, intensity, or degree.",
        chinese_explanation: "(D) '增加' 一词意味着通过增加使（某事物）更大；增加。" +
            "<br><br>" +
            "(A) '减少' 意味着使数量、程度或规模变小或减少。" +
            "<br><br>" +
            "(B) '缩减' 意味着使变小或减少。" +
            "<br><br>" +
            "(C) '降低' 意味着使变小或减少数量、程度或规模。"
    },
    {
        id: 5,
        question: "The government decided to __________ the arts program to ensure it could continue providing services to the community.",
        chinese_question: "政府决定 __________ 艺术项目，以确保它能够继续为社区提供服务。",
        answers: [
            { option: "A", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "subsidize", chinese_answer: "资助", chinese_romanization: "zīzhù" },
            { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'subsidize' means support (an organization or activity) financially." +
            "<br><br>" +
            "(A) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'criticize' means indicate the faults of (someone or something) in a disapproving way.",
        chinese_explanation: "(C) '资助' 一词意味着在经济上支持（一个组织或活动）。" +
            "<br><br>" +
            "(A) '反对' 意味着不赞成并试图阻止，特别是通过辩论。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '批评' 意味着以不赞成的方式指出（某人或某物）的错误。"
    },
    {
        id: 6,
        question: "The con artist tried to __________ the elderly couple into giving him their life savings.",
        chinese_question: "骗子试图 __________ 这对老夫妇把他们的毕生积蓄交给他。",
        answers: [
            { option: "A", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "hoodwink", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "D", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hoodwink' means deceive or trick (someone)." +
            "<br><br>" +
            "(A) 'help' means make it easier for (someone) to do something by offering one's services or resources." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'assist' means help (someone), typically by doing a share of the work.",
        chinese_explanation: "(C) '欺骗' 一词意味着欺骗或愚弄（某人）。" +
            "<br><br>" +
            "(A) '帮助' 意味着通过提供服务或资源使（某人）更容易做某事。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '协助' 意味着帮助（某人），通常是分担部分工作。"
    },
    {
        id: 7,
        question: "After years of working night shifts, she became __________ to staying awake all night.",
        chinese_question: "在上了多年的夜班后，她变得 __________ 于整夜不睡。",
        answers: [
            { option: "A", answer: "uncomfortable", chinese_answer: "不舒服", chinese_romanization: "bù shūfú" },
            { option: "B", answer: "unhappy", chinese_answer: "不高兴", chinese_romanization: "bù gāoxìng" },
            { option: "C", answer: "unsettled", chinese_answer: "不安定", chinese_romanization: "bù āndìng" },
            { option: "D", answer: "inured", chinese_answer: "习惯于", chinese_romanization: "xíguàn yú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inured' means to accustom (someone) to something, especially something unpleasant." +
            "<br><br>" +
            "(A) 'uncomfortable' means causing or feeling slight pain or physical discomfort." +
            "<br><br>" +
            "(B) 'unhappy' means not happy." +
            "<br><br>" +
            "(C) 'unsettled' means lacking stability.",
        chinese_explanation: "(D) '习惯于' 意思是使某人习惯于某事，尤其是某些不愉快的事情。" +
            "<br><br>" +
            "(A) '不舒服' 意思是引起或感到轻微的疼痛或身体不适。" +
            "<br><br>" +
            "(B) '不高兴' 意思是不开心。" +
            "<br><br>" +
            "(C) '不安定' 意思是缺乏稳定性。"
    },
    {
        id: 8,
        question: "The university decided to __________ an honorary degree on the distinguished professor.",
        chinese_question: "大学决定向这位杰出的教授 __________ 名誉学位。",
        answers: [
            { option: "A", answer: "revoke", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
            { option: "B", answer: "confer", chinese_answer: "授予", chinese_romanization: "shòuyǔ" },
            { option: "C", answer: "retract", chinese_answer: "收回", chinese_romanization: "shōuhuí" },
            { option: "D", answer: "decline", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'confer' means grant or bestow (a title, degree, benefit, or right)." +
            "<br><br>" +
            "(A) 'revoke' means put an end to the validity or operation of (a decree, decision, or promise)." +
            "<br><br>" +
            "(C) 'retract' means draw or be drawn back or back in." +
            "<br><br>" +
            "(D) 'decline' means politely refuse (an invitation or offer).",
        chinese_explanation: "(B) '授予' 一词意味着授予（头衔、学位、福利或权利）。" +
            "<br><br>" +
            "(A) '撤销' 意味着终止（法令、决定或承诺）的有效性或运作。" +
            "<br><br>" +
            "(C) '收回' 意味着收回或被收回。" +
            "<br><br>" +
            "(D) '拒绝' 意味着礼貌地拒绝（邀请或提议）。"
    },
    {
        id: 9,
        question: "The celebrity was happy to __________ the new product, lending her fame to boost its popularity.",
        chinese_question: "这位名人很高兴 __________ 这款新产品，用她的名气来提升其知名度。",
        answers: [
            { option: "A", answer: "endorse", chinese_answer: "代言", chinese_romanization: "dàiyán" },
            { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endorse' means declare one's public approval or support of." +
            "<br><br>" +
            "(B) 'criticize' means indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'undermine' means damage or weaken (someone or something), especially gradually or insidiously.",
        chinese_explanation: "(A) '代言' 一词意味着公开声明赞同或支持。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出（某人或某物）的错误。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '破坏' 意味着损害或削弱（某人或某物），特别是逐渐或阴险地。"
    },
    {
        id: 10,
        question: "Many citizens __________ the government's decision to cut funding for education, believing it would harm future generations.",
        chinese_question: "许多市民 __________ 政府削减教育经费的决定，认为这会对未来几代人造成伤害。",
        answers: [
            { option: "A", answer: "deplore", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "D", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deplore' means feel or express strong disapproval of (something)." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'endorse' means declare one's public approval or support of." +
            "<br><br>" +
            "(D) 'accept' means consent to receive (a thing offered).",
        chinese_explanation: "(A) '谴责' 一词意味着对（某事）强烈不赞成或表示强烈不满。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '赞同' 意味着公开声明赞同或支持。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接收（提供的东西）。"
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
