// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They carried out a __________ search for the missing documents without alerting anyone in the office.",
        chinese_question: "他们在没有引起办公室任何人注意的情况下进行了 __________ 的搜查，寻找丢失的文件。",
        answers: [
            { option: "A", answer: "open", chinese_answer: "公开", chinese_romanization: "gōngkāi" },
            { option: "B", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "surreptitious", chinese_answer: "秘密", chinese_romanization: "mìmì" },
            { option: "D", answer: "public", chinese_answer: "公众", chinese_romanization: "gōngzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surreptitious' means kept secret, especially because it would not be approved of." +
            "<br><br>" +
            "(A) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked." +
            "<br><br>" +
            "(B) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'public' means of or concerning the people as a whole.",
        chinese_explanation: "(C) '秘密' 一词意味着保密的，尤其是因为不会被批准。" +
            "<br><br>" +
            "(A) '公开' 意味着允许通过一个空的空间访问、通过或看到的；没有关闭或阻塞的。" +
            "<br><br>" +
            "(B) '透明' 意味着允许光线通过，使后面的物体可以清晰地看到的。" +
            "<br><br>" +
            "(D) '公众' 意味着关于整体人民的。"
    },
    {
        id: 2,
        question: "The __________ strain of the virus caused a severe outbreak, leading to numerous hospitalizations.",
        chinese_question: "这种 __________ 的病毒毒株导致了严重的疫情，导致许多人住院。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "C", answer: "benign", chinese_answer: "良性", chinese_romanization: "liángxìng" },
            { option: "D", answer: "virulent", chinese_answer: "致命", chinese_romanization: "zhìmìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'virulent' means extremely severe or harmful in its effects; highly infectious." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(C) 'benign' means gentle and kind; not harmful in effect.",
        chinese_explanation: "(D) '致命' 一词意味着在其效果中极其严重或有害的；高度传染性的。" +
            "<br><br>" +
            "(A) '温和' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(B) '无害' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(C) '良性' 意味着温和和善良的；在效果上没有害处的。"
    },
    {
        id: 3,
        question: "The young scientist was __________ in her pursuit of knowledge, often working late into the night.",
        chinese_question: "这位年轻的科学家在追求知识的过程中非常 __________，经常工作到深夜。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "C", answer: "zealous", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zealous' means having or showing zeal." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(C) '热情' 一词意味着有或表现出热情。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有表现或感到兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '懒惰' 意味着不愿工作或使用精力的。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 4,
        question: "The committee made a __________ decision to allocate funds only to the most essential projects.",
        chinese_question: "委员会做出了 __________ 的决定，只将资金分配给最重要的项目。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "judicious", chinese_answer: "明智", chinese_romanization: "míngzhì" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'judicious' means having, showing, or done with good judgment or sense." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(C) '明智' 一词意味着有、表现出或以良好的判断或常识完成的。" +
            "<br><br>" +
            "'愚蠢' 意味着缺乏良好的判断或判断力；不明智的。" +
            "<br><br>" +
            "'冲动' 意味着没有深思熟虑的行动或完成的。" +
            "<br><br>" +
            "'鲁莽' 意味着不考虑或不关心行动的后果。"
    },
    {
        id: 5,
        question: "She was criticized for her __________ spending habits during a time of financial hardship.",
        chinese_question: "在经济困难时期，她因 __________ 的消费习惯而受到批评。",
        answers: [
            { option: "A", answer: "frivolous", chinese_answer: "轻浮", chinese_romanization: "qīngfú" },
            { option: "B", answer: "prudent", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "C", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "D", answer: "wise", chinese_answer: "明智", chinese_romanization: "míngzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'frivolous' means not having any serious purpose or value." +
            "<br><br>" +
            "(B) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(C) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(D) 'wise' means having or showing experience, knowledge, and good judgment.",
        chinese_explanation: "(A) '轻浮' 一词意味着没有任何严肃目的或价值的。" +
            "<br><br>" +
            "(B) '谨慎' 意味着表现出对未来的关心和思考的行为。" +
            "<br><br>" +
            "(C) '严肃' 意味着性格或态度庄重或深思熟虑的。" +
            "<br><br>" +
            "(D) '明智' 意味着有或表现出经验、知识和良好判断的。"
    },
    {
        id: 6,
        question: "His beliefs seemed __________, outdated and irrelevant in the modern world.",
        chinese_question: "他的信仰似乎是 __________ 的，在现代世界中过时且无关紧要。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" },
            { option: "C", answer: "progressive", chinese_answer: "进步", chinese_romanization: "jìnbù" },
            { option: "D", answer: "antediluvian", chinese_answer: "远古", chinese_romanization: "yuǎngǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'antediluvian' means ridiculously old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(B) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(C) 'progressive' means happening or developing gradually or in stages; proceeding step by step.",
        chinese_explanation: "(D) '远古' 一词意味着荒谬地过时。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或最近的时间有关的，而不是遥远的过去。" +
            "<br><br>" +
            "(B) '当代' 意味着同时代的或发生在同一时间的。" +
            "<br><br>" +
            "(C) '进步' 意味着逐步或分阶段发生或发展的；一步一步地进行。"
    },
    {
        id: 7,
        question: "The billionaire's __________ lifestyle included multiple mansions and a private jet.",
        chinese_question: "亿万富翁的 __________ 生活方式包括多个豪宅和一架私人飞机。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "opulent", chinese_answer: "豪华", chinese_romanization: "háohuá" },
            { option: "D", answer: "frugal", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opulent' means ostentatiously rich and luxurious or lavish." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'frugal' means sparing or economical with regard to money or food.",
        chinese_explanation: "(C) '豪华' 一词意味着炫耀性地富有和奢华的。" +
            "<br><br>" +
            "'谦虚' 意味着对自己的能力或成就持谦逊或适度的态度。" +
            "<br><br>" +
            "'简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "'节俭' 意味着对金钱或食物的节省或经济。"
    },
    {
        id: 8,
        question: "Her __________ presentation convinced the investors to fund the new project.",
        chinese_question: "她的 __________ 演讲说服了投资者为新项目提供资金。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "薄弱", chinese_romanization: "bóruò" },
            { option: "B", answer: "unconvincing", chinese_answer: "不具说服力", chinese_romanization: "bù jù shuōfú lì" },
            { option: "C", answer: "cogent", chinese_answer: "有说服力", chinese_romanization: "yǒu shuōfú lì" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cogent' means clear, logical, and convincing." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'unconvincing' means failing to make someone believe that something is true or valid." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(C) '有说服力' 一词意味着清晰、合乎逻辑和令人信服的。" +
            "<br><br>" +
            "(A) '薄弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(B) '不具说服力' 意味着未能使某人相信某事是真实或有效的。" +
            "<br><br>" +
            "(D) '无关' 意味着与某事无关的。"
    },
    {
        id: 9,
        question: "The journalist uncovered the company's __________ violations of environmental laws, leading to a public outcry.",
        chinese_question: "记者揭露了这家公司对环境法的 __________ 违反，导致了公众的强烈抗议。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "egregious", chinese_answer: "过分", chinese_romanization: "guòfèn" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "D", answer: "slight", chinese_answer: "细微", chinese_romanization: "xìwēi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'egregious' means outstandingly bad; shocking." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'slight' means small in degree; inconsiderable.",
        chinese_explanation: "(B) '过分' 一词意味着非常糟糕的；令人震惊的。" +
            "<br><br>" +
            "(A) '轻微' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(C) '琐碎' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '细微' 意味着程度小的；不重要的。"
    },
    {
        id: 10,
        question: "The __________ employee consistently refused to follow company policies, creating ongoing issues for the management team.",
        chinese_question: "这名 __________ 的员工一再拒绝遵守公司政策，给管理团队带来了持续的问题。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "compliant", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "recalcitrant", chinese_answer: "顽固", chinese_romanization: "wángù" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recalcitrant' means having an obstinately uncooperative attitude toward authority or discipline." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's authority." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(C) '顽固' 一词意味着对权威或纪律有固执的不合作态度。" +
            "<br><br>" +
            "(A) '顺从' 意味着遵从或愿意遵从命令或要求；服从他人的权威。" +
            "<br><br>" +
            "(B) '服从' 意味着倾向于同意他人或遵守规则，尤其是过度地。" +
            "<br><br>" +
            "(D) '合作' 意味着在实现共同目标方面相互帮助。"
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
