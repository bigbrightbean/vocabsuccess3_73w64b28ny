// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The soup was __________, lacking any flavor or seasoning.",
        chinese_question: "这汤很 __________，缺乏任何味道或调味。",
        answers: [
            { option: "A", answer: "flavorful", chinese_answer: "有味", chinese_romanization: "yǒuwèi" },
            { option: "B", answer: "spicy", chinese_answer: "辛辣", chinese_romanization: "xīnlà" },
            { option: "C", answer: "insipid", chinese_answer: "无味", chinese_romanization: "wúwèi" },
            { option: "D", answer: "tasty", chinese_answer: "美味", chinese_romanization: "měiwèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insipid' means lacking flavor; weak or tasteless." +
            "<br><br>" +
            "(A) 'flavorful' means full of flavor." +
            "<br><br>" +
            "(B) 'spicy' means flavored with or fragrant with spice." +
            "<br><br>" +
            "(D) 'tasty' means having a pleasant, distinct flavor.",
        chinese_explanation: "(C) '无味' 一词意味着缺乏味道的；淡而无味的。" +
            "<br><br>" +
            "'有味' 意味着充满味道的。" +
            "<br><br>" +
            "'辛辣' 意味着有辛香料的味道或香气的。" +
            "<br><br>" +
            "'美味' 意味着具有令人愉快的、独特的味道的。"
    },
    {
        id: 2,
        question: "The __________ host kept the conversation lively and engaging throughout the evening.",
        chinese_question: "那位 __________ 的主持人整晚都保持着热烈和引人入胜的对话。",
        answers: [
            { option: "A", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
            { option: "C", answer: "loquacious", chinese_answer: "健谈", chinese_romanization: "jiàntán" },
            { option: "D", answer: "taciturn", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'loquacious' means tending to talk a great deal; talkative." +
            "<br><br>" +
            "(A) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(B) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'taciturn' means reserved or uncommunicative in speech; saying little.",
        chinese_explanation: "(C) '健谈' 一词意味着倾向于大量谈话的；健谈的。" +
            "<br><br>" +
            "'沉默' 意味着不发出任何声音或伴随任何声音。" +
            "<br><br>" +
            "'矜持' 意味着缓慢地表现出情感或意见。" +
            "<br><br>" +
            "'沉默寡言' 意味着在言语上保守或不善于交流的；说得很少的。"
    },
    {
        id: 3,
        question: "His ideas were so __________ that it was hard to understand what he was trying to say.",
        chinese_question: "他的想法太 __________ 了，很难理解他在说什么。",
        answers: [
            { option: "A", answer: "nebulous", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "B", answer: "distinct", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "C", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "definite", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nebulous' means in the form of a cloud or haze; hazy or unclear." +
            "<br><br>" +
            "(B) 'distinct' means recognizably different in nature from something else of a similar type." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'definite' means clearly stated or decided; not vague or doubtful.",
        chinese_explanation: "(A) '模糊' 一词意味着以云或雾的形式；朦胧或不清楚的。" +
            "<br><br>" +
            "(B) '明确' 意味着在性质上可识别地不同于类似类型的东西。" +
            "<br><br>" +
            "(C) '清晰' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '确定' 意味着清楚地陈述或决定的；不含糊或怀疑的。"
    },
    {
        id: 4,
        question: "The billionaire's __________ activities included donating millions to various charitable organizations.",
        chinese_question: "这位亿万富翁的 __________ 活动包括向各种慈善组织捐赠数百万。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "philanthropic", chinese_answer: "慈善", chinese_romanization: "císhàn" },
            { option: "C", answer: "greedy", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
            { option: "D", answer: "materialistic", chinese_answer: "物质主义", chinese_romanization: "wùzhì zhǔyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'philanthropic' means seeking to promote the welfare of others, especially by donating money to good causes." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'greedy' means having an intense and selfish desire for something, especially wealth, power, or food." +
            "<br><br>" +
            "(D) 'materialistic' means excessively concerned with material possessions; money-oriented.",
        chinese_explanation: "(B) '慈善' 一词意味着寻求促进他人福利，尤其是通过向慈善事业捐款。" +
            "<br><br>" +
            "'自私' 意味着缺乏对他人的考虑；主要关注自己的个人利益或快乐。" +
            "<br><br>" +
            "'贪婪' 意味着对某事物，尤其是财富、权力或食物的强烈和自私的渴望。" +
            "<br><br>" +
            "'物质主义' 意味着过分关注物质财产的；以金钱为导向的。"
    },
    {
        id: 5,
        question: "The children grew increasingly __________ as the birthday party went on, running around and shouting with excitement.",
        chinese_question: "随着生日聚会的进行，孩子们变得越来越 __________，四处奔跑，兴奋地喊着。",
        answers: [
            { option: "A", answer: "sedate", chinese_answer: "沉静", chinese_romanization: "chénjìng" },
            { option: "B", answer: "rambunctious", chinese_answer: "骚动", chinese_romanization: "sāodòng" },
            { option: "C", answer: "subdued", chinese_answer: "镇定", chinese_romanization: "zhèndìng" },
            { option: "D", answer: "tranquil", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rambunctious' means uncontrollably exuberant; boisterous." +
            "<br><br>" +
            "(A) 'sedate' means calm, dignified, and unhurried." +
            "<br><br>" +
            "(C) 'subdued' means (of a person or their manner) quiet and rather reflective or depressed." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(B) '骚动' 一词意味着无法控制的热情洋溢；喧闹的。" +
            "<br><br>" +
            "(A) '沉静' 意味着平静、庄重和不匆忙。" +
            "<br><br>" +
            "(C) '镇定' 意味着（人或其方式）安静而反思或沮丧。" +
            "<br><br>" +
            "(D) '宁静' 意味着没有干扰；宁静。"
    },
    {
        id: 6,
        question: "Although she knew the answer, she remained __________ during the discussion, preferring to listen rather than speak.",
        chinese_question: "虽然她知道答案，但在讨论期间她保持 __________，更喜欢倾听而不是说话。",
        answers: [
            { option: "A", answer: "talkative", chinese_answer: "健谈", chinese_romanization: "jiàntán" },
            { option: "B", answer: "outspoken", chinese_answer: "直言不讳", chinese_romanization: "zhíyán bù huì" },
            { option: "C", answer: "garrulous", chinese_answer: "话多", chinese_romanization: "huà duō" },
            { option: "D", answer: "reticent", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reticent' means not revealing one's thoughts or feelings readily." +
            "<br><br>" +
            "(A) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(B) 'outspoken' means frank in stating one's opinions, especially if they are critical or controversial." +
            "<br><br>" +
            "(C) 'garrulous' means excessively talkative, especially on trivial matters.",
        chinese_explanation: "(D) '沉默寡言' 一词意味着不轻易透露自己的想法或感受。" +
            "<br><br>" +
            "(A) '健谈' 意味着喜欢或善于谈话的。" +
            "<br><br>" +
            "(B) '直言不讳' 意味着在陈述自己的意见时坦率的，尤其是如果它们是批评或有争议的。" +
            "<br><br>" +
            "(C) '话多' 意味着特别是在琐事上过度谈话的。"
    },
    {
        id: 7,
        question: "His __________ humor often irritated his colleagues, who wished he would behave more maturely.",
        chinese_question: "他 __________ 的幽默经常惹恼同事们，他们希望他能表现得更成熟一些。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
            { option: "B", answer: "sophisticated", chinese_answer: "老练", chinese_romanization: "lǎoliàn" },
            { option: "C", answer: "sophomoric", chinese_answer: "幼稚", chinese_romanization: "yòuzhì" },
            { option: "D", answer: "wise", chinese_answer: "明智", chinese_romanization: "míngzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophomoric' means pretentious or juvenile." +
            "<br><br>" +
            "(A) 'mature' means fully developed physically; full-grown." +
            "<br><br>" +
            "(B) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(D) 'wise' means having or showing experience, knowledge, and good judgment.",
        chinese_explanation: "(C) '幼稚' 一词意味着自命不凡或不成熟的。" +
            "<br><br>" +
            "(A) '成熟' 意味着在身体上完全发育的；成熟的。" +
            "<br><br>" +
            "(B) '老练' 意味着具有、表现出或来自于丰富的世俗经验和时尚文化知识的。" +
            "<br><br>" +
            "(D) '明智' 意味着具有或表现出经验、知识和良好判断的。"
    },
    {
        id: 8,
        question: "Despite her talent, she felt __________ about performing in front of a large audience, often experiencing stage fright.",
        chinese_question: "尽管她很有才华，但在大庭广众面前表演时她感到 __________，经常出现舞台恐惧。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "timorous", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" },
            { option: "C", answer: "brave", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "D", answer: "fearless", chinese_answer: "无畏", chinese_romanization: "wúwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'brave' means ready to face and endure danger or pain; showing courage." +
            "<br><br>" +
            "(D) 'fearless' means lacking fear.",
        chinese_explanation: "(B) '胆怯' 一词意味着表现出或遭受紧张、害怕或缺乏信心。" +
            "<br><br>" +
            "(A) '自信' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(C) '勇敢' 意味着准备面对和忍受危险或痛苦；表现出勇气。" +
            "<br><br>" +
            "(D) '无畏' 意味着缺乏恐惧的。"
    },
    {
        id: 9,
        question: "The lender was accused of charging __________ interest rates that took advantage of desperate borrowers.",
        chinese_question: "这位放贷人被指控收取 __________ 的利率，利用了急需借款的借款人。",
        answers: [
            { option: "A", answer: "fair", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
            { option: "B", answer: "reasonable", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "C", answer: "usurious", chinese_answer: "高利", chinese_romanization: "gāolì" },
            { option: "D", answer: "just", chinese_answer: "公正", chinese_romanization: "gōngzhèng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'usurious' means having or charging exorbitant interest rates." +
            "<br><br>" +
            "(A) 'fair' means in accordance with the rules or standards; legitimate." +
            "<br><br>" +
            "(B) 'reasonable' means having sound judgment; fair and sensible." +
            "<br><br>" +
            "(D) 'just' means based on or behaving according to what is morally right and fair.",
        chinese_explanation: "(C) '高利' 一词意味着具有或收取过高的利率。" +
            "<br><br>" +
            "(A) '公平' 意味着符合规则或标准的；合法的。" +
            "<br><br>" +
            "(B) '合理' 意味着有合理的判断；公平和明智的。" +
            "<br><br>" +
            "(D) '公正' 意味着基于或按照道德上正确和公平的行为。"
    },
    {
        id: 10,
        question: "His __________ disregard for the rules resulted in him being expelled from school.",
        chinese_question: "他对规则的 __________ 漠视导致他被学校开除。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "wanton", chinese_answer: "放荡", chinese_romanization: "fàngdàng" },
            { option: "C", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "D", answer: "prudent", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wanton' means (of a cruel or violent action) deliberate and unprovoked." +
            "<br><br>" +
            "(A) 'cautious' means (of a person) careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(B) '放荡' 一词意味着（指残酷或暴力行为）故意且无缘无故的。" +
            "<br><br>" +
            "(A) '谨慎' 意味着（指人）小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(C) '小心' 意味着确保避免潜在危险、意外或伤害的；谨慎的。" +
            "<br><br>" +
            "(D) '谨慎' 意味着表现出对未来的关心和思考的行为。"
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
