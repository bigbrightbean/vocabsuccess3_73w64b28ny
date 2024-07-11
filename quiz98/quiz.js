// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist's findings __________ the initial hypothesis, proving it to be correct.",
        chinese_question: "科学家的发现 __________ 了最初的假设，证明它是正确的。",
        answers: [
            { option: "A", answer: "refuted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "B", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "confirmed", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
            { option: "D", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhíyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'confirmed' means establish the truth or correctness of (something previously believed, suspected, or feared to be the case)." +
            "<br><br>" +
            "(A) 'refuted' means prove (a statement or theory) to be wrong or false; disprove." +
            "<br><br>" +
            "(B) 'denied' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'questioned' means ask questions of (someone), especially in an official context.",
        chinese_explanation: "(C) '证实' 一词意味着确定（以前被认为、怀疑或担心的情况）的真实性或正确性。" +
            "<br><br>" +
            "(A) '反驳' 意味着证明（某个陈述或理论）是错误的；驳斥。" +
            "<br><br>" +
            "(B) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '质疑' 意味着在正式场合对（某人）提出问题。"
    },
    {
        id: 2,
        question: "He decided to __________ his claim to the inheritance, allowing his siblings to share it equally.",
        chinese_question: "他决定 __________ 对遗产的要求，让他的兄弟姐妹平分。",
        answers: [
            { option: "A", answer: "seize", chinese_answer: "抓住", chinese_romanization: "zhuāzhù" },
            { option: "B", answer: "assert", chinese_answer: "断言", chinese_romanization: "duànyán" },
            { option: "C", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "D", answer: "relinquish", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'relinquish' means voluntarily cease to keep or claim; give up." +
            "<br><br>" +
            "(A) 'seize' means take hold of suddenly and forcibly." +
            "<br><br>" +
            "(B) 'assert' means state a fact or belief confidently and forcefully." +
            "<br><br>" +
            "(C) 'demand' means ask authoritatively or brusquely.",
        chinese_explanation: "(D) '放弃' 一词意味着自愿停止保留或要求；放弃。" +
            "<br><br>" +
            "(A) '抓住' 意味着突然和强行抓住。" +
            "<br><br>" +
            "(B) '断言' 意味着自信且强行地陈述一个事实或信仰。" +
            "<br><br>" +
            "(C) '要求' 意味着权威或唐突地要求。"
    },
    {
        id: 3,
        question: "To __________ the authenticity of the document, the lawyer compared it to the original copy.",
        chinese_question: "为了 __________ 文件的真实性，律师将其与原件进行了比较。",
        answers: [
            { option: "A", answer: "invalidate", chinese_answer: "使无效", chinese_romanization: "shǐ wúxiào" },
            { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'validate' means check or prove the validity or accuracy of something." +
            "<br><br>" +
            "(A) 'invalidate' means make or prove (an argument, statement, or theory) unsound or erroneous." +
            "<br><br>" +
            "(B) 'doubt' means feel uncertain about." +
            "<br><br>" +
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(C) '验证' 一词意味着检查或证明某物的有效性或准确性。" +
            "<br><br>" +
            "(A) '使无效' 意味着使（论点、陈述或理论）无效或证明其错误。" +
            "<br><br>" +
            "(B) '怀疑' 意味着感到不确定。" +
            "<br><br>" +
            "(D) '拒绝' 意味着认为不合格、不接受或有缺陷而予以驳回。"
    },
    {
        id: 4,
        question: "Her detailed report helped to __________ a clear picture of the project's current status for the entire team.",
        chinese_question: "她的详细报告帮助整个团队 __________ 了项目当前状态的清晰图景。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "B", answer: "furnish", chinese_answer: "提供", chinese_romanization: "tígōng" },
            { option: "C", answer: "confuse", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'furnish' figuratively means to provide or supply with information or details." +
            "<br><br>" +
            "(A) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'simplify' means make (something) simpler or easier to do or understand.",
        chinese_explanation: "(B) '提供' 在比喻意义上意味着提供或供应信息或细节。" +
            "<br><br>" +
            "(A) '模糊' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(C) '困惑' 意味着使（某人）困惑或迷惑。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某事）更简单或更容易做或理解。"
    },
    {
        id: 5,
        question: "She would often __________ through the pages of a magazine while waiting for her appointment.",
        chinese_question: "她经常在等待预约时 __________ 杂志的页面。",
        answers: [
            { option: "A", answer: "devour", chinese_answer: "吞噬", chinese_romanization: "tūnshì" },
            { option: "B", answer: "read", chinese_answer: "阅读", chinese_romanization: "yuèdú" },
            { option: "C", answer: "graze", chinese_answer: "浏览", chinese_romanization: "liúlǎn" },
            { option: "D", answer: "focus", chinese_answer: "集中", chinese_romanization: "jízhōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'graze' figuratively means to glance or browse through reading material." +
            "<br><br>" +
            "(A) 'devour' means read quickly and eagerly." +
            "<br><br>" +
            "(B) 'read' means look at and comprehend the meaning of written or printed matter by interpreting the characters or symbols of which it is composed." +
            "<br><br>" +
            "(D) 'focus' means pay particular attention to.",
        chinese_explanation: "(C) '浏览' 在比喻意义上意味着快速浏览阅读材料。" +
            "<br><br>" +
            "(A) '吞噬' 意味着快速且热切地阅读。" +
            "<br><br>" +
            "(B) '阅读' 意味着通过解释其组成的字符或符号来理解书写或印刷材料的含义。" +
            "<br><br>" +
            "(D) '集中' 意味着特别关注。"
    },
    {
        id: 6,
        question: "She found it hard to __________ her desire for chocolate when she was on a diet.",
        chinese_question: "她发现很难在节食时 __________ 对巧克力的渴望。",
        answers: [
            { option: "A", answer: "satisfy", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "B", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "C", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "resist", chinese_answer: "抵制", chinese_romanization: "dǐzhì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'resist' means withstand the action or effect of." +
            "<br><br>" +
            "(A) 'satisfy' means meet the expectations, needs, or desires of (someone)." +
            "<br><br>" +
            "(B) 'indulge' means allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(C) 'oppose' means disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(D) '抵制' 意味着承受某事物的作用或影响。" +
            "<br><br>" +
            "(A) '满足' 意味着满足（某人的）期望、需求或愿望。" +
            "<br><br>" +
            "(B) '放纵' 意味着让自己享受的乐趣。" +
            "<br><br>" +
            "(C) '反对' 意味着不赞成并试图阻止，特别是通过辩论。"
    },
    {
        id: 7,
        question: "He tried to __________ himself by working harder after realizing his mistakes in the project.",
        chinese_question: "在意识到项目中的错误后，他试图通过更加努力工作来 __________ 自己。",
        answers: [
            { option: "A", answer: "fail", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "redeem", chinese_answer: "挽回", chinese_romanization: "wǎnhuí" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'redeem' figuratively means to make up for past errors or sins." +
            "<br><br>" +
            "(A) 'fail' means be unsuccessful in achieving one's goal." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(C) '挽回' 在比喻意义上意味着弥补过去的错误或罪过。" +
            "<br><br>" +
            "(A) '失败' 意味着未能实现目标。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 8,
        question: "The mastermind was arrested for trying to __________ the criminals by providing them with inside information.",
        chinese_question: "主谋因试图通过提供内部信息来 __________ 罪犯而被捕。",
        answers: [
            { option: "A", answer: "abet", chinese_answer: "教唆", chinese_romanization: "jiàosuō" },
            { option: "B", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'abet' means encourage or assist (someone) to do something wrong, in particular to commit a crime." +
            "<br><br>" +
            "(B) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(D) 'discourage' means cause (someone) to lose confidence or enthusiasm.",
        chinese_explanation: "(A) '教唆' 一词意味着鼓励或协助（某人）做错事，特别是犯罪。" +
            "<br><br>" +
            "(B) '阻碍' 意味着为（某人或某事）制造困难，导致延迟或阻碍。" +
            "<br><br>" +
            "(C) '反对' 意味着不赞成并试图阻止，特别是通过辩论。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使（某人）失去信心或热情。"
    },
    {
        id: 9,
        question: "The sudden noise outside the window seemed to __________ her from her studies.",
        chinese_question: "窗外的突如其来的噪音似乎 __________ 了她的学习。",
        answers: [
            { option: "A", answer: "assail", chinese_answer: "袭击", chinese_romanization: "xíjī" },
            { option: "B", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assail' means make a concerted or violent attack on." +
            "<br><br>" +
            "(B) 'soothe' means gently calm (a person or their feelings)." +
            "<br><br>" +
            "(C) 'assist' means help (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(D) 'comfort' means ease the grief or distress of; console.",
        chinese_explanation: "(A) '袭击' 一词意味着进行集中或暴力攻击。" +
            "<br><br>" +
            "(B) '抚慰' 意味着轻轻地安抚（一个人或他们的感情）。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助（某人），通常是分担部分工作。" +
            "<br><br>" +
            "(D) '安慰' 意味着缓解悲伤或痛苦；安慰。"
    },
    {
        id: 10,
        question: "She had to quickly __________ to the new working environment when she moved to a different department.",
        chinese_question: "她调到不同部门后必须迅速 __________ 新的工作环境。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "adapt", chinese_answer: "适应", chinese_romanization: "shìyìng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adapt' means make (something) suitable for a new use or purpose; modify." +
            "<br><br>" +
            "(A) 'resist' means withstand the action or effect of." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(B) '适应' 一词意味着使（某事物）适合新的用途或目的；修改。" +
            "<br><br>" +
            "(A) '抵抗' 意味着承受（某事物）的作用或影响。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '拒绝' 意味着认为不合格、不接受或有缺陷而予以驳回。"
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
