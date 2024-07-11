// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After losing his job and going through a divorce, he felt his life was in complete __________, struggling to find stability.",
        chinese_question: "在失业和离婚之后，他觉得自己的生活完全陷入了 __________，努力寻找稳定。",
        answers: [
            { option: "A", answer: "misalignment", chinese_answer: "不对齐", chinese_romanization: "bù duì qí" },
            { option: "B", answer: "alignment", chinese_answer: "对齐", chinese_romanization: "duì qí" },
            { option: "C", answer: "chaos", chinese_answer: "混沌", chinese_romanization: "hùndùn" },
            { option: "D", answer: "disarray", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disarray' means a state of disorganization or untidiness." +
            "<br><br>" +
            "(A) 'misalignment' means the incorrect arrangement or positioning of something." +
            "<br><br>" +
            "(B) 'alignment' means arrangement in a straight line or in correct relative positions." +
            "<br><br>" +
            "(C) 'chaos' means complete disorder and confusion.",
        chinese_explanation: "(D) '混乱' 意味着组织不当或杂乱的状态。" +
            "<br><br>" +
            "(A) '不对齐' 意味着某物的排列或定位不正确。" +
            "<br><br>" +
            "(B) '对齐' 意味着排成直线或正确的相对位置。" +
            "<br><br>" +
            "(C) '混沌' 意味着完全的混乱和困惑。"
    },
    {
        id: 2,
        question: "The act of __________ against the country was considered a grave offense and was punishable by death.",
        chinese_question: "__________ 国家被认为是严重的罪行，可判处死刑。",
        answers: [
            { option: "A", answer: "loyalty", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "B", answer: "treason", chinese_answer: "叛国", chinese_romanization: "pànguó" },
            { option: "C", answer: "patriotism", chinese_answer: "爱国主义", chinese_romanization: "àiguó zhǔyì" },
            { option: "D", answer: "fidelity", chinese_answer: "忠实", chinese_romanization: "zhōngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'treason' means the crime of betraying one's country." +
            "<br><br>" +
            "(A) 'loyalty' means a strong feeling of support or allegiance." +
            "<br><br>" +
            "(C) 'patriotism' means the quality of being patriotic; vigorous support for one's country." +
            "<br><br>" +
            "(D) 'fidelity' means faithfulness to a person, cause, or belief.",
        chinese_explanation: "(B) '叛国' 一词意味着背叛国家的罪行。" +
            "<br><br>" +
            "(A) '忠诚' 意味着强烈的支持或忠诚感。" +
            "<br><br>" +
            "(C) '爱国主义' 意味着爱国的品质；对国家的有力支持。" +
            "<br><br>" +
            "(D) '忠实' 意味着对一个人、事业或信仰的忠诚。"
    },
    {
        id: 3,
        question: "Her __________ for classical music was evident in the way she meticulously collected vinyl records of renowned symphonies.",
        chinese_question: "她对古典音乐的 __________ 在她精心收藏著名交响乐的黑胶唱片中显而易见。",
        answers: [
            { option: "A", answer: "disinterest", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "predilection", chinese_answer: "偏爱", chinese_romanization: "piān'ài" },
            { option: "D", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'predilection' means a preference or special liking for something; a bias in favor of something." +
            "<br><br>" +
            "(A) 'disinterest' means lack of interest." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'aversion' means a strong dislike or disinclination.",
        chinese_explanation: "(C) '偏爱' 一词意味着对某事物的偏好或特别喜欢；偏袒某事。" +
            "<br><br>" +
            "(A) '无兴趣' 意味着缺乏兴趣。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '厌恶' 意味着强烈的不喜欢或不情愿。"
    },
    {
        id: 4,
        question: "A basic understanding of algebra is a __________ for enrolling in the advanced mathematics course.",
        chinese_question: "对于高级数学课程的注册，基本的代数理解是一个 __________。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "B", answer: "prerequisite", chinese_answer: "先决条件", chinese_romanization: "xiānjué tiáojiàn" },
            { option: "C", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prerequisite' means a thing that is required as a prior condition for something else to happen or exist." +
            "<br><br>" +
            "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(C) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(D) 'obstacle' means a thing that blocks one's way or prevents or hinders progress.",
        chinese_explanation: "(B) '先决条件' 一词意味着某事发生或存在的前提条件。" +
            "<br><br>" +
            "(A) '障碍' 意味着对某事或某人的阻力、延迟或障碍。" +
            "<br><br>" +
            "(C) '结果' 意味着某种行为或条件的结果或影响。" +
            "<br><br>" +
            "(D) '障碍' 意味着阻挡某人道路或阻止或妨碍进展的事物。"
    },
    {
        id: 5,
        question: "The __________ of the arts center generously supported various cultural events and programs.",
        chinese_question: "艺术中心的 __________ 慷慨地支持了各种文化活动和项目。",
        answers: [
            { option: "A", answer: "critic", chinese_answer: "批评家", chinese_romanization: "pīpíng jiā" },
            { option: "B", answer: "patron", chinese_answer: "赞助人", chinese_romanization: "zànzhù rén" },
            { option: "C", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
            { option: "D", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'patron' means a person who gives financial or other support to a person, organization, cause, or activity." +
            "<br><br>" +
            "(A) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(C) 'spectator' means a person who watches at a show, game, or other event." +
            "<br><br>" +
            "(D) 'observer' means a person who watches or notices something.",
        chinese_explanation: "(B) '赞助人' 一词意味着为个人、组织、事业或活动提供财政或其他支持的人。" +
            "<br><br>" +
            "(A) '批评家' 意味着对某事表达不赞成意见的人。" +
            "<br><br>" +
            "(C) '观众' 意味着观看表演、比赛或其他活动的人。" +
            "<br><br>" +
            "(D) '观察者' 意味着观察或注意到某事的人。"
    },
    {
        id: 6,
        question: "The defendant was overjoyed when the jury announced his __________, declaring him not guilty of the charges.",
        chinese_question: "当陪审团宣布他的 __________ 时，被告欣喜若狂，宣告他无罪。",
        answers: [
            { option: "A", answer: "conviction", chinese_answer: "定罪", chinese_romanization: "dìngzuì" },
            { option: "B", answer: "acquittal", chinese_answer: "无罪释放", chinese_romanization: "wúzuì shìfàng" },
            { option: "C", answer: "sentencing", chinese_answer: "判刑", chinese_romanization: "pànxíng" },
            { option: "D", answer: "arrest", chinese_answer: "逮捕", chinese_romanization: "dàibǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquittal' means a judgment that a person is not guilty of the crime with which they have been charged." +
            "<br><br>" +
            "(A) 'conviction' means a formal declaration that someone is guilty of a criminal offense." +
            "<br><br>" +
            "(C) 'sentencing' means the declaration of the punishment decided for an offender." +
            "<br><br>" +
            "(D) 'arrest' means the action of seizing someone to take into custody.",
        chinese_explanation: "(B) '无罪释放' 一词意味着判定某人未犯所指控的罪行的判决。" +
            "<br><br>" +
            "(A) '定罪' 意味着正式宣布某人犯有刑事犯罪。" +
            "<br><br>" +
            "(C) '判刑' 意味着决定对犯罪者的惩罚的宣告。" +
            "<br><br>" +
            "(D) '逮捕' 意味着将某人逮捕以拘留的行为。"
    },
    {
        id: 7,
        question: "As a __________, the restaurant offered a complimentary dessert to celebrate its anniversary.",
        chinese_question: "作为 __________，餐厅提供了一份免费的甜点来庆祝其周年纪念。",
        answers: [
            { option: "A", answer: "surcharge", chinese_answer: "附加费", chinese_romanization: "fùjiā fèi" },
            { option: "B", answer: "penalty", chinese_answer: "罚款", chinese_romanization: "fákuǎn" },
            { option: "C", answer: "lagniappe", chinese_answer: "赠品", chinese_romanization: "zèngpǐn" },
            { option: "D", answer: "fee", chinese_answer: "费用", chinese_romanization: "fèiyòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lagniappe' means something given as a bonus or extra gift." +
            "<br><br>" +
            "(A) 'surcharge' means an additional charge or payment." +
            "<br><br>" +
            "(B) 'penalty' means a punishment imposed for breaking a law, rule, or contract." +
            "<br><br>" +
            "(D) 'fee' means a payment made to a professional person or to a professional or public body in exchange for advice or services.",
        chinese_explanation: "(C) '赠品' 一词意味着作为奖励或额外礼物给予的东西。" +
            "<br><br>" +
            "(A) '附加费' 意味着额外的费用或付款。" +
            "<br><br>" +
            "(B) '罚款' 意味着因违反法律、规则或合同而施加的处罚。" +
            "<br><br>" +
            "(D) '费用' 意味着为获得建议或服务而支付给专业人员或专业或公共机构的款项。"
    },
    {
        id: 8,
        question: "Their discovery of the ancient artifact was a stroke of __________, happening purely by chance during their hike.",
        chinese_question: "他们发现古代文物是一次 __________，纯粹在徒步旅行中偶然发生的。",
        answers: [
            { option: "A", answer: "misfortune", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "B", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
            { option: "C", answer: "disaster", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "D", answer: "certainty", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
            "<br><br>" +
            "(A) 'misfortune' means bad luck." +
            "<br><br>" +
            "(C) 'disaster' means a sudden event, such as an accident or a natural catastrophe, that causes great damage or loss of life." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(B) '机缘巧合' 一词意味着事件以一种愉快或有益的方式偶然发生和发展。" +
            "<br><br>" +
            "(A) '不幸' 意味着厄运。" +
            "<br><br>" +
            "(C) '灾难' 意味着突然的事件，如事故或自然灾害，造成重大损失或生命损失。" +
            "<br><br>" +
            "(D) '确定' 意味着坚定的信念某事是事实。"
    },
    {
        id: 9,
        question: "The __________ used fear and false promises to manipulate the crowd and gain power.",
        chinese_question: "__________ 用恐惧和虚假的承诺操纵人群并获得权力。",
        answers: [
            { option: "A", answer: "diplomat", chinese_answer: "外交官", chinese_romanization: "wàijiāo guān" },
            { option: "B", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" },
            { option: "C", answer: "demagogue", chinese_answer: "煽动者", chinese_romanization: "shāndòng zhě" },
            { option: "D", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhàn jiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'demagogue' means a political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument." +
            "<br><br>" +
            "(A) 'diplomat' means an official representing a country abroad." +
            "<br><br>" +
            "(B) 'scholar' means a specialist in a particular branch of study, especially the humanities; a distinguished academic." +
            "<br><br>" +
            "(D) 'philanthropist' means a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes.",
        chinese_explanation: "(C) '煽动者' 一词意味着通过迎合普通人的愿望和偏见而不是通过理性论证来寻求支持的政治领导人。" +
            "<br><br>" +
            "(A) '外交官' 意味着代表国家在国外的官员。" +
            "<br><br>" +
            "(B) '学者' 意味着某一特定研究领域，特别是人文学科的专家；杰出的学者。" +
            "<br><br>" +
            "(D) '慈善家' 意味着寻求促进他人福利的人，尤其是通过慷慨捐赠钱财用于善行。"
    },
    {
        id: 10,
        question: "The construction caused a __________ on the main road, leading to heavy traffic delays, as vehicles were redirected to alternate routes to avoid the blocked area.",
        chinese_question: "施工导致主干道的 __________，引发严重的交通延误，因为车辆被引导到其他路线以避开被封锁的区域。",
        answers: [
            { option: "A", answer: "continuation", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "B", answer: "diversion", chinese_answer: "分流", chinese_romanization: "fēnliú" },
            { option: "C", answer: "extension", chinese_answer: "延长", chinese_romanization: "yáncháng" },
            { option: "D", answer: "maintenance", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diversion' means an instance of turning something aside from its course." +
            "<br><br>" +
            "(A) 'continuation' means the action of carrying something on over a period of time or the state of being continued." +
            "<br><br>" +
            "(C) 'extension' means a part that is added to something to enlarge or prolong it." +
            "<br><br>" +
            "(D) 'maintenance' means the process of maintaining or preserving someone or something, or the state of being maintained.",
        chinese_explanation: "(B) '分流' 一词意味着将某物从其路线中转向的实例。" +
            "<br><br>" +
            "(A) '继续' 意味着在一段时间内进行某事的动作或继续的状态。" +
            "<br><br>" +
            "(C) '延长' 意味着添加到某物以扩大或延长它的一部分。" +
            "<br><br>" +
            "(D) '维护' 意味着维护或保护某人或某物的过程，或被维护的状态。"
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
