// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The novel's __________ storyline, filled with unexpected twists and rich characters, kept readers engaged from beginning to end.",
        chinese_question: "这部小说的 __________ 故事情节，充满了意想不到的转折和丰富的人物，从头到尾吸引着读者。",
        answers: [
            { option: "A", answer: "captivating", chinese_answer: "引人入胜", chinese_romanization: "yǐnrénrùshèng" },
            { option: "B", answer: "tedious", chinese_answer: "枯燥", chinese_romanization: "kūzào" },
            { option: "C", answer: "predictable", chinese_answer: "可预见", chinese_romanization: "kěyùjiàn" },
            { option: "D", answer: "confusing", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'captivating' means capable of attracting and holding interest; charming." +
            "<br><br>" +
            "(B) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(C) 'predictable' means behaving or occurring in a way that is expected." +
            "<br><br>" +
            "(D) 'confusing' means bewildering or perplexing.",
        chinese_explanation: "(A) '引人入胜'一词意味着能够吸引和保持兴趣；迷人的。" +
            "<br><br>" +
            "(B) '枯燥' 意味着太长、太慢或乏味；乏味或单调。" +
            "<br><br>" +
            "(C) '可预见' 意味着以预期的方式行为或发生。" +
            "<br><br>" +
            "(D) '混乱' 意味着使人困惑或迷惑。"
    },
    {
        id: 2,
        question: "The artist preferred working with __________ materials that could be easily shaped into various forms.",
        chinese_question: "这位艺术家更喜欢使用 __________ 的材料，这些材料可以很容易地被塑造成各种形状。",
        answers: [
            { option: "A", answer: "rigid", chinese_answer: "刚硬", chinese_romanization: "gāngyìng" },
            { option: "B", answer: "malleable", chinese_answer: "可塑", chinese_romanization: "kě sù" },
            { option: "C", answer: "inflexible", chinese_answer: "不灵活", chinese_romanization: "bù línghuó" },
            { option: "D", answer: "brittle", chinese_answer: "脆弱", chinese_romanization: "cuìruò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'malleable' means easily influenced; pliable or capable of being shaped." +
            "<br><br>" +
            "(A) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(C) 'inflexible' means unwilling to change or compromise." +
            "<br><br>" +
            "(D) 'brittle' means hard but liable to break or shatter easily.",
        chinese_explanation: "(B) '可塑' 一词意味着容易受影响的；柔韧的或能够被塑造的。" +
            "<br><br>" +
            "(A) '刚硬' 意味着无法弯曲或被迫变形的；不灵活的。" +
            "<br><br>" +
            "(C) '不灵活' 意味着不愿改变或妥协的。" +
            "<br><br>" +
            "(D) '脆弱' 意味着坚硬但容易破碎或破裂的。"
    },
    {
        id: 3,
        question: "The writer's __________ prose, characterized by clear and concise language, made complex ideas accessible to a wide audience.",
        chinese_question: "作家的 __________ 散文，以清晰简洁的语言为特点，使复杂的思想对广大读者来说易于理解。",
        answers: [
            { option: "A", answer: "convoluted", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "B", answer: "verbose", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "C", answer: "lucid", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucid' means expressed clearly; easy to understand." +
            "<br><br>" +
            "(A) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(B) 'verbose' means using more words than are needed." +
            "<br><br>" +
            "(D) 'obscure' means not discovered or known about.",
        chinese_explanation: "(C) '清晰'一词意味着表达清楚；容易理解。" +
            "<br><br>" +
            "(A) '复杂' 意味着非常复杂和难以理解。" +
            "<br><br>" +
            "(B) '冗长' 意味着使用的词语比需要的多。" +
            "<br><br>" +
            "(D) '模糊' 意味着未被发现或知道。"
    },
    {
        id: 4,
        question: "The __________ taste of the medicine made it hard for the child to swallow.",
        chinese_question: "药的 __________ 味道让孩子难以下咽。",
        answers: [
            { option: "A", answer: "delicious", chinese_answer: "美味", chinese_romanization: "měiwèi" },
            { option: "B", answer: "yucky", chinese_answer: "难吃", chinese_romanization: "nánchī" },
            { option: "C", answer: "tasty", chinese_answer: "可口", chinese_romanization: "kěkǒu" },
            { option: "D", answer: "appetizing", chinese_answer: "开胃", chinese_romanization: "kāiwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yucky' means disgusting or unpleasant." +
            "<br><br>" +
            "(A) 'delicious' means highly pleasant to the taste." +
            "<br><br>" +
            "(C) 'tasty' means having a pleasant, distinct flavor." +
            "<br><br>" +
            "(D) 'appetizing' means stimulating one's appetite.",
        chinese_explanation: "(B) '难吃' 一词意味着令人恶心或不愉快的。" +
            "<br><br>" +
            "(A) '美味' 意味着味道非常好。" +
            "<br><br>" +
            "(C) '可口' 意味着味道鲜明的。" +
            "<br><br>" +
            "(D) '开胃' 意味着刺激人的食欲的。"
    },
    {
        id: 5,
        question: "The memories of their summer vacation left an __________ impression on her heart, one she would cherish forever.",
        chinese_question: "他们暑假旅行的回忆在她心中留下了 __________ 的印记，是她永远珍藏的。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
            { option: "B", answer: "faint", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "C", answer: "erasable", chinese_answer: "可擦除", chinese_romanization: "kě cāchú" },
            { option: "D", answer: "indelible", chinese_answer: "难以抹去", chinese_romanization: "nányǐ mǒ qù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'indelible' means making marks that cannot be removed." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(B) 'faint' means barely perceptible." +
            "<br><br>" +
            "(C) 'erasable' means able to be erased.",
        chinese_explanation: "(D) '难以抹去' 一词意味着无法去除的痕迹。" +
            "<br><br>" +
            "(A) '暂时' 意味着仅持续有限的一段时间；不是永久的。" +
            "<br><br>" +
            "(B) '模糊' 意味着几乎无法察觉的。" +
            "<br><br>" +
            "(C) '可擦除' 意味着能够被擦除的。"
    },
    {
        id: 6,
        question: "The company’s __________ response to the crisis demonstrated their preparedness and efficiency in handling emergencies.",
        chinese_question: "公司对危机的 __________ 响应展示了他们在处理紧急情况时的准备和效率。",
        answers: [
            { option: "A", answer: "swift", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
            { option: "B", answer: "sluggish", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "haphazard", chinese_answer: "随意", chinese_romanization: "suíyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'swift' means happening quickly or promptly." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious order or plan.",
        chinese_explanation: "(A) '迅速'一词意味着发生得很快或迅速。" +
            "<br><br>" +
            "(B) '缓慢' 意味着移动缓慢或不活跃。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(D) '随意' 意味着缺乏任何明显的秩序或计划。"
    },
    {
        id: 7,
        question: "The student's knowledge of algebra was quite __________, so he struggled with the advanced problems.",
        chinese_question: "这名学生对代数的知识相当 __________，所以在解决高级问题时感到困难。",
        answers: [
            { option: "A", answer: "advanced", chinese_answer: "高级", chinese_romanization: "gāojí" },
            { option: "B", answer: "rudimentary", chinese_answer: "初步", chinese_romanization: "chūbù" },
            { option: "C", answer: "comprehensive", chinese_answer: "全面", chinese_romanization: "quánmiàn" },
            { option: "D", answer: "sophisticated", chinese_answer: "复杂", chinese_romanization: "fùzá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rudimentary' means basic or elementary." +
            "<br><br>" +
            "(A) 'advanced' means far on in progress or development." +
            "<br><br>" +
            "(C) 'comprehensive' means complete and including all or nearly all elements." +
            "<br><br>" +
            "(D) 'sophisticated' means highly developed or complex.",
        chinese_explanation: "(B) '初步' 一词意味着基础或初级。" +
            "<br><br>" +
            "(A) '高级' 意味着进展或发展很远。" +
            "<br><br>" +
            "(C) '全面' 意味着完整并包括所有或几乎所有元素。" +
            "<br><br>" +
            "(D) '复杂' 意味着高度发达或复杂。"
    },
    {
        id: 8,
        question: "The __________ dinner party was filled with laughter and lively conversation.",
        chinese_question: "那场 __________ 的晚宴充满了笑声和热闹的谈话。",
        answers: [
            { option: "A", answer: "gloomy", chinese_answer: "阴沉", chinese_romanization: "yīnchén" },
            { option: "B", answer: "convivial", chinese_answer: "欢乐", chinese_romanization: "huānlè" },
            { option: "C", answer: "somber", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "D", answer: "sullen", chinese_answer: "闷闷不乐", chinese_romanization: "mènmèn bù lè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convivial' means friendly, lively, and enjoyable." +
            "<br><br>" +
            "(A) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(C) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(D) 'sullen' means bad-tempered and sulky; gloomy.",
        chinese_explanation: "(B) '欢乐' 一词意味着友好、活泼和令人愉快的。" +
            "<br><br>" +
            "(A) '阴沉' 意味着黑暗或照明不足，特别是显得令人沮丧或可怕的。" +
            "<br><br>" +
            "(C) '忧郁' 意味着颜色或色调暗淡的；阴郁的。" +
            "<br><br>" +
            "(D) '闷闷不乐' 意味着脾气坏且闷闷不乐的；阴郁的。"
    },
    {
        id: 9,
        question: "The student's __________ attitude and willingness to help others made her popular among her classmates and teachers.",
        chinese_question: "这位学生的 __________ 态度和乐于助人的精神使她在同学和老师中很受欢迎。",
        answers: [
            { option: "A", answer: "aloof", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "haughty", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
            { option: "C", answer: "sullen", chinese_answer: "阴郁", chinese_romanization: "yīnyù" },
            { option: "D", answer: "affable", chinese_answer: "友善", chinese_romanization: "yǒushàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'affable' means friendly and easy to talk to." +
            "<br><br>" +
            "(A) 'aloof' means distant or detached." +
            "<br><br>" +
            "(B) 'haughty' means arrogant or proud." +
            "<br><br>" +
            "(C) 'sullen' means gloomy or morose.",
        chinese_explanation: "(D) '友善' 一词意味着友好和容易交谈。" +
            "<br><br>" +
            "(A) '冷漠' 意味着疏远或冷淡。" +
            "<br><br>" +
            "(B) '傲慢' 意味着傲慢或骄傲。" +
            "<br><br>" +
            "(C) '阴郁' 意味着忧郁或闷闷不乐。"
    },
    {
        id: 10,
        question: "The __________ weather, with its relentless rain and strong winds, made it difficult for the hikers to continue their journey.",
        chinese_question: "__________ 的天气，伴随着不停的雨和强风，使徒步旅行者难以继续他们的旅程。",
        answers: [
            { option: "A", answer: "inclement", chinese_answer: "恶劣", chinese_romanization: "èliè" },
            { option: "B", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "C", answer: "temperate", chinese_answer: "温暖", chinese_romanization: "wēnnuǎn" },
            { option: "D", answer: "pleasant", chinese_answer: "宜人", chinese_romanization: "yírén" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inclement' means unpleasantly cold or wet." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(C) 'temperate' means showing moderation or self-restraint." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(A) '恶劣'一词意味着不愉快的寒冷或潮湿。" +
            "<br><br>" +
            "(B) '温和' 意味着不严重、严厉或苛刻。" +
            "<br><br>" +
            "(C) '温暖' 意味着表现出适度或自我克制。" +
            "<br><br>" +
            "(D) '宜人' 意味着给予一种快乐的满足感或享受。"
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
