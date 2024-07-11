// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To ease traffic congestion, the city decided to __________ some of the vehicles to alternate routes.",
        chinese_question: "为了缓解交通拥堵，城市决定将一些车辆 __________ 到其他路线。",
        answers: [
            { option: "A", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "B", answer: "divert", chinese_answer: "分流", chinese_romanization: "fēnliú" },
            { option: "C", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'divert' means cause (someone or something) to change course or turn from one direction to another." +
            "<br><br>" +
            "(A) 'maintain' means cause or enable (a condition or state of affairs) to continue." +
            "<br><br>" +
            "(C) 'follow' means go or come after (a person or thing proceeding ahead); move or travel behind." +
            "<br><br>" +
            "(D) 'ignore' means refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '分流' 一词意味着使（某人或某物）改变方向或从一个方向转向另一个方向。" +
            "<br><br>" +
            "(A) '维持' 意味着使（某种状态或事务）继续。" +
            "<br><br>" +
            "(C) '跟随' 意味着在（前面的人或物）后面走或来；在后面移动或旅行。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "Despite the lack of evidence, he attempted to __________ the mistake to his colleague, hoping to avoid punishment himself.",
        chinese_question: "尽管缺乏证据，他还是试图将错误 __________ 给他的同事，希望自己避免惩罚。",
        answers: [
            { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "impute", chinese_answer: "归咎于", chinese_romanization: "guījiù yú" },
            { option: "D", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impute' means to attribute (something, especially something bad) to someone." +
            "<br><br>" +
            "(A) 'deny' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(B) 'accept' means consent to receive (a thing offered)." +
            "<br><br>" +
            "(D) 'acknowledge' means accept or admit the existence or truth of.",
        chinese_explanation: "(C) '归咎于' 一词意味着将（尤其是不好的事情）归因于某人。" +
            "<br><br>" +
            "(A) '否认' 意味着声明拒绝承认事实或存在。" +
            "<br><br>" +
            "(B) '接受' 意味着同意接收（提供的东西）。" +
            "<br><br>" +
            "(D) '承认' 意味着接受或承认存在或真实性。"
    },
    {
        id: 3,
        question: "The lawyer presented several pieces of evidence to __________ his client's innocence in court.",
        chinese_question: "律师提出了几份证据来 __________ 他在法庭上为当事人辩护的无罪。",
        answers: [
            { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "substantiate", chinese_answer: "证实", chinese_romanization: "zhèngshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'substantiate' means provide evidence to support or prove the truth of." +
            "<br><br>" +
            "(A) 'deny' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(B) 'dismiss' means order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'refute' means prove (a statement or theory) to be wrong or false; disprove.",
        chinese_explanation: "(D) '证实' 一词意味着提供证据以支持或证明真实性。" +
            "<br><br>" +
            "(A) '否认' 意味着声明拒绝承认事实或存在。" +
            "<br><br>" +
            "(B) '驳回' 意味着命令或允许离开；遣散。" +
            "<br><br>" +
            "(C) '反驳' 意味着证明（某陈述或理论）是错误或虚假的；反驳。"
    },
    {
        id: 4,
        question: "The government attempted to __________ the protests by imposing strict curfews and arresting the leaders.",
        chinese_question: "政府试图通过实施严格的宵禁和逮捕领导人来 __________ 抗议活动。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "suppress", chinese_answer: "镇压", chinese_romanization: "zhènyā" },
            { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "D", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(A) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(C) 'promote' means further the progress of (something, especially a cause, venture, or aim); support or actively encourage." +
            "<br><br>" +
            "(D) 'amplify' means increase the volume of (sound), especially using an amplifier.",
        chinese_explanation: "(B) '镇压' 一词意味着强行结束。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给予支持、信心或希望（某人）。" +
            "<br><br>" +
            "(C) '促进' 意味着推进（某事物，尤其是事业、企业或目标）；支持或积极鼓励。" +
            "<br><br>" +
            "(D) '放大' 意味着增加（声音）的音量，尤其是使用放大器。"
    },
    {
        id: 5,
        question: "The evidence presented in court helped to __________ her, proving she was innocent of all charges.",
        chinese_question: "法庭上提交的证据帮助 __________ 了她，证明她无罪。",
        answers: [
            { option: "A", answer: "vindicate", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "B", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "C", answer: "blame", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "D", answer: "incriminate", chinese_answer: "使……有罪", chinese_romanization: "shǐ ... yǒu zuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vindicate' means clear (someone) of blame or suspicion." +
            "<br><br>" +
            "(B) 'accuse' means charge (someone) with an offense or crime." +
            "<br><br>" +
            "(C) 'blame' means assign responsibility for a fault or wrong." +
            "<br><br>" +
            "(D) 'incriminate' means make (someone) appear guilty of a crime or wrongdoing.",
        chinese_explanation: "(A) '辩护' 一词意味着清除（某人）的责任或嫌疑。" +
            "<br><br>" +
            "(B) '指控' 意味着指责（某人）犯有罪行或错误。" +
            "<br><br>" +
            "(C) '责备' 意味着将过错或错误归咎于某人。" +
            "<br><br>" +
            "(D) '使……有罪' 意味着使（某人）显得有罪或犯有不当行为。"
    },
    {
        id: 6,
        question: "The spokesperson was able to __________ the company's position on the issue clearly and effectively during the press conference.",
        chinese_question: "发言人能够在新闻发布会上清晰有效地 __________ 公司在这个问题上的立场。",
        answers: [
            { option: "A", answer: "mumble", chinese_answer: "含糊其辞", chinese_romanization: "hánhú qí cí" },
            { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "articulate", chinese_answer: "清楚表达", chinese_romanization: "qīngchǔ biǎodá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'articulate' means having or showing the ability to speak fluently and coherently." +
            "<br><br>" +
            "(A) 'mumble' means say something indistinctly and quietly, making it difficult for others to hear." +
            "<br><br>" +
            "(B) 'whisper' means speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed.",
        chinese_explanation: "(D) '清楚表达' 一词意味着有或表现出流利和连贯地说话的能力。" +
            "<br><br>" +
            "(A) '含糊其辞' 意味着不清楚和安静地说某事，使其他人难以听到。" +
            "<br><br>" +
            "(B) '低语' 意味着用非常轻的声音说话，特别是为了保密。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）困惑或迷惑。"
    },
    {
        id: 7,
        question: "The experiment's results helped to __________ the hypothesis, providing strong evidence in support of the theory.",
        chinese_question: "实验结果有助于 __________ 假设，提供了有力的证据支持该理论。",
        answers: [
            { option: "A", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "B", answer: "invalidate", chinese_answer: "否定", chinese_romanization: "fǒudìng" },
            { option: "C", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
            { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'validate' means check or prove the validity or accuracy of (something)." +
            "<br><br>" +
            "(B) 'invalidate' means make (an argument, statement, or theory) unsound or erroneous." +
            "<br><br>" +
            "(C) 'question' means ask questions of someone, especially in an official context." +
            "<br><br>" +
            "(D) 'refute' means prove (a statement or theory) to be wrong or false; disprove.",
        chinese_explanation: "(A) '验证' 一词意味着检查或证明（某物）的有效性或准确性。" +
            "<br><br>" +
            "(B) '否定' 意味着使（论点、陈述或理论）站不住脚或错误。" +
            "<br><br>" +
            "(C) '质疑' 意味着对某人提出问题，尤其是在正式情况下。" +
            "<br><br>" +
            "(D) '反驳' 意味着证明（陈述或理论）是错误的；反驳。"
    },
    {
        id: 8,
        question: "To __________ her income, she took on a part-time job in the evenings.",
        chinese_question: "为了 __________ 她的收入，她晚上兼职工作。",
        answers: [
            { option: "A", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "augment", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "D", answer: "diminish", chinese_answer: "减小", chinese_romanization: "jiǎnxiǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'augment' means make (something) greater by adding to it; increase." +
            "<br><br>" +
            "(A) 'reduce' means make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(C) 'deplete' means use up the supply or resources of." +
            "<br><br>" +
            "(D) 'diminish' means make or become less.",
        chinese_explanation: "(B) '增加' 一词意味着通过添加使（某物）变得更大；增加。" +
            "<br><br>" +
            "(A) '减少' 意味着在数量、程度或大小上变小。" +
            "<br><br>" +
            "(C) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(D) '减小' 意味着使变得更少。"
    },
    {
        id: 9,
        question: "The government launched a campaign to __________ the invasive species that was threatening local wildlife.",
        chinese_question: "政府发起了一场运动，旨在 __________ 威胁当地野生动植物的入侵物种。",
        answers: [
            { option: "A", answer: "plant", chinese_answer: "种植", chinese_romanization: "zhòngzhí" },
            { option: "B", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
            { option: "C", answer: "eradicate", chinese_answer: "根除", chinese_romanization: "gēnchú" },
            { option: "D", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'eradicate' means destroy completely; put an end to." +
            "<br><br>" +
            "(A) 'plant' means place (a seed, bulb, or plant) in the ground so that it can grow." +
            "<br><br>" +
            "(B) 'nurture' means care for and encourage the growth or development of." +
            "<br><br>" +
            "(D) 'preserve' means maintain (something) in its original or existing state.",
        chinese_explanation: "(C) '根除' 一词意味着彻底摧毁；结束。" +
            "<br><br>" +
            "(A) '种植' 意味着将（种子、球茎或植物）放入土壤中以便生长。" +
            "<br><br>" +
            "(B) '培育' 意味着照顾和促进生长或发展。" +
            "<br><br>" +
            "(D) '保护' 意味着维持（某物）在其原始或现有状态。"
    },
    {
        id: 10,
        question: "The argument over money began to __________ the two friends, leading to a breakdown in their relationship.",
        chinese_question: "关于金钱的争论开始 __________ 这两位朋友，导致他们的关系破裂。",
        answers: [
            { option: "A", answer: "unite", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "B", answer: "bond", chinese_answer: "结合", chinese_romanization: "jiéhé" },
            { option: "C", answer: "reconcile", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "D", answer: "estrange", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'estrange' means cause (someone) to be no longer close or affectionate to someone; alienate." +
            "<br><br>" +
            "(A) 'unite' means come or bring together for a common purpose or action." +
            "<br><br>" +
            "(B) 'bond' means join or be joined securely to something else, especially by means of an adhesive substance, heat, or pressure." +
            "<br><br>" +
            "(C) 'reconcile' means restore friendly relations between.",
        chinese_explanation: "(D) '疏远' 一词意味着使（某人）不再亲密或情感上亲近；疏远。" +
            "<br><br>" +
            "(A) '团结' 意味着为了共同的目的或行动而联合或聚集。" +
            "<br><br>" +
            "(B) '结合' 意味着与其他东西牢固地连接，特别是通过粘合剂、热或压力。" +
            "<br><br>" +
            "(C) '和解' 意味着恢复友好关系。"
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
