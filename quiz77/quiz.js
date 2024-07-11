// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The decision caused him much __________ as he struggled to choose the right path.",
        chinese_question: "这个决定让他非常__________，因为他在努力选择正确的道路。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "agony", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "D", answer: "pleasure", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agony' means extreme physical or mental suffering. Figuratively, it can mean experiencing intense emotional distress." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(C) '痛苦'一词意味着极度的身体或精神痛苦。比喻地，它可以表示经历强烈的情感困扰。" +
            "<br><br>" +
            "(A) '快乐' 意味着一种极大的愉悦和幸福感。" +
            "<br><br>" +
            "(B) '舒适' 意味着一种身体上的舒适和没有痛苦或约束的状态。" +
            "<br><br>" +
            "(D) '快乐' 意味着一种愉快的满足和享受感。"
    },
    {
        id: 2,
        question: "The entire ceremony was an __________ to the bravery of the soldiers who fought in the war.",
        chinese_question: "整个仪式是对在战争中战斗的士兵们的勇敢的 __________。",
        answers: [
            { option: "A", answer: "homage", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
            { option: "B", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
            { option: "D", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'homage' metaphorically means a public show of respect or honor." +
            "<br><br>" +
            "(B) 'critique' means a detailed analysis and assessment of something, especially a literary, philosophical, or political theory." +
            "<br><br>" +
            "(C) 'debate' means a formal discussion on a particular topic in a public meeting or legislative assembly, in which opposing arguments are put forward." +
            "<br><br>" +
            "(D) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one.",
        chinese_explanation: "(A) '致敬' 比喻公开表示尊敬或敬意。" +
            "<br><br>" +
            "(B) '批评' 意味着对某事物进行详细分析和评估，尤其是文学、哲学或政治理论。" +
            "<br><br>" +
            "(C) '辩论' 意味着在公共会议或立法会议上就特定主题进行的正式讨论，其中提出了相反的论点。" +
            "<br><br>" +
            "(D) '争论' 意味着意见分歧或相反观点的交流，通常是激烈或愤怒的。"
    },
    {
        id: 3,
        question: "The lion's __________ over the other animals in the savannah was evident as it roamed freely, unchallenged.",
        chinese_question: "狮子在草原上自由漫步，无人挑战，它对其他动物的 __________ 显而易见。",
        answers: [
            { option: "A", answer: "submission", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "B", answer: "weakness", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
            { option: "C", answer: "dominance", chinese_answer: "统治", chinese_romanization: "tǒngzhì" },
            { option: "D", answer: "inferiority", chinese_answer: "劣势", chinese_romanization: "lièshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dominance' means power and influence over others." +
            "<br><br>" +
            "(A) 'submission' means the action or fact of accepting or yielding to a superior force or to the will or authority of another person." +
            "<br><br>" +
            "(B) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(D) 'inferiority' means the condition of being lower in status or quality than others.",
        chinese_explanation: "(C) '统治' 一词意味着对他人的力量和影响。" +
            "<br><br>" +
            "(A) '服从' 意味着接受或屈服于上级力量或他人意志或权威的行为或事实。" +
            "<br><br>" +
            "(B) '弱点' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(D) '劣势' 意味着在地位或质量上低于他人的状态。"
    },
    {
        id: 4,
        question: "The bank required __________ for the loan, so he offered his car as a guarantee.",
        chinese_question: "银行要求贷款提供 __________，所以他把自己的车作为担保。",
        answers: [
            { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "collateral", chinese_answer: "抵押品", chinese_romanization: "dǐyā pǐn" },
            { option: "C", answer: "gift", chinese_answer: "礼物", chinese_romanization: "lǐwù" },
            { option: "D", answer: "donation", chinese_answer: "捐赠", chinese_romanization: "juānzèng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'collateral' means something pledged as security for repayment of a loan, to be forfeited in the event of a default." +
            "<br><br>" +
            "(A) 'reward' means a thing given in recognition of one's service, effort, or achievement." +
            "<br><br>" +
            "(C) 'gift' means a thing given willingly to someone without payment." +
            "<br><br>" +
            "(D) 'donation' means something that is given to a charity, especially a sum of money.",
        chinese_explanation: "(B) '抵押品' 一词意味着作为偿还贷款担保的物品，违约时将被没收。" +
            "<br><br>" +
            "(A) '奖励' 意味着因某人的服务、努力或成就而给予的事物。" +
            "<br><br>" +
            "(C) '礼物' 意味着自愿给予某人的事物而不付款。" +
            "<br><br>" +
            "(D) '捐赠' 意味着捐给慈善机构的东西，尤其是一笔钱。"
    },
    {
        id: 5,
        question: "The __________ was ostracized by the religious community for his unorthodox beliefs and practices.",
        chinese_question: "由于他的非正统信仰和做法，这位 __________ 被宗教团体排斥。",
        answers: [
            { option: "A", answer: "conformist", chinese_answer: "墨守成规者", chinese_romanization: "mòshǒu chéngguī zhě" },
            { option: "B", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" },
            { option: "C", answer: "heretic", chinese_answer: "异教徒", chinese_romanization: "yìjiàotú" },
            { option: "D", answer: "believer", chinese_answer: "信徒", chinese_romanization: "xìntú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'heretic' means a person holding an opinion at odds with what is generally accepted, especially in religion." +
            "<br><br>" +
            "(A) 'conformist' means a person who conforms to accepted behavior or established practices." +
            "<br><br>" +
            "(B) 'traditionalist' means a person who has deep respect for long-held cultural and religious values." +
            "<br><br>" +
            "(D) 'believer' means a person who believes in the truth or existence of something.",
        chinese_explanation: "(C) '异教徒' 一词意味着持有与普遍接受的观点相悖的人，尤其是在宗教方面。" +
            "<br><br>" +
            "(A) '墨守成规者' 意味着遵循被接受的行为或既定做法的人。" +
            "<br><br>" +
            "(B) '传统主义者' 意味着对长期持有的文化和宗教价值观有深厚尊重的人。" +
            "<br><br>" +
            "(D) '信徒' 意味着相信某事物真实或存在的人。"
    },
    {
        id: 6,
        question: "The thieves used a special __________ to communicate without being understood by outsiders.",
        chinese_question: "小偷们使用一种特殊的 __________ 进行交流，不被外人理解。",
        answers: [
            { option: "A", answer: "dialect", chinese_answer: "方言", chinese_romanization: "fāngyán" },
            { option: "B", answer: "jargon", chinese_answer: "行话", chinese_romanization: "hánghuà" },
            { option: "C", answer: "argot", chinese_answer: "黑话", chinese_romanization: "hēihuà" },
            { option: "D", answer: "vernacular", chinese_answer: "本地话", chinese_romanization: "běndì huà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'argot' means the jargon or slang of a particular group or class." +
            "<br><br>" +
            "(A) 'dialect' means a particular form of a language that is peculiar to a specific region or social group." +
            "<br><br>" +
            "(B) 'jargon' means special words or expressions that are used by a particular profession or group and are difficult for others to understand." +
            "<br><br>" +
            "(D) 'vernacular' means the language or dialect spoken by the ordinary people in a particular country or region.",
        chinese_explanation: "(C) '黑话' 一词意味着特定群体或阶级的行话或俚语。" +
            "<br><br>" +
            "(A) '方言' 意味着特定地区或社会群体特有的某种语言形式。" +
            "<br><br>" +
            "(B) '行话' 意味着某个特定职业或群体使用的特殊词语或表达，其他人难以理解。" +
            "<br><br>" +
            "(D) '本地话' 意味着某个国家或地区普通人使用的语言或方言。"
    },
    {
        id: 7,
        question: "The politician faced public __________ for his unethical behavior, damaging his reputation and career.",
        chinese_question: "这位政客因不道德行为面临公众的 __________，损害了他的声誉和事业。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "C", answer: "censure", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'censure' means express severe disapproval of (someone or something), typically in a formal statement." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
            "<br><br>" +
            "(D) 'encouragement' means the action of giving someone support, confidence, or hope.",
        chinese_explanation: "(C) '谴责' 一词意味着对（某人或某事）表示强烈不满，通常以正式声明的形式。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(B) '赞同' 意味着正式同意某事或接受某事物为满意的行为。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望的行为。"
    },
    {
        id: 8,
        question: "The high-profile __________ between the two celebrities dominated the news for weeks.",
        chinese_question: "两位名人之间的高调 __________ 占据了新闻数周。",
        answers: [
            { option: "A", answer: "event", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "B", answer: "relationship", chinese_answer: "关系", chinese_romanization: "guānxì" },
            { option: "C", answer: "affair", chinese_answer: "绯闻", chinese_romanization: "fēiwén" },
            { option: "D", answer: "situation", chinese_answer: "情况", chinese_romanization: "qíngkuàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'affair' means a matter that is a particular person's concern or responsibility." +
            "<br><br>" +
            "(A) 'event' means a thing that happens, especially one of importance." +
            "<br><br>" +
            "(B) 'relationship' means the way in which two or more concepts, objects, or people are connected, or the state of being connected." +
            "<br><br>" +
            "(D) 'situation' means a set of circumstances in which one finds oneself; a state of affairs.",
        chinese_explanation: "(C) '绯闻' 一词意味着特别是某人的关注或责任的问题。" +
            "<br><br>" +
            "(A) '事件' 意味着发生的事情，特别是重要的事情。" +
            "<br><br>" +
            "(B) '关系' 意味着两个或多个概念、对象或人之间的连接方式，或连接的状态。" +
            "<br><br>" +
            "(D) '情况' 意味着一个人发现自己的情况；事务的状态。"
    },
    {
        id: 9,
        question: "Her strict __________ from sweets helped her maintain a healthy lifestyle despite her love for desserts.",
        chinese_question: "尽管她非常喜欢甜点，但她对甜食的严格 __________ 帮助她保持健康的生活方式。",
        answers: [
            { option: "A", answer: "abstinence", chinese_answer: "禁欲", chinese_romanization: "jìnyù" },
            { option: "B", answer: "adulation", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
            { option: "C", answer: "adversity", chinese_answer: "逆境", chinese_romanization: "nìjìng" },
            { option: "D", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'abstinence' means the practice of restraining oneself from indulging in something." +
            "<br><br>" +
            "(B) 'adulation' means excessive admiration or praise." +
            "<br><br>" +
            "(C) 'adversity' means difficulties or misfortune." +
            "<br><br>" +
            "(D) 'ambivalence' means having mixed feelings or contradictory ideas about something.",
        chinese_explanation: "(A) '禁欲' 意味着约束自己不去放纵某事。" +
            "<br><br>" +
            "(B) '谄媚' 意味着过度的钦佩或赞美。" +
            "<br><br>" +
            "(C) '逆境' 意味着困难或不幸。" +
            "<br><br>" +
            "(D) '矛盾心理' 意味着对某事有混合的感情或矛盾的想法。"
    },
    {
        id: 10,
        question: "The photographer adjusted the __________ of the camera lens to let in more light for the perfect shot.",
        chinese_question: "摄影师调整了相机镜头的 __________，以让更多的光线进入拍摄完美的照片。",
        answers: [
            { option: "A", answer: "shutter", chinese_answer: "快门", chinese_romanization: "kuàimén" },
            { option: "B", answer: "aperture", chinese_answer: "光圈", chinese_romanization: "guāngquān" },
            { option: "C", answer: "focus", chinese_answer: "焦点", chinese_romanization: "jiāodiǎn" },
            { option: "D", answer: "zoom", chinese_answer: "变焦", chinese_romanization: "biàn jiāo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aperture' means an opening, hole, or gap, especially one in a camera through which light enters." +
            "<br><br>" +
            "(A) 'shutter' means a device that opens and closes to expose the film in a camera." +
            "<br><br>" +
            "(C) 'focus' means the center of interest or activity." +
            "<br><br>" +
            "(D) 'zoom' means a camera shot that changes smoothly from a long shot to a close-up or vice versa.",
        chinese_explanation: "(B) '光圈' 一词意味着特别是相机中光线进入的开口、孔或缝隙。" +
            "<br><br>" +
            "(A) '快门' 意味着一种在相机中打开和关闭以曝光胶片的装置。" +
            "<br><br>" +
            "(C) '焦点' 意味着兴趣或活动的中心。" +
            "<br><br>" +
            "(D) '变焦' 意味着一种相机镜头从长镜头平滑地变为特写镜头或反之亦然的拍摄。"
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
