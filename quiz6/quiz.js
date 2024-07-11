// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The unexpected question left him __________, unsure of how to respond.",
        chinese_question: "那个意外的问题让他 __________，不知道如何回答。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "nonplussed", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "C", answer: "assured", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "D", answer: "certain", chinese_answer: "肯定", chinese_romanization: "kěndìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nonplussed' means surprised and confused so much that they are unsure how to react." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'assured' means confident and certain." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(B) '困惑' 一词意味着非常惊讶和困惑，以至于不确定如何反应。" +
            "<br><br>" +
            "'自信' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "'确定' 意味着自信和确定的。" +
            "<br><br>" +
            "'肯定' 意味着确定无疑的。"
    },
    {
        id: 2,
        question: "The detective's __________ mind allowed him to solve cases that others found baffling.",
        chinese_question: "侦探 __________ 的头脑使他能够解决其他人感到困惑的案件。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "B", answer: "perspicacious", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "C", answer: "oblivious", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "D", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perspicacious' means having a ready insight into and understanding of things." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(B) '敏锐' 一词意味着对事物有敏锐洞察力和理解力的。" +
            "<br><br>" +
            "'迟钝' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "'无知' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "'天真' 意味着缺乏经验、智慧或判断力的。"
    },
    {
        id: 3,
        question: "The government's new policies have been criticized as __________, leading to a decline in social welfare and economic growth.",
        chinese_question: "政府的新政策被批评为 __________，导致社会福利和经济增长下降。",
        answers: [
            { option: "A", answer: "progressive", chinese_answer: "进步", chinese_romanization: "jìnbù" },
            { option: "B", answer: "advanced", chinese_answer: "先进", chinese_romanization: "xiānjìn" },
            { option: "C", answer: "forward-thinking", chinese_answer: "前瞻性", chinese_romanization: "qiánzhān xìng" },
            { option: "D", answer: "regressive", chinese_answer: "退步", chinese_romanization: "tuìbù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'regressive' means becoming less advanced; returning to a former or less developed state." +
            "<br><br>" +
            "(A) 'progressive' means favoring or implementing social reform or new, liberal ideas." +
            "<br><br>" +
            "(B) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(C) 'forward-thinking' means planning or tending to plan for the future with imagination or wisdom.",
        chinese_explanation: "(D) '退步' 一词意味着变得不太先进；回到以前或较不发达的状态。" +
            "<br><br>" +
            "(A) '进步' 意味着支持或实施社会改革或新的、自由的思想。" +
            "<br><br>" +
            "(B) '先进' 意味着在发展或进步上遥远或领先。" +
            "<br><br>" +
            "(C) '前瞻性' 意味着用想象力或智慧为未来进行规划或倾向于未来规划。"
    },
    {
        id: 4,
        question: "The __________ climate of the coastal town attracted many visitors looking for a healthy and relaxing vacation.",
        chinese_question: "海滨小镇 __________ 的气候吸引了许多寻找健康和放松假期的游客。",
        answers: [
            { option: "A", answer: "unhealthy", chinese_answer: "不健康", chinese_romanization: "bù jiànkāng" },
            { option: "B", answer: "salubrious", chinese_answer: "有益健康", chinese_romanization: "yǒuyì jiànkāng" },
            { option: "C", answer: "harmful", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "D", answer: "noxious", chinese_answer: "有毒", chinese_romanization: "yǒu dú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'salubrious' means health-giving; healthy." +
            "<br><br>" +
            "(A) 'unhealthy' means harmful to health." +
            "<br><br>" +
            "(C) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(D) 'noxious' means harmful, poisonous, or very unpleasant.",
        chinese_explanation: "(B) '有益健康' 一词意味着有益健康的；健康的。" +
            "<br><br>" +
            "(A) '不健康' 意味着对健康有害的。" +
            "<br><br>" +
            "(C) '有害' 意味着造成或可能造成伤害的。" +
            "<br><br>" +
            "(D) '有毒' 意味着有害的、有毒的或非常不愉快的。"
    },
    {
        id: 5,
        question: "The professor's __________ lecture put many students to sleep, as it lacked both energy and insight.",
        chinese_question: "教授 __________ 的讲座让许多学生昏昏欲睡，因为它既缺乏活力也缺乏洞察力。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "B", answer: "thrilling", chinese_answer: "惊险", chinese_romanization: "jīngxiǎn" },
            { option: "C", answer: "vapid", chinese_answer: "乏味", chinese_romanization: "fáwèi" },
            { option: "D", answer: "intriguing", chinese_answer: "引人入胜", chinese_romanization: "yǐn rén rù shèng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vapid' means offering nothing that is stimulating or challenging; bland." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'thrilling' means producing sudden, strong, and deep emotion or excitement." +
            "<br><br>" +
            "(D) 'intriguing' means arousing one's curiosity or interest; fascinating.",
        chinese_explanation: "(C) '乏味' 一词意味着没有提供刺激或挑战；平淡无奇的。" +
            "<br><br>" +
            "(A) '刺激' 意味着引起极大热情和渴望的。" +
            "<br><br>" +
            "(B) '惊险' 意味着产生突然而强烈的情感或兴奋的。" +
            "<br><br>" +
            "(D) '引人入胜' 意味着引起某人好奇或兴趣的；迷人的。"
    },
    {
        id: 6,
        question: "His __________ nature led him to seek revenge against those who had wronged him, no matter how minor the offense.",
        chinese_question: "他 __________ 的本性使他对那些伤害过他的人进行报复，无论过错多么轻微。",
        answers: [
            { option: "A", answer: "forgiving", chinese_answer: "宽恕", chinese_romanization: "kuānshù" },
            { option: "B", answer: "vindictive", chinese_answer: "报复", chinese_romanization: "bàofù" },
            { option: "C", answer: "compassionate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "D", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vindictive' means having or showing a strong or unreasoning desire for revenge." +
            "<br><br>" +
            "(A) 'forgiving' means ready and willing to forgive." +
            "<br><br>" +
            "(C) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(D) 'lenient' means more merciful or tolerant than expected.",
        chinese_explanation: "(B) '报复' 一词意味着有或表现出强烈或不合理的报复欲望。" +
            "<br><br>" +
            "(A) '宽恕' 意味着准备好并愿意原谅。" +
            "<br><br>" +
            "(C) '同情' 意味着感到或表现出对他人的同情和关心。" +
            "<br><br>" +
            "(D) '宽容' 意味着比预期更仁慈或宽容的。"
    },
    {
        id: 7,
        question: "He had a __________ look in his eyes as he reminisced about the good old days.",
        chinese_question: "当他回忆起美好的往昔时，眼中露出 __________ 的神情。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "wistful", chinese_answer: "忧伤", chinese_romanization: "yōushāng" },
            { option: "C", answer: "happy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "joyous", chinese_answer: "欢乐", chinese_romanization: "huānlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wistful' means having or showing a feeling of vague or regretful longing." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'happy' means feeling or showing pleasure or contentment." +
            "<br><br>" +
            "(D) 'joyous' means full of happiness and joy.",
        chinese_explanation: "(B) '忧伤' 一词意味着有或表现出一种模糊或遗憾的渴望。" +
            "<br><br>" +
            "(A) '高兴' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(C) '快乐' 意味着感到或表现出愉快或满足。" +
            "<br><br>" +
            "(D) '欢乐' 意味着充满快乐和喜悦。"
    },
    {
        id: 8,
        question: "The __________ hues of the autumn leaves added a golden glow to the forest.",
        chinese_question: "秋天的树叶 __________ 的色调为森林增添了金色的光辉。",
        answers: [
            { option: "A", answer: "blue", chinese_answer: "蓝色", chinese_romanization: "lánsè" },
            { option: "B", answer: "red", chinese_answer: "红色", chinese_romanization: "hóngsè" },
            { option: "C", answer: "xanthic", chinese_answer: "黄色", chinese_romanization: "huángsè" },
            { option: "D", answer: "green", chinese_answer: "绿色", chinese_romanization: "lǜsè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'xanthic' means relating to a yellow color." +
            "<br><br>" +
            "(A) 'blue' means of the color of the clear sky or the deep sea." +
            "<br><br>" +
            "(B) 'red' means of the color at the end of the spectrum next to orange and opposite violet." +
            "<br><br>" +
            "(D) 'green' means of the color between blue and yellow in the spectrum.",
        chinese_explanation: "(C) '黄色' 一词意味着与黄色有关的颜色。" +
            "<br><br>" +
            "(A) '蓝色' 意味着晴朗的天空或深海的颜色。" +
            "<br><br>" +
            "(B) '红色' 意味着光谱末端接近橙色并与紫色相对的颜色。" +
            "<br><br>" +
            "(D) '绿色' 意味着光谱中介于蓝色和黄色之间的颜色。"
    },
    {
        id: 9,
        question: "Her __________ manner of speaking made it hard for others to get a word in during the meeting.",
        chinese_question: "她 __________ 的说话方式让别人很难在会议中插话。",
        answers: [
            { option: "A", answer: "shy", chinese_answer: "害羞", chinese_romanization: "hàixiū" },
            { option: "B", answer: "obtrusive", chinese_answer: "冒失", chinese_romanization: "màoshī" },
            { option: "C", answer: "retiring", chinese_answer: "内向", chinese_romanization: "nèixiàng" },
            { option: "D", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obtrusive' means noticeable or prominent in an unwelcome or intrusive way." +
            "<br><br>" +
            "(A) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people." +
            "<br><br>" +
            "(C) 'retiring' means shy and fond of being on one's own." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(B) '冒失' 一词意味着以不受欢迎或侵扰的方式引人注目或突出的。" +
            "<br><br>" +
            "'害羞' 意味着在其他人面前表现得矜持或紧张。" +
            "<br><br>" +
            "'内向' 意味着害羞并且喜欢独处的。" +
            "<br><br>" +
            "'矜持' 意味着缓慢地表现出情感或意见。"
    },
    {
        id: 10,
        question: "The disease was __________, spreading quietly before symptoms became apparent.",
        chinese_question: "这种疾病是 __________ 的，在症状显现之前悄悄传播。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "B", answer: "blatant", chinese_answer: "公然", chinese_romanization: "gōngrán" },
            { option: "C", answer: "insidious", chinese_answer: "隐秘", chinese_romanization: "yǐnmì" },
            { option: "D", answer: "overt", chinese_answer: "公开", chinese_romanization: "gōngkāi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insidious' means proceeding in a gradual, subtle way, but with harmful effects." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'blatant' means (of bad behavior) done openly and unashamedly." +
            "<br><br>" +
            "(D) 'overt' means done or shown openly; plainly or readily apparent, not secret or hidden.",
        chinese_explanation: "(C) '隐秘' 一词意味着以逐渐、微妙的方式进行，但具有有害影响的。" +
            "<br><br>" +
            "'明显' 意味着容易感知或理解的；清楚、自明或显而易见的。" +
            "<br><br>" +
            "'公然' 意味着（不良行为）公开无耻地进行的。" +
            "<br><br>" +
            "'公开' 意味着公开进行或显示的；显而易见的，不是秘密或隐藏的。"
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
