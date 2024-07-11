// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the provocation, he managed to __________ from responding in anger, maintaining his composure.",
        chinese_question: "尽管受到挑衅，他还是设法 __________ 不以愤怒回应，保持了冷静。",
        answers: [
            { option: "A", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "B", answer: "refrain", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "C", answer: "engage", chinese_answer: "参与", chinese_romanization: "cānyù" },
            { option: "D", answer: "react", chinese_answer: "反应", chinese_romanization: "fǎnyìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'refrain' means stop oneself from doing something." +
            "<br><br>" +
            "(A) 'indulge' means allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(C) 'engage' means occupy, attract, or involve (someone's interest or attention)." +
            "<br><br>" +
            "(D) 'react' means respond or behave in a particular way in response to something.",
        chinese_explanation: "(B) '克制' 意味着阻止自己做某事。" +
            "<br><br>" +
            "(A) '放纵' 意味着允许自己享受的乐趣。" +
            "<br><br>" +
            "(C) '参与' 意味着占据、吸引或涉及（某人的兴趣或注意）。" +
            "<br><br>" +
            "(D) '反应' 意味着以特定方式回应或表现。"
    },
    {
        id: 2,
        question: "He managed to __________ all questions about his past, skillfully steering the conversation to other topics.",
        chinese_question: "他设法 __________ 所有关于他过去的问题，巧妙地将谈话引向其他话题。",
        answers: [
            { option: "A", answer: "confront", chinese_answer: "面对", chinese_romanization: "miàn duì" },
            { option: "B", answer: "evade", chinese_answer: "逃避", chinese_romanization: "táobì" },
            { option: "C", answer: "answer", chinese_answer: "回答", chinese_romanization: "huídá" },
            { option: "D", answer: "disclose", chinese_answer: "透露", chinese_romanization: "tòulù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evade' means escape or avoid, especially by cleverness or trickery." +
            "<br><br>" +
            "(A) 'confront' means face up to and deal with (a problem or difficult situation)." +
            "<br><br>" +
            "(C) 'answer' means a thing said, written, or done to deal with or as a reaction to a question, statement, or situation." +
            "<br><br>" +
            "(D) 'disclose' means make (secret or new information) known.",
        chinese_explanation: "(B) '逃避' 意味着通过聪明或诡计逃脱或避免。" +
            "<br><br>" +
            "(A) '面对' 意味着面对并处理（问题或困难情况）。" +
            "<br><br>" +
            "(C) '回答' 意味着为处理或回应问题、陈述或情况而说、写或做的事情。" +
            "<br><br>" +
            "(D) '透露' 意味着使（秘密或新信息）为人所知。"
    },
    {
        id: 3,
        question: "The mayor was quick to __________ the acts of violence, calling for peace and unity in the community.",
        chinese_question: "市长迅速 __________ 暴力行为，呼吁社区的和平与团结。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'condemn' means to express complete disapproval of, typically in public." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(C) '谴责' 一词意味着表达完全不赞成，通常是公开的。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '庆祝' 意味着以社交聚会或愉快的活动来承认一个重要或愉快的日子或事件。"
    },
    {
        id: 4,
        question: "Through years of study, she managed to __________ a deep understanding of classical literature, making her a respected scholar in the field.",
        chinese_question: "通过多年的学习，她设法 __________ 了对古典文学的深刻理解，使她成为该领域受人尊敬的学者。",
        answers: [
            { option: "A", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "B", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquire' means to buy or obtain (an asset or object) for oneself." +
            "<br><br>" +
            "(A) 'lose' means be deprived of or cease to have or retain (something)." +
            "<br><br>" +
            "(C) 'forget' means fail to remember." +
            "<br><br>" +
            "(D) 'abandon' means give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(B) '获得' 意味着为自己购买或获得（资产或物品）。" +
            "<br><br>" +
            "(A) '失去' 意味着被剥夺或不再拥有或保留（某物）。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（一个行动过程、一个实践或一种思维方式）。"
    },
    {
        id: 5,
        question: "During the heated debate, he couldn't help but __________ his opinion, hoping to clarify the misunderstanding.",
        chinese_question: "在激烈的辩论中，他忍不住 __________ 自己的意见，希望能澄清误解。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "interject", chinese_answer: "插入", chinese_romanization: "chārù" },
            { option: "C", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'interject' means say (something) abruptly, especially as an aside or interruption." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'withdraw' means remove or take away (something) from a particular place or position." +
            "<br><br>" +
            "(D) 'hesitate' means pause before saying or doing something, especially through uncertainty.",
        chinese_explanation: "(B) '插入' 意味着突然说出（某事），特别是作为旁白或打断。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(C) '撤回' 意味着从特定地方或位置移除或取走（某物）。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事之前停顿，特别是由于不确定。"
    },
    {
        id: 6,
        question: "Over time, the impact of the initial excitement began to __________ as the novelty wore off.",
        chinese_question: "随着时间的推移，最初兴奋的影响开始 __________ ，因为新奇感逐渐消失。",
        answers: [
            { option: "A", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "magnify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diminish' means to make or become less." +
            "<br><br>" +
            "(A) 'flourish' means to grow or develop in a healthy or vigorous way." +
            "<br><br>" +
            "(B) 'magnify' means to make something appear larger than it is." +
            "<br><br>" +
            "(D) 'intensify' means to become or make more intense.",
        chinese_explanation: "(C) '减少' 一词意味着变得或使之变少。" +
            "<br><br>" +
            "(A) '繁荣' 意味着健康或充满活力地成长或发展。" +
            "<br><br>" +
            "(B) '放大' 意味着使某物看起来比实际更大。" +
            "<br><br>" +
            "(D) '加强' 意味着变得或使之更强烈。"
    },
    {
        id: 7,
        question: "The loud construction noise outside began to __________ his ability to concentrate on his studies for the final exam.",
        chinese_question: "外面的施工噪音开始 __________ 他在期末考试前集中注意力的能力。",
        answers: [
            { option: "A", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
            { option: "B", answer: "bolster", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "invigorate", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "D", answer: "impair", chinese_answer: "损害", chinese_romanization: "sǔnhài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impair' means to weaken or damage something." +
            "<br><br>" +
            "(A) 'enhance' means to improve the quality of something." +
            "<br><br>" +
            "(B) 'bolster' means to support or strengthen." +
            "<br><br>" +
            "(C) 'invigorate' means to give energy or strength to.",
        chinese_explanation: "(D) '损害' 一词意味着削弱或破坏某物。" +
            "<br><br>" +
            "(A) '提高' 意味着改善某物的质量。" +
            "<br><br>" +
            "(B) '支持' 意味着支持或加强。" +
            "<br><br>" +
            "(C) '激励' 意味着给予能量或力量。"
    },
    {
        id: 8,
        question: "Students who participate in extracurricular activities are __________ from the usual homework assignments on those days.",
        chinese_question: "参加课外活动的学生在那些日子 __________ 于通常的家庭作业。",
        answers: [
            { option: "A", answer: "obliged", chinese_answer: "必须", chinese_romanization: "bìxū" },
            { option: "B", answer: "exempted", chinese_answer: "免除", chinese_romanization: "miǎnchú" },
            { option: "C", answer: "burdened", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "D", answer: "required", chinese_answer: "要求", chinese_romanization: "yāoqiú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exempted' means free from an obligation or liability imposed on others." +
            "<br><br>" +
            "(A) 'obliged' means required to do something." +
            "<br><br>" +
            "(C) 'burdened' means loaded heavily." +
            "<br><br>" +
            "(D) 'required' means necessary.",
        chinese_explanation: "(B) '免除' 一词意味着免于对他人施加的义务或责任。" +
            "<br><br>" +
            "(A) '必须' 意味着必须做某事。" +
            "<br><br>" +
            "(C) '负担' 意味着沉重的负荷。" +
            "<br><br>" +
            "(D) '要求' 意味着必要的。"
    },
    {
        id: 9,
        question: "The twins are so similar in appearance that it's hard to __________ one from the other.",
        chinese_question: "这对双胞胎在外表上如此相似，以至于很难 __________ 他们。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "B", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "distinguish", chinese_answer: "区分", chinese_romanization: "qūfēn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'distinguish' means to recognize or treat someone or something as different." +
            "<br><br>" +
            "(A) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(B) 'blend' means to mix or combine." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '区分' 一词意味着识别或对待某人或某物为不同。" +
            "<br><br>" +
            "(A) '混淆' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(B) '混合' 意味着混合或结合。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
        question: "To __________ the angry crowd, the politician promised immediate action on the issues they were protesting.",
        chinese_question: "为了 __________ 愤怒的人群，这位政治家承诺立即采取行动解决他们抗议的问题。",
        answers: [
            { option: "A", answer: "appease", chinese_answer: "平息", chinese_romanization: "píngxī" },
            { option: "B", answer: "provoke", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "C", answer: "enrage", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "D", answer: "frustrate", chinese_answer: "挫败", chinese_romanization: "cuòbài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'appease' means to pacify or placate someone by acceding to their demands." +
            "<br><br>" +
            "(B) 'provoke' means to stimulate or give rise to a reaction." +
            "<br><br>" +
            "(C) 'enrage' means to make very angry." +
            "<br><br>" +
            "(D) 'frustrate' means to prevent from progressing, succeeding, or being fulfilled.",
        chinese_explanation: "(A) '平息' 一词意味着通过答应他们的要求来安抚或抚慰某人。" +
            "<br><br>" +
            "(B) '激怒' 意味着刺激或引起反应。" +
            "<br><br>" +
            "(C) '激怒' 意味着使非常愤怒。" +
            "<br><br>" +
            "(D) '挫败' 意味着阻止进展、成功或实现。"
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
