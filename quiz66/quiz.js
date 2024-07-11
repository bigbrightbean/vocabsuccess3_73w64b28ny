// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The fall of the empire was attributed to its internal __________, with rampant corruption and a decline in moral values.",
        chinese_question: "帝国的衰落被归因于其内部的 __________，腐败猖獗，道德价值观下降。",
        answers: [
            { option: "A", answer: "purity", chinese_answer: "纯洁", chinese_romanization: "chúnjié" },
            { option: "B", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "decadence", chinese_answer: "堕落", chinese_romanization: "duòluò" },
            { option: "D", answer: "modesty", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decadence' means moral or cultural decline as characterized by excessive indulgence in pleasure or luxury." +
            "<br><br>" +
            "(A) 'purity' means freedom from adulteration or contamination." +
            "<br><br>" +
            "(B) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(D) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities.",
        chinese_explanation: "(C) '堕落' 一词意味着以过度放纵享乐或奢侈为特征的道德或文化衰退。" +
            "<br><br>" +
            "(A) '纯洁' 意味着无杂质或污染。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或做的质量或状态。" +
            "<br><br>" +
            "(D) '谦逊' 意味着对自己能力的评估不过分的质量或状态。"
    },
    {
        id: 2,
        question: "The recent __________ of renewable energy technologies has significantly reduced the reliance on fossil fuels.",
        chinese_question: "最近 __________ 可再生能源技术显著减少了对化石燃料的依赖。",
        answers: [
            { option: "A", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "generation", chinese_answer: "生成", chinese_romanization: "shēngchéng" },
            { option: "C", answer: "cessation", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "D", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'generation' means the production of something." +
            "<br><br>" +
            "(A) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired." +
            "<br><br>" +
            "(C) 'cessation' means the fact or process of ending or being brought to an end." +
            "<br><br>" +
            "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
        chinese_explanation: "(B) '生成' 一词意味着生产某物。" +
            "<br><br>" +
            "(A) '破坏' 意味着对某物造成如此大的损害，以至于它不再存在或无法修复的行动或过程。" +
            "<br><br>" +
            "(C) '停止' 意味着结束或被结束的事实或过程。" +
            "<br><br>" +
            "(D) '下降' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 3,
        question: "He had no __________ about taking on the difficult project, confident in his ability to succeed.",
        chinese_question: "他对接手这个困难的项目没有任何 __________，对自己的成功能力充满信心。",
        answers: [
            { option: "A", answer: "doubts", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "fears", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "C", answer: "hesitations", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "qualms", chinese_answer: "疑虑", chinese_romanization: "yílǜ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'qualms' means an uneasy feeling of doubt, worry, or fear, especially about one's own conduct; a misgiving." +
            "<br><br>" +
            "(A) 'doubts' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(B) 'fears' means an unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat." +
            "<br><br>" +
            "(C) 'hesitations' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(D) '疑虑' 一词意味着对自己行为的疑虑、担忧或恐惧的不安感觉；顾虑。" +
            "<br><br>" +
            "(A) '怀疑' 意味着不确定或缺乏信念的感觉。" +
            "<br><br>" +
            "(B) '恐惧' 意味着由于相信某人或某物是危险的，可能造成痛苦或威胁的令人不快的情绪。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前暂停或犹豫的动作。"
    },
    {
        id: 4,
        question: "The main __________ of the diet are fruits, vegetables, and whole grains.",
        chinese_question: "饮食的主要 __________ 是水果、蔬菜和全谷物。",
        answers: [
            { option: "A", answer: "opponents", chinese_answer: "反对者", chinese_romanization: "fǎnduì zhě" },
            { option: "B", answer: "constituents", chinese_answer: "成分", chinese_romanization: "chéngfèn" },
            { option: "C", answer: "detractors", chinese_answer: "贬低者", chinese_romanization: "biǎndī zhě" },
            { option: "D", answer: "adversaries", chinese_answer: "对手", chinese_romanization: "duìshǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'constituents' means a component part of something." +
            "<br><br>" +
            "(A) 'opponents' means someone who competes against or fights another in a contest, game, or argument." +
            "<br><br>" +
            "(C) 'detractors' means a person who disparages someone or something." +
            "<br><br>" +
            "(D) 'adversaries' means one's opponent in a contest, conflict, or dispute.",
        chinese_explanation: "(B) '成分' 一词意味着某物的组成部分。" +
            "<br><br>" +
            "(A) '反对者' 意味着在竞赛、比赛或争论中与另一方竞争或对抗的人。" +
            "<br><br>" +
            "(C) '贬低者' 意味着贬低某人或某事的人。" +
            "<br><br>" +
            "(D) '对手' 意味着在竞赛、冲突或争端中的对手。"
    },
    {
        id: 5,
        question: "The successful product launch was the __________ of years of research and development.",
        chinese_question: "成功的产品发布是多年研究和开发的__________。",
        answers: [
            { option: "A", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "commencement", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "initiation", chinese_answer: "启动", chinese_romanization: "qǐdòng" },
            { option: "D", answer: "culmination", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'culmination' refers to the highest or climactic point of something, especially as attained after a long time." +
            "<br><br>" +
            "(A) 'beginning' refers to the point in time or space at which something starts." +
            "<br><br>" +
            "(B) 'commencement' refers to the beginning or start." +
            "<br><br>" +
            "(C) 'initiation' refers to the action of beginning something.",
        chinese_explanation: "(D) '顶点' 指的是某物的最高点或高潮点，尤其是在长时间之后达到的。" +
            "<br><br>" +
            "(A) '开始' 指的是某事开始的时间或地点。" +
            "<br><br>" +
            "(B) '开始' 指的是开始或起点。" +
            "<br><br>" +
            "(C) '启动' 指的是开始某事的动作。"
    },
    {
        id: 6,
        question: "The unscrupulous businessman was driven by __________, amassing wealth through dishonest means.",
        chinese_question: "那个不道德的商人被 __________ 驱使，通过不诚实的手段积累财富。",
        answers: [
            { option: "A", answer: "charity", chinese_answer: "慈善", chinese_romanization: "císhàn" },
            { option: "B", answer: "lucre", chinese_answer: "金钱", chinese_romanization: "jīnqián" },
            { option: "C", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "D", answer: "altruism", chinese_answer: "利他主义", chinese_romanization: "lìtā zhǔyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lucre' means money, especially when regarded as sordid or distasteful or gained in a dishonorable way." +
            "<br><br>" +
            "(A) 'charity' means the voluntary giving of help, typically in the form of money, to those in need." +
            "<br><br>" +
            "(C) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(D) 'altruism' means the belief in or practice of disinterested and selfless concern for the well-being of others.",
        chinese_explanation: "(B) '金钱' 一词意味着金钱，尤其是被视为卑鄙或令人反感的，或以不光彩的方式获得的。" +
            "<br><br>" +
            "(A) '慈善' 意味着自愿帮助，通常以金钱形式，给予那些需要帮助的人。" +
            "<br><br>" +
            "(C) '慷慨' 意味着善良和慷慨的品质。" +
            "<br><br>" +
            "(D) '利他主义' 意味着对他人福祉的无私关心的信仰或实践。"
    },
    {
        id: 7,
        question: "The government's __________ of illegal weapons was meant to reduce crime rates in the city.",
        chinese_question: "政府 __________ 非法武器是为了降低城市的犯罪率。",
        answers: [
            { option: "A", answer: "distribution", chinese_answer: "分发", chinese_romanization: "fēnfā" },
            { option: "B", answer: "confiscation", chinese_answer: "没收", chinese_romanization: "mòshōu" },
            { option: "C", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" },
            { option: "D", answer: "production", chinese_answer: "生产", chinese_romanization: "shēngchǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'confiscation' means the action of taking or seizing someone's property with authority; seizure." +
            "<br><br>" +
            "(A) 'distribution' means the action of sharing something out among a number of recipients." +
            "<br><br>" +
            "(C) 'sale' means the exchange of a commodity for money; the action of selling something." +
            "<br><br>" +
            "(D) 'production' means the action of making or manufacturing from components or raw materials, or the process of being so manufactured.",
        chinese_explanation: "(B) '没收' 一词意味着在有权力的情况下拿走或扣押某人的财产；没收。" +
            "<br><br>" +
            "(A) '分发' 意味着在若干接受者之间分发某物的行为。" +
            "<br><br>" +
            "(C) '销售' 意味着以金钱交换商品；销售某物的行为。" +
            "<br><br>" +
            "(D) '生产' 意味着从组件或原材料制造或制造的行为，或正在这样制造的过程。"
    },
    {
        id: 8,
        question: "The two countries reached an __________ on trade policies that benefited both sides, similar to past agreements on environmental protection and mutual defense.",
        chinese_question: "两国在贸易政策上达成了一个 __________，对双方都有利，类似于过去在环境保护和共同防御方面的协议。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "C", answer: "accord", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "D", answer: "dispute", chinese_answer: "争端", chinese_romanization: "zhēngduān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accord' means an official agreement or treaty." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(B) 'disagreement' means lack of consensus or approval." +
            "<br><br>" +
            "(D) 'dispute' means a disagreement or argument.",
        chinese_explanation: "(C) '协议' 一词意味着正式的协议或条约。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(B) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(D) '争端' 意味着分歧或争论。"
    },
    {
        id: 9,
        question: "The politician's speech turned into a __________, exaggerating the opponent's weaknesses to an absurd degree.",
        chinese_question: "政治家的演讲变成了对手弱点的__________，以荒谬的程度夸大。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zānyáng" },
            { option: "B", answer: "caricature", chinese_answer: "讽刺画", chinese_romanization: "fěngcìhuà" },
            { option: "C", answer: "summary", chinese_answer: "概要", chinese_romanization: "gàiyào" },
            { option: "D", answer: "analysis", chinese_answer: "分析", chinese_romanization: "fēnxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'caricature' means an exaggerated and distorted representation of someone or something, often used to highlight their flaws." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(D) 'analysis' means a detailed examination of the elements or structure of something.",
        chinese_explanation: "(B) '讽刺画' 意味着对某人或某事的夸张和扭曲的表现，通常用于突出他们的缺点。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的赞同或钦佩。" +
            "<br><br>" +
            "(C) '概要' 意味着某事的主要要点的简要陈述或说明。" +
            "<br><br>" +
            "(D) '分析' 意味着对某事物的元素或结构的详细检查。"
    },
    {
        id: 10,
        question: "After completing his studies, he earned a __________ degree in computer science.",
        chinese_question: "完成学业后，他获得了计算机科学的 __________ 学位。",
        answers: [
            { option: "A", answer: "master's", chinese_answer: "硕士", chinese_romanization: "shuòshì" },
            { option: "B", answer: "doctorate", chinese_answer: "博士", chinese_romanization: "bóshì" },
            { option: "C", answer: "bachelor", chinese_answer: "学士", chinese_romanization: "xuéshì" },
            { option: "D", answer: "associate", chinese_answer: "副学士", chinese_romanization: "fù xuéshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bachelor' means an undergraduate academic degree awarded by colleges and universities upon completion of a course of study lasting three to seven years." +
            "<br><br>" +
            "(A) 'master's' means an academic degree awarded by universities or colleges upon completion of a course of study demonstrating mastery in a specific field." +
            "<br><br>" +
            "(B) 'doctorate' means the highest level of academic degree." +
            "<br><br>" +
            "(D) 'associate' means a degree granted after a two-year course of study, especially by a community or junior college.",
        chinese_explanation: "(C) '学士' 一词意味着在完成为期三到七年的课程后由学院和大学授予的本科学位。" +
            "<br><br>" +
            "(A) '硕士' 意味着在完成特定领域的课程后由大学或学院授予的学术学位。" +
            "<br><br>" +
            "(B) '博士' 意味着最高级别的学术学位。" +
            "<br><br>" +
            "(D) '副学士' 意味着在两年制课程后授予的学位，特别是由社区学院或初级学院授予的。"
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
