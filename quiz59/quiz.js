// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The religious leader taught his followers the core __________ of their faith, emphasizing compassion and humility.",
        chinese_question: "宗教领袖向他的追随者教授了他们信仰的核心 __________，强调了同情和谦逊。",
        answers: [
            { option: "A", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "B", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "C", answer: "doctrine", chinese_answer: "教义", chinese_romanization: "jiàoyì" },
            { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'doctrine' means a belief or set of beliefs held and taught by a church, political party, or other group." +
            "<br><br>" +
            "(A) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." +
            "<br><br>" +
            "(B) 'theory' means a supposition or a system of ideas intended to explain something." +
            "<br><br>" +
            "(D) 'guess' means an estimate or conjecture.",
        chinese_explanation: "(C) '教义' 一词意味着教会、政党或其他团体持有和教授的信仰或信仰体系。" +
            "<br><br>" +
            "(A) '假设' 意味着在有限证据的基础上提出的假设或解释，作为进一步调查的起点。" +
            "<br><br>" +
            "(B) '理论' 意味着旨在解释某事的假设或思想体系。" +
            "<br><br>" +
            "(D) '猜测' 意味着估计或推测。"
    },
    {
        id: 2,
        question: "His stories were full of __________, always exaggerating his accomplishments to impress others.",
        chinese_question: "他的故事充满了 __________，总是夸大自己的成就以给别人留下深刻印象。",
        answers: [
            { option: "A", answer: "humility", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "modesty", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "braggadocio", chinese_answer: "吹牛", chinese_romanization: "chuīniú" },
            { option: "D", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'braggadocio' means boastful or arrogant behavior." +
            "<br><br>" +
            "(A) 'humility' means a modest or low view of one's own importance; humbleness." +
            "<br><br>" +
            "(B) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities." +
            "<br><br>" +
            "(D) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy.",
        chinese_explanation: "(C) '吹牛' 一词意味着自夸或傲慢的行为。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己重要性的谦逊或低调看法。" +
            "<br><br>" +
            "(B) '谦逊' 意味着在估计自己的能力时表现出的谦逊或中等程度。" +
            "<br><br>" +
            "(D) '真诚' 意味着不装腔作势、欺骗或虚伪的品质。"
    },
    {
        id: 3,
        question: "Her speech was filled with __________, making it clear she was hinting at something without stating it outright.",
        chinese_question: "她的演讲充满了 __________，显然她在暗示某些东西而没有直接说出来。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "innuendo", chinese_answer: "暗示", chinese_romanization: "ànshì" },
            { option: "C", answer: "directness", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "D", answer: "straightforwardness", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'innuendo' means an allusive or oblique remark or hint, typically a suggestive or disparaging one." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(C) 'directness' means the quality of being straightforward and honest." +
            "<br><br>" +
            "(D) 'straightforwardness' means the quality of being easy to understand or honest.",
        chinese_explanation: "(B) '暗示' 一词意味着一种含蓄或间接的评论或暗示，通常是含沙射影或贬低的。" +
            "<br><br>" +
            "(A) '清晰' 意味着清晰的品质，特别是。" +
            "<br><br>" +
            "(C) '直接' 意味着直率和诚实的品质。" +
            "<br><br>" +
            "(D) '坦率' 意味着容易理解或诚实的品质。"
    },
    {
        id: 4,
        question: "The engineer calculated the __________ required to turn the heavy wheel, ensuring it would move smoothly.",
        chinese_question: "工程师计算了转动沉重轮子所需的 __________，确保其平稳移动。",
        answers: [
            { option: "A", answer: "force", chinese_answer: "力", chinese_romanization: "lì" },
            { option: "B", answer: "torque", chinese_answer: "扭矩", chinese_romanization: "niǔjǔ" },
            { option: "C", answer: "pressure", chinese_answer: "压力", chinese_romanization: "yālì" },
            { option: "D", answer: "friction", chinese_answer: "摩擦", chinese_romanization: "mócā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'torque' means a twisting force that tends to cause rotation." +
            "<br><br>" +
            "(A) 'force' means strength or energy as an attribute of physical action or movement." +
            "<br><br>" +
            "(C) 'pressure' means continuous physical force exerted on or against an object by something in contact with it." +
            "<br><br>" +
            "(D) 'friction' means the resistance that one surface or object encounters when moving over another.",
        chinese_explanation: "(B) '扭矩' 一词意味着一种倾向于引起旋转的扭力。" +
            "<br><br>" +
            "(A) '力' 意味着作为物理动作或运动特征的力量或能量。" +
            "<br><br>" +
            "(C) '压力' 意味着由与其接触的物体施加在物体上的连续物理力。" +
            "<br><br>" +
            "(D) '摩擦' 意味着一个表面或物体在移动时遇到的阻力。"
    },
    {
        id: 5,
        question: "The scientist conducted an __________ to determine the composition of the unknown substance, carefully measuring and testing its chemical properties.",
        chinese_question: "科学家进行了一次 __________，以确定未知物质的成分，仔细测量和测试其化学性质。",
        answers: [
            { option: "A", answer: "essay", chinese_answer: "论文", chinese_romanization: "lùnwén" },
            { option: "B", answer: "assay", chinese_answer: "化验", chinese_romanization: "huàyàn" },
            { option: "C", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "analysis", chinese_answer: "分析", chinese_romanization: "fēnxi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'assay' means the testing of a metal or ore to determine its ingredients and quality." +
            "<br><br>" +
            "(A) 'essay' means a short piece of writing on a particular subject." +
            "<br><br>" +
            "(C) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(D) 'analysis' means detailed examination of the elements or structure of something.",
        chinese_explanation: "(B) '化验' 一词意味着测试金属或矿石以确定其成分和质量。" +
            "<br><br>" +
            "(A) '论文' 意味着关于特定主题的简短写作。" +
            "<br><br>" +
            "(C) '假设' 意味着被认为是真实或确定会发生的事情，没有证据。" +
            "<br><br>" +
            "(D) '分析' 意味着对某事物的元素或结构进行详细检查。"
    },
    {
        id: 6,
        question: "The old mansion was a scene of frequent __________, with valuables mysteriously disappearing over the years.",
        chinese_question: "这座古老的豪宅经常发生 __________，多年来贵重物品神秘地消失了。",
        answers: [
            { option: "A", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "thievery", chinese_answer: "盗窃", chinese_romanization: "dàoqiè" },
            { option: "D", answer: "security", chinese_answer: "安全", chinese_romanization: "ānquán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thievery' means the action of stealing another person's property." +
            "<br><br>" +
            "(A) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(B) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(D) 'security' means the state of being free from danger or threat.",
        chinese_explanation: "(C) '盗窃' 一词意味着偷窃他人财产的行为。" +
            "<br><br>" +
            "(A) '慷慨' 意味着善良和慷慨的品质。" +
            "<br><br>" +
            "(B) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(D) '安全' 意味着没有危险或威胁的状态。"
    },
    {
        id: 7,
        question: "The writer's __________ was so precise and clear that readers had no trouble understanding the complex concepts.",
        chinese_question: "作家的 __________ 如此精确和清晰，以至于读者毫不费力地理解复杂的概念。",
        answers: [
            { option: "A", answer: "grammar", chinese_answer: "语法", chinese_romanization: "yǔfǎ" },
            { option: "B", answer: "diction", chinese_answer: "用词", chinese_romanization: "yòngcí" },
            { option: "C", answer: "punctuation", chinese_answer: "标点", chinese_romanization: "biāodiǎn" },
            { option: "D", answer: "spelling", chinese_answer: "拼写", chinese_romanization: "pīnxiě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diction' means the choice and use of words and phrases in speech or writing." +
            "<br><br>" +
            "(A) 'grammar' means the whole system and structure of a language or of languages in general, usually taken as consisting of syntax and morphology." +
            "<br><br>" +
            "(C) 'punctuation' means the marks, such as period, comma, and parentheses, used in writing to separate sentences and their elements and to clarify meaning." +
            "<br><br>" +
            "(D) 'spelling' means the process or activity of writing or naming the letters of a word.",
        chinese_explanation: "(B) '用词' 一词意味着在演讲或写作中选择和使用词语和短语。" +
            "<br><br>" +
            "(A) '语法' 意味着语言或一般语言的整个系统和结构，通常被认为包括句法和形态学。" +
            "<br><br>" +
            "(C) '标点' 意味着在写作中使用的标点符号，如句号、逗号和括号，以分隔句子及其元素并澄清含义。" +
            "<br><br>" +
            "(D) '拼写' 意味着书写或命名单词字母的过程或活动。"
    },
    {
        id: 8,
        question: "Their spontaneous __________ led them to explore the abandoned castle, finding hidden passages and treasures.",
        chinese_question: "他们的即兴 __________ 带领他们探索废弃的城堡，发现了隐藏的通道和宝藏。",
        answers: [
            { option: "A", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "B", answer: "escapade", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" },
            { option: "C", answer: "task", chinese_answer: "任务", chinese_romanization: "rènwù" },
            { option: "D", answer: "chore", chinese_answer: "家务", chinese_romanization: "jiāwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'escapade' means an act or incident involving excitement, daring, or adventure." +
            "<br><br>" +
            "(A) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(C) 'task' means a piece of work to be done or undertaken." +
            "<br><br>" +
            "(D) 'chore' means a routine task, especially a household one.",
        chinese_explanation: "(B) '冒险' 一词意味着涉及兴奋、勇敢或冒险的行为或事件。" +
            "<br><br>" +
            "(A) '常规' 意味着定期遵循的一系列动作；固定程序。" +
            "<br><br>" +
            "(C) '任务' 意味着要完成或承担的一项工作。" +
            "<br><br>" +
            "(D) '家务' 意味着例行的任务，特别是家庭的。"
    },
    {
        id: 9,
        question: "The political parties formed a __________ to address the urgent national issues together, setting aside their differences for the greater good.",
        chinese_question: "各政党组成了一个 __________，共同解决紧迫的国家问题，搁置了彼此的分歧以实现更大的利益。",
        answers: [
            { option: "A", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "C", answer: "coalition", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "D", answer: "rebellion", chinese_answer: "叛乱", chinese_romanization: "pànluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'coalition' means an alliance for combined action, especially a temporary alliance of political parties forming a government or of states." +
            "<br><br>" +
            "(A) 'rivalry' means competition for the same objective or for superiority in the same field." +
            "<br><br>" +
            "(B) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(D) 'rebellion' means an act of violent or open resistance to an established government or ruler.",
        chinese_explanation: "(C) '联盟' 一词意味着为了联合行动而结成的联盟，特别是由政党组成的临时政府或国家联盟。" +
            "<br><br>" +
            "(A) '竞争' 意味着为了同一目标或在同一领域的优越地位而进行的竞争。" +
            "<br><br>" +
            "(B) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(D) '叛乱' 意味着对既定政府或统治者的暴力或公开抵抗行为。"
    },
    {
        id: 10,
        question: "The professor's __________ about the upcoming changes in the curriculum left the students anxious.",
        chinese_question: "教授对课程即将变化的 __________ 让学生感到焦虑。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "obviousness", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "D", answer: "intimation", chinese_answer: "暗示", chinese_romanization: "ànshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intimation' refers to a subtle or indirect hint or suggestion." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being clear and easy to understand." +
            "<br><br>" +
            "(B) 'obviousness' means the state of being easily perceived or understood." +
            "<br><br>" +
            "(C) 'transparency' refers to the condition of being transparent or easily seen through.",
        chinese_explanation: "(D) '暗示' 指的是微妙的或间接的提示或建议。" +
            "<br><br>" +
            "(A) '清晰' 意味着清楚和易于理解的品质。" +
            "<br><br>" +
            "(B) '明显' 意味着易于察觉或理解的状态。" +
            "<br><br>" +
            "(C) '透明' 指的是透明或易于看穿的条件。"
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
