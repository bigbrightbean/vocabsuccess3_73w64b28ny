// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The historical drama was criticized for its __________ costumes, which did not fit the time period it was set in.",
        chinese_question: "这部历史剧因其 __________ 的服装而受到批评，这些服装与设定的时间段不符。",
        answers: [
            { option: "A", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" },
            { option: "B", answer: "timely", chinese_answer: "及时", chinese_romanization: "jíshí" },
            { option: "C", answer: "anachronistic", chinese_answer: "时代错误", chinese_romanization: "shídài cuòwù" },
            { option: "D", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anachronistic' means belonging to a period other than that being portrayed." +
            "<br><br>" +
            "(A) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(B) 'timely' means done or occurring at a favorable or useful time; opportune." +
            "<br><br>" +
            "(D) 'modern' means relating to the present or recent times as opposed to the remote past.",
        chinese_explanation: "(C) '时代错误' 一词意味着属于所描绘时期之外的。" +
            "<br><br>" +
            "(A) '当代' 意味着同时代的或发生在同一时间。" +
            "<br><br>" +
            "(B) '及时' 意味着在有利或有用的时间完成或发生；适时的。" +
            "<br><br>" +
            "(D) '现代' 意味着与现在或最近的时代有关的，而不是遥远的过去。"
    },
    {
        id: 2,
        question: "Her __________ insights into the company's financial problems helped them avoid bankruptcy.",
        chinese_question: "她对公司财务问题的 __________ 洞察帮助他们避免了破产。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "unobservant", chinese_answer: "不注意", chinese_romanization: "bù zhùyì" },
            { option: "C", answer: "perspicacious", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "D", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perspicacious' means having a ready insight into and understanding of things." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general." +
            "<br><br>" +
            "(B) 'unobservant' means not paying careful attention." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '敏锐' 一词意味着对事物有敏锐洞察力和理解力的。" +
            "<br><br>" +
            "(A) '无知' 意味着总体上缺乏知识或意识。" +
            "<br><br>" +
            "(B) '不注意' 意味着不仔细注意。" +
            "<br><br>" +
            "(D) '粗心' 意味着没有给予足够的注意或考虑以避免伤害或错误。"
    },
    {
        id: 3,
        question: "The scientist's research became __________, serving as a model for future studies in the field of molecular biology.",
        chinese_question: "这位科学家的研究成为 __________ 的例子，为未来的分子生物学研究树立了典范。",
        answers: [
            { option: "A", answer: "atypical", chinese_answer: "非典型", chinese_romanization: "fēi diǎnxíng" },
            { option: "B", answer: "paradigmatic", chinese_answer: "典范", chinese_romanization: "diǎnfàn" },
            { option: "C", answer: "unconventional", chinese_answer: "非传统", chinese_romanization: "fēi chuántǒng" },
            { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paradigmatic' means serving as a typical example or pattern of something; exemplary." +
            "<br><br>" +
            "(A) 'atypical' means not representative of a type, group, or class." +
            "<br><br>" +
            "(C) 'unconventional' means not based on or conforming to what is generally done or believed." +
            "<br><br>" +
            "(D) 'obscure' means not discovered or known about; uncertain.",
        chinese_explanation: "(B) '典范' 一词意味着作为某事的典型例子或模式的；模范的。" +
            "<br><br>" +
            "(A) '非典型' 意味着不代表一种类型、群体或类别的。" +
            "<br><br>" +
            "(C) '非传统' 意味着不基于或不符合通常做或相信的。" +
            "<br><br>" +
            "(D) '模糊' 意味着不被发现或不为人知的；不确定的。"
    },
    {
        id: 4,
        question: "In the __________ chapter of the book, the plot reaches a critical turning point that sets the stage for the final resolution.",
        chinese_question: "在书的 __________ 章节，情节达到了关键的转折点，为最终的解决奠定了基础。",
        answers: [
            { option: "A", answer: "first", chinese_answer: "第一", chinese_romanization: "dì yī" },
            { option: "B", answer: "penultimate", chinese_answer: "倒数第二", chinese_romanization: "dàoshǔ dì èr" },
            { option: "C", answer: "last", chinese_answer: "最后", chinese_romanization: "zuìhòu" },
            { option: "D", answer: "introductory", chinese_answer: "介绍", chinese_romanization: "jièshào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'penultimate' means last but one in a series of things; second last." +
            "<br><br>" +
            "(A) 'first' means coming before all others in time or order; earliest; 1st." +
            "<br><br>" +
            "(C) 'last' means coming after all others in time or order; final." +
            "<br><br>" +
            "(D) 'introductory' means serving as an introduction to a subject or topic; basic or preliminary.",
        chinese_explanation: "(B) '倒数第二' 一词意味着在一系列事物中倒数第二的。" +
            "<br><br>" +
            "(A) '第一' 意味着在时间或顺序上排在所有其他之前；最早的；第一的。" +
            "<br><br>" +
            "(C) '最后' 意味着在时间或顺序上排在所有其他之后；最终的。" +
            "<br><br>" +
            "(D) '介绍' 意味着作为某个主题或话题的介绍；基本或初步的。"
    },
    {
        id: 5,
        question: "His __________ comments about immigrants were condemned by the community for being prejudiced and hateful.",
        chinese_question: "他对移民的 __________ 评论因其偏见和仇恨而受到社区的谴责。",
        answers: [
            { option: "A", answer: "welcoming", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "xenophobic", chinese_answer: "排外", chinese_romanization: "páiwài" },
            { option: "C", answer: "inclusive", chinese_answer: "包容", chinese_romanization: "bāoróng" },
            { option: "D", answer: "tolerant", chinese_answer: "宽容", chinese_romanization: "kuānróng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'xenophobic' means having or showing a dislike of or prejudice against people from other countries." +
            "<br><br>" +
            "(A) 'welcoming' means behaving in a polite or friendly way to a guest or new arrival." +
            "<br><br>" +
            "(C) 'inclusive' means including all the services or items normally expected or required." +
            "<br><br>" +
            "(D) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
        chinese_explanation: "(B) '排外' 一词意味着对其他国家的人表现出不喜欢或偏见的。" +
            "<br><br>" +
            "(A) '热情' 意味着对客人或新来者表现出礼貌或友好的方式。" +
            "<br><br>" +
            "(C) '包容' 意味着包括所有通常预期或需要的服务或项目。" +
            "<br><br>" +
            "(D) '宽容' 意味着表现出允许存在自己不一定同意的意见或行为的意愿。"
    },
    {
        id: 6,
        question: "The contract was __________ by fraud, rendering it null and void.",
        chinese_question: "合同因欺诈而被 __________，使其无效。",
        answers: [
            { option: "A", answer: "validated", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "B", answer: "enhanced", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "vitiated", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
            { option: "D", answer: "strengthened", chinese_answer: "强化", chinese_romanization: "qiánghuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vitiated' means spoiled or impaired the quality or efficiency of." +
            "<br><br>" +
            "(A) 'validated' means check or prove the validity or accuracy of." +
            "<br><br>" +
            "(B) 'enhanced' means intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(D) 'strengthened' means make or become stronger.",
        chinese_explanation: "(C) '损害' 一词意味着损坏或削弱质量或效率。" +
            "<br><br>" +
            "(A) '验证' 意味着检查或证明有效性或准确性。" +
            "<br><br>" +
            "(B) '增强' 意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(D) '强化' 意味着使或变得更强。"
    },
    {
        id: 7,
        question: "Despite facing numerous setbacks, she remained __________ and continued to pursue her goals.",
        chinese_question: "尽管面临无数挫折，她仍然 __________，继续追求自己的目标。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "B", answer: "resilient", chinese_answer: "有弹性", chinese_romanization: "yǒu tánxìng" },
            { option: "C", answer: "delicate", chinese_answer: "精细", chinese_romanization: "jīngxì" },
            { option: "D", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(C) 'delicate' means very fine in texture or structure; easily broken or damaged." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(B) '有弹性' 一词意味着能够快速从困难的环境中承受或恢复过来。" +
            "<br><br>" +
            "(A) '脆弱' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(C) '精细' 意味着质地或结构非常细的；容易破碎或损坏的。" +
            "<br><br>" +
            "(D) '弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。"
    },
    {
        id: 8,
         question: "The weather in the mountains is highly __________, changing from sunny to stormy in a matter of minutes.",
        chinese_question: "山区的天气高度 __________，几分钟内就会从晴天变成暴风雨。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "B", answer: "immutable", chinese_answer: "不变", chinese_romanization: "bùbiàn" },
            { option: "C", answer: "mutable", chinese_answer: "易变", chinese_romanization: "yì biàn" },
            { option: "D", answer: "stable", chinese_answer: "恒定", chinese_romanization: "héngdìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mutable' means liable to change." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(B) 'immutable' means unchanging over time or unable to be changed." +
            "<br><br>" +
            "(D) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(C) '易变' 一词意味着容易改变的。" +
            "<br><br>" +
            "'稳定' 意味着在一段时间内持续发生的。" +
            "<br><br>" +
            "'不变' 意味着随着时间的推移不改变的或无法改变的。" +
            "<br><br>" +
            "'恒定' 意味着不太可能改变或失败的；牢固确立的。"
    },
    {
        id: 9,
        question: "His __________ way of organizing his desk made sense only to him, with each item having a specific but unusual place.",
        chinese_question: "他 __________ 的桌面整理方式只有他自己理解，每件物品都有一个特定但不寻常的位置。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "B", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
            { option: "C", answer: "idiosyncratic", chinese_answer: "独特", chinese_romanization: "dútè" },
            { option: "D", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'idiosyncratic' means peculiar or individual." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(C) '独特' 一词意味着独特的或个人的。" +
            "<br><br>" +
            "'传统' 意味着基于或符合通常的做法或信念。" +
            "<br><br>" +
            "'常见' 意味着经常发生、发现或做的；普遍的。" +
            "<br><br>" +
            "'典型' 意味着具有某种类型的人或事物的独特特质。"
    },
    {
        id: 10,
        question: "The __________ children were difficult to manage and constantly caused disruptions.",
        chinese_question: "这些 __________ 的孩子难以管理，总是引起干扰。",
        answers: [
            { option: "A", answer: "well-behaved", chinese_answer: "行为良好", chinese_romanization: "xíngwéi liánghǎo" },
            { option: "B", answer: "fractious", chinese_answer: "暴躁", chinese_romanization: "bàozào" },
            { option: "C", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fractious' means irritable and quarrelsome." +
            "<br><br>" +
            "(A) 'well-behaved' means conducting oneself in an appropriate manner." +
            "<br><br>" +
            "(C) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(B) '暴躁' 一词意味着易怒和好争吵的。" +
            "<br><br>" +
            "'行为良好' 意味着以适当的方式行事。" +
            "<br><br>" +
            "'顺从' 意味着服从或愿意服从命令或要求的；服从他人的意愿。" +
            "<br><br>" +
            "'平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。"
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
