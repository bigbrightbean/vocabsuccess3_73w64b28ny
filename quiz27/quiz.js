// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ smile and friendly demeanor made her very popular at social events.",
        chinese_question: "她的 __________ 微笑和友好的举止使她在社交活动中非常受欢迎。",
        answers: [
            { option: "A", answer: "unpleasant", chinese_answer: "令人不快", chinese_romanization: "lìng rén bù kuài" },
            { option: "B", answer: "winsome", chinese_answer: "迷人", chinese_romanization: "mírén" },
            { option: "C", answer: "unfriendly", chinese_answer: "不友好", chinese_romanization: "bù yǒuhǎo" },
            { option: "D", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'winsome' means attractive or appealing in appearance or character." +
            "<br><br>" +
            "(A) 'unpleasant' means causing discomfort, unhappiness, or revulsion; disagreeable." +
            "<br><br>" +
            "(C) 'unfriendly' means not friendly." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(B) '迷人' 一词意味着在外貌或性格上有吸引力的。" +
            "<br><br>" +
            "(A) '令人不快' 意味着引起不适、悲伤或厌恶的；不愉快的。" +
            "<br><br>" +
            "(C) '不友好' 意味着不友好的。" +
            "<br><br>" +
            "(D) '敌对' 意味着不友好的；对立的。"
    },
    {
        id: 2,
        question: "The scientist made a __________ discovery that could change the future of medical science.",
        chinese_question: "这位科学家做出了一个 __________ 的发现，可能会改变医学科学的未来。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "B", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "C", answer: "prodigious", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prodigious' means remarkably or impressively great in extent, size, or degree." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '巨大' 一词意味着在范围、规模或程度上非凡或令人印象深刻的。" +
            "<br><br>" +
            "(A) '次要' 意味着在重要性、严重性或显著性方面较小的。" +
            "<br><br>" +
            "(B) '微不足道' 意味着小得或不重要得不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎' 意味着价值或重要性很小的。"
    },
    {
        id: 3,
        question: "They were drawn together by their __________ spirits and shared love of adventure.",
        chinese_question: "他们因 __________ 的精神和对冒险的共同热爱而走到了一起。",
        answers: [
            { option: "A", answer: "different", chinese_answer: "不同", chinese_romanization: "bùtóng" },
            { option: "B", answer: "diverse", chinese_answer: "多样", chinese_romanization: "duōyàng" },
            { option: "C", answer: "kindred", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "D", answer: "unrelated", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kindred' means similar in kind; related." +
            "<br><br>" +
            "(A) 'different' means not the same as another or each other." +
            "<br><br>" +
            "(B) 'diverse' means showing a great deal of variety; very different." +
            "<br><br>" +
            "(D) 'unrelated' means not related or linked.",
        chinese_explanation: "(C) '相似' 一词意味着类似的；相关的。" +
            "<br><br>" +
            "(A) '不同' 意味着与另一个或彼此不相同。" +
            "<br><br>" +
            "(B) '多样' 意味着显示出大量的变化；非常不同的。" +
            "<br><br>" +
            "(D) '无关' 意味着不相关或没有联系的。"
    },
    {
        id: 4,
        question: "She was __________ in her denial of the accusations, leaving no room for doubt.",
        chinese_question: "她 __________ 地否认了这些指控，没有留下任何疑问的余地。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "emphatic", chinese_answer: "强调", chinese_romanization: "qiángdiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'emphatic' means showing or giving emphasis; expressing something forcibly and clearly." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(D) '强调' 一词意味着显示或给予强调；清楚地和有力地表达。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在行动或说话时犹豫不决、不确定或缓慢。" +
            "<br><br>" +
            "(B) '模糊' 意味着性质或意义不确定、不明确或不清晰的。" +
            "<br><br>" +
            "(C) '不确定' 意味着不能依赖的；不确定或不明确的。"
    },
    {
        id: 5,
        question: "His __________ temperament made it difficult to predict how he would react to the news.",
        chinese_question: "他的 __________ 性格使得很难预测他会如何反应这则消息。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "B", answer: "steady", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "mercurial", chinese_answer: "反复无常", chinese_romanization: "fǎnfù wúcháng" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mercurial' means subject to sudden or unpredictable changes of mood or mind." +
            "<br><br>" +
            "(A) 'consistent' means acting or done in the same way over time." +
            "<br><br>" +
            "(B) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(C) '反复无常' 一词意味着情绪或思想的突然或不可预测的变化。" +
            "<br><br>" +
            "(A) '一致' 意味着随着时间的推移以相同的方式行事或完成。" +
            "<br><br>" +
            "(B) '稳定' 意味着牢固地固定、支撑或平衡；不摇晃或移动。" +
            "<br><br>" +
            "(D) '可预测' 意味着可以预测的。"
    },
    {
        id: 6,
         question: "The price of the luxury car was __________, well beyond what most people could afford.",
        chinese_question: "这辆豪华汽车的价格 __________，远远超出大多数人的承受能力。",
        answers: [
            { option: "A", answer: "reasonable", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "B", answer: "affordable", chinese_answer: "可负担", chinese_romanization: "kě fùdān" },
            { option: "C", answer: "exorbitant", chinese_answer: "过高", chinese_romanization: "guò gāo" },
            { option: "D", answer: "moderate", chinese_answer: "适中", chinese_romanization: "shìzhōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exorbitant' means unreasonably high." +
            "<br><br>" +
            "(A) 'reasonable' means fair and sensible." +
            "<br><br>" +
            "(B) 'affordable' means inexpensive; reasonably priced." +
            "<br><br>" +
            "(D) 'moderate' means average in amount, intensity, quality, or degree.",
        chinese_explanation: "(C) '过高' 一词意味着不合理的高。" +
            "<br><br>" +
            "(A) '合理' 意味着公平和明智。" +
            "<br><br>" +
            "(B) '可负担' 意味着价格合理；价格合理的。" +
            "<br><br>" +
            "(D) '适中' 意味着数量、强度、质量或程度适中。"
    },
    {
        id: 7,
        question: "The driver was completely __________ to the traffic jam ahead and didn't slow down in time.",
        chinese_question: "司机完全 __________ 于前方的交通堵塞，没有及时减速。",
        answers: [
            { option: "A", answer: "attentive", chinese_answer: "注意", chinese_romanization: "zhùyì" },
            { option: "B", answer: "aware", chinese_answer: "知道", chinese_romanization: "zhīdào" },
            { option: "C", answer: "oblivious", chinese_answer: "毫无察觉", chinese_romanization: "háo wú chájué" },
            { option: "D", answer: "cautious", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(A) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(B) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(D) 'cautious' means careful to avoid potential problems or dangers.",
        chinese_explanation: "(C) '毫无察觉' 一词意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(A) '注意' 意味着密切注意某事。" +
            "<br><br>" +
            "(B) '知道' 意味着对情况或事实有知识或感知。" +
            "<br><br>" +
            "(D) '小心' 意味着小心以避免潜在的问题或危险。"
    },
    {
        id: 8,
        question: "The community adhered to __________ practices, keeping traditional ceremonies and rituals alive.",
        chinese_question: "社区遵循 __________ 的做法，保持传统仪式和仪式的活力。",
        answers: [
            { option: "A", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "B", answer: "orthodox", chinese_answer: "正统", chinese_romanization: "zhèngtǒng" },
            { option: "C", answer: "unorthodox", chinese_answer: "非正统", chinese_romanization: "fēi zhèngtǒng" },
            { option: "D", answer: "unconventional", chinese_answer: "非传统", chinese_romanization: "fēi chuántǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'orthodox' means conforming to what is generally or traditionally accepted as right or true." +
            "<br><br>" +
            "(A) 'innovative' means introducing new ideas." +
            "<br><br>" +
            "(C) 'unorthodox' means contrary to what is usual or accepted." +
            "<br><br>" +
            "(D) 'unconventional' means not based on or conforming to what is generally done or believed.",
        chinese_explanation: "(B) '正统' 一词意味着符合通常或传统上被认为正确或真实的事物。" +
            "<br><br>" +
            "(A) '创新' 意味着引入新思想。" +
            "<br><br>" +
            "(C) '非正统' 意味着与通常或被接受的相反。" +
            "<br><br>" +
            "(D) '非传统' 意味着不基于或不符合通常的做法或信仰。"
    },
    {
        id: 9,
        question: "The old library was a __________ place, filled with ancient books and the scent of history.",
        chinese_question: "古老的图书馆是一个 __________ 的地方，里面充满了古书和历史的气息。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" },
            { option: "C", answer: "quaint", chinese_answer: "古雅", chinese_romanization: "gǔyǎ" },
            { option: "D", answer: "sleek", chinese_answer: "光滑", chinese_romanization: "guānghuá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quaint' means attractively unusual or old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(B) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(D) 'sleek' means smooth and glossy.",
        chinese_explanation: "(C) '古雅' 意味着吸引人的不寻常或老式的。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或近期有关。" +
            "<br><br>" +
            "(B) '当代' 意味着同时存在或发生的。" +
            "<br><br>" +
            "(D) '光滑' 意味着光滑和有光泽的。"
    },
    {
        id: 10,
        question: "The team’s __________ coordination during the project ensured its success despite the tight deadline.",
        chinese_question: "团队在项目中的 __________ 协调确保了项目的成功，尽管期限很紧。",
        answers: [
            { option: "A", answer: "seamless", chinese_answer: "无缝", chinese_romanization: "wúfèng" },
            { option: "B", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'seamless' means smooth and without seams or obvious gaps." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals." +
            "<br><br>" +
            "(C) 'chaotic' means in a state of complete confusion." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest.",
        chinese_explanation: "(A) '无缝'一词意味着顺畅且没有接缝或明显的间隙。" +
            "<br><br>" +
            "(B) '零星' 意味着不定期发生。" +
            "<br><br>" +
            "(C) '混乱' 意味着处于完全混乱的状态。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣。"
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
