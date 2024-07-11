// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The student's __________ attitude toward learning, always asking questions and seeking deeper understanding, impressed all his teachers.",
        chinese_question: "学生对学习的 __________ 态度，总是提出问题并寻求更深的理解，给所有老师留下了深刻的印象。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "curious", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "disinterested", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'curious' means eager to know or learn something." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'disinterested' means having no personal interest or bias.",
        chinese_explanation: "(B) '好奇'一词意味着渴望知道或学习某些东西。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '无兴趣' 意味着没有个人兴趣或偏见的。"
    },
    {
        id: 2,
        question: "The detective uncovered the __________ plot to embezzle funds from the charity organization.",
        chinese_question: "侦探揭露了从慈善组织挪用资金的 __________ 阴谋。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "高尚", chinese_romanization: "gāoshàng" },
            { option: "B", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "righteous", chinese_answer: "正义", chinese_romanization: "zhèngyì" },
            { option: "D", answer: "nefarious", chinese_answer: "邪恶", chinese_romanization: "xié'è" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'nefarious' means wicked or criminal." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(B) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(C) 'righteous' means morally right or justifiable.",
        chinese_explanation: "(D) '邪恶' 一词意味着邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '高尚' 意味着有或表现出高道德标准的。" +
            "<br><br>" +
            "(B) '诚实' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(C) '正义' 意味着道德上正确或正当的。"
    },
    {
        id: 3,
        question: "Despite numerous attempts at negotiation, the parties remained __________, refusing to make any concessions.",
        chinese_question: "尽管进行了多次谈判，双方仍然 __________，拒绝做出任何让步。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "B", answer: "compromising", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
            { option: "C", answer: "intransigent", chinese_answer: "不妥协", chinese_romanization: "bù tuǒxié" },
            { option: "D", answer: "yielding", chinese_answer: "让步", chinese_romanization: "ràngbù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intransigent' means unwilling or refusing to change one's views or to agree about something." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'compromising' means willing to make concessions." +
            "<br><br>" +
            "(D) 'yielding' means giving way under pressure; not hard or rigid.",
        chinese_explanation: "(C) '不妥协' 一词意味着不愿意或拒绝改变某人的观点或同意某事。" +
            "<br><br>" +
            "(A) '灵活' 意味着能够轻松弯曲而不折断的。" +
            "<br><br>" +
            "(B) '妥协' 意味着愿意做出让步的。" +
            "<br><br>" +
            "(D) '让步' 意味着在压力下让步的；不坚硬或刚性的。"
    },
    {
        id: 4,
        question: "The student's behavior was found to be __________, and with proper guidance, he quickly improved his conduct.",
        chinese_question: "学生的行为被认为是 __________ 的，在适当的指导下，他很快改善了自己的行为。",
        answers: [
            { option: "A", answer: "incorrigible", chinese_answer: "不可救药", chinese_romanization: "bù kě jiù yào" },
            { option: "B", answer: "unchangeable", chinese_answer: "不可改变", chinese_romanization: "bù kě gǎibiàn" },
            { option: "C", answer: "corrigible", chinese_answer: "可纠正", chinese_romanization: "kě jiūzhèng" },
            { option: "D", answer: "stubborn", chinese_answer: "固执", chinese_romanization: "gùzhí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'corrigible' means capable of being corrected, rectified, or reformed." +
            "<br><br>" +
            "(A) 'incorrigible' means not able to be corrected, improved, or reformed." +
            "<br><br>" +
            "(B) 'unchangeable' means not able to be altered." +
            "<br><br>" +
            "(D) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something.",
        chinese_explanation: "(C) '可纠正' 一词意味着可以被纠正、改正或改革的。" +
            "<br><br>" +
            "(A) '不可救药' 意味着无法被纠正、改进或改革的。" +
            "<br><br>" +
            "(B) '不可改变' 意味着不能被改变的。" +
            "<br><br>" +
            "(D) '固执' 意味着顽固地决定不改变某人的态度或立场。"
    },
    {
        id: 5,
        question: "The __________ power outages in the area were causing frustration among the residents, who never knew when the electricity would be cut off.",
        chinese_question: "该地区的 __________ 停电现象让居民感到沮丧，因为他们从来不知道电力什么时候会被切断。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "B", answer: "regular", chinese_answer: "定期", chinese_romanization: "dìngqī" },
            { option: "C", answer: "continuous", chinese_answer: "连续", chinese_romanization: "liánxù" },
            { option: "D", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(B) 'regular' means arranged in or constituting a constant or definite pattern." +
            "<br><br>" +
            "(C) 'continuous' means forming an unbroken whole; without interruption.",
        chinese_explanation: "(D) '零星' 一词意味着不规则间隔或仅在少数地方发生的；分散或孤立的。" +
            "<br><br>" +
            "(A) '持续' 意味着在一段时间内连续发生的。" +
            "<br><br>" +
            "(B) '定期' 意味着排列成或构成一个恒定或确定的模式的。" +
            "<br><br>" +
            "(C) '连续' 意味着形成一个不间断的整体；没有中断的。"
    },
    {
        id: 6,
        question: "Her __________ approach to investing focuses on low-risk options and long-term gains, avoiding speculative ventures.",
        chinese_question: "她对投资的 __________ 方法侧重于低风险选项和长期收益，避免投机性投资。",
        answers: [
            { option: "A", answer: "liberal", chinese_answer: "自由", chinese_romanization: "zìyóu" },
            { option: "B", answer: "radical", chinese_answer: "激进", chinese_romanization: "jījìn" },
            { option: "C", answer: "conservative", chinese_answer: "保守", chinese_romanization: "bǎoshǒu" },
            { option: "D", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." +
            "<br><br>" +
            "(A) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
            "<br><br>" +
            "(B) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(D) 'innovative' means featuring new methods; advanced and original.",
        chinese_explanation: "(C) '保守' 一词意味着坚持传统态度和价值观，对变化或创新持谨慎态度。" +
            "<br><br>" +
            "(A) '自由' 意味着对新行为或观点持开放态度，并愿意抛弃传统价值观。" +
            "<br><br>" +
            "(B) '激进' 意味着影响某事物的基本性质的；深远或彻底的。" +
            "<br><br>" +
            "(D) '创新' 意味着采用新方法；先进和原创的。"
    },
    {
        id: 7,
        question: "The negotiations were __________ from the start, with both sides unwilling to compromise on key issues.",
        chinese_question: "谈判从一开始就很 __________，双方都不愿在关键问题上妥协。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "B", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "C", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "D", answer: "amicable", chinese_answer: "和睦", chinese_romanization: "hémù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor.",
        chinese_explanation: "(A) '敌对' 一词意味着不友好的；敌对的。" +
            "<br><br>" +
            "(C) '友好' 意味着友好和愉快的。" +
            "<br><br>" +
            "(B) '合作' 意味着在实现共同目标方面相互帮助的。" +
            "<br><br>" +
            "(D) '和睦' 意味着具有友好的精神；没有严重的分歧或怨恨。"
    },
    {
        id: 8,
        question: "The university offers __________ courses in computer science, designed for students who already have a strong foundation in the subject.",
        chinese_question: "这所大学提供 __________ 的计算机科学课程，专为已经具备坚实基础的学生设计。",
        answers: [
            { option: "A", answer: "basic", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
            { option: "B", answer: "elementary", chinese_answer: "初级", chinese_romanization: "chūjí" },
            { option: "C", answer: "advanced", chinese_answer: "高级", chinese_romanization: "gāojí" },
            { option: "D", answer: "introductory", chinese_answer: "入门", chinese_romanization: "rùmén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(A) 'basic' means forming an essential foundation or starting point; fundamental." +
            "<br><br>" +
            "(B) 'elementary' means relating to the rudiments of a subject." +
            "<br><br>" +
            "(D) 'introductory' means serving as an introduction to a subject or topic; basic or preliminary.",
        chinese_explanation: "(C) '高级' 一词意味着在发展或进步上遥遥领先的。" +
            "<br><br>" +
            "(A) '基础' 意味着形成基本基础或起点的；基本的。" +
            "<br><br>" +
            "(B) '初级' 意味着与某一学科的基础知识有关的。" +
            "<br><br>" +
            "(D) '入门' 意味着作为某一主题或话题的介绍；基本的或初步的。"
    },
    {
        id: 9,
        question: "The adventurer's __________ spirit led him to explore the most remote corners of the world, seeking out new challenges and experiences.",
        chinese_question: "这位探险家的 __________ 精神促使他去探索世界上最偏远的角落，寻找新的挑战和经历。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "B", answer: "intrepid", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "C", answer: "docile", chinese_answer: "温顺", chinese_romanization: "wēnshùn" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intrepid' means fearless and adventurous." +
            "<br><br>" +
            "(A) 'timid' means shy or lacking courage." +
            "<br><br>" +
            "(C) 'docile' means obedient or easily managed." +
            "<br><br>" +
            "(D) 'apathetic' means showing little or no emotion or interest.",
        chinese_explanation: "(B) '勇敢'一词意味着无所畏惧和冒险。" +
            "<br><br>" +
            "(A) '胆小' 意味着害羞或缺乏勇气。" +
            "<br><br>" +
            "(C) '温顺' 意味着顺从或容易管理。" +
            "<br><br>" +
            "(D) '冷漠' 意味着表现出很少或没有情感或兴趣。"
    },
    {
        id: 10,
        question: "The historian's __________ analysis of the ancient civilization provided valuable insights into its cultural and social structures.",
        chinese_question: "历史学家对古代文明的 __________ 分析为我们提供了对其文化和社会结构宝贵的见解。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
            { option: "B", answer: "nuanced", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "rudimentary", chinese_answer: "基础的", chinese_romanization: "jīchǔ de" },
            { option: "D", answer: "esoteric", chinese_answer: "深奥的", chinese_romanization: "shēn'ào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nuanced' means characterized by subtle distinctions or variations; showing sensitivity to fine differences." +
            "<br><br>" +
            "(A) 'superficial' means existing or occurring at or on the surface; shallow." +
            "<br><br>" +
            "(C) 'rudimentary' means involving or limited to basic principles." +
            "<br><br>" +
            "(D) 'esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.",
        chinese_explanation: "(B) '微妙的' 意味着具有微妙的区别或变化；对细微差别敏感的。" +
            "<br><br>" +
            "(A) '肤浅的' 意味着存在于表面或在表面；浅薄。" +
            "<br><br>" +
            "(C) '基础的' 意味着涉及或限于基本原理。" +
            "<br><br>" +
            "(D) '深奥的' 意味着只有少数人能够理解或感兴趣的专业知识。"
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
