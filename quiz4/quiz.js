// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The community was __________, quickly rebuilding after the devastating hurricane.",
        chinese_question: "社区非常 __________，在毁灭性的飓风过后迅速重建。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "B", answer: "weak", chinese_answer: "虚弱", chinese_romanization: "xūruò" },
            { option: "C", answer: "resilient", chinese_answer: "有弹性", chinese_romanization: "yǒu tánxìng" },
            { option: "D", answer: "delicate", chinese_answer: "精致", chinese_romanization: "jīngzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(D) 'delicate' means very fine in texture or structure; of intricate workmanship or quality.",
        chinese_explanation: "(C) '有弹性' 一词意味着能够承受或迅速从困难条件中恢复。" +
            "<br><br>" +
            "'脆弱' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "'虚弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "'精致' 意味着质地或结构非常精细；工艺或质量复杂的。"
    },
    {
        id: 2,
        question: "The protesters were __________ in their demands for change, shouting slogans and waving signs.",
        chinese_question: "抗议者 __________ 地要求改变，高喊口号并挥舞标语。",
        answers: [
            { option: "A", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "C", answer: "vociferous", chinese_answer: "喧嚷", chinese_romanization: "xuānrǎng" },
            { option: "D", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vociferous' means expressing feelings or opinions in a very loud or forceful way." +
            "<br><br>" +
            "(A) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(B) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(C) '喧嚷' 一词意味着以非常大声或有力的方式表达感情或意见。" +
            "<br><br>" +
            "(A) '沉默' 意味着不发出任何声音或伴随任何声音。" +
            "<br><br>" +
            "(B) '安静' 意味着几乎没有或没有噪音。" +
            "<br><br>" +
            "(D) '矜持' 意味着缓慢地表现出情感或意见。"
    },
    {
        id: 3,
        question: "The company's __________ disregard for safety regulations resulted in several accidents.",
        chinese_question: "公司对安全规定的 __________ 无视导致了几起事故。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "egregious", chinese_answer: "极其恶劣", chinese_romanization: "jíqí èliè" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'egregious' means outstandingly bad; shocking." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '极其恶劣' 一词意味着非常糟糕；令人震惊的。" +
            "<br><br>" +
            "(A) '轻微' 意味着较不重要、严重或显著的。" +
            "<br><br>" +
            "(C) '微不足道' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎' 意味着价值或重要性很小的。"
    },
    {
        id: 4,
        question: "The children's book was filled with __________ tales of dragons and wizards, capturing their imaginations.",
        chinese_question: "这本儿童书充满了 __________ 的龙与巫师的故事，激发了他们的想象力。",
        answers: [
            { option: "A", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "B", answer: "practical", chinese_answer: "实用", chinese_romanization: "shíyòng" },
            { option: "C", answer: "fanciful", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
            { option: "D", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fanciful' means (of a person or their thoughts and ideas) overimaginative and unrealistic." +
            "<br><br>" +
            "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(B) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(C) '幻想' 一词意味着（指一个人或他们的想法和观点）过度富有想象力和不现实的。" +
            "<br><br>" +
            "'现实' 意味着对可以实现或预期的事情有或表现出明智和实际的想法。" +
            "<br><br>" +
            "'实用' 意味着关心实际的做法或用途，而不是理论和想法。" +
            "<br><br>" +
            "'平凡' 意味着缺乏兴趣或兴奋；无聊的。"
    },
    {
        id: 5,
        question: "The chef's new dish was a __________ delight, with a perfect balance of flavors.",
        chinese_question: "这位厨师的新菜是一种 __________ 的享受，味道完美平衡。",
        answers: [
            { option: "A", answer: "visual", chinese_answer: "视觉", chinese_romanization: "shìjué" },
            { option: "B", answer: "auditory", chinese_answer: "听觉", chinese_romanization: "tīngjué" },
            { option: "C", answer: "gustatory", chinese_answer: "味觉", chinese_romanization: "wèijué" },
            { option: "D", answer: "tactile", chinese_answer: "触觉", chinese_romanization: "chùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gustatory' means concerned with tasting or the sense of taste." +
            "<br><br>" +
            "(A) 'visual' means relating to seeing or sight." +
            "<br><br>" +
            "(B) 'auditory' means relating to the sense of hearing." +
            "<br><br>" +
            "(D) 'tactile' means connected with the sense of touch.",
        chinese_explanation: "(C) '味觉' 一词意味着与品尝或味觉有关的。" +
            "<br><br>" +
            "'视觉' 意味着与看到或视力有关的。" +
            "<br><br>" +
            "'听觉' 意味着与听觉有关的。" +
            "<br><br>" +
            "'触觉' 意味着与触觉有关的。"
    },
    {
        id: 6,
        question: "After winning several awards, the artist became __________, no longer striving to improve his work.",
        chinese_question: "在赢得多个奖项后，这位艺术家变得 __________，不再努力提高他的作品。",
        answers: [
            { option: "A", answer: "complacent", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" },
            { option: "B", answer: "ambitious", chinese_answer: "有野心的", chinese_romanization: "yǒu yěxīn de" },
            { option: "C", answer: "driven", chinese_answer: "有动力的", chinese_romanization: "yǒu dònglì de" },
            { option: "D", answer: "motivated", chinese_answer: "积极的", chinese_romanization: "jījí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(B) 'ambitious' means having a strong desire and determination to succeed." +
            "<br><br>" +
            "(C) 'driven' means being strongly motivated to achieve something." +
            "<br><br>" +
            "(D) 'motivated' means provided with a reason to act in a certain way.",
        chinese_explanation: "(A) '自满的' 意味着对自己或自己的成就表现出自鸣得意或不加批判的满意。" +
            "<br><br>" +
            "(B) '有野心的' 意味着有强烈的成功欲望和决心。" +
            "<br><br>" +
            "(C) '有动力的' 意味着有强烈动机去实现某事。" +
            "<br><br>" +
            "(D) '积极的' 意味着被赋予理由以某种方式行事的。"
    },
    {
        id: 7,
        question: "The manager demanded an __________ resolution to the problem to avoid any delays in the project.",
        chinese_question: "经理要求 __________ 解决问题，以避免项目的任何延误。",
        answers: [
            { option: "A", answer: "slow", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
            { option: "B", answer: "expeditious", chinese_answer: "快速", chinese_romanization: "kuàisù" },
            { option: "C", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "sluggish", chinese_answer: "迟缓", chinese_romanization: "chíhuǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'expeditious' means done with speed and efficiency." +
            "<br><br>" +
            "(A) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(C) 'delayed' means occurring or done late." +
            "<br><br>" +
            "(D) 'sluggish' means slow-moving or inactive.",
        chinese_explanation: "(B) '快速' 一词意味着迅速和高效地完成的。" +
            "<br><br>" +
            "'缓慢' 意味着移动或操作，或设计为如此，仅以低速；不快或快速。" +
            "<br><br>" +
            "'延迟' 意味着发生或完成较晚。" +
            "<br><br>" +
            "'迟缓' 意味着行动缓慢或不活跃的。"
    },
    {
        id: 8,
        question: "The artist's __________ painting was admired for its intricate detail and vibrant colors.",
        chinese_question: "这位艺术家的 __________ 画作因其精细的细节和鲜艳的色彩而受到赞赏。",
        answers: [
            { option: "A", answer: "crude", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "B", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "C", answer: "exquisite", chinese_answer: "精美", chinese_romanization: "jīngměi" },
            { option: "D", answer: "rough", chinese_answer: "粗略", chinese_romanization: "cūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exquisite' means extremely beautiful and, typically, delicate." +
            "<br><br>" +
            "(A) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(B) 'average' means achieving an average standard; not extraordinary." +
            "<br><br>" +
            "(D) 'rough' means having an uneven or irregular surface; not smooth or level.",
        chinese_explanation: "(C) '精美' 一词意味着极其美丽的，通常是精致的。" +
            "<br><br>" +
            "'粗糙' 意味着自然或原始状态；尚未加工或提炼。" +
            "<br><br>" +
            "'平均' 意味着达到平均标准；不非凡的。" +
            "<br><br>" +
            "'粗略' 意味着表面不平整或不规则；不光滑或不平坦的。"
    },
    {
        id: 9,
        question: "Throughout the crisis, she remained __________, calmly addressing each issue as it arose.",
        chinese_question: "在整个危机期间，她始终保持 __________，冷静地处理每个出现的问题。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "B", answer: "nervous", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "C", answer: "agitated", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "D", answer: "unflappable", chinese_answer: "沉着", chinese_romanization: "chénzhuó" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unflappable' means having or showing calmness in a crisis." +
            "<br><br>" +
            "(A) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(B) 'nervous' means easily agitated or alarmed; tending to be anxious; highly strung." +
            "<br><br>" +
            "(C) 'agitated' means feeling or appearing troubled or nervous.",
        chinese_explanation: "(D) '沉着' 意味着在危机中表现出冷静。" +
            "<br><br>" +
            "(A) '焦虑' 意味着经历担忧、不安或紧张。" +
            "<br><br>" +
            "(B) '紧张' 意味着容易激动或警觉；倾向于焦虑；高度紧张的。" +
            "<br><br>" +
            "(C) '激动' 意味着感到或表现出不安或紧张。"
    },
    {
        id: 10,
        question: "The actor remained __________ despite the chaos on set, calmly waiting for his next scene.",
        chinese_question: "尽管片场一片混乱，这位演员仍然 __________，冷静地等待他的下一个场景。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "B", answer: "nervous", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "C", answer: "nonchalant", chinese_answer: "漫不经心", chinese_romanization: "mànbù jīngxīn" },
            { option: "D", answer: "worried", chinese_answer: "担心", chinese_romanization: "dānxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nonchalant' means feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." +
            "<br><br>" +
            "(A) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(B) 'nervous' means easily agitated or alarmed." +
            "<br><br>" +
            "(D) 'worried' means anxious or troubled about actual or potential problems.",
        chinese_explanation: "(C) '漫不经心' 一词意味着感到或显得随意的平静和放松；没有表现出焦虑、兴趣或热情。" +
            "<br><br>" +
            "'焦虑' 意味着经历担忧、不安或紧张。" +
            "<br><br>" +
            "'紧张' 意味着容易激动或惊慌。" +
            "<br><br>" +
            "'担心' 意味着对实际或潜在的问题感到焦虑或烦恼。"
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
