// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The detective's theory seemed __________, but he needed more evidence to prove it.",
        chinese_question: "侦探的理论似乎 __________，但他需要更多的证据来证明。",
        answers: [
            { option: "A", answer: "implausible", chinese_answer: "不可信", chinese_romanization: "bù kěxìn" },
            { option: "B", answer: "plausible", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "C", answer: "unlikely", chinese_answer: "不大可能", chinese_romanization: "bù dà kěnéng" },
            { option: "D", answer: "doubtful", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(A) 'implausible' means not seeming reasonable or probable." +
            "<br><br>" +
            "(C) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(B) '合理' 一词意味着看起来合理或可能的。" +
            "<br><br>" +
            "'不可信' 意味着看起来不合理或不可能的。" +
            "<br><br>" +
            "'不大可能' 意味着不太可能发生、完成或真实的。" +
            "<br><br>" +
            "'怀疑' 意味着对某事感到不确定。"
    },
    {
        id: 2,
        question: "His __________ comment about her failed project was both hurtful and unnecessary.",
        chinese_question: "他对她失败项目的 __________ 评论既伤人又不必要。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "C", answer: "sardonic", chinese_answer: "讽刺", chinese_romanization: "fěngcì" },
            { option: "D", answer: "encouraging", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sardonic' means grimly mocking or cynical." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(D) 'encouraging' means giving someone support or confidence; supportive.",
        chinese_explanation: "(C) '讽刺' 一词意味着冷酷地嘲讽或愤世嫉俗的。" +
            "<br><br>" +
            "'支持' 意味着提供鼓励或情感上的帮助。" +
            "<br><br>" +
            "'真诚' 意味着没有伪装或欺骗；源于真实感情的。" +
            "<br><br>" +
            "'鼓励' 意味着给予某人支持或信心；支持的。"
    },
    {
        id: 3,
        question: "The __________ politician was easily bribed by wealthy businessmen to pass favorable laws.",
        chinese_question: "那个 __________ 的政客很容易被富商贿赂通过有利的法律。",
        answers: [
            { option: "A", answer: "incorruptible", chinese_answer: "廉洁", chinese_romanization: "liánjié" },
            { option: "B", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "venal", chinese_answer: "贪污", chinese_romanization: "tānwū" },
            { option: "D", answer: "principled", chinese_answer: "有原则", chinese_romanization: "yǒu yuánzé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'venal' means showing or motivated by susceptibility to bribery." +
            "<br><br>" +
            "(A) 'incorruptible' means not susceptible to corruption, especially by bribery." +
            "<br><br>" +
            "(B) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'principled' means acting in accordance with morality and showing recognition of right and wrong.",
        chinese_explanation: "(C) '贪污' 意味着表现或受贿动机驱使的。" +
            "<br><br>" +
            "(A) '廉洁' 意味着不易受腐败影响，尤其是受贿的影响。" +
            "<br><br>" +
            "(B) '诚实' 意味着没有欺骗和虚伪；真诚的。" +
            "<br><br>" +
            "(D) '有原则' 意味着按照道德行事，并表现出对是非的认识。"
    },
    {
        id: 4,
        question: "The charity provided __________ to the victims of the natural disaster, offering food, shelter, and medical assistance.",
        chinese_question: "慈善机构为自然灾害的受害者提供了 __________，提供食物、住所和医疗援助。",
        answers: [
            { option: "A", answer: "relief", chinese_answer: "救援", chinese_romanization: "jiùyuán" },
            { option: "B", answer: "resources", chinese_answer: "资源", chinese_romanization: "zīyuán" },
            { option: "C", answer: "strategies", chinese_answer: "策略", chinese_romanization: "cèlüè" },
            { option: "D", answer: "challenges", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'relief' means assistance, especially in the form of food, clothing, or money, given to those in special need or difficulty." +
            "<br><br>" +
            "(B) 'resources' means a stock or supply of money, materials, staff, and other assets that can be drawn on by a person or organization in order to function effectively." +
            "<br><br>" +
            "(C) 'strategies' means a plan of action or policy designed to achieve a major or overall aim." +
            "<br><br>" +
            "(D) 'challenges' means a call to someone to participate in a competitive situation or fight to decide who is superior in terms of ability or strength.",
        chinese_explanation: "(A) '救援' 意味着特别需要或困难的人们所提供的援助，尤其是以食物、衣物或金钱的形式。" +
            "<br><br>" +
            "(B) '资源' 意味着可以被个人或组织利用以有效运作的货币、材料、人员和其他资产的库存或供应。" +
            "<br><br>" +
            "(C) '策略' 意味着为达到主要或整体目标而设计的行动计划或政策。" +
            "<br><br>" +
            "(D) '挑战' 意味着邀请某人参加竞争局势或战斗，以决定谁在能力或力量上更为优越。"
    },
    {
        id: 5,
        question: "Despite numerous attempts to negotiate, the union leaders remained __________, refusing to compromise on any of their demands.",
        chinese_question: "尽管进行了多次谈判，工会领导人仍然 __________，拒绝在任何要求上妥协。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "accommodating", chinese_answer: "乐于助人的", chinese_romanization: "lèyú zhùrén de" },
            { option: "C", answer: "yielding", chinese_answer: "让步的", chinese_romanization: "ràngbù de" },
            { option: "D", answer: "intransigent", chinese_answer: "不妥协的", chinese_romanization: "bù tuǒxié de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intransigent' means unwilling or refusing to change one's views or to agree about something." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'accommodating' means willing to fit in with someone's wishes or needs." +
            "<br><br>" +
            "(C) 'yielding' means giving way under pressure; not hard or rigid.",
        chinese_explanation: "(D) '不妥协的' 意味着不愿意或拒绝改变自己的观点或就某事达成一致。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不断裂的。" +
            "<br><br>" +
            "(B) '乐于助人的' 意味着愿意配合别人的愿望或需要的。" +
            "<br><br>" +
            "(C) '让步的' 意味着在压力下让步的；不坚硬或不刚性的。"
    },
    {
        id: 6,
        question: "His __________ plans for the new company headquarters included a massive fountain and a rooftop garden.",
        chinese_question: "他对新公司总部的 __________ 计划包括一个巨大的喷泉和一个屋顶花园。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "grandiose", chinese_answer: "宏伟", chinese_romanization: "hóngwěi" },
            { option: "C", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "humble", chinese_answer: "低调", chinese_romanization: "dīdiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grandiose' means impressive and imposing in appearance or style, especially pretentiously so." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(B) '宏伟' 一词意味着外观或风格上令人印象深刻和壮观的，尤其是虚张声势的。" +
            "<br><br>" +
            "'谦虚' 意味着对自己的能力或成就没有过高估计或自负。" +
            "<br><br>" +
            "'简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "'低调' 意味着对自己的重要性有或表现出谦虚或低估的。"
    },
    {
        id: 7,
        question: "The politician's career ended in an __________ scandal that destroyed his reputation.",
        chinese_question: "这位政治家的职业生涯因一次 __________ 的丑闻而告终，这次丑闻毁掉了他的声誉。",
        answers: [
            { option: "A", answer: "glorious", chinese_answer: "光荣", chinese_romanization: "guāngróng" },
            { option: "B", answer: "honorable", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "C", answer: "ignominious", chinese_answer: "耻辱", chinese_romanization: "chǐrǔ" },
            { option: "D", answer: "commendable", chinese_answer: "值得称赞", chinese_romanization: "zhídé chēngzàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ignominious' means deserving or causing public disgrace or shame." +
            "<br><br>" +
            "(A) 'glorious' means having, worthy of, or bringing fame or admiration." +
            "<br><br>" +
            "(B) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(D) 'commendable' means deserving praise.",
        chinese_explanation: "(C) '耻辱' 一词意味着应得或导致公开耻辱或羞辱的。" +
            "<br><br>" +
            "'光荣' 意味着拥有、值得或带来名誉或钦佩的。" +
            "<br><br>" +
            "'荣誉' 意味着带来或值得尊敬的。" +
            "<br><br>" +
            "'值得称赞' 意味着值得赞扬的。"
    },
    {
        id: 8,
        question: "In the gallery, modern paintings were __________ with classical sculptures, creating an interesting contrast.",
        chinese_question: "在画廊里，现代画作与古典雕塑被 __________ 放置，形成了有趣的对比。",
        answers: [
            { option: "A", answer: "separated", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
            { option: "B", answer: "juxtaposed", chinese_answer: "并置", chinese_romanization: "bìngzhì" },
            { option: "C", answer: "isolated", chinese_answer: "孤立", chinese_romanization: "gūlì" },
            { option: "D", answer: "detached", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'juxtaposed' means placed close together for contrasting effect." +
            "<br><br>" +
            "(A) 'separated' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'isolated' means far away from other places, buildings, or people; remote." +
            "<br><br>" +
            "(D) 'detached' means separate or disconnected, in particular.",
        chinese_explanation: "(B) '并置' 一词意味着为了对比效果而紧密放置。" +
            "<br><br>" +
            "'分开' 意味着使移动或分开。" +
            "<br><br>" +
            "'孤立' 意味着远离其他地方、建筑或人的；偏远的。" +
            "<br><br>" +
            "'分离' 意味着分离或断开的，特别是。"
    },
    {
        id: 9,
        question: "The __________ glare he gave her sent shivers down her spine.",
        chinese_question: "他 __________ 的瞪视让她不寒而栗。",
        answers: [
            { option: "A", answer: "benevolent", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "B", answer: "kind", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "C", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" },
            { option: "D", answer: "malevolent", chinese_answer: "恶意", chinese_romanization: "èyì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'malevolent' means having or showing a wish to do evil to others." +
            "<br><br>" +
            "(A) 'benevolent' means well-meaning and kindly." +
            "<br><br>" +
            "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(D) '恶意' 一词意味着对他人怀有或表现出恶意的。" +
            "<br><br>" +
            "'仁慈' 意味着善意和友好的。" +
            "<br><br>" +
            "'善良' 意味着具有或表现出友好、慷慨和体贴的性质。" +
            "<br><br>" +
            "'温柔' 意味着具有或表现出温和、善良或温柔的性格。"
    },
    {
        id: 10,
        question: "His __________ behavior towards his boss made his colleagues dislike him, as he always tried too hard to please.",
        chinese_question: "他对老板的 __________ 行为让同事们不喜欢他，因为他总是过分地讨好。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "independent", chinese_answer: "独立", chinese_romanization: "dúlì" },
            { option: "C", answer: "obsequious", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obsequious' means obedient or attentive to an excessive or servile degree." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(B) 'independent' means free from outside control; not depending on another's authority." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '谄媚' 一词意味着过度或奴性地顺从或殷勤的。" +
            "<br><br>" +
            "'自信' 意味着有或表现出自信和有力的性格。" +
            "<br><br>" +
            "'独立' 意味着不受外界控制的；不依赖他人权威的。" +
            "<br><br>" +
            "'冷漠' 意味着没有特别的兴趣或同情；不关心的。"
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
