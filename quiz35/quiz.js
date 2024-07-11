// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The workers were required to wear protective gear due to the __________ nature of the chemicals they were handling.",
        chinese_question: "由于所处理化学品的 __________ 性质，工人们必须穿戴防护装备。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "B", answer: "hazardous", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
            { option: "C", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "D", answer: "secure", chinese_answer: "安全", chinese_romanization: "ānquán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hazardous' means risky; dangerous." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(C) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'secure' means fixed or fastened so as not to give way, become loose, or be lost.",
        chinese_explanation: "(B) '危险' 一词意味着有风险的；危险的。" +
            "<br><br>" +
            "(A) '安全' 意味着受到保护或不暴露于危险或风险；不太可能受到伤害或丢失。" +
            "<br><br>" +
            "(C) '无害' 意味着不能或不太可能造成伤害。" +
            "<br><br>" +
            "(D) '安全' 意味着固定或牢固，以免让步、变松或丢失。"
    },
    {
        id: 2,
        question: "The novel is written from an __________ point of view, where the narrator knows everything about all the characters.",
        chinese_question: "这部小说是从 __________ 的角度写的，叙述者了解所有角色的一切。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "unaware", chinese_answer: "不知情", chinese_romanization: "bù zhī qíng" },
            { option: "C", answer: "omniscient", chinese_answer: "全知", chinese_romanization: "quánzhī" },
            { option: "D", answer: "uninformed", chinese_answer: "不知情", chinese_romanization: "bù zhī qíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'omniscient' means knowing everything." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(B) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(D) 'uninformed' means not having or showing awareness or understanding of the facts.",
        chinese_explanation: "(C) '全知' 一词意味着知道一切。" +
            "<br><br>" +
            "(A) '无知' 意味着一般缺乏知识或意识的；未受教育的或不成熟的。" +
            "(B) '不知情' 意味着不了解某种情况或事实的。" +
            "<br><br>" +
            "(D) '不知情' 意味着没有或不表现出对事实的了解或理解的。"
    },
    {
        id: 3,
        question: "The new employee was __________, rarely speaking during meetings or social events.",
        chinese_question: "新员工很 __________，在会议或社交活动中很少说话。",
        answers: [
            { option: "A", answer: "talkative", chinese_answer: "健谈", chinese_romanization: "jiàntán" },
            { option: "B", answer: "taciturn", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" },
            { option: "C", answer: "garrulous", chinese_answer: "话多", chinese_romanization: "huà duō" },
            { option: "D", answer: "chatty", chinese_answer: "闲聊", chinese_romanization: "xiánliáo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(A) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(C) 'garrulous' means excessively talkative, especially on trivial matters." +
            "<br><br>" +
            "(D) 'chatty' means fond of talking in an easy, informal way.",
        chinese_explanation: "(B) '沉默寡言' 一词意味着在言语上保守或不善于交流的；说得很少的。" +
            "<br><br>" +
            "(A) '健谈' 意味着喜欢或善于谈话的。" +
            "<br><br>" +
            "(C) '话多' 意味着特别是在琐事上过度谈话的。" +
            "<br><br>" +
            "(D) '闲聊' 意味着喜欢以轻松、非正式的方式谈话的。"
    },
    {
        id: 4,
        question: "Despite his age, he maintained a __________ enthusiasm and energy that inspired everyone around him.",
        chinese_question: "尽管年事已高，他仍保持着 __________ 的热情和活力，激励着周围的每一个人。",
        answers: [
            { option: "A", answer: "aged", chinese_answer: "年老", chinese_romanization: "niánlǎo" },
            { option: "B", answer: "youthful", chinese_answer: "年轻", chinese_romanization: "niánqīng" },
            { option: "C", answer: "old", chinese_answer: "年老", chinese_romanization: "niánlǎo" },
            { option: "D", answer: "decrepit", chinese_answer: "衰老", chinese_romanization: "shuāilǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'youthful' means having the appearance, freshness, vigor, or other qualities of youth." +
            "<br><br>" +
            "(A) 'aged' means having lived for a long time; no longer young." +
            "<br><br>" +
            "(C) 'old' means having lived for a long time; no longer young." +
            "<br><br>" +
            "(D) 'decrepit' means elderly and infirm; worn out or ruined because of age or neglect.",
        chinese_explanation: "(B) '年轻' 一词意味着具有年轻的外表、新鲜、活力或其他特质。" +
            "<br><br>" +
            "(A) '年老' 意味着已经活了很长时间；不再年轻。" +
            "<br><br>" +
            "(C) '年老' 意味着已经活了很长时间；不再年轻。" +
            "<br><br>" +
            "(D) '衰老' 意味着年老体弱；因年龄或忽视而破旧或毁坏的。"
    },
    {
        id: 5,
        question: "The critic's __________ review of the film was filled with harsh and biting remarks.",
        chinese_question: "评论家对这部电影的 __________ 评论充满了尖刻和辛辣的言辞。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友善", chinese_romanization: "yǒushàn" },
            { option: "B", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "C", answer: "vitriolic", chinese_answer: "尖刻", chinese_romanization: "jiānkè" },
            { option: "D", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vitriolic' means filled with bitter criticism or malice." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '尖刻' 一词意味着充满苦涩的批评或恶意。" +
            "<br><br>" +
            "(A) '友善' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(B) '温和' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(D) '温柔' 意味着具有或表现出温和、友好或温柔的气质或性格。"
    },
    {
        id: 6,
        question: "The __________ music played at the funeral added to the somber atmosphere.",
        chinese_question: "葬礼上播放的 __________ 音乐增加了庄严的气氛。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "欢快", chinese_romanization: "huānkuài" },
            { option: "B", answer: "lively", chinese_answer: "活泼", chinese_romanization: "huópō" },
            { option: "C", answer: "lugubrious", chinese_answer: "悲哀", chinese_romanization: "bēi'āi" },
            { option: "D", answer: "joyful", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lugubrious' means looking or sounding sad and dismal." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'joyful' means feeling, expressing, or causing great pleasure and happiness.",
        chinese_explanation: "(C) '悲哀' 一词意味着看起来或听起来悲伤和阴郁的。" +
            "<br><br>" +
            "(A) '欢快' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(B) '活泼' 意味着充满生命和能量的；活跃和外向的。" +
            "<br><br>" +
            "(D) '快乐' 意味着感到、表达或引起极大快乐和幸福的。"
    },
    {
        id: 7,
        question: "His __________ quest to build a utopian society was admired but deemed impractical by many.",
        chinese_question: "他建立乌托邦社会的 __________ 追求令人钦佩，但被许多人认为是不切实际的。",
        answers: [
            { option: "A", answer: "practical", chinese_answer: "实际", chinese_romanization: "shíjì" },
            { option: "B", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "C", answer: "pragmatic", chinese_answer: "务实", chinese_romanization: "wùshí" },
            { option: "D", answer: "quixotic", chinese_answer: "理想主义", chinese_romanization: "lǐxiǎng zhǔyì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
            "<br><br>" +
            "(A) 'practical' means of or concerned with the actual doing or use of something rather than with theory and ideas." +
            "<br><br>" +
            "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(C) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
        chinese_explanation: "(D) '理想主义' 一词意味着过分理想化；不现实和不切实际的。" +
            "<br><br>" +
            "(A) '实际' 意味着与实际操作或使用有关的，而不是与理论和思想有关的。" +
            "<br><br>" +
            "(B) '现实' 意味着对可以实现或期望的事情有或表现出一种明智和实际的想法。" +
            "<br><br>" +
            "(C) '务实' 意味着以实际而非理论的考虑方式处理事情。"
    },
    {
        id: 8,
        question: "Her __________ skills were essential in solving the complex problem presented by the project.",
        chinese_question: "她的 __________ 技能对于解决项目中提出的复杂问题至关重要。",
        answers: [
            { option: "A", answer: "creative", chinese_answer: "创造性", chinese_romanization: "chuàngzàoxìng" },
            { option: "B", answer: "intuitive", chinese_answer: "直觉", chinese_romanization: "zhíjué" },
            { option: "C", answer: "analytical", chinese_answer: "分析", chinese_romanization: "fēnxī" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'analytical' means relating to or using analysis or logical reasoning." +
            "<br><br>" +
            "(A) 'creative' means relating to or involving the use of the imagination or original ideas to create something." +
            "<br><br>" +
            "(B) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '分析' 一词意味着与分析或逻辑推理有关的。" +
            "<br><br>" +
            "(A) '创造性' 意味着与使用想象力或原创想法创造某物有关的。" +
            "<br><br>" +
            "(B) '直觉' 意味着使用或基于即使没有有意识的推理也认为是真实的；本能的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 9,
        question: "The artist's work was __________, going beyond ordinary human experience and evoking a sense of the sublime.",
        chinese_question: "这位艺术家的作品是 __________ 的，超越了普通人的经验，唤起了崇高的感觉。",
        answers: [
            { option: "A", answer: "transcendent", chinese_answer: "超越", chinese_romanization: "chāoyuè" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "C", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'transcendent' means beyond or above the range of normal or merely physical human experience; surpassing the ordinary." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(A) '超越' 一词意味着超出或在普通或仅仅是物理人类经验范围之上；超凡的。" +
            "<br><br>" +
            "(C) '平凡' 意味着缺乏兴趣或兴奋；沉闷的。" +
            "<br><br>" +
            "(B) '平庸' 意味着质量只是一般的；不太好的。" +
            "<br><br>" +
            "(D) '琐碎' 意味着没有价值或重要性的。"
    },
    {
        id: 10,
        question: "His __________ behavior at the meeting, including shouting and throwing papers, shocked his colleagues and led to disciplinary action.",
        chinese_question: "他在会议上的 __________ 行为，包括大喊大叫和扔纸，让同事们感到震惊，并导致了纪律处分。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常", chinese_romanization: "zhèngcháng" },
            { option: "B", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" },
            { option: "C", answer: "aberrant", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "D", answer: "expected", chinese_answer: "预期", chinese_romanization: "yùqí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aberrant' means departing from an accepted standard." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(D) 'expected' means regarded as likely to happen.",
        chinese_explanation: "(C) '异常' 一词意味着偏离接受的标准。" +
            "<br><br>" +
            "(A) '正常' 意味着符合标准的；通常的、典型的或预期的。" +
            "<br><br>" +
            "(B) '典型' 意味着具有特定类型的人或事物的独特品质。"+
            "<br><br>" +
            "(D) '预期' 意味着被认为可能发生的。"
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
