// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She had the __________ to ask for a raise after only working for the company for a month.",
        chinese_question: "她竟然有__________在公司只工作了一个月就要求加薪。",
        answers: [
            { option: "A", answer: "shyness", chinese_answer: "害羞", chinese_romanization: "hàixiū" },
            { option: "B", answer: "reserve", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "C", answer: "bashfulness", chinese_answer: "腼腆", chinese_romanization: "miǎntiǎn" },
            { option: "D", answer: "effrontery", chinese_answer: "厚颜无耻", chinese_romanization: "hòuyán wúchǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'effrontery' refers to insolent or impertinent behavior." +
            "<br><br>" +
            "(A) 'shyness' refers to the quality or state of being shy." +
            "<br><br>" +
            "(B) 'reserve' refers to the quality of being slow to reveal emotions or opinions." +
            "<br><br>" +
            "(C) 'bashfulness' refers to feeling shy, awkward, or ashamed.",
        chinese_explanation: "(D) '厚颜无耻' 指的是无礼或无礼的行为。" +
            "<br><br>" +
            "(A) '害羞' 指的是害羞的质量或状态。" +
            "<br><br>" +
            "(B) '保留' 指的是缓慢透露情绪或意见的质量。" +
            "<br><br>" +
            "(C) '腼腆' 指的是感到害羞、尴尬或羞愧。"
    },
    {
        id: 2,
        question: "She felt a wave of __________ as she walked through her old neighborhood, remembering the carefree days of her childhood.",
        chinese_question: "她走在旧社区里，感到一阵 __________，回忆起童年无忧无虑的日子。",
        answers: [
            { option: "A", answer: "anticipation", chinese_answer: "期望", chinese_romanization: "qīwàng" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "nostalgia", chinese_answer: "怀旧", chinese_romanization: "huáijiù" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nostalgia' means a sentimental longing or wistful affection for the past, typically for a period or place with happy personal associations." +
            "<br><br>" +
            "(A) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(C) '怀旧' 意味着对过去的怀念或怀旧，通常是对有愉快个人联系的时期或地方。" +
            "<br><br>" +
            "(A) '期望' 意味着对某事的预期；预期或预测。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 3,
        question: "Her __________ as a painter provided a creative outlet that balanced her demanding career as a lawyer.",
        chinese_question: "她作为画家的 __________ 提供了一个创造性的出口，平衡了她作为律师的高要求职业。",
        answers: [
            { option: "A", answer: "profession", chinese_answer: "职业", chinese_romanization: "zhíyè" },
            { option: "B", answer: "avocation", chinese_answer: "业余爱好", chinese_romanization: "yèyú àihào" },
            { option: "C", answer: "vocation", chinese_answer: "天职", chinese_romanization: "tiānzhí" },
            { option: "D", answer: "occupation", chinese_answer: "职位", chinese_romanization: "zhíwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'avocation' means a hobby or minor occupation." +
            "<br><br>" +
            "(A) 'profession' means a paid occupation, especially one that involves prolonged training and a formal qualification." +
            "<br><br>" +
            "(C) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
            "<br><br>" +
            "(D) 'occupation' means a job or profession.",
        chinese_explanation: "(B) '业余爱好' 一词意味着爱好或次要职业。" +
            "<br><br>" +
            "(A) '职业' 意味着有报酬的职业，特别是需要长期培训和正式资格的职业。" +
            "<br><br>" +
            "(C) '天职' 意味着对特定职业或职业的强烈适应感。" +
            "<br><br>" +
            "(D) '职位' 意味着工作或职业。"
    },
    {
        id: 4,
        question: "The minor __________ between the two groups was quickly resolved before it escalated into a larger conflict.",
        chinese_question: "两组之间的轻微 __________ 很快得到解决，未升级为更大的冲突。",
        answers: [
            { option: "A", answer: "skirmish", chinese_answer: "小冲突", chinese_romanization: "xiǎo chōngtú" },
            { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "negotiation", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
            { option: "D", answer: "collaboration", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'skirmish' means an episode of irregular or unpremeditated fighting, especially between small or outlying parts of armies or fleets." +
            "<br><br>" +
            "(B) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations." +
            "<br><br>" +
            "(C) 'negotiation' means discussion aimed at reaching an agreement." +
            "<br><br>" +
            "(D) 'collaboration' means the action of working with someone to produce or create something.",
        chinese_explanation: "(A) '小冲突' 一词意味着不规则或无预谋的战斗，尤其是军队或舰队的小部分或外围部分之间的战斗。" +
            "<br><br>" +
            "(B) '联盟' 意味着为共同利益而形成的联合或协会，特别是国家或组织之间的联合或协会。" +
            "<br><br>" +
            "(C) '谈判' 意味着旨在达成协议的讨论。" +
            "<br><br>" +
            "(D) '合作' 意味着与某人合作以生产或创造某物的行为。"
    },
    {
        id: 5,
        question: "The novel depicted a __________ where citizens lived under constant surveillance and oppression.",
        chinese_question: "这部小说描绘了一个 __________，公民生活在不断的监视和压迫之下。",
        answers: [
            { option: "A", answer: "utopia", chinese_answer: "乌托邦", chinese_romanization: "wūtǔbāng" },
            { option: "B", answer: "paradise", chinese_answer: "天堂", chinese_romanization: "tiāntáng" },
            { option: "C", answer: "dystopia", chinese_answer: "反乌托邦", chinese_romanization: "fǎn wūtǔbāng" },
            { option: "D", answer: "haven", chinese_answer: "避风港", chinese_romanization: "bìfēnggǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dystopia' means an imagined state or society in which there is great suffering or injustice, typically one that is totalitarian or post-apocalyptic." +
            "<br><br>" +
            "(A) 'utopia' means an imagined place or state of things in which everything is perfect." +
            "<br><br>" +
            "(B) 'paradise' means an ideal or idyllic place or state." +
            "<br><br>" +
            "(D) 'haven' means a place of safety or refuge.",
        chinese_explanation: "(C) '反乌托邦' 一词意味着一个想象中的国家或社会，在那里存在巨大的痛苦或不公正，通常是极权主义或后末世的。" +
            "<br><br>" +
            "(A) '乌托邦' 意味着一个想象中的地方或状态，其中一切都是完美的。" +
            "<br><br>" +
            "(B) '天堂' 意味着一个理想的或田园诗般的地方或状态。" +
            "<br><br>" +
            "(D) '避风港' 意味着一个安全或避难的地方。"
    },
    {
        id: 6,
        question: "Her elaborate __________ at the gala attracted everyone's attention, with intricate braids and sparkling accessories.",
        chinese_question: "她在晚会上复杂的 __________ 吸引了所有人的注意，精致的辫子和闪亮的配饰。",
        answers: [
            { option: "A", answer: "dress", chinese_answer: "礼服", chinese_romanization: "lǐfú" },
            { option: "B", answer: "jewelry", chinese_answer: "珠宝", chinese_romanization: "zhūbǎo" },
            { option: "C", answer: "makeup", chinese_answer: "化妆", chinese_romanization: "huàzhuāng" },
            { option: "D", answer: "coiffure", chinese_answer: "发型", chinese_romanization: "fàxíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'coiffure' means a person's hairstyle, typically an elaborate one." +
            "<br><br>" +
            "(A) 'dress' means a one-piece garment for a woman or girl that covers the body and extends down over the legs." +
            "<br><br>" +
            "(B) 'jewelry' means personal ornaments, such as necklaces, rings, or bracelets." +
            "<br><br>" +
            "(C) 'makeup' means cosmetics such as lipstick or powder applied to the face, used to enhance or alter the appearance.",
        chinese_explanation: "(D) '发型' 一词意味着人的发型，通常是精致的发型。" +
            "<br><br>" +
            "(A) '礼服' 意味着覆盖身体并延伸到腿部的一件衣服，适用于女性或女孩。" +
            "<br><br>" +
            "(B) '珠宝' 意味着个人装饰品，如项链、戒指或手镯。" +
            "<br><br>" +
            "(C) '化妆' 意味着涂在脸上的化妆品，如口红或粉末，用于增强或改变外观。"
    },
    {
        id: 7,
        question: "The actor's remarkable __________ of the character captivated audiences and earned critical acclaim.",
        chinese_question: "演员对角色的显著 __________ 俘获了观众，并赢得了评论家的赞誉。",
        answers: [
            { option: "A", answer: "portrayal", chinese_answer: "表现", chinese_romanization: "biǎoxiàn" },
            { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "D", answer: "interpretation", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'portrayal' means a portrayal or representation of someone or something in a work of art." +
            "<br><br>" +
            "(B) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'imitation' means the action of using someone or something as a model and copying them." +
            "<br><br>" +
            "(D) 'interpretation' means an explanation or way of explaining.",
        chinese_explanation: "(A) '表现' 意味着在艺术作品中对某人或某物的描绘或呈现。" +
            "<br><br>" +
            "(B) '忽视' 意味着不注意；忽略。" +
            "<br><br>" +
            "(C) '模仿' 意味着使用某人或某物作为模型并复制它们的行为。" +
            "<br><br>" +
            "(D) '解释' 意味着解释或解释方式。"
    },
    {
        id: 8,
        question: "The word 'home' often has a positive __________, suggesting warmth, comfort, and family.",
        chinese_question: "“家”这个词通常有积极的 __________，暗示着温暖、舒适和家庭。",
        answers: [
            { option: "A", answer: "denotation", chinese_answer: "外延", chinese_romanization: "wàiyán" },
            { option: "B", answer: "connotation", chinese_answer: "内涵", chinese_romanization: "nèihán" },
            { option: "C", answer: "definition", chinese_answer: "定义", chinese_romanization: "dìngyì" },
            { option: "D", answer: "literal meaning", chinese_answer: "字面意思", chinese_romanization: "zìmiàn yìsi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'connotation' means an idea or feeling that a word invokes in addition to its literal or primary meaning." +
            "<br><br>" +
            "(A) 'denotation' means the literal or primary meaning of a word, in contrast to the feelings or ideas that the word suggests." +
            "<br><br>" +
            "(C) 'definition' means a statement of the exact meaning of a word, especially in a dictionary." +
            "<br><br>" +
            "(D) 'literal meaning' means the most basic or primary meaning of a word or phrase.",
        chinese_explanation: "(B) '内涵' 一词意味着一个词除了其字面或主要意义外所引起的想法或感觉。" +
            "<br><br>" +
            "(A) '外延' 意味着一个词的字面或主要意义，与该词所暗示的感觉或想法形成对比。" +
            "<br><br>" +
            "(C) '定义' 意味着一个词的确切意义的陈述，特别是在字典中。" +
            "<br><br>" +
            "(D) '字面意思' 意味着一个词或短语最基本或主要的意思。"
    },
    {
        id: 9,
        question: "Each community garden member received an __________ of land to cultivate their own vegetables and herbs.",
        chinese_question: "每个社区花园成员都获得了一块 __________ 土地，用于种植自己的蔬菜和草药。",
        answers: [
            { option: "A", answer: "ownership", chinese_answer: "所有权", chinese_romanization: "suǒyǒuquán" },
            { option: "B", answer: "allotment", chinese_answer: "配额", chinese_romanization: "pèi'é" },
            { option: "C", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "D", answer: "acquisition", chinese_answer: "收购", chinese_romanization: "shōugòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'allotment' means a plot of land rented by an individual for growing vegetables or flowers." +
            "<br><br>" +
            "(A) 'ownership' means the act, state, or right of possessing something." +
            "<br><br>" +
            "(C) 'purchase' means the action of buying something." +
            "<br><br>" +
            "(D) 'acquisition' means an asset or object bought or obtained, typically by a library or museum.",
        chinese_explanation: "(B) '配额' 一词意味着个人租用的一块土地，用于种植蔬菜或花卉。" +
            "<br><br>" +
            "(A) '所有权' 意味着拥有某物的行为、状态或权利。" +
            "<br><br>" +
            "(C) '购买' 意味着购买某物的行为。" +
            "<br><br>" +
            "(D) '收购' 意味着图书馆或博物馆购买或获得的资产或物品。"
    },
    {
        id: 10,
        question: "She accepted the job offer with __________, eager to start her new role at the company.",
        chinese_question: "她满怀 __________ 接受了工作邀请，急切地开始在公司担任新角色。",
        answers: [
            { option: "A", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiáng" },
            { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "alacrity", chinese_answer: "乐意", chinese_romanization: "lèyì" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alacrity' means brisk and cheerful readiness." +
            "<br><br>" +
            "(A) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(B) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(C) '乐意' 一词意味着轻快和愉快的准备。" +
            "<br><br>" +
            "(A) '勉强' 意味着不愿意或不情愿做某事。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说话或做事之前暂停的动作。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
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
