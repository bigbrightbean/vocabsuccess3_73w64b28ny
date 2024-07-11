// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The heavy rains __________ a flood in the valley, causing extensive damage to the homes.",
        chinese_question: "大雨 __________ 了山谷中的洪水，造成了房屋的广泛损坏。",
        answers: [
            { option: "A", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "B", answer: "prevented", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "C", answer: "precipitated", chinese_answer: "促成", chinese_romanization: "cùchéng" },
            { option: "D", answer: "hindered", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipitated' means cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely." +
            "<br><br>" +
            "(A) 'delayed' means make (someone or something) late or slow." +
            "<br><br>" +
            "(B) 'prevented' means keep (something) from happening or arising." +
            "<br><br>" +
            "(D) 'hindered' means create difficulties for (someone or something), resulting in delay or obstruction.",
        chinese_explanation: "(C) '促成' 一词意味着使（事件或情况，通常是不好的或不希望的）突然、意外或过早地发生。" +
            "<br><br>" +
            "(A) '延迟' 意味着使（某人或某物）迟到或缓慢。" +
            "<br><br>" +
            "(B) '阻止' 意味着阻止（某事）的发生或出现。" +
            "<br><br>" +
            "(D) '妨碍' 意味着为（某人或某物）制造困难，导致延误或障碍。"
    },
    {
        id: 2,
        question: "He didn't want to __________ his career by making a risky decision without careful consideration.",
        chinese_question: "他不想因为没有仔细考虑就做出冒险决定而 __________ 他的职业生涯。",
        answers: [
            { option: "A", answer: "secure", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
            { option: "B", answer: "jeopardize", chinese_answer: "危及", chinese_romanization: "wēijí" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "save", chinese_answer: "挽救", chinese_romanization: "wǎnjiù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jeopardize' means put (someone or something) into a situation in which there is a danger of loss, harm, or failure." +
            "<br><br>" +
            "(A) 'secure' means fix or attach (something) firmly so that it cannot be moved or lost." +
            "<br><br>" +
            "(C) 'protect' means keep safe from harm or injury." +
            "<br><br>" +
            "(D) 'save' means keep safe or rescue (someone or something) from harm or danger.",
        chinese_explanation: "(B) '危及' 一词意味着使（某人或某事）处于可能失去、伤害或失败的危险中。" +
            "<br><br>" +
            "(A) '保证' 意味着固定或牢固地附着（某物），以便它不能移动或丢失。" +
            "<br><br>" +
            "(C) '保护' 意味着使免受伤害或伤害。" +
            "<br><br>" +
            "(D) '挽救' 意味着使（某人或某物）免受伤害或危险。"
    },
    {
        id: 3,
        question: "A neutral third party was called in to __________ the dispute between the two companies.",
        chinese_question: "为了调解两家公司之间的争端，召来了一位中立的第三方 __________。",
        answers: [
            { option: "A", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "B", answer: "mediate", chinese_answer: "调解", chinese_romanization: "tiáojiě" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mediate' means intervene between people in a dispute in order to bring about an agreement or reconciliation." +
            "<br><br>" +
            "(A) 'escalate' means increase rapidly." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'worsen' means make or become worse.",
        chinese_explanation: "(B) '调解' 一词意味着在争端中的人之间进行干预，以达成协议或和解。" +
            "<br><br>" +
            "(A) '升级' 意味着迅速增加。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '恶化' 意味着使变得更糟。"
    },
    {
        id: 4,
        question: "After the team's poor performance, they were __________ to a lower division in the league.",
        chinese_question: "在球队表现不佳之后，他们被 __________ 到联盟的低级别。",
        answers: [
            { option: "A", answer: "relegated", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
            { option: "B", answer: "promoted", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "C", answer: "elevated", chinese_answer: "提拔", chinese_romanization: "tíbá" },
            { option: "D", answer: "advanced", chinese_answer: "前进", chinese_romanization: "qiánjìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'relegated' means consign or dismiss to an inferior rank or position." +
            "<br><br>" +
            "(B) 'promoted' means advance or raise (someone) to a higher position or rank." +
            "<br><br>" +
            "(C) 'elevated' means situated or placed higher than the surrounding area." +
            "<br><br>" +
            "(D) 'advanced' means move forward in a purposeful way.",
        chinese_explanation: "(A) '降级' 一词意味着委托或解雇到较低的级别或职位。" +
            "<br><br>" +
            "(B) '提升' 意味着提升或提高（某人）到更高的位置或级别。" +
            "<br><br>" +
            "(C) '提拔' 意味着位于或放置在比周围区域更高的地方。" +
            "<br><br>" +
            "(D) '前进' 意味着以有目的的方式向前移动。"
    },
    {
        id: 5,
        question: "Even after the renovations, some residents continued to __________ about the color of the new paint and the style of the fixtures.",
        chinese_question: "即使在装修之后，一些居民仍然 __________ 新油漆的颜色和灯具的样式。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'carp' means to complain or find fault continually, typically about trivial matters." +
            "<br><br>" +
            "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'compliment' means to politely congratulate or praise someone for something." +
            "<br><br>" +
            "(C) 'admire' means to regard with respect or warm approval.",
        chinese_explanation: "(D) '吹毛求疵' 意思是不断抱怨或挑剔，通常是关于琐碎的事情。" +
            "<br><br>" +
            "(A) '庆祝' 意思是通过社交聚会或愉快的活动来庆祝重要或愉快的日子或事件。" +
            "<br><br>" +
            "(B) '赞美' 意思是礼貌地祝贺或赞扬某人某事。" +
            "<br><br>" +
            "(C) '钦佩' 意思是以尊重或热情的赞同看待。"
    },
    {
        id: 6,
        question: "Her concerns about the project's feasibility were __________ after the initial tests failed.",
        chinese_question: "在初步测试失败后，她对项目可行性的担忧得到了 __________。",
        answers: [
            { option: "A", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "validated", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "D", answer: "refuted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'validated' means check or prove the validity or accuracy of (something)." +
            "<br><br>" +
            "(A) 'dismissed' means order or allow to leave; send away." +
            "<br><br>" +
            "(B) 'ignored' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'refuted' means prove (a statement or theory) to be wrong or false; disprove.",
        chinese_explanation: "(C) '验证' 一词意味着检查或证明（某物）的有效性或准确性。" +
            "<br><br>" +
            "(A) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '反驳' 意味着证明（陈述或理论）是错误或虚假的；反驳。"
    },
    {
        id: 7,
        question: "The court decided to __________ him of all charges, declaring that he was innocent.",
        chinese_question: "法院决定 __________ 他所有的指控，宣告他无罪。",
        answers: [
            { option: "A", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "B", answer: "absolve", chinese_answer: "赦免", chinese_romanization: "shèmiǎn" },
            { option: "C", answer: "blame", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "D", answer: "convict", chinese_answer: "定罪", chinese_romanization: "dìngzuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'absolve' means set or declare (someone) free from blame, guilt, or responsibility." +
            "<br><br>" +
            "(A) 'accuse' means charge (someone) with an offense or crime." +
            "<br><br>" +
            "(C) 'blame' means assign responsibility for a fault or wrong." +
            "<br><br>" +
            "(D) 'convict' means declare (someone) to be guilty of a criminal offense by the verdict of a jury or the decision of a judge in a court of law.",
        chinese_explanation: "(B) '赦免' 一词意味着宣布或宣布（某人）免于责备、罪责或责任。" +
            "<br><br>" +
            "(A) '指控' 意味着指控（某人）犯罪或罪行。" +
            "<br><br>" +
            "(C) '责备' 意味着分配过错或错误的责任。" +
            "<br><br>" +
            "(D) '定罪' 意味着通过陪审团的裁决或法官在法庭上的决定宣布（某人）有罪。"
    },
    {
        id: 8,
        question: "The word 'home' __________ warmth and comfort, beyond just its basic definition of a place to live.",
        chinese_question: "'家' 这个词 __________ 温暖和舒适，超出了它作为居住地的基本定义。",
        answers: [
            { option: "A", answer: "contrasts", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "B", answer: "connotes", chinese_answer: "暗示", chinese_romanization: "ànshì" },
            { option: "C", answer: "obscures", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "simplifies", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'connotes' means to imply or suggest (an idea or feeling) in addition to the literal or primary meaning." +
            "<br><br>" +
            "(A) 'contrasts' means to compare in such a way as to emphasize differences." +
            "<br><br>" +
            "(C) 'obscures' means to keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'simplifies' means to make (something) simpler or easier to do or understand.",
        chinese_explanation: "(B) '暗示' 一词意味着在字面或主要意义之外暗示或建议（一个想法或感觉）。" +
            "<br><br>" +
            "(A) '对比' 意味着以强调差异的方式进行比较。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某物）更简单或更容易做或理解。"
    },
    {
        id: 9,
        question: "Her dedication to her work __________ the qualities of a true professional.",
        chinese_question: "她对工作的奉献 __________ 了一个真正专业人士的品质。",
        answers: [
            { option: "A", answer: "exemplifies", chinese_answer: "举例说明", chinese_romanization: "jǔlì shuōmíng" },
            { option: "B", answer: "undermines", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "obscures", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "diminishes", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exemplifies' means be a typical example of." +
            "<br><br>" +
            "(B) 'undermines' means erode the base or foundation of (a rock formation)." +
            "<br><br>" +
            "(C) 'obscures' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'diminishes' means make or become less.",
        chinese_explanation: "(A) '举例说明' 意味着成为典型的例子。" +
            "<br><br>" +
            "(B) '破坏' 意味着侵蚀（岩层）的基部或基础。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(D) '减少' 意味着使变少或变少。"
    },
    {
        id: 10,
        question: "He came to __________ the corrupt practices in the organization, which led to his resignation.",
        chinese_question: "他开始 __________ 组织中的腐败行为，这导致了他的辞职。",
        answers: [
            { option: "A", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "B", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
            { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "abhor", chinese_answer: "憎恶", chinese_romanization: "zēngwù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abhor' means regard with disgust and hatred." +
            "<br><br>" +
            "(B) 'tolerate' means allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference." +
            "<br><br>" +
            "(A) 'enjoy' means take delight or pleasure in (an activity or occasion)." +
            "<br><br>" +
            "(C) 'accept' means consent to receive (a thing offered).",
        chinese_explanation: "(D) '憎恶' 意味着对某事物怀有厌恶和仇恨。" +
            "<br><br>" +
            "(B) '容忍' 意味着在不一定喜欢或同意的情况下允许（某事物）的存在、发生或实践。" +
            "<br><br>" +
            "(A) '享受' 意味着从（活动或场合）中获得快乐或乐趣。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接收（提供的东西）。"
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
