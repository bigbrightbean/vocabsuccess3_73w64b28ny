// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite his success and wealth, he couldn't shake off the feeling of __________ that plagued him daily.",
        chinese_question: "尽管他成功且富有，他仍无法摆脱每天困扰他的__________ 感。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "euphoria", chinese_answer: "狂喜", chinese_romanization: "kuángxǐ" },
            { option: "C", answer: "happiness", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "D", answer: "ennui", chinese_answer: "倦怠", chinese_romanization: "juàndài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ennui' refers to a feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement." +
            "<br><br>" +
            "(A) 'joy' refers to a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'euphoria' refers to a feeling or state of intense excitement and happiness." +
            "<br><br>" +
            "(C) 'happiness' refers to the state of being happy.",
        chinese_explanation: "(D) '倦怠' 指的是因缺乏职业或兴奋而产生的倦怠和不满的感觉。" +
            "<br><br>" +
            "(A) '喜悦' 指的是极大的快乐和幸福感。" +
            "<br><br>" +
            "(B) '狂喜' 指的是强烈的兴奋和幸福感。" +
            "<br><br>" +
            "(C) '幸福' 指的是幸福的状态。"
    },
    {
        id: 2,
        question: "His __________ made him well-known in the community as someone who always did things his own way, regardless of norms. For example, he often wore mismatched socks and painted his house in bright, unconventional colors.",
        chinese_question: "他的 __________ 使他在社区里闻名，因为他总是以自己的方式做事，而不管常规。例如，他经常穿着不匹配的袜子，把房子涂成鲜艳的非传统颜色。",
        answers: [
            { option: "A", answer: "conformity", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "B", answer: "eccentricity", chinese_answer: "怪癖", chinese_romanization: "guàipǐ" },
            { option: "C", answer: "conventionality", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "D", answer: "normalcy", chinese_answer: "正常", chinese_romanization: "zhèngcháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'eccentricity' means the quality of being unconventional and slightly strange." +
            "<br><br>" +
            "(A) 'conformity' means compliance with standards, rules, or laws." +
            "<br><br>" +
            "(C) 'conventionality' means the quality of being traditional and ordinary." +
            "<br><br>" +
            "(D) 'normalcy' means the condition of being normal; the state of being usual, typical, or expected.",
        chinese_explanation: "(B) '怪癖' 一词意味着不拘一格和略显奇怪的品质。" +
            "<br><br>" +
            "(A) '一致' 意味着遵守标准、规则或法律。" +
            "<br><br>" +
            "(C) '传统' 意味着传统和普通的品质。" +
            "<br><br>" +
            "(D) '正常' 意味着正常状态；通常、典型或预期的状态。"
    },
    {
        id: 3,
        question: "There was a lot of __________ among the committee members, making it difficult to reach a consensus.",
        chinese_question: "委员会成员之间存在很多 __________，使得很难达成共识。",
        answers: [
            { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "D", answer: "dissent", chinese_answer: "异议", chinese_romanization: "yìyì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dissent' means the expression or holding of opinions at variance with those previously, commonly, or officially held." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(A) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(D) 'unity' means the state of being united or joined as a whole.",
        chinese_explanation: "(D) '异议' 意味着表达或持有与以前、通常或官方持有的意见不同的意见。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出的音乐音符的组合，以产生和弦和和弦进行，具有令人愉快的效果。" +
            "<br><br>" +
            "(A) '一致' 意味着在意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(D) '团结' 意味着团结或联合为一个整体的状态。"
    },
    {
        id: 4,
        question: "The __________ of his speech was appreciated by the audience, who were eager to move on to the main event.",
        chinese_question: "他的演讲的 __________ 受到了观众的赞赏，他们渴望进入主要活动。",
        answers: [
            { option: "A", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" },
            { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "C", answer: "brevity", chinese_answer: "简短", chinese_romanization: "jiǎnduǎn" },
            { option: "D", answer: "detail", chinese_answer: "细节", chinese_romanization: "xìjié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(A) 'length' means the measurement or extent of something from end to end." +
            "<br><br>" +
            "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
            "<br><br>" +
            "(D) 'detail' means an individual feature, fact, or item.",
        chinese_explanation: "(C) '简短' 一词意味着在写作或讲话中使用简洁准确的词语。" +
            "<br><br>" +
            "(A) '长度' 意味着从一端到另一端的测量或范围。" +
            "<br><br>" +
            "(B) '冗长' 意味着使用比需要更多的词的质量；冗长。" +
            "<br><br>" +
            "(D) '细节' 意味着一个单独的特征、事实或项目。"
    },
    {
        id: 5,
        question: "Under the __________ of the nonprofit organization, the community project received the funding it needed.",
        chinese_question: "在这个非营利组织的 __________ 下，社区项目获得了所需的资金。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "auspices", chinese_answer: "赞助", chinese_romanization: "zànzhù" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bù zànchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'auspices' means kindly patronage and guidance." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'opposition' means resistance or dissent, expressed in action or argument." +
            "<br><br>" +
            "(D) 'disapproval' means possession or expression of an unfavorable opinion.",
        chinese_explanation: "(B) '赞助' 一词意味着友好的赞助和指导。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(C) '反对' 意味着以行动或争论表示反对或异议。" +
            "<br><br>" +
            "(D) '不赞成' 意味着持有或表达不赞成的意见。"
    },
    {
        id: 6,
        question: "She experienced a sudden bout of __________ while standing on the edge of the tall building.",
        chinese_question: "站在高楼边缘时，她突然感到一阵 __________。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "balance", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
            { option: "C", answer: "vertigo", chinese_answer: "眩晕", chinese_romanization: "xuànyūn" },
            { option: "D", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vertigo' means a sensation of whirling and loss of balance, associated particularly with looking down from a great height." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'balance' means an even distribution of weight enabling someone or something to remain upright and steady." +
            "<br><br>" +
            "(D) 'stability' means the state of being stable.",
        chinese_explanation: "(C) '眩晕' 一词意味着旋转和失去平衡的感觉，特别是与从高处向下看有关。" +
            "<br><br>" +
            "(A) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(B) '平衡' 意味着重量分布均匀，使某人或某物保持直立和稳定。" +
            "<br><br>" +
            "(D) '稳定' 意味着稳定的状态。"
    },
    {
        id: 7,
        question: "The contract was filled with __________, making it difficult to determine the exact terms and conditions.",
        chinese_question: "合同充满了 __________，难以确定确切的条款和条件。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "C", answer: "ambiguity", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "specificity", chinese_answer: "具体性", chinese_romanization: "jùtǐ xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambiguity' means the quality of being open to more than one interpretation; inexactness." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(B) 'precision' means the quality, condition, or fact of being exact and accurate." +
            "<br><br>" +
            "(D) 'specificity' means the quality of belonging or relating uniquely to a particular subject.",
        chinese_explanation: "(C) '模糊' 一词意味着开放多于一种解释的质量；不精确。" +
            "<br><br>" +
            "(A) '清晰' 意味着清晰的质量，特别是。" +
            "<br><br>" +
            "(B) '精确' 意味着精确和准确的质量、条件或事实。" +
            "<br><br>" +
            "(D) '具体性' 意味着独特地属于或与特定主题有关的质量。"
    },
    {
        id: 8,
        question: "Her speech was filled with __________, making her points easy to follow and understand.",
        chinese_question: "她的演讲充满了 __________，使她的观点易于理解和遵循。",
        answers: [
            { option: "A", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "lucidity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "ambiguity", chinese_answer: "含糊", chinese_romanization: "hánhú" },
            { option: "D", answer: "vagueness", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lucidity' means clarity of expression; intelligibility." +
            "<br><br>" +
            "(A) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'ambiguity' means the quality of being open to more than one interpretation; inexactness." +
            "<br><br>" +
            "(D) 'vagueness' means lack of certainty or distinctness.",
        chinese_explanation: "(B) '清晰' 一词意味着表达的清晰；可理解性。" +
            "<br><br>" +
            "(A) '混乱' 意味着缺乏理解；不确定。" +
            "<br><br>" +
            "(C) '含糊' 意味着开放多个解释的质量；不精确。" +
            "<br><br>" +
            "(D) '模糊' 意味着缺乏确定性或明确性。"
    },
    {
        id: 9,
        question: "The __________ class, characterized by their material wealth and conventional attitudes, often dominated the social scene.",
        chinese_question: "__________ 阶级，以其物质财富和传统态度为特征，通常主导着社交场景。",
        answers: [
            { option: "A", answer: "aristocracy", chinese_answer: "贵族", chinese_romanization: "guìzú" },
            { option: "B", answer: "proletariat", chinese_answer: "无产阶级", chinese_romanization: "wúchǎn jiējí" },
            { option: "C", answer: "bourgeoisie", chinese_answer: "资产阶级", chinese_romanization: "zīchǎn jiējí" },
            { option: "D", answer: "peasantry", chinese_answer: "农民", chinese_romanization: "nóngmín" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bourgeoisie' means the middle class, typically with reference to its perceived materialistic values or conventional attitudes." +
            "<br><br>" +
            "(A) 'aristocracy' means the highest class in certain societies, typically comprising people of noble birth holding hereditary titles and offices." +
            "<br><br>" +
            "(B) 'proletariat' means workers or working-class people, regarded collectively." +
            "<br><br>" +
            "(D) 'peasantry' means farmers of low social rank.",
        chinese_explanation: "(C) '资产阶级' 一词意味着中产阶级，通常指其被认为的物质主义价值观或传统态度。" +
            "<br><br>" +
            "(A) '贵族' 意味着某些社会中的最高阶级，通常包括持有世袭头衔和官职的贵族出生的人。" +
            "<br><br>" +
            "(B) '无产阶级' 意味着工人或工人阶级的人，被统称为。" +
            "<br><br>" +
            "(D) '农民' 意味着低社会地位的农民。"
    },
    {
        id: 10,
        question: "The spy operated under several __________ to avoid detection and successfully complete his missions.",
        chinese_question: "间谍使用多个 __________ 操作以避免被发现并成功完成任务。",
        answers: [
            { option: "A", answer: "identities", chinese_answer: "身份", chinese_romanization: "shēnfèn" },
            { option: "B", answer: "friends", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
            { option: "C", answer: "aliases", chinese_answer: "化名", chinese_romanization: "huàmíng" },
            { option: "D", answer: "mistakes", chinese_answer: "错误", chinese_romanization: "cuòwù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aliases' means a false or assumed identity." +
            "<br><br>" +
            "(A) 'identities' means the fact of being who or what a person or thing is." +
            "<br><br>" +
            "(B) 'friends' means people whom one knows and with whom one has a bond of mutual affection." +
            "<br><br>" +
            "(D) 'mistakes' means actions or judgments that are misguided or wrong.",
        chinese_explanation: "(C) '化名' 一词意味着虚假或假定的身份。" +
            "<br><br>" +
            "(A) '身份' 意味着某人或某物的身份。" +
            "<br><br>" +
            "(B) '朋友' 意味着一个人认识并与之有相互情感联系的人。" +
            "<br><br>" +
            "(D) '错误' 意味着误导或错误的行为或判断。"
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
