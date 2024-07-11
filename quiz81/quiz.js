// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "With his charming smile and confident manner, he was the epitome of __________.",
        chinese_question: "凭借他迷人的微笑和自信的举止，他是 __________ 的典范。",
        answers: [
            { option: "A", answer: "unpolished", chinese_answer: "不优雅的", chinese_romanization: "bù yōuyǎ de" },
            { option: "B", answer: "uncouth", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "C", answer: "debonair", chinese_answer: "风度翩翩的", chinese_romanization: "fēngdù piānpiān de" },
            { option: "D", answer: "inelegant", chinese_answer: "不优雅的", chinese_romanization: "bù yōuyǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debonair' means (of a man) confident, stylish, and charming." +
            "<br><br>" +
            "(A) 'unpolished' means lacking refinement or sophistication." +
            "<br><br>" +
            "(B) 'uncouth' means lacking good manners, refinement, or grace." +
            "<br><br>" +
            "(D) 'inelegant' means lacking grace in movement or posture.",
        chinese_explanation: "(C) '风度翩翩的' 一词意味着（男人）自信、时尚和迷人的。" +
            "<br><br>" +
            "(A) '不优雅的' 意味着缺乏精致或复杂。" +
            "<br><br>" +
            "(B) '粗鲁的' 意味着缺乏良好的举止、精致或优雅。" +
            "<br><br>" +
            "(D) '不优雅的' 意味着在动作或姿态上缺乏优雅。"
    },
    {
        id: 2,
        question: "The judge ordered the thief to pay __________ to the victims for the stolen goods.",
        chinese_question: "法官命令小偷向受害者支付__________以赔偿被盗物品。",
        answers: [
            { option: "A", answer: "penalty", chinese_answer: "处罚", chinese_romanization: "chǔfá" },
            { option: "B", answer: "fine", chinese_answer: "罚款", chinese_romanization: "fákuǎn" },
            { option: "C", answer: "confiscation", chinese_answer: "没收", chinese_romanization: "mòshōu" },
            { option: "D", answer: "restitution", chinese_answer: "赔偿", chinese_romanization: "péicháng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'restitution' refers to the restoration of something lost or stolen to its proper owner, or compensation for loss or injury." +
            "<br><br>" +
            "(A) 'penalty' refers to a punishment imposed for breaking a law, rule, or contract." +
            "<br><br>" +
            "(B) 'fine' refers to a sum of money exacted as a penalty by a court of law or other authority." +
            "<br><br>" +
            "(C) 'confiscation' refers to the action of taking or seizing someone's property with authority.",
        chinese_explanation: "(D) '赔偿' 指的是将丢失或被盗的东西归还其合法所有者，或为损失或伤害进行赔偿。" +
            "<br><br>" +
            "(A) '处罚' 指的是因违反法律、规则或合同而施加的惩罚。" +
            "<br><br>" +
            "(B) '罚款' 指的是由法院或其他当局作为惩罚征收的一笔钱。" +
            "<br><br>" +
            "(C) '没收' 指的是当局采取或没收某人财产的行为。"
    },
    {
        id: 3,
        question: "The detective investigated the case of __________ to find the culprit.",
        chinese_question: "侦探调查了 __________ 案件以找到罪犯。",
        answers: [
            { option: "A", answer: "homicide", chinese_answer: "杀人", chinese_romanization: "shārén" },
            { option: "B", answer: "theft", chinese_answer: "偷窃", chinese_romanization: "tōuqiè" },
            { option: "C", answer: "vandalism", chinese_answer: "故意破坏", chinese_romanization: "gùyì pòhuài" },
            { option: "D", answer: "fraud", chinese_answer: "欺诈", chinese_romanization: "qīzhà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'homicide' means the deliberate and unlawful killing of one person by another; murder." +
            "<br><br>" +
            "(B) 'theft' means the action or crime of stealing." +
            "<br><br>" +
            "(C) 'vandalism' means action involving deliberate destruction of or damage to public or private property." +
            "<br><br>" +
            "(D) 'fraud' means wrongful or criminal deception intended to result in financial or personal gain.",
        chinese_explanation: "(A) '杀人' 意味着故意和非法地由一个人杀死另一个人；谋杀。" +
            "<br><br>" +
            "(B) '偷窃' 意味着偷窃的行为或犯罪。" +
            "<br><br>" +
            "(C) '故意破坏' 意味着涉及故意破坏公共或私人财产的行为。" +
            "<br><br>" +
            "(D) '欺诈' 意味着旨在导致财务或个人利益的错误或犯罪欺骗。"
    },
    {
        id: 4,
        question: "Her __________ about life being like a journey helped clarify her point during the speech.",
        chinese_question: "她关于生活像旅行的__________帮助她在演讲中澄清了自己的观点。",
        answers: [
            { option: "A", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
            { option: "B", answer: "analogy", chinese_answer: "类比", chinese_romanization: "lèibǐ" },
            { option: "C", answer: "anecdote", chinese_answer: "轶事", chinese_romanization: "yìshì" },
            { option: "D", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'analogy' means a comparison between two things, typically for the purpose of explanation or clarification. Figuratively, it can mean a way of explaining or making something clear by comparing it to something else." +
            "<br><br>" +
            "(A) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
            "<br><br>" +
            "(C) 'anecdote' means a short and amusing or interesting story about a real incident or person." +
            "<br><br>" +
            "(D) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one.",
        chinese_explanation: "(B) '类比'一词意味着在两件事之间进行比较，通常是为了解释或澄清。比喻地，它可以表示通过将某物与其他事物进行比较来解释或使某事变得清楚的方法。" +
            "<br><br>" +
            "(A) '隐喻' 意味着一种修辞手法，将一个词或短语应用于一个对象或行为，而不是字面上适用的。" +
            "<br><br>" +
            "(C) '轶事' 意味着关于真实事件或人物的短小有趣的故事。" +
            "<br><br>" +
            "(D) '争论' 意味着交换不同或相反的观点，通常是激烈或愤怒的。"
    },
    {
        id: 5,
        question: "Her dedication to environmental __________ led her to organize numerous campaigns and protests to raise awareness about climate change.",
        chinese_question: "她对环境 __________ 的奉献使她组织了许多活动和抗议，以提高对气候变化的认识。",
        answers: [
            { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "inactivity", chinese_answer: "无所作为", chinese_romanization: "wúsuǒzuòwéi" },
            { option: "C", answer: "activism", chinese_answer: "激进主义", chinese_romanization: "jījìn zhǔyì" },
            { option: "D", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'activism' means the policy or action of using vigorous campaigning to bring about political or social change." +
            "<br><br>" +
            "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'inactivity' means the state of being inactive; idleness." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(C) '激进主义' 一词意味着通过积极的竞选活动带来政治或社会变化的政策或行动。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、热情或关注。" +
            "<br><br>" +
            "(B) '无所作为' 意味着不活跃的状态；闲置。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 6,
        question: "The __________ art displayed in the museum showcased the rich cultural heritage of Australia's indigenous people.",
        chinese_question: "博物馆展示的 __________ 艺术展示了澳大利亚土著人民丰富的文化遗产。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "aboriginal", chinese_answer: "原住民", chinese_romanization: "yuán zhùmín" },
            { option: "C", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" },
            { option: "D", answer: "futuristic", chinese_answer: "未来", chinese_romanization: "wèilái" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aboriginal' means inhabiting or existing in a land from the earliest times or from before the arrival of colonists; indigenous." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(D) 'futuristic' means having or involving very modern technology or design.",
        chinese_explanation: "(B) '原住民' 一词意味着从最早的时代或在殖民者到来之前居住或存在于一片土地上的；土著的。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或最近的时代有关的，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '当代' 意味着同时生活或发生的。" +
            "<br><br>" +
            "(D) '未来' 意味着具有或涉及非常现代的技术或设计的。"
    },
    {
        id: 7,
        question: "Her passionate __________ for human rights led her to join numerous organizations and speak at international conferences.",
        chinese_question: "她对人权的热情 __________ 使她加入了众多组织，并在国际会议上发言。",
        answers: [
            { option: "A", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "advocacy", chinese_answer: "提倡", chinese_romanization: "tíchàng" },
            { option: "D", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'advocacy' means public support for or recommendation of a particular cause or policy." +
            "<br><br>" +
            "(A) 'opposition' means resistance or dissent, expressed in action or argument." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'hostility' means hostile behavior; unfriendliness or opposition.",
        chinese_explanation: "(C) '提倡' 一词意味着对特定事业或政策的公开支持或推荐。" +
            "<br><br>" +
            "(A) '反对' 意味着以行动或争论表达的抵抗或异议。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '敌意' 意味着敌对行为；不友好或反对。"
    },
    {
        id: 8,
        question: "Their latest __________ to climb the highest peak ended in success after months of preparation.",
        chinese_question: "他们最新的攀登最高峰的 __________ 在几个月的准备后取得了成功。",
        answers: [
            { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "B", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "C", answer: "endeavour", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "D", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endeavour' means an attempt to achieve a goal." +
            "<br><br>" +
            "(A) 'failure' means lack of success." +
            "<br><br>" +
            "(B) 'retreat' means the action of withdrawing, especially from something dangerous or unpleasant." +
            "<br><br>" +
            "(D) 'surrender' means cease resistance to an enemy or opponent and submit to their authority.",
        chinese_explanation: "(C) '努力' 一词意味着试图实现一个目标。" +
            "<br><br>" +
            "(A) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(B) '撤退' 意味着撤退的行动，尤其是从危险或不愉快的事情中撤退。" +
            "<br><br>" +
            "(D) '投降' 意味着停止抵抗敌人或对手并服从他们的权威。"
    },
    {
        id: 9,
        question: "The medical students spent hours studying the __________ of the human body to understand how different organs and systems function.",
        chinese_question: "医学生花了数小时研究人体的 __________，以了解不同器官和系统的功能。",
        answers: [
            { option: "A", answer: "physiology", chinese_answer: "生理学", chinese_romanization: "shēnglǐ xué" },
            { option: "B", answer: "psychology", chinese_answer: "心理学", chinese_romanization: "xīnlǐ xué" },
            { option: "C", answer: "anatomy", chinese_answer: "解剖学", chinese_romanization: "jiěpōu xué" },
            { option: "D", answer: "pathology", chinese_answer: "病理学", chinese_romanization: "bìnglǐ xué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anatomy' means the branch of science concerned with the bodily structure of humans, animals, and other living organisms." +
            "<br><br>" +
            "(A) 'physiology' means the branch of biology that deals with the normal functions of living organisms and their parts." +
            "<br><br>" +
            "(B) 'psychology' means the scientific study of the human mind and its functions, especially those affecting behavior in a given context." +
            "<br><br>" +
            "(D) 'pathology' means the science of the causes and effects of diseases.",
        chinese_explanation: "(C) '解剖学' 一词意味着关注人体、动物和其他生物体的身体结构的科学分支。" +
            "<br><br>" +
            "(A) '生理学' 意味着处理生物体及其部分正常功能的生物学分支。" +
            "<br><br>" +
            "(B) '心理学' 意味着对人类思想及其功能的科学研究，尤其是那些在特定背景下影响行为的功能。" +
            "<br><br>" +
            "(D) '病理学' 意味着研究疾病原因和影响的科学。"
    },
    {
        id: 10,
        question: "The teenager was charged with a __________ for vandalizing the public park, a less severe offense than a felony.",
        chinese_question: "这名少年因在公共公园涂鸦而被指控犯有 __________，这是一种比重罪轻的违法行为。",
        answers: [
            { option: "A", answer: "felony", chinese_answer: "重罪", chinese_romanization: "zhòngzuì" },
            { option: "B", answer: "misdemeanour", chinese_answer: "轻罪", chinese_romanization: "qīngzuì" },
            { option: "C", answer: "crime", chinese_answer: "犯罪", chinese_romanization: "fànzuì" },
            { option: "D", answer: "violation", chinese_answer: "违反", chinese_romanization: "wéifǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'misdemeanour' means a minor wrongdoing." +
            "<br><br>" +
            "(A) 'felony' means a crime, typically one involving violence, regarded as more serious than a misdemeanor." +
            "<br><br>" +
            "(C) 'crime' means an action or omission that constitutes an offense that may be prosecuted by the state and is punishable by law." +
            "<br><br>" +
            "(D) 'violation' means the action of violating someone or something.",
        chinese_explanation: "(B) '轻罪' 一词意味着轻微的不法行为。" +
            "<br><br>" +
            "(A) '重罪' 意味着一种犯罪行为，通常涉及暴力，被认为比轻罪更严重。" +
            "<br><br>" +
            "(C) '犯罪' 意味着构成可能由国家起诉并依法处罚的违法行为或不作为。" +
            "<br><br>" +
            "(D) '违反' 意味着违反某人或某物的行为。"
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
