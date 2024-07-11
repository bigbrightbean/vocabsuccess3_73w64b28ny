// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new construction project threatens to __________ on the protected wetlands, causing concern among environmentalists.",
        chinese_question: "新的建设项目威胁到 __________ 受保护的湿地，引起了环保人士的担忧。",
        answers: [
            { option: "A", answer: "encroach", chinese_answer: "侵占", chinese_romanization: "qīnzhàn" },
            { option: "B", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "C", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'encroach' means intrude on (a person's territory, rights, etc.)." +
            "<br><br>" +
            "(B) 'retreat' means move back or withdraw." +
            "<br><br>" +
            "(C) 'preserve' means maintain (something) in its original or existing state." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(A) '侵占' 一词意味着侵入（某人的领土、权利等）。" +
            "<br><br>" +
            "(B) '撤退' 意味着后退或撤回。" +
            "<br><br>" +
            "(C) '保护' 意味着保持（某物）的原始或现有状态。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 2,
        question: "The outdoor event was __________ on the weather, and unfortunately, it rained all day.",
        chinese_question: "户外活动 __________ 于天气，不幸的是，整天下雨。",
        answers: [
            { option: "A", answer: "independent", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
            { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "contingent", chinese_answer: "取决于", chinese_romanization: "qǔjué yú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contingent' means subject to chance; dependent on." +
            "<br><br>" +
            "(A) 'independent' means free from outside control; not subject to another's authority." +
            "<br><br>" +
            "(B) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(C) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(D) '取决于' 一词意味着受机会影响的；依赖的。" +
            "<br><br>" +
            "(A) '独立的' 意味着不受外界控制的；不受他人权威约束的。" +
            "<br><br>" +
            "(B) '无关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(C) '确定的' 意味着确知的；确立无疑的。"
    },
    {
        id: 3,
        question: "In order to treat the patient's bleeding wound, the doctor used a substance to help the blood __________.",
        chinese_question: "为了治疗病人的流血伤口，医生使用了一种物质来帮助血液 __________。",
        answers: [
            { option: "A", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
            { option: "B", answer: "coagulate", chinese_answer: "凝固", chinese_romanization: "nínggù" },
            { option: "C", answer: "dissolve", chinese_answer: "溶解", chinese_romanization: "róngjiě" },
            { option: "D", answer: "spread", chinese_answer: "扩散", chinese_romanization: "kuòsàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coagulate' means (of a fluid, especially blood) change to a solid or semi-solid state." +
            "<br><br>" +
            "(A) 'evaporate' means turn from liquid into vapor." +
            "<br><br>" +
            "(C) 'dissolve' means (with reference to a solid) become or cause to become incorporated into a liquid so as to form a solution." +
            "<br><br>" +
            "(D) 'spread' means open out (something) so as to extend its surface area, width, or length.",
        chinese_explanation: "(B) '凝固' 一词意味着（液体，尤其是血液）变为固体或半固体状态。" +
            "<br><br>" +
            "(A) '蒸发' 意味着从液体变成蒸汽。" +
            "<br><br>" +
            "(C) '溶解' 意味着（指固体）变成或导致变成液体，以形成溶液。" +
            "<br><br>" +
            "(D) '扩散' 意味着展开（某物），以扩大其表面积、宽度或长度。"
    },
    {
        id: 4,
        question: "Before passing away, the wealthy woman decided to __________ her entire estate to a charitable foundation.",
        chinese_question: "在去世之前，这位富有的女士决定将她的全部财产 __________ 给一个慈善基金会。",
        answers: [
            { option: "A", answer: "seize", chinese_answer: "抓住", chinese_romanization: "zhuāzhù" },
            { option: "B", answer: "bequeath", chinese_answer: "遗赠", chinese_romanization: "yízèng" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bequeath' means leave (a personal estate or one's body) to a person or other beneficiary by a will." +
            "<br><br>" +
            "(A) 'seize' means take hold of suddenly and forcibly." +
            "<br><br>" +
            "(C) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(B) '遗赠' 一词意味着通过遗嘱将（个人财产或身体）留给某人或其他受益人。" +
            "<br><br>" +
            "(A) '抓住' 意味着突然和强行地抓住。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（一个行动、实践或思维方式）。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 5,
        question: "In his quest for an heir, the king hoped to __________ a son who would continue his legacy.",
        chinese_question: "在寻找继承人的过程中，国王希望 __________ 一个儿子来延续他的遗产。",
        answers: [
            { option: "A", answer: "beget", chinese_answer: "生育", chinese_romanization: "shēngyù" },
            { option: "B", answer: "adopt", chinese_answer: "领养", chinese_romanization: "lǐngyǎng" },
            { option: "C", answer: "inherit", chinese_answer: "继承", chinese_romanization: "jìchéng" },
            { option: "D", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beget' means (especially of a man) bring (a child) into existence by the process of reproduction." +
            "<br><br>" +
            "(B) 'adopt' means legally take (another's child) and bring it up as one's own." +
            "<br><br>" +
            "(C) 'inherit' means receive (money, property, or a title) as an heir at the death of the previous holder." +
            "<br><br>" +
            "(D) 'purchase' means acquire (something) by paying for it; buy.",
        chinese_explanation: "(A) '生育' 一词意味着（特别是指男性）通过生殖过程带来（孩子）的存在。" +
            "<br><br>" +
            "(B) '领养' 意味着合法地收养（他人的孩子）并将其抚养成自己的孩子。" +
            "<br><br>" +
            "(C) '继承' 意味着在前任持有者去世时作为继承人接收（钱、财产或头衔）。" +
            "<br><br>" +
            "(D) '购买' 意味着通过支付获得（某物）；买。"
    },
    {
        id: 6,
        question: "Before making a decision, it is important to __________ all the facts and evidence to ensure you are well-informed.",
        chinese_question: "在做决定之前，重要的是要 __________ 所有的事实和证据，以确保你是信息充足的。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "ascertain", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "assume", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ascertain' means find (something) out for certain; make sure of." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'doubt' means feel uncertain about." +
            "<br><br>" +
            "(D) 'assume' means suppose to be the case, without proof.",
        chinese_explanation: "(B) '确定' 一词意味着确定（某事）；确保。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '假设' 意味着假定为事实，而没有证据。"
    },
    {
        id: 7,
        question: "The animal rights activists __________ the practice of testing cosmetics on animals, finding it cruel and unnecessary.",
        chinese_question: "动物权利活动家 __________ 在动物身上测试化妆品的做法，认为这种做法残忍且不必要。",
        answers: [
            { option: "A", answer: "admire", chinese_answer: "赞赏", chinese_romanization: "zànshǎng" },
            { option: "B", answer: "abhor", chinese_answer: "憎恶", chinese_romanization: "zēngwù" },
            { option: "C", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
            { option: "D", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abhor' means regard with disgust and hatred." +
            "<br><br>" +
            "(A) 'admire' means regard with respect or warm approval." +
            "<br><br>" +
            "(C) 'tolerate' means allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference." +
            "<br><br>" +
            "(D) 'accept' means consent to receive (a thing offered).",
        chinese_explanation: "(B) '憎恶' 一词意味着以厌恶和仇恨的态度看待。" +
            "<br><br>" +
            "(A) '赞赏' 意味着以尊重或热情的认可看待。" +
            "<br><br>" +
            "(C) '容忍' 意味着在没有干扰的情况下允许存在、发生或实践（某事），即使不一定喜欢或同意。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接收（提供的东西）。"
    },
    {
        id: 8,
        question: "She was able to __________ her thoughts clearly and confidently during the debate.",
        chinese_question: "在辩论中，她能够清晰而自信地 __________ 她的想法。",
        answers: [
            { option: "A", answer: "mumble", chinese_answer: "含糊地说", chinese_romanization: "hánhú de shuō" },
            { option: "B", answer: "stutter", chinese_answer: "结巴", chinese_romanization: "jiēbā" },
            { option: "C", answer: "articulate", chinese_answer: "清晰地表达", chinese_romanization: "qīngxī de biǎodá" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'articulate' means having or showing the ability to speak fluently and coherently." +
            "<br><br>" +
            "(A) 'mumble' means say something indistinctly and quietly, making it difficult for others to hear." +
            "<br><br>" +
            "(B) 'stutter' means talk with continued involuntary repetition of sounds, especially initial consonants." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(C) '清晰地表达' 一词意味着有或表现出流利和连贯说话的能力。" +
            "<br><br>" +
            "(A) '含糊地说' 意味着不清楚和安静地说某事，使其他人难以听到。" +
            "<br><br>" +
            "(B) '结巴' 意味着持续不自主地重复声音，尤其是初始辅音。" +
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 9,
        question: "The artist planned to __________ his vision by creating a large mural on the side of the building.",
        chinese_question: "艺术家计划通过在建筑物的一侧创作一幅大型壁画来 __________ 他的愿景。",
        answers: [
            { option: "A", answer: "imagine", chinese_answer: "想象", chinese_romanization: "xiǎngxiàng" },
            { option: "B", answer: "execute", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'execute' means carry out or put into effect (a plan, order, or course of action)." +
            "<br><br>" +
            "(A) 'imagine' means form a mental image or concept of." +
            "<br><br>" +
            "(C) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'abandon' means give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(B) '执行' 一词意味着实施或生效（计划、命令或行动路线）。" +
            "<br><br>" +
            "(A) '想象' 意味着形成一个心理图像或概念。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（行动、做法或思维方式）。"
    },
    {
        id: 10,
        question: "The workers were instructed to __________ the old bridge piece by piece to make way for the new construction.",
        chinese_question: "工人们被指示 __________ 旧桥，为新的建设让路。",
        answers: [
            { option: "A", answer: "construct", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "B", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" },
            { option: "C", answer: "build", chinese_answer: "建筑", chinese_romanization: "jiànzhù" },
            { option: "D", answer: "assemble", chinese_answer: "组装", chinese_romanization: "zǔzhuāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dismantle' means take (a machine or structure) to pieces." +
            "<br><br>" +
            "(A) 'construct' means build or erect (something, typically a building, road, or machine)." +
            "<br><br>" +
            "(C) 'build' means construct (something) by putting parts or material together." +
            "<br><br>" +
            "(D) 'assemble' means fit together the separate component parts of (a machine or other object).",
        chinese_explanation: "(B) '拆卸' 一词意味着将（机器或结构）拆成零件。" +
            "<br><br>" +
            "(A) '建造' 意味着建造或竖立（某物，通常是建筑物、道路或机器）。" +
            "<br><br>" +
            "(C) '建筑' 意味着通过将零件或材料组合在一起建造（某物）。" +
            "<br><br>" +
            "(D) '组装' 意味着将（机器或其他物体）的各个组件部分装配在一起。"
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
