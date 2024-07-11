// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ comments during the meeting offended several of her colleagues.",
        chinese_question: "她在会议上的 __________ 评论冒犯了几位同事。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" },
            { option: "C", answer: "sweet", chinese_answer: "甜美", chinese_romanization: "tiánměi" },
            { option: "D", answer: "acerbic", chinese_answer: "尖刻", chinese_romanization: "jiānkè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'acerbic' means sharp and forthright." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(C) 'sweet' means having the pleasant taste characteristic of sugar or honey; not salty, sour, or bitter.",
        chinese_explanation: "(D) '尖刻' 一词意味着尖锐和直率。" +
            "<br><br>" +
            "(A) '友好' 意味着具有或表现出友好、慷慨和体贴的性质。" +
            "<br><br>" +
            "(B) '温柔' 意味着具有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(C) '甜美' 意味着具有糖或蜂蜜的愉快味道；不咸、不酸或不苦。"
    },
    {
        id: 2,
        question: "His __________ disregard for the rules led to his immediate expulsion from the game.",
        chinese_question: "他对规则的 __________ 无视导致他立即被逐出比赛。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "B", answer: "flagrant", chinese_answer: "公然", chinese_romanization: "gōngrán" },
            { option: "C", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flagrant' means conspicuously or obviously offensive." +
            "<br><br>" +
            "(A) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(C) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(B) '公然' 一词意味着显著地或明显地冒犯的。" +
            "<br><br>" +
            "(A) '微妙' 意味着如此精细或精确，以至于难以分析或描述。" +
            "<br><br>" +
            "(C) '隐藏' 意味着隐藏不见的；隐蔽的。" +
            "<br><br>" +
            "(D) '轻微' 意味着较不重要、严重或显著的。"
    },
    {
        id: 3,
        question: "The bright pink house looked __________ in the otherwise conservative neighborhood.",
        chinese_question: "在一个保守的街区里，这栋亮粉色的房子看起来很 __________。",
        answers: [
            { option: "A", answer: "appropriate", chinese_answer: "适当", chinese_romanization: "shìdàng" },
            { option: "B", answer: "fitting", chinese_answer: "合适", chinese_romanization: "héshì" },
            { option: "C", answer: "incongruous", chinese_answer: "不协调", chinese_romanization: "bù xiétiáo" },
            { option: "D", answer: "suitable", chinese_answer: "适宜", chinese_romanization: "shìyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incongruous' means not in harmony or keeping with the surroundings or other aspects of something." +
            "<br><br>" +
            "(A) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(B) 'fitting' means suitable or appropriate under the circumstances." +
            "<br><br>" +
            "(D) 'suitable' means right or appropriate for a particular person, purpose, or situation.",
        chinese_explanation: "(C) '不协调' 一词意味着与周围环境或其他方面不和谐或不一致的。" +
            "<br><br>" +
            "(A) '适当' 意味着在特定情况下适合或恰当的。" +
            "<br><br>" +
            "(B) '合适' 意味着在特定情况下适合或适当的。" +
            "<br><br>" +
            "(D) '适宜' 意味着对特定人、目的或情况合适或适当的。"
    },
    {
        id: 4,
        question: "He appeared __________ about the exam results, as if they didn't matter to him.",
        chinese_question: "他对考试结果表现得 __________，好像这些对他来说无关紧要。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "B", answer: "worried", chinese_answer: "担心", chinese_romanization: "dānxīn" },
            { option: "C", answer: "nonchalant", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "concerned", chinese_answer: "关心", chinese_romanization: "guānxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nonchalant' means feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." +
            "<br><br>" +
            "(A) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(B) 'worried' means anxious or troubled about actual or potential problems." +
            "<br><br>" +
            "(D) 'concerned' means worried, troubled, or anxious.",
        chinese_explanation: "(C) '漠不关心' 一词意味着感觉或表现出随意的冷静和放松；不表现出焦虑、兴趣或热情的。" +
            "<br><br>" +
            "'焦虑' 意味着经历担忧、不安或紧张。" +
            "<br><br>" +
            "'担心' 意味着对实际或潜在的问题感到焦虑或困扰。" +
            "<br><br>" +
            "'关心' 意味着担忧、烦恼或焦虑的。"
    },
    {
        id: 5,
        question: "The __________ scent of the flowers filled the entire room, creating a pleasant atmosphere.",
        chinese_question: "花朵 __________ 的香味充满了整个房间，营造出一种愉快的氛围。",
        answers: [
            { option: "A", answer: "fragrant", chinese_answer: "芳香", chinese_romanization: "fāngxiāng" },
            { option: "B", answer: "foul", chinese_answer: "恶臭", chinese_romanization: "èchòu" },
            { option: "C", answer: "faint", chinese_answer: "微弱", chinese_romanization: "wéiruò" },
            { option: "D", answer: "stale", chinese_answer: "陈旧", chinese_romanization: "chénjiù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(B) 'foul' means having an unpleasant or offensive smell." +
            "<br><br>" +
            "(C) 'faint' means barely perceptible in sight, sound, or smell." +
            "<br><br>" +
            "(D) 'stale' means no longer fresh and pleasant; musty.",
        chinese_explanation: "(A) '芳香'一词意味着具有愉快或甜美的气味。" +
            "<br><br>" +
            "(B) '恶臭' 意味着具有令人不愉快或冒犯的气味。" +
            "<br><br>" +
            "(C) '微弱' 意味着在视觉、声音或气味上几乎察觉不到。" +
            "<br><br>" +
            "(D) '陈旧' 意味着不再新鲜和令人愉快；发霉。"
    },
    {
        id: 6,
        question: "The company’s __________ marketing campaign attracted a large number of new customers in a short time.",
        chinese_question: "公司的 __________ 营销活动在短时间内吸引了大量新客户。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "B", answer: "ineffective", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "C", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "D", answer: "effective", chinese_answer: "有效", chinese_romanization: "yǒuxiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'effective' means successful in producing a desired result." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(B) 'ineffective' means not producing the desired result." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals.",
        chinese_explanation: "(D) '有效'一词意味着成功地产生预期结果。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(B) '无效' 意味着未产生预期结果。" +
            "<br><br>" +
            "(C) '零星' 意味着不定期发生。"
    },
    {
        id: 7,
        question: "The manager's __________ inspection of the factory resulted in several critical issues being overlooked.",
        chinese_question: "经理 __________ 的工厂检查导致几个关键问题被忽视。",
        answers: [
            { option: "A", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" },
            { option: "B", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "C", answer: "rigorous", chinese_answer: "严格", chinese_romanization: "yángé" },
            { option: "D", answer: "exhaustive", chinese_answer: "全面", chinese_romanization: "quánmiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perfunctory' means carried out with minimum effort or reflection." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(C) 'rigorous' means extremely thorough and accurate." +
            "<br><br>" +
            "(D) 'exhaustive' means examining, including, or considering all elements.",
        chinese_explanation: "(A) '敷衍' 一词意味着以最少的努力或思考进行。" +
            "<br><br>" +
            "(B) '彻底' 意味着在每一个细节上都是完整的。" +
            "<br><br>" +
            "(C) '严格' 意味着极其彻底和准确的。" +
            "<br><br>" +
            "(D) '全面' 意味着审查、包括或考虑所有元素。"
    },
    {
        id: 8,
        question: "The restaurant received poor reviews because the food quality was __________ compared to other local eateries.",
        chinese_question: "这家餐馆的评论很差，因为与其他本地餐馆相比，食物质量 __________。",
        answers: [
            { option: "A", answer: "excellent", chinese_answer: "优秀", chinese_romanization: "yōuxiù" },
            { option: "B", answer: "exceptional", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "C", answer: "superb", chinese_answer: "极好", chinese_romanization: "jí hǎo" },
            { option: "D", answer: "subpar", chinese_answer: "欠佳", chinese_romanization: "qiànjiā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'subpar' means below an average level." +
            "<br><br>" +
            "(A) 'excellent' means extremely good; outstanding." +
            "<br><br>" +
            "(B) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(C) 'superb' means excellent or impressively splendid.",
        chinese_explanation: "(D) '欠佳' 一词意味着低于平均水平。" +
            "<br><br>" +
            "(A) '优秀' 意味着非常好；杰出的。" +
            "<br><br>" +
            "(B) '杰出' 意味着异常好；杰出的。" +
            "<br><br>" +
            "(C) '极好' 意味着优秀或令人印象深刻的辉煌。"
    },
    {
        id: 9,
        question: "His __________ intentions were evident as he sabotaged his colleague's project out of spite.",
        chinese_question: "他的 __________ 意图显而易见，因为他出于恶意破坏了同事的项目。",
        answers: [
            { option: "A", answer: "benevolent", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "B", answer: "kind", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "C", answer: "malevolent", chinese_answer: "恶毒", chinese_romanization: "èdú" },
            { option: "D", answer: "altruistic", chinese_answer: "利他", chinese_romanization: "lìtā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malevolent' means having or showing a wish to do evil to others." +
            "<br><br>" +
            "(A) 'benevolent' means well-meaning and kindly." +
            "<br><br>" +
            "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'altruistic' means showing a disinterested and selfless concern for the well-being of others.",
        chinese_explanation: "(C) '恶毒' 一词意味着有或表现出对他人做恶事的愿望。" +
            "<br><br>" +
            "(A) '仁慈' 意味着善意和友好。" +
            "<br><br>" +
            "(B) '善良' 意味着有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(D) '利他' 意味着表现出对他人福祉的不感兴趣和无私关心。"
    },
    {
        id: 10,
        question: "It was __________ that they found the lost ring while cleaning the house.",
        chinese_question: "他们在打扫房子时找到了丢失的戒指，这真是 __________。",
        answers: [
            { option: "A", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" },
            { option: "B", answer: "expected", chinese_answer: "预期的", chinese_romanization: "yùqí de" },
            { option: "C", answer: "serendipitous", chinese_answer: "意外的", chinese_romanization: "yìwài de" },
            { option: "D", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serendipitous' means occurring or discovered by chance in a happy or beneficial way." +
            "<br><br>" +
            "(A) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(B) 'expected' means regarded as likely to happen." +
            "<br><br>" +
            "(D) 'intentional' means done on purpose; deliberate.",
        chinese_explanation: "(C) '意外的' 一词意味着在愉快或有利的情况下偶然发生或发现的。" +
            "<br><br>" +
            "(A) '计划好的' 意味着事先决定并安排好的。" +
            "<br><br>" +
            "(B) '预期的' 意味着被认为可能发生的。" +
            "<br><br>" +
            "(D) '故意的' 意味着故意做的；有意的。"
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
