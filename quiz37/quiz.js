// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The doctor’s __________ approach to patient care resulted in high levels of patient satisfaction and trust.",
        chinese_question: "医生对病人护理的 __________ 方法带来了高度的病人满意度和信任。",
        answers: [
            { option: "A", answer: "compassionate", chinese_answer: "有同情心", chinese_romanization: "yǒu tóngqíngxīn" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "C", answer: "brusque", chinese_answer: "唐突", chinese_romanization: "tángtū" },
            { option: "D", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(C) 'brusque' means abrupt or offhand in speech or manner." +
            "<br><br>" +
            "(D) 'sporadic' means occurring at irregular intervals.",
        chinese_explanation: "(A) '有同情心'一词意味着感受到或表现出对他人的同情和关心。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(C) '唐突' 意味着说话或态度唐突或随便。" +
            "<br><br>" +
            "(D) '零星' 意味着不定期发生。"
    },
    {
        id: 2,
        question: "The charity’s __________ campaign successfully raised funds to support underprivileged communities.",
        chinese_question: "慈善机构的 __________ 活动成功筹集了资金以支持弱势社区。",
        answers: [
            { option: "A", answer: "effective", chinese_answer: "有效", chinese_romanization: "yǒuxiào" },
            { option: "B", answer: "ineffective", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effective' means successful in producing a desired result." +
            "<br><br>" +
            "(B) 'ineffective' means not producing the desired result." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(D) 'sporadic' means occurring at irregular intervals.",
        chinese_explanation: "(A) '有效'一词意味着成功地产生预期结果。" +
            "<br><br>" +
            "(B) '无效' 意味着未产生预期结果。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(D) '零星' 意味着不定期发生。"
    },
    {
        id: 3,
        question: "The price of the luxury car was __________, making it unaffordable for most people.",
        chinese_question: "这辆豪华车的价格 __________，使得大多数人都买不起。",
        answers: [
            { option: "A", answer: "reasonable", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "B", answer: "affordable", chinese_answer: "负担得起", chinese_romanization: "fùdān dé qǐ" },
            { option: "C", answer: "exorbitant", chinese_answer: "过高", chinese_romanization: "guò gāo" },
            { option: "D", answer: "moderate", chinese_answer: "适中", chinese_romanization: "shìzhōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exorbitant' means unreasonably high." +
            "<br><br>" +
            "(A) 'reasonable' means fair and sensible." +
            "<br><br>" +
            "(B) 'affordable' means inexpensive; reasonably priced." +
            "<br><br>" +
            "(D) 'moderate' means average in amount, intensity, quality, or degree.",
        chinese_explanation: "(C) '过高' 一词意味着不合理的高。" +
            "<br><br>" +
            "(A) '合理' 意味着公平和明智的。" +
            "<br><br>" +
            "(B) '负担得起' 意味着价格低廉；价格合理的。" +
            "<br><br>" +
            "(D) '适中' 意味着数量、强度、质量或程度适中的。"
    },
    {
        id: 4,
        question: "The clear skies and mild temperatures were __________ conditions for the outdoor wedding.",
        chinese_question: "晴朗的天空和温和的气温是举行户外婚礼的 __________ 条件。",
        answers: [
            { option: "A", answer: "unfavorable", chinese_answer: "不利", chinese_romanization: "bùlì" },
            { option: "B", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "C", answer: "propitious", chinese_answer: "有利", chinese_romanization: "yǒulì" },
            { option: "D", answer: "ominous", chinese_answer: "不祥", chinese_romanization: "bùxiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'propitious' means giving or indicating a good chance of success; favorable." +
            "<br><br>" +
            "(A) 'unfavorable' means not favorable; likely to lead to failure or have a detrimental effect." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(D) 'ominous' means giving the impression that something bad or unpleasant is going to happen.",
        chinese_explanation: "(C) '有利' 一词意味着给予或表明成功的好机会的；有利的。" +
            "<br><br>" +
            "(A) '不利' 意味着不利的；可能导致失败或产生不利影响的。" +
            "<br><br>" +
            "(B) '敌对' 意味着不友好的；对立的。" +
            "<br><br>" +
            "(D) '不祥' 意味着给人一种即将发生坏事或不愉快的事情的印象。"
    },
    {
        id: 5,
        question: "The __________ dough rose quickly, filling the kitchen with a warm, inviting aroma.",
        chinese_question: "__________ 的面团迅速发酵，使厨房充满了温暖、诱人的香气。",
        answers: [
            { option: "A", answer: "flat", chinese_answer: "扁平", chinese_romanization: "biǎn píng" },
            { option: "B", answer: "yeasty", chinese_answer: "发酵", chinese_romanization: "fājiào" },
            { option: "C", answer: "dense", chinese_answer: "密集", chinese_romanization: "mìjí" },
            { option: "D", answer: "heavy", chinese_answer: "沉重", chinese_romanization: "chénzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yeasty' means relating to or resembling yeast." +
            "<br><br>" +
            "(A) 'flat' means having a level surface; without raised areas or indentations." +
            "<br><br>" +
            "(C) 'dense' means closely compacted in substance." +
            "<br><br>" +
            "(D) 'heavy' means of great weight; difficult to lift or move.",
        chinese_explanation: "(B) '发酵' 一词意味着与酵母有关或类似酵母的。" +
            "<br><br>" +
            "(A) '扁平' 意味着表面平整；没有凸起或凹陷。" +
            "<br><br>" +
            "(C) '密集' 意味着物质紧密压实。" +
            "<br><br>" +
            "(D) '沉重' 意味着重量很大；难以举起或移动。"
    },
    {
        id: 6,
        question: "Her __________ tone made it clear that she expected everyone to follow her orders without question.",
        chinese_question: "她 __________ 的语气表明，她希望每个人都毫无疑问地服从她的命令。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "submissive", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "C", answer: "imperious", chinese_answer: "专横", chinese_romanization: "zhuānhèng" },
            { option: "D", answer: "meek", chinese_answer: "温顺", chinese_romanization: "wēnshùn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'imperious' means assuming power or authority without justification; arrogant and domineering." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive." +
            "<br><br>" +
            "(D) 'meek' means quiet, gentle, and easily imposed on; submissive.",
        chinese_explanation: "(C) '专横' 一词意味着在没有正当理由的情况下假定权力或权威的；傲慢和专横的。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估的。" +
            "<br><br>" +
            "(B) '顺从' 意味着准备服从他人的权威或意志的；温顺地服从或被动的。" +
            "<br><br>" +
            "(D) '温顺' 意味着安静、温和且容易被强加的；顺从的。"
    },
    {
        id: 7,
        question: "The artist was __________ about the details in his paintings, spending hours perfecting each stroke.",
        chinese_question: "这位艺术家对他画作中的细节非常 __________，花了数小时来完善每一笔。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "fastidious", chinese_answer: "挑剔", chinese_romanization: "tiāotì" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fastidious' means very attentive to and concerned about accuracy and detail." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(C) '挑剔' 一词意味着对准确性和细节非常关注和担心。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '疏忽' 意味着在做某事时未能尽适当的注意。"
    },
    {
        id: 8,
        question: "His __________ comments during the meeting offended many of his colleagues.",
        chinese_question: "他在会议上的 __________ 评论冒犯了许多同事。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "B", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "abrasive", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "D", answer: "courteous", chinese_answer: "彬彬有礼", chinese_romanization: "bīnbīn yǒu lǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abrasive' means showing little concern for the feelings of others; harsh." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(C) '粗鲁' 一词意味着对他人的感受很少关心；严厉。" +
            "<br><br>" +
            "(A) '礼貌' 意味着表现出对他人的尊重和考虑的行为。" +
            "<br><br>" +
            "(B) '尊重' 意味着感到或表现出敬意。" +
            "<br><br>" +
            "(D) '彬彬有礼' 意味着礼貌、尊重或考虑周到的方式。"
    },
    {
        id: 9,
        question: "The athlete’s __________ spirit inspired his teammates to give their best during the championship game.",
        chinese_question: "运动员的 __________ 精神激励队友们在冠军赛中尽最大努力。",
        answers: [
            { option: "A", answer: "indomitable", chinese_answer: "不屈不挠", chinese_romanization: "bù qū bù náo" },
            { option: "B", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indomitable' means impossible to defeat." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(C) 'hesitant' means unsure or slow in acting." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest.",
        chinese_explanation: "(A) '不屈不挠'一词意味着无法被打败。" +
            "<br><br>" +
            "(B) '脆弱' 意味着容易破碎或受损。" +
            "<br><br>" +
            "(C) '犹豫' 意味着不确定或行动缓慢。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣。"
    },
    {
        id: 10,
        question: "The CEO’s __________ leadership style fostered a positive and productive work environment within the company.",
        chinese_question: "CEO的 __________ 领导风格在公司内部营造了积极和高效的工作环境。",
        answers: [
            { option: "A", answer: "charismatic", chinese_answer: "富有魅力", chinese_romanization: "fùyǒu mèilì" },
            { option: "B", answer: "authoritarian", chinese_answer: "权威", chinese_romanization: "quánwēi" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'charismatic' means exercising a compelling charm that inspires devotion in others." +
            "<br><br>" +
            "(B) 'authoritarian' means favoring or enforcing strict obedience to authority at the expense of personal freedom." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(A) '富有魅力'一词意味着运用一种激发他人忠诚的吸引力。" +
            "<br><br>" +
            "(B) '权威' 意味着偏爱或强制严格服从权威，以牺牲个人自由为代价。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或他人所做的事情，而没有积极的回应或抵抗。"
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
