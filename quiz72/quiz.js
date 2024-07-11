// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ in interrupting the CEO's speech left the entire audience in disbelief.",
        chinese_question: "他打断首席执行官演讲的 __________ 让整个观众难以置信。",
        answers: [
            { option: "A", answer: "timidity", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" },
            { option: "B", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "C", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "effrontery", chinese_answer: "厚颜无耻", chinese_romanization: "hòuyán wúchǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'effrontery' refers to insolent or impertinent behavior." +
            "<br><br>" +
            "(A) 'timidity' refers to a lack of courage or confidence." +
            "<br><br>" +
            "(B) 'modesty' refers to the quality of not being too proud or confident about yourself or your abilities." +
            "<br><br>" +
            "(C) 'humility' refers to a modest or low view of one's own importance; humbleness.",
        chinese_explanation: "(D) '厚颜无耻' 指的是无礼或无礼的行为。" +
            "<br><br>" +
            "(A) '胆怯' 指的是缺乏勇气或信心。" +
            "<br><br>" +
            "(B) '谦虚' 指的是不过分自信或自豪的品质。" +
            "<br><br>" +
            "(C) '谦逊' 指的是对自己的重要性持谦虚或低调的态度；谦卑。"
    },
    {
        id: 2,
        question: "Having to redo the entire project was a major __________, but it ultimately improved the final result.",
        chinese_question: "不得不重新做整个项目是一个很大的 __________，但最终改善了最终结果。",
        answers: [
            { option: "A", answer: "benefit", chinese_answer: "益处", chinese_romanization: "yìchù" },
            { option: "B", answer: "pleasure", chinese_answer: "乐趣", chinese_romanization: "lèqù" },
            { option: "C", answer: "inconvenience", chinese_answer: "不便", chinese_romanization: "bùbiàn" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inconvenience' figuratively means a situation or event causing difficulty or discomfort." +
            "<br><br>" +
            "(A) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(B) 'pleasure' means a feeling of happy satisfaction and enjoyment." +
            "<br><br>" +
            "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(C) '不便' 在比喻意义上意味着引起困难或不适的情况或事件。" +
            "<br><br>" +
            "(A) '益处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(B) '乐趣' 意味着一种快乐的满足和享受的感觉。" +
            "<br><br>" +
            "(D) '优势' 意味着使一个人处于有利或优越位置的条件或环境。"
    },
    {
        id: 3,
        question: "The students showed great __________ for their teacher, standing silently and attentively as she entered the room.",
        chinese_question: "学生们对他们的老师表现出极大的 __________，在她走进房间时静静地站着，专注地看着她。",
        answers: [
            { option: "A", answer: "sagacity", chinese_answer: "睿智", chinese_romanization: "ruìzhì" },
            { option: "B", answer: "spontaneity", chinese_answer: "自发", chinese_romanization: "zìfā" },
            { option: "C", answer: "reverence", chinese_answer: "敬畏", chinese_romanization: "jìngwèi" },
            { option: "D", answer: "scrutiny", chinese_answer: "审查", chinese_romanization: "shěnchá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reverence' means deep respect for someone or something." +
            "<br><br>" +
            "(A) 'sagacity' means having or showing keen mental discernment and good judgment; wise." +
            "<br><br>" +
            "(B) 'spontaneity' means the condition of being spontaneous; spontaneous behavior or action." +
            "<br><br>" +
            "(D) 'scrutiny' means critical observation or examination.",
        chinese_explanation: "(C) '敬畏' 意味着对某人或某事的深深尊敬。" +
            "<br><br>" +
            "(A) '睿智' 意味着具有或表现出敏锐的判断力和良好的判断力；明智的。" +
            "<br><br>" +
            "(B) '自发' 意味着自发的状态；自发行为或行动。" +
            "<br><br>" +
            "(D) '审查' 意味着批判性的观察或检查。"
    },
    {
        id: 4,
        question: "The earthquake was a __________ that devastated the entire region, leaving buildings in ruins and thousands homeless.",
        chinese_question: "地震是一场 __________，摧毁了整个地区，建筑物被夷为平地，成千上万的人无家可归。",
        answers: [
            { option: "A", answer: "miracle", chinese_answer: "奇迹", chinese_romanization: "qíjī" },
            { option: "B", answer: "blessing", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
            { option: "C", answer: "cataclysm", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "D", answer: "improvement", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cataclysm' means a large-scale and violent event in the natural world." +
            "<br><br>" +
            "(A) 'miracle' means an extraordinary and welcome event that is not explicable by natural or scientific laws and is therefore attributed to a divine agency." +
            "<br><br>" +
            "(B) 'blessing' means God's favor and protection." +
            "<br><br>" +
            "(D) 'improvement' means a thing that makes something better or is better than something else.",
        chinese_explanation: "(C) '灾难' 一词意味着自然界中的大规模和暴力事件。" +
            "<br><br>" +
            "(A) '奇迹' 意味着一种非凡和受欢迎的事件，无法用自然或科学规律解释，因此被归因于神的行为。" +
            "<br><br>" +
            "(B) '祝福' 意味着上帝的恩惠和保护。" +
            "<br><br>" +
            "(D) '改善' 意味着使某物变得更好或比其他事物更好的东西。"
    },
    {
        id: 5,
        question: "Her sudden rise to fame was a __________ that no one had anticipated, much like a viral internet sensation that captures global attention overnight.",
        chinese_question: "她突然成名是一个没有人预料到的 __________，就像一夜之间吸引全球关注的网络现象。",
        answers: [
            { option: "A", answer: "disaster", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "B", answer: "phenomenon", chinese_answer: "现象", chinese_romanization: "xiànxiàng" },
            { option: "C", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "D", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'phenomenon' figuratively means an extraordinary or remarkable event." +
            "<br><br>" +
            "(A) 'disaster' means a sudden event, such as an accident or a natural catastrophe, that causes great damage or loss of life." +
            "<br><br>" +
            "(C) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(D) 'failure' means lack of success.",
        chinese_explanation: "(B) '现象' 在比喻意义上意味着非凡或显著的事件。" +
            "<br><br>" +
            "(A) '灾难' 意味着突然发生的事件，如事故或自然灾害，造成巨大损失或生命损失。" +
            "<br><br>" +
            "(C) '错误' 意味着误导或错误的行为或判断。" +
            "<br><br>" +
            "(D) '失败' 意味着缺乏成功。"
    },
    {
        id: 6,
        question: "The doctor diagnosed her with __________ after she complained of severe chest pain and difficulty breathing.",
        chinese_question: "医生诊断她患有 __________，因为她抱怨剧烈胸痛和呼吸困难。",
        answers: [
            { option: "A", answer: "asthma", chinese_answer: "哮喘", chinese_romanization: "xiàochuǎn" },
            { option: "B", answer: "pneumonia", chinese_answer: "肺炎", chinese_romanization: "fèiyán" },
            { option: "C", answer: "bronchitis", chinese_answer: "支气管炎", chinese_romanization: "zhīqìguǎn yán" },
            { option: "D", answer: "tuberculosis", chinese_answer: "结核病", chinese_romanization: "jiéhébìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pneumonia' means an infection that inflames the air sacs in one or both lungs, which may fill with fluid." +
            "<br><br>" +
            "(A) 'asthma' means a respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing." +
            "<br><br>" +
            "(C) 'bronchitis' means inflammation of the mucous membrane in the bronchial tubes." +
            "<br><br>" +
            "(D) 'tuberculosis' means an infectious bacterial disease characterized by the growth of nodules (tubercles) in the tissues, especially the lungs.",
        chinese_explanation: "(B) '肺炎' 一词意味着一种感染，会使一个或两个肺部的气囊发炎，并可能充满液体。" +
            "<br><br>" +
            "(A) '哮喘' 意味着一种呼吸道状况，表现为支气管痉挛，导致呼吸困难。" +
            "<br><br>" +
            "(C) '支气管炎' 意味着支气管管黏膜的炎症。" +
            "<br><br>" +
            "(D) '结核病' 意味着一种传染性细菌病，特征是组织中（尤其是肺部）结节的生长。"
    },
    {
        id: 7,
        question: "The athlete was considered the __________ of perseverance, overcoming numerous obstacles to achieve his dreams.",
        chinese_question: "这位运动员被认为是坚持不懈的 __________，克服了许多障碍实现了他的梦想。",
        answers: [
                { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
                { option: "B", answer: "beginner", chinese_answer: "初学者", chinese_romanization: "chūxuézhě" },
                { option: "C", answer: "epitome", chinese_answer: "典范", chinese_romanization: "diǎnfàn" },
                { option: "D", answer: "mediocrity", chinese_answer: "平庸", chinese_romanization: "píngyōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'epitome' means a person or thing that is a perfect example of a particular quality or type." +
            "<br><br>" +
            "(A) 'failure' means lack of success." +
            "<br><br>" +
            "(B) 'beginner' means a person just starting to learn a skill or take part in an activity." +
            "<br><br>" +
            "(D) 'mediocrity' means the quality or state of being mediocre.",
        chinese_explanation: "(C) '典范' 意味着完美例子的一个人或事物。" +
            "<br><br>" +
            "(A) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(B) '初学者' 意味着刚开始学习一项技能或参与一项活动的人。" +
            "<br><br>" +
            "(D) '平庸' 意味着平庸的状态或特质。"
    },
    {
        id: 8,
        question: "The surgeon's __________ during the operation was crucial, as even a minor mistake could have serious consequences.",
        chinese_question: "外科医生在手术中的 __________ 非常关键，因为即使是小的错误也可能产生严重的后果。",
        answers: [
            { option: "A", answer: "carelessness", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "C", answer: "guesswork", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "D", answer: "approximation", chinese_answer: "近似", chinese_romanization: "jìnsì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'precision' means the quality, condition, or fact of being exact and accurate." +
            "<br><br>" +
            "(A) 'carelessness' means failure to give sufficient attention to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'guesswork' means the process or results of estimating or concluding something without sufficient information to be sure of being correct." +
            "<br><br>" +
            "(D) 'approximation' means a value or quantity that is nearly but not exactly correct.",
        chinese_explanation: "(B) '精确' 意味着精确和准确的质量、条件或事实。" +
            "<br><br>" +
            "(A) '粗心' 意味着未能给予足够的注意以避免伤害或错误。" +
            "<br><br>" +
            "(C) '猜测' 意味着在没有足够信息确信正确的情况下估计或得出结论的过程或结果。" +
            "<br><br>" +
            "(D) '近似' 意味着几乎但不完全正确的值或数量。"
    },
    {
        id: 9,
        question: "The __________ claimed to have the ability to see the future and offer guidance to those seeking advice.",
        chinese_question: "这位 __________ 声称具有预见未来的能力，并为那些寻求建议的人提供指导。",
        answers: [
            { option: "A", answer: "skeptic", chinese_answer: "怀疑者", chinese_romanization: "huáiyí zhě" },
            { option: "B", answer: "historian", chinese_answer: "历史学家", chinese_romanization: "lìshǐ xuéjiā" },
            { option: "C", answer: "clairvoyant", chinese_answer: "预言家", chinese_romanization: "yùyán jiā" },
            { option: "D", answer: "scientist", chinese_answer: "科学家", chinese_romanization: "kēxuéjiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'clairvoyant' means a person who claims to have a supernatural ability to perceive events in the future or beyond normal sensory contact." +
            "<br><br>" +
            "(A) 'skeptic' means a person inclined to question or doubt accepted opinions." +
            "<br><br>" +
            "(B) 'historian' means an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon." +
            "<br><br>" +
            "(D) 'scientist' means a person who is studying or has expert knowledge of one or more of the natural or physical sciences.",
        chinese_explanation: "(C) '预言家' 一词意味着声称具有超自然能力以感知未来或超越正常感官接触的人。" +
            "<br><br>" +
            "(A) '怀疑者' 意味着倾向于质疑或怀疑公认观点的人。" +
            "<br><br>" +
            "(B) '历史学家' 意味着某一特定时期、地理区域或社会现象的历史专家或学生。" +
            "<br><br>" +
            "(D) '科学家' 意味着研究或具有一个或多个自然或物理科学专业知识的人。"
    },
    {
        id: 10,
        question: "The school __________ ensured that all operations ran smoothly and efficiently, addressing any issues that arose promptly.",
        chinese_question: "学校 __________ 确保所有操作顺利高效地进行，及时解决出现的任何问题。",
        answers: [
            { option: "A", answer: "teacher", chinese_answer: "老师", chinese_romanization: "lǎoshī" },
            { option: "B", answer: "student", chinese_answer: "学生", chinese_romanization: "xuéshēng" },
            { option: "C", answer: "administrator", chinese_answer: "管理员", chinese_romanization: "guǎnlǐyuán" },
            { option: "D", answer: "janitor", chinese_answer: "清洁工", chinese_romanization: "qīngjiégōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'administrator' means a person responsible for running a business, organization, etc." +
            "<br><br>" +
            "(A) 'teacher' means a person who teaches, especially in a school." +
            "<br><br>" +
            "(B) 'student' means a person who is studying at a school or college." +
            "<br><br>" +
            "(D) 'janitor' means a person employed as a caretaker of a building; a custodian.",
        chinese_explanation: "(C) '管理员' 一词意味着负责经营企业、组织等的人。" +
            "<br><br>" +
            "(A) '老师' 意味着特别是在学校教书的人。" +
            "<br><br>" +
            "(B) '学生' 意味着在学校或大学学习的人。" +
            "<br><br>" +
            "(D) '清洁工' 意味着作为建筑物看护人的人；管理员。"
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
