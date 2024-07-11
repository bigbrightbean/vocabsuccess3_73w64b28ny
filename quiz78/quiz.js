// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The knight swore __________ to the king, promising to serve and protect the realm with his life.",
        chinese_question: "骑士向国王宣誓 __________，承诺用生命为王国服务和保护。",
        answers: [
            { option: "A", answer: "betrayal", chinese_answer: "背叛", chinese_romanization: "bèipàn" },
            { option: "B", answer: "disloyalty", chinese_answer: "不忠", chinese_romanization: "bù zhōng" },
            { option: "C", answer: "allegiance", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "D", answer: "treachery", chinese_answer: "背信弃义", chinese_romanization: "bèixìnqìyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allegiance' means loyalty or commitment to a superior or to a group or cause." +
            "<br><br>" +
            "(A) 'betrayal' means the action of betraying one's country, a group, or a person; treachery." +
            "<br><br>" +
            "(B) 'disloyalty' means the quality of not being loyal to a person, country, or organization; unfaithfulness." +
            "<br><br>" +
            "(D) 'treachery' means betrayal of trust; deceptive action or nature.",
        chinese_explanation: "(C) '忠诚' 一词意味着对上级或团体或事业的忠诚或承诺。" +
            "<br><br>" +
            "(A) '背叛' 意味着背叛国家、团体或个人的行为；背信弃义。" +
            "<br><br>" +
            "(B) '不忠' 意味着对个人、国家或组织的不忠诚品质；不忠。" +
            "<br><br>" +
            "(D) '背信弃义' 意味着背叛信任；欺骗行为或本质。"
    },
    {
        id: 2,
        question: "His __________ that the company would succeed despite the economic downturn was met with skepticism by his colleagues.",
        chinese_question: "他对公司在经济衰退中仍将成功的 __________ 受到了同事的怀疑。",
        answers: [
            { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "assertion", chinese_answer: "断言", chinese_romanization: "duànyán" },
            { option: "D", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assertion' means a confident and forceful statement of fact or belief." +
            "<br><br>" +
            "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(B) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(D) 'question' means a sentence worded or expressed so as to elicit information.",
        chinese_explanation: "(C) '断言' 一词意味着对事实或信仰的自信和有力的陈述。" +
            "<br><br>" +
            "(A) '怀疑' 意味着不确定或缺乏信念的感觉。" +
            "<br><br>" +
            "(B) '否认' 意味着宣布某事不真实的行为。" +
            "<br><br>" +
            "(D) '问题' 意味着以引出信息为目的的措辞或表达的句子。"
    },
    {
        id: 3,
        question: "The old fort served as a __________ against enemy attacks, protecting the villagers within.",
        chinese_question: "这座古老的堡垒作为 __________ 抵御敌人的攻击，保护了里面的村民。",
        answers: [
            { option: "A", answer: "vulnerability", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
            { option: "B", answer: "bulwark", chinese_answer: "堡垒", chinese_romanization: "bǎolěi" },
            { option: "C", answer: "weakness", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "D", answer: "entry", chinese_answer: "入口", chinese_romanization: "rùkǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bulwark' means a defensive wall." +
            "<br><br>" +
            "(A) 'vulnerability' means the quality or state of being exposed to the possibility of being attacked or harmed, either physically or emotionally." +
            "<br><br>" +
            "(C) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(D) 'entry' means an act of going or coming in.",
        chinese_explanation: "(B) '堡垒' 一词意味着防御墙。" +
            "<br><br>" +
            "(A) '弱点' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(C) '脆弱' 意味着暴露于可能被攻击或伤害的可能性的质量或状态，无论是身体上还是情感上。" +
            "<br><br>" +
            "(D) '入口' 意味着进入或进来的行为。"
    },
    {
        id: 4,
        question: "Her __________ to her family was evident in her unwavering support during difficult times.",
        chinese_question: "她对家人的__________在困难时期表现出的坚定支持中显而易见。",
        answers: [
            { option: "A", answer: "treachery", chinese_answer: "背叛", chinese_romanization: "bèipàn" },
            { option: "B", answer: "deceit", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "C", answer: "faithlessness", chinese_answer: "不忠", chinese_romanization: "bùzhōng" },
            { option: "D", answer: "fidelity", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fidelity' refers to faithfulness to a person, cause, or belief, demonstrated by continuing loyalty and support." +
            "<br><br>" +
            "(A) 'treachery' refers to betrayal of trust; deceptive action or nature." +
            "<br><br>" +
            "(B) 'deceit' refers to the action or practice of deceiving someone by concealing or misrepresenting the truth." +
            "<br><br>" +
            "(C) 'faithlessness' refers to disloyalty or lack of fidelity.",
        chinese_explanation: "(D) '忠诚' 指的是对某人、事业或信仰的忠诚，通过持续的忠诚和支持表现出来。" +
            "<br><br>" +
            "(A) '背叛' 指的是背叛信任；欺骗性的行为或本质。" +
            "<br><br>" +
            "(B) '欺骗' 指的是通过隐瞒或歪曲真相来欺骗某人的行为或做法。" +
            "<br><br>" +
            "(C) '不忠' 指的是不忠诚或缺乏忠诚。"
    },
    {
        id: 5,
        question: "Despite the harsh __________, she remained determined to follow her creative vision and complete the project.",
        chinese_question: "尽管受到了严厉的 __________，她仍然决心坚持自己的创意并完成项目。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "C", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'criticism' figuratively means severe judgment or disapproval." +
            "<br><br>" +
            "(A) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(D) 'encouragement' means the action of giving someone support, confidence, or hope.",
        chinese_explanation: "(C) '批评' 在比喻意义上意味着严厉的判断或反对。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表示热烈的赞同或钦佩。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望的行动。"
    },
    {
        id: 6,
        question: "The small town faced a __________ of medical facilities, making it difficult for residents to access proper healthcare.",
        chinese_question: "这个小镇面临医疗设施的 __________，使得居民难以获得适当的医疗服务。",
        answers: [
                { option: "A", answer: "abundance", chinese_answer: "充足", chinese_romanization: "chōngzú" },
                { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
                { option: "D", answer: "wealth", chinese_answer: "丰富", chinese_romanization: "fēngfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paucity' means the presence of something in only small or insufficient quantities or amounts." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
            "<br><br>" +
            "(D) 'wealth' means an abundance of valuable possessions or money.",
        chinese_explanation: "(B) '缺乏' 意味着某物的存在数量很少或不足。" +
            "<br><br>" +
            "(A) '充足' 意味着某物的数量非常大。" +
            "<br><br>" +
            "(C) '过剩' 意味着在需求得到满足后剩余的数量；生产或供应过剩。" +
            "<br><br>" +
            "(D) '丰富' 意味着大量有价值的财产或金钱。"
    },
    {
        id: 7,
        question: "Her reputation for __________ made her a trustworthy source for the reporters.",
        chinese_question: "她的__________声誉使她成为记者值得信赖的消息来源。",
        answers: [
            { option: "A", answer: "deception", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "B", answer: "falsehood", chinese_answer: "谎言", chinese_romanization: "huǎngyán" },
            { option: "C", answer: "insincerity", chinese_answer: "不真诚", chinese_romanization: "bù zhēnchéng" },
            { option: "D", answer: "veracity", chinese_answer: "真实性", chinese_romanization: "zhēnshíxìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'veracity' refers to conformity to facts; accuracy or habitual truthfulness." +
            "<br><br>" +
            "(A) 'deception' refers to the act of deceiving someone." +
            "<br><br>" +
            "(B) 'falsehood' refers to the state of being untrue." +
            "<br><br>" +
            "(C) 'insincerity' refers to the quality of not expressing genuine feelings.",
        chinese_explanation: "(D) '真实性' 指的是符合事实；准确性或习惯性的真实。" +
            "<br><br>" +
            "(A) '欺骗' 指的是欺骗某人的行为。" +
            "<br><br>" +
            "(B) '谎言' 指的是不真实的状态。" +
            "<br><br>" +
            "(C) '不真诚' 指的是不表达真挚感情的品质。"
    },
    {
        id: 8,
        question: "His __________ in challenging the established norms of the organization, despite the potential backlash, surprised everyone.",
        chinese_question: "他挑战组织既定规范的 __________，尽管可能会受到反对，让所有人感到惊讶。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "timidity", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" },
            { option: "C", answer: "reserve", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "temerity", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'temerity' refers to excessive confidence or boldness; audacity." +
            "<br><br>" +
            "(A) 'hesitation' refers to the action of pausing before saying or doing something, often due to uncertainty." +
            "<br><br>" +
            "(B) 'timidity' refers to a lack of courage or confidence." +
            "<br><br>" +
            "(C) 'reserve' refers to the quality of being slow to reveal emotions or opinions.",
        chinese_explanation: "(D) '鲁莽' 指的是过度的自信或大胆；厚颜无耻。" +
            "<br><br>" +
            "(A) '犹豫' 指的是在说或做某事之前暂停的行为，通常是由于不确定。" +
            "<br><br>" +
            "(B) '胆怯' 指的是缺乏勇气或信心。" +
            "<br><br>" +
            "(C) '保留' 指的是缓慢透露情绪或意见的品质。"
    },
    {
        id: 9,
        question: "The political __________ in the country has been tense due to recent events.",
        chinese_question: "由于最近的事件，该国的政治 __________ 一直很紧张。",
        answers: [
            { option: "A", answer: "climate", chinese_answer: "氛围", chinese_romanization: "fēnwéi" },
            { option: "B", answer: "trend", chinese_answer: "趋势", chinese_romanization: "qūshì" },
            { option: "C", answer: "situation", chinese_answer: "情况", chinese_romanization: "qíngkuàng" },
            { option: "D", answer: "change", chinese_answer: "变化", chinese_romanization: "biànhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'climate' metaphorically means the prevailing trend of public opinion or of another aspect of public life." + 
            "<br><br>" + 
            "(B) 'trend' means a general direction in which something is developing or changing." + 
            "<br><br>" + 
            "(C) 'situation' means a set of circumstances in which one finds oneself; a state of affairs." + 
            "<br><br>" + 
            "(D) 'change' means make or become different.",
        chinese_explanation: "(A) '氛围' 比喻公众舆论或公共生活其他方面的普遍趋势。" + 
            "<br><br>" + 
            "(B) '趋势' 意味着某事发展的或变化的一般方向。" + 
            "<br><br>" + 
            "(C) '情况' 意味着一个人发现自己所处的一组环境；一种状态。" + 
            "<br><br>" + 
            "(D) '变化' 意味着使不同或变得不同。"
    },
    {
        id: 10,
        question: "The ongoing __________ about climate change policies has divided the community.",
        chinese_question: "关于气候变化政策的持续 __________ 使社区分裂。",
        answers: [
            { option: "A", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
            { option: "B", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "C", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'debate' metaphorically means a prolonged discussion or argument on a particular matter." + 
            "<br><br>" + 
            "(B) 'unity' means the state of being united or joined as a whole." + 
            "<br><br>" + 
            "(C) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." + 
            "<br><br>" + 
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '辩论' 比喻在特定问题上的长期讨论或争论。" + 
            "<br><br>" + 
            "(B) '团结' 意味着团结或作为一个整体结合的状态。" + 
            "<br><br>" + 
            "(C) '庆祝' 意味着通过从事令人愉快的、通常是社交活动来标志着对重要事件或场合的愉悦。" + 
            "<br><br>" + 
            "(D) '忽视' 意味着未能妥善照顾。"
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
