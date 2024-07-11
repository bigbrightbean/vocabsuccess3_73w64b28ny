// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The lake was __________, with barely a ripple disturbing its smooth surface.",
        chinese_question: "湖面 __________，几乎没有涟漪打扰其平静的表面。",
        answers: [
            { option: "A", answer: "turbulent", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "B", answer: "placid", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "rough", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "D", answer: "stormy", chinese_answer: "暴风雨", chinese_romanization: "bàofēngyǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'placid' means not easily upset or excited; calm and peaceful." +
            "<br><br>" +
            "(A) 'turbulent' means characterized by conflict, disorder, or confusion." +
            "<br><br>" +
            "(C) 'rough' means having an uneven or irregular surface." +
            "<br><br>" +
            "(D) 'stormy' means characterized by strong winds and usually rain, thunder, lightning, or snow.",
        chinese_explanation: "(B) '平静' 一词意味着不容易心烦或兴奋；平静和宁静。" +
            "<br><br>" +
            "(A) '动荡' 意味着以冲突、混乱或混乱为特征。" +
            "<br><br>" +
            "(C) '粗糙' 意味着表面不平或不规则。" +
            "<br><br>" +
            "(D) '暴风雨' 意味着以强风和通常是雨、雷、电或雪为特征。"
    },
    {
        id: 2,
        question: "Despite losing the competition, she was __________ in congratulating the winner.",
        chinese_question: "尽管输了比赛，她仍然 __________ 地祝贺获胜者。",
        answers: [
            { option: "A", answer: "petty", chinese_answer: "小气", chinese_romanization: "xiǎoqì" },
            { option: "B", answer: "mean-spirited", chinese_answer: "心胸狭窄", chinese_romanization: "xīnxiōng xiázhǎi" },
            { option: "C", answer: "magnanimous", chinese_answer: "宽宏大量", chinese_romanization: "kuānhóng dàliàng" },
            { option: "D", answer: "spiteful", chinese_answer: "恶意", chinese_romanization: "èyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'magnanimous' means generous or forgiving, especially towards a rival or less powerful person." +
            "<br><br>" +
            "(A) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(B) 'mean-spirited' means inconsiderate and unsympathetic." +
            "<br><br>" +
            "(D) 'spiteful' means showing or caused by malice.",
        chinese_explanation: "(C) '宽宏大量' 一词意味着慷慨或宽容的，特别是对竞争对手或不太有权力的人。" +
            "<br><br>" +
            "(A) '小气' 意味着不重要的；琐碎的。" +
            "<br><br>" +
            "(B) '心胸狭窄' 意味着不体贴和没有同情心的。" +
            "<br><br>" +
            "(D) '恶意' 意味着表现或由恶意引起的。"
    },
    {
        id: 3,
        question: "The spies held a __________ meeting to exchange sensitive information without being detected.",
        chinese_question: "间谍们举行了一次 __________ 会议，以便在不被发现的情况下交换敏感信息。",
        answers: [
            { option: "A", answer: "clandestine", chinese_answer: "秘密", chinese_romanization: "mìmì" },
            { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "whimsical", chinese_answer: "异想天开", chinese_romanization: "yìxiǎng tiānkāi" },
            { option: "D", answer: "precarious", chinese_answer: "危险", chinese_romanization: "wēixiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clandestine' means kept secret or done secretively." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'whimsical' means playfully quaint or fanciful." +
            "<br><br>" +
            "(D) 'precarious' means not securely held or in position; dangerously likely to fall or collapse.",
        chinese_explanation: "(A) '秘密'一词意味着秘密进行或秘密地做。" +
            "<br><br>" +
            "(B) '平凡' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '异想天开' 意味着充满奇特和幻想。" +
            "<br><br>" +
            "(D) '危险' 意味着不安全地固定或可能坠落或坍塌。"
    },
    {
        id: 4,
        question: "The environmentalist’s __________ speech highlighted the urgent need for action against climate change.",
        chinese_question: "环保主义者的 __________ 演讲突出了对抗气候变化的紧迫行动需求。",
        answers: [
            { option: "A", answer: "impassioned", chinese_answer: "充满激情", chinese_romanization: "chōngmǎn jīqíng" },
            { option: "B", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "detached", chinese_answer: "超然", chinese_romanization: "chāorán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impassioned' means filled with or showing great emotion." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'detached' means disengaged and showing no emotional involvement.",
        chinese_explanation: "(A) '充满激情'一词意味着充满或表现出强烈的情感。" +
            "<br><br>" +
            "(B) '冷漠' 意味着表现或感到没有兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(D) '超然' 意味着脱离且不显示情感参与。"
    },
    {
        id: 5,
        question: "The manager's __________ decision, made after careful analysis and consideration, led to the company's financial success.",
        chinese_question: "经理 __________ 的决定，在仔细分析和考虑后做出，导致了公司的财务成功。",
        answers: [
            { option: "A", answer: "astute", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
            { option: "B", answer: "rash", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "C", answer: "reckless", chinese_answer: "不顾后果", chinese_romanization: "bùgù hòuguǒ" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage." +
            "<br><br>" +
            "(B) 'rash' means displaying or proceeding from a lack of careful consideration of the possible consequences of an action." +
            "<br><br>" +
            "(C) 'reckless' means heedless of danger or the consequences of one's actions." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care over something.",
        chinese_explanation: "(A) '精明'一词意味着具有或表现出能够准确评估情况或人物，并将其转化为自己的优势。" +
            "<br><br>" +
            "(B) '鲁莽' 意味着缺乏仔细考虑行动可能后果的表现或进行。" +
            "<br><br>" +
            "(C) '不顾后果' 意味着不顾危险或行为后果。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未能妥善照顾某事。"
    },
    {
        id: 6,
        question: "The detective's __________ attention to detail, which involved scrutinizing every piece of evidence, was crucial in solving the complex case.",
        chinese_question: "侦探对细节的 __________ 关注，包括仔细审查每一件证据，对于解决复杂案件至关重要。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "C", answer: "meticulous", chinese_answer: "细致", chinese_romanization: "xìzhì" },
            { option: "D", answer: "haphazard", chinese_answer: "杂乱", chinese_romanization: "záluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meticulous' means showing great attention to detail." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at the surface." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(C) '细致'一词意味着非常注重细节。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或考虑避免伤害或错误。" +
            "<br><br>" +
            "(B) '肤浅' 意味着存在或发生在表面。" +
            "<br><br>" +
            "(D) '杂乱' 意味着缺乏明显的组织原则。"
    },
    {
        id: 7,
        question: "The philanthropist's __________ donations, which funded numerous educational and healthcare projects, had a significant impact on the community, improving many lives.",
        chinese_question: "慈善家的 __________ 捐赠，为许多教育和医疗项目提供了资金，对社区产生了重大影响，改善了许多人的生活。",
        answers: [
            { option: "A", answer: "stingy", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "B", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "reluctant", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" },
            { option: "D", answer: "meager", chinese_answer: "微薄", chinese_romanization: "wēibó" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
            "<br><br>" +
            "(A) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(C) 'reluctant' means unwilling and hesitant." +
            "<br><br>" +
            "(D) 'meager' means lacking in quantity or quality.",
        chinese_explanation: "(B) '慷慨'一词意味着愿意给予比必要或预期更多的东西，特别是钱。" +
            "<br><br>" +
            "(A) '吝啬' 意味着不愿给予或花费；不慷慨。" +
            "<br><br>" +
            "(C) '不情愿' 意味着不愿意和犹豫的。" +
            "<br><br>" +
            "(D) '微薄' 意味着数量或质量不足的。"
    },
    {
        id: 8,
        question: "The artist's __________ style, characterized by bold colors and abstract forms, was instantly recognizable and admired by many.",
        chinese_question: "这位艺术家的 __________ 风格，以大胆的颜色和抽象的形式为特点，立刻被认出并受到许多人的钦佩。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "B", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "C", answer: "unique", chinese_answer: "独特", chinese_romanization: "dútè" },
            { option: "D", answer: "derivative", chinese_answer: "模仿", chinese_romanization: "mófǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unique' means being the only one of its kind." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'obscure' means not discovered or known about." +
            "<br><br>" +
            "(D) 'derivative' means imitative of the work of another person.",
        chinese_explanation: "(C) '独特'一词意味着独一无二。" +
            "<br><br>" +
            "(A) '传统' 意味着基于或符合一般做法或信仰。" +
            "<br><br>" +
            "(B) '模糊' 意味着未被发现或知道。" +
            "<br><br>" +
            "(D) '模仿' 意味着模仿他人作品。"
    },
    {
        id: 9,
        question: "The politician's __________ remarks, made without consideration for the audience's feelings, offended many people at the rally.",
        chinese_question: "这位政客的 __________ 言论，没有考虑到听众的感受，在集会上冒犯了许多人。",
        answers: [
            { option: "A", answer: "diplomatic", chinese_answer: "圆滑", chinese_romanization: "yuánhuá" },
            { option: "B", answer: "tactless", chinese_answer: "不得体", chinese_romanization: "bùdétǐ" },
            { option: "C", answer: "considerate", chinese_answer: "体贴", chinese_romanization: "tǐtiē" },
            { option: "D", answer: "articulate", chinese_answer: "口齿伶俐", chinese_romanization: "kǒuchǐ línglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tactless' means showing a lack of sensitivity in dealing with others or with difficult issues." +
            "<br><br>" +
            "(A) 'diplomatic' means dealing with people in a sensitive and effective way." +
            "<br><br>" +
            "(C) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(D) 'articulate' means having the ability to speak fluently and coherently.",
        chinese_explanation: "(B) '不得体'一词意味着在处理他人或棘手问题时缺乏敏感性。" +
            "<br><br>" +
            "(A) '圆滑' 意味着以一种敏感和有效的方式与人打交道。" +
            "<br><br>" +
            "(C) '体贴' 意味着小心不要给他人带来不便或伤害。" +
            "<br><br>" +
            "(D) '口齿伶俐' 意味着有能力流利而连贯地讲话。"
    },
    {
        id: 10,
        question: "The festival's __________ atmosphere, characterized by vibrant colors, lively music, and joyous celebrations, attracted visitors from around the world.",
        chinese_question: "节日的 __________ 氛围，以鲜艳的色彩、欢快的音乐和欢乐的庆祝活动为特点，吸引了来自世界各地的游客。",
        answers: [
            { option: "A", answer: "somber", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "B", answer: "dreary", chinese_answer: "阴沉", chinese_romanization: "yīnchén" },
            { option: "C", answer: "festive", chinese_answer: "喜庆", chinese_romanization: "xǐqìng" },
            { option: "D", answer: "gloomy", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'festive' means having the atmosphere of a celebration." +
            "<br><br>" +
            "(A) 'somber' means dark or dull in color or tone." +
            "<br><br>" +
            "(B) 'dreary' means dull, bleak, and lifeless." +
            "<br><br>" +
            "(D) 'gloomy' means dark or poorly lit.",
        chinese_explanation: "(C) '喜庆'一词意味着具有庆祝的气氛。" +
            "<br><br>" +
            "(A) '忧郁' 意味着颜色或色调暗淡。" +
            "<br><br>" +
            "(B) '阴沉' 意味着阴暗、无生气。" +
            "<br><br>" +
            "(D) '阴暗' 意味着黑暗或光线不足。"
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
