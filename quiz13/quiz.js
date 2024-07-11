// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ comments about her colleague were meant to hurt and humiliate, revealing her underlying resentment.",
        chinese_question: "她对同事的 __________ 评论意在伤害和羞辱，暴露了她潜在的不满。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友善", chinese_romanization: "yǒushàn" },
            { option: "B", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "spiteful", chinese_answer: "恶意", chinese_romanization: "èyì" },
            { option: "D", answer: "forgiving", chinese_answer: "宽恕", chinese_romanization: "kuānshù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spiteful' means showing or caused by malice." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(B) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
            "<br><br>" +
            "(D) 'forgiving' means ready and willing to forgive.",
        chinese_explanation: "(C) '恶意' 一词意味着显示或由恶意引起的。" +
            "<br><br>" +
            "(A) '友善' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(B) '慷慨' 意味着表现出愿意给予更多东西，尤其是钱，超出严格必要或预期的。" +
            "<br><br>" +
            "(D) '宽恕' 意味着准备好并愿意宽恕的。"
    },
    {
        id: 2,
        question: "The criminal's __________ activities included theft, fraud, and extortion.",
        chinese_question: "这个罪犯的 __________ 行为包括盗窃、欺诈和敲诈。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "高尚", chinese_romanization: "gāoshàng" },
            { option: "B", answer: "nefarious", chinese_answer: "邪恶", chinese_romanization: "xié'è" },
            { option: "C", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "D", answer: "righteous", chinese_answer: "正义", chinese_romanization: "zhèngyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nefarious' means wicked or criminal." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'righteous' means morally right or justifiable.",
        chinese_explanation: "(B) '邪恶' 一词意味着邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '高尚' 意味着有或表现出高道德标准的。" +
            "<br><br>" +
            "(C) '诚实' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(D) '正义' 意味着道德上正确或正当的。"
    },
    {
        id: 3,
        question: "The __________ environment of the desert makes it difficult for most plants to survive.",
        chinese_question: "沙漠的 __________ 环境使大多数植物难以生存。",
        answers: [
            { option: "A", answer: "humid", chinese_answer: "湿润", chinese_romanization: "shīrùn" },
            { option: "B", answer: "xeric", chinese_answer: "干旱", chinese_romanization: "gānhàn" },
            { option: "C", answer: "moist", chinese_answer: "潮湿", chinese_romanization: "cháoshī" },
            { option: "D", answer: "wet", chinese_answer: "湿", chinese_romanization: "shī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'xeric' means containing little moisture; very dry." +
            "<br><br>" +
            "(A) 'humid' means marked by a relatively high level of water vapor in the atmosphere." +
            "<br><br>" +
            "(C) 'moist' means slightly wet; damp or humid." +
            "<br><br>" +
            "(D) 'wet' means covered or saturated with water or another liquid.",
        chinese_explanation: "(B) '干旱' 一词意味着含有很少的水分；非常干燥的。" +
            "<br><br>" +
            "(A) '湿润' 意味着大气中有相对较高水平的水蒸气。" +
            "<br><br>" +
            "(C) '潮湿' 意味着稍微湿的；潮湿的或湿润的。" +
            "<br><br>" +
            "(D) '湿' 意味着被水或另一种液体覆盖或浸透的。"
    },
    {
        id: 4,
        question: "The document turned out to be __________, causing a major scandal when the truth was revealed.",
        chinese_question: "这份文件原来是 __________ 的，当真相被揭露时引发了一场重大丑闻。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "B", answer: "authentic", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "C", answer: "valid", chinese_answer: "有效", chinese_romanization: "yǒuxiào" },
            { option: "D", answer: "spurious", chinese_answer: "伪造", chinese_romanization: "wěizào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'spurious' means not being what it purports to be; false or fake." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(B) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(C) 'valid' means having a sound basis in logic or fact; reasonable or cogent.",
        chinese_explanation: "(D) '伪造' 一词意味着不是其声称的那样；虚假的或伪造的。" +
            "<br><br>" +
            "(A) '真实' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(B) '真实' 意味着来源无可争议的而不是副本；真实的。" +
            "<br><br>" +
            "(C) '有效' 意味着在逻辑或事实中有坚实的基础；合理或有说服力的。"
    },
    {
        id: 5,
        question: "Her efforts to improve the community through volunteer work were truly __________.",
        chinese_question: "她通过志愿工作改善社区的努力确实是 __________ 的。",
        answers: [
            { option: "A", answer: "deplorable", chinese_answer: "应受谴责", chinese_romanization: "yīng shòu qiǎnzé" },
            { option: "B", answer: "laudable", chinese_answer: "值得称赞", chinese_romanization: "zhídé chēngzàn" },
            { option: "C", answer: "shameful", chinese_answer: "可耻", chinese_romanization: "kěchǐ" },
            { option: "D", answer: "discreditable", chinese_answer: "有损声誉", chinese_romanization: "yǒu sǔn shēngyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'laudable' means deserving praise and commendation." +
            "<br><br>" +
            "(A) 'deplorable' means deserving strong condemnation; shockingly bad in quality." +
            "<br><br>" +
            "(C) 'shameful' means worthy of causing shame or disgrace." +
            "<br><br>" +
            "(D) 'discreditable' means tending to bring harm to a reputation.",
        chinese_explanation: "(B) '值得称赞' 一词意味着值得赞扬和表扬的。" +
            "<br><br>" +
            "(A) '应受谴责' 意味着值得强烈谴责的；质量极差的。" +
            "<br><br>" +
            "(C) '可耻' 意味着值得引起羞耻或耻辱的。" +
            "<br><br>" +
            "(D) '有损声誉' 意味着倾向于损害声誉的。"
    },
    {
        id: 6,
        question: "The spread of fake news on social media can have __________ effects on society, leading to misinformation and division.",
        chinese_question: "社交媒体上虚假新闻的传播可能对社会产生 __________ 影响，导致误导和分裂。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "C", answer: "pernicious", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "D", answer: "benign", chinese_answer: "良性", chinese_romanization: "liángxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pernicious' means having a harmful effect, especially in a gradual or subtle way." +
            "<br><br>" +
            "(A) 'beneficial' means favorable or advantageous; resulting in good." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm; innocuous." +
            "<br><br>" +
            "(D) 'benign' means gentle and kind; not harmful in effect.",
        chinese_explanation: "(C) '有害' 一词意味着具有有害影响，尤其是以逐渐或微妙的方式。" +
            "<br><br>" +
            "(A) '有益' 意味着有利或有利；导致良好结果。" +
            "<br><br>" +
            "(B) '无害' 意味着不会或不太可能造成伤害；无害的。" +
            "<br><br>" +
            "(D) '良性' 意味着温和和善良；在效果上没有害处。"
    },
    {
        id: 7,
        question: "The artist's __________ sculpture moved gracefully with the wind, captivating all who saw it.",
        chinese_question: "艺术家的 __________ 雕塑随风优雅地移动，吸引了所有看到它的人。",
        answers: [
            { option: "A", answer: "static", chinese_answer: "静态", chinese_romanization: "jìngtài" },
            { option: "B", answer: "kinetic", chinese_answer: "动态", chinese_romanization: "dòngtài" },
            { option: "C", answer: "immobile", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" },
            { option: "D", answer: "stationary", chinese_answer: "固定", chinese_romanization: "gùdìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kinetic' means relating to or resulting from motion." +
            "<br><br>" +
            "(A) 'static' means lacking in movement, action, or change." +
            "<br><br>" +
            "(C) 'immobile' means not moving; motionless." +
            "<br><br>" +
            "(D) 'stationary' means not moving or not intended to be moved.",
        chinese_explanation: "(B) '动态' 一词意味着与运动有关或由运动引起的。" +
            "<br><br>" +
            "'静态' 意味着缺乏运动、行动或变化的。" +
            "<br><br>" +
            "'静止' 意味着不动的；静止的。" +
            "<br><br>" +
            "'固定' 意味着不移动或不打算移动的。"
    },
    {
        id: 8,
        question: "The __________ opponent was known for his strength and skill in the sport.",
        chinese_question: "这位 __________ 的对手以其在这项运动中的力量和技能而闻名。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "B", answer: "formidable", chinese_answer: "强大", chinese_romanization: "qiángdà" },
            { option: "C", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "D", answer: "ineffectual", chinese_answer: "无效", chinese_romanization: "wúxiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'ineffectual' means not producing any or the desired effect.",
        chinese_explanation: "(B) '强大' 一词意味着通过令人印象深刻的巨大、强大、激烈或有能力来激发恐惧或尊重。" +
            "<br><br>" +
            "'弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "'胆小' 意味着缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "'无效' 意味着未产生任何或预期效果的。"
    },
    {
        id: 9,
        question: "She wore a __________ dress that fluttered beautifully in the breeze.",
        chinese_question: "她穿了一件 __________ 的连衣裙，在微风中美丽地飘动。",
        answers: [
            { option: "A", answer: "thick", chinese_answer: "厚", chinese_romanization: "hòu" },
            { option: "B", answer: "diaphanous", chinese_answer: "轻薄", chinese_romanization: "qīngbáo" },
            { option: "C", answer: "opaque", chinese_answer: "不透明", chinese_romanization: "bù tòumíng" },
            { option: "D", answer: "heavy", chinese_answer: "重", chinese_romanization: "zhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diaphanous' means light, delicate, and translucent." +
            "<br><br>" +
            "(A) 'thick' means with opposite sides or surfaces that are far or relatively far apart." +
            "<br><br>" +
            "(C) 'opaque' means not able to be seen through; not transparent." +
            "<br><br>" +
            "(D) 'heavy' means of great weight; difficult to lift or move.",
        chinese_explanation: "(B) '轻薄' 一词意味着轻盈、精致和半透明。" +
            "<br><br>" +
            "(A) '厚' 意味着两侧或表面之间的距离远或相对较远。" +
            "<br><br>" +
            "(C) '不透明' 意味着不能被看穿的；不透明的。" +
            "<br><br>" +
            "(D) '重' 意味着重量大；难以举起或移动的。"
    },
    {
        id: 10,
        question: "The whistleblower was __________ by the media, who accused him of betraying his company.",
        chinese_question: "告密者被媒体 __________，媒体指责他背叛了公司。",
        answers: [
            { option: "A", answer: "vilified", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
            { option: "B", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "C", answer: "honored", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "D", answer: "lauded", chinese_answer: "称赞", chinese_romanization: "chēngzàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vilified' means to speak or write about in an abusively disparaging manner." +
            "<br><br>" +
            "(B) 'praised' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'honored' means regard with great respect." +
            "<br><br>" +
            "(D) 'lauded' means praise highly, especially in a public context.",
        chinese_explanation: "(A) '诽谤' 一词意味着以侮辱性的贬损方式谈论或写作。" +
            "<br><br>" +
            "(B) '表扬' 意味着表达温暖的赞同或钦佩。" +
            "<br><br>" +
            "(C) '尊敬' 意味着非常尊重。" +
            "<br><br>" +
            "(D) '称赞' 意味着高度赞扬，尤其是在公共场合。"
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
