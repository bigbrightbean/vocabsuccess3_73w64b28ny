// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The explorer's __________ discoveries amazed the scientific community.",
        chinese_question: "探险家 __________ 发现让科学界感到惊讶。",
        answers: [
            { option: "A", answer: "remarkable", chinese_answer: "卓越的", chinese_romanization: "zhuóyuè de" },
            { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "whimsical", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
            { option: "D", answer: "clandestine", chinese_answer: "秘密的", chinese_romanization: "mìmì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remarkable' means extraordinary or outstanding." +
            "<br><br>" +
            "(B) 'mundane' means ordinary or commonplace." +
            "<br><br>" +
            "(C) 'whimsical' means playful or fanciful." +
            "<br><br>" +
            "(D) 'clandestine' means secret or concealed.",
        chinese_explanation: "(A) '卓越的' 意味着非凡或杰出。" +
            "<br><br>" +
            "(B) '平凡的' 意味着普通或平淡。" +
            "<br><br>" +
            "(C) '古怪的' 意味着玩味或奇特。" +
            "<br><br>" +
            "(D) '秘密的' 意味着秘密或隐蔽。"
    },
    {
        id: 2,
        question: "The political rally turned __________ as opposing factions clashed in the streets, resulting in chaos and disorder.",
        chinese_question: "政治集会在街头发生冲突，引发了混乱和无序，局势变得 __________。",
        answers: [
            { option: "A", answer: "tranquil", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "B", answer: "tumultuous", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" },
            { option: "C", answer: "placid", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tumultuous' means making a loud, confused noise; uproarious." +
            "<br><br>" +
            "(A) 'tranquil' means calm, peaceful, and untroubled." +
            "<br><br>" +
            "(C) 'placid' means calm and peaceful, with little movement or activity." +
            "<br><br>" +
            "(D) 'serene' means calm, peaceful, and untroubled.",
        chinese_explanation: "(B) '喧闹的' 意味着发出大声的、混乱的噪音；喧闹的。" +
            "<br><br>" +
            "(A) '宁静' 意味着平静、安详、无忧。" +
            "<br><br>" +
            "(C) '平静' 意味着平静、安详、无忧；没有什么运动或活动。" +
            "<br><br>" +
            "(D) '宁静' 意味着平静、安详、无忧。"
    },
    {
        id: 3,
        question: "The city’s __________ nightlife offers a variety of entertainment options for residents and visitors alike.",
        chinese_question: "城市的 __________ 夜生活为居民和游客提供了各种娱乐选择。",
        answers: [
            { option: "A", answer: "vibrant", chinese_answer: "充满活力", chinese_romanization: "chōngmǎn huólì" },
            { option: "B", answer: "dull", chinese_answer: "枯燥", chinese_romanization: "kūzào" },
            { option: "C", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "tedious", chinese_answer: "乏味", chinese_romanization: "fáwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vibrant' means full of energy and enthusiasm." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
        chinese_explanation: "(A) '充满活力'一词意味着充满能量和热情。" +
            "<br><br>" +
            "(B) '枯燥' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '单调' 意味着乏味、沉闷、重复；缺乏变化和兴趣。" +
            "<br><br>" +
            "(D) '乏味' 意味着太长、太慢或乏味；令人厌倦或单调。"
    },
    {
        id: 4,
        question: "Her __________ demeanor in the face of adversity earned her the respect and admiration of her peers.",
        chinese_question: "她在逆境中的 __________ 态度为她赢得了同龄人的尊重和钦佩。",
        answers: [
            { option: "A", answer: "stoic", chinese_answer: "坚忍", chinese_romanization: "jiānrěn" },
            { option: "B", answer: "frantic", chinese_answer: "疯狂", chinese_romanization: "fēngkuáng" },
            { option: "C", answer: "volatile", chinese_answer: "易变", chinese_romanization: "yìbiàn" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stoic' means enduring pain and hardship without showing feelings or complaining." +
            "<br><br>" +
            "(B) 'frantic' means wild or distraught with fear, anxiety, or other emotion." +
            "<br><br>" +
            "(C) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '坚忍'一词意味着在承受痛苦和困难时不表现出情感或抱怨。" +
            "<br><br>" +
            "(B) '疯狂' 意味着因恐惧、焦虑或其他情绪而狂乱或心神不安。" +
            "<br><br>" +
            "(C) '易变' 意味着容易迅速且不可预测地变化，特别是变得更糟。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；漠不关心。"
    },
    {
        id: 5,
        question: "The nurse was found __________ in her duties, which led to a serious oversight in patient care.",
        chinese_question: "这名护士被发现工作 __________，导致在病人护理中出现严重疏忽。",
        answers: [
            { option: "A", answer: "meticulous", chinese_answer: "细致", chinese_romanization: "xìzhì" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "D", answer: "attentive", chinese_answer: "细心", chinese_romanization: "xìxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligent' means failing to take proper care." +
            "<br><br>" +
            "(A) 'meticulous' means showing great attention to detail." +
            "<br><br>" +
            "(C) 'diligent' means showing care and effort in one's work or duties." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(B) '疏忽' 一词意味着未能采取适当的照顾。" +
            "<br><br>" +
            "(A) '细致' 意味着非常注重细节。" +
            "<br><br>" +
            "(C) '勤奋' 意味着在工作或职责中表现出关心和努力。" +
            "<br><br>" +
            "(D) '细心' 意味着密切关注某事。"
    },
    {
        id: 6,
        question: "The teacher pointed out that the student's comment was __________ to the topic of discussion.",
        chinese_question: "老师指出，学生的评论与讨论的主题是 __________ 的。",
        answers: [
            { option: "A", answer: "relevant", chinese_answer: "相关", chinese_romanization: "xiāngguān" },
            { option: "B", answer: "pertinent", chinese_answer: "切题", chinese_romanization: "qiètí" },
            { option: "C", answer: "significant", chinese_answer: "重要", chinese_romanization: "zhòngyào" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(B) 'pertinent' means relevant or applicable to a particular matter." +
            "<br><br>" +
            "(C) 'significant' means sufficiently great or important to be worthy of attention.",
        chinese_explanation: "(D) '无关' 一词意味着与某事没有联系或无关。" +
            "<br><br>" +
            "(A) '相关' 意味着与正在做或考虑的事情密切相关或适当。" +
            "<br><br>" +
            "(B) '切题' 意味着与特定事项相关或适用的。" +
            "<br><br>" +
            "(C) '重要' 意味着足够大或重要，值得注意。"
    },
    {
        id: 7,
        question: "The instructions given by the teacher were so __________ that students had a hard time understanding what to do.",
        chinese_question: "老师给出的指示非常 __________，学生很难理解该做什么。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚", chinese_romanization: "qīngchǔ" },
            { option: "B", answer: "straightforward", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "ambiguous", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "D", answer: "precise", chinese_answer: "精确", chinese_romanization: "jīngquè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'precise' means marked by exactness and accuracy of expression or detail.",
        chinese_explanation: "(C) '模糊' 一词意味着开放多种解释；没有一个明显的意思。" +
            "<br><br>" +
            "'清楚' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "'简单' 意味着简单易懂或容易理解。" +
            "<br><br>" +
            "'精确' 意味着表达或细节的准确性。"
    },
    {
        id: 8,
        question: "The __________ landscape of the mountains left everyone in awe during the hiking trip.",
        chinese_question: "徒步旅行中那 __________ 的山景让每个人都惊叹不已。",
        answers: [
            { option: "A", answer: "desolate", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" },
            { option: "B", answer: "breathtaking", chinese_answer: "令人叹为观止", chinese_romanization: "lìng rén tànwéi guānzhǐ" },
            { option: "C", answer: "barren", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
            { option: "D", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'breathtaking' means astonishing or awe-inspiring in quality." +
            "<br><br>" +
            "(A) 'desolate' means deserted and bleak." +
            "<br><br>" +
            "(C) 'barren' means too poor to produce much or any vegetation." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement.",
        chinese_explanation: "(B) '令人叹为观止' 一词意味着品质惊人或令人惊叹。" +
            "<br><br>" +
            "(A) '荒凉' 意味着荒芜和荒凉。" +
            "<br><br>" +
            "(C) '贫瘠' 意味着贫瘠得无法生产任何植物。" +
            "<br><br>" +
            "(D) '平凡' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 9,
        question: "The hikers found the climb to the mountain peak to be  __________, testing their endurance and strength.",
        chinese_question: "登山者发现攀登山峰非常 __________，测试了他们的耐力和力量。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "B", answer: "effortless", chinese_answer: "毫不费力", chinese_romanization: "háo bù fèilì" },
            { option: "C", answer: "arduous", chinese_answer: "艰难", chinese_romanization: "jiānnán" },
            { option: "D", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arduous' means involving or requiring strenuous effort; difficult and tiring." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'effortless' means requiring no physical or mental exertion." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '艰难' 一词意味着需要艰苦努力；困难且累人的。" +
            "<br><br>" +
            "'容易' 意味着没有太大努力就能实现；提出很少的困难。" +
            "<br><br>" +
            "'毫不费力' 意味着不需要身体或精神上的努力。" +
            "<br><br>" +
            "'简单' 意味着容易理解或完成；没有难度。"
    },
    {
        id: 10,
        question: "The politician's __________ remarks during the debate led to heated arguments and disruptions.",
        chinese_question: "这位政治家在辩论中的 __________ 言论引发了激烈的争论和骚乱。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "B", answer: "conciliatory", chinese_answer: "调解", chinese_romanization: "tiáojiě" },
            { option: "C", answer: "bellicose", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "D", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bellicose' means demonstrating aggression and willingness to fight." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(B) 'conciliatory' means intended or likely to placate or pacify." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(C) '好斗' 一词意味着表现出侵略性和战斗的意愿。" +
            "<br><br>" +
            "'和平' 意味着没有干扰；平静。" +
            "<br><br>" +
            "'调解' 意味着意图或可能安抚或安抚的。" +
            "<br><br>" +
            "'友好' 意味着友善和愉快。"
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
