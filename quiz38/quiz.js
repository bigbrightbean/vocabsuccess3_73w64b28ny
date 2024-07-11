// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The film was criticized for its __________ storyline, which failed to excite the audience.",
        chinese_question: "这部电影因其 __________ 的剧情而受到批评，未能激起观众的兴趣。",
        answers: [
            { option: "A", answer: "thrilling", chinese_answer: "激动人心", chinese_romanization: "jīdòng rén xīn" },
            { option: "B", answer: "complex", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "C", answer: "pedestrian", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "D", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pedestrian' means lacking inspiration or excitement; dull." +
            "<br><br>" +
            "(A) 'thrilling' means causing excitement and pleasure." +
            "<br><br>" +
            "(B) 'complex' means consisting of many different and connected parts." +
            "<br><br>" +
            "(D) 'innovative' means introducing new ideas or methods.",
        chinese_explanation: "(C) '平淡' 一词意味着缺乏灵感或兴奋；无聊。" +
            "<br><br>" +
            "(A) '激动人心' 意味着引起兴奋和愉悦。" +
            "<br><br>" +
            "(B) '复杂' 意味着由许多不同和连接的部分组成。" +
            "<br><br>" +
            "(D) '创新' 意味着引入新思想或方法。"
    },
    {
        id: 2,
        question: "The startup company's __________ approach to customer service, using chatbots and AI technology, set a new standard for efficiency and user satisfaction in the industry.",
        chinese_question: "这家初创公司对客户服务的 __________ 方法，利用聊天机器人和人工智能技术，为行业的效率和用户满意度设立了新的标准。",
        answers: [
            { option: "A", answer: "pioneering", chinese_answer: "开拓性的", chinese_romanization: "kāituòxìng de" },
            { option: "B", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
            { option: "C", answer: "orthodox", chinese_answer: "正统的", chinese_romanization: "zhèngtǒng de" },
            { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pioneering' means involving new ideas or methods; introducing innovations." +
            "<br><br>" +
            "(B) 'stagnant' means showing no activity; dull and sluggish." +
            "<br><br>" +
            "(C) 'orthodox' means conforming to what is generally or traditionally accepted as right or true; established and approved." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull and ordinary.",
        chinese_explanation: "(A) '开拓性的' 意味着涉及新的想法或方法；引入创新。" +
            "<br><br>" +
            "(B) '停滞的' 意味着没有活动；迟钝和呆滞。" +
            "<br><br>" +
            "(C) '正统的' 意味着符合通常或传统上被接受为正确或真实的；已被认可的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着缺乏兴趣或刺激；乏味和普通。"
    },
    {
        id: 3,
        question: "The lawyer's __________ explanation of the legal case only served to confuse the jury further, as they struggled to follow the complex argument.",
        chinese_question: "律师对法律案件的 __________ 解释只会让陪审团更加困惑，因为他们很难跟上复杂的论点。",
        answers: [
            { option: "A", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "B", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(A) 'succinct' means expressed in a clear and brief manner; concise." +
            "<br><br>" +
            "(C) 'straightforward' means easy to understand or clear; uncomplicated." +
            "<br><br>" +
            "(D) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive.",
        chinese_explanation: "(B) '复杂的' 意味着极其复杂且难以理解。" +
            "<br><br>" +
            "(A) '简洁的' 意味着以清晰而简洁的方式表达；简明。" +
            "<br><br>" +
            "(C) '直接的' 意味着易于理解或清晰；简单。" +
            "<br><br>" +
            "(D) '简明的' 意味着清晰简洁地提供了大量信息；简明但全面。"
    },
    {
        id: 4,
        question: "The __________ progression of the disease made it difficult to diagnose early, as it gradually caused damage over years without any noticeable symptoms.",
        chinese_question: "这种疾病的 __________ 发展使得早期诊断变得困难，因为它在几年内逐渐造成损害而没有任何明显的症状。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "B", answer: "straightforward", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "C", answer: "insidious", chinese_answer: "潜伏", chinese_romanization: "qiánfú" },
            { option: "D", answer: "benign", chinese_answer: "良性", chinese_romanization: "liángxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insidious' means proceeding in a gradual, subtle way, but with harmful effects." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'benign' means gentle and kindly.",
        chinese_explanation: "(C) '潜伏' 一词意味着以渐进、微妙的方式进行，但具有有害的效果。" +
            "<br><br>" +
            "(A) '明显' 意味着容易被察觉或理解；清晰的、自明的或显然的。" +
            "<br><br>" +
            "(B) '直接' 意味着简单和容易做到或理解的。" +
            "<br><br>" +
            "(D) '良性' 意味着温和和友好的。"
    },
    {
        id: 5,
        question: "The disease is __________, passed down from one generation to the next.",
        chinese_question: "这种疾病是 __________ 的，从一代传给下一代。",
        answers: [
            { option: "A", answer: "acquired", chinese_answer: "后天", chinese_romanization: "hòutiān" },
            { option: "B", answer: "hereditary", chinese_answer: "遗传", chinese_romanization: "yíchuán" },
            { option: "C", answer: "learned", chinese_answer: "学习", chinese_romanization: "xuéxí" },
            { option: "D", answer: "environmental", chinese_answer: "环境", chinese_romanization: "huánjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hereditary' means (of a disease or characteristic) determined by genetic factors and therefore able to be passed on from parents to their offspring." +
            "<br><br>" +
            "(A) 'acquired' means developed or learned; not naturally occurring." +
            "<br><br>" +
            "(C) 'learned' means acquired by learning." +
            "<br><br>" +
            "(D) 'environmental' means relating to the natural world and the impact of human activity on its condition.",
        chinese_explanation: "(B) '遗传' 一词意味着（指疾病或特征）由遗传因素决定，因此能够从父母传给后代。" +
            "<br><br>" +
            "(A) '后天' 意味着通过学习发展或获得的；不是自然发生的。" +
            "<br><br>" +
            "(C) '学习' 意味着通过学习获得的。" +
            "<br><br>" +
            "(D) '环境' 意味着与自然世界有关的，以及人类活动对其状况的影响。"
    },
    {
        id: 6,
        question: "His __________ advice helped the company navigate through the difficult economic times.",
        chinese_question: "他的 __________ 建议帮助公司度过了经济困难时期。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
            { option: "B", answer: "sagacious", chinese_answer: "睿智", chinese_romanization: "ruìzhì" },
            { option: "C", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "D", answer: "unwise", chinese_answer: "不明智", chinese_romanization: "bù míngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sagacious' means having or showing keen mental discernment and good judgment; wise or shrewd." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(C) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(D) 'unwise' means not showing good judgment or understanding of the situation.",
        chinese_explanation: "(B) '睿智' 一词意味着具有或表现出敏锐的精神洞察力和良好判断力的；明智或精明的。" +
            "<br><br>" +
            "(A) '愚蠢' 意味着缺乏良好的判断力；不明智的。" +
            "<br><br>" +
            "(C) '无知' 意味着一般缺乏知识或意识的；未受教育的或不成熟的。" +
            "<br><br>" +
            "(D) '不明智' 意味着没有表现出对情况的良好判断或理解的。"
    },
    {
        id: 7,
        question: "The sports car was incredibly __________, accelerating from 0 to 60 mph in just a few seconds.",
        chinese_question: "这辆跑车非常 __________，几秒钟内就能从0加速到60英里每小时。",
        answers: [
            { option: "A", answer: "slow", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
            { option: "B", answer: "sluggish", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "C", answer: "zippy", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūn hūn yù shuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zippy' means bright, fresh, or lively." +
            "<br><br>" +
            "(A) 'slow' means moving or operating at a slow speed." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(C) '迅速' 一词意味着明亮、新鲜或活泼的。" +
            "<br><br>" +
            "(A) '缓慢' 意味着以缓慢的速度移动或操作。" +
            "<br><br>" +
            "(B) '迟钝' 意味着行动迟缓或不活跃的。" +
            "<br><br>" +
            "(D) '昏昏欲睡' 意味着受困倦影响的；迟钝和冷漠的。"
    },
    {
        id: 8,
        question: "Her __________ apology did little to mend the rift between her and her friend, who saw through her insincerity.",
        chinese_question: "她的 __________ 道歉对弥合她与朋友之间的裂痕几乎没有作用，朋友看穿了她的不真诚。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "disingenuous", chinese_answer: "虚伪", chinese_romanization: "xūwěi" },
            { option: "C", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "D", answer: "sincere", chinese_answer: "诚挚", chinese_romanization: "chéngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disingenuous' means not candid or sincere, typically by pretending that one knows less about something than one really does." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '虚伪' 一词意味着不坦率或不真诚，通常是假装自己对某事知之甚少。" +
            "<br><br>" +
            "(A) '真诚' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(C) '诚实' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(D) '诚挚' 意味着没有虚伪或欺骗的；源自真实感情的。"
    },
    {
        id: 9,
        question: "Despite the challenges ahead, he remained __________ about the company's future.",
        chinese_question: "尽管前方挑战重重，他仍然对公司的未来保持 __________。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观", chinese_romanization: "bēiguān" },
            { option: "B", answer: "gloomy", chinese_answer: "阴郁", chinese_romanization: "yīnyù" },
            { option: "C", answer: "sanguine", chinese_answer: "乐观", chinese_romanization: "lèguān" },
            { option: "D", answer: "doubtful", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sanguine' means optimistic or positive, especially in an apparently bad or difficult situation." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(C) '乐观' 一词意味着乐观或积极的，尤其是在明显糟糕或困难的情况下。" +
            "<br><br>" +
            "(A) '悲观' 意味着倾向于看到事物最坏的一面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(B) '阴郁' 意味着黑暗或照明不足，特别是显得令人沮丧或可怕的。" +
            "<br><br>" +
            "(D) '怀疑' 意味着对某事感到不确定的。"
    },
    {
        id: 10,
        question: "The journalist's __________ article, filled with harsh and bitter criticisms, sparked outrage among the readers and led to numerous complaints.",
        chinese_question: "记者的 __________ 文章充满了尖锐和恶毒的批评，引起了读者的愤怒并导致了大量投诉。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友善", chinese_romanization: "yǒushàn" },
            { option: "B", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "C", answer: "vitriolic", chinese_answer: "尖刻", chinese_romanization: "jiānkè" },
            { option: "D", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vitriolic' means filled with bitter criticism or malice." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '尖刻' 一词意味着充满苦涩的批评或恶意。" +
            "<br><br>" +
            "(A) '友善' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(B) '温和' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(D) '温柔' 意味着具有或表现出温和、友好或温柔的气质或性格。"
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
