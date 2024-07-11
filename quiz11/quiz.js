// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The university launched an __________ program that combined biology, chemistry, and physics to provide a holistic education.",
        chinese_question: "大学启动了一个 __________ 项目，将生物学、化学和物理学结合起来，提供全面的教育。",
        answers: [
            { option: "A", answer: "isolated", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
            { option: "B", answer: "singular", chinese_answer: "单一的", chinese_romanization: "dānyī de" },
            { option: "C", answer: "interdisciplinary", chinese_answer: "跨学科的", chinese_romanization: "kuà xuékē de" },
            { option: "D", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'interdisciplinary' means relating to more than one branch of knowledge." +
            "<br><br>" +
            "(A) 'isolated' means far away from other places, buildings, or people; remote." +
            "<br><br>" +
            "(B) 'singular' means exceptionally good or great; remarkable." +
            "<br><br>" +
            "(D) 'narrow' means limited in extent, amount, or scope.",
        chinese_explanation: "(C) '跨学科的' 一词意味着涉及多个知识领域的。" +
            "<br><br>" +
            "(A) '独立的' 意味着远离其他地方、建筑物或人；偏远的。" +
            "<br><br>" +
            "(B) '单一的' 意味着特别好或伟大的；非凡的。" +
            "<br><br>" +
            "(D) '狭窄的' 意味着在范围、数量或范围上有限的。"
    },
    {
        id: 2,
        question: "The professor's lecture on __________ theories of quantum mechanics was challenging for most students, requiring extensive background knowledge to understand.",
        chinese_question: "教授关于量子力学 __________ 理论的讲座对大多数学生来说是一个挑战，需要广泛的背景知识才能理解。",
        answers: [
            { option: "A", answer: "arcane", chinese_answer: "深奥", chinese_romanization: "shēn'ào" },
            { option: "B", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arcane' means understood by few; mysterious or secret." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(A) '深奥' 一词意味着只有少数人理解的；神秘的或秘密的。" +
            "<br><br>" +
            "(B) '清晰' 意味着容易察觉、理解或解释的。" +
            "<br><br>" +
            "(C) '简单' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '明显' 意味着容易察觉或理解的；清晰的、自明的或显然的。"
    },
    {
        id: 3,
         question: "The __________ customer complained about every aspect of the meal, from the temperature of the soup to the color of the tablecloth.",
        chinese_question: "这位 __________ 的顾客抱怨餐点的每一个细节，从汤的温度到桌布的颜色。",
        answers: [
            { option: "A", answer: "amiable", chinese_answer: "和蔼", chinese_romanization: "hé'ǎi" },
            { option: "B", answer: "complacent", chinese_answer: "自满", chinese_romanization: "zìmǎn" },
            { option: "C", answer: "querulous", chinese_answer: "爱抱怨", chinese_romanization: "ài bàoyuàn" },
            { option: "D", answer: "jovial", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'querulous' means complaining in a petulant or whining manner." +
            "<br><br>" +
            "(A) 'amiable' means having or displaying a friendly and pleasant manner." +
            "<br><br>" +
            "(B) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(D) 'jovial' means cheerful and friendly.",
        chinese_explanation: "(C) '爱抱怨' 一词意味着以小孩子气或抱怨的方式抱怨。" +
            "<br><br>" +
            "(A) '和蔼' 意味着表现出友好和愉快的态度。" +
            "<br><br>" +
            "(B) '自满' 意味着对自己或自己的成就感到自鸣得意或不批判。" +
            "<br><br>" +
            "(D) '快乐' 意味着快乐和友好。"
    },
    {
        id: 4,
        question: "His __________ approach to teaching focused more on minor details than on understanding the big picture.",
        chinese_question: "他 __________ 的教学方法更关注细枝末节，而不是理解整体。",
        answers: [
            { option: "A", answer: "broad", chinese_answer: "宽广", chinese_romanization: "kuānguǎng" },
            { option: "B", answer: "pedantic", chinese_answer: "学究式", chinese_romanization: "xuéjiū shì" },
            { option: "C", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "D", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedantic' means excessively concerned with minor details and rules or with displaying academic learning." +
            "<br><br>" +
            "(A) 'broad' means having an ample distance from side to side; wide." +
            "<br><br>" +
            "(C) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(B) '学究式' 一词意味着过分关注细节和规则或炫耀学术知识的。" +
            "<br><br>" +
            "'宽广' 意味着从一侧到另一侧有很大的距离；宽的。" +
            "<br><br>" +
            "'宽容' 意味着（惩罚或权威人士）宽容、仁慈或容忍的。" +
            "<br><br>" +
            "'灵活' 意味着能够轻松弯曲而不断裂的。"
    },
    {
        id: 5,
        question: "The __________ state of the abandoned building was a sad reminder of its former glory.",
        chinese_question: "这座废弃建筑的 __________ 状态令人惋惜，提醒着人们它昔日的辉煌。",
        answers: [
            { option: "A", answer: "commendable", chinese_answer: "值得称赞", chinese_romanization: "zhídé chēngzàn" },
            { option: "B", answer: "lamentable", chinese_answer: "可悲", chinese_romanization: "kěbēi" },
            { option: "C", answer: "admirable", chinese_answer: "令人钦佩", chinese_romanization: "lìng rén qīnpèi" },
            { option: "D", answer: "impressive", chinese_answer: "令人印象深刻", chinese_romanization: "lìng rén yìnxiàng shēnkè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lamentable' means deserving to be criticized or regretted." +
            "<br><br>" +
            "(A) 'commendable' means deserving praise." +
            "<br><br>" +
            "(C) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(D) 'impressive' means evoking admiration through size, quality, or skill; grand, imposing, or awesome.",
        chinese_explanation: "(B) '可悲' 一词意味着值得批评或遗憾的。" +
            "<br><br>" +
            "'值得称赞' 意味着值得赞扬的。" +
            "<br><br>" +
            "'令人钦佩' 意味着引起或值得尊重和认可的。" +
            "<br><br>" +
            "'令人印象深刻' 意味着通过尺寸、质量或技巧引起钦佩的；宏伟的、壮观的或令人敬畏的。"
    },
    {
        id: 6,
        question: "Malaria is __________ in many tropical regions, posing a constant threat to the population.",
        chinese_question: "疟疾在许多热带地区 __________，对人口构成持续威胁。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
            { option: "B", answer: "eradicated", chinese_answer: "根除", chinese_romanization: "gēnchú" },
            { option: "C", answer: "nonexistent", chinese_answer: "不存在", chinese_romanization: "bù cúnzài" },
            { option: "D", answer: "endemic", chinese_answer: "地方性的", chinese_romanization: "dìfāng xìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'endemic' means regularly found among particular people or in a certain area." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'eradicated' means destroyed completely; put an end to." +
            "<br><br>" +
            "(C) 'nonexistent' means not existing or not real.",
        chinese_explanation: "(D) '地方性的' 一词意味着在特定的人群或地区中经常发现的。" +
            "<br><br>" +
            "(A) '稀有' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '根除' 意味着彻底消灭；结束。" +
            "<br><br>" +
            "(C) '不存在' 意味着不存在或不真实的。"
    },
    {
        id: 7,
        question: "The __________ critic wrote a harsh review of the new restaurant, focusing on every minor flaw in the dishes and service.",
        chinese_question: "这位 __________ 的评论家写了一篇严厉的新餐馆评论，专注于菜肴和服务中的每一个小缺点。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "B", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" },
            { option: "C", answer: "tolerant", chinese_answer: "容忍的", chinese_romanization: "róngrěn de" },
            { option: "D", answer: "censorious", chinese_answer: "挑剔的", chinese_romanization: "tiāotì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'censorious' means severely critical of others." +
            "<br><br>" +
            "(A) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(B) 'forgiving' means ready and willing to forgive." +
            "<br><br>" +
            "(C) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
        chinese_explanation: "(D) '挑剔的' 意味着对他人严厉批评的。" +
            "<br><br>" +
            "(A) '宽容的' 意味着比预期更仁慈或宽容。" +
            "<br><br>" +
            "(B) '宽恕的' 意味着准备好并愿意原谅。" +
            "<br><br>" +
            "(C) '容忍的' 意味着表现出愿意允许存在自己不一定同意的观点或行为。"
    },
    {
        id: 8,
        question: "Her __________ attitude towards the project meant that no changes could be implemented, even when they were clearly necessary.",
        chinese_question: "她对项目的 __________ 态度意味着即使有明显需要的变更也无法实施。",
        answers: [
            { option: "A", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "B", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "C", answer: "adaptable", chinese_answer: "适应的", chinese_romanization: "shìyìng de" },
            { option: "D", answer: "intransigent", chinese_answer: "不妥协的", chinese_romanization: "bù tuǒxié de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intransigent' means unwilling or refusing to change one's views or to agree about something." +
            "<br><br>" +
            "(A) 'cooperative' means involving mutual assistance in working towards a common goal." +
            "<br><br>" +
            "(B) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(C) 'adaptable' means able to adjust to new conditions.",
        chinese_explanation: "(D) '不妥协的' 意味着不愿意或拒绝改变自己的观点或就某事达成一致。" +
            "<br><br>" +
            "(A) '合作的' 意味着在朝着共同目标努力时提供相互帮助的。" +
            "<br><br>" +
            "(B) '灵活的' 意味着能够轻松弯曲而不断裂的。" +
            "<br><br>" +
            "(C) '适应的' 意味着能够适应新环境的。"
    },
    {
        id: 9,
        question: "The negotiations were difficult due to the __________ attitude of the other party, who opposed every suggestion.",
        chinese_question: "由于对方 __________ 的态度，谈判很困难，他们反对每一个建议。",
        answers: [
            { option: "A", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "B", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "antagonistic", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "D", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'antagonistic' means showing or feeling active opposition or hostility toward someone or something." +
            "<br><br>" +
            "(A) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(B) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(C) '敌对' 一词意味着对某人或某事表现或感到积极的反对或敌意。" +
            "<br><br>" +
            "'合作' 意味着在实现共同目标的过程中相互协助。" +
            "<br><br>" +
            "'和谐' 意味着形成一个愉快或一致的整体。" +
            "<br><br>" +
            "'友好' 意味着友善和愉快。"
    },
    {
        id: 10,
        question: "The new law was __________ by citizens, who organized protests to express their opposition.",
        chinese_question: "公民对新法律感到 __________，他们组织了抗议活动表达反对意见。",
        answers: [
            { option: "A", answer: "embraced", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "B", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "D", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'opposed' means in conflict or disagreement with; against." +
            "<br><br>" +
            "(A) 'embraced' means accepted willingly or eagerly." +
            "<br><br>" +
            "(B) 'rejected' means refused to accept or agree to." +
            "<br><br>" +
            "(C) 'welcomed' means greeted with pleasure or approval.",
        chinese_explanation: "(D) '反对' 意味着与之相冲突或不同意；反对。" +
            "<br><br>" +
            "(A) '接受' 意味着愿意或热切地接受。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝接受或同意。" +
            "<br><br>" +
            "(C) '欢迎' 意味着受到欢迎或赞成。"
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
