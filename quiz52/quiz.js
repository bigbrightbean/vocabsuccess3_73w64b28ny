// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The DNA evidence provided a __________ link to the suspect, leaving no room for doubt about his guilt.",
    chinese_question: "DNA 证据提供了 __________ 的嫌疑人链接，让他的罪行没有任何怀疑的余地。",
    answers: [
        { option: "A", answer: "inconclusive", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
        { option: "B", answer: "speculative", chinese_answer: "推测", chinese_romanization: "tuīcè" },
        { option: "C", answer: "conclusive", chinese_answer: "确凿", chinese_romanization: "quèzáo" },
        { option: "D", answer: "hypothetical", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'conclusive' means serving to prove a case; decisive or convincing." +
        "<br><br>" +
        "(A) 'inconclusive' means not leading to a firm conclusion; not ending doubt or dispute." +
        "<br><br>" +
        "(B) 'speculative' means engaged in, expressing, or based on conjecture rather than knowledge." +
        "<br><br>" +
        "(D) 'hypothetical' means based on or serving as a hypothesis.",
    chinese_explanation: "(C) '确凿' 一词意味着用来证明案件的；决定性或令人信服的。" +
        "<br><br>" +
        "(A) '不确定' 意味着没有得出确定的结论；未结束怀疑或争议。" +
        "<br><br>" +
        "(B) '推测' 意味着从事、表达或基于猜测而不是知识。" +
        "<br><br>" +
        "(D) '假设' 意味着基于或作为假设。"
    },
    {
        id: 2,
    question: "The detective was __________ in his investigation, carefully examining every clue and witness.",
    chinese_question: "侦探在调查中非常 __________，仔细检查每一个线索和证人。",
    answers: [
        { "option": "A", "answer": "reckless", "chinese_answer": "鲁莽", "chinese_romanization": "lǔmǎng" },
        { "option": "B", "answer": "hasty", "chinese_answer": "仓促", "chinese_romanization": "cāngcù" },
        { "option": "C", "answer": "circumspect", "chinese_answer": "慎重", "chinese_romanization": "shènzhòng" },
        { "option": "D", "answer": "careless", "chinese_answer": "粗心", "chinese_romanization": "cūxīn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'circumspect' means wary and unwilling to take risks." +
        "<br><br>" +
        "(A) 'reckless' means without thinking or caring about the consequences of an action." +
        "<br><br>" +
        "(B) 'hasty' means done or acting with excessive speed or urgency." +
        "<br><br>" +
        "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(C) '慎重' 一词意味着谨慎和不愿意冒险。" +
        "<br><br>" +
        "(A) '鲁莽' 意味着不考虑行动的后果。" +
        "<br><br>" +
        "(B) '仓促' 意味着以过快的速度或紧迫性完成或行动。" +
        "<br><br>" +
        "(D) '粗心' 意味着没有给予足够的注意或思考以避免伤害或错误。"
    },
    {
        id: 3,
        question: "Her __________ understanding of people's emotions allowed her to provide comfort without them having to say a word.",
        chinese_question: "她对人们情感的 __________ 理解使她在无需言语的情况下提供了安慰。",
        answers: [
            { option: "A", answer: "oblivious", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "mechanical", chinese_answer: "机械", chinese_romanization: "jīxiè" },
            { option: "C", answer: "intuitive", chinese_answer: "直觉", chinese_romanization: "zhíjué" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive." +
            "<br><br>" +
            "(A) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(B) 'mechanical' means (of a person or action) done without thought or spontaneity; automatic." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(C) '直觉' 一词意味着使用或基于某人认为真实的东西，即使没有有意识的推理；本能的。" +
            "<br><br>" +
            "(A) '无知' 意味着对周围发生的事情不了解或不关心。" +
            "<br><br>" +
            "(B) '机械' 意味着（某人或行为）无需思考或自发完成的；自动的。" +
            "<br><br>" +
            "(D) '可预测' 意味着能够预测的。"
    },
    {
        id: 4,
        question: "The debate highlighted the __________ nature of the issue, with arguments supporting both sides equally compelling.",
        chinese_question: "辩论突出了问题的 __________ 性质，支持双方的论点都同样令人信服。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodāng de" },
            { option: "C", answer: "dichotomous", chinese_answer: "两分的", chinese_romanization: "liǎng fēn de" },
            { option: "D", answer: "unified", chinese_answer: "统一的", chinese_romanization: "tǒngyī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dichotomous' means divided or dividing into two parts or classifications." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'unified' means formed or united into a whole.",
        chinese_explanation: "(C) '两分的' 一词意味着分成或分为两部分或分类。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有难度。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着简单和容易做或理解。" +
            "<br><br>" +
            "(D) '统一的' 意味着形成或联合成一个整体。"
    },
    {
        id: 5,
        question: "Her motivation to volunteer was purely __________, driven by the need to fulfill her college service hours rather than a genuine desire to help.",
        chinese_question: "她志愿服务的动机纯粹是 __________ 的，由完成大学服务时间的需要驱动，而不是出于真正帮助的愿望。",
        answers: [
            { option: "A", answer: "intrinsic", chinese_answer: "内在的", chinese_romanization: "nèizài de" },
            { option: "B", answer: "innate", chinese_answer: "天生的", chinese_romanization: "tiānshēng de" },
            { option: "C", answer: "inherent", chinese_answer: "固有的", chinese_romanization: "gùyǒu de" },
            { option: "D", answer: "extrinsic", chinese_answer: "外在的", chinese_romanization: "wàizài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'extrinsic' means not part of the essential nature of someone or something; coming or operating from outside." +
            "<br><br>" +
            "(A) 'intrinsic' means belonging naturally; essential." +
            "<br><br>" +
            "(B) 'innate' means inborn; natural." +
            "<br><br>" +
            "(C) 'inherent' means existing in something as a permanent, essential, or characteristic attribute.",
        chinese_explanation: "(D) '外在的' 意味着不是某人或某物本质的一部分；来自或作用于外部。" +
            "<br><br>" +
            "(A) '内在的' 意味着天生的；本质的。" +
            "<br><br>" +
            "(B) '天生的' 意味着天生的；自然的。" +
            "<br><br>" +
            "(C) '固有的' 意味着作为某物的永久、基本或特征属性存在的。"
    },
    {
        id: 6,
    question: "She is __________ in five languages, allowing her to work as a translator for international conferences.",
    chinese_question: "她精通五种语言，使她能够在国际会议上担任翻译。",
    answers: [
        { option: "A", answer: "beginner", chinese_answer: "初学者", chinese_romanization: "chūxué zhě" },
        { option: "B", answer: "struggling", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "proficient", chinese_answer: "熟练", chinese_romanization: "shúliàn" },
        { option: "D", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'proficient' means competent or skilled in doing or using something." +
        "<br><br>" +
        "(A) 'beginner' means a person just starting to learn a skill or take part in an activity." +
        "<br><br>" +
        "(B) 'struggling' means making forceful or violent efforts to get free of restraint or constriction." +
        "<br><br>" +
        "(D) 'novice' means a person new to or inexperienced in a field or situation.",
    chinese_explanation: "(C) '熟练' 一词意味着在做或使用某事方面有能力或熟练。" +
        "<br><br>" +
        "(A) '初学者' 意味着刚开始学习一项技能或参加一项活动的人。" +
        "<br><br>" +
        "(B) '挣扎' 意味着努力摆脱约束或限制的强烈或暴力努力。" +
        "<br><br>" +
        "(D) '新手' 意味着在某个领域或情况下新来的人或没有经验的人。"
    },
    {
        id: 7,
    question: "The government made a __________ decision without consulting the other involved parties.",
    chinese_question: "政府在没有咨询其他相关方的情况下做出了 __________ 决定。",
    answers: [
        { option: "A", answer: "bilateral", chinese_answer: "双边的", chinese_romanization: "shuāngbiān de" },
        { option: "B", answer: "unilateral", chinese_answer: "单方面的", chinese_romanization: "dānfāngmiàn de" },
        { option: "C", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
        { option: "D", answer: "mutual", chinese_answer: "相互的", chinese_romanization: "xiānghù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'unilateral' means performed by or affecting only one person, group, or country involved in a particular situation, without the agreement of another or the others." +
        "<br><br>" +
        "(A) 'bilateral' means having or relating to two sides; affecting both sides." +
        "<br><br>" +
        "(C) 'cooperative' means involving mutual assistance in working toward a common goal." +
        "<br><br>" +
        "(D) 'mutual' means (of a feeling or action) experienced or done by each of two or more parties toward the other or others.",
    chinese_explanation: "(B) '单方面的' 一词意味着仅由涉及特定情况的一个人、团体或国家执行或影响，而没有另一个或其他人的同意。" +
        "<br><br>" +
        "(A) '双边的' 意味着有或涉及两边；影响双方。" +
        "<br><br>" +
        "(C) '合作的' 意味着在朝着共同目标努力中互相协助的。" +
        "<br><br>" +
        "(D) '相互的' 意味着（感觉或行动）由两个或多个当事方中的每一方对另一个或其他方经历或完成的。"
    },
    {
        id: 8,
        question: "She was __________ to flattery, often letting compliments cloud her judgment.",
        chinese_question: "她 __________ 奉承，常常让赞美蒙蔽了她的判断。",
        answers: [
            { option: "A", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "susceptible", chinese_answer: "易受影响的", chinese_romanization: "yì shòu yǐngxiǎng de" },
            { option: "D", answer: "critical", chinese_answer: "批判的", chinese_romanization: "pīpàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'susceptible' figuratively means easily influenced by feelings or emotions." +
            "<br><br>" +
            "(A) 'immune' means not affected or influenced by something." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
        chinese_explanation: "(C) '易受影响的' 在比喻意义上意味着容易受感情或情绪影响的。" +
            "<br><br>" +
            "(A) '免疫的' 意味着不受某事物影响的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '批判的' 意味着表达负面或不赞成的评论或判断的。"
    },
    {
        id: 9,
        question: "The donor chose to remain __________, not wanting any recognition for their generosity.",
        chinese_question: "捐赠者选择保持 __________，不希望因他们的慷慨而得到任何认可。",
        answers: [
            { option: "A", answer: "prominent", chinese_answer: "突出的", chinese_romanization: "tūchū de" },
            { option: "B", answer: "anonymous", chinese_answer: "匿名的", chinese_romanization: "nìmíng de" },
            { option: "C", answer: "celebrated", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "D", answer: "renowned", chinese_answer: "闻名的", chinese_romanization: "wénmíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anonymous' figuratively means not seeking personal credit or recognition." +
            "<br><br>" +
            "(A) 'prominent' means important; famous." +
            "<br><br>" +
            "(C) 'celebrated' means greatly admired; renowned." +
            "<br><br>" +
            "(D) 'renowned' means known or talked about by many people; famous.",
        chinese_explanation: "(B) '匿名的' 在比喻意义上意味着不寻求个人荣誉或认可。" +
            "<br><br>" +
            "(A) '突出的' 意味着重要的；著名的。" +
            "<br><br>" +
            "(C) '著名的' 意味着备受钦佩的；著名的。" +
            "<br><br>" +
            "(D) '闻名的' 意味着为许多人所知或谈论的；著名的。"
    },
    {
        id: 10,
        question: "She was very __________ of her reputation, always acting with utmost care in public.",
        chinese_question: "她非常 __________ 自己的名声，在公众场合总是表现得极其谨慎。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "conscious", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conscious' figuratively means being very aware and mindful of something." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous.",
        chinese_explanation: "(C) '注意的' 在比喻意义上意味着非常注意和关注某事的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有充分注意或考虑避免伤害或错误。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不顾危险或后果；冲动的。"
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
