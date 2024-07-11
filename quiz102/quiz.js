// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "If the budget cuts are approved, significant layoffs might __________.",
        chinese_question: "如果预算削减得到批准，可能会 __________ 大量裁员。",
        answers: [
            { option: "A", answer: "ensue", chinese_answer: "随之发生", chinese_romanization: "suí zhī fāshēng" },
            { option: "B", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "reverse", chinese_answer: "逆转", chinese_romanization: "nìzhuǎn" },
            { option: "D", answer: "lessen", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ensue' metaphorically means to follow as a consequence or result." + 
            "<br><br>" + 
            "(B) 'halt' means bring or come to an abrupt stop." + 
            "<br><br>" + 
            "(C) 'reverse' means move backward." + 
            "<br><br>" + 
            "(D) 'lessen' means make or become less; diminish.",
        chinese_explanation: "(A) '随之发生' 比喻作为后果或结果发生。" + 
            "<br><br>" + 
            "(B) '停止' 意味着突然停止或使停止。" + 
            "<br><br>" + 
            "(C) '逆转' 意味着倒退。" + 
            "<br><br>" + 
            "(D) '减少' 意味着使或变得更少；减少。"
    },
    {
        id: 2,
        question: "The gripping novel __________ her, making her lose track of time.",
        chinese_question: "这本扣人心弦的小说 __________ 了她，让她忘记了时间。",
        answers: [
            { option: "A", answer: "enthralled", chinese_answer: "吸引住", chinese_romanization: "xīyǐn zhù" },
            { option: "B", answer: "distracted", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "C", answer: "annoyed", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
            { option: "D", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthralled' metaphorically means to capture one's full attention and interest." +
            "<br><br>" +
            "(B) 'distracted' means prevent (someone) from giving full attention to something." +
            "<br><br>" +
            "(C) 'annoyed' means slightly angry; irritated." +
            "<br><br>" +
            "(D) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.",
        chinese_explanation: "(A) '吸引住' 比喻抓住一个人的全部注意力和兴趣。" +
            "<br><br>" +
            "(B) '分心' 意味着防止（某人）全神贯注于某事。" +
            "<br><br>" +
            "(C) '恼怒' 意味着有点生气；恼怒的。" +
            "<br><br>" +
            "(D) '无聊' 意味着感到厌倦和不耐烦，因为一个人没有被占用或对当前的活动缺乏兴趣。"
    },
    {
        id: 3,
        question: "She decided to __________ with her mentor before accepting the job offer.",
        chinese_question: "她决定在接受工作邀请之前__________她的导师。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "consult", chinese_answer: "咨询", chinese_romanization: "zīxún" },
            { option: "C", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consult' means to seek information or advice from (someone with expertise in a particular area). Figuratively, it can mean to discuss or consider with someone before making a decision." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '咨询' 意味着向某个特定领域有专业知识的人寻求信息或建议。比喻地，它可以表示在做决定之前与某人讨论或考虑。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '解雇' 意味着命令或允许离开；解散。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 4,
        question: "She would __________ every book she could get her hands on, always eager to learn more.",
        chinese_question: "她会 __________ 能够拿到的每一本书，总是渴望学习更多。",
        answers: [
            { option: "A", answer: "devour", chinese_answer: "如饥似渴地阅读", chinese_romanization: "rú jī sì kě de yuèdú" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "skim", chinese_answer: "略读", chinese_romanization: "lüèdú" },
            { option: "D", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devour' metaphorically means to read eagerly and quickly." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'skim' means read (something) quickly or cursorily so as to note only the important points." +
            "<br><br>" +
            "(D) 'discard' means get rid of (someone or something) as no longer useful or desirable.",
        chinese_explanation: "(A) '如饥似渴地阅读' 比喻急切而快速地阅读。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(C) '略读' 意味着快速或粗略地阅读（某物），以便仅注意重要要点。" +
            "<br><br>" +
            "(D) '丢弃' 意味着将（某人或某物）视为不再有用或不再需要而丢弃。"
    },
    {
        id: 5,
        question: "In her letter, she __________ the organization to provide more support for the needy.",
        chinese_question: "在她的信中，她__________该组织提供更多支持给有需要的人。",
        answers: [
            { option: "A", answer: "demanded", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "B", answer: "implored", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "ordered", chinese_answer: "命令", chinese_romanization: "mìnglìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'implored' means to beg someone earnestly or desperately to do something. Figuratively, it can mean to earnestly request or plead." +
            "<br><br>" +
            "(A) 'demanded' means to ask for something authoritatively or brusquely." +
            "<br><br>" +
            "(C) 'ignored' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'ordered' means to give an authoritative direction or instruction to do something.",
        chinese_explanation: "(B) '恳求' 意味着恳切或绝望地请求某人做某事。比喻地，它可以表示恳切地请求或恳求。" +
            "<br><br>" +
            "(A) '要求' 意味着权威地或粗鲁地要求某事。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '命令' 意味着给出一个权威的指示或指令去做某事。"
    },
    {
        id: 6,
        question: "The unfair treatment she received from her boss continued to __________ her.",
        chinese_question: "她从老板那里受到的不公平待遇继续让她__________。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "please", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "infuriate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infuriate' means to make (someone) extremely angry and impatient. Figuratively, it can mean causing great frustration or anger." + 
            "<br><br>" + 
            "(A) 'calm' means make (someone) tranquil and quiet; soothe." + 
            "<br><br>" + 
            "(B) 'please' means cause to feel happy and satisfied." + 
            "<br><br>" + 
            "(D) 'relax' means make or become less tense or anxious.",
        chinese_explanation: "(C) '激怒'一词意味着使（某人）极其愤怒和不耐烦。比喻地，它可以表示引起极大的挫败感或愤怒。" + 
            "<br><br>" + 
            "(A) '平静' 意味着使（某人）安静和平静；使镇静。" + 
            "<br><br>" + 
            "(B) '高兴' 意味着使感到快乐和满意。" + 
            "<br><br>" + 
            "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 7,
        question: "The authoritarian regime __________ any form of political dissent, punishing those who spoke out.",
        chinese_question: "威权政权 __________ 任何形式的政治异议，惩罚那些发表意见的人。",
        answers: [
            { option: "A", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "D", answer: "proscribe", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'proscribe' means to forbid, especially by law." +
            "<br><br>" +
            "(A) 'allow' means to give permission for something to happen." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'promote' means to advance or raise to a higher position or rank.",
        chinese_explanation: "(D) '禁止' 意思是特别是通过法律来禁止。" +
            "<br><br>" +
            "(A) '允许' 意思是给予许可使某事发生。" +
            "<br><br>" +
            "(B) '支持' 意思是承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '促进' 意思是提升或晋升到更高的职位或等级。"
    },
    {
        id: 8,
        question: "He began to __________ knowledge in his field through years of research and study.",
        chinese_question: "通过多年的研究和学习，他开始在自己的领域__________知识。",
        answers: [
            { option: "A", answer: "spend", chinese_answer: "花费", chinese_romanization: "huāfèi" },
            { option: "B", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "C", answer: "accumulate", chinese_answer: "积累", chinese_romanization: "jīlěi" },
            { option: "D", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accumulate' means gather together or acquire an increasing number or quantity of. Figuratively, it can mean gaining knowledge or experience over time." + 
            "<br><br>" + 
            "(A) 'spend' means pay out (money) in buying or hiring goods or services." + 
            "<br><br>" + 
            "(B) 'waste' means use or expend carelessly, extravagantly, or to no purpose." + 
            "<br><br>" + 
            "(D) 'lose' means be deprived of or cease to have or retain (something).",
        chinese_explanation: "(C) '积累'一词意味着聚集或获得越来越多的数量。比喻地，它可以表示随着时间的推移获得知识或经验。" + 
            "<br><br>" + 
            "(A) '花费' 意味着花费（金钱）购买或雇佣商品或服务。" + 
            "<br><br>" + 
            "(B) '浪费' 意味着不加节制地、奢侈地或无目的地使用或消耗。" + 
            "<br><br>" + 
            "(D) '失去' 意味着被剥夺或不再拥有或保留（某物）。"
    },
    {
        id: 9,
        question: "He continued to __________ to his principles despite the pressure to conform.",
        chinese_question: "尽管有压力要求顺从，他仍然坚持自己的原则。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "break", chinese_answer: "违反", chinese_romanization: "wěifǎn" },
            { option: "C", answer: "adhere", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adhere' means stick fast to (a surface or substance). Figuratively, it can mean remaining loyal or committed to a belief or principle." + 
            "<br><br>" + 
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." + 
            "<br><br>" + 
            "(B) 'break' means separate or cause to separate into pieces as a result of a blow, shock, or strain." + 
            "<br><br>" + 
            "(D) 'oppose' means disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(C) '遵守'一词意味着紧贴（表面或物质）。比喻地，它可以表示对信仰或原则保持忠诚或坚持。" + 
            "<br><br>" + 
            "(A) '忽视' 意味着拒绝注意或承认；故意忽略。" + 
            "<br><br>" + 
            "(B) '违反' 意味着由于打击、震动或应力而分离或导致分离成碎片。" + 
            "<br><br>" + 
            "(D) '反对' 意味着不赞成并试图阻止，尤其是通过争论。"
    },
    {
        id: 10,
        question: "He asked his friend to __________ him for the misunderstanding.",
        chinese_question: "他请求朋友 __________ 他对误会的原谅。",
        answers: [
            { option: "A", answer: "pardon", chinese_answer: "原谅", chinese_romanization: "yuánliàng" },
            { option: "B", answer: "blame", chinese_answer: "责怪", chinese_romanization: "zéguài" },
            { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pardon' metaphorically means to forgive." + 
            "<br><br>" + 
            "(B) 'blame' means assign responsibility for a fault or wrong." + 
            "<br><br>" + 
            "(C) 'criticize' means indicate the faults of (someone or something) in a disapproving way." + 
            "<br><br>" + 
            "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(A) '原谅' 比喻原谅。" + 
            "<br><br>" + 
            "(B) '责怪' 意味着对错误或过失负责。" + 
            "<br><br>" + 
            "(C) '批评' 意味着以不赞成的方式指出（某人或某事）的错误。" + 
            "<br><br>" + 
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
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
