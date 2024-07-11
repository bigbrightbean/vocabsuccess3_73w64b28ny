// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ appearances of the comet in the night sky fascinated astronomers around the world.",
        chinese_question: "夜空中彗星的 __________ 出现让世界各地的天文学家着迷。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "B", answer: "frequent", chinese_answer: "频繁", chinese_romanization: "pínfán" },
            { option: "C", answer: "constant", chinese_answer: "不断", chinese_romanization: "bùduàn" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sporadic' means occurring at irregular intervals." +
            "<br><br>" +
            "(B) 'frequent' means happening often." +
            "<br><br>" +
            "(C) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(A) '零星'一词意味着不定期发生。" +
            "<br><br>" +
            "(B) '频繁' 意味着经常发生。" +
            "<br><br>" +
            "(C) '不断' 意味着在一段时间内持续发生。" +
            "<br><br>" +
            "(D) '可预测' 意味着能够预测。"
    },
    {
        id: 2,
        question: "The author’s __________ use of metaphor in the novel added depth and richness to the narrative.",
        chinese_question: "作者在小说中 __________ 的隐喻使用为叙事增加了深度和丰富性。",
        answers: [
            { option: "A", answer: "skillful", chinese_answer: "巧妙", chinese_romanization: "qiǎomiào" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "redundant", chinese_answer: "多余", chinese_romanization: "duōyú" },
            { option: "D", answer: "simplistic", chinese_answer: "过于简单", chinese_romanization: "guòyú jiǎndān" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'skillful' means having or showing skill." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or handling things." +
            "<br><br>" +
            "(C) 'redundant' means not needed." +
            "<br><br>" +
            "(D) 'simplistic' means overly simple.",
        chinese_explanation: "(A) '巧妙'一词意味着拥有或表现出技巧。" +
            "<br><br>" +
            "(B) '笨拙' 意味着动作或处理事情时笨拙。" +
            "<br><br>" +
            "(C) '多余' 意味着不需要的。" +
            "<br><br>" +
            "(D) '过于简单' 意味着过于简单。"
    },
    {
        id: 3,
        question: "The athlete’s __________ dedication to training resulted in an outstanding performance at the championship.",
        chinese_question: "运动员对训练的 __________ 奉献使他在锦标赛中表现出色。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "B", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "C", answer: "lackadaisical", chinese_answer: "懒散", chinese_romanization: "lǎnsǎn" },
            { option: "D", answer: "unwavering", chinese_answer: "坚定", chinese_romanization: "jiāndìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(C) 'lackadaisical' means lacking enthusiasm and determination; carelessly lazy.",
        chinese_explanation: "(D) '坚定'一词意味着稳定或坚决；不动摇。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(B) '零星' 意味着不定期发生或仅在少数地方发生；分散或孤立。" +
            "<br><br>" +
            "(C) '懒散' 意味着缺乏热情和决心；懒洋洋。"
    },
    {
        id: 4,
        question: "The team's __________ collaboration, characterized by mutual respect and open communication, led to the successful completion of the project ahead of schedule.",
        chinese_question: "团队的 __________ 合作，以相互尊重和开放沟通为特点，使项目提前成功完成。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "B", answer: "fractious", chinese_answer: "易怒", chinese_romanization: "yìnù" },
            { option: "C", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "antagonistic", chinese_answer: "敌对", chinese_romanization: "díduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(B) 'fractious' means irritable and quarrelsome." +
            "<br><br>" +
            "(D) 'antagonistic' means showing or feeling active opposition or hostility.",
        chinese_explanation: "(C) '和谐' 一词意味着形成一个令人愉快或一致的整体。" +
            "<br><br>" +
            "(A) '不和谐' 意味着不一致或不协调。" +
            "<br><br>" +
            "(B) '易怒' 意味着易怒和争吵。" +
            "<br><br>" +
            "(D) '敌对' 意味着表现或感觉到积极的反对或敌意。"
    },
    {
        id: 5,
        question: "The speaker’s __________ argument convinced the audience of the importance of renewable energy.",
        chinese_question: "演讲者的 __________ 论点使观众信服了可再生能源的重要性。",
        answers: [
            { option: "A", answer: "compelling", chinese_answer: "引人注目", chinese_romanization: "yǐnrénzhùmù" },
            { option: "B", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "confusing", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'compelling' means evoking interest or admiration." +
            "<br><br>" +
            "(B) 'weak' means lacking strength." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected to the subject." +
            "<br><br>" +
            "(D) 'confusing' means making someone unable to understand.",
        chinese_explanation: "(A) '引人注目'一词意味着引起兴趣或钦佩。" +
            "<br><br>" +
            "(B) '弱' 意味着缺乏力量。" +
            "<br><br>" +
            "(C) '无关' 意味着与主题无关。" +
            "<br><br>" +
            "(D) '混乱' 意味着让某人无法理解。"
    },
    {
        id: 6,
        question: "Smoking has been proven to have __________ effects on health, leading to numerous diseases.",
        chinese_question: "吸烟已被证明对健康有 __________ 的影响，导致许多疾病。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "helpful", chinese_answer: "有帮助", chinese_romanization: "yǒu bāngzhù" },
            { option: "C", answer: "deleterious", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "D", answer: "advantageous", chinese_answer: "有利", chinese_romanization: "yǒulì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deleterious' means causing harm or damage." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'helpful' means giving or ready to give help." +
            "<br><br>" +
            "(D) 'advantageous' means involving or creating favorable circumstances that increase the chances of success or effectiveness.",
        chinese_explanation: "(C) '有害' 一词意味着造成伤害或损害。" +
            "<br><br>" +
            "(A) '有益' 意味着带来好的结果；有利或有益的。" +
            "<br><br>" +
            "(B) '有帮助' 意味着给予或准备给予帮助。" +
            "<br><br>" +
            "(D) '有利' 意味着涉及或创造增加成功或有效性机会的有利情况。"
    },
    {
        id: 7,
        question: "The actor's __________ performance was filled with exaggerated gestures and flashy costumes, but lacked real substance.",
        chinese_question: "这位演员的 __________ 表演充满了夸张的动作和华丽的服装，但缺乏真正的实质。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "meretricious", chinese_answer: "华而不实的", chinese_romanization: "huá'érbùshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'meretricious' means apparently attractive but having no real value." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(D) '华而不实的' 意味着表面上吸引人但没有实际价值的。" +
            "<br><br>" +
            "(A) '真诚的' 意味着没有虚伪或欺骗的；来自真实情感的。" +
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就不夸耀的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着真正的东西；真实的。"
    },
    {
        id: 8,
        question: "His __________ reply indicated that he was not interested in continuing the conversation.",
        chinese_question: "他 __________ 的回答表明他不想继续谈话。",
        answers: [
            { option: "A", answer: "verbose", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "B", answer: "laconic", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "C", answer: "wordy", chinese_answer: "啰嗦", chinese_romanization: "luōsuo" },
            { option: "D", answer: "loquacious", chinese_answer: "健谈", chinese_romanization: "jiàntán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'laconic' means using very few words." +
            "<br><br>" +
            "(A) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(C) 'wordy' means using or expressed in too many words." +
            "<br><br>" +
            "(D) 'loquacious' means tending to talk a great deal; talkative.",
        chinese_explanation: "(B) '简洁' 一词意味着使用很少的话。" +
            "<br><br>" +
            "(A) '冗长' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(C) '啰嗦' 意味着使用或表达的词太多。" +
            "<br><br>" +
            "(D) '健谈' 意味着倾向于大量谈话的；健谈的。"
    },
    {
        id: 9,
        question: "His __________ jokes were more suited to a playground than a professional meeting.",
        chinese_question: "他的 __________ 笑话更适合在操场上讲，而不是在专业会议上。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
            { option: "B", answer: "puerile", chinese_answer: "幼稚", chinese_romanization: "yòuzhì" },
            { option: "C", answer: "sophisticated", chinese_answer: "老练", chinese_romanization: "lǎoliàn" },
            { option: "D", answer: "wise", chinese_answer: "明智", chinese_romanization: "míngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'puerile' means childishly silly and trivial." +
            "<br><br>" +
            "(A) 'mature' means fully developed physically; full-grown." +
            "<br><br>" +
            "(C) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(D) 'wise' means having or showing experience, knowledge, and good judgment.",
        chinese_explanation: "(B) '幼稚' 一词意味着孩子气的愚蠢和琐碎的。" +
            "<br><br>" +
            "(A) '成熟' 意味着在身体上完全发育的；成熟的。" +
            "<br><br>" +
            "(C) '老练' 意味着具有、表现出或来自于丰富的世俗经验和时尚文化知识的。" +
            "<br><br>" +
            "(D) '明智' 意味着具有或表现出经验、知识和良好判断的。"
    },
    {
        id: 10,
        question: "Despite winning the competition, she was __________, sharing the credit with her entire team.",
        chinese_question: "尽管赢得了比赛，她仍然 __________，与整个团队分享了荣誉。",
        answers: [
            { option: "A", answer: "magnanimous", chinese_answer: "宽宏大量", chinese_romanization: "kuānhóng dàliàng" },
            { option: "B", answer: "petty", chinese_answer: "小气", chinese_romanization: "xiǎoqì" },
            { option: "C", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "D", answer: "stingy", chinese_answer: "吝啬", chinese_romanization: "lìnsè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful." +
            "<br><br>" +
            "(B) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(C) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(D) 'stingy' means unwilling to give or spend; ungenerous.",
        chinese_explanation: "(A) '宽宏大量' 一词意味着非常慷慨或宽恕，尤其是对竞争对手或权力较小的人。" +
            "<br><br>" +
            "(B) '小气' 意味着不重要的；琐碎的。" +
            "<br><br>" +
            "(C) '自私' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(D) '吝啬' 意味着不愿给予或花费；不慷慨的。"
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
