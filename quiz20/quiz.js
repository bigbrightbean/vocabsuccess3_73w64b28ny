// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ remarks during the meeting were not appreciated by his colleagues.",
        chinese_question: "他在会议上的 __________ 言论没有受到同事们的赞赏。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "flippant", chinese_answer: "轻率", chinese_romanization: "qīngshuài" },
            { option: "D", answer: "earnest", chinese_answer: "认真", chinese_romanization: "rènzhēn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flippant' means not showing a serious or respectful attitude." +
            "<br><br>" +
            "(A) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'earnest' means resulting from or showing sincere and intense conviction.",
        chinese_explanation: "(C) '轻率' 一词意味着不表现出严肃或尊重的态度。" +
            "<br><br>" +
            "(A) '严肃' 意味着性格或态度庄重或深思熟虑的。" +
            "<br><br>" +
            "(B) '尊重' 意味着感到或表现出敬意。" +
            "<br><br>" +
            "(D) '认真' 意味着由真诚和强烈信念产生或表现出的。"
    },
    {
        id: 2,
        question: "The actor's __________ behavior during the interview offended many fans, who were put off by his dismissive attitude.",
        chinese_question: "演员在采访中的 __________ 行为冒犯了许多粉丝，他们对他的轻蔑态度感到反感。",
        answers: [
            { option: "A", answer: "gracious", chinese_answer: "亲切的", chinese_romanization: "qīnqiè de" },
            { option: "B", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "C", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "supercilious", chinese_answer: "高傲的", chinese_romanization: "gāo'ào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'supercilious' means behaving or looking as though one thinks one is superior to others." +
            "<br><br>" +
            "(A) 'gracious' means courteous, kind, and pleasant." +
            "<br><br>" +
            "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(D) '高傲的' 意味着行为或看起来像是认为自己优于他人。" +
            "<br><br>" +
            "(A) '亲切的' 意味着有礼貌的、善良的和愉快的。" +
            "<br><br>" +
            "(B) '礼貌的' 意味着有或表现出对他人的尊重和体贴的行为。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的重要性有或表现出谦虚或低估。"
    },
    {
        id: 3,
        question: "The clear skies and gentle breeze made for an __________ day to have an outdoor wedding.",
        chinese_question: "晴朗的天空和轻柔的微风使今天成为一个 __________ 的日子，适合举行户外婚礼。",
        answers: [
            { option: "A", answer: "unfortunate", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "B", answer: "inauspicious", chinese_answer: "不祥", chinese_romanization: "bùxiáng" },
            { option: "C", answer: "ominous", chinese_answer: "凶兆", chinese_romanization: "xiōngzhào" },
            { option: "D", answer: "auspicious", chinese_answer: "吉祥", chinese_romanization: "jíxiáng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'auspicious' means conducive to success; favorable." +
            "<br><br>" +
            "(A) 'unfortunate' means having or marked by bad fortune; unlucky." +
            "<br><br>" +
            "(B) 'inauspicious' means not conducive to success; unpromising." +
            "<br><br>" +
            "(C) 'ominous' means giving the impression that something bad or unpleasant is going to happen.",
        chinese_explanation: "(D) '吉祥' 一词意味着有助于成功；有利的。" +
            "<br><br>" +
            "(A) '不幸' 意味着有或标志着坏运气；不幸的。" +
            "<br><br>" +
            "(B) '不祥' 意味着不利于成功；没有希望的。" +
            "<br><br>" +
            "(C) '凶兆' 意味着给人一种即将发生不好的或不愉快的事情的印象。"
    },
    {
        id: 4,
        question: "The __________ crowd at the concert made it difficult to hear the performers on stage.",
        chinese_question: "音乐会上的 __________ 人群让人很难听到舞台上的表演者。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "raucous", chinese_answer: "嘈杂", chinese_romanization: "cáozá" },
            { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'raucous' means making or constituting a disturbingly harsh and loud noise." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'silent' means not making or accompanied by any sound.",
        chinese_explanation: "(B) '嘈杂' 一词意味着发出或构成令人不安的刺耳和大声的噪音。" +
            "<br><br>" +
            "(A) '安静' 意味着几乎没有声音。" +
            "<br><br>" +
            "(C) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(D) '沉默' 意味着不发出任何声音或伴随任何声音。"
    },
    {
        id: 5,
        question: "Her __________ grip on her beliefs kept her grounded even in the face of adversity.",
        chinese_question: "她对信念的 __________ 握持使她即使在逆境中也能保持坚定。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "B", answer: "tenacious", chinese_answer: "坚韧", chinese_romanization: "jiānrèn" },
            { option: "C", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "D", answer: "delicate", chinese_answer: "精细", chinese_romanization: "jīngxì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'delicate' means very fine in texture or structure; easily broken or damaged.",
        chinese_explanation: "(B) '坚韧' 一词意味着倾向于牢牢抓住某物；紧贴或紧密附着。" +
            "<br><br>" +
            "(A) '弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(C) '脆弱' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(D) '精细' 意味着质地或结构非常细的；容易破碎或损坏的。"
    },
    {
        id: 6,
        question: "Despite his wealth, the __________ man refused to donate to charity.",
        chinese_question: "尽管他很富有，这个 __________ 的人还是拒绝捐款给慈善机构。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "B", answer: "lavish", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
            { option: "C", answer: "parsimonious", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "D", answer: "extravagant", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'parsimonious' means unwilling to spend money or use resources; stingy or frugal." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(D) 'extravagant' means lacking restraint in spending money or using resources.",
        chinese_explanation: "(C) '吝啬' 一词意味着不愿花钱或使用资源的；吝啬或节俭的。" +
            "<br><br>" +
            "(A) '慷慨' 意味着准备好给予更多的东西，如钱或时间，而不仅仅是必要或预期的。" +
            "<br><br>" +
            "(B) '奢华' 意味着极其富裕、精致或奢侈的。" +
            "<br><br>" +
            "(D) '奢侈' 意味着在花钱或使用资源方面缺乏约束的。"
    },
    {
        id: 7,
        question: "The scientist discovered a __________ virus in the sample that had not yet caused any symptoms.",
        chinese_question: "科学家在样本中发现了一种 __________ 的病毒，这种病毒尚未引起任何症状。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "B", answer: "latent", chinese_answer: "潜伏", chinese_romanization: "qiánfú" },
            { option: "C", answer: "apparent", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "D", answer: "obvious", chinese_answer: "显然", chinese_romanization: "xiǎnrán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'latent' means existing but not yet developed or manifest; hidden or concealed." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(C) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(B) '潜伏' 一词意味着存在但尚未发展或显现的；隐藏或隐蔽的。" +
            "<br><br>" +
            "(A) '活跃' 意味着参与或准备参与体力活动的。" +
            "<br><br>" +
            "(C) '明显' 意味着清晰可见或理解的；显而易见的。" +
            "<br><br>" +
            "(D) '显然' 意味着容易感知或理解的；清楚、自明或显而易见的。"
    },
    {
        id: 8,
        question: "His claim that he could run a marathon in under two hours was clearly __________.",
        chinese_question: "他声称自己可以在两小时内跑完马拉松显然是 __________ 的。",
        answers: [
            { option: "A", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "B", answer: "factual", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "hyperbolic", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" },
            { option: "D", answer: "accurate", chinese_answer: "准确", chinese_romanization: "zhǔnquè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hyperbolic' means exaggerated statements or claims not meant to be taken literally." +
            "<br><br>" +
            "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(B) 'factual' means concerned with what is actually the case." +
            "<br><br>" +
            "(D) 'accurate' means correct in all details; exact.",
        chinese_explanation: "(C) '夸张' 一词意味着夸大的陈述或主张，不应被字面理解。" +
            "<br><br>" +
            "(A) '现实' 意味着对可以实现或预期的事情有或表现出明智和实际的想法。" +
            "<br><br>" +
            "(B) '事实' 意味着与实际情况有关的。" +
            "<br><br>" +
            "(D) '准确' 意味着在所有细节上正确的；精确的。"
    },
    {
        id: 9,
        question: "He was __________ by nature, rarely speaking unless absolutely necessary.",
        chinese_question: "他天性 __________，除非绝对必要，否则很少说话。",
        answers: [
            { option: "A", answer: "talkative", chinese_answer: "健谈", chinese_romanization: "jiàntán" },
            { option: "B", answer: "taciturn", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" },
            { option: "C", answer: "loquacious", chinese_answer: "多话", chinese_romanization: "duōhuà" },
            { option: "D", answer: "chatty", chinese_answer: "爱闲聊", chinese_romanization: "ài xiánliáo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(A) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(C) 'loquacious' means tending to talk a great deal; talkative." +
            "<br><br>" +
            "(D) 'chatty' means fond of talking in an easy, informal way.",
        chinese_explanation: "(B) '沉默寡言' 一词意味着言语保守或不善于交流；说得很少。" +
            "<br><br>" +
            "(A) '健谈' 意味着喜欢或倾向于说话。" +
            "<br><br>" +
            "(C) '多话' 意味着倾向于说很多话；健谈的。" +
            "<br><br>" +
            "(D) '爱闲聊' 意味着喜欢以轻松、非正式的方式说话。"
    },
    {
        id: 10,
        question: "He was an __________ gambler, unable to resist the lure of the casino.",
        chinese_question: "他是一个 __________ 的赌徒，无法抵挡赌场的诱惑。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" },
            { option: "B", answer: "inveterate", chinese_answer: "根深蒂固", chinese_romanization: "gēnshēndìgù" },
            { option: "C", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "D", answer: "infrequent", chinese_answer: "罕见", chinese_romanization: "hǎnjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inveterate' means having a particular habit, activity, or interest that is long-established and unlikely to change." +
            "<br><br>" +
            "(A) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'infrequent' means not occurring often.",
        chinese_explanation: "(B) '根深蒂固' 一词意味着有一个特别的习惯、活动或兴趣，是长期建立且不太可能改变的。" +
            "<br><br>" +
            "(A) '偶尔' 意味着不经常和不规则地发生、出现或完成。" +
            "<br><br>" +
            "(C) '零星' 意味着在不规则的间隔或仅在少数地方发生；分散或孤立的。" +
            "<br><br>" +
            "(D) '罕见' 意味着不经常发生。"
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
