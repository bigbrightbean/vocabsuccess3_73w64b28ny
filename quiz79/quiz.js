// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The advertising __________ developed a creative campaign that significantly boosted the client's brand awareness and sales.",
        chinese_question: "广告 __________ 设计了一场创造性的活动，大大提高了客户的品牌知名度和销售额。",
        answers: [
            { option: "A", answer: "office", chinese_answer: "办公室", chinese_romanization: "bàngōngshì" },
            { option: "B", answer: "agency", chinese_answer: "代理", chinese_romanization: "dàilǐ" },
            { option: "C", answer: "department", chinese_answer: "部门", chinese_romanization: "bùmén" },
            { option: "D", answer: "bureau", chinese_answer: "局", chinese_romanization: "jú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'agency' means a business or organization established to provide a particular service, typically one that involves organizing transactions between two other parties." +
            "<br><br>" +
            "(A) 'office' means a room, set of rooms, or building used as a place for commercial, professional, or bureaucratic work." +
            "<br><br>" +
            "(C) 'department' means a division of a large organization such as a government, university, business, or shop, dealing with a specific area of activity." +
            "<br><br>" +
            "(D) 'bureau' means an office or agency that provides services or information to the public.",
        chinese_explanation: "(B) '代理' 一词意味着为提供特定服务而设立的企业或组织，通常涉及组织两方之间的交易。" +
            "<br><br>" +
            "(A) '办公室' 意味着作为商业、专业或官僚工作场所的房间、一套房间或建筑物。" +
            "<br><br>" +
            "(C) '部门' 意味着大组织（如政府、大学、企业或商店）中的一个部门，处理特定活动领域。" +
            "<br><br>" +
            "(D) '局' 意味着向公众提供服务或信息的办公室或机构。"
    },
    {
        id: 2,
        question: "Her __________ was evident in her dedication to volunteering and helping those in need without expecting anything in return.",
        chinese_question: "她的 __________ 体现在她致力于志愿服务和帮助有需要的人，而不期望得到任何回报。",
        answers: [
            { option: "A", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "altruism", chinese_answer: "利他主义", chinese_romanization: "lì tā zhǔyì" },
            { option: "D", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'altruism' means the belief in or practice of disinterested and selfless concern for the well-being of others." +
            "<br><br>" +
            "(A) 'selfishness' means the quality or condition of being selfish." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'greed' means intense and selfish desire for something, especially wealth, power, or food.",
        chinese_explanation: "(C) '利他主义' 一词意味着对他人福祉的无私关心的信仰或实践。" +
            "<br><br>" +
            "(A) '自私' 意味着自私的品质或状态。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '贪婪' 意味着对某物（特别是财富、权力或食物）的强烈和自私的渴望。"
    },
    {
        id: 3,
        question: "Ignoring the warning signs had severe __________ for the company, leading to a major financial loss.",
        chinese_question: "忽视警告信号对公司造成了严重的 __________，导致了重大财务损失。",
        answers: [
            { option: "A", answer: "benefits", chinese_answer: "好处", chinese_romanization: "hǎochù" },
            { option: "B", answer: "rewards", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "C", answer: "consequences", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "D", answer: "improvements", chinese_answer: "改进", chinese_romanization: "gǎijìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'consequences' figuratively means significant effects or outcomes, often negative." +
            "<br><br>" +
            "(A) 'benefits' means an advantage or profit gained from something." +
            "<br><br>" +
            "(B) 'rewards' means things given in recognition of one's service, effort, or achievement." +
            "<br><br>" +
            "(D) 'improvements' means enhancements or betterments.",
        chinese_explanation: "(C) '后果' 在比喻意义上意味着显著的影响或结果，通常是负面的。" +
            "<br><br>" +
            "(A) '好处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(B) '奖励' 意味着因某人的服务、努力或成就而给予的事物。" +
            "<br><br>" +
            "(D) '改进' 意味着改进或改善。"
    },
    {
        id: 4,
        question: "The tightrope walker maintained perfect __________ as he crossed the high wire without falling.",
        chinese_question: "走钢丝者在过高空钢索时保持了完美的 __________，没有掉下来。",
        answers: [
            { option: "A", answer: "imbalance", chinese_answer: "失衡", chinese_romanization: "shīhéng" },
            { option: "B", answer: "motion", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "C", answer: "equilibrium", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
            { option: "D", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equilibrium' means a state of physical balance." +
            "<br><br>" +
            "(A) 'imbalance' means lack of proportion or relation between corresponding things." +
            "<br><br>" +
            "(B) 'motion' means the action or process of moving or being moved." +
            "<br><br>" +
            "(D) 'struggle' means make forceful or violent efforts to get free of restraint or constriction.",
        chinese_explanation: "(C) '平衡' 一词意味着物理平衡状态。" +
            "<br><br>" +
            "(A) '失衡' 意味着对应事物之间缺乏比例或关系。" +
            "<br><br>" +
            "(B) '运动' 意味着移动或被移动的动作或过程。" +
            "<br><br>" +
            "(D) '挣扎' 意味着用力或猛烈地努力摆脱束缚或限制。"
    },
    {
        id: 5,
        question: "His __________ in the meeting were not appreciated by his colleagues, who preferred a more serious approach.",
        chinese_question: "他的__________在会议上不受同事的欢迎，他们更喜欢更严肃的方式。",
        answers: [
            { option: "A", answer: "seriousness", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "antics", chinese_answer: "滑稽动作", chinese_romanization: "huájī dòngzuò" },
            { option: "C", answer: "monologues", chinese_answer: "独白", chinese_romanization: "dúbái" },
            { option: "D", answer: "complaints", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antics' means foolish, outrageous, or amusing behavior. Figuratively, it can mean behavior that is seen as inappropriate or disruptive in a formal setting." +
            "<br><br>" +
            "(A) 'seriousness' means the state or quality of being serious." +
            "<br><br>" +
            "(C) 'monologues' means long speeches by one actor in a play or movie, or as part of a theatrical or broadcast program." +
            "<br><br>" +
            "(D) 'complaints' means expressions of dissatisfaction or annoyance about something.",
        chinese_explanation: "(B) '滑稽动作'一词意味着愚蠢、离谱或有趣的行为。比喻地，它可以表示在正式场合被视为不合适或破坏性的行为。" +
            "<br><br>" +
            "(A) '严肃' 意味着严肃的状态或质量。" +
            "<br><br>" +
            "(C) '独白' 意味着戏剧或电影中一个演员的长篇讲话，或作为戏剧或广播节目的一部分。" +
            "<br><br>" +
            "(D) '抱怨' 意味着对某事表示不满或恼怒。"
    },
    {
        id: 6,
        question: "The discovery of oil was a __________ for the small town, transforming its economy overnight.",
        chinese_question: "石油的发现对这个小镇来说是一个 __________，一夜之间改变了其经济。",
        answers: [
            { option: "A", answer: "bonanza", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "disaster", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "D", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bonanza' means a situation or event that creates a sudden increase in wealth, good fortune, or profits." +
            "<br><br>" +
            "(B) 'disaster' means a sudden event, such as an accident or a natural catastrophe, that causes great damage or loss of life." +
            "<br><br>" +
            "(C) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(D) 'setback' means a reversal or check in progress.",
        chinese_explanation: "(A) '繁荣' 意味着创造财富、好运或利润突然增加的情况或事件。" +
            "<br><br>" +
            "(B) '灾难' 意味着突然发生的事件，如事故或自然灾害，造成巨大损失或生命损失。" +
            "<br><br>" +
            "(C) '常规' 意味着定期遵循的行动顺序；固定程序。" +
            "<br><br>" +
            "(D) '挫折' 意味着进展中的逆转或检查。"
    },
    {
        id: 7,
        question: "The __________ created an engaging campaign that successfully promoted the new product to a wide audience.",
        chinese_question: "__________ 创建了一个吸引人的广告活动，成功地向广泛的观众推广了新产品。",
        answers: [
            { option: "A", answer: "consumer", chinese_answer: "消费者", chinese_romanization: "xiāofèizhě" },
            { option: "B", answer: "advertiser", chinese_answer: "广告商", chinese_romanization: "guǎnggào shāng" },
            { option: "C", answer: "employee", chinese_answer: "雇员", chinese_romanization: "gùyuán" },
            { option: "D", answer: "retailer", chinese_answer: "零售商", chinese_romanization: "língshòu shāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'advertiser' means a person or company that promotes goods or services to the public." +
            "<br><br>" +
            "(A) 'consumer' means a person who purchases goods and services for personal use." +
            "<br><br>" +
            "(C) 'employee' means a person employed for wages or salary, especially at non-executive level." +
            "<br><br>" +
            "(D) 'retailer' means a person or business that sells goods to the public in relatively small quantities for use or consumption rather than for resale.",
        chinese_explanation: "(B) '广告商' 一词意味着向公众推广商品或服务的人或公司。" +
            "<br><br>" +
            "(A) '消费者' 意味着为个人使用购买商品和服务的人。" +
            "<br><br>" +
            "(C) '雇员' 意味着领取工资或薪金的人，特别是在非行政级别上。" +
            "<br><br>" +
            "(D) '零售商' 意味着以相对少量向公众出售商品供使用或消费而非转售的人或企业。"
    },
    {
        id: 8,
        question: "The witness requested __________ to protect his identity and ensure his safety during the trial.",
        chinese_question: "证人要求 __________ 以保护其身份并确保在审判期间的安全。",
        answers: [
            { option: "A", answer: "recognition", chinese_answer: "认同", chinese_romanization: "rèntóng" },
            { option: "B", answer: "anonymity", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
            { option: "C", answer: "publicity", chinese_answer: "宣传", chinese_romanization: "xuānchuán" },
            { option: "D", answer: "fame", chinese_answer: "名声", chinese_romanization: "míngshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anonymity' means the condition of being anonymous." +
            "<br><br>" +
            "(A) 'recognition' means identification of someone or something or person from previous encounters or knowledge." +
            "<br><br>" +
            "(C) 'publicity' means the notice or attention given to someone or something by the media." +
            "<br><br>" +
            "(D) 'fame' means the state of being known or talked about by many people, especially on account of notable achievements.",
        chinese_explanation: "(B) '匿名' 一词意味着匿名的状态。" +
            "<br><br>" +
            "(A) '认同' 意味着从以前的遭遇或知识中识别某人或某事。" +
            "<br><br>" +
            "(C) '宣传' 意味着媒体对某人或某事的关注或注意。" +
            "<br><br>" +
            "(D) '名声' 意味着因显著成就而被许多人知道或谈论的状态。"
    },
    {
        id: 9,
        question: "In the past, the __________ held significant power and influence over the political and social structures of the country.",
        chinese_question: "过去， __________ 对国家的政治和社会结构具有重大权力和影响力。",
        answers: [
            { option: "A", answer: "democracy", chinese_answer: "民主", chinese_romanization: "mínzhǔ" },
            { option: "B", answer: "proletariat", chinese_answer: "无产阶级", chinese_romanization: "wúchǎn jiējí" },
            { option: "C", answer: "aristocracy", chinese_answer: "贵族", chinese_romanization: "guìzú" },
            { option: "D", answer: "bourgeoisie", chinese_answer: "资产阶级", chinese_romanization: "zīchǎn jiējí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aristocracy' means the highest class in certain societies, especially those holding hereditary titles or offices." +
            "<br><br>" +
            "(A) 'democracy' means a system of government by the whole population or all the eligible members of a state, typically through elected representatives." +
            "<br><br>" +
            "(B) 'proletariat' means workers or working-class people, regarded collectively." +
            "<br><br>" +
            "(D) 'bourgeoisie' means the middle class, typically with reference to its perceived materialistic values or conventional attitudes.",
        chinese_explanation: "(C) '贵族' 一词意味着某些社会中的最高阶级，尤其是那些拥有世袭头衔或职务的人。" +
            "<br><br>" +
            "(A) '民主' 意味着全体人民或一个国家的所有合格成员通过选举代表的政府制度。" +
            "<br><br>" +
            "(B) '无产阶级' 意味着工人或工人阶级的集体。" +
            "<br><br>" +
            "(D) '资产阶级' 意味着中产阶级，通常指其被认为的物质主义价值观或传统态度。"
    },
    {
        id: 10,
        question: "Her sense of humour served as an __________ to the stress of her demanding job.",
        chinese_question: "她的幽默感成为她繁忙工作压力的 __________。",
        answers: [
            { option: "A", answer: "catalyst", chinese_answer: "催化剂", chinese_romanization: "cuīhuà jì" },
            { option: "B", answer: "poison", chinese_answer: "毒药", chinese_romanization: "dúyào" },
            { option: "C", answer: "antidote", chinese_answer: "解毒剂", chinese_romanization: "jiědújì" },
            { option: "D", answer: "enhancer", chinese_answer: "增强剂", chinese_romanization: "zēngqiáng jì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'antidote' figuratively means something that counteracts or neutralizes an unpleasant feeling or situation." +
            "<br><br>" +
            "(A) 'catalyst' means a substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change." +
            "<br><br>" +
            "(B) 'poison' means a substance that is capable of causing the illness or death of a living organism when introduced or absorbed." +
            "<br><br>" +
            "(D) 'enhancer' means a substance that increases the activity of an enzyme or other protein.",
        chinese_explanation: "(C) '解毒剂' 在比喻意义上意味着对抗或中和不愉快感觉或情况的事物。" +
            "<br><br>" +
            "(A) '催化剂' 意味着一种增加化学反应速率但自身不发生永久化学变化的物质。" +
            "<br><br>" +
            "(B) '毒药' 意味着一种能够在引入或吸收时引起生物体疾病或死亡的物质。" +
            "<br><br>" +
            "(D) '增强剂' 意味着一种增加酶或其他蛋白质活性的物质。"
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
