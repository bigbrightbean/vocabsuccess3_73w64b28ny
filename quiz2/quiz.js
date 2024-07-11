// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The band's music was criticized for being __________, with clashing sounds that didn't work well together.",
        chinese_question: "这支乐队的音乐被批评为 __________，声音不和谐，无法很好地融合在一起。",
        answers: [
            { option: "A", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "melodious", chinese_answer: "悦耳", chinese_romanization: "yuè'ěr" },
            { option: "C", answer: "discordant", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "D", answer: "tuneful", chinese_answer: "有旋律", chinese_romanization: "yǒu xuánlǜ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'discordant' means disagreeing or incongruous; harsh and jarring because of a lack of harmony." +
            "<br><br>" +
            "(A) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(B) 'melodious' means having a pleasant tune; tuneful." +
            "<br><br>" +
            "(D) 'tuneful' means having a pleasant and melodious sound.",
        chinese_explanation: "(C) '不和谐' 一词意味着不同意或不一致；由于缺乏和谐而显得刺耳。" +
            "<br><br>" +
            "'和谐' 意味着形成一个愉快或一致的整体。" +
            "<br><br>" +
            "'悦耳' 意味着有一个悦耳的旋律；有旋律的。" +
            "<br><br>" +
            "'有旋律' 意味着有一个悦耳和旋律的声音。"
    },
    {
        id: 2,
        question: "The protestors were __________, making it difficult for the police to maintain order.",
        chinese_question: "抗议者 __________，使得警察很难维持秩序。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "obstreperous", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "D", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obstreperous' means noisy and difficult to control." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'silent' means not making or accompanied by any sound.",
        chinese_explanation: "(C) '喧闹' 一词意味着吵闹和难以控制的。" +
            "<br><br>" +
            "'安静' 意味着很少或没有噪音。" +
            "<br><br>" +
            "'平静' 意味着不表现或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "'沉默' 意味着没有或伴随任何声音。"
    },
    {
        id: 3,
        question: "His __________ attitude made him unpopular among his colleagues, who felt he looked down on them.",
        chinese_question: "他 __________ 的态度让他在同事中不受欢迎，他们觉得他看不起他们。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "supercilious", chinese_answer: "高傲", chinese_romanization: "gāo'ào" },
            { option: "C", answer: "modest", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "respectful", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'supercilious' means behaving or looking as though one thinks one is superior to others." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '高傲' 一词意味着行为或看起来好像自己比别人优越。" +
            "<br><br>" +
            "'谦虚' 意味着对自己的重要性有或表现出适度或低估。" +
            "<br><br>" +
            "'谦逊' 意味着对自己的能力或成就不自负或适度。" +
            "<br><br>" +
            "'尊敬' 意味着感到或表现出敬意。"
    },
    {
        id: 4,
        question: "She was __________ in her enthusiasm, openly cheering for her favorite team despite being surrounded by opposing fans.",
        chinese_question: "她对自己喜欢的球队毫不 __________ 地表现出热情，尽管周围都是对方的球迷，她还是公开加油。",
        answers: [
            { option: "A", answer: "embarrassed", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
            { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "unabashed", chinese_answer: "不害羞", chinese_romanization: "bù hàixiū" },
            { option: "D", answer: "shy", chinese_answer: "害羞", chinese_romanization: "hàixiū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unabashed' means not embarrassed, disconcerted, or ashamed." +
            "<br><br>" +
            "(A) 'embarrassed' means feeling or showing embarrassment." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people.",
        chinese_explanation: "(C) '不害羞' 意味着不感到尴尬、困惑或羞愧。" +
            "<br><br>" +
            "(A) '尴尬' 意味着感到或表现出尴尬。" +
            "<br><br>" +
            "(B) '胆小' 意味着缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(D) '害羞' 意味着在与他人相处时表现出矜持或紧张。"
    },
    {
        id: 5,
        question: "His __________ behavior worried his friends, who had never seen him act that way before.",
        chinese_question: "他的 __________ 行为让朋友们担心，他们从未见过他这样表现。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常", chinese_romanization: "zhèngcháng" },
            { option: "B", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" },
            { option: "C", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "D", answer: "aberrant", chinese_answer: "异常", chinese_romanization: "yìcháng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'aberrant' means departing from an accepted standard." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed.",
        chinese_explanation: "(D) '异常' 一词意味着偏离公认的标准。" +
            "<br><br>" +
            "(A) '正常' 意味着符合标准的；通常、典型或预期的。" +
            "<br><br>" +
            "(B) '典型' 意味着具有某种类型的人或事物的独特特质。" +
            "<br><br>" +
            "(C) '传统' 意味着基于或符合通常的做法或信念。"
    },
    {
        id: 6,
        question: "She was __________ in her efforts to complete the project, working tirelessly until it was done.",
        chinese_question: "她在完成项目的努力中表现得非常 __________，不懈地工作直到完成。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "tenacious", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "apathetic", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '坚持' 一词意味着倾向于紧紧抓住某物；紧贴或紧密依附。" +
            "<br><br>" +
            "'懒惰' 意味着不愿意工作或使用精力。" +
            "<br><br>" +
            "'冷漠' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "'漠不关心' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 7,
        question: "Smartphones have become __________, seen in the hands of people all around the world.",
        chinese_question: "智能手机已经变得 __________，世界各地的人们手中都能看到。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
            { option: "B", answer: "uncommon", chinese_answer: "不寻常", chinese_romanization: "bù xúncháng" },
            { option: "C", answer: "ubiquitous", chinese_answer: "无处不在", chinese_romanization: "wúchù bùzài" },
            { option: "D", answer: "scarce", chinese_answer: "稀缺", chinese_romanization: "xīquē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ubiquitous' means present, appearing, or found everywhere." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'uncommon' means out of the ordinary; unusual." +
            "<br><br>" +
            "(D) 'scarce' means insufficient for the demand.",
        chinese_explanation: "(C) '无处不在' 一词意味着存在、出现或无处不在的。" +
            "<br><br>" +
            "'稀有' 意味着不经常发生的。" +
            "<br><br>" +
            "'不寻常' 意味着不同寻常的；不常见的。" +
            "<br><br>" +
            "'稀缺' 意味着供不应求的。"
    },
    {
        id: 8,
        question: "The professor's lecture was so __________ that even the graduate students found it difficult to understand.",
        chinese_question: "教授的讲座非常 __________，即使是研究生也觉得难以理解。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "abstruse", chinese_answer: "深奥", chinese_romanization: "shēn'ào" },
            { option: "D", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abstruse' means difficult to understand; obscure." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '深奥' 一词意味着难以理解的；模糊的。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(D) '明显' 意味着容易感知或理解；清楚、自明或显而易见的。"
    },
    {
        id: 9,
        question: "The historical drama contained several __________ elements, such as modern slang and technology.",
        chinese_question: "这部历史剧包含几个 __________ 的元素，如现代俚语和技术。",
        answers: [
            { option: "A", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" },
            { option: "B", answer: "anachronistic", chinese_answer: "时代错误", chinese_romanization: "shídài cuòwù" },
            { option: "C", answer: "current", chinese_answer: "当前", chinese_romanization: "dāngqián" },
            { option: "D", answer: "up-to-date", chinese_answer: "最新", chinese_romanization: "zuìxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anachronistic' means belonging to a period other than that being portrayed." +
            "<br><br>" +
            "(A) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(C) 'current' means belonging to the present time; happening or being used or done now." +
            "<br><br>" +
            "(D) 'up-to-date' means incorporating the latest developments and trends.",
        chinese_explanation: "(B) '时代错误' 一词意味着属于所描绘的时期以外的时期。" +
            "<br><br>" +
            "(A) '当代' 意味着同时代的或发生在同一时间的。" +
            "<br><br>" +
            "(C) '当前' 意味着属于现在的时间；正在发生或使用的。" +
            "<br><br>" +
            "(D) '最新' 意味着包含最新的发展和趋势。"
    },
    {
        id: 10,
        question: "The rapid development of the city was __________ with increased pollution and traffic congestion.",
        chinese_question: "城市的快速发展 __________ 伴随着污染和交通拥堵的增加。",
        answers: [
            { option: "A", answer: "unrelated", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "B", answer: "simultaneous", chinese_answer: "同时", chinese_romanization: "tóngshí" },
            { option: "C", answer: "concomitant", chinese_answer: "伴随", chinese_romanization: "bànsuí" },
            { option: "D", answer: "incidental", chinese_answer: "偶然", chinese_romanization: "ǒurán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'concomitant' means naturally accompanying or associated." +
            "<br><br>" +
            "(A) 'unrelated' means not related or linked." +
            "<br><br>" +
            "(B) 'simultaneous' means occurring, operating, or done at the same time." +
            "<br><br>" +
            "(D) 'incidental' means accompanying but not a major part of something.",
        chinese_explanation: "(C) '伴随' 一词意味着自然伴随或相关的。" +
            "<br><br>" +
            "(A) '无关' 意味着不相关或没有联系的。" +
            "<br><br>" +
            "(B) '同时' 意味着发生、操作或同时完成。" +
            "<br><br>" +
            "(D) '偶然' 意味着伴随但不是主要部分的。"
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
