// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The forest is home to many __________, including deer, foxes, and various bird species.",
        chinese_question: "森林是许多 __________ 的家园，包括鹿、狐狸和各种鸟类。",
        answers: [
            { option: "A", answer: "intruders", chinese_answer: "侵入者", chinese_romanization: "qīnrù zhě" },
            { option: "B", answer: "denizens", chinese_answer: "居民", chinese_romanization: "jūmín" },
            { option: "C", answer: "exiles", chinese_answer: "流亡者", chinese_romanization: "liúwáng zhě" },
            { option: "D", answer: "strangers", chinese_answer: "陌生人", chinese_romanization: "mòshēng rén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'denizens' means an inhabitant or occupant of a particular place." +
            "<br><br>" +
            "(A) 'intruders' means people who intrude, especially into a building with criminal intent." +
            "<br><br>" +
            "(C) 'exiles' means people who live away from their native country, typically for political reasons." +
            "<br><br>" +
            "(D) 'strangers' means people whom one does not know or with whom one is not familiar.",
        chinese_explanation: "(B) '居民' 一词意味着特定地方的居民或居住者。" +
            "<br><br>" +
            "(A) '侵入者' 意味着入侵的人，尤其是有犯罪意图进入建筑物的人。" +
            "<br><br>" +
            "(C) '流亡者' 意味着因政治原因通常住在他们的祖国之外的人。" +
            "<br><br>" +
            "(D) '陌生人' 意味着一个人不认识或不熟悉的人。"
    },
    {
        id: 2,
        question: "His __________ during the meeting shocked everyone, as he openly criticized his superiors.",
        chinese_question: "他在会议上的__________震惊了所有人，因为他公开批评上司。",
        answers: [
            { option: "A", answer: "timidity", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" },
            { option: "B", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "C", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "effrontery", chinese_answer: "厚颜无耻", chinese_romanization: "hòuyán wúchǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'effrontery' refers to insolent or impertinent behavior." +
            "<br><br>" +
            "(A) 'timidity' refers to a lack of courage or confidence." +
            "<br><br>" +
            "(B) 'modesty' refers to the quality of not being too proud or confident about yourself or your abilities." +
            "<br><br>" +
            "(C) 'humility' refers to a modest or low view of one's own importance; humbleness.",
        chinese_explanation: "(D) '厚颜无耻' 指的是无礼或无礼的行为。" +
            "<br><br>" +
            "(A) '胆怯' 指的是缺乏勇气或信心。" +
            "<br><br>" +
            "(B) '谦虚' 指的是不过分自信或自豪的品质。" +
            "<br><br>" +
            "(C) '谦逊' 指的是对自己的重要性持谦虚或低调的态度；谦卑。"
    },
    {
        id: 3,
        question: "The scientist's research focused on factors contributing to __________, aiming to discover how people can live healthier and longer lives.",
        chinese_question: "科学家的研究集中在有助于 __________ 的因素上，旨在发现人们如何能更健康和长寿。",
        answers: [
            { option: "A", answer: "mortality", chinese_answer: "死亡率", chinese_romanization: "sǐwáng lǜ" },
            { option: "B", answer: "longevity", chinese_answer: "长寿", chinese_romanization: "chángshòu" },
            { option: "C", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "D", answer: "youth", chinese_answer: "青春", chinese_romanization: "qīngchūn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'longevity' means long life; the long duration of life." +
            "<br><br>" +
            "(A) 'mortality' means the state of being subject to death." +
            "<br><br>" +
            "(C) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(D) 'youth' means the period between childhood and adult age.",
        chinese_explanation: "(B) '长寿' 一词意味着长寿；寿命长。" +
            "<br><br>" +
            "(A) '死亡率' 意味着受死亡支配的状态。" +
            "<br><br>" +
            "(C) '简洁' 意味着写作或演讲中用词简练准确。" +
            "<br><br>" +
            "(D) '青春' 意味着童年与成年之间的时期。"
    },
    {
        id: 4,
        question: "The government announced the __________ of funds for the new infrastructure project to improve the city's transportation system.",
        chinese_question: "政府宣布了对新基础设施项目的资金 __________，以改善城市的交通系统。",
        answers: [
            { option: "A", answer: "withholding", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "B", answer: "misallocation", chinese_answer: "错配", chinese_romanization: "cuò pèi" },
            { option: "C", answer: "allocation", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "D", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allocation' means the action or process of allocating or distributing something." +
            "<br><br>" +
            "(A) 'withholding' means refusal to give something that is due or desired." +
            "<br><br>" +
            "(B) 'misallocation' means incorrect or inappropriate allocation." +
            "<br><br>" +
            "(D) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size.",
        chinese_explanation: "(C) '分配' 一词意味着分配或分发某物的行为或过程。" +
            "<br><br>" +
            "(A) '扣留' 意味着拒绝给予应有或想要的东西。" +
            "<br><br>" +
            "(B) '错配' 意味着不正确或不适当的分配。" +
            "<br><br>" +
            "(D) '减少' 意味着使某物在数量、程度或大小上变小或变少的行为或事实。"
    },
    {
        id: 5,
        question: "The CEO's __________ of a large salary to ensure the company's survival during tough times was seen as a selfless act.",
        chinese_question: "在艰难时期，这位CEO放弃高薪以确保公司的生存，被视为一种无私的行为。",
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
        question: "Her business __________ was evident in her strategic decisions that led the company to unprecedented success.",
        chinese_question: "她的商业 __________ 在她的战略决策中显而易见，这些决策使公司取得了前所未有的成功。",
        answers: [
            { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "acumen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "C", answer: "foolishness", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
            { option: "D", answer: "naivety", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acumen' means the ability to make good judgments and quick decisions, typically in a particular domain." +
            "<br><br>" +
            "(A) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'foolishness' means lack of good sense or judgment; stupidity." +
            "<br><br>" +
            "(D) 'naivety' means lack of experience, wisdom, or judgment.",
        chinese_explanation: "(B) '敏锐' 一词意味着在特定领域做出良好判断和快速决策的能力。" +
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '愚蠢' 意味着缺乏良好的判断力；愚蠢。" +
            "<br><br>" +
            "(D) '天真' 意味着缺乏经验、智慧或判断力。"
    },
    {
        id: 7,
        question: "The corporate __________ was clear, with each employee understanding their rank and responsibilities within the company.",
        chinese_question: "公司内部的 __________ 很明确，每位员工都清楚自己的职位和职责。",
        answers: [
            { option: "A", answer: "anarchy", chinese_answer: "无政府状态", chinese_romanization: "wú zhèngfǔ zhuàngtài" },
            { option: "B", answer: "hierarchy", chinese_answer: "等级制度", chinese_romanization: "děngjí zhìdù" },
            { option: "C", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" },
            { option: "D", answer: "disorganization", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hierarchy' means a system or organization in which people or groups are ranked one above the other according to status or authority." +
            "<br><br>" +
            "(A) 'anarchy' means a state of disorder due to absence or non-recognition of authority." +
            "<br><br>" +
            "(C) 'equality' means the state of being equal, especially in status, rights, and opportunities." +
            "<br><br>" +
            "(D) 'disorganization' means the state of being disorganized.",
        chinese_explanation: "(B) '等级制度' 意味着根据地位或权威对人或群体进行排序的系统或组织。" +
            "<br><br>" +
            "(A) '无政府状态' 意味着由于缺乏或不承认权威而导致的混乱状态。" +
            "<br><br>" +
            "(C) '平等' 意味着在地位、权利和机会方面的平等状态。" +
            "<br><br>" +
            "(D) '混乱' 意味着混乱的状态。"
    },
    {
        id: 8,
        question: "When criticized, he always had a quick __________, showing his wit and readiness to defend himself.",
        chinese_question: "当受到批评时，他总是能快速 __________，显示出他的机智和防卫准备。",
        answers: [
            { option: "A", answer: "apology", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" },
            { option: "B", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "riposte", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'riposte' means a quick, clever reply to an insult or criticism." +
            "<br><br>" +
            "(A) 'apology' means a regretful acknowledgment of an offense or failure." +
            "<br><br>" +
            "(B) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(C) '反驳' 一词意味着对侮辱或批评的快速、机智的回应。" +
            "<br><br>" +
            "(A) '道歉' 意味着对过失或失败的遗憾承认。" +
            "<br><br>" +
            "(B) '赞美' 意味着礼貌的赞扬或钦佩表达。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前的暂停或犹豫行为。"
    },
    {
        id: 9,
        question: "Even from a young age, she showed a strong __________ towards science, spending hours conducting her own experiments and reading scientific books.",
        chinese_question: "从小她就表现出对科学的强烈 __________，花数小时进行自己的实验并阅读科学书籍。",
        answers: [
                { option: "A", answer: "disinterest", chinese_answer: "不感兴趣", chinese_romanization: "bùgǎnxìngqù" },
                { option: "B", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
                { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inclination' means a person's natural tendency or urge to act or feel in a particular way." +
            "<br><br>" +
            "(A) 'disinterest' means lack of interest or concern." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(B) '倾向' 意味着一个人自然的倾向或冲动去以特定方式行动或感受。" +
            "<br><br>" +
            "(A) '不感兴趣' 意味着缺乏兴趣或关注。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关注或同情。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事之前的停顿或犹豫的动作。"
    },
    {
        id: 10,
        question: "With his dignified __________, the professor commanded respect from his students.",
        chinese_question: "凭借他庄严的 __________，教授赢得了学生们的尊重。",
        answers: [
            { option: "A", answer: "mien", chinese_answer: "风度", chinese_romanization: "fēngdù" },
            { option: "B", answer: "attire", chinese_answer: "服装", chinese_romanization: "fúzhuāng" },
            { option: "C", answer: "gait", chinese_answer: "步态", chinese_romanization: "bùtài" },
            { option: "D", answer: "physique", chinese_answer: "体格", chinese_romanization: "tǐgé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mien' means a person's look or manner, especially one of a particular kind indicating their character or mood." + 
            "<br><br>" + 
            "(B) 'attire' means clothes, especially fine or formal ones." + 
            "<br><br>" + 
            "(C) 'gait' means a person's manner of walking." + 
            "<br><br>" + 
            "(D) 'physique' means the form, size, and development of a person's body.",
        chinese_explanation: "(A) '风度' 意味着一个人的外貌或举止，特别是指示其性格或情绪的某种类型。" + 
            "<br><br>" + 
            "(B) '服装' 意味着衣服，特别是精美或正式的衣服。" + 
            "<br><br>" + 
            "(C) '步态' 意味着一个人的走路方式。" + 
            "<br><br>" + 
            "(D) '体格' 意味着一个人的体型、大小和发育。"
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
