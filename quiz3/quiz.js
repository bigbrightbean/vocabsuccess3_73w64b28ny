// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The CEO was __________ in his decision-making, always considering the potential risks and benefits.",
        chinese_question: "这位 CEO 在决策时非常 __________，总是考虑到潜在的风险和收益。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "circumspect", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "D", answer: "hasty", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'circumspect' means wary and unwilling to take risks." +
            "<br><br>" +
            "(A) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'hasty' means done with excessive speed or urgency; hurried.",
        chinese_explanation: "(C) '谨慎' 一词意味着谨慎并且不愿意冒险。" +
            "<br><br>" +
            "(A) '鲁莽' 意味着不考虑或不关心行为的后果。" +
            "<br><br>" +
            "(B) '冲动' 意味着在没有深思熟虑的情况下行动或完成的。" +
            "<br><br>" +
            "(D) '匆忙' 意味着以过快的速度或紧急完成的。"
    },
    {
        id: 2,
        question: "The depths of the ocean are so __________ that they hold many secrets yet to be discovered.",
        chinese_question: "海洋的深度如此 __________，其中蕴藏着许多尚未发现的秘密。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅", chinese_romanization: "qiǎn" },
            { option: "B", answer: "fathomless", chinese_answer: "深不可测", chinese_romanization: "shēn bù kě cè" },
            { option: "C", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fathomless' means too deep to be measured or understood; immeasurable." +
            "<br><br>" +
            "(A) 'shallow' means of little depth." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen.",
        chinese_explanation: "(B) '深不可测' 一词意味着太深而无法测量或理解的；不可估量的。" +
            "<br><br>" +
            "'浅' 意味着深度小的。" +
            "<br><br>" +
            "'清晰' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "'透明' 意味着允许光线通过，以便可以清楚地看到后面的物体。"
    },
    {
        id: 3,
        question: "The choir's __________ performance left the audience in awe, as their voices blended perfectly.",
        chinese_question: "合唱团的 __________ 表演让观众惊叹不已，因为他们的声音完美地融合在一起。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "B", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "dissonant", chinese_answer: "不协调", chinese_romanization: "bù xiétiáo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(B) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(D) 'dissonant' means lacking harmony.",
        chinese_explanation: "(C) '和谐' 一词意味着形成一个令人愉快或一致的整体。" +
            "<br><br>" +
            "'不和谐' 意味着不同意或不协调的。" +
            "<br><br>" +
            "'混乱' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "'不协调' 意味着缺乏和谐。"
    },
    {
        id: 4,
        question: "He made an __________ error in the report, which was caught by his supervisor during the final review.",
        chinese_question: "他在报告中犯了一个 __________ 的错误，在最终审核时被他的主管发现了。",
        answers: [
            { option: "A", answer: "intentional", chinese_answer: "故意", chinese_romanization: "gùyì" },
            { option: "B", answer: "deliberate", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" },
            { option: "C", answer: "inadvertent", chinese_answer: "无意", chinese_romanization: "wúyì" },
            { option: "D", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inadvertent' means not resulting from or achieved through deliberate planning; unintentional." +
            "<br><br>" +
            "(A) 'intentional' means done on purpose; deliberate." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(C) '无意' 一词意味着不是通过故意计划导致的或实现的；无意的。" +
            "<br><br>" +
            "'故意' 意味着有意地完成的。" +
            "<br><br>" +
            "'深思熟虑' 意味着有意识地和有意地完成的。" +
            "<br><br>" +
            "'计划' 意味着事先决定和安排的。"
    },
    {
        id: 5,
        question: "The __________ old man told stories for hours, much to the delight of the children.",
        chinese_question: "这位 __________ 的老人与孩子们讲了几个小时的故事，让孩子们非常高兴。",
        answers: [
            { option: "A", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
            { option: "C", answer: "taciturn", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" },
            { option: "D", answer: "garrulous", chinese_answer: "话多", chinese_romanization: "huà duō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'garrulous' means excessively talkative, especially on trivial matters." +
            "<br><br>" +
            "(A) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(B) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(C) 'taciturn' means reserved or uncommunicative in speech; saying little.",
        chinese_explanation: "(D) '话多' 一词意味着过度健谈的，尤其是在琐事上。" +
            "<br><br>" +
            "'沉默' 意味着不发出任何声音或伴随任何声音。" +
            "<br><br>" +
            "'矜持' 意味着缓慢地表现出情感或意见。" +
            "<br><br>" +
            "'沉默寡言' 意味着在言语上保守或不善于交流的；说得很少的。"
    },
    {
        id: 6,
        question: "The report was filled with __________ information that was not relevant to the main topic.",
        chinese_question: "报告中充满了与主要话题无关的 __________ 信息。",
        answers: [
            { option: "A", answer: "relevant", chinese_answer: "相关", chinese_romanization: "xiāngguān" },
            { option: "B", answer: "essential", chinese_answer: "必要", chinese_romanization: "bìyào" },
            { option: "C", answer: "extraneous", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "pertinent", chinese_answer: "相关", chinese_romanization: "xiāngguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'extraneous' means irrelevant or unrelated to the subject being dealt with." +
            "<br><br>" +
            "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(B) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(D) 'pertinent' means relevant or applicable to a particular matter.",
        chinese_explanation: "(C) '无关' 一词意味着与处理的主题无关或无关的。" +
            "<br><br>" +
            "'相关' 意味着与正在做的或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "'必要' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "'相关' 意味着与某个特定问题相关或适用的。"
    },
    {
        id: 7,
        question: "The waiter’s __________ attitude towards the customers earned him several complaints.",
        chinese_question: "服务员对顾客的 __________ 态度让他收到了很多投诉。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "B", answer: "churlish", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "C", answer: "courteous", chinese_answer: "彬彬有礼", chinese_romanization: "bīnbīn yǒu lǐ" },
            { option: "D", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'churlish' means rude in a mean-spirited and surly way." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(C) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '粗鲁' 一词意味着以刻薄和乖戾的方式无礼。" +
            "<br><br>" +
            "(A) '礼貌' 意味着表现出对他人的尊重和体贴的行为。" +
            "<br><br>" +
            "(C) '彬彬有礼' 意味着礼貌、尊重或体贴的态度。" +
            "<br><br>" +
            "(D) '尊重' 意味着感到或表现出敬意。"
    },
    {
        id: 8,
        question: "The vandals were arrested for their __________ destruction of public property.",
        chinese_question: "破坏者因 __________ 破坏公共财产而被捕。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "B", answer: "deliberate", chinese_answer: "故意", chinese_romanization: "gùyì" },
            { option: "C", answer: "wanton", chinese_answer: "恶意", chinese_romanization: "èyì" },
            { option: "D", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wanton' means deliberate and unprovoked." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'thoughtful' means showing consideration for the needs of other people.",
        chinese_explanation: "(C) '恶意' 一词意味着故意且无缘无故的。" +
            "<br><br>" +
            "(A) '小心' 意味着确保避免潜在的危险、意外或伤害；谨慎的。" +
            "<br><br>" +
            "(B) '故意' 意味着有意识地和故意地做的。" +
            "<br><br>" +
            "(D) '体贴' 意味着考虑到他人的需求。"
    },
    {
        id: 9,
        question: "He was __________ in his opposition to the new policy, arguing passionately against it.",
        chinese_question: "他强烈 __________ 地反对新政策，充满激情地反驳。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "apathetic", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "C", answer: "vehement", chinese_answer: "强烈", chinese_romanization: "qiángliè" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vehement' means showing strong feeling; forceful, passionate, or intense." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(C) '强烈' 意味着表现出强烈的感情；有力的、充满激情的或强烈的。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '无动于衷' 意味着表现出或感到没有兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着对某事或某人不感兴趣或不关心。"
    },
    {
        id: 10,
        question: "His plan to save the world was so __________ that no one took him seriously.",
        chinese_question: "他的拯救世界的计划如此 __________，以至于没有人认真对待他。",
        answers: [
            { option: "A", answer: "practical", chinese_answer: "实际", chinese_romanization: "shíjì" },
            { option: "B", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "C", answer: "quixotic", chinese_answer: "不切实际", chinese_romanization: "bùqiè shíjì" },
            { option: "D", answer: "sensible", chinese_answer: "明智", chinese_romanization: "míngzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
            "<br><br>" +
            "(A) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas." +
            "<br><br>" +
            "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(D) 'sensible' means chosen in accordance with wisdom or prudence; likely to be of benefit.",
        chinese_explanation: "(C) '不切实际' 一词意味着过于理想化；不现实且不切实际的。" +
            "<br><br>" +
            "'实际' 意味着关心实际的做法或用途，而不是理论和想法。" +
            "<br><br>" +
            "'现实' 意味着对可以实现或预期的事物有或表现出明智和实用的想法。" +
            "<br><br>" +
            "'明智' 意味着根据智慧或谨慎选择的；可能有益的。"
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
