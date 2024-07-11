// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the chaos around her, she remained __________, seemingly unconcerned with the turmoil.",
        chinese_question: "尽管周围一片混乱，她仍然 __________，似乎对动荡不关心。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "B", answer: "worried", chinese_answer: "担心", chinese_romanization: "dānxīn" },
            { option: "C", answer: "insouciant", chinese_answer: "漫不经心", chinese_romanization: "màn bù jīng xīn" },
            { option: "D", answer: "troubled", chinese_answer: "烦恼", chinese_romanization: "fánnǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insouciant' means showing a casual lack of concern; indifferent." +
            "<br><br>" +
            "(A) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(B) 'worried' means anxious or troubled about actual or potential problems." +
            "<br><br>" +
            "(D) 'troubled' means beset by problems or conflict.",
        chinese_explanation: "(C) '漫不经心' 一词意味着表现出随意的缺乏关注；漠不关心。" +
            "<br><br>" +
            "'焦虑' 意味着经历担忧、不安或紧张。" +
            "<br><br>" +
            "'担心' 意味着对实际或潜在的问题感到焦虑或烦恼。" +
            "<br><br>" +
            "'烦恼' 意味着被问题或冲突困扰。"
    },
    {
        id: 2,
        question: "The evidence presented in the trial was later found to be __________ and unreliable.",
        chinese_question: "审判中提供的证据后来被发现是 __________ 和不可靠的。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "B", answer: "authentic", chinese_answer: "真正", chinese_romanization: "zhēnzhèng" },
            { option: "C", answer: "spurious", chinese_answer: "虚假", chinese_romanization: "xūjiǎ" },
            { option: "D", answer: "valid", chinese_answer: "有效", chinese_romanization: "yǒuxiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spurious' means not being what it purports to be; false or fake." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(B) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(D) 'valid' means having a sound basis in logic or fact; reasonable or cogent.",
        chinese_explanation: "(C) '虚假' 一词意味着不是其自称的东西；假的。" +
            "<br><br>" +
            "'真实' 意味着确实是所说的东西；真正的。" +
            "<br><br>" +
            "'真正' 意味着来源无可争议，而不是复制品；真正的。"+
            "<br><br>" +
            "'有效' 意味着在逻辑或事实上有合理依据的；合理或令人信服的。"
    },
    {
        id: 3,
        question: "The researcher was __________ in recording the data, ensuring that every detail was accurate.",
        chinese_question: "研究人员在记录数据时非常 __________，确保每个细节都是准确的。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "sloppy", chinese_answer: "马虎", chinese_romanization: "mǎhu" },
            { option: "D", answer: "scrupulous", chinese_answer: "一丝不苟", chinese_romanization: "yīsī bù gǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'scrupulous' means diligent, thorough, and extremely attentive to details." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(C) 'sloppy' means careless and unsystematic; excessively casual.",
        chinese_explanation: "(D) '一丝不苟' 一词意味着勤奋、彻底并对细节极其关注的。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '疏忽' 意味着未能妥善照顾某事。" +
            "<br><br>" +
            "(C) '马虎' 意味着粗心和无系统的；过于随便的。"
    },
    {
        id: 4,
        question: "The beauty of the sunrise over the mountains was __________, leaving everyone speechless.",
        chinese_question: "山上日出的美丽是 __________ 的，让所有人都说不出话来。",
        answers: [
            { option: "A", answer: "describable", chinese_answer: "可描述", chinese_romanization: "kě miáoshù" },
            { option: "B", answer: "plain", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "ineffable", chinese_answer: "难以言喻", chinese_romanization: "nányǐ yányù" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ineffable' means too great or extreme to be expressed or described in words." +
            "<br><br>" +
            "(A) 'describable' means able to be described." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '难以言喻' 一词意味着太伟大或极端以至于无法用语言表达或描述。" +
            "<br><br>" +
            "'可描述' 意味着可以被描述的。" +
            "<br><br>" +
            "'平凡' 意味着没有装饰或精心设计；性格简单或普通。" +
            "<br><br>" +
            "'普通' 意味着没有特别或独特的特点；正常的。"
    },
    {
        id: 5,
        question: "She longed for excitement and adventure instead of her __________ daily routine.",
        chinese_question: "她渴望刺激和冒险，而不是她 __________ 的日常生活。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "B", answer: "thrilling", chinese_answer: "惊险", chinese_romanization: "jīngxiǎn" },
            { option: "C", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "extraordinary", chinese_answer: "非凡", chinese_romanization: "fēifán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'thrilling' means producing sudden, strong, and deep emotion or excitement." +
            "<br><br>" +
            "(D) 'extraordinary' means very unusual or remarkable.",
        chinese_explanation: "(C) '平凡' 一词意味着缺乏兴趣或兴奋的；无聊的。" +
            "<br><br>" +
            "'刺激' 意味着引起极大热情和渴望的。" +
            "<br><br>" +
            "'惊险' 意味着产生突然而强烈的情感或兴奋。" +
            "<br><br>" +
            "'非凡' 意味着非常不寻常或显著的。"
    },
    {
        id: 6,
        question: "The __________ student refused to follow the teacher's instructions, often disrupting the class with his rebellious behavior.",
        chinese_question: "这位 __________ 学生拒绝遵循老师的指示，经常以叛逆的行为打扰课堂。",
        answers: [
            { option: "A", answer: "compliant", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "recalcitrant", chinese_answer: "不服管束", chinese_romanization: "bù fú guǎnshù" },
            { option: "C", answer: "obedient", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'recalcitrant' means having an obstinately uncooperative attitude towards authority or discipline." +
            "<br><br>" +
            "(A) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
            "<br><br>" +
            "(C) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working towards a common goal.",
        chinese_explanation: "(B) '不服管束' 一词意味着对权威或纪律持顽固的不合作态度。" +
            "<br><br>" +
            "(A) '顺从' 意味着倾向于同意他人或服从规则，尤其是过度程度的。" +
            "<br><br>" +
            "(C) '服从' 意味着遵守或愿意遵守命令或请求；顺从他人的意志。" +
            "<br><br>" +
            "(D) '合作' 意味着在朝着共同目标互相帮助的过程中。"
    },
    {
        id: 7,
        question: "The new regulations were __________, leaving little room for flexibility or leniency.",
        chinese_question: "新规定非常 __________，几乎没有灵活或宽大的余地。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "B", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "stringent", chinese_answer: "严格", chinese_romanization: "yángé" },
            { option: "D", answer: "loose", chinese_answer: "松散", chinese_romanization: "sōngsǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stringent' means strict, precise, and exacting." +
            "<br><br>" +
            "(A) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(D) 'loose' means not firmly or tightly fixed in place; detached or able to be detached.",
        chinese_explanation: "(C) '严格' 一词意味着严格、精确和苛刻的。" +
            "<br><br>" +
            "(A) '宽容' 意味着（指惩罚或权威人士）宽容、仁慈或容忍的。" +
            "<br><br>" +
            "(B) '放松' 意味着无紧张和焦虑的；轻松的。" +
            "<br><br>" +
            "(D) '松散' 意味着固定不紧或牢固的；分离的或能够分离的。"
    },
    {
        id: 8,
        question: "The __________ professor was respected by all her colleagues for her extensive knowledge and years of experience.",
        chinese_question: "这位 __________ 的教授因其渊博的知识和多年的经验而受到所有同事的尊敬。",
        answers: [
            { option: "A", answer: "young", chinese_answer: "年轻", chinese_romanization: "niánqīng" },
            { option: "B", answer: "venerable", chinese_answer: "德高望重", chinese_romanization: "dégāo wàngzhòng" },
            { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "inexperienced", chinese_answer: "没有经验", chinese_romanization: "méiyǒu jīngyàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'venerable' means accorded a great deal of respect, especially because of age, wisdom, or character." +
            "<br><br>" +
            "(A) 'young' means having lived or existed for only a short time." +
            "<br><br>" +
            "(C) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(D) 'inexperienced' means having little knowledge or experience of a particular thing.",
        chinese_explanation: "(B) '德高望重' 一词意味着受到很大的尊敬，尤其是因为年龄、智慧或品格。" +
            "<br><br>" +
            "(A) '年轻' 意味着只存在或生活了很短时间的。" +
            "<br><br>" +
            "(C) '新手' 意味着在某个领域或情况下的新手或没有经验的人。" +
            "<br><br>" +
            "(D) '没有经验' 意味着在某事上有很少知识或经验的。"
    },
    {
        id: 9,
        question: "The __________ gap between the rich and the poor continues to widen, causing social and economic tensions.",
        chinese_question: "富人和穷人之间的 __________ 差距继续扩大，导致社会和经济紧张。",
        answers: [
            { option: "A", answer: "small", chinese_answer: "小", chinese_romanization: "xiǎo" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "C", answer: "yawning", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "tiny", chinese_answer: "微小", chinese_romanization: "wéixiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'yawning' means wide open or large." +
            "<br><br>" +
            "(A) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(B) 'narrow' means of small width in relation to length." +
            "<br><br>" +
            "(D) 'tiny' means very small.",
        chinese_explanation: "(C) '巨大' 一词意味着宽敞或大的。" +
            "<br><br>" +
            "(A) '小' 意味着大小比正常或通常的要小。" +
            "<br><br>" +
            "(B) '狭窄' 意味着宽度相对于长度较小的。" +
            "<br><br>" +
            "(D) '微小' 意味着非常小。"
    },
    {
        id: 10,
        question: "She felt __________ about the promotion, excited for the opportunity but sad to leave her current team.",
        chinese_question: "她对晋升感到 __________，为机会感到兴奋，但离开当前团队又感到难过。",
        answers: [
            { option: "A", answer: "certain", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "B", answer: "decisive", chinese_answer: "果断", chinese_romanization: "guǒduàn" },
            { option: "C", answer: "ambivalent", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "D", answer: "sure", chinese_answer: "确信", chinese_romanization: "quèxìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambivalent' means having mixed feelings or contradictory ideas about something or someone." +
            "<br><br>" +
            "(A) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(B) 'decisive' means settling an issue; producing a definite result." +
            "<br><br>" +
            "(D) 'sure' means confident in what one thinks or knows; having no doubt that one is right.",
        chinese_explanation: "(C) '矛盾' 一词意味着对某事或某人有混合的感觉或矛盾的想法。" +
            "<br><br>" +
            "(A) '确定' 意味着确定无疑的；无可置疑的。" +
            "<br><br>" +
            "(B) '果断' 意味着解决问题；产生确定的结果。" +
            "<br><br>" +
            "(D) '确信' 意味着对自己所想或所知的事情充满信心；毫不怀疑自己是对的。"
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
