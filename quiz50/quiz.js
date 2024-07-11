// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ sound of the violin drifted through the open window, creating a serene atmosphere.",
        chinese_question: "小提琴的 __________ 声音从打开的窗户飘进来，营造出宁静的氛围。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "B", answer: "mellifluous", chinese_answer: "甜美", chinese_romanization: "tiánměi" },
            { option: "C", answer: "grating", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "D", answer: "jarring", chinese_answer: "不和谐", chinese_romanization: "bù héxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mellifluous' means sweet or musical; pleasant to hear." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'grating' means sounding harsh and unpleasant." +
            "<br><br>" +
            "(D) 'jarring' means incongruous in a striking or shocking way; clashing.",
        chinese_explanation: "(B) '甜美' 一词意味着甜美或音乐的；悦耳的。" +
            "<br><br>" +
            "(A) '刺耳' 意味着对感觉不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(C) '刺耳' 意味着声音刺耳和不愉快的。" +
            "<br><br>" +
            "(D) '不和谐' 意味着以引人注目或令人震惊的方式不协调的；冲突的。"
    },
    {
        id: 2,
        question: "She wore a __________ dress that fluttered beautifully in the breeze.",
        chinese_question: "她穿了一件 __________ 的连衣裙，在微风中美丽地飘动。",
        answers: [
            { option: "A", answer: "opaque", chinese_answer: "不透明", chinese_romanization: "bù tòumíng" },
            { option: "B", answer: "thick", chinese_answer: "厚", chinese_romanization: "hòu" },
            { option: "C", answer: "diaphanous", chinese_answer: "轻薄", chinese_romanization: "qīngbó" },
            { option: "D", answer: "heavy", chinese_answer: "沉重", chinese_romanization: "chénzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diaphanous' means light, delicate, and translucent." +
            "<br><br>" +
            "(A) 'opaque' means not able to be seen through; not transparent." +
            "<br><br>" +
            "(B) 'thick' means with opposite sides or surfaces that are far or relatively far apart." +
            "<br><br>" +
            "(D) 'heavy' means of great weight; difficult to lift or move.",
        chinese_explanation: "(C) '轻薄' 一词意味着轻巧、精致和半透明的。" +
            "<br><br>" +
            "(A) '不透明' 意味着无法看到的；不透明的。" +
            "<br><br>" +
            "(B) '厚' 意味着对面的侧面或表面相隔较远或相对较远。" +
            "<br><br>" +
            "(D) '沉重' 意味着重量很大；难以举起或移动。"
    },
    {
        id: 3,
        question: "The teacher's __________ lecture on quantum physics left the students bewildered but intrigued.",
        chinese_question: "老师关于量子物理学的 __________ 讲座让学生感到困惑但又感到好奇。",
        answers: [
            { option: "A", answer: "comprehensible", chinese_answer: "可理解的", chinese_romanization: "kě lǐjiě de" },
            { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "lucid", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "esoteric", chinese_answer: "深奥的", chinese_romanization: "shēn'ào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge or interest." +
            "<br><br>" +
            "(A) 'comprehensible' means able to be understood; intelligible." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(C) 'lucid' means expressed clearly; easy to understand.",
        chinese_explanation: "(D) '深奥的' 意味着只有少数人能够理解或感兴趣的专业知识。" +
            "<br><br>" +
            "(A) '可理解的' 意味着能够理解；可懂的。" +
            "<br><br>" +
            "(B) '平凡的' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(C) '清晰的' 意味着表达清晰；易于理解。"
    },
    {
        id: 4,
        question: "The novelist's __________ prose transported readers to a world of enchantment and wonder.",
        chinese_question: "小说家的 __________ 散文将读者带到了一个充满魔力和奇迹的世界。",
        answers: [
            { option: "A", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "esoteric", chinese_answer: "深奥的", chinese_romanization: "shēn'ào de" },
            { option: "C", answer: "prosaic", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "D", answer: "lyrical", chinese_answer: "抒情的", chinese_romanization: "shūqíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lyrical' means having a poetic, expressive quality; melodious and expressive." +
            "<br><br>" +
            "(A) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(B) 'esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge or interest." +
            "<br><br>" +
            "(C) 'prosaic' means lacking poetic beauty; commonplace or dull.",
        chinese_explanation: "(D) '抒情的' 意味着具有诗意、表现力的品质；旋律优美且富有表现力。" +
            "<br><br>" +
            "(A) '平凡的' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(B) '深奥的' 意味着只有少数人能够理解或感兴趣的专业知识。" +
            "<br><br>" +
            "(C) '平淡的' 意味着缺乏诗意之美；平庸或乏味。"
    },
    {
        id: 5,
        question: "The student's __________ essay impressed the teacher with its depth of analysis and clarity of expression.",
        chinese_question: "学生的 __________ 论文以其深度分析和表达清晰给老师留下了深刻印象。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
            { option: "B", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "C", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "D", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'profound' means having deep insight or understanding; intellectually deep." +
            "<br><br>" +
            "(A) 'superficial' means shallow or lacking in depth." +
            "<br><br>" +
            "(C) 'verbose' means using more words than needed; wordy." +
            "<br><br>" +
            "(D) 'succinct' means expressed in a concise and clear manner; brief.",
        chinese_explanation: "(B) '深刻的' 意味着有深刻的见解或理解；思想上深刻。" +
            "<br><br>" +
            "(A) '肤浅的' 意味着浅薄或缺乏深度。" +
            "<br><br>" +
            "(C) '冗长的' 意味着使用比必要更多的词语；啰嗦。" +
            "<br><br>" +
            "(D) '简洁的' 意味着以简洁清晰的方式表达；简短。"
    },
    {
        id: 6,
        question: "The mountaineer's __________ climb to the summit required bravery and determination.",
        chinese_question: "登山者 __________ 的攀登到山顶需要勇气和决心。",
        answers: [
            { option: "A", answer: "perilous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "B", answer: "leisurely", chinese_answer: "悠闲的", chinese_romanization: "yōuxián de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "formidable", chinese_answer: "可怕的", chinese_romanization: "kěpà de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perilous' means full of danger or risk." +
            "<br><br>" +
            "(B) 'leisurely' means done at a relaxed and unhurried pace." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable.",
        chinese_explanation: "(A) '危险的' 意味着充满危险或风险。" +
            "<br><br>" +
            "(B) '悠闲的' 意味着以轻松和不匆忙的步伐进行。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(D) '可怕的' 意味着通过令人印象深刻的大小、力量、强度或能力来激发恐惧或尊重。"
    },
    {
        id: 7,
        question: "The explorer's __________ journey through the dense jungle tested his endurance and determination.",
        chinese_question: "探险家 __________ 通过茂密的丛林的艰难旅程考验了他的耐力和决心。",
        answers: [
            { option: "A", answer: "arduous", chinese_answer: "艰巨", chinese_romanization: "jiānjù" },
            { option: "B", answer: "precarious", chinese_answer: "不稳定", chinese_romanization: "bù wěndìng" },
            { option: "C", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "D", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arduous' means difficult and requiring a lot of effort." +
            "<br><br>" +
            "(B) 'precarious' means dangerously unstable or uncertain." +
            "<br><br>" +
            "(C) 'serene' means calm and peaceful." +
            "<br><br>" +
            "(D) 'mundane' means ordinary or dull.",
        chinese_explanation: "(A) '艰巨' 一词意味着困难，需要大量的努力。" +
            "<br><br>" +
            "(B) '不稳定' 意味着危险地不稳定或不确定。" +
            "<br><br>" +
            "(C) '宁静' 意味着平静和安详。" +
            "<br><br>" +
            "(D) '平凡' 意味着普通或乏味。"
    },
    {
        id: 8,
        question: "The manager's __________ style of leadership stifled creativity and discouraged employees from voicing their opinions.",
        chinese_question: "经理 __________ 的领导风格压制了创造力，阻止了员工表达他们的意见。",
        answers: [
            { option: "A", answer: "democratic", chinese_answer: "民主", chinese_romanization: "mínzhǔ" },
            { option: "B", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "C", answer: "authoritarian", chinese_answer: "专制", chinese_romanization: "zhuānzhì" },
            { option: "D", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'authoritarian' means favoring or enforcing strict obedience to authority at the expense of personal freedom." +
            "<br><br>" +
            "(A) 'democratic' means relating to or supporting democracy or its principles." +
            "<br><br>" +
            "(B) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(C) '专制' 一词意味着支持或强制严格服从权威，以牺牲个人自由为代价。" +
            "<br><br>" +
            "(A) '民主' 意味着与民主或其原则有关或支持的。" +
            "<br><br>" +
            "(B) '宽容' 意味着比预期更仁慈或宽容的。" +
            "<br><br>" +
            "(D) '灵活' 意味着能够轻松弯曲而不折断的。"
    },
    {
        id: 9,
        question: "His __________ attitude during the meeting made it difficult to reach a consensus, as he was constantly challenging others.",
        chinese_question: "他在会议中的 __________ 态度使得达成共识变得困难，因为他不断挑战他人。",
        answers: [
            { option: "A", answer: "agreeable", chinese_answer: "令人愉快", chinese_romanization: "lìng rén yúkuài" },
            { option: "B", answer: "confrontational", chinese_answer: "对抗", chinese_romanization: "duìkàng" },
            { option: "C", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative." +
            "<br><br>" +
            "(A) 'agreeable' means enjoyable and pleasurable; pleasant." +
            "<br><br>" +
            "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(B) '对抗' 一词意味着倾向于以积极的方式处理情况；敌对或争辩的。" +
            "<br><br>" +
            "(A) '令人愉快' 意味着令人愉快和愉快的；愉快的。" +
            "<br><br>" +
            "(C) '被动' 意味着接受或允许发生的事情或他人做的事情，而不积极回应或抵抗。" +
            "<br><br>" +
            "(D) '合作' 意味着在实现共同目标方面相互帮助的。"
    },
    {
        id: 10,
        question: "The journalist's __________ report, which included firsthand accounts and in-depth analysis, shed new light on the complex issue.",
        chinese_question: "记者的 __________ 报告，包括第一手资料和深入分析，为这个复杂的问题提供了新的见解。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "B", answer: "cursory", chinese_answer: "粗略", chinese_romanization: "cūlüè" },
            { option: "C", answer: "comprehensive", chinese_answer: "全面", chinese_romanization: "quánmiàn" },
            { option: "D", answer: "biased", chinese_answer: "有偏见", chinese_romanization: "yǒu piānjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'comprehensive' means complete and including everything that is necessary." +
            "<br><br>" +
            "(A) 'superficial' means existing or occurring at the surface." +
            "<br><br>" +
            "(B) 'cursory' means hasty and therefore not thorough or detailed." +
            "<br><br>" +
            "(D) 'biased' means unfairly prejudiced for or against someone or something.",
        chinese_explanation: "(C) '全面' 一词意味着完整且包括所有必要的内容。" +
            "<br><br>" +
            "(A) '肤浅' 意味着存在或发生在表面。" +
            "<br><br>" +
            "(B) '粗略' 意味着仓促，因此不彻底或不详细。" +
            "<br><br>" +
            "(D) '有偏见' 意味着对某人或某事的不公平偏见。"
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
