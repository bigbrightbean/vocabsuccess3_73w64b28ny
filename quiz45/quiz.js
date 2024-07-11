// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
         question: "The __________ old man refused to donate even a small amount of money to the charity, despite his considerable wealth.",
        chinese_question: "那位 __________ 的老人尽管很富有，却拒绝向慈善机构捐赠哪怕是少量的钱。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "B", answer: "wealthy", chinese_answer: "富有", chinese_romanization: "fùyǒu" },
            { option: "C", answer: "miserly", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "D", answer: "affluent", chinese_answer: "富裕", chinese_romanization: "fùyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'miserly' means reluctant to spend money; stingy." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'wealthy' means having a great deal of money, resources, or assets; rich." +
            "<br><br>" +
            "(D) 'affluent' means having a great deal of money; wealthy.",
        chinese_explanation: "(C) '吝啬' 一词意味着不愿意花钱的；吝啬的。" +
            "<br><br>" +
            "(A) '慷慨' 意味着表现出愿意给予更多东西，尤其是钱，超出严格必要或预期的。" +
            "<br><br>" +
            "(B) '富有' 意味着拥有大量金钱、资源或资产；富有的。" +
            "<br><br>" +
            "(D) '富裕' 意味着拥有大量金钱的；富裕的。"
    },
    {
        id: 2,
        question: "The countryside was __________ with lush, green fields stretching as far as the eye could see.",
        chinese_question: "乡村一片 __________，郁郁葱葱的绿地一望无际。",
        answers: [
            { option: "A", answer: "barren", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
            { option: "B", answer: "arid", chinese_answer: "干旱", chinese_romanization: "gānhàn" },
            { option: "C", answer: "verdant", chinese_answer: "翠绿", chinese_romanization: "cuìlǜ" },
            { option: "D", answer: "desolate", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'verdant' means green with grass or other rich vegetation." +
            "<br><br>" +
            "(A) 'barren' means too poor to produce much or any vegetation." +
            "<br><br>" +
            "(B) 'arid' means having little or no rain; too dry or barren to support vegetation." +
            "<br><br>" +
            "(D) 'desolate' means deserted of people and in a state of bleak and dismal emptiness.",
        chinese_explanation: "(C) '翠绿' 一词意味着长满青草或其他茂密植被的绿色。" +
            "<br><br>" +
            "(A) '贫瘠' 意味着过于贫瘠而无法生产出大量或任何植被。" +
            "<br><br>" +
            "(B) '干旱' 意味着几乎没有降雨；过于干燥或荒凉以至于无法支持植被。" +
            "<br><br>" +
            "(D) '荒凉' 意味着没有人烟，处于荒凉和阴郁空旷的状态。"
    },
    {
        id: 3,
        question: "The writer's __________ outlook on humanity was evident in his novels, which often depicted people as selfish and cruel.",
        chinese_question: "这位作家对人类的 __________ 观点在他的小说中显而易见，小说经常描绘人们自私和残忍。",
        answers: [
            { option: "A", answer: "sociable", chinese_answer: "社交", chinese_romanization: "shèjiāo" },
            { option: "B", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "C", answer: "kind", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "D", answer: "misanthropic", chinese_answer: "厌恶人类", chinese_romanization: "yànwù rénlèi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'misanthropic' means having a dislike of other people; unsociable." +
            "<br><br>" +
            "(A) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(B) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(C) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(D) '厌恶人类' 一词意味着不喜欢其他人；不合群的。" +
            "<br><br>" +
            "(A) '社交' 意味着愿意与他人交谈和参与活动的；友好的。" +
            "<br><br>" +
            "(B) '友好' 意味着善良和愉快的。" +
            "<br><br>" +
            "(C) '善良' 意味着有或表现出友好、慷慨和体贴的性质。"
    },
    {
        id: 4,
        question: "Despite the urgency of the situation, the committee remained __________, showing no interest in finding a solution.",
        chinese_question: "尽管情况紧急，委员会仍然 __________，对寻找解决方案毫无兴趣。",
        answers: [
            { option: "A", answer: "empathetic", chinese_answer: "富有同情心", chinese_romanization: "fù yǒu tóngqíng xīn" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apathetic' means showing no interest or enthusiasm." +
            "<br><br>" +
            "(A) 'empathetic' means showing an ability to understand and share the feelings of another." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(C) '冷漠' 一词意味着没有兴趣或热情。" +
            "<br><br>" +
            "(A) '富有同情心' 意味着表现出理解和分享他人感受的能力。" +
            "<br><br>" +
            "(B) '精力充沛' 意味着表现出或涉及大量活动或活力。" +
            "<br><br>" +
            "(D) '热情' 意味着有或表现出强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 5,
        question: "The criminal was sentenced to life in prison for his __________ acts of violence.",
        chinese_question: "这名罪犯因其 __________ 的暴力行为被判终身监禁。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "heinous", chinese_answer: "恶劣", chinese_romanization: "èliè" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "D", answer: "petty", chinese_answer: "小", chinese_romanization: "xiǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heinous' means utterly odious or wicked." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'petty' means of little importance; trivial.",
        chinese_explanation: "(B) '恶劣' 一词意味着极其可憎或邪恶的。" +
            "<br><br>" +
            "(A) '轻微' 意味着在重要性、严重性或显著性方面较小的。" +
            "<br><br>" +
            "(C) '琐碎' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '小' 意味着不重要的；琐碎的。"
    },
    {
        id: 6,
        question: "He was an __________ gambler, known for spending every weekend at the casino without fail.",
        chinese_question: "他是一个 __________ 的赌徒，众所周知每个周末都会去赌场。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "B", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
            { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "inveterate", chinese_answer: "根深蒂固的", chinese_romanization: "gēnshēndìgù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inveterate' means having a particular habit, activity, or interest that is long-established and unlikely to change." +
            "<br><br>" +
            "(A) 'occasional' means occurring or done infrequently and irregularly." +
            "<br><br>" +
            "(B) 'reluctant' means unwilling and hesitant." +
            "<br><br>" +
            "(C) 'novice' means a person new to or inexperienced in a field or situation.",
        chinese_explanation: "(D) '根深蒂固的' 意味着有某种长期形成且不太可能改变的习惯、活动或兴趣。" +
            "<br><br>" +
            "(A) '偶尔的' 意味着不经常和不规律地发生或完成的。" +
            "<br><br>" +
            "(B) '不情愿的' 意味着不愿意和犹豫的。" +
            "<br><br>" +
            "(C) '新手' 意味着在某个领域或情况下新来的或没有经验的人。"
    },
    {
        id: 7,
        question: "The teacher's __________ demeanoUr, always encouraging and supportive, created a positive learning environment for the students.",
        chinese_question: "老师的 __________ 态度，总是鼓励和支持，为学生创造了积极的学习环境。",
        answers: [
            { option: "A", answer: "abrasive", chinese_answer: "粗暴", chinese_romanization: "cūbào" },
            { option: "B", answer: "amiable", chinese_answer: "和蔼", chinese_romanization: "hé'ǎi" },
            { option: "C", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amiable' means having a friendly and pleasant manner." +
            "<br><br>" +
            "(A) 'abrasive' means showing little concern for the feelings of others." +
            "<br><br>" +
            "(C) 'hostile' means unfriendly or antagonistic." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(B) '和蔼'一词意味着友好和愉快的态度。" +
            "<br><br>" +
            "(A) '粗暴' 意味着对他人的感受不太关心。" +
            "<br><br>" +
            "(C) '敌对' 意味着不友好或敌对。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 8,
        question: "Her __________ enthusiasm for the project inspired everyone on the team and kept morale high.",
        chinese_question: "她对项目的 __________ 热情激励了团队中的每一个人，并保持了高昂的士气。",
        answers: [
            { option: "A", answer: "effervescent", chinese_answer: "活泼", chinese_romanization: "huópō" },
            { option: "B", answer: "dull", chinese_answer: "沉闷", chinese_romanization: "chénmèn" },
            { option: "C", answer: "gloomy", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūn hūn yù shuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effervescent' means vivacious and enthusiastic." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(A) '活泼' 一词意味着活泼和热情。" +
            "<br><br>" +
            "(B) '沉闷' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '忧郁' 意味着黑暗或照明不足，特别是显得令人沮丧或可怕的。" +
            "<br><br>" +
            "(D) '昏昏欲睡' 意味着受困倦影响的；迟钝和冷漠的。"
    },
    {
        id: 9,
        question: "His __________ betrayal of his closest friend shocked everyone who knew them.",
        chinese_question: "他对最亲密朋友的 __________ 背叛震惊了所有认识他们的人。",
        answers: [
            { option: "A", answer: "loyal", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "B", answer: "faithful", chinese_answer: "忠实", chinese_romanization: "zhōngshí" },
            { option: "C", answer: "perfidious", chinese_answer: "背信弃义", chinese_romanization: "bèixìnqìyì" },
            { option: "D", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perfidious' means deceitful and untrustworthy." +
            "<br><br>" +
            "(A) 'loyal' means giving or showing firm and constant support or allegiance to a person or institution." +
            "<br><br>" +
            "(B) 'faithful' means remaining loyal and steadfast." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(C) '背信弃义' 一词意味着欺骗和不可信赖的。" +
            "<br><br>" +
            "(A) '忠诚' 意味着给予或表现出对一个人或机构的坚定和持续的支持或忠诚。" +
            "<br><br>" +
            "(B) '忠实' 意味着保持忠诚和坚定的。" +
            "<br><br>" +
            "(D) '诚实' 意味着没有欺骗和虚伪的；真诚的。"
    },
    {
        id: 10,
        question: "The effects of the pollutant are __________, causing harm slowly over many years without immediate symptoms.",
        chinese_question: "这种污染物的影响是 __________ 的，经过多年逐渐造成危害而没有立即的症状。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "B", answer: "straightforward", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "C", answer: "insidious", chinese_answer: "潜伏", chinese_romanization: "qiánfú" },
            { option: "D", answer: "benign", chinese_answer: "良性", chinese_romanization: "liángxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insidious' means proceeding in a gradual, subtle way, but with harmful effects." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'benign' means gentle and kindly.",
        chinese_explanation: "(C) '潜伏' 一词意味着以渐进、微妙的方式进行，但具有有害的效果。" +
            "<br><br>" +
            "(A) '明显' 意味着容易被察觉或理解；清晰的、自明的或显然的。" +
            "<br><br>" +
            "(B) '直接' 意味着简单和容易做到或理解的。" +
            "<br><br>" +
            "(D) '良性' 意味着温和和友好的。"
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
