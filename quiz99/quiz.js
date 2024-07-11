// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The project manager decided to __________ the tasks evenly among the team members.",
        chinese_question: "项目经理决定将任务均匀地 __________ 给团队成员。",
        answers: [
            { option: "A", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
            { option: "B", answer: "collect", chinese_answer: "收集", chinese_romanization: "shōují" },
            { option: "C", answer: "allot", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "D", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allot' means give or apportion (something) to someone as a share or task." +
            "<br><br>" +
            "(A) 'hoard' means accumulate (money or valued objects) and hide or store away." +
            "<br><br>" +
            "(B) 'collect' means bring or gather together (things, typically when scattered or widespread)." +
            "<br><br>" +
            "(D) 'withhold' means refuse to give (something that is due to or is desired by another).",
        chinese_explanation: "(C) '分配' 一词意味着将（某物）作为份额或任务给予某人。" +
            "<br><br>" +
            "(A) '囤积' 意味着积累（钱或有价值的物品）并隐藏或储藏起来。" +
            "<br><br>" +
            "(B) '收集' 意味着将（东西，通常是散落或分散的东西）聚集在一起。" +
            "<br><br>" +
            "(D) '扣留' 意味着拒绝给予（应得或他人想要的东西）。"
    },
    {
        id: 2,
        question: "He was __________ of his tendency to interrupt others during conversations.",
        chinese_question: "他 __________ 地在谈话中打断了别人。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshí dào de" },
            { option: "B", answer: "mindful", chinese_answer: "注意到的", chinese_romanization: "zhùyì dào de" },
            { option: "C", answer: "unconscious", chinese_answer: "无意识的", chinese_romanization: "wú yìshí de" },
            { option: "D", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unconscious' figuratively means not aware of or indifferent to something." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(B) 'mindful' means conscious or aware of something." +
            "<br><br>" +
            "(D) 'considerate' means careful not to cause inconvenience or hurt to others.",
        chinese_explanation: "(C) '无意识的' 在比喻意义上意味着没有意识到或对某事无动于衷。" +
            "<br><br>" +
            "(A) '意识到的' 意味着知道或感知到某种情况或事实。" +
            "<br><br>" +
            "(B) '注意到的' 意味着有意识或注意到某事。" +
            "<br><br>" +
            "(D) '体贴的' 意味着小心不要给别人带来不便或伤害。"
    },
    {
        id: 3,
        question: "The firefighters worked tirelessly to __________ the survivors from the wreckage.",
        chinese_question: "消防员不知疲倦地工作，以将幸存者从残骸中 __________ 出来。",
        answers: [
            { option: "A", answer: "trap", chinese_answer: "陷入", chinese_romanization: "xiànrù" },
            { option: "B", answer: "extricate", chinese_answer: "解救", chinese_romanization: "jiějiù" },
            { option: "C", answer: "bind", chinese_answer: "捆绑", chinese_romanization: "kǔnbǎng" },
            { option: "D", answer: "enclose", chinese_answer: "包围", chinese_romanization: "bāowéi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extricate' means free (someone or something) from a constraint or difficulty." +
            "<br><br>" +
            "(A) 'trap' means catch (an animal) in a trap." +
            "<br><br>" +
            "(C) 'bind' means tie or fasten (something) tightly." +
            "<br><br>" +
            "(D) 'enclose' means surround or close off on all sides.",
        chinese_explanation: "(B) '解救' 一词意味着使（某人或某物）从约束或困难中解脱出来。" +
            "<br><br>" +
            "(A) '陷入' 意味着（动物）陷入陷阱。" +
            "<br><br>" +
            "(C) '捆绑' 意味着将（某物）紧紧捆绑或固定。" +
            "<br><br>" +
            "(D) '包围' 意味着从各方面包围或关闭。"
    },
    {
        id: 4,
        question: "New leadership was brought in to __________ the company's lagging performance.",
        chinese_question: "引入了新领导层来 __________ 公司的滞后表现。",
        answers: [
            { option: "A", answer: "stagnate", chinese_answer: "使停滞", chinese_romanization: "shǐ tíngzhì" },
            { option: "B", answer: "decline", chinese_answer: "使下降", chinese_romanization: "shǐ xiàjiàng" },
            { option: "C", answer: "wither", chinese_answer: "枯萎", chinese_romanization: "kūwěi" },
            { option: "D", answer: "rejuvenate", chinese_answer: "使恢复活力", chinese_romanization: "shǐ huīfù huólì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rejuvenate' figuratively means to restore to a more youthful, energetic, or productive state." +
            "<br><br>" +
            "(A) 'stagnate' means cease to flow or move; become stagnant." +
            "<br><br>" +
            "(B) 'decline' means become smaller, fewer, or less; decrease." +
            "<br><br>" +
            "(C) 'wither' means become dry and shriveled.",
        chinese_explanation: "(D) '使恢复活力' 在比喻意义上意味着恢复到更年轻、精力充沛或更有生产力的状态。" +
            "<br><br>" +
            "(A) '使停滞' 意味着停止流动或移动；变得停滞不前。" +
            "<br><br>" +
            "(B) '使下降' 意味着变小、变少或减少。" +
            "<br><br>" +
            "(C) '枯萎' 意味着变得干燥和枯萎。"
    },
    {
        id: 5,
        question: "Her controversial remarks were meant to __________ the audience and provoke a strong reaction.",
        chinese_question: "她的争议性言论旨在 __________ 观众并引发强烈反应。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "scandalize", chinese_answer: "使震惊", chinese_romanization: "shǐ zhènjīng" },
            { option: "C", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "D", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scandalize' means shock or horrify (someone) by a real or imagined violation of propriety or morality." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'honor' means regard with great respect." +
            "<br><br>" +
            "(D) 'compliment' means a polite expression of praise or admiration.",
        chinese_explanation: "(B) '使震惊' 一词意味着通过真实或想象的违反礼仪或道德的行为使某人震惊或恐惧。" +
            "<br><br>" +
            "(A) '表扬' 意味着表达热情的赞同或钦佩。" +
            "<br><br>" +
            "(C) '尊敬' 意味着非常尊重。" +
            "<br><br>" +
            "(D) '赞美' 意味着礼貌的赞美或钦佩的表达。"
    },
    {
        id: 6,
        question: "The campaign aims to __________ the public against misinformation by spreading accurate knowledge.",
        chinese_question: "这场运动旨在通过传播准确的信息来 __________ 公众免受错误信息的影响。",
        answers: [
            { option: "A", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" },
            { option: "B", answer: "vaccinate", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "deceive", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vaccinate' figuratively means to protect from harm or misinformation." +
            "<br><br>" +
            "(A) 'mislead' means cause (someone) to have a wrong idea or impression." +
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'deceive' means cause (someone) to believe something that is not true.",
        chinese_explanation: "(B) '保护' 在比喻意义上意味着保护免受伤害或错误信息。" +
            "<br><br>" +
            "(A) '误导' 意味着使（某人）产生错误的想法或印象。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）感到困惑或困惑。" +
            "<br><br>" +
            "(D) '欺骗' 意味着使（某人）相信不真实的东西。"
    },
    {
        id: 7,
        question: "The community came together to __________ the achievements of the local hero who saved a child from drowning.",
        chinese_question: "社区聚集在一起 __________ 那位从溺水中救出孩子的地方英雄的成就。",
        answers: [
            { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "exalt", chinese_answer: "赞扬", chinese_romanization: "zānyáng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exalt' means hold (someone or something) in very high regard; think or speak very highly of." +
            "<br><br>" +
            "(A) 'criticize' means indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'belittle' means make (someone or something) seem less impressive or important than they really are.",
        chinese_explanation: "(D) '赞扬' 一词意味着对（某人或某事）评价很高；高度评价或说得很好。" +
            "<br><br>" +
            "(A) '批评' 意味着以不赞成的方式指出（某人或某事）的缺点。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(C) '贬低' 意味着使（某人或某物）看起来不那么令人印象深刻或重要。"
    },
    {
        id: 8,
        question: "She refused to be __________ into silence by her critics, standing firm in her beliefs.",
        chinese_question: "她拒绝被批评者 __________ 成沉默，坚定地站在自己的信念上。",
        answers: [
            { option: "A", answer: "browbeat", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" },
            { option: "B", answer: "uplifted", chinese_answer: "鼓舞", chinese_romanization: "gǔwǔ" },
            { option: "C", answer: "motivated", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "D", answer: "cheered", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'browbeat' figuratively means to be intimidated or coerced." +
            "<br><br>" +
            "(B) 'uplifted' means morally or spiritually elevated." +
            "<br><br>" +
            "(C) 'motivated' means provided with a motive for doing something." +
            "<br><br>" +
            "(D) 'cheered' means shouted for joy or in praise or encouragement.",
        chinese_explanation: "(A) '恐吓' 在比喻意义上意味着被威胁或强迫。" +
            "<br><br>" +
            "(B) '鼓舞' 意味着在道德或精神上得到提升。" +
            "<br><br>" +
            "(C) '激励' 意味着提供做某事的动机。" +
            "<br><br>" +
            "(D) '欢呼' 意味着因喜悦或赞美或鼓励而喊叫。"
    },
    {
        id: 9,
        question: "Her kindness and generosity __________ the values our organization stands for.",
        chinese_question: "她的善良和慷慨 __________ 了我们组织所代表的价值观。",
        answers: [
            { option: "A", answer: "exemplify", chinese_answer: "体现", chinese_romanization: "tǐxiàn" },
            { option: "B", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exemplify' means be a typical example of." +
            "<br><br>" +
            "(B) 'contradict' means deny the truth of (a statement) by asserting the opposite." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '体现' 一词意味着成为典型的例子。" +
            "<br><br>" +
            "(B) '反驳' 意味着通过断言相反的内容来否认（陈述）的真实性。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意忽略。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 10,
        question: "The army planned to __________ the fortress, cutting off all supplies and reinforcements.",
        chinese_question: "军队计划 __________ 这座堡垒，切断所有补给和增援。",
        answers: [
            { option: "A", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
            { option: "D", answer: "besiege", chinese_answer: "包围", chinese_romanization: "bāowéi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'besiege' means surround (a place) with armed forces in order to capture it or force its surrender." +
            "<br><br>" +
            "(A) 'retreat' means withdraw from enemy forces as a result of their superior power or after a defeat." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'liberate' means set (someone) free from a situation, especially imprisonment or slavery, in which their liberty is severely restricted.",
        chinese_explanation: "(D) '包围' 一词意味着用武装部队包围（一个地方）以便捕获或迫使其投降。" +
            "<br><br>" +
            "(A) '撤退' 意味着由于敌军的优势或战败而撤退。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(C) '解放' 意味着将（某人）从一种情况中解放出来，特别是监禁或奴役，在这种情况下，他们的自由受到严重限制。"
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
