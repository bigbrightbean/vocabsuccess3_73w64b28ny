// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The maze of regulations was so __________ that even experienced lawyers found it confusing.",
        chinese_question: "繁多的规定如此 __________，甚至有经验的律师也感到困惑。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当", chinese_romanization: "zhíjié le dàng" },
            { option: "C", answer: "labyrinthine", chinese_answer: "迷宫般", chinese_romanization: "mígōng bān" },
            { option: "D", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'labyrinthine' means intricate and confusing." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(C) '迷宫般' 一词意味着复杂和令人困惑。" +
            "<br><br>" +
            "'简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "'直截了当' 意味着简单易懂或容易理解。" +
            "<br><br>" +
            "'容易' 意味着没有很大努力就能实现；提出很少的困难。"
    },
    {
        id: 2,
        question: "The charity's __________ volunteers worked tirelessly to help those in need.",
        chinese_question: "慈善机构的 __________ 志愿者不知疲倦地工作，帮助有需要的人。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "apathetic", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "C", answer: "unenthusiastic", chinese_answer: "不热心", chinese_romanization: "bù rèxīn" },
            { option: "D", answer: "zealous", chinese_answer: "热心", chinese_romanization: "rèxīn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'zealous' means having or showing zeal; passionate." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'unenthusiastic' means not having or showing enthusiasm.",
        chinese_explanation: "(D) '热心' 意味着具有或表现出热情；充满激情。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '无动于衷' 意味着不表现或感觉不到兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '不热心' 意味着没有或没有显示出热情。"
    },
    {
        id: 3,
        question: "Many ancient manuscripts are still __________, providing valuable insights into history.",
        chinese_question: "许多古代手稿仍然 __________，为历史提供了宝贵的见解。",
        answers: [
            { option: "A", answer: "lost", chinese_answer: "丢失", chinese_romanization: "diūshī" },
            { option: "B", answer: "extinct", chinese_answer: "灭绝", chinese_romanization: "mièjué" },
            { option: "C", answer: "extant", chinese_answer: "存在", chinese_romanization: "cúnzài" },
            { option: "D", answer: "missing", chinese_answer: "失踪", chinese_romanization: "shīzōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'extant' means still in existence; surviving." +
            "<br><br>" +
            "(A) 'lost' means unable to be found." +
            "<br><br>" +
            "(B) 'extinct' means having no living members." +
            "<br><br>" +
            "(D) 'missing' means not present or included when expected or supposed to be.",
        chinese_explanation: "(C) '存在' 一词意味着仍然存在的；幸存的。" +
            "<br><br>" +
            "'丢失' 意味着无法找到的。" +
            "<br><br>" +
            "'灭绝' 意味着没有活的成员的。" +
            "<br><br>" +
            "'失踪' 意味着在预期或假设存在时不存在或未包括的。"
    },
    {
        id: 4,
        question: "The politician's promises were so __________ that voters were unsure of his actual plans.",
        chinese_question: "这位政治家的承诺如此 __________，选民们不确定他的实际计划。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚", chinese_romanization: "qīngchǔ" },
            { option: "B", answer: "precise", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "C", answer: "nebulous", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "D", answer: "definite", chinese_answer: "明确", chinese_romanization: "míngquè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nebulous' means in the form of a cloud or haze; hazy; unclear, vague, or ill-defined." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(D) 'definite' means clearly stated or decided; not vague or doubtful.",
        chinese_explanation: "(C) '模糊' 一词意味着以云或雾的形式；模糊的；不清晰、模糊或定义不明确的。" +
            "<br><br>" +
            "'清楚' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "'精确' 意味着表达或细节的准确性。" +
            "<br><br>" +
            "'明确' 意味着明确陈述或决定的；不模糊或怀疑的。"
    },
    {
        id: 5,
        question: "The plot of the novel was so __________ that many readers found it hard to follow.",
        chinese_question: "小说的情节如此 __________，以至于许多读者都难以跟上。",
        answers: [
            { option: "A", answer: "convoluted", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当", chinese_romanization: "zhíjié le dàng" },
            { option: "C", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(A) '复杂' 一词意味着极其复杂且难以理解。" +
            "<br><br>" +
            "(B) '直截了当' 意味着简单易懂或容易理解。" +
            "<br><br>" +
            "(C) '简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(D) '清晰' 意味着容易感知、理解或解释。"
    },
    {
        id: 6,
        question: "The repetitive tasks made the assembly line work feel incredibly __________ after just a few hours.",
        chinese_question: "重复的任务使装配线工作在几个小时后就变得极其 __________。",
        answers: [
            { option: "A", answer: "engaging", chinese_answer: "吸引人", chinese_romanization: "xīyǐnrén" },
            { option: "B", answer: "stimulating", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "C", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "dynamic", chinese_answer: "动态", chinese_romanization: "dòngtài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'monotonous' means lacking in variety and interest." +
            "<br><br>" +
            "(A) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(B) 'stimulating' means encouraging interest or enthusiasm." +
            "<br><br>" +
            "(D) 'dynamic' means characterized by constant change, activity, or progress.",
        chinese_explanation: "(C) '单调' 一词意味着缺乏多样性和趣味。" +
            "<br><br>" +
            "(A) '吸引人' 意味着迷人和有吸引力。" +
            "<br><br>" +
            "(B) '刺激' 意味着鼓励兴趣或热情。" +
            "<br><br>" +
            "(D) '动态' 意味着不断变化、活动或进步的特点。"
    },
    {
        id: 7,
        question: "The __________ task of climbing the mountain required great skill, strength, and endurance.",
        chinese_question: "攀登这座山的 __________ 任务需要极高的技巧、力量和耐力。",
        answers: [
            { option: "A", answer: "formidable", chinese_answer: "强大", chinese_romanization: "qiángdà" },
            { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "whimsical", chinese_answer: "异想天开", chinese_romanization: "yìxiǎng tiānkāi" },
            { option: "D", answer: "clandestine", chinese_answer: "秘密", chinese_romanization: "mìmì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'whimsical' means playfully quaint or fanciful." +
            "<br><br>" +
            "(D) 'clandestine' means kept secret or done secretively.",
        chinese_explanation: "(A) '强大'一词意味着通过令人印象深刻的庞大、强大、强烈或有能力而激起恐惧或尊敬。" +
            "<br><br>" +
            "(B) '平凡' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '异想天开' 意味着充满奇特和幻想。" +
            "<br><br>" +
            "(D) '秘密' 意味着秘密进行或秘密地做。"
    },
    {
        id: 8,
        question: "The garden was a __________ oasis of calm amidst the bustling city.",
        chinese_question: "花园是繁忙城市中一个 __________ 的宁静绿洲。",
        answers: [
            { option: "A", answer: "noisy", chinese_answer: "嘈杂", chinese_romanization: "cáozá" },
            { option: "B", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "dreary", chinese_answer: "沉闷", chinese_romanization: "chénmèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serene' means calm, peaceful, and untroubled." +
            "<br><br>" +
            "(A) 'noisy' means making a lot of sound." +
            "<br><br>" +
            "(C) 'chaotic' means completely disordered and confusing." +
            "<br><br>" +
            "(D) 'dreary' means dull, bleak, and lifeless.",
        chinese_explanation: "(B) '宁静' 意味着平静、和平和无忧无虑。" +
            "<br><br>" +
            "(A) '嘈杂' 意味着发出很多声音。" +
            "<br><br>" +
            "(C) '混乱' 意味着完全无序和混乱的。" +
            "<br><br>" +
            "(D) '沉闷' 意味着乏味、阴暗和死气沉沉的。"
    },
    {
        id: 9,
        question: "The atmosphere in the negotiation room became __________ as the two sides couldn't agree on any terms.",
        chinese_question: "谈判室的气氛变得 __________，因为双方无法达成任何协议。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hostile' means unfriendly and antagonistic." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(C) '敌对' 一词意味着不友好和敌对。" +
            "<br><br>" +
            "(A) '友好' 意味着友善和愉快。" +
            "<br><br>" +
            "(B) '和谐' 意味着形成一个愉快或一致的整体。" +
            "<br><br>" +
            "(D) '合作' 意味着在实现共同目标的过程中相互协助。"
    },
    {
        id: 10,
        question: "The beauty of the cherry blossoms is __________, lasting only a few weeks each spring.",
        chinese_question: "樱花的美丽是 __________ 的，每年春天只持续几周。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "B", answer: "lasting", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "C", answer: "ephemeral", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" },
            { option: "D", answer: "enduring", chinese_answer: "耐久", chinese_romanization: "nàijiǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ephemeral' means lasting for a very short time." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(B) 'lasting' means enduring or able to endure over a long period of time." +
            "<br><br>" +
            "(D) 'enduring' means continuing or long-lasting.",
        chinese_explanation: "(C) '短暂' 一词意味着持续时间非常短。" +
            "<br><br>" +
            "'永久' 意味着持续或打算无限期地持续或保持不变。" +
            "<br><br>" +
            "'持久' 意味着在很长一段时间内持久或能够持久。" +
            "<br><br>" +
            "'耐久' 意味着持续或持久的。"
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
