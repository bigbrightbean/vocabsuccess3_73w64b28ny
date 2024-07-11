// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The actress made a brief __________ appearance in the movie, delighting her fans.",
        chinese_question: "这位女演员在电影中做了一个短暂的 __________ 出演，让她的粉丝们感到高兴。",
        answers: [
            { option: "A", answer: "cameo", chinese_answer: "客串", chinese_romanization: "kèchuàn" },
            { option: "B", answer: "leading", chinese_answer: "主角", chinese_romanization: "zhǔjiǎo" },
            { option: "C", answer: "supporting", chinese_answer: "配角", chinese_romanization: "pèijiǎo" },
            { option: "D", answer: "extended", chinese_answer: "长期", chinese_romanization: "chángqī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cameo' means a small but noticeable part in a movie or play." +
            "<br><br>" +
            "(B) 'leading' means the main role." +
            "<br><br>" +
            "(C) 'supporting' means a secondary role." +
            "<br><br>" +
            "(D) 'extended' means a longer appearance.",
        chinese_explanation: "(A) '客串' 意味着在电影或戏剧中小而显眼的角色。" +
            "<br><br>" +
            "(B) '主角' 意味着主要角色。" +
            "<br><br>" +
            "(C) '配角' 意味着次要角色。" +
            "<br><br>" +
            "(D) '长期' 意味着较长的出演。"
    },
    {
        id: 2,
        question: "The __________ of good ideas in the meeting led to a lack of progress on the project.",
        chinese_question: "会议上好主意的__________导致项目缺乏进展。",
        answers: [
            { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "C", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" },
            { option: "D", answer: "surplus", chinese_answer: "剩余", chinese_romanization: "shèngyú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scarcity' means the state of being scarce or in short supply." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'excess' means an amount of something that is more than necessary." +
            "<br><br>" +
            "(D) 'surplus' means an amount of something left over when requirements have been met.",
        chinese_explanation: "(B) '稀缺'一词意味着稀缺或供应不足的状态。" +
            "<br><br>" +
            "(A) '丰富' 意味着数量非常大。" +
            "<br><br>" +
            "(C) '过量' 意味着超过必要的数量。" +
            "<br><br>" +
            "(D) '剩余' 意味着满足需求后剩余的数量。"
    },
    {
        id: 3,
        question: "The chef thinly sliced the __________ and arranged it artfully on the charcuterie board.",
        chinese_question: "厨师将 __________ 切成薄片，并巧妙地摆放在拼盘上。",
        answers: [
            { option: "A", answer: "cheese", chinese_answer: "奶酪", chinese_romanization: "nǎilào" },
            { option: "B", answer: "bread", chinese_answer: "面包", chinese_romanization: "miànbāo" },
            { option: "C", answer: "prosciutto", chinese_answer: "意大利火腿", chinese_romanization: "yìdàlì huǒtuǐ" },
            { option: "D", answer: "vegetable", chinese_answer: "蔬菜", chinese_romanization: "shūcài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosciutto' means Italian dry-cured ham that is usually thinly sliced and served uncooked." +
            "<br><br>" +
            "(A) 'cheese' means a food made from the pressed curds of milk." +
            "<br><br>" +
            "(B) 'bread' means food made of flour, water, and yeast or another leavening agent, mixed together and baked." +
            "<br><br>" +
            "(D) 'vegetable' means a plant or part of a plant used as food.",
        chinese_explanation: "(C) '意大利火腿' 一词意味着意大利干腌火腿，通常切成薄片并生吃。" +
            "<br><br>" +
            "(A) '奶酪' 意味着由奶压制凝乳制成的食物。" +
            "<br><br>" +
            "(B) '面包' 意味着由面粉、水和酵母或其他发酵剂混合在一起并烘烤而成的食物。" +
            "<br><br>" +
            "(D) '蔬菜' 意味着用作食物的植物或植物的一部分。"
    },
    {
        id: 4,
        question: "The movie perpetuated the __________ that all athletes are unintelligent, which upset many viewers.",
        chinese_question: "这部电影延续了所有运动员都不聪明的 __________，这让许多观众感到不满。",
        answers: [
            { option: "A", answer: "truth", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "stereotype", chinese_answer: "刻板印象", chinese_romanization: "kèbǎn yìnxiàng" },
            { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "D", answer: "individuality", chinese_answer: "个性", chinese_romanization: "gèxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stereotype' means a widely held but fixed and oversimplified image or idea of a particular type of person or thing." +
            "<br><br>" +
            "(A) 'truth' means the quality or state of being true." +
            "<br><br>" +
            "(C) 'reality' means the world or the state of things as they actually exist." +
            "<br><br>" +
            "(D) 'individuality' means the quality or character of a particular person or thing that distinguishes them from others of the same kind.",
        chinese_explanation: "(B) '刻板印象' 一词意味着对某种类型的人或事物的普遍但固定和过于简单化的印象或观念。" +
            "<br><br>" +
            "(A) '事实' 意味着真实的质量或状态。" +
            "<br><br>" +
            "(C) '现实' 意味着事物实际存在的世界或状态。" +
            "<br><br>" +
            "(D) '个性' 意味着某人或某物的特质或特征，使其与同类的其他人区分开来。"
    },
    {
        id: 5,
        question: "The speaker stepped up to the __________ to deliver his powerful speech to the eager audience.",
        chinese_question: "演讲者走上 __________ 向渴望的观众发表他有力的演讲。",
        answers: [
            { option: "A", answer: "chair", chinese_answer: "椅子", chinese_romanization: "yǐzi" },
            { option: "B", answer: "desk", chinese_answer: "书桌", chinese_romanization: "shūzhuō" },
            { option: "C", answer: "rostrum", chinese_answer: "讲台", chinese_romanization: "jiǎngtái" },
            { option: "D", answer: "stage", chinese_answer: "舞台", chinese_romanization: "wǔtái" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rostrum' means a raised platform on which a person stands to make a public speech, receive an award, or conduct an orchestra." +
            "<br><br>" +
            "(A) 'chair' means a separate seat for one person, typically with a back and four legs." +
            "<br><br>" +
            "(B) 'desk' means a piece of furniture with a flat or sloping surface and typically with drawers, used for writing, reading, or other academic or professional activities." +
            "<br><br>" +
            "(D) 'stage' means a raised floor or platform, typically in a theater, on which actors, entertainers, or speakers perform.",
        chinese_explanation: "'讲台' 一词意味着一个人站在上面进行公开演讲、接受奖项或指挥乐队的高台。" +
            "<br><br>" +
            "(A) '椅子' 意味着一个单独的座位，通常有靠背和四条腿。" +
            "<br><br>" +
            "(B) '书桌' 意味着一种家具，有平面或倾斜的表面，通常有抽屉，用于写作、阅读或其他学术或专业活动。" +
            "<br><br>" +
            "(D) '舞台' 意味着一个升高的地板或平台，通常在剧院里，演员、娱乐人员或演讲者在上面表演。"
    },
    {
        id: 6,
        question: "The __________ of the modern sculpture with the ancient architecture created a striking visual contrast that captivated visitors.",
        chinese_question: "现代雕塑与古老建筑的 __________ 形成了引人注目的视觉对比，吸引了游客。",
        answers: [
            { option: "A", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "division", chinese_answer: "分割", chinese_romanization: "fēngē" },
            { option: "D", answer: "juxtaposition", chinese_answer: "并置", chinese_romanization: "bìngzhì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'juxtaposition' means the fact of two things being seen or placed close together with contrasting effect." +
            "<br><br>" +
            "(A) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(B) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(C) 'division' means the action of separating something into parts or the process of being separated.",
        chinese_explanation: "(D) '并置' 意味着将两件事物放在一起或并列以产生对比效果。" +
            "<br><br>" +
            "(A) '分离' 意味着移动或被移动开来的行为或状态。" +
            "<br><br>" +
            "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(C) '分割' 意味着将某物分成部分的行为或被分开的过程。"
    },
    {
        id: 7,
        question: "The judge emphasized the importance of not letting personal __________ affect the decision in the case.",
        chinese_question: "法官强调了不要让个人 __________ 影响案件决策的重要性。",
        answers: [
            { option: "A", answer: "fairness", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
            { option: "B", answer: "knowledge", chinese_answer: "知识", chinese_romanization: "zhīshì" },
            { option: "C", answer: "prejudice", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchálì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prejudice' means preconceived opinion that is not based on reason or actual experience." +
            "<br><br>" +
            "(A) 'fairness' means impartial and just treatment." +
            "<br><br>" +
            "(B) 'knowledge' means facts, information, and skills acquired through experience or education." +
            "<br><br>" +
            "(D) 'insight' means the capacity to gain an accurate and deep understanding of someone or something.",
        chinese_explanation: "(C) '偏见' 一词意味着不基于理性或实际经验的先入为主的观点。" +
            "<br><br>" +
            "(A) '公平' 意味着公正和公正的对待。" +
            "<br><br>" +
            "(B) '知识' 意味着通过经验或教育获得的事实、信息和技能。" +
            "<br><br>" +
            "(D) '洞察力' 意味着获得准确和深刻理解某人或某事的能力。"
    },
    {
        id: 8,
        question: "The play was supposed to be a serious drama, but it turned into a __________ of the original story.",
        chinese_question: "这部戏本应是一出严肃的戏剧，但却变成了原故事的 __________。",
        answers: [
            { option: "A", answer: "tribute", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
            { option: "B", answer: "adaptation", chinese_answer: "改编", chinese_romanization: "gǎibiān" },
            { option: "C", answer: "travesty", chinese_answer: "滑稽模仿", chinese_romanization: "huájī mófǎng" },
            { option: "D", answer: "homage", chinese_answer: "敬意", chinese_romanization: "jìngyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'travesty' means a false, absurd, or distorted representation of something." +
            "<br><br>" +
            "(A) 'tribute' means an act, statement, or gift that is intended to show gratitude, respect, or admiration." +
            "<br><br>" +
            "(B) 'adaptation' means a movie, television drama, or stage play that has been adapted from a written work." +
            "<br><br>" +
            "(D) 'homage' means special honor or respect shown publicly.",
        chinese_explanation: "(C) '滑稽模仿' 一词意味着对某事的虚假、荒谬或扭曲的表现。" +
            "<br><br>" +
            "(A) '致敬' 意味着旨在表示感谢、尊重或钦佩的行为、声明或礼物。" +
            "<br><br>" +
            "(B) '改编' 意味着从书面作品改编的电影、电视剧或舞台剧。" +
            "<br><br>" +
            "(D) '敬意' 意味着公开表示的特别荣誉或尊重。"
    },
    {
        id: 9,
        question: "The warm weather in January was an __________ that had everyone talking, as it was unusual for this time of year.",
        chinese_question: "一月的温暖天气是一个 __________，让所有人都在谈论，因为这在这个季节是不寻常的。",
        answers: [
            { option: "A", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
            { option: "B", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "C", answer: "regularity", chinese_answer: "规律", chinese_romanization: "guīlǜ" },
            { option: "D", answer: "conformity", chinese_answer: "符合", chinese_romanization: "fúhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anomaly' means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(A) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness." +
            "<br><br>" +
            "(C) 'regularity' means the state or quality of being regular." +
            "<br><br>" +
            "(D) 'conformity' means compliance with standards, rules, or laws.",
        chinese_explanation: "(B) '异常' 一词意味着偏离标准、正常或预期的事物。" +
            "<br><br>" +
            "(A) '一致性' 意味着在应用中的一致性，通常是为了逻辑、准确性或公平的缘故。" +
            "<br><br>" +
            "(C) '规律' 意味着规律的状态或质量。" +
            "<br><br>" +
            "(D) '符合' 意味着遵守标准、规则或法律。"
    },
    {
        id: 10,
        question: "The new marketing campaign was a __________ for increased sales, bringing in a wave of new customers.",
        chinese_question: "新的营销活动是销售增长的 __________，带来了大量的新客户。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "B", answer: "deterrent", chinese_answer: "威慑", chinese_romanization: "wēishè" },
            { option: "C", answer: "catalyst", chinese_answer: "催化剂", chinese_romanization: "cuīhuàjì" },
            { option: "D", answer: "obstacle", chinese_answer: "障碍物", chinese_romanization: "zhàng'ài wù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'catalyst' means a person or thing that precipitates an event." +
            "<br><br>" +
            "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(B) 'deterrent' means a thing that discourages or is intended to discourage someone from doing something." +
            "<br><br>" +
            "(D) 'obstacle' means a thing that blocks one's way or prevents or hinders progress.",
        chinese_explanation: "(C) '催化剂' 一词意味着促使事件发生的人或事物。" +
            "<br><br>" +
            "(A) '障碍' 意味着对某事或某人的抵抗、延迟或阻碍。" +
            "<br><br>" +
            "(B) '威慑' 意味着阻止或旨在阻止某人做某事的事物。" +
            "<br><br>" +
            "(D) '障碍物' 意味着阻挡道路或阻止或妨碍进展的事物。"
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
