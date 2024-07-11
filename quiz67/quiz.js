// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her boss launched into a __________ about the missed deadline, criticizing every aspect of the project in a harsh and prolonged speech.",
        chinese_question: "她的老板就错过的最后期限发表了 __________，严厉而冗长地批评了项目的每一个方面。",
        answers: [
            { option: "A", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "tirade", chinese_answer: "长篇激烈演说", chinese_romanization: "chángpiān jīliè yǎnshuō" },
            { option: "C", answer: "apology", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" },
            { option: "D", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tirade' means a long, angry speech of criticism or accusation." +
            "<br><br>" +
            "(A) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(C) 'apology' means a regretful acknowledgment of an offense or failure." +
            "<br><br>" +
            "(D) 'praise' means express warm approval or admiration of.",
        chinese_explanation: "(B) '长篇激烈演说' 一词意味着长时间、愤怒的批评或指责演讲。" +
            "<br><br>" +
            "(A) '赞美' 意味着礼貌地表达赞扬或钦佩。" +
            "<br><br>" +
            "(C) '道歉' 意味着对冒犯或失败的遗憾承认。" +
            "<br><br>" +
            "(D) '表扬' 意味着表达温暖的赞同或钦佩。"
    },
    {
        id: 2,
        question: "The court's decision set a __________ that would influence future rulings on similar cases, establishing a new standard.",
        chinese_question: "法院的判决设立了一个 __________，将影响今后类似案件的裁决，确立了新的标准。",
        answers: [
            { option: "A", answer: "novelty", chinese_answer: "新奇", chinese_romanization: "xīnqí" },
            { option: "B", answer: "precedent", chinese_answer: "先例", chinese_romanization: "xiānlì" },
            { option: "C", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "D", answer: "aberration", chinese_answer: "反常", chinese_romanization: "fǎncháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'precedent' means an earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances." +
            "<br><br>" +
            "(A) 'novelty' means the quality of being new, original, or unusual." +
            "<br><br>" +
            "(C) 'anomaly' means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(D) 'aberration' means a departure from what is normal, usual, or expected, typically one that is unwelcome.",
        chinese_explanation: "(B) '先例' 意味着被视为示例或指南的早期事件或行动，在随后的类似情况下考虑。" +
            "<br><br>" +
            "(A) '新奇' 意味着新的、原创的或不寻常的质量。" +
            "<br><br>" +
            "(C) '异常' 意味着偏离标准、正常或预期的事物。" +
            "<br><br>" +
            "(D) '反常' 意味着偏离正常、通常或预期的事物，通常是不受欢迎的。"
    },
    {
        id: 3,
        question: "After years of financial struggles, the company finally declared __________ and began liquidating its assets.",
        chinese_question: "经过多年的财务挣扎，公司最终宣布 __________，并开始清算其资产。",
        answers: [
            { option: "A", answer: "profitability", chinese_answer: "盈利", chinese_romanization: "yínglì" },
            { option: "B", answer: "bankruptcy", chinese_answer: "破产", chinese_romanization: "pòchǎn" },
            { option: "C", answer: "solvency", chinese_answer: "偿付能力", chinese_romanization: "chángfù nénglì" },
            { option: "D", answer: "affluence", chinese_answer: "富裕", chinese_romanization: "fùyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bankruptcy' means the state of being bankrupt, legally declared unable to pay outstanding debts." +
            "<br><br>" +
            "(A) 'profitability' means the ability to yield profit or financial gain." +
            "<br><br>" +
            "(C) 'solvency' means the possession of assets in excess of liabilities; ability to pay one's debts." +
            "<br><br>" +
            "(D) 'affluence' means the state of having a great deal of money; wealth.",
        chinese_explanation: "(B) '破产' 一词意味着破产的状态，依法宣告无法偿还未偿债务。" +
            "<br><br>" +
            "(A) '盈利' 意味着能够产生利润或经济收益。" +
            "<br><br>" +
            "(C) '偿付能力' 意味着资产超过负债的拥有；偿还债务的能力。" +
            "<br><br>" +
            "(D) '富裕' 意味着拥有大量财富的状态；财富。"
    },
    {
        id: 4,
        question: "The heated __________ between the two neighbors over the property line could be heard throughout the entire street.",
        chinese_question: "两位邻居因财产界线而发生的激烈 __________ 在整条街上都能听到。",
        answers: [
            { option: "A", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "B", answer: "altercation", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" },
            { option: "C", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "D", answer: "dialogue", chinese_answer: "对话", chinese_romanization: "duìhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'altercation' means a noisy argument or disagreement, especially in public." +
            "<br><br>" +
            "(A) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(C) 'discussion' means the action or process of talking about something to reach a decision or to exchange ideas." +
            "<br><br>" +
            "(D) 'dialogue' means a conversation between two or more people as a feature of a book, play, or movie.",
        chinese_explanation: "(B) '争吵' 一词意味着吵闹的争论或分歧，尤其是在公共场合。" +
            "<br><br>" +
            "(A) '协议' 意味着意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(C) '讨论' 意味着为达成决定或交换意见而谈论某事的行为或过程。" +
            "<br><br>" +
            "(D) '对话' 意味着作为书籍、戏剧或电影特征的两人或多人之间的对话。"
    },
    {
        id: 5,
        question: "His extreme __________ kept him from spending money even on necessary items, leading to a rather uncomfortable lifestyle.",
        chinese_question: "他极度的 __________ 使他甚至不愿意在必需品上花钱，导致生活相当不舒适。",
        answers: [
            { option: "A", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "B", answer: "parsimony", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "C", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" },
            { option: "D", answer: "expenditure", chinese_answer: "支出", chinese_romanization: "zhīchū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'parsimony' means extreme unwillingness to spend money or use resources." +
            "<br><br>" +
            "(A) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(C) 'wealth' means an abundance of valuable possessions or money." +
            "<br><br>" +
            "(D) 'expenditure' means the action of spending funds.",
        chinese_explanation: "(B) '吝啬' 一词意味着极度不愿意花钱或使用资源。" +
            "<br><br>" +
            "(A) '慷慨' 意味着善良和慷慨的品质。" +
            "<br><br>" +
            "(C) '财富' 意味着丰富的有价值的财产或金钱。" +
            "<br><br>" +
            "(D) '支出' 意味着花费资金的行为。"
    },
    {
        id: 6,
        question: "At the __________ of his career, he was considered the best in his field, receiving numerous awards and accolades.",
        chinese_question: "在他职业生涯的 __________ 时期，他被认为是该领域的最佳，获得了无数奖项和荣誉。",
        answers: [
            { option: "A", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
            { option: "B", answer: "base", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
            { option: "C", answer: "zenith", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
            { option: "D", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zenith' means the highest point reached by a celestial or other object; metaphorically, it refers to the time at which something is most powerful or successful." +
            "<br><br>" +
            "(A) 'nadir' means the lowest point in the fortunes of a person or organization." +
            "<br><br>" +
            "(B) 'base' means the bottom or lowest part of something." +
            "<br><br>" +
            "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
        chinese_explanation: "(C) '顶点' 意味着天体或其他物体达到的最高点；在比喻意义上，它指的是某物最强大或最成功的时间。" +
            "<br><br>" +
            "(A) '最低点' 意味着一个人或组织运势的最低点。" +
            "<br><br>" +
            "(B) '基础' 意味着某物的底部或最低部分。" +
            "<br><br>" +
            "(D) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 7,
        question: "Her innovative ideas earned her critical __________ in the scientific community, with many renowned researchers praising her contributions to the field.",
        chinese_question: "她的创新理念赢得了科学界的高度__________，许多著名研究人员都赞扬了她对这一领域的贡献。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "acclaim", chinese_answer: "赞誉", chinese_romanization: "zànyù" },
            { option: "C", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bù zànchéng" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acclaim' means enthusiastic and public praise. Figuratively, it can mean recognition and praise for one's contributions or achievements." + 
            "<br><br>" + 
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." + 
            "<br><br>" + 
            "(C) 'disapproval' means possession or expression of an unfavorable opinion." + 
            "<br><br>" + 
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '赞誉'一词意味着热情的和公开的赞扬。比喻地，它可以表示对一个人的贡献或成就的认可和赞扬。" + 
            "<br><br>" + 
            "(A) '批评' 意味着基于所感知的缺点或错误对某人或某事的不赞成表达。" + 
            "<br><br>" + 
            "(C) '不赞成' 意味着持有或表达不好的意见。" + 
            "<br><br>" + 
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 8,
        question: "The athlete's doping scandal brought her into __________, casting a shadow over her previous accomplishments.",
        chinese_question: "运动员的兴奋剂丑闻使她陷入__________，给她以前的成就蒙上了一层阴影。",
        answers: [
            { option: "A", answer: "fame", chinese_answer: "名声", chinese_romanization: "míngshēng" },
            { option: "B", answer: "respectability", chinese_answer: "体面", chinese_romanization: "tǐmiàn" },
            { option: "C", answer: "honor", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "D", answer: "disrepute", chinese_answer: "坏名声", chinese_romanization: "huài míngshēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disrepute' refers to the state of being held in low esteem by the public." +
            "<br><br>" +
            "(A) 'fame' refers to the state of being known or talked about by many people, especially on account of notable achievements." +
            "<br><br>" +
            "(B) 'respectability' refers to the quality of being regarded as proper, correct, and socially acceptable." +
            "<br><br>" +
            "(C) 'honor' refers to high respect or great esteem.",
        chinese_explanation: "(D) '坏名声' 指的是被公众低看待的状态。" +
            "<br><br>" +
            "(A) '名声' 指的是因显著成就而被许多人知道或谈论的状态。" +
            "<br><br>" +
            "(B) '体面' 指的是被认为正确、得体和社会可接受的品质。" +
            "<br><br>" +
            "(C) '荣誉' 指的是高度的尊重或伟大的尊敬。"
    },
    {
        id: 9,
        question: "The company's latest __________ of a smaller startup will help expand its technological capabilities.",
        chinese_question: "公司的最新 __________ 一家小型初创公司将有助于扩大其技术能力。",
        answers: [
            { option: "A", answer: "acquisition", chinese_answer: "收购", chinese_romanization: "shōugòu" },
            { option: "B", answer: "loss", chinese_answer: "损失", chinese_romanization: "sǔnshī" },
            { option: "C", answer: "sale", chinese_answer: "出售", chinese_romanization: "chūshòu" },
            { option: "D", answer: "disposal", chinese_answer: "处理", chinese_romanization: "chǔlǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' means an asset or object bought or obtained, typically by a library or museum." +
            "<br><br>" +
            "(B) 'loss' means the state or feeling of grief when deprived of someone or something of value." +
            "<br><br>" +
            "(C) 'sale' means the exchange of a commodity for money." +
            "<br><br>" +
            "(D) 'disposal' means the action or process of getting rid of something.",
        chinese_explanation: "(A) '收购' 一词意味着图书馆或博物馆购买或获得的资产或物品。" +
            "<br><br>" +
            "(B) '损失' 意味着失去有价值的某人或某物的状态或感觉。" +
            "<br><br>" +
            "(C) '出售' 意味着商品与金钱的交换。" +
            "<br><br>" +
            "(D) '处理' 意味着摆脱某物的动作或过程。"
    },
    {
        id: 10,
        question: "The invention of the steam engine marked a significant __________ in the history of transportation.",
        chinese_question: "蒸汽机的发明标志着交通史上的一个重要 __________。",
        answers: [
            { option: "A", answer: "moment", chinese_answer: "时刻", chinese_romanization: "shíkè" },
            { option: "B", answer: "epoch", chinese_answer: "时代", chinese_romanization: "shídài" },
            { option: "C", answer: "minute", chinese_answer: "分钟", chinese_romanization: "fēnzhōng" },
            { option: "D", answer: "instance", chinese_answer: "例子", chinese_romanization: "lìzi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'epoch' means a period of time in history or a person's life, typically one marked by notable events or particular characteristics." +
            "<br><br>" +
            "(A) 'moment' means a very brief period of time." +
            "<br><br>" +
            "(C) 'minute' means a period of time equal to sixty seconds or a sixtieth of an hour." +
            "<br><br>" +
            "(D) 'instance' means an example or single occurrence of something.",
        chinese_explanation: "(B) '时代' 一词意味着历史或个人生活中的一段时间，通常以显著事件或特定特征为标志。" +
            "<br><br>" +
            "(A) '时刻' 意味着一个非常短暂的时间段。" +
            "<br><br>" +
            "(C) '分钟' 意味着等于六十秒或一个小时的六十分之一的一段时间。" +
            "<br><br>" +
            "(D) '例子' 意味着某事的一个例子或单一事件。"
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
