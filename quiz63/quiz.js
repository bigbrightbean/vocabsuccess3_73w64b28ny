// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite his cheerful __________, he was deeply troubled and anxious inside.",
        chinese_question: "尽管他表现得很 __________，但内心却非常烦恼和焦虑。",
        answers: [
            { option: "A", answer: "interior", chinese_answer: "内部", chinese_romanization: "nèibù" },
            { option: "B", answer: "demeanor", chinese_answer: "行为", chinese_romanization: "xíngwéi" },
            { option: "C", answer: "facade", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "D", answer: "character", chinese_answer: "性格", chinese_romanization: "xìnggé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'facade' figuratively means an outward appearance that is maintained to conceal a less pleasant or creditable reality." +
            "<br><br>" +
            "(A) 'interior' means the inner or indoor part of something." +
            "<br><br>" +
            "(B) 'demeanor' means outward behavior or bearing." +
            "<br><br>" +
            "(D) 'character' means the mental and moral qualities distinctive to an individual.",
        chinese_explanation: "(C) '表面' 在比喻意义上意味着维持以掩盖不那么愉快或不那么可信的现实的外表。" +
            "<br><br>" +
            "(A) '内部' 意味着某物的内部或室内部分。" +
            "<br><br>" +
            "(B) '行为' 意味着外在的行为或举止。" +
            "<br><br>" +
            "(D) '性格' 意味着个人独特的心理和道德品质。"
    },
    {
        id: 2,
        question: "The concert hall's __________ were designed to enhance the sound quality, making every note crystal clear to the audience.",
        chinese_question: "音乐厅的 __________ 设计是为了提升音质，使观众听到的每一个音符都清晰无比。",
        answers: [
            { option: "A", answer: "acoustics", chinese_answer: "声学", chinese_romanization: "shēngxué" },
            { option: "B", answer: "visuals", chinese_answer: "视觉效果", chinese_romanization: "shìjué xiàoguǒ" },
            { option: "C", answer: "aesthetics", chinese_answer: "美学", chinese_romanization: "měixué" },
            { option: "D", answer: "dimensions", chinese_answer: "尺寸", chinese_romanization: "chǐcùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acoustics' means the properties or qualities of a room or building that determine how sound is transmitted in it." +
            "<br><br>" +
            "(B) 'visuals' means the pictures or images used to illustrate or accompany something." +
            "<br><br>" +
            "(C) 'aesthetics' means a set of principles concerned with the nature and appreciation of beauty." +
            "<br><br>" +
            "(D) 'dimensions' means a measurable extent of a particular kind, such as length, breadth, depth, or height.",
         chinese_explanation: "(A) '声学' 一词意味着决定声音在其中传播的房间或建筑物的特性或质量。" +
            "<br><br>" +
            "(B) '视觉效果' 意味着用来说明或伴随某事的图片或图像。" +
            "<br><br>" +
            "(C) '美学' 意味着一套关于美的本质和欣赏的原则。" +
            "<br><br>" +
            "(D) '尺寸' 意味着某种特定种类的可测量范围，如长度、宽度、深度或高度。"
    },
    {
        id: 3,
        question: "The company's __________ into international markets led to a significant increase in profits.",
        chinese_question: "公司进入国际市场的 __________ 导致了利润的大幅增长。",
        answers: [
            { option: "A", answer: "expansion", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "B", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "C", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'expansion' means the action of becoming larger or more extensive." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'isolation' means the process or fact of isolating or being isolated.",
        chinese_explanation: "(A) '扩展' 意味着变得更大或更广泛的行动。" +
            "<br><br>" +
            "(B) '下降' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
            "<br><br>" +
            "(C) '减少' 意味着使某物变得更小或减少的动作或事实。" +
            "<br><br>" +
            "(D) '隔离' 意味着隔离或被隔离的过程或事实。"
    },
    {
        id: 4,
        question: "The government announced an __________ for all political prisoners, allowing them to be released without facing charges.",
        chinese_question: "政府宣布对所有政治犯实行 __________，允许他们在不受指控的情况下获释。",
        answers: [
            { option: "A", answer: "conviction", chinese_answer: "定罪", chinese_romanization: "dìngzuì" },
            { option: "B", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
            { option: "C", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
            { option: "D", answer: "sentence", chinese_answer: "判决", chinese_romanization: "pànjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amnesty' means an official pardon for people who have been convicted of political offenses." +
            "<br><br>" +
            "(A) 'conviction' means a formal declaration that someone is guilty of a criminal offense." +
            "<br><br>" +
            "(C) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." +
            "<br><br>" +
            "(D) 'sentence' means the punishment assigned to a defendant found guilty by a court.",
        chinese_explanation: "(B) '大赦' 一词意味着对因政治犯罪被定罪的人实行的官方赦免。" +
            "<br><br>" +
            "(A) '定罪' 意味着正式宣布某人犯有刑事犯罪。" +
            "<br><br>" +
            "(C) '惩罚' 意味着对犯罪行为的惩罚或处罚。" +
            "<br><br>" +
            "(D) '判决' 意味着法院对被判有罪的被告所给予的惩罚。"
    },
    {
        id: 5,
        question: "Her __________ of luxury and comfort in order to pursue a minimalist lifestyle inspired many.",
        chinese_question: "她为了追求极简主义生活方式而放弃奢华和舒适的__________激励了许多人。",
        answers: [
            { option: "A", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "abnegation", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "D", answer: "ambition", chinese_answer: "雄心", chinese_romanization: "xióngxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abnegation' means the act of renouncing or rejecting something, typically a belief or way of life." +
            "<br><br>" +
            "(A) 'selfishness' means the quality or state of being selfish." +
            "<br><br>" +
            "(C) 'indulgence' means the action or fact of indulging." +
            "<br><br>" +
            "(D) 'ambition' means a strong desire to do or achieve something.",
        chinese_explanation: "(B) '放弃' 一词意味着放弃或拒绝某事，通常是一种信仰或生活方式。" +
            "<br><br>" +
            "(A) '自私' 意味着自私的品质或状态。" +
            "<br><br>" +
            "(C) '放纵' 意味着放纵的行为或事实。" +
            "<br><br>" +
            "(D) '雄心' 意味着一种强烈的愿望去做或实现某事。"
    },
    {
        id: 6,
        question: "The lavish banquet provided a __________ of delicious foods, overwhelming the guests.",
        chinese_question: "奢华的宴会提供了 __________ 的美味食物，让客人感到不知所措。",
        answers: [
            { option: "A", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "B", answer: "famine", chinese_answer: "饥荒", chinese_romanization: "jīhuāng" },
            { option: "C", answer: "surfeit", chinese_answer: "过量", chinese_romanization: "guòliàng" },
            { option: "D", answer: "shortage", chinese_answer: "短缺", chinese_romanization: "duǎnquē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surfeit' means an excessive amount of something." +
            "<br><br>" +
            "(A) 'scarcity' means the state of being scarce or in short supply; shortage." +
            "<br><br>" +
            "(B) 'famine' means extreme scarcity of food." +
            "<br><br>" +
            "(D) 'shortage' means a state or situation in which something needed cannot be obtained in sufficient amounts.",
        chinese_explanation: "(C) '过量' 一词意味着某物的过多量。" +
            "<br><br>" +
            "(A) '稀缺' 意味着稀缺或短缺的状态；短缺。" +
            "<br><br>" +
            "(B) '饥荒' 意味着食物的极度稀缺。" +
            "<br><br>" +
            "(D) '短缺' 意味着需要的某物无法获得足够数量的状态或情况。"
    },
    {
        id: 7,
        question: "The artist's studio was filled with all sorts of __________, including brushes, paints, canvases, and easels.",
        chinese_question: "艺术家的工作室里摆满了各种 __________，包括刷子、颜料、画布和画架。",
        answers: [
            { option: "A", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" },
            { option: "B", answer: "paraphernalia", chinese_answer: "用具", chinese_romanization: "yòngjù" },
            { option: "C", answer: "decorations", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "D", answer: "clothing", chinese_answer: "衣服", chinese_romanization: "yīfú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paraphernalia' means miscellaneous articles, especially the equipment needed for a particular activity." +
            "<br><br>" +
            "(A) 'furniture' means large movable equipment used to make a house, office, or other space suitable for living or working." +
            "<br><br>" +
            "(C) 'decorations' means things that serve as ornaments or adornments." +
            "<br><br>" +
            "(D) 'clothing' means garments collectively; clothes.",
        chinese_explanation: "(B) '用具' 一词意味着杂项物品，特别是某项活动所需的设备。" +
            "<br><br>" +
            "(A) '家具' 意味着使房屋、办公室或其他空间适合居住或工作的可移动大设备。" +
            "<br><br>" +
            "(C) '装饰' 意味着作为装饰品或装饰的东西。" +
            "<br><br>" +
            "(D) '衣服' 意味着服装总称；衣服。"
    },
    {
        id: 8,
        question: "The weather in this region is highly __________, making it difficult to predict whether it will be sunny or rainy.",
        chinese_question: "该地区的天气高度 __________ ，使得很难预测是晴天还是雨天。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "恒定", chinese_romanization: "héngdìng" },
            { option: "B", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "variable", chinese_answer: "多变", chinese_romanization: "duōbiàn" },
            { option: "D", answer: "unchanging", chinese_answer: "不变", chinese_romanization: "bùbiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'variable' means not consistent or having a fixed pattern; liable to change." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail." +
            "<br><br>" +
            "(D) 'unchanging' means not changing; remaining the same.",
        chinese_explanation: "(C) '多变' 一词意味着不一致或没有固定模式；容易改变。" +
            "<br><br>" +
            "(A) '恒定' 意味着在一段时间内持续发生。" +
            "<br><br>" +
            "(B) '稳定' 意味着不太可能改变或失败。" +
            "<br><br>" +
            "(D) '不变' 意味着不变；保持不变。"
    },
    {
        id: 9,
        question: "The country’s immigration policies were heavily criticized for encouraging __________ and discrimination, leading to widespread fear and hostility towards foreigners.",
        chinese_question: "该国的移民政策因鼓励 __________ 和歧视而受到严厉批评，导致对外国人的普遍恐惧和敌意。",
        answers: [
            { option: "A", answer: "tolerance", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "B", answer: "acceptance", chinese_answer: "接纳", chinese_romanization: "jiēnà" },
            { option: "C", answer: "xenophobia", chinese_answer: "排外心理", chinese_romanization: "pái wài xīnlǐ" },
            { option: "D", answer: "openness", chinese_answer: "开放", chinese_romanization: "kāifàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'xenophobia' means dislike of or prejudice against people from other countries." +
            "<br><br>" +
            "(A) 'tolerance' means the ability or willingness to tolerate the existence of opinions or behavior that one dislikes or disagrees with." +
            "<br><br>" +
            "(B) 'acceptance' means the action of consenting to receive or undertake something offered." +
            "<br><br>" +
            "(D) 'openness' means lack of restriction; accessibility.",
        chinese_explanation: "(C) '排外心理' 意味着对来自其他国家的人不喜欢或有偏见。" +
            "<br><br>" +
            "(A) '宽容' 意味着忍受不喜欢或不同意的意见或行为的能力或意愿。" +
            "<br><br>" +
            "(B) '接纳' 意味着同意接受或承担所提供的东西的行为。" +
            "<br><br>" +
            "(D) '开放' 意味着没有限制；可达性。"
    },
    {
        id: 10,
        question: "The rider wore traditional __________, which were specifically designed for horseback riding and had a distinctive, flared shape at the hips.",
        chinese_question: "骑手穿着传统的 __________，这些裤子专为骑马设计，臀部有独特的喇叭形。",
        answers: [
            { option: "A", answer: "jeans", chinese_answer: "牛仔裤", chinese_romanization: "niúzǎikù" },
            { option: "B", answer: "shorts", chinese_answer: "短裤", chinese_romanization: "duǎnkù" },
            { option: "C", answer: "jodhpurs", chinese_answer: "马裤", chinese_romanization: "mǎkù" },
            { option: "D", answer: "overalls", chinese_answer: "工装裤", chinese_romanization: "gōngzhuāng kù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jodhpurs' means full-length trousers worn for horseback riding, close-fitting below the knee and flaring at the hip." +
            "<br><br>" +
            "(A) 'jeans' means hard-wearing trousers made of denim or other cotton fabric." +
            "<br><br>" +
            "(B) 'shorts' means short trousers that reach only to the knees or thighs." +
            "<br><br>" +
            "(D) 'overalls' means a garment consisting of trousers with a front flap over the chest, supported by straps over the shoulders.",
        chinese_explanation: "'马裤' 一词意味着骑马时穿的全长裤子，膝盖以下紧身，臀部喇叭形。" +
            "<br><br>" +
            "(A) '牛仔裤' 意味着由牛仔布或其他棉布制成的耐穿裤子。" +
            "<br><br>" +
            "(B) '短裤' 意味着只到膝盖或大腿的短裤。" +
            "<br><br>" +
            "(D) '工装裤' 意味着一种由背带支撑的裤子，上身覆盖胸前的前襟。"
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
