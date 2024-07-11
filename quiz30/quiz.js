// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ growth over the past year, reflected in its soaring stock prices and expanding market share, impressed all the investors.",
        chinese_question: "公司过去一年的 __________ 增长，反映在飙升的股价和扩大的市场份额中，给所有投资者留下了深刻的印象。",
        answers: [
            { option: "A", answer: "exponential", chinese_answer: "指数", chinese_romanization: "zhǐshù" },
            { option: "B", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "C", answer: "stagnant", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "gradual", chinese_answer: "逐渐", chinese_romanization: "zhújiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exponential' means becoming more and more rapid." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(C) 'stagnant' means showing no activity; dull and sluggish." +
            "<br><br>" +
            "(D) 'gradual' means taking place or progressing slowly or by degrees.",
        chinese_explanation: "(A) '指数'一词意味着越来越迅速。" +
            "<br><br>" +
            "(B) '微不足道' 意味着非常小或不重要，不值得考虑。" +
            "<br><br>" +
            "(C) '停滞' 意味着没有活动；迟钝和缓慢。" +
            "<br><br>" +
            "(D) '逐渐' 意味着逐步或缓慢地发生或进展。"
    },
    {
        id: 2,
        question: "The scientist’s __________ findings were published in a prestigious journal, gaining recognition in the scientific community.",
        chinese_question: "科学家的 __________ 发现发表在著名期刊上，在科学界获得了认可。",
        answers: [
            { option: "A", answer: "groundbreaking", chinese_answer: "开创性", chinese_romanization: "kāichuàngxìng" },
            { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "flawed", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'groundbreaking' means introducing new ideas or methods." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected to the subject." +
            "<br><br>" +
            "(D) 'flawed' means having imperfections.",
        chinese_explanation: "(A) '开创性'一词意味着引入新想法或方法。" +
            "<br><br>" +
            "(B) '平凡' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '无关' 意味着与主题无关。" +
            "<br><br>" +
            "(D) '有缺陷' 意味着有缺陷。"
    },
    {
        id: 3,
        question: "His __________ personality made him the life of the party, always making others laugh and feel good.",
        chinese_question: "他 __________ 的性格使他成为聚会的灵魂，总是让别人笑和感到愉快。",
        answers: [
            { option: "A", answer: "melancholic", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "B", answer: "jovial", chinese_answer: "快活", chinese_romanization: "kuàihuó" },
            { option: "C", answer: "morose", chinese_answer: "阴郁", chinese_romanization: "yīnyù" },
            { option: "D", answer: "sullen", chinese_answer: "闷闷不乐", chinese_romanization: "mèn mèn bù lè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jovial' means cheerful and friendly." +
            "<br><br>" +
            "(A) 'melancholic' means feeling or expressing sadness." +
            "<br><br>" +
            "(C) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(D) 'sullen' means bad-tempered and sulky.",
        chinese_explanation: "(B) '快活' 一词意味着快乐和友好。" +
            "<br><br>" +
            "(A) '忧郁' 意味着感到或表达悲伤。" +
            "<br><br>" +
            "(C) '阴郁' 意味着阴沉和坏脾气。" +
            "<br><br>" +
            "(D) '闷闷不乐' 意味着脾气不好和愠怒。"
    },
    {
        id: 4,
        question: "The child's __________ behavior made it clear that no amount of discipline could change his ways.",
        chinese_question: "孩子的 __________ 行为表明，无论怎样的纪律都无法改变他的行为。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "corrigible", chinese_answer: "可改正", chinese_romanization: "kě gǎizhèng" },
            { option: "C", answer: "incorrigible", chinese_answer: "不可救药", chinese_romanization: "bù kě jiù yào" },
            { option: "D", answer: "manageable", chinese_answer: "易管理", chinese_romanization: "yì guǎnlǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incorrigible' means not able to be corrected, improved, or reformed." +
            "<br><br>" +
            "(A) 'obedient' means willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(B) 'corrigible' means capable of being corrected, reformed, or improved." +
            "<br><br>" +
            "(D) 'manageable' means able to be managed, controlled, or accomplished without great difficulty.",
        chinese_explanation: "(C) '不可救药' 一词意味着无法被纠正、改进或改革。" +
            "<br><br>" +
            "(A) '顺从' 意味着愿意遵从命令或要求；服从他人的意愿。" +
            "<br><br>" +
            "(B) '可改正' 意味着可以被纠正、改进或提高。" +
            "<br><br>" +
            "(D) '易管理' 意味着可以被管理、控制或完成而没有很大的困难。"
    },
    {
        id: 5,
        question: "Her __________ determination helped her overcome numerous obstacles and achieve her goals.",
        chinese_question: "她 __________ 的决心帮助她克服了无数障碍并实现了目标。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "B", answer: "yielding", chinese_answer: "屈服", chinese_romanization: "qūfú" },
            { option: "C", answer: "unyielding", chinese_answer: "坚定", chinese_romanization: "jiāndìng" },
            { option: "D", answer: "compliant", chinese_answer: "顺从", chinese_romanization: "shùncóng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unyielding' means not giving way to pressure; hard or solid." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'yielding' means giving way under pressure; not hard or rigid." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent.",
        chinese_explanation: "(C) '坚定' 意味着不屈服于压力；坚硬或坚固的。" +
            "<br><br>" +
            "(A) '灵活' 意味着能够轻易弯曲而不断裂。" +
            "<br><br>" +
            "(B) '屈服' 意味着在压力下让步；不坚硬或不僵硬的。" +
            "<br><br>" +
            "(D) '顺从' 意味着倾向于同意他人或遵守规则，尤其是过度程度；顺从的。"
    },
    {
        id: 6,
        question: "The professor asked the students to consider a __________ scenario in which global warming was reversed.",
        chinese_question: "教授让学生们考虑一种 __________ 的情景，其中全球变暖被逆转。",
        answers: [
            { option: "A", answer: "actual", chinese_answer: "实际", chinese_romanization: "shíjì" },
            { option: "B", answer: "hypothetical", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "certain", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "D", answer: "proven", chinese_answer: "证实", chinese_romanization: "zhèngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hypothetical' means based on or serving as a hypothesis." +
            "<br><br>" +
            "(A) 'actual' means existing in fact; typically as contrasted with what was intended, expected, or believed." +
            "<br><br>" +
            "(C) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(D) 'proven' means demonstrated by evidence or argument to be true or existing.",
        chinese_explanation: "(B) '假设' 一词意味着基于或作为假设。" +
            "<br><br>" +
            "(A) '实际' 意味着实际存在的；通常与预期或相信的相对比。" +
            "<br><br>" +
            "(C) '确定' 意味着确定无疑的；确立的。" +
            "<br><br>" +
            "(D) '证实' 意味着通过证据或论证证明为真或存在的。"
    },
    {
        id: 7,
        question: "The ambassador was praised for his __________ approach to resolving the international conflict.",
        chinese_question: "大使因其 __________ 的方式解决国际冲突而受到赞扬。",
        answers: [
            { option: "A", answer: "aggressive", chinese_answer: "侵略性", chinese_romanization: "qīnlüè xìng" },
            { option: "B", answer: "confrontational", chinese_answer: "对抗性", chinese_romanization: "duìkàng xìng" },
            { option: "C", answer: "diplomatic", chinese_answer: "外交", chinese_romanization: "wàijiāo" },
            { option: "D", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
            "<br><br>" +
            "(A) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(B) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly and antagonistic.",
        chinese_explanation: "(C) '外交' 一词意味着表现出以敏感和有效的方式处理人际关系的能力。" +
            "<br><br>" +
            "(A) '侵略性' 意味着准备或可能攻击或对抗。" +
            "<br><br>" +
            "(B) '对抗性' 意味着倾向于以攻击性方式处理情况；敌对或争论。" +
            "<br><br>" +
            "(D) '敌对' 意味着不友好和敌对。"
    },
    {
        id: 8,
        question: "The weather forecast predicted __________ conditions for the weekend, which ruined our plans for a picnic.",
        chinese_question: "天气预报预测周末会有 __________ 的天气，这破坏了我们的野餐计划。",
        answers: [
            { option: "A", answer: "inclement", chinese_answer: "恶劣", chinese_romanization: "èliè" },
            { option: "B", answer: "balmy", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "C", answer: "radiant", chinese_answer: "光芒四射", chinese_romanization: "guāngmáng sìshè" },
            { option: "D", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inclement' means harsh or severe (usually weather)." +
            "<br><br>" +
            "(B) 'balmy' means mild and pleasant." +
            "<br><br>" +
            "(C) 'radiant' means bright and shining." +
            "<br><br>" +
            "(D) 'serene' means calm and peaceful.",
        chinese_explanation: "(A) '恶劣' 一词意味着恶劣或严酷的（通常指天气）。" +
            "<br><br>" +
            "(B) '温和' 意味着温暖宜人。" +
            "<br><br>" +
            "(C) '光芒四射' 意味着明亮而闪耀。" +
            "<br><br>" +
            "(D) '宁静' 意味着平静和安详。"
    },
    {
        id: 9,
        question: "The novel’s __________ plot kept readers engaged with its unexpected twists and turns.",
        chinese_question: "小说的 __________ 情节通过出乎意料的曲折使读者着迷。",
        answers: [
            { option: "A", answer: "intricate", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "B", answer: "straightforward", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "dull", chinese_answer: "枯燥", chinese_romanization: "kūzào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intricate' means very complicated or detailed." +
            "<br><br>" +
            "(B) 'straightforward' means easy to understand." +
            "<br><br>" +
            "(C) 'monotonous' means dull and repetitive." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(A) '复杂'一词意味着非常复杂或详细。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解。" +
            "<br><br>" +
            "(C) '单调' 意味着乏味和重复。" +
            "<br><br>" +
            "(D) '枯燥' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 10,
        question: "The engineer’s __________ testing methods ensured that the product met all safety standards before release.",
        chinese_question: "工程师 __________ 的测试方法确保产品在发布前符合所有安全标准。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽松", chinese_romanization: "kuānsōng" },
            { option: "B", answer: "cursory", chinese_answer: "粗略", chinese_romanization: "cūlüè" },
            { option: "C", answer: "superficial", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "D", answer: "rigorous", chinese_answer: "严格", chinese_romanization: "yángé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rigorous' means extremely thorough and accurate." +
            "<br><br>" +
            "(A) 'lenient' means permissive and not strict." +
            "<br><br>" +
            "(B) 'cursory' means hasty and not detailed." +
            "<br><br>" +
            "(C) 'superficial' means only on the surface.",
        chinese_explanation: "(D) '严格'一词意味着极其彻底和准确。" +
            "<br><br>" +
            "(A) '宽松' 意味着宽容且不严格。" +
            "<br><br>" +
            "(B) '粗略' 意味着匆忙且不详细。" +
            "<br><br>" +
            "(C) '表面' 意味着仅在表面上。"
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
