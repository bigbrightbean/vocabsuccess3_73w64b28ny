// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of her perfume was appreciated, as it wasn't overpowering but rather a gentle hint of fragrance.",
        chinese_question: "她香水的 __________ 令人欣赏，因为它不是强烈的，而是温和的香味。",
        answers: [
            { option: "A", answer: "boldness", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "B", answer: "subtlety", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "C", answer: "intensity", chinese_answer: "强度", chinese_romanization: "qiángdù" },
            { option: "D", answer: "strength", chinese_answer: "力量", chinese_romanization: "lìliàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'subtlety' means the quality or state of being subtle, delicate, or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(A) 'boldness' means willingness to take risks and act innovatively; confidence or courage." +
            "<br><br>" +
            "(C) 'intensity' means the quality of being intense." +
            "<br><br>" +
            "(D) 'strength' means the quality or state of being physically strong.",
        chinese_explanation: "(B) '微妙' 一词意味着微妙、精致或精确的状态，难以分析或描述。" +
            "<br><br>" +
            "(A) '大胆' 意味着愿意冒险并创新；自信或勇气。" +
            "<br><br>" +
            "(C) '强度' 意味着强烈的性质。" +
            "<br><br>" +
            "(D) '力量' 意味着身体强壮的状态或品质。"
    },
    {
        id: 2,
        question: "The novel depicts the harsh realities of a __________ lifestyle, highlighting the struggles and resilience of the working-class community.",
        chinese_question: "这部小说描绘了 __________ 生活方式的残酷现实，突出了工人阶级社区的斗争和韧性。",
        answers: [
                { option: "A", answer: "proletarian", chinese_answer: "无产者", chinese_romanization: "wúchǎnzhě" },
                { option: "B", answer: "aristocratic", chinese_answer: "贵族的", chinese_romanization: "guìzú de" },
                { option: "C", answer: "ascetic", chinese_answer: "苦行的", chinese_romanization: "kǔxíng de" },
                { option: "D", answer: "bohemian", chinese_answer: "波西米亚的", chinese_romanization: "bōxīmǐyǎ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'proletarian' refers to the working class, often characterized by manual labor and low wages." +
            "<br><br>" +
            "(B) 'aristocratic' means belonging to or characteristic of the nobility or upper class." +
            "<br><br>" +
            "(C) 'ascetic' describes a lifestyle characterized by severe self-discipline and abstention from all forms of indulgence." +
            "<br><br>" +
            "(D) 'bohemian' refers to a socially unconventional person, especially one involved in the arts.",
        chinese_explanation: "(A) '无产者' 指的是工人阶级，通常以体力劳动和低工资为特征。" +
            "<br><br>" +
            "(B) '贵族的' 意味着属于或具有贵族或上层阶级的特征。" +
            "<br><br>" +
            "(C) '苦行的' 描述了一种以严格的自律和放弃所有形式的享受为特征的生活方式。" +
            "<br><br>" +
            "(D) '波西米亚的' 指的是社会上不拘一格的人，尤其是从事艺术的人。"
    },
    {
        id: 3,
        question: "The government imposed an __________ on all imports from the neighboring country due to rising political tensions.",
        chinese_question: "由于政治紧张局势加剧，政府对所有来自邻国的进口商品实施 __________。",
        answers: [
            { option: "A", answer: "tariff", chinese_answer: "关税", chinese_romanization: "guānshuì" },
            { option: "B", answer: "tax", chinese_answer: "税", chinese_romanization: "shuì" },
            { option: "C", answer: "subsidy", chinese_answer: "补贴", chinese_romanization: "bǔtiē" },
            { option: "D", answer: "embargo", chinese_answer: "禁运", chinese_romanization: "jìnyùn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'embargo' means an official ban on trade or other commercial activity with a particular country." +
            "<br><br>" +
            "(A) 'tariff' means a tax or duty to be paid on a particular class of imports or exports." +
            "<br><br>" +
            "(B) 'tax' means a compulsory contribution to state revenue." +
            "<br><br>" +
            "(C) 'subsidy' means a sum of money granted by the government or a public body to assist an industry or business.",
        chinese_explanation: "(D) '禁运' 一词意味着对与特定国家进行贸易或其他商业活动的官方禁令。" +
            "<br><br>" +
            "(A) '关税' 意味着对某类进口或出口商品征收的税或关税。" +
            "<br><br>" +
            "(B) '税' 意味着国家收入的强制性贡献。" +
            "<br><br>" +
            "(C) '补贴' 意味着政府或公共机构为帮助某个行业或企业提供的一笔钱。"
    },
    {
        id: 4,
        question: "The company's sudden bankruptcy was a complete __________, causing chaos and panic among the employees.",
        chinese_question: "公司的突然破产是一场彻底的 __________，在员工中引起了混乱和恐慌。",
        answers: [
            { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "C", answer: "debacle", chinese_answer: "彻底失败", chinese_romanization: "chèdǐ shībài" },
            { option: "D", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debacle' means a sudden and ignominious failure; a fiasco." +
            "<br><br>" +
            "(A) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(B) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(D) 'achievement' means a thing done successfully, typically by effort, courage, or skill.",
        chinese_explanation: "(C) '彻底失败' 一词意味着突然的和不光彩的失败；惨败。" +
            "<br><br>" +
            "(A) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(B) '成功' 意味着目标或目的的实现。" +
            "<br><br>" +
            "(D) '成就' 意味着通过努力、勇气或技能成功完成的事情。"
    },
    {
        id: 5,
        question: "The politician's __________ was evident when he preached about honesty while secretly engaging in corrupt practices.",
        chinese_question: "这位政客的 __________ 显而易见，当他宣扬诚实时，暗地里却从事腐败行为。",
        answers: [
            { option: "A", answer: "integrity", chinese_answer: "诚信", chinese_romanization: "chéngxìn" },
            { option: "B", answer: "hypocrisy", chinese_answer: "虚伪", chinese_romanization: "xūwěi" },
            { option: "C", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hypocrisy' means the practice of claiming to have moral standards or beliefs to which one's own behavior does not conform; pretense." +
            "<br><br>" +
            "(A) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy." +
            "<br><br>" +
            "(D) 'transparency' means the condition of being transparent.",
        chinese_explanation: "(B) '虚伪' 一词意味着声称拥有道德标准或信仰，而自己的行为不符合；伪装。" +
            "<br><br>" +
            "(A) '诚信' 意味着诚实和有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '真诚' 意味着没有伪装、欺骗或虚伪的品质。" +
            "<br><br>" +
            "(D) '透明' 意味着透明的状态。"
    },
    {
        id: 6,
        question: "The __________ of unauthorized goods at the airport led to several arrests, as customs officials seized several illegally imported items.",
        chinese_question: "机场 __________ 未经授权的货物导致了几起逮捕，海关官员查获了几件非法进口的物品。",
        answers: [
            { option: "A", answer: "distribution", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "B", answer: "production", chinese_answer: "生产", chinese_romanization: "shēngchǎn" },
            { option: "C", answer: "confiscation", chinese_answer: "没收", chinese_romanization: "mòshōu" },
            { option: "D", answer: "concealment", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'confiscation' means the action of taking or seizing someone's property with authority." +
            "<br><br>" +
            "(A) 'distribution' means the action of sharing something out among a number of recipients." +
            "<br><br>" +
            "(B) 'production' means the action of making or manufacturing from components or raw materials." +
            "<br><br>" +
            "(D) 'concealment' means the action of hiding something or preventing it from being known.",
        chinese_explanation: "(C) '没收' 一词意味着在授权下采取或扣押某人的财产的行为。" +
            "<br><br>" +
            "(A) '分配' 意味着在多名接收者之间分享某物的行为。" +
            "<br><br>" +
            "(B) '生产' 意味着从组件或原材料制作或制造的行为。" +
            "<br><br>" +
            "(D) '隐藏' 意味着隐藏某物或防止其被知晓的行为。"
    },
    {
        id: 7,
        question: "The movie's ending was filled with __________, leaving the audience in tears with its emotional impact.",
        chinese_question: "电影的结尾充满了 __________，其情感冲击力让观众潸然泪下。",
        answers: [
            { option: "A", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
            { option: "B", answer: "dullness", chinese_answer: "枯燥", chinese_romanization: "kūzào" },
            { option: "C", answer: "poignancy", chinese_answer: "辛酸", chinese_romanization: "xīnsuān" },
            { option: "D", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'poignancy' means the quality of evoking a keen sense of sadness or regret." +
            "<br><br>" +
            "(A) 'humor' means the quality of being amusing or comic." +
            "<br><br>" +
            "(B) 'dullness' means lack of interest or excitement." +
            "<br><br>" +
            "(D) 'simplicity' means the quality or condition of being easy to understand or do.",
        chinese_explanation: "(C) '辛酸' 一词意味着唤起强烈的悲伤或遗憾的品质。" +
            "<br><br>" +
            "(A) '幽默' 意味着有趣或喜剧的品质。" +
            "<br><br>" +
            "(B) '枯燥' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(D) '简单' 意味着易于理解或做的质量或条件。"
    },
    {
        id: 8,
        question: "The activist campaigned tirelessly for a __________ for all those imprisoned unjustly, seeking to delay their sentences while their cases were reviewed.",
        chinese_question: "这位活动家不知疲倦地为所有被不公正监禁的人争取 __________，希望在他们的案件得到审查时推迟他们的刑期。",
        answers: [
                { option: "A", answer: "reprieve", chinese_answer: "缓刑", chinese_romanization: "huǎnxíng" },
                { option: "B", answer: "sentence", chinese_answer: "判决", chinese_romanization: "pànjué" },
                { option: "C", answer: "appeal", chinese_answer: "上诉", chinese_romanization: "shàngsù" },
                { option: "D", answer: "acquittal", chinese_answer: "无罪释放", chinese_romanization: "wúzuì shìfàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reprieve' refers to a temporary delay in the enforcement of a sentence, especially in capital cases." +
            "<br><br>" +
            "(B) 'sentence' is the punishment assigned to a defendant found guilty by a court." +
            "<br><br>" +
            "(C) 'appeal' is the process of applying to a higher court for a reversal of the decision of a lower court." +
            "<br><br>" +
            "(D) 'acquittal' is a judgment that a person is not guilty of the crime with which they have been charged.",
        chinese_explanation: "(A) '缓刑' 指的是暂时延迟执行判决，尤其是在死刑案件中。" +
            "<br><br>" +
            "(B) '判决' 是法院对被告判有罪后分配的处罚。" +
            "<br><br>" +
            "(C) '上诉' 是向上级法院申请撤销下级法院的决定的过程。" +
            "<br><br>" +
            "(D) '无罪释放' 是判定某人无罪的裁决。"
    },
    {
        id: 9,
        question: "The complexities of the legal system can be daunting for those who are not familiar with its intricacies.",
        chinese_question: "法律系统的复杂性可能会让那些不熟悉其复杂性的人感到望而却步。",
        answers: [
            { option: "A", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "rigidity", chinese_answer: "僵硬", chinese_romanization: "jiāngyìng" },
            { option: "C", answer: "complexities", chinese_answer: "复杂性", chinese_romanization: "fùzáxìng" },
            { option: "D", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuóxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'complexities' refers to the state or quality of being intricate or complicated." +
            "<br><br>" +
            "(A) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(B) 'rigidity' means the quality or state of being stiff or unyielding." +
            "<br><br>" +
            "(D) 'flexibility' means the quality of bending easily without breaking.",
        chinese_explanation: "(C) '复杂性' 指的是复杂或错综复杂的状态或质量。" +
            "<br><br>" +
            "(A) '简单' 意味着易于理解或操作的性质或条件。" +
            "<br><br>" +
            "(B) '僵硬' 意味着僵硬或不屈的质量或状态。" +
            "<br><br>" +
            "(D) '灵活性' 意味着在不破裂的情况下轻松弯曲的质量。"
    },
    {
        id: 10,
        question: "The team received __________ for their innovative project, earning praise from industry experts.",
        chinese_question: "团队因其创新项目而获得了 __________，赢得了行业专家的赞扬。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "C", answer: "kudos", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "D", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bù zànchéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kudos' means praise and honor received for an achievement." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'disapproval' means possession or expression of an unfavorable opinion.",
        chinese_explanation: "(C) '荣誉' 意味着因成就而获得的赞扬和荣誉。" +
            "<br><br>" +
            "(A) '批评' 意味着基于感知的错误或错误表达不赞成。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '不赞成' 意味着拥有或表达不赞成的意见。"
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
