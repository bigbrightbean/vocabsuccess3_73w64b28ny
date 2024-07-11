// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After a period of deep __________, he realized he needed to make significant changes in his life to find true happiness.",
        chinese_question: "经过一段时间的深刻 __________ 后，他意识到需要在生活中做出重大改变以找到真正的幸福。",
        answers: [
            { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "B", answer: "introspection", chinese_answer: "反思", chinese_romanization: "fǎnsī" },
            { option: "C", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "D", answer: "observation", chinese_answer: "观察", chinese_romanization: "guānchá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'introspection' means the examination or observation of one's own mental and emotional processes." +
            "<br><br>" +
            "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(D) 'observation' means the action or process of observing something or someone carefully or in order to gain information.",
        chinese_explanation: "(B) '反思' 一词意味着对自己心理和情感过程的审查或观察。" +
            "<br><br>" +
            "(A) '兴奋' 意味着一种极大的热情和热切的感觉。" +
            "<br><br>" +
            "(C) '分心' 意味着阻止某人全神贯注于其他事情的东西。" +
            "<br><br>" +
            "(D) '观察' 意味着仔细观察某物或某人以获取信息的行为或过程。"
    },
    {
        id: 2,
        question: "The explorers decided to make a __________ into the uncharted jungle, hoping to discover new species of plants and animals.",
        chinese_question: "探险者决定 __________ 进入未知的丛林，希望能发现新的植物和动物种类。",
        answers: [
            { option: "A", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "foray", chinese_answer: "突袭", chinese_romanization: "tūxí" },
            { option: "C", answer: "withdrawal", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "escape", chinese_answer: "逃跑", chinese_romanization: "táopǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'foray' means a sudden attack or incursion into enemy territory, especially to obtain something; a raid." +
            "<br><br>" +
            "(A) 'retreat' means an act of moving back or withdrawing." +
            "<br><br>" +
            "(C) 'withdrawal' means the action of ceasing to participate in an activity." +
            "<br><br>" +
            "(D) 'escape' means break free from confinement or control.",
        chinese_explanation: "(B) '突袭' 一词意味着突然袭击或进入敌方领土，特别是为了获得某物；突袭。" +
            "<br><br>" +
            "(A) '撤退' 意味着后退或撤回的行为。" +
            "<br><br>" +
            "(C) '撤回' 意味着停止参与某项活动的行为。" +
            "<br><br>" +
            "(D) '逃跑' 意味着摆脱束缚或控制。"
    },
    {
        id: 3,
        question: "The __________ of the new policy made it easy for everyone to understand its purpose and implications.",
        chinese_question: "新政策的 __________ 使得每个人都能轻松理解其目的和影响。",
        answers: [
            { option: "A", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "obscurity", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzá xìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'complexity' means the state or quality of being intricate or complicated." +
            "<br><br>" +
            "(A) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(B) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(C) 'obscurity' means the state of being unknown, inconspicuous, or unimportant.",
        chinese_explanation: "(D) '复杂性' 意味着错综复杂或复杂的状态或质量。" +
            "<br><br>" +
            "(A) '混乱' 意味着缺乏理解；不确定。" +
            "<br><br>" +
            "(B) '透明' 一词意味着透明的状态。" +
            "<br><br>" +
            "(C) '模糊' 意味着未知、不显眼或不重要的状态。"
    },
    {
        id: 4,
        question: "She spent years working on her __________, which was a detailed study of ancient Greek philosophy.",
        chinese_question: "她花了多年时间撰写她的 __________，这是关于古希腊哲学的详细研究。",
        answers: [
            { option: "A", answer: "essay", chinese_answer: "论文", chinese_romanization: "lùnwén" },
            { option: "B", answer: "dissertation", chinese_answer: "学位论文", chinese_romanization: "xuéwèi lùnwén" },
            { option: "C", answer: "summary", chinese_answer: "概要", chinese_romanization: "gàiyào" },
            { option: "D", answer: "article", chinese_answer: "文章", chinese_romanization: "wénzhāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissertation' means a long essay on a particular subject, especially one written for a university degree or diploma." +
            "<br><br>" +
            "(A) 'essay' means a short piece of writing on a particular subject." +
            "<br><br>" +
            "(C) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(D) 'article' means a piece of writing included with others in a newspaper, magazine, or other publication.",
        chinese_explanation: "(B) '学位论文' 一词意味着关于特定主题的长篇论文，尤其是为大学学位或文凭撰写的。" +
            "<br><br>" +
            "(A) '论文' 意味着关于特定主题的简短写作。" +
            "<br><br>" +
            "(C) '概要' 意味着对某事要点的简短陈述或描述。" +
            "<br><br>" +
            "(D) '文章' 意味着与其他文章一起包含在报纸、杂志或其他出版物中的文章。"
    },
    {
        id: 5,
        question: "Despite his severe dyslexia, he was regarded as a linguistic __________, mastering several languages effortlessly.",
        chinese_question: "尽管他严重的阅读障碍，他被视为语言__________，毫不费力地掌握了多种语言。",
        answers: [
            { option: "A", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "dabbler", chinese_answer: "浅尝辄止者", chinese_romanization: "qiǎnchángzhézhǐ zhě" },
            { option: "D", answer: "savant", chinese_answer: "天才", chinese_romanization: "tiāncái" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'savant' refers to a person with profound or extensive learning in a specific field, often despite mental or physical limitations." +
            "<br><br>" +
            "(A) 'amateur' refers to a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'dabbler' refers to someone who takes part in an activity in a casual or superficial way.",
        chinese_explanation: "(D) '天才' 指的是在特定领域具有深厚或广泛学识的人，通常是在智力或身体上有限制的情况下。" +
            "<br><br>" +
            "(A) '业余爱好者' 指的是在追求特别是体育运动方面无偿参与的人。" +
            "<br><br>" +
            "(B) '新手' 指的是在某个领域或情况下新手或没有经验的人。" +
            "<br><br>" +
            "(C) '浅尝辄止者' 指的是以一种随意或肤浅的方式参与某项活动的人。"
    },
    {
        id: 6,
        question: "The court issued an __________ to prevent the company from using the disputed trademark.",
        chinese_question: "法院发布了一个__________，以防止公司使用有争议的商标。",
        answers: [
            { option: "A", answer: "allowance", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "permission", chinese_answer: "许可", chinese_romanization: "xǔkě" },
            { option: "C", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "D", answer: "injunction", chinese_answer: "禁令", chinese_romanization: "jìnlìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'injunction' refers to an authoritative warning or order, especially a judicial order that restrains a person from beginning or continuing an action threatening or invading the legal right of another." +
            "<br><br>" +
            "(A) 'allowance' refers to the amount of something that is permitted." +
            "<br><br>" +
            "(B) 'permission' refers to consent or authorization." +
            "<br><br>" +
            "(C) 'approval' refers to the action of officially agreeing to something.",
        chinese_explanation: "(D) '禁令' 指的是权威的警告或命令，尤其是限制某人开始或继续威胁或侵犯他人合法权利的行为的司法命令。" +
            "<br><br>" +
            "(A) '允许' 指的是允许的数量。" +
            "<br><br>" +
            "(B) '许可' 指的是同意或授权。" +
            "<br><br>" +
            "(C) '批准' 指的是正式同意某事的行为。"
    },
    {
        id: 7,
        question: "The doctor's expertise in __________ allowed her to diagnose rare conditions accurately.",
        chinese_question: "医生在__________方面的专长使她能够准确诊断罕见病症。",
        answers: [
            { option: "A", answer: "fitness", chinese_answer: "健康", chinese_romanization: "jiànkāng" },
            { option: "B", answer: "well-being", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "C", answer: "vitality", chinese_answer: "活力", chinese_romanization: "huólì" },
            { option: "D", answer: "pathology", chinese_answer: "病理", chinese_romanization: "bìnglǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pathology' refers to the scientific study of disease and its causes, processes, development, and consequences." +
            "<br><br>" +
            "(A) 'fitness' refers to the condition of being physically fit and healthy." +
            "<br><br>" +
            "(B) 'well-being' refers to the state of being comfortable, healthy, or happy." +
            "<br><br>" +
            "(C) 'vitality' refers to the state of being strong and active; energy.",
        chinese_explanation: "(D) '病理' 指的是对疾病及其原因、过程、发展和后果的科学研究。" +
            "<br><br>" +
            "(A) '健康' 指的是身体健康和健身的状态。" +
            "<br><br>" +
            "(B) '幸福' 指的是舒适、健康或快乐的状态。" +
            "<br><br>" +
            "(C) '活力' 指的是强壮和活跃的状态；能量。"
    },
    {
        id: 8,
        question: "The violin provided a beautiful __________ to the orchestra, enhancing the overall performance.",
        chinese_question: "小提琴为乐团提供了美妙的 __________，提升了整体表现。",
        answers: [
            { option: "A", answer: "solo", chinese_answer: "独奏", chinese_romanization: "dúzòu" },
            { option: "B", answer: "interruption", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
            { option: "C", answer: "accompaniment", chinese_answer: "伴奏", chinese_romanization: "bànzòu" },
            { option: "D", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accompaniment' means a musical part that supports or partners a solo instrument, voice, or group." +
            "<br><br>" +
            "(A) 'solo' means a thing done by one person unaccompanied, in particular." +
            "<br><br>" +
            "(B) 'interruption' means the action of interrupting or being interrupted." +
            "<br><br>" +
            "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
        chinese_explanation: "(C) '伴奏' 一词意味着支持或伴奏独奏乐器、嗓音或乐队的音乐部分。" +
            "<br><br>" +
            "(A) '独奏' 意味着由一个人独立完成的事情，尤其是独奏。" +
            "<br><br>" +
            "(B) '打断' 意味着打断或被打断的动作。" +
            "<br><br>" +
            "(D) '干扰' 意味着阻止某人全神贯注于其他事情的事物。"
    },
    {
        id: 9,
        question: "The man was convicted of a __________ for committing armed robbery, a much more serious offense than a misdemeanor.",
        chinese_question: "该男子因持械抢劫被判犯有 __________，这是比轻罪严重得多的犯罪行为。",
        answers: [
                { option: "A", answer: "felony", chinese_answer: "重罪", chinese_romanization: "zhòngzuì" },
                { option: "B", answer: "misdemeanour", chinese_answer: "轻罪", chinese_romanization: "qīngzuì" },
                { option: "C", answer: "crime", chinese_answer: "犯罪", chinese_romanization: "fànzuì" },
                { option: "D", answer: "violation", chinese_answer: "违反", chinese_romanization: "wéifǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'felony' means a crime, typically one involving violence, regarded as more serious than a misdemeanor." +
            "<br><br>" +
            "(B) 'misdemeanour' means a minor wrongdoing." +
            "<br><br>" +
            "(C) 'crime' means an action or omission that constitutes an offense that may be prosecuted by the state and is punishable by law." +
            "<br><br>" +
            "(D) 'violation' means the action of violating someone or something.",
        chinese_explanation: "(A) '重罪' 意味着一种犯罪行为，通常涉及暴力，被认为比轻罪更严重。" +
            "<br><br>" +
            "(B) '轻罪' 一词意味着轻微的不法行为。" +
            "<br><br>" +
            "(C) '犯罪' 意味着构成可能由国家起诉并依法处罚的违法行为或不作为。" +
            "<br><br>" +
            "(D) '违反' 意味着违反某人或某物的行为。"
    },
    {
        id: 10,
        question: "He feared that his work would fall into __________ if he did not continue to innovate and stay relevant.",
        chinese_question: "他担心如果不继续创新和保持相关性，他的工作会陷入 __________。",
        answers: [
            { option: "A", answer: "fame", chinese_answer: "名声", chinese_romanization: "míngshēng" },
            { option: "B", answer: "notoriety", chinese_answer: "恶名", chinese_romanization: "èmíng" },
            { option: "C", answer: "oblivion", chinese_answer: "遗忘", chinese_romanization: "yíwàng" },
            { option: "D", answer: "recognition", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'oblivion' means the state of being unaware or unconscious of what is happening." +
            "<br><br>" +
            "(A) 'fame' means the state of being known by many people." +
            "<br><br>" +
            "(B) 'notoriety' means the state of being famous or well known for some bad quality or deed." +
            "<br><br>" +
            "(D) 'recognition' means identification of someone or something or person from previous encounters or knowledge.",
        chinese_explanation: "(C) '遗忘' 一词意味着对正在发生的事情不了解或无意识的状态。" +
            "<br><br>" +
            "(A) '名声' 意味着被许多人所知的状态。" +
            "<br><br>" +
            "(B) '恶名' 意味着因某些不良品质或行为而闻名或众所周知的状态。" +
            "<br><br>" +
            "(D) '认可' 意味着根据以前的遇见或知识识别某人或某事或某人。"
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
