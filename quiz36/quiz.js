// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The conference brought together experts from __________ fields, ranging from medicine to engineering, to discuss the future of healthcare.",
        chinese_question: "会议汇集了来自 __________ 领域的专家，从医学到工程，讨论医疗保健的未来。",
        answers: [
            { option: "A", answer: "similar", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "B", answer: "uniform", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "C", answer: "identical", chinese_answer: "相同", chinese_romanization: "xiāngtóng" },
            { option: "D", answer: "disparate", chinese_answer: "不同", chinese_romanization: "bùtóng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disparate' means essentially different in kind; not allowing comparison." +
            "<br><br>" +
            "(A) 'similar' means resembling without being identical." +
            "<br><br>" +
            "(B) 'uniform' means not changing in form or character; remaining the same in all cases and at all times." +
            "<br><br>" +
            "(C) 'identical' means similar in every detail; exactly alike.",
        chinese_explanation: "(D) '不同' 一词意味着本质上不同的；不允许比较的。" +
            "<br><br>" +
            "(A) '相似' 意味着相似但不完全相同。" +
            "<br><br>" +
            "(B) '一致' 意味着在形式或特征上不变的；在所有情况下和所有时间都保持相同。" +
            "<br><br>" +
            "(C) '相同' 意味着在每个细节上相似；完全一样。"
    },
    {
        id: 2,
        question: "The __________ joy she felt upon hearing the news was beyond words.",
        chinese_question: "听到这个消息时她感到的 __________ 喜悦无法用言语表达。",
        answers: [
            { option: "A", answer: "describable", chinese_answer: "可描述的", chinese_romanization: "kě miáoshù de" },
            { option: "B", answer: "ineffable", chinese_answer: "难以形容", chinese_romanization: "nányǐ xíngróng" },
            { option: "C", answer: "plain", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ineffable' means too great or extreme to be expressed or described in words." +
            "<br><br>" +
            "(A) 'describable' means able to be described." +
            "<br><br>" +
            "(C) 'plain' means not decorated or elaborate; simple or basic in character." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '难以形容' 一词意味着太伟大或极端而无法用言语表达或描述的。" +
            "<br><br>" +
            "(A) '可描述的' 意味着能够被描述的。" +
            "<br><br>" +
            "(C) '平凡' 意味着没有装饰或复杂的；简单或基本的。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 3,
        question: "The __________ chemicals in the water supply posed a serious health risk to the residents.",
        chinese_question: "供水中的 __________ 化学物质对居民的健康构成了严重威胁。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "C", answer: "deleterious", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "D", answer: "positive", chinese_answer: "积极", chinese_romanization: "jījí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deleterious' means causing harm or damage." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'positive' means consisting in or characterized by the presence or possession of features or qualities rather than their absence.",
        chinese_explanation: "(C) '有害' 一词意味着造成伤害或损害的。" +
            "<br><br>" +
            "(A) '有益' 意味着带来好结果的；有利或有益的。" +
            "<br><br>" +
            "(B) '无害' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(D) '积极' 意味着具有特征或品质而非其缺乏的。"
    },
    {
        id: 4,
        question: "The chef added a __________ twist to the dish by including freshly squeezed lemon juice.",
        chinese_question: "厨师通过加入新鲜柠檬汁为这道菜增添了 __________ 的风味。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "B", answer: "zesty", chinese_answer: "味美", chinese_romanization: "wèiměi" },
            { option: "C", answer: "tasteless", chinese_answer: "无味", chinese_romanization: "wúwèi" },
            { option: "D", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zesty' means having a strong, pleasant, and somewhat spicy flavor." +
            "<br><br>" +
            "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(C) 'tasteless' means lacking flavor; insipid." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(B) '味美' 一词意味着具有强烈、愉快且略带辛辣的味道。" +
            "<br><br>" +
            "(A) '平淡' 意味着缺乏强烈特征或特点，因此无趣。" +
            "<br><br>" +
            "(C) '无味' 意味着缺乏味道；平淡无味的。" +
            "<br><br>" +
            "(D) '温和' 意味着不严厉、严重或苛刻的。"
    },
    {
        id: 5,
        question: "His __________ behavior towards his boss was noted by his colleagues, who found his excessive eagerness to please quite annoying.",
        chinese_question: "他对老板的 __________ 行为引起了同事们的注意，他们发现他过分讨好的行为令人厌烦。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "independent", chinese_answer: "独立", chinese_romanization: "dúlì" },
            { option: "C", answer: "servile", chinese_answer: "奴性", chinese_romanization: "nú xìng" },
            { option: "D", answer: "commanding", chinese_answer: "指挥", chinese_romanization: "zhǐhuī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'servile' means having or showing an excessive willingness to serve or please others." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(B) 'independent' means free from outside control; not depending on another's authority." +
            "<br><br>" +
            "(D) 'commanding' means having a position of authority.",
        chinese_explanation: "(C) '奴性' 一词意味着表现出或具有过分愿意为他人服务或取悦他人的。" +
            "<br><br>" +
            "(A) '自信' 意味着有或表现出自信和有力的性格。" +
            "<br><br>" +
            "(B) '独立' 意味着不受外界控制的；不依赖他人权威的。" +
            "<br><br>" +
            "(D) '指挥' 意味着处于权威位置的。"
    },
    {
        id: 6,
        question: "The new raincoat is __________ to water, keeping you dry even in the heaviest downpour.",
        chinese_question: "这件新雨衣是 __________ 防水的，即使在最强的暴雨中也能保持干燥。",
        answers: [
            { option: "A", answer: "absorbent", chinese_answer: "吸水", chinese_romanization: "xīshuǐ" },
            { option: "B", answer: "permeable", chinese_answer: "可渗透", chinese_romanization: "kě shèntòu" },
            { option: "C", answer: "impervious", chinese_answer: "不透水", chinese_romanization: "bù tòu shuǐ" },
            { option: "D", answer: "porous", chinese_answer: "多孔", chinese_romanization: "duō kǒng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impervious' means not allowing fluid to pass through." +
            "<br><br>" +
            "(A) 'absorbent' means able to soak up liquid easily." +
            "<br><br>" +
            "(B) 'permeable' means allowing liquids or gases to pass through it." +
            "<br><br>" +
            "(D) 'porous' means having minute spaces or holes through which liquid or air may pass.",
        chinese_explanation: "(C) '不透水' 一词意味着不允许液体通过的。" +
            "<br><br>" +
            "(A) '吸水' 意味着能够轻易吸收液体的。" +
            "<br><br>" +
            "(B) '可渗透' 意味着允许液体或气体通过的。" +
            "<br><br>" +
            "(D) '多孔' 意味着有细小空隙或孔洞，液体或空气可以通过。"
    },
    {
        id: 7,
        question: "He gave a __________ smile, acknowledging the irony of the situation.",
        chinese_question: "他露出 __________ 的微笑，承认这种情况的讽刺意味。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当", chinese_romanization: "zhíjié le dàng" },
            { option: "C", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
            { option: "D", answer: "wry", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'wry' means using or expressing dry, especially mocking, humor." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'earnest' means resulting from or showing sincere and intense conviction.",
        chinese_explanation: "(D) '嘲讽' 一词意味着使用或表达干燥的，特别是嘲弄的幽默。" +
            "<br><br>" +
            "(A) '真诚' 意味着没有伪装或欺骗；源于真实感情。" +
            "<br><br>" +
            "(B) '直截了当' 意味着简单易懂或容易理解。" +
            "<br><br>" +
            "(C) '认真的' 意味着表现出真诚和强烈的信念。"
    },
    {
        id: 8,
        question: "The musician's __________ voice captivated the audience, leaving them in awe.",
        chinese_question: "音乐家的 __________ 声音迷住了观众，使他们惊叹不已。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "B", answer: "mellifluous", chinese_answer: "甜美", chinese_romanization: "tiánměi" },
            { option: "C", answer: "grating", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "D", answer: "discordant", chinese_answer: "不和谐", chinese_romanization: "bù héxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mellifluous' means sweet or musical; pleasant to hear." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'grating' means sounding harsh and unpleasant." +
            "<br><br>" +
            "(D) 'discordant' means disagreeing or incongruous; harsh and jarring because of a lack of harmony.",
        chinese_explanation: "(B) '甜美' 一词意味着甜美或音乐的；悦耳的。" +
            "<br><br>" +
            "(A) '刺耳' 意味着令人不快的粗糙或刺耳的。" +
            "<br><br>" +
            "(C) '刺耳' 意味着声音刺耳和不愉快的。" +
            "<br><br>" +
            "(D) '不和谐' 意味着不一致的或不协调的；由于缺乏和谐而显得刺耳。"
    },
    {
        id: 9,
        question: "The once thriving village now appeared __________, with abandoned houses and overgrown gardens.",
        chinese_question: "曾经繁荣的村庄现在显得 __________，有着被遗弃的房屋和杂草丛生的花园。",
        answers: [
            { option: "A", answer: "desolate", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" },
            { option: "B", answer: "bustling", chinese_answer: "繁忙", chinese_romanization: "fánmáng" },
            { option: "C", answer: "vibrant", chinese_answer: "生机勃勃", chinese_romanization: "shēngjī bóbó" },
            { option: "D", answer: "lively", chinese_answer: "活跃", chinese_romanization: "huóyuè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'desolate' means deserted and bleak." +
            "<br><br>" +
            "(B) 'bustling' means full of activity and noise." +
            "<br><br>" +
            "(C) 'vibrant' means full of energy and life." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy.",
        chinese_explanation: "(A) '荒凉' 一词意味着荒芜和荒凉。" +
            "<br><br>" +
            "(B) '繁忙' 意味着充满活动和噪音。" +
            "<br><br>" +
            "(C) '生机勃勃' 意味着充满活力和生命力。" +
            "<br><br>" +
            "(D) '活跃' 意味着充满生命力和活力。"
    },
    {
        id: 10,
        question: "The ancient castle stood on the hill, its __________ towers visible from miles away.",
        chinese_question: "古老的城堡矗立在山丘上，其 __________ 的塔楼从很远的地方都能看见。",
        answers: [
            { option: "A", answer: "ornate", chinese_answer: "华丽", chinese_romanization: "huálì" },
            { option: "B", answer: "dilapidated", chinese_answer: "破旧", chinese_romanization: "pòjiù" },
            { option: "C", answer: "invisible", chinese_answer: "隐形", chinese_romanization: "yǐnxíng" },
            { option: "D", answer: "flimsy", chinese_answer: "脆弱", chinese_romanization: "cuìruò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dilapidated' means in a state of disrepair or ruin." +
            "<br><br>" +
            "(A) 'ornate' means highly decorated." +
            "<br><br>" +
            "(C) 'invisible' means not able to be seen." +
            "<br><br>" +
            "(D) 'flimsy' means weak and easily damaged.",
        chinese_explanation: "(B) '破旧' 意味着处于失修或破败状态。" +
            "<br><br>" +
            "(A) '华丽' 意味着高度装饰的。" +
            "<br><br>" +
            "(C) '隐形' 意味着无法看见的。" +
            "<br><br>" +
            "(D) '脆弱' 意味着虚弱和容易损坏的。"
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
