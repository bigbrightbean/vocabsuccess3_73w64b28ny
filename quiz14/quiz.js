// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ appearance belied his intelligence and wit.",
        chinese_question: "他的 __________ 外表掩饰了他的智慧和机智。",
        answers: [
            { option: "A", answer: "plain", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "B", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "C", answer: "dull", chinese_answer: "乏味", chinese_romanization: "fáwèi" },
            { option: "D", answer: "unassuming", chinese_answer: "谦虚", chinese_romanization: "qiānxū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unassuming' means not pretentious or arrogant; modest." +
            "<br><br>" +
            "(A) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(D) '谦虚' 意味着不矫揉造作或傲慢；谦虚。" +
            "<br><br>" +
            "(A) '平凡' 意味着没有装饰或华丽；性格简单或普通。" +
            "<br><br>" +
            "(B) '普通' 意味着没有特别或独特的特点；正常的。" +
            "<br><br>" +
            "(C) '乏味' 意味着缺乏兴趣或刺激。"
    },
    {
        id: 2,
        question: "The students were __________ about the upcoming election, showing little interest or enthusiasm.",
        chinese_question: "学生们对即将到来的选举 __________，表现出很少的兴趣或热情。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "passionate", chinese_answer: "充满激情", chinese_romanization: "chōngmǎn jīqíng" },
            { option: "C", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "D", answer: "excited", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'passionate' means showing or caused by strong feelings or a strong belief." +
            "<br><br>" +
            "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(A) '冷漠' 一词意味着没有表现出或感到兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '充满激情' 意味着表现出或由强烈的感情或强烈的信念引起的。" +
            "<br><br>" +
            "(C) '热情' 意味着表现出或表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '激动' 意味着非常热情和渴望。"
    },
    {
        id: 3,
        question: "The pain from his broken leg was so __________ that he could barely move.",
        chinese_question: "他断腿的疼痛非常 __________，以至于他几乎不能动弹。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "C", answer: "excruciating", chinese_answer: "剧烈", chinese_romanization: "jùliè" },
            { option: "D", answer: "moderate", chinese_answer: "适中", chinese_romanization: "shìzhōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'excruciating' means intensely painful." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'moderate' means average in amount, intensity, quality, or degree.",
        chinese_explanation: "(C) '剧烈' 一词意味着极其痛苦的。" +
            "<br><br>" +
            "'轻微' 意味着不严重、不严厉或不苛刻的。" +
            "<br><br>" +
            "'愉快' 意味着带来快乐满足感或享受。" +
            "<br><br>" +
            "'适中' 意味着数量、强度、质量或程度适中的。"
    },
    {
        id: 4,
        question: "There was a sense of __________ in the air, as if something terrible was about to happen.",
        chinese_question: "空气中有一种 __________ 的感觉，好像有什么可怕的事情要发生。",
        answers: [
            { option: "A", answer: "relief", chinese_answer: "宽慰", chinese_romanization: "kuānwèi" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "foreboding", chinese_answer: "不祥预感", chinese_romanization: "bùxiáng yùgǎn" },
            { option: "D", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'foreboding' means a feeling that something bad will happen." +
            "<br><br>" +
            "(A) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(C) '不祥预感' 一词意味着一种坏事即将发生的感觉。" +
            "<br><br>" +
            "'宽慰' 意味着解除焦虑或痛苦后的宽慰和放松的感觉。" +
            "<br><br>" +
            "'兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "'快乐' 意味着极大的愉悦和幸福的感觉。"
    },
    {
        id: 5,
        question: "Her __________ decision to quit her job without another offer lined up worried her family.",
        chinese_question: "她 __________ 地决定辞职，而没有找到其他工作，这让她的家人很担心。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "impetuous", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "deliberate", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" },
            { option: "D", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impetuous' means acting or done quickly and without thought or care." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'thoughtful' means showing consideration for the needs of other people.",
        chinese_explanation: "(B) '冲动' 一词意味着迅速且不加思索或关心地行动或完成。" +
            "<br><br>" +
            "'谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "'深思熟虑' 意味着有意识地和有意地完成的。" +
            "<br><br>" +
            "'体贴' 意味着考虑到他人的需求。"
    },
    {
        id: 6,
        question: "His __________ behavior at the party made many guests uncomfortable, as he kept making inappropriate comments.",
        chinese_question: "他在聚会上的 __________ 行为让很多客人感到不舒服，因为他不断发表不适当的评论。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "virtuous", chinese_answer: "高尚", chinese_romanization: "gāoshàng" },
            { option: "C", answer: "lecherous", chinese_answer: "好色", chinese_romanization: "hàosè" },
            { option: "D", answer: "pure", chinese_answer: "纯洁", chinese_romanization: "chúnjié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lecherous' means having or showing excessive or offensive sexual desire." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(D) 'pure' means not mixed or adulterated with any other substance or material.",
        chinese_explanation: "(C) '好色' 一词意味着具有或表现出过度或冒犯性的性欲。" +
            "<br><br>" +
            "'谦虚' 意味着对自己的能力或成就没有过高估计或自负的。" +
            "<br><br>" +
            "'高尚' 意味着具有或表现出高道德标准的。" +
            "<br><br>" +
            "'纯洁' 意味着没有掺杂任何其他物质或材料的。"
    },
    {
        id: 7,
        question: "The __________ children were difficult to control, constantly making noise and causing disruptions.",
        chinese_question: "那些 __________ 的孩子很难控制，总是吵闹不休并造成干扰。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "obstreperous", chinese_answer: "吵闹", chinese_romanization: "chǎonào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'obstreperous' means noisy and difficult to control." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(B) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(D) '吵闹' 一词意味着吵闹和难以控制的。" +
            "<br><br>" +
            "(A) '安静' 意味着没有或几乎没有声音。" +
            "<br><br>" +
            "(B) '顺从' 意味着服从或愿意服从命令或请求的；服从他人的意愿。" +
            "<br><br>" +
            "(C) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。"
    },
    {
        id: 8,
        question: "The __________ cottage was charmingly old-fashioned, with its thatched roof and flower-filled garden.",
        chinese_question: "这间 __________ 的小屋古色古香，茅草屋顶和花团锦簇的花园非常迷人。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" },
            { option: "C", answer: "quaint", chinese_answer: "古雅", chinese_romanization: "gǔyǎ" },
            { option: "D", answer: "sleek", chinese_answer: "光滑", chinese_romanization: "guānghuá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quaint' means attractively unusual or old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(B) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(D) 'sleek' means smooth and glossy.",
        chinese_explanation: "(C) '古雅' 一词意味着吸引人的不寻常或老式的。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或最近的时间有关的，相对于遥远的过去。" +
            "<br><br>" +
            "(B) '当代' 意味着在同一时间生活或发生的。" +
            "<br><br>" +
            "(D) '光滑' 意味着光滑和有光泽的。"
    },
    {
        id: 9,
        question: "His __________ attitude towards his colleagues made him unpopular, as he constantly acted as if he was morally superior.",
        chinese_question: "他对同事的 __________ 态度使他不受欢迎，因为他总是表现得自己在道德上优越。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "sanctimonious", chinese_answer: "假装虔诚", chinese_romanization: "jiǎzhuāng qiánchéng" },
            { option: "C", answer: "modest", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "unassuming", chinese_answer: "不装腔作势", chinese_romanization: "bù zhuāng qiāng zuò shì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sanctimonious' means making a show of being morally superior to other people." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'unassuming' means not pretentious or arrogant; modest.",
        chinese_explanation: "(B) '假装虔诚' 一词意味着表现得在道德上优越于他人的。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估的。" +
            "<br><br>" +
            "(C) '谦逊' 意味着对自己的能力或成就没有过高估计或自负的。" +
            "<br><br>" +
            "(D) '不装腔作势' 意味着不装腔作势或傲慢的；谦逊的。"
    },
    {
        id: 10,
        question: "The jewelry was __________, designed to catch the eye but made from cheap materials.",
        chinese_question: "这些首饰是 __________ 的，设计得引人注目，但却是用廉价材料制成的。",
        answers: [
            { option: "A", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "B", answer: "subdued", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "meretricious", chinese_answer: "华而不实的", chinese_romanization: "huá'érbùshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'meretricious' means apparently attractive but having no real value." +
            "<br><br>" +
            "(A) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(B) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(D) '华而不实的' 意味着表面上吸引人但没有实际价值的。" +
            "<br><br>" +
            "(A) '真实的' 意味着来源无可争议而不是复制品的；真实的。" +
            "<br><br>" +
            "(B) '低调的' 意味着安静且相当深思或沮丧的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着真正的东西；真实的。"
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
