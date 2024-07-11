// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new library's __________ features, such as ramps and elevators, made it easy for everyone to use.",
        chinese_question: "新图书馆的 __________ 特点，例如坡道和电梯，使每个人都能轻松使用。",
        answers: [
            { option: "A", answer: "inaccessibility", chinese_answer: "无法进入", chinese_romanization: "wúfǎ jìnrù" },
            { option: "B", answer: "exclusivity", chinese_answer: "排他性", chinese_romanization: "pái tā xìng" },
            { option: "C", answer: "accessibility", chinese_answer: "无障碍", chinese_romanization: "wú zhàng'ài" },
            { option: "D", answer: "privacy", chinese_answer: "隐私", chinese_romanization: "yǐnsī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accessibility' means the quality of being able to be reached or entered." +
            "<br><br>" +
            "(A) 'inaccessibility' means the quality of being difficult or impossible to reach, approach, or understand." +
            "<br><br>" +
            "(B) 'exclusivity' means the practice of excluding or not admitting other things." +
            "<br><br>" +
            "(D) 'privacy' means the state of being free from public attention.",
        chinese_explanation: "(C) '无障碍' 一词意味着能够到达或进入的质量。" +
            "<br><br>" +
            "(A) '无法进入' 意味着难以或不可能到达、接近或理解的质量。" +
            "<br><br>" +
            "(B) '排他性' 意味着排除或不承认其他事物的做法。" +
            "<br><br>" +
            "(D) '隐私' 意味着不受公众关注的状态。"
    },
    {
        id: 2,
        question: "The __________ of the situation was clear when the clown walked into the boardroom during the serious business meeting.",
        chinese_question: "当小丑在严肃的商务会议期间走进会议室时，情况的 __________ 显而易见。",
        answers: [
            { option: "A", answer: "seriousness", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "absurdity", chinese_answer: "荒谬", chinese_romanization: "huāngmiù" },
            { option: "C", answer: "normalcy", chinese_answer: "正常", chinese_romanization: "zhèngcháng" },
            { option: "D", answer: "gravity", chinese_answer: "重要性", chinese_romanization: "zhòngyàoxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'absurdity' means the quality or state of being ridiculous or wildly unreasonable." +
            "<br><br>" +
            "(A) 'seriousness' means the quality or state of being serious." +
            "<br><br>" +
            "(C) 'normalcy' means the condition of being normal; the state of being usual, typical, or expected." +
            "<br><br>" +
            "(D) 'gravity' means extreme or alarming importance; seriousness.",
        chinese_explanation: "(B) '荒谬' 一词意味着荒谬或极不合理的品质或状态。" +
            "<br><br>" +
            "(A) '严肃' 意味着严肃的品质或状态。" +
            "<br><br>" +
            "(C) '正常' 意味着正常的状态；通常、典型或预期的状态。" +
            "<br><br>" +
            "(D) '重要性' 意味着极端或惊人的重要性；严肃。"
    },
    {
        id: 3,
        question: "The journalist faced an __________ of bias after publishing a controversial article on the political scandal.",
        chinese_question: "记者在发表了一篇关于政治丑闻的有争议的文章后面临 __________ 的指控。",
        answers: [
            { option: "A", answer: "commendation", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "accusation", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "C", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "D", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accusation' means a charge or claim that someone has done something illegal or wrong." +
            "<br><br>" +
            "(A) 'commendation' means praise formally or officially." +
            "<br><br>" +
            "(C) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(D) 'compliment' means a polite expression of praise or admiration.",
        chinese_explanation: "(B) '指控' 一词意味着指控某人做了违法或错误的事情。" +
            "<br><br>" +
            "(A) '表扬' 意味着正式或正式的表扬。" +
            "<br><br>" +
            "(C) '赞扬' 意味着对某人或某事的赞许或钦佩的表达。" +
            "<br><br>" +
            "(D) '赞美' 意味着礼貌的赞美或钦佩的表达。"
    },
    {
        id: 4,
        question: "The school implemented strict policies to address the issue of bullying and hold the __________ accountable for their actions.",
        chinese_question: "学校实施了严格的政策来解决欺凌问题，并让 __________ 对其行为负责。",
        answers: [
            { option: "A", answer: "victim", chinese_answer: "受害者", chinese_romanization: "shòuhài zhě" },
            { option: "B", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" },
            { option: "C", answer: "aggressor", chinese_answer: "侵略者", chinese_romanization: "qīnlüè zhě" },
            { option: "D", answer: "mediator", chinese_answer: "调解人", chinese_romanization: "tiáojiě rén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aggressor' means a person or country that attacks another first." +
            "<br><br>" +
            "(A) 'victim' means a person harmed, injured, or killed as a result of a crime, accident, or other event or action." +
            "<br><br>" +
            "(B) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(D) 'mediator' means a person who attempts to make people involved in a conflict come to an agreement; a go-between.",
        chinese_explanation: "(C) '侵略者' 一词意味着首先攻击另一个人的人或国家。" +
            "<br><br>" +
            "(A) '受害者' 意味着由于犯罪、事故或其他事件或行为而受到伤害、受伤或被杀害的人。" +
            "<br><br>" +
            "(B) '观察者' 意味着观察或注意到某事的人。" +
            "<br><br>" +
            "(D) '调解人' 意味着试图让参与冲突的人达成协议的人；中间人。"
    },
    {
        id: 5,
        question: "Even a __________ of truth, like a single piece of evidence, can be powerful in revealing hidden facts.",
        chinese_question: "即使是一点__________的真相，比如一条证据，也可以在揭示隐藏事实方面很有力量。",
        answers: [
            { option: "A", answer: "heap", chinese_answer: "堆", chinese_romanization: "duī" },
            { option: "B", answer: "mass", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "D", answer: "modicum", chinese_answer: "少量", chinese_romanization: "shǎoliàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'modicum' refers to a small quantity of a particular thing, especially something considered desirable or valuable." +
            "<br><br>" +
            "(A) 'heap' refers to an untidy collection of things piled up haphazardly." +
            "<br><br>" +
            "(B) 'mass' refers to a large body of matter with no definite shape." +
            "<br><br>" +
            "(C) 'surplus' refers to an amount of something left over when requirements have been met; an excess of production or supply.",
        chinese_explanation: "(D) '少量' 指的是特定事物的一小部分，尤其是被认为有价值的东西。" +
            "<br><br>" +
            "(A) '堆' 指的是杂乱无章堆积起来的东西。" +
            "<br><br>" +
            "(B) '大量' 指的是没有明确形状的大量物质。" +
            "<br><br>" +
            "(C) '过剩' 指的是满足需求后剩余的数量；生产或供应过剩。"
    },
    {
        id: 6,
        question: "The government arrested the __________ who spoke out against its policies and demanded more freedom for the citizens.",
        chinese_question: "政府逮捕了 __________，因为他反对政府的政策，并要求公民有更多的自由。",
        answers: [
            { option: "A", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" },
            { option: "B", answer: "ally", chinese_answer: "同盟", chinese_romanization: "tóngméng" },
            { option: "C", answer: "dissident", chinese_answer: "异议者", chinese_romanization: "yìyì zhě" },
            { option: "D", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dissident' means a person who opposes official policy, especially that of an authoritarian state." +
            "<br><br>" +
            "(A) 'supporter' means a person who approves of and encourages a public figure, political party, policy, etc." +
            "<br><br>" +
            "(B) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(D) 'advocate' means a person who publicly supports or recommends a particular cause or policy.",
        chinese_explanation: "(C) '异议者' 一词意味着反对官方政策的人，特别是专制国家的政策。" +
            "<br><br>" +
            "(A) '支持者' 意味着赞成并鼓励公众人物、政党、政策等的人。" +
            "<br><br>" +
            "(B) '同盟' 意味着为了军事或其他目的正式合作的国家。" +
            "<br><br>" +
            "(D) '倡导者' 意味着公开支持或推荐某一事业或政策的人。"
    },
    {
        id: 7,
        question: "The manager went on a __________ about the team's lack of effort, leaving everyone feeling demoralized.",
        chinese_question: "经理对团队的努力不足进行了一番 __________，让每个人都感到士气低落。",
        answers: [
            { option: "A", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "tirade", chinese_answer: "长篇大论的指责", chinese_romanization: "chángpiān dàlùn de zhǐzé" },
            { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "D", answer: "praise", chinese_answer: "夸奖", chinese_romanization: "kuājiǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tirade' means a long, angry speech of criticism or accusation." +
            "<br><br>" +
            "(A) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(C) 'whisper' means speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(D) 'praise' means express warm approval or admiration of.",
        chinese_explanation: "(B) '长篇大论的指责' 一词意味着长时间的愤怒演讲，批评或指责。" +
            "<br><br>" +
            "(A) '赞美' 意味着礼貌地表达钦佩或赞美。" +
            "<br><br>" +
            "(C) '低语' 意味着用气声轻声说话，特别是为了保密。" +
            "<br><br>" +
            "(D) '夸奖' 意味着表达热情的认可或钦佩。"
    },
    {
        id: 8,
        question: "Advances in __________ have led to better understanding and treatment of chronic illnesses.",
        chinese_question: "__________的进步导致了对慢性病更好的理解和治疗。",
        answers: [
            { option: "A", answer: "fitness", chinese_answer: "健康", chinese_romanization: "jiànkāng" },
            { option: "B", answer: "vigor", chinese_answer: "活力", chinese_romanization: "huólì" },
            { option: "C", answer: "strength", chinese_answer: "力量", chinese_romanization: "lìliàng" },
            { option: "D", answer: "pathology", chinese_answer: "病理", chinese_romanization: "bìnglǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pathology' refers to the scientific study of disease and its causes, processes, development, and consequences." +
            "<br><br>" +
            "(A) 'fitness' refers to the condition of being physically fit and healthy." +
            "<br><br>" +
            "(B) 'vigor' refers to physical strength and good health." +
            "<br><br>" +
            "(C) 'strength' refers to the quality or state of being physically strong.",
        chinese_explanation: "(D) '病理' 指的是对疾病及其原因、过程、发展和后果的科学研究。" +
            "<br><br>" +
            "(A) '健康' 指的是身体健康和健身的状态。" +
            "<br><br>" +
            "(B) '活力' 指的是身体的力量和健康。" +
            "<br><br>" +
            "(C) '力量' 指的是身体强壮的品质或状态。"
    },
    {
        id: 9,
        question: "She felt an immediate __________ with the new colleague, realizing they shared similar interests and values.",
        chinese_question: "她对新同事感到立即的 __________，发现他们有相似的兴趣和价值观。",
        answers: [
            { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "B", answer: "affinity", chinese_answer: "亲和力", chinese_romanization: "qīnhélì" },
            { option: "C", answer: "distance", chinese_answer: "距离", chinese_romanization: "jùlí" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'affinity' means a natural liking for and understanding of someone or something." +
            "<br><br>" +
            "(A) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(C) 'distance' means the amount of space between two things or people." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '亲和力' 一词意味着对某人或某事的自然喜欢和理解。" +
            "<br><br>" +
            "(A) '厌恶' 意味着强烈的厌恶或不情愿。" +
            "<br><br>" +
            "(C) '距离' 意味着两物或两人之间的空间量。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 10,
        question: "There is a significant __________ in income between the richest and the poorest members of society, with the wealthy earning exponentially more than the poor.",
        chinese_question: "社会上最富有和最贫穷的成员之间存在显著的 __________，富人的收入是穷人的数倍。",
        answers: [
            { option: "A", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "B", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" },
            { option: "C", answer: "disparity", chinese_answer: "差距", chinese_romanization: "chājù" },
            { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disparity' means a great difference." +
            "<br><br>" +
            "(A) 'similarity' means the state or fact of being similar." +
            "<br><br>" +
            "(B) 'equality' means the state of being equal, especially in status, rights, and opportunities." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.",
        chinese_explanation: "(C) '差距' 一词意味着很大的差异。" +
            "<br><br>" +
            "(A) '相似' 意味着相似的状态或事实。" +
            "<br><br>" +
            "(B) '平等' 意味着状态的平等，特别是在地位、权利和机会方面。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发出的音乐音符的组合，以产生和弦和和弦进行，具有令人愉悦的效果。"
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
