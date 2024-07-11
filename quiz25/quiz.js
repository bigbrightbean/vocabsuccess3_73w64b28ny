// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The meeting was __________, filled with routine reports and updates that failed to spark any excitement.",
        chinese_question: "会议非常 __________，充满了常规报告和更新，未能激发任何兴奋感。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "激动人心", chinese_romanization: "jīdòng rén xīn" },
            { option: "B", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "C", answer: "prosaic", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "fascinating", chinese_answer: "引人入胜", chinese_romanization: "yǐn rén rù shèng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosaic' means having the style or diction of prose; lacking poetic beauty; commonplace; unromantic." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'innovative' means featuring new methods; advanced and original." +
            "<br><br>" +
            "(D) 'fascinating' means extremely interesting.",
        chinese_explanation: "(C) '平凡' 一词意味着具有散文的风格或措辞；缺乏诗意之美；平凡的；不浪漫的。" +
            "<br><br>" +
            "(A) '激动人心' 意味着引起极大的热情和热切。" +
            "<br><br>" +
            "(B) '创新' 意味着采用新方法；先进且独创的。" +
            "<br><br>" +
            "(D) '引人入胜' 意味着极其有趣的。"
    },
    {
        id: 2,
        question: "She felt __________ after receiving the news, unsure of what the future held.",
        chinese_question: "她在收到消息后感到 __________，不确定未来会怎样。",
        answers: [
            { option: "A", answer: "reassured", chinese_answer: "放心", chinese_romanization: "fàngxīn" },
            { option: "B", answer: "unsettled", chinese_answer: "不稳定", chinese_romanization: "bù wěndìng" },
            { option: "C", answer: "relieved", chinese_answer: "放心", chinese_romanization: "fàngxīn" },
            { option: "D", answer: "secure", chinese_answer: "安全", chinese_romanization: "ānquán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsettled' means not settled or established; not stable." +
            "<br><br>" +
            "(A) 'reassured' means having confidence restored; made to feel less worried or fearful." +
            "<br><br>" +
            "(C) 'relieved' means no longer feeling distressed or anxious." +
            "<br><br>" +
            "(D) 'secure' means fixed or fastened so as not to give way, become loose, or be lost.",
        chinese_explanation: "(B) '不稳定' 意味着没有安定下来或建立起来；不稳定的。" +
            "<br><br>" +
            "(A) '放心' 意味着恢复了信心；不再感到担心或害怕。" +
            "<br><br>" +
            "(C) '放心' 意味着不再感到痛苦或焦虑。" +
            "<br><br>" +
            "(D) '安全' 意味着固定或紧固，不会松动、变松或丢失。"
    },
    {
        id: 3,
        question: "The laws of physics are __________, remaining consistent throughout the universe.",
        chinese_question: "物理定律是 __________ 的，在整个宇宙中保持一致。",
        answers: [
            { option: "A", answer: "changeable", chinese_answer: "可变", chinese_romanization: "kě biàn" },
            { option: "B", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "C", answer: "immutable", chinese_answer: "不变", chinese_romanization: "bù biàn" },
            { option: "D", answer: "variable", chinese_answer: "变量", chinese_romanization: "biàn liàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'immutable' means unchanging over time or unable to be changed." +
            "<br><br>" +
            "(A) 'changeable' means able to be changed or exchanged." +
            "<br><br>" +
            "(B) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(D) 'variable' means not consistent or having a fixed pattern; liable to change.",
        chinese_explanation: "(C) '不变' 一词意味着随着时间的推移不改变或无法改变的。" +
            "<br><br>" +
            "(A) '可变' 意味着能够被改变或交换的。" +
            "<br><br>" +
            "(B) '灵活' 意味着能够轻松弯曲而不断裂的。" +
            "<br><br>" +
            "(D) '变量' 意味着不一致或没有固定模式的；容易变化的。"
    },
    {
        id: 4,
        question: "The company's __________ nature led to numerous lawsuits with its competitors, creating a hostile business environment.",
        chinese_question: "该公司的 __________ 性质导致了与竞争对手的多起诉讼，创造了一个敌对的商业环境。",
        answers: [
            { option: "A", answer: "non-confrontational", chinese_answer: "非对抗", chinese_romanization: "fēi duìkàng" },
            { option: "B", answer: "peaceable", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "C", answer: "agreeable", chinese_answer: "令人愉快", chinese_romanization: "lìng rén yúkuài" },
            { option: "D", answer: "litigious", chinese_answer: "好诉讼", chinese_romanization: "hào sùsòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'litigious' means unreasonably prone to go to law to settle disputes." +
            "<br><br>" +
            "(A) 'non-confrontational' means tending to deal with situations calmly and diplomatically; not aggressive." +
            "<br><br>" +
            "(B) 'peaceable' means inclined to avoid conflict or dissension." +
            "<br><br>" +
            "(C) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(D) '好诉讼' 一词意味着不合理地倾向于通过法律解决争端。" +
            "<br><br>" +
            "(A) '非对抗' 意味着倾向于冷静和外交地处理情况；不具侵略性。" +
            "<br><br>" +
            "(B) '和平' 意味着倾向于避免冲突或纷争。" +
            "<br><br>" +
            "(C) '令人愉快' 意味着愉快和令人愉悦的；愉快的。"
    },
    {
        id: 5,
        question: "The __________ author published several novels each year, delighting her readers.",
        chinese_question: "这位 __________ 的作家每年出版几部小说，让她的读者们非常高兴。",
        answers: [
            { option: "A", answer: "unproductive", chinese_answer: "不产", chinese_romanization: "bù chǎn" },
            { option: "B", answer: "sluggish", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
            { option: "C", answer: "prolific", chinese_answer: "多产", chinese_romanization: "duōchǎn" },
            { option: "D", answer: "inactive", chinese_answer: "不活跃", chinese_romanization: "bù huóyuè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prolific' means producing many works, results, or offspring." +
            "<br><br>" +
            "(A) 'unproductive' means not producing or able to produce large amounts of goods, crops, or other commodities." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'inactive' means not engaging in or involving any or much physical activity.",
        chinese_explanation: "(C) '多产' 一词意味着生产许多作品、结果或后代的。" +
            "<br><br>" +
            "(A) '不产' 意味着不生产或不能生产大量商品、作物或其他商品的。" +
            "<br><br>" +
            "(B) '缓慢' 意味着移动缓慢或不活跃的。" +
            "<br><br>" +
            "(D) '不活跃' 意味着不参与或不涉及任何或很多体力活动的。"
    },
    {
        id: 6,
        question: "Her __________ remarks during the meeting offended many of her colleagues.",
        chinese_question: "她在会议上的 __________ 评论冒犯了许多同事。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "sardonic", chinese_answer: "讥讽", chinese_romanization: "jīfèng" },
            { option: "C", answer: "kind", chinese_answer: "友善", chinese_romanization: "yǒushàn" },
            { option: "D", answer: "genuine", chinese_answer: "真实", chinese_romanization: "zhēnshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sardonic' means grimly mocking or cynical." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(C) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(B) '讥讽' 一词意味着冷酷地嘲笑或愤世嫉俗的。" +
            "<br><br>" +
            "(A) '真诚' 意味着没有虚伪或欺骗的；源自真实感情的。" +
            "<br><br>" +
            "(C) '友善' 意味着具有或表现出友好、慷慨和体贴的性质。" +
            "<br><br>" +
            "(D) '真实' 意味着真正的；真实的。"
    },
    {
        id: 7,
        question: "His __________ manner and excessive flattery made everyone feel uncomfortable.",
        chinese_question: "他 __________ 的态度和过度的恭维让每个人都感到不舒服。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "genuine", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "C", answer: "unctuous", chinese_answer: "虚情假意", chinese_romanization: "xūqíng jiǎyì" },
            { option: "D", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unctuous' means excessively or ingratiatingly flattering; oily." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(B) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(C) '虚情假意' 一词意味着过分或讨好的奉承；油腻的。" +
            "<br><br>" +
            "(A) '真诚' 意味着没有虚伪或欺骗的；源自真实感情的。" +
            "<br><br>" +
            "(B) '真实' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(D) '诚实' 意味着没有欺骗和虚伪的；真诚的。"
    },
    {
        id: 8,
        question: "After achieving record sales, the team became __________ and failed to innovate further.",
        chinese_question: "在创下销售记录后，团队变得 __________，未能继续创新。",
        answers: [
            { option: "A", answer: "ambitious", chinese_answer: "有雄心", chinese_romanization: "yǒu xióngxīn" },
            { option: "B", answer: "driven", chinese_answer: "有动力", chinese_romanization: "yǒu dònglì" },
            { option: "C", answer: "complacent", chinese_answer: "自满", chinese_romanization: "zìmǎn" },
            { option: "D", answer: "motivated", chinese_answer: "积极", chinese_romanization: "jījí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(A) 'ambitious' means having or showing a strong desire and determination to succeed." +
            "<br><br>" +
            "(B) 'driven' means relentlessly compelled by the need to accomplish a goal; very hard-working and ambitious." +
            "<br><br>" +
            "(D) 'motivated' means provided with a reason to act in a certain way.",
        chinese_explanation: "(C) '自满' 一词意味着对自己或自己的成就表现出洋洋自得或不加批评的满意。" +
            "<br><br>" +
            "(A) '有雄心' 意味着有或表现出强烈的愿望和决心取得成功。" +
            "<br><br>" +
            "(B) '有动力' 意味着非常努力和有雄心。" +
            "<br><br>" +
            "(D) '积极' 意味着由某种原因推动以某种方式行事。"
    },
    {
        id: 9,
        question: "The __________ lifestyle of the wealthy businessman included lavish parties and constant indulgence.",
        chinese_question: "这位富商的 __________ 生活方式包括奢华的派对和不断的享乐。",
        answers: [
            { option: "A", answer: "ascetic", chinese_answer: "苦行", chinese_romanization: "kǔxíng" },
            { option: "B", answer: "hedonistic", chinese_answer: "享乐", chinese_romanization: "xiǎnglè" },
            { option: "C", answer: "restrained", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "D", answer: "frugal", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hedonistic' means engaged in the pursuit of pleasure; sensually self-indulgent." +
            "<br><br>" +
            "(A) 'ascetic' means characterized by severe self-discipline and abstention from all forms of indulgence, typically for religious reasons." +
            "<br><br>" +
            "(C) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(D) 'frugal' means sparing or economical with regard to money or food.",
        chinese_explanation: "(B) '享乐' 一词意味着追求快乐的；感官上自我放纵的。" +
            "<br><br>" +
            "(A) '苦行' 意味着以严格的自律和戒除一切形式的放纵为特征，通常出于宗教原因。" +
            "<br><br>" +
            "(C) '克制' 意味着以保留或适度为特征的；不带情感或冷静的。" +
            "<br><br>" +
            "(D) '节俭' 意味着在钱或食物方面节省或经济的。"
    },
    {
        id: 10,
        question: "The __________ donation helped fund the construction of the new hospital wing.",
        chinese_question: "这笔 __________ 的捐款帮助资助了新医院翼的建设。",
        answers: [
            { option: "A", answer: "stingy", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "B", answer: "munificent", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "miserly", chinese_answer: "小气", chinese_romanization: "xiǎoqì" },
            { option: "D", answer: "frugal", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'munificent' means larger or more generous than is usual or necessary." +
            "<br><br>" +
            "(A) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(C) 'miserly' means hoarding wealth and spending as little money as possible." +
            "<br><br>" +
            "(D) 'frugal' means sparing or economical with regard to money or food.",
        chinese_explanation: "(B) '慷慨' 一词意味着比通常或必要的更大或更慷慨。" +
            "<br><br>" +
            "(A) '吝啬' 意味着不愿给予或花费的；不慷慨的。" +
            "<br><br>" +
            "(C) '小气' 意味着积蓄财富并尽可能少花钱的。" +
            "<br><br>" +
            "(D) '节俭' 意味着在钱或食物方面节省或经济的。"
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
