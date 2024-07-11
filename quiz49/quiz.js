// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist's __________ dedication to research led to groundbreaking discoveries in the field of genetics.",
        chinese_question: "科学家对研究的 __________ 奉献导致了遗传学领域的突破性发现。",
        answers: [
            { option: "A", answer: "unwavering", chinese_answer: "坚定", chinese_romanization: "jiāndìng" },
            { option: "B", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care.",
        chinese_explanation: "(A) '坚定'一词意味着稳定或坚决；不动摇。" +
            "<br><br>" +
            "(B) '零星' 意味着不定期发生。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未能妥善照顾。"
    },
    {
        id: 2,
        question: "The __________ children ran around the restaurant, causing a disturbance for the other diners.",
        chinese_question: "那些 __________ 的孩子在餐厅里跑来跑去，给其他食客造成了干扰。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "C", answer: "obstreperous", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "D", answer: "well-behaved", chinese_answer: "举止得当", chinese_romanization: "jǔzhǐdédāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obstreperous' means noisy and difficult to control." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's authority." +
            "<br><br>" +
            "(B) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(D) 'well-behaved' means conducting oneself in an appropriate manner.",
        chinese_explanation: "(C) '喧闹' 一词意味着吵闹且难以控制的。" +
            "<br><br>" +
            "(A) '顺从' 意味着遵从或愿意遵从命令或要求；服从他人的权威。" +
            "<br><br>" +
            "(B) '安静' 意味着几乎没有声音。" +
            "<br><br>" +
            "(D) '举止得当' 意味着以适当的方式表现自己。"
    },
    {
        id: 3,
        question: "After a heavy lunch, I felt too __________ to do any productive work for the rest of the afternoon.",
        chinese_question: "吃完丰盛的午餐后，我感到太 __________ 以至于整个下午都没有做任何有效的工作。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "B", answer: "active", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "C", answer: "lively", chinese_answer: "活泼", chinese_romanization: "huópō" },
            { option: "D", answer: "sluggish", chinese_answer: "迟缓", chinese_romanization: "chíhuǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(C) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(D) '迟缓' 一词意味着行动缓慢或不活跃的。" +
            "<br><br>" +
            "(A) '精力充沛' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '活跃' 意味着参与或准备参与体力充沛的追求。" +
            "<br><br>" +
            "(C) '活泼' 意味着充满活力和能量的；活跃和外向的。"
    },
    {
        id: 4,
        question: "Her __________ analysis of the market trends helped the company make profitable investments.",
        chinese_question: "她对市场趋势的 __________ 分析帮助公司做出了有利可图的投资。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
            { option: "B", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "astute", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
            { option: "D", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment." +
            "<br><br>" +
            "(B) 'ignorant' means lacking knowledge or awareness in general." +
            "<br><br>" +
            "(D) 'naive' means (of a person or action) showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(C) '精明' 一词意味着具有或表现出能够准确评估形势或人并利用这一优势的能力。" +
            "<br><br>" +
            "(A) '愚蠢' 意味着缺乏良好判断力的。" +
            "<br><br>" +
            "(B) '无知' 意味着总体上缺乏知识或意识的。" +
            "<br><br>" +
            "(D) '天真' 意味着（指人或行为）表现出缺乏经验、智慧或判断力的。"
    },
    {
        id: 5,
        question: "Despite his significant contributions to the project, he remained __________ and never sought recognition for his efforts.",
        chinese_question: "尽管他对项目做出了重要贡献，他仍然很 __________，从未寻求对其努力的认可。",
        answers: [
            { option: "A", answer: "arrogant", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
            { option: "B", answer: "boastful", chinese_answer: "自夸", chinese_romanization: "zìkuā" },
            { option: "C", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "D", answer: "vain", chinese_answer: "虚荣", chinese_romanization: "xūróng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(A) 'arrogant' means having or revealing an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(B) 'boastful' means showing excessive pride and self-satisfaction in one's achievements, possessions, or abilities." +
            "<br><br>" +
            "(D) 'vain' means having or showing an excessively high opinion of one's appearance, abilities, or worth.",
        chinese_explanation: "(C) '谦虚' 一词意味着对自己的能力或成就没有自大的估计。" +
            "<br><br>" +
            "(A) '傲慢' 意味着拥有或表现出对自己重要性或能力的夸大看法。" +
            "<br><br>" +
            "(B) '自夸' 意味着对自己的成就、财产或能力表现出过分的自豪和满足。" +
            "<br><br>" +
            "(D) '虚荣' 意味着对自己的外貌、能力或价值有过分高的评价。"
    },
    {
        id: 6,
        question: "The company's __________ marketing strategy aimed to capture a larger market share by outspending competitors on advertising.",
        chinese_question: "公司的 __________ 营销策略旨在通过在广告上的超额支出来占据更大的市场份额。",
        answers: [
            { option: "A", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "B", answer: "aggressive", chinese_answer: "侵略性", chinese_romanization: "qīnlüè xìng" },
            { option: "C", answer: "moderate", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression." +
            "<br><br>" +
            "(A) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(C) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '侵略性' 一词意味着准备或可能攻击或对抗；由侵略引起的或表现出来的。" +
            "<br><br>" +
            "(A) '被动' 意味着接受或允许发生的事情或他人做的事情，而不积极回应或抵抗。" +
            "<br><br>" +
            "(C) '温和' 意味着在数量、强度、质量或程度上是平均的。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 7,
        question: "The __________ rituals of the ancient sect were understood only by a few scholars, requiring years of study to grasp their full meaning.",
        chinese_question: "古代教派的 __________ 仪式只有少数学者能够理解，需要多年研究才能掌握其全部意义。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "arcane", chinese_answer: "神秘", chinese_romanization: "shénmì" },
            { option: "D", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arcane' means understood by few; mysterious or secret." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'transparent' means easy to perceive or detect.",
        chinese_explanation: "(C) '神秘' 一词意味着只有少数人理解的；神秘的或秘密的。" +
            "<br><br>" +
            "(A) '常见' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '透明' 意味着容易察觉或检测到的。"
    },
    {
        id: 8,
        question: "The CEO's __________ leadership style, always looking forward and planning strategically, inspired confidence and loyalty among the employees.",
        chinese_question: "CEO 的 __________ 领导风格，总是展望未来并进行战略规划，激发了员工的信心和忠诚。",
        answers: [
            { option: "A", answer: "autocratic", chinese_answer: "专制", chinese_romanization: "zhuānzhì" },
            { option: "B", answer: "visionary", chinese_answer: "有远见", chinese_romanization: "yǒu yuǎnjiàn" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'visionary' means thinking about or planning the future with imagination or wisdom." +
            "<br><br>" +
            "(A) 'autocratic' means taking no account of other people's wishes or opinions." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(B) '有远见'一词意味着以想象力或智慧思考或规划未来。" +
            "<br><br>" +
            "(A) '专制' 意味着不考虑他人的愿望或意见。" +
            "<br><br>" +
            "(C) '冷漠' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '混乱' 意味着完全混乱和无序的状态。"
    },
    {
        id: 9,
        question: "The environmentalist's __________ efforts, which included organizing clean-up drives and advocating for policy changes, significantly improved the local ecosystem.",
        chinese_question: "环保主义者的 __________ 努力，包括组织清洁活动和倡导政策变革，显著改善了当地的生态系统。",
        answers: [
            { option: "A", answer: "halfhearted", chinese_answer: "半心半意", chinese_romanization: "bàn xīn bàn yì" },
            { option: "B", answer: "dedicated", chinese_answer: "投入", chinese_romanization: "tóurù" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dedicated' means devoted to a task or purpose." +
            "<br><br>" +
            "(A) 'halfhearted' means without enthusiasm or energy." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens without active response.",
        chinese_explanation: "(B) '投入'一词意味着致力于某个任务或目标。" +
            "<br><br>" +
            "(A) '半心半意' 意味着没有热情或能量。" +
            "<br><br>" +
            "(C) '冷漠' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情而没有积极反应。"
    },
    {
        id: 10,
        question: "The __________ tech startup showed great promise despite its small size and limited resources.",
        chinese_question: "这家 __________ 的科技初创公司尽管规模小、资源有限，但显示出了巨大的潜力。",
        answers: [
            { option: "A", answer: "established", chinese_answer: "成立已久", chinese_romanization: "chénglì yǐjiǔ" },
            { option: "B", answer: "ancient", chinese_answer: "古老", chinese_romanization: "gǔlǎo" },
            { option: "C", answer: "nascent", chinese_answer: "新兴", chinese_romanization: "xīnxīng" },
            { option: "D", answer: "old", chinese_answer: "老旧", chinese_romanization: "lǎojiù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nascent' means just coming into existence and beginning to display signs of future potential." +
            "<br><br>" +
            "(A) 'established' means having been in existence for a long time and therefore recognized and generally accepted." +
            "<br><br>" +
            "(B) 'ancient' means belonging to the very distant past and no longer in existence." +
            "<br><br>" +
            "(D) 'old' means having lived for a long time; no longer young.",
        chinese_explanation: "(C) '新兴' 一词意味着刚刚出现并开始显示出未来潜力的。" +
            "<br><br>" +
            "(A) '成立已久' 意味着存在了很长时间并因此被认可和普遍接受的。" +
            "<br><br>" +
            "(B) '古老' 意味着属于非常遥远的过去且不再存在的。" +
            "<br><br>" +
            "(D) '老旧' 意味着已经生活了很长时间的；不再年轻的。"
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
