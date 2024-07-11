// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The historic artifacts were returned to the country of origin as part of the __________ agreement.",
        chinese_question: "这些历史文物作为__________协议的一部分被归还到原产国。",
        answers: [
            { option: "A", answer: "seizure", chinese_answer: "扣押", chinese_romanization: "kòuyā" },
            { option: "B", answer: "appropriation", chinese_answer: "挪用", chinese_romanization: "nuóyòng" },
            { option: "C", answer: "detention", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "D", answer: "restitution", chinese_answer: "赔偿", chinese_romanization: "péicháng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'restitution' refers to the restoration of something lost or stolen to its proper owner, or compensation for loss or injury." +
            "<br><br>" +
            "(A) 'seizure' refers to the action of capturing someone or something using force." +
            "<br><br>" +
            "(B) 'appropriation' refers to the action of taking something for one's own use, typically without the owner's permission." +
            "<br><br>" +
            "(C) 'detention' refers to the action of detaining someone or the state of being detained.",
        chinese_explanation: "(D) '赔偿' 指的是将丢失或被盗的东西归还其合法所有者，或为损失或伤害进行赔偿。" +
            "<br><br>" +
            "(A) '扣押' 指的是使用武力捕获某人或某物的行为。" +
            "<br><br>" +
            "(B) '挪用' 指的是为个人使用而拿走某物的行为，通常未经所有者许可。" +
            "<br><br>" +
            "(C) '扣留' 指的是扣留某人的行为或被扣留的状态。"
    },
    {
        id: 2,
        question: "He issued an __________ to his employees: improve performance or face severe consequences.",
        chinese_question: "他向员工发出了 __________：提高业绩，否则将面临严厉后果。",
        answers: [
            { option: "A", answer: "invitation", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "B", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "C", answer: "ultimatum", chinese_answer: "最后通牒", chinese_romanization: "zuìhòu tōngdié" },
            { option: "D", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ultimatum' means a final demand or statement of terms, the rejection of which will result in retaliation or a breakdown in relations." +
            "<br><br>" +
            "(A) 'invitation' means a written or verbal request inviting someone to go somewhere or to do something." +
            "<br><br>" +
            "(B) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(D) 'request' means an act of asking politely or formally for something.",
        chinese_explanation: "(C) '最后通牒' 一词意味着最终要求或条件声明，拒绝将导致报复或关系破裂。" +
            "<br><br>" +
            "(A) '邀请' 意味着书面或口头请求邀请某人去某地或做某事。" +
            "<br><br>" +
            "(B) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(D) '请求' 意味着礼貌或正式地要求某物的行为。"
    },
    {
        id: 3,
        question: "During __________, teenagers experience many physical and emotional changes as they transition from childhood to adulthood.",
        chinese_question: "在 __________ 期间，青少年在从童年过渡到成年的过程中会经历许多身体和情感的变化。",
        answers: [
            { option: "A", answer: "infancy", chinese_answer: "婴儿期", chinese_romanization: "yīng'ér qī" },
            { option: "B", answer: "adulthood", chinese_answer: "成年", chinese_romanization: "chéngnián" },
            { option: "C", answer: "adolescence", chinese_answer: "青春期", chinese_romanization: "qīngchūn qī" },
            { option: "D", answer: "senescence", chinese_answer: "衰老", chinese_romanization: "shuāilǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adolescence' means the period following the onset of puberty during which a young person develops from a child into an adult." +
            "<br><br>" +
            "(A) 'infancy' means the state or period of early childhood or babyhood." +
            "<br><br>" +
            "(B) 'adulthood' means the state or condition of being fully grown or mature." +
            "<br><br>" +
            "(D) 'senescence' means the condition or process of deterioration with age.",
        chinese_explanation: "(C) '青春期' 一词意味着青春期开始后的时期，在此期间，年轻人从儿童发展到成人。" +
            "<br><br>" +
            "(A) '婴儿期' 意味着早期童年或婴儿期的状态或时期。" +
            "<br><br>" +
            "(B) '成年' 意味着完全成长或成熟的状态或条件。" +
            "<br><br>" +
            "(D) '衰老' 意味着随年龄恶化的状态或过程。"
    },
    {
        id: 4,
        question: "The inn's __________ made every guest feel at home, providing warm welcomes and personalized service.",
        chinese_question: "这家旅馆的 __________ 让每位客人都感到宾至如归，提供热情的欢迎和个性化的服务。",
        answers: [
            { option: "A", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" },
            { option: "B", answer: "hospitality", chinese_answer: "款待", chinese_romanization: "kuǎndài" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hospitality' means the friendly and generous reception and entertainment of guests, visitors, or strangers." +
            "<br><br>" +
            "(A) 'hostility' means unfriendliness or opposition." +
            "<br><br>" +
            "(C) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '款待' 一词意味着友好和慷慨地接待和款待客人、访客或陌生人。" +
            "<br><br>" +
            "(A) '敌意' 意味着不友好或反对。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 5,
        question: "The committee reached a __________ after hours of discussion, agreeing on the new policy unanimously.",
        chinese_question: "委员会经过数小时的讨论后达成 __________，一致同意新的政策。",
        answers: [
            { option: "A", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "B", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
            { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "D", answer: "dispute", chinese_answer: "争端", chinese_romanization: "zhēngduān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consensus' means general agreement." +
            "<br><br>" +
            "(A) 'disagreement' means lack of consensus or approval." +
            "<br><br>" +
            "(C) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(D) 'dispute' means a disagreement or argument.",
        chinese_explanation: "(B) '共识' 一词意味着普遍的同意。" +
            "<br><br>" +
            "(A) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(C) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(D) '争端' 意味着分歧或争论。"
    },
    {
        id: 6,
        question: "The patient was rushed to the hospital with severe __________, indicating a potential heart problem.",
        chinese_question: "患者因严重的 __________ 被紧急送往医院，这表明可能存在心脏问题。",
        answers: [
            { option: "A", answer: "headache", chinese_answer: "头痛", chinese_romanization: "tóutòng" },
            { option: "B", answer: "angina", chinese_answer: "心绞痛", chinese_romanization: "xīnjiǎotòng" },
            { option: "C", answer: "nausea", chinese_answer: "恶心", chinese_romanization: "ěxīn" },
            { option: "D", answer: "dizziness", chinese_answer: "头晕", chinese_romanization: "tóuyūn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'angina' means a condition marked by severe pain in the chest, often also spreading to the shoulders, arms, and neck, caused by an inadequate blood supply to the heart." +
            "<br><br>" +
            "(A) 'headache' means a continuous pain in the head." +
            "<br><br>" +
            "(C) 'nausea' means a feeling of sickness with an inclination to vomit." +
            "<br><br>" +
            "(D) 'dizziness' means a sensation of spinning and losing one's balance.",
        chinese_explanation: "(B) '心绞痛' 一词意味着一种以胸部剧烈疼痛为特征的疾病，通常也扩散到肩膀、手臂和颈部，由于心脏供血不足引起。" +
            "<br><br>" +
            "(A) '头痛' 意味着头部的持续疼痛。" +
            "<br><br>" +
            "(C) '恶心' 意味着有呕吐倾向的疾病感觉。" +
            "<br><br>" +
            "(D) '头晕' 意味着旋转和失去平衡的感觉。"
    },
    {
        id: 7,
        question: "As an __________ of the university, she often returned to campus to mentor current students and support alumni events.",
        chinese_question: "作为大学的 __________，她经常返回校园指导在校学生并支持校友活动。",
        answers: [
            { option: "A", answer: "freshman", chinese_answer: "新生", chinese_romanization: "xīnshēng" },
            { option: "B", answer: "teacher", chinese_answer: "老师", chinese_romanization: "lǎoshī" },
            { option: "C", answer: "alumna", chinese_answer: "女校友", chinese_romanization: "nǚ xiàoyǒu" },
            { option: "D", answer: "applicant", chinese_answer: "申请人", chinese_romanization: "shēnqǐng rén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alumna' means a female graduate or former student of a particular school, college, or university." +
            "<br><br>" +
            "(A) 'freshman' means a first-year student at a university, college, or high school." +
            "<br><br>" +
            "(B) 'teacher' means a person who teaches, especially in a school." +
            "<br><br>" +
            "(D) 'applicant' means a person who makes a formal application for something, typically a job.",
        chinese_explanation: "(C) '女校友' 一词意味着特定学校、学院或大学的女性毕业生或前学生。" +
            "<br><br>" +
            "(A) '新生' 意味着大学、学院或高中的一年级学生。" +
            "<br><br>" +
            "(B) '老师' 意味着在学校教书的人。" +
            "<br><br>" +
            "(D) '申请人' 意味着正式申请某事的人，通常是工作。"
    },
    {
        id: 8,
        question: "The doctor drained the __________ on the patient's leg, relieving the pain and preventing further infection.",
        chinese_question: "医生排出了患者腿上的 __________，缓解了疼痛并防止了进一步感染。",
        answers: [
            { option: "A", answer: "tumor", chinese_answer: "肿瘤", chinese_romanization: "zhǒngliú" },
            { option: "B", answer: "abscess", chinese_answer: "脓肿", chinese_romanization: "nóngzhǒng" },
            { option: "C", answer: "cyst", chinese_answer: "囊肿", chinese_romanization: "nángzhǒng" },
            { option: "D", answer: "wart", chinese_answer: "疣", chinese_romanization: "yóu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abscess' means a swollen area within body tissue, containing an accumulation of pus." +
            "<br><br>" +
            "(A) 'tumor' means a swelling of a part of the body, generally without inflammation, caused by an abnormal growth of tissue." +
            "<br><br>" +
            "(C) 'cyst' means a closed sac having a distinct membrane and developing abnormally in a cavity or structure of the body." +
            "<br><br>" +
            "(D) 'wart' means a small, hard, benign growth on the skin, caused by a virus.",
        chinese_explanation: "(B) '脓肿' 一词意味着体内组织内的肿胀区域，包含脓液积聚。" +
            "<br><br>" +
            "(A) '肿瘤' 意味着身体某部分的肿胀，通常没有炎症，由异常组织生长引起。" +
            "<br><br>" +
            "(C) '囊肿' 意味着体内腔或结构中具有明确膜并异常发育的封闭囊。" +
            "<br><br>" +
            "(D) '疣' 意味着皮肤上的小的、坚硬的、良性的生长，由病毒引起。"
    },
    {
        id: 9,
        question: "Advances in __________ have allowed farmers to increase crop yields and improve food security worldwide.",
        chinese_question: "__________ 方面的进步使农民能够提高作物产量并改善全球粮食安全。",
        answers: [
            { option: "A", answer: "industry", chinese_answer: "工业", chinese_romanization: "gōngyè" },
            { option: "B", answer: "technology", chinese_answer: "技术", chinese_romanization: "jìshù" },
            { option: "C", answer: "agriculture", chinese_answer: "农业", chinese_romanization: "nóngyè" },
            { option: "D", answer: "medicine", chinese_answer: "医学", chinese_romanization: "yīxué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agriculture' means the science or practice of farming." +
            "<br><br>" +
            "(A) 'industry' means economic activity concerned with the processing of raw materials and manufacture of goods in factories." +
            "<br><br>" +
            "(B) 'technology' means the application of scientific knowledge for practical purposes." +
            "<br><br>" +
            "(D) 'medicine' means the science or practice of the diagnosis, treatment, and prevention of disease.",
        chinese_explanation: "(C) '农业' 一词意味着农业的科学或实践。" +
            "<br><br>" +
            "(A) '工业' 意味着与工厂中的原材料加工和商品制造有关的经济活动。" +
            "<br><br>" +
            "(B) '技术' 意味着将科学知识应用于实际用途。" +
            "<br><br>" +
            "(D) '医学' 意味着诊断、治疗和预防疾病的科学或实践。"
    },
    {
        id: 10,
        question: "The __________ of the seismic waves was measured to determine the earthquake's magnitude.",
        chinese_question: "__________ 被测量以确定地震的震级。",
        answers: [
            { option: "A", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" },
            { option: "B", answer: "frequency", chinese_answer: "频率", chinese_romanization: "pínlǜ" },
            { option: "C", answer: "amplitude", chinese_answer: "振幅", chinese_romanization: "zhènbó" },
            { option: "D", answer: "speed", chinese_answer: "速度", chinese_romanization: "sùdù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amplitude' means the maximum extent of a vibration or oscillation, measured from the position of equilibrium." +
            "<br><br>" +
            "(A) 'length' means the measurement or extent of something from end to end." +
            "<br><br>" +
            "(B) 'frequency' means the rate at which something occurs over a particular period of time." +
            "<br><br>" +
            "(D) 'speed' means the rate at which someone or something is able to move or operate.",
        chinese_explanation: "(C) '振幅' 一词意味着从平衡位置测量的振动或振荡的最大范围。" +
            "<br><br>" +
            "(A) '长度' 意味着某物从一端到另一端的测量或范围。" +
            "<br><br>" +
            "(B) '频率' 意味着某事在特定时间段内发生的频率。" +
            "<br><br>" +
            "(D) '速度' 意味着某人或某物能够移动或操作的速度。"
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
