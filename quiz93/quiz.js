// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company hoped that the new training program would __________ employee performance, leading to higher productivity and satisfaction.",
        chinese_question: "公司希望新的培训计划能够 __________ 员工的表现，从而提高生产力和满意度。",
        answers: [
            { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "ameliorate", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "damage", chinese_answer: "损害", chinese_romanization: "sǔnhài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ameliorate' means to make something better or improve." +
            "<br><br>" +
            "(A) 'hinder' means create difficulties for someone or something, resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'damage' means cause physical harm to something.",
        chinese_explanation: "(B) '改善' 一词意味着使某事变得更好或改进。" +
            "<br><br>" +
            "(A) '阻碍' 意味着给某人或某物制造困难，导致延迟或阻碍。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '损害' 意味着对某物造成物理伤害。"
    },
    {
        id: 2,
        question: "The regime attempted to __________ the young students with its political ideology, ensuring they followed its principles unquestioningly.",
        chinese_question: "政权试图 __________ 年轻学生，使他们接受其政治意识形态，并确保他们毫不质疑地遵循其原则。",
        answers: [
            { option: "A", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "B", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
            { option: "C", answer: "enlighten", chinese_answer: "启迪", chinese_romanization: "qǐdí" },
            { option: "D", answer: "indoctrinate", chinese_answer: "灌输", chinese_romanization: "guànshū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'indoctrinate' means to teach (a person or group) to accept a set of beliefs uncritically." +
            "<br><br>" +
            "(A) 'entertain' means provide someone with amusement or enjoyment." +
            "<br><br>" +
            "(B) 'amuse' means cause someone to find something funny." +
            "<br><br>" +
            "(C) 'enlighten' means give someone greater knowledge and understanding about a subject or situation.",
        chinese_explanation: "(D) '灌输' 一词意味着教（某人或某群体）无条件地接受一套信念。" +
            "<br><br>" +
            "(A) '娱乐' 意味着提供某人以娱乐或享受。" +
            "<br><br>" +
            "(B) '逗乐' 意味着使某人觉得某事有趣。" +
            "<br><br>" +
            "(C) '启迪' 意味着给予某人关于某个主题或情况的更多知识和理解。"
    },
    {
        id: 3,
        question: "The lawyer worked tirelessly to __________ her client, presenting evidence that proved his innocence.",
        chinese_question: "律师不懈努力 __________ 她的客户，提供了证明他无罪的证据。",
        answers: [
            { option: "A", answer: "accuse", chinese_answer: "指责", chinese_romanization: "zhǐzé" },
            { option: "B", answer: "vindicate", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "C", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "blame", chinese_answer: "责备", chinese_romanization: "zébèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vindicate' means to clear someone of blame or suspicion." +
            "<br><br>" +
            "(A) 'accuse' means claim that someone has done something wrong." +
            "<br><br>" +
            "(C) 'condemn' means express complete disapproval of, typically in public." +
            "<br><br>" +
            "(D) 'blame' means assign responsibility for a fault or wrong.",
        chinese_explanation: "(B) '辩护' 一词意味着清除某人的责备或怀疑。" +
            "<br><br>" +
            "(A) '指责' 意味着声称某人做错了事。" +
            "<br><br>" +
            "(C) '谴责' 意味着公开表达完全不赞成。" +
            "<br><br>" +
            "(D) '责备' 意味着分配责任。"
    },
    {
        id: 4,
        question: "The government decided to __________ the suspect's visa after discovering forged documents.",
        chinese_question: "政府在发现伪造文件后决定 __________ 嫌疑人的签证。",
        answers: [
            { option: "A", answer: "issue", chinese_answer: "发放", chinese_romanization: "fāfàng" },
            { option: "B", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" },
            { option: "C", answer: "revoke", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
            { option: "D", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'revoke' means to put an end to the validity or operation of a decree, decision, or promise." +
            "<br><br>" +
            "(A) 'issue' means supply or distribute something for use or sale." +
            "<br><br>" +
            "(B) 'extend' means cause to cover a larger area; make longer or wider." +
            "<br><br>" +
            "(D) 'approve' means officially agree to or accept as satisfactory.",
        chinese_explanation: "(C) '撤销' 一词意味着终止法令、决定或承诺的有效性或操作。" +
            "<br><br>" +
            "(A) '发放' 意味着提供或分发某物以供使用或销售。" +
            "<br><br>" +
            "(B) '延长' 意味着使覆盖更大区域；变得更长或更宽。" +
            "<br><br>" +
            "(D) '批准' 意味着正式同意或接受为令人满意的。"
    },
    {
        id: 5,
        question: "They needed to __________ a better deal with the supplier to reduce costs and improve profitability.",
        chinese_question: "他们需要 __________ 与供应商达成更好的交易，以降低成本并提高盈利能力。",
        answers: [
            { option: "A", answer: "negotiate", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'negotiate' means obtain or bring about by discussion." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'accept' means consent to receive a thing offered." +
            "<br><br>" +
            "(D) 'surrender' means cease resistance to an enemy or opponent and submit to their authority.",
        chinese_explanation: "(A) '谈判' 一词意味着通过讨论获得或实现。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；有意忽视。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接收提供的东西。" +
            "<br><br>" +
            "(D) '投降' 意味着停止抵抗敌人或对手并服从其权威。"
    },
    {
        id: 6,
        question: "Facing overwhelming odds, the general had no choice but to __________, surrendering his forces to the enemy.",
        chinese_question: "面对压倒性的困难，将军别无选择，只能 __________，向敌人投降。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "fight", chinese_answer: "战斗", chinese_romanization: "zhàndòu" },
            { option: "C", answer: "defend", chinese_answer: "防守", chinese_romanization: "fángshǒu" },
            { option: "D", answer: "capitulate", chinese_answer: "投降", chinese_romanization: "tóuxiáng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'capitulate' means cease to resist an opponent or an unwelcome demand; surrender." +
            "<br><br>" +
            "(A) 'resist' means withstand the action or effect of." +
            "<br><br>" +
            "(B) 'fight' means take part in a violent struggle involving the exchange of physical blows or the use of weapons." +
            "<br><br>" +
            "(C) 'defend' means resist an attack made on (someone or something); protect from harm or danger.",
        chinese_explanation: "(D) '投降' 一词意味着停止抵抗对手或不受欢迎的要求；投降。" +
            "<br><br>" +
            "(A) '抵抗' 意味着抵御某种行为或影响。" +
            "<br><br>" +
            "(B) '战斗' 意味着参加涉及物理打击或使用武器的暴力斗争。" +
            "<br><br>" +
            "(C) '防守' 意味着抵御对（某人或某物）的攻击；保护免受伤害或危险。"
    },
    {
        id: 7,
        question: "The horror movie was intended to __________ audiences with its gruesome and shocking scenes.",
        chinese_question: "这部恐怖电影旨在通过其令人毛骨悚然和震惊的场景来 __________ 观众。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "appall", chinese_answer: "惊骇", chinese_romanization: "jīnghài" },
            { option: "C", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
            { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'appall' means greatly dismay or horrify." +
            "<br><br>" +
            "(A) 'delight' means please someone greatly." +
            "<br><br>" +
            "(C) 'amuse' means cause someone to find something funny." +
            "<br><br>" +
            "(D) 'entertain' means provide someone with amusement or enjoyment.",
        chinese_explanation: "(B) '惊骇' 一词意味着极度惊恐或吓坏。" +
            "<br><br>" +
            "(A) '高兴' 意味着让某人大为高兴。" +
            "<br><br>" +
            "(C) '逗乐' 意味着使某人觉得某事有趣。" +
            "<br><br>" +
            "(D) '娱乐' 意味着提供某人以娱乐或享受。"
    },
    {
        id: 8,
        question: "The hotel staff did their best to __________ the needs of all the guests, ensuring a comfortable stay for everyone.",
        chinese_question: "酒店工作人员尽最大努力 __________ 所有客人的需求，确保每个人都能舒适地入住。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "accommodate", chinese_answer: "适应", chinese_romanization: "shìyìng" },
            { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "refuse", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accommodate' means to provide lodging or sufficient space for." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'refuse' means indicate or show that one is not willing to do something.",
        chinese_explanation: "(B) '适应' 一词意味着提供住宿或足够的空间。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '拒绝' 意味着表示或表明不愿意做某事。"
    },
    {
        id: 9,
        question: "The legal agreement specified that either party could __________ the contract with a 30-day notice.",
        chinese_question: "法律协议规定，任何一方可以提前30天通知 __________ 合同。",
        answers: [
            { option: "A", answer: "sign", chinese_answer: "签署", chinese_romanization: "qiānshǔ" },
            { option: "B", answer: "negotiate", chinese_answer: "协商", chinese_romanization: "xiéshāng" },
            { option: "C", answer: "contract", chinese_answer: "合同", chinese_romanization: "hétóng" },
            { option: "D", answer: "terminate", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'terminate' means bring to an end." +
            "<br><br>" +
            "(A) 'sign' means write one's name on (a letter, card, or similar item) to identify oneself as the writer or sender." +
            "<br><br>" +
            "(B) 'negotiate' means try to reach an agreement or compromise by discussion with others." +
            "<br><br>" +
            "(C) 'contract' means a written or spoken agreement, especially one concerning employment, sales, or tenancy, that is intended to be enforceable by law.",
        chinese_explanation: "(D) '终止' 一词意味着结束。" +
            "<br><br>" +
            "(A) '签署' 意味着在（信件、卡片或类似物品）上写上自己的名字，以表明自己是作者或发送者。" +
            "<br><br>" +
            "(B) '协商' 意味着通过与他人讨论试图达成协议或妥协。" +
            "<br><br>" +
            "(C) '合同' 意味着书面或口头协议，尤其是涉及就业、销售或租赁的协议，旨在具有法律约束力。"
    },
    {
        id: 10,
        question: "After hearing about her loss, he called to __________ with her, offering his support and condolences.",
        chinese_question: "听到她的失去后，他打电话来 __________ 她，表达他的支持和慰问。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'commiserate' means express or feel sympathy or pity; sympathize." +
            "<br><br>" +
            "(A) 'celebrate' means acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'criticize' means indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(B) '同情' 一词意味着表达或感受到同情或怜悯；同情。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认重要或愉快的日子或事件。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
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
