// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The young activist quickly gained a reputation as a __________ for his passionate speeches and radical ideas.",
        chinese_question: "这位年轻的活动家因其充满激情的演讲和激进的思想迅速获得了__________的声誉。",
        answers: [
            { option: "A", answer: "peacemaker", chinese_answer: "和平使者", chinese_romanization: "hépíng shǐzhě" },
            { option: "B", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuí zhě" },
            { option: "C", answer: "firebrand", chinese_answer: "煽动者", chinese_romanization: "shāndòng zhě" },
            { option: "D", answer: "diplomat", chinese_answer: "外交官", chinese_romanization: "wàijiāo guān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'firebrand' means a person who is passionate about a particular cause, typically inciting change and taking radical action." + 
            "<br><br>" + 
            "(A) 'peacemaker' means a person who brings about peace, especially by reconciling adversaries." + 
            "<br><br>" + 
            "(B) 'follower' means a person who supports and admires a particular person or set of ideas." + 
            "<br><br>" + 
            "(D) 'diplomat' means an official representing a country abroad.",
        chinese_explanation: "(C) '煽动者'一词意味着一个热衷于某个特定事业的人，通常鼓动变革并采取激进行动。" + 
            "<br><br>" + 
            "(A) '和平使者' 意味着促成和平的人，尤其是通过调解对手。" + 
            "<br><br>" + 
            "(B) '追随者' 意味着支持和钦佩特定人物或一套思想的人。" + 
            "<br><br>" + 
            "(D) '外交官' 意味着在国外代表国家的官员。"
    },
    {
        id: 2,
        question: "The CEO attended the international business __________ to discuss global trade.",
        chinese_question: "首席执行官参加了国际商务 __________ 以讨论全球贸易。",
        answers: [
            { option: "A", answer: "summit", chinese_answer: "峰会", chinese_romanization: "fēnghuì" },
            { option: "B", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "C", answer: "breakdown", chinese_answer: "瓦解", chinese_romanization: "wǎjiě" },
            { option: "D", answer: "meeting", chinese_answer: "会议", chinese_romanization: "huìyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'summit' metaphorically means a meeting between heads of government." + 
            "<br><br>" + 
            "(B) 'conflict' means a serious disagreement or argument, typically a protracted one." + 
            "<br><br>" + 
            "(C) 'breakdown' means a failure of a relationship, system, or discussion." + 
            "<br><br>" + 
            "(D) 'meeting' means an assembly of people, especially the members of a society or committee, for discussion or entertainment.",
        chinese_explanation: "(A) '峰会' 比喻政府首脑之间的会议。" + 
            "<br><br>" + 
            "(B) '冲突' 意味着严重的分歧或争论，通常是长期的。" + 
            "<br><br>" + 
            "(C) '瓦解' 意味着关系、系统或讨论的失败。" + 
            "<br><br>" + 
            "(D) '会议' 意味着一群人（特别是社会或委员会的成员）聚集在一起进行讨论或娱乐。"
    },
    {
        id: 3,
        question: "The financial responsibility of the project became a heavy __________ for the team.",
        chinese_question: "项目的财务责任成为团队的沉重 __________。",
        answers: [
            { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "B", answer: "opportunity", chinese_answer: "机会", chinese_romanization: "jīhuì" },
            { option: "C", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burden' metaphorically means a duty or misfortune that causes hardship, anxiety, or grief." + 
            "<br><br>" + 
            "(B) 'opportunity' means a set of circumstances that makes it possible to do something." + 
            "<br><br>" + 
            "(C) 'benefit' means an advantage or profit gained from something." + 
            "<br><br>" + 
            "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(A) '负担' 比喻引起困难、焦虑或悲伤的职责或不幸。" + 
            "<br><br>" + 
            "(B) '机会' 意味着使做某事成为可能的一组情况。" + 
            "<br><br>" + 
            "(C) '利益' 意味着从某事中获得的优势或利润。" + 
            "<br><br>" + 
            "(D) '优势' 意味着使某人处于有利或优越地位的条件或情况。"
    },
    {
        id: 4,
        question: "The search engine uses a complex __________ to rank web pages based on their relevance and quality.",
        chinese_question: "搜索引擎使用复杂的 __________ 根据相关性和质量对网页进行排名。",
        answers: [
            { option: "A", answer: "manual", chinese_answer: "手册", chinese_romanization: "shǒucè" },
            { option: "B", answer: "algorithm", chinese_answer: "算法", chinese_romanization: "suànfǎ" },
            { option: "C", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "D", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'algorithm' means a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer." +
            "<br><br>" +
            "(A) 'manual' means a book giving instructions or information." +
            "<br><br>" +
            "(C) 'guess' means an estimate or conjecture." +
            "<br><br>" +
            "(D) 'mistake' means an action or judgment that is misguided or wrong.",
        chinese_explanation: "(B) '算法' 一词意味着在计算或其他问题解决操作中要遵循的过程或规则集，尤其是由计算机执行的。" +
            "<br><br>" +
            "(A) '手册' 意味着提供说明或信息的书。" +
            "<br><br>" +
            "(C) '猜测' 意味着估计或猜想。" +
            "<br><br>" +
            "(D) '错误' 意味着误导或错误的行为或判断。"
    },
    {
        id: 5,
        question: "He gave a compelling __________ at the conference, addressing the urgent need for climate action.",
        chinese_question: "他在会议上发表了一个引人注目的 __________，强调了气候行动的紧迫需要。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "address", chinese_answer: "演讲", chinese_romanization: "yǎnjiǎng" },
            { option: "C", answer: "conversation", chinese_answer: "对话", chinese_romanization: "duìhuà" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'address' means a formal speech delivered to an audience." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(C) 'conversation' means a talk, especially an informal one, between two or more people, in which news and ideas are exchanged." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '演讲' 一词意味着对观众发表的正式演讲。" +
            "<br><br>" +
            "(A) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(C) '对话' 意味着特别是两个人或更多人之间的非正式谈话，其中交流新闻和想法。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 6,
        question: "The __________ of the emergency alarm system ensured that all residents were quickly alerted to the danger.",
        chinese_question: "紧急警报系统的 __________ 确保所有居民迅速得知危险。",
        answers: [
            { option: "A", answer: "deactivation", chinese_answer: "停用", chinese_romanization: "tíngyòng" },
            { option: "B", answer: "activation", chinese_answer: "启动", chinese_romanization: "qǐdòng" },
            { option: "C", answer: "suspension", chinese_answer: "暂停", chinese_romanization: "zàntíng" },
            { option: "D", answer: "termination", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'activation' means the action or process of making something active or operative." +
            "<br><br>" +
            "(A) 'deactivation' means the action of making something inactive or no longer operative." +
            "<br><br>" +
            "(C) 'suspension' means the action of suspending someone or something or the condition of being suspended." +
            "<br><br>" +
            "(D) 'termination' means the action of bringing something or coming to an end.",
        chinese_explanation: "(B) '启动' 一词意味着使某物活跃或操作的动作或过程。" +
            "<br><br>" +
            "(A) '停用' 意味着使某物不活跃或不再操作的动作。" +
            "<br><br>" +
            "(C) '暂停' 意味着暂停某人或某物的行为或被暂停的状态。" +
            "<br><br>" +
            "(D) '终止' 意味着使某事结束的行为或过程。"
    },
    {
        id: 7,
        question: "The ghostly __________ in the old mansion scared the visitors, who claimed to have seen a figure floating through the halls.",
        chinese_question: "老宅子里的幽灵 __________ 吓坏了游客，他们声称看到一个身影在大厅里漂浮。",
        answers: [
            { option: "A", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "B", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" },
            { option: "C", answer: "apparition", chinese_answer: "幽灵", chinese_romanization: "yōulíng" },
            { option: "D", answer: "presence", chinese_answer: "存在", chinese_romanization: "cúnzài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apparition' means a ghost or ghostlike image of a person." +
            "<br><br>" +
            "(A) 'reality' means the world or the state of things as they actually exist." +
            "<br><br>" +
            "(B) 'illusion' means a thing that is or is likely to be wrongly perceived or interpreted by the senses." +
            "<br><br>" +
            "(D) 'presence' means the state or fact of existing, occurring, or being present in a place or thing.",
        chinese_explanation: "(C) '幽灵' 一词意味着人的鬼魂或鬼影。" +
            "<br><br>" +
            "(A) '现实' 意味着事物实际存在的世界或状态。" +
            "<br><br>" +
            "(B) '幻觉' 意味着通过感觉被错误感知或解释的事物。" +
            "<br><br>" +
            "(D) '存在' 意味着存在于某个地方或事物中的状态或事实。"
    },
    {
        id: 8,
        question: "The house showed clear signs of __________, with overgrown weeds and broken windows indicating that it had been deserted for years.",
        chinese_question: "这座房子明显显示出 __________ 的迹象，杂草丛生和破碎的窗户表明它已经被遗弃多年。",
        answers: [
            { option: "A", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "B", answer: "abandonment", chinese_answer: "遗弃", chinese_romanization: "yíqì" },
            { option: "C", answer: "renovation", chinese_answer: "翻新", chinese_romanization: "fānxīn" },
            { option: "D", answer: "maintenance", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abandonment' means the action or fact of abandoning or being abandoned." +
            "<br><br>" +
            "(A) 'repair' means the action of fixing or mending something." +
            "<br><br>" +
            "(C) 'renovation' means the action of restoring a building to a good state of repair." +
            "<br><br>" +
            "(D) 'maintenance' means the process of maintaining or preserving someone or something.",
        chinese_explanation: "(B) '遗弃' 一词意味着放弃或被放弃的行为或事实。" +
            "<br><br>" +
            "(A) '修理' 意味着修理或修补某物的行为。" +
            "<br><br>" +
            "(C) '翻新' 意味着将建筑物恢复到良好状态的行为。" +
            "<br><br>" +
            "(D) '维护' 意味着维护或保存某人或某物的过程。"
    },
    {
        id: 9,
        question: "He cherished his moments of __________, enjoying the peace and quiet away from the busy world.",
        chinese_question: "他珍惜他的 __________ 时刻，享受远离忙碌世界的宁静和安静。",
        answers: [
            { option: "A", answer: "company", chinese_answer: "陪伴", chinese_romanization: "péibàn" },
            { option: "B", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" },
            { option: "C", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "crowds", chinese_answer: "人群", chinese_romanization: "rénqún" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'solitude' means the state or situation of being alone." +
            "<br><br>" +
            "(A) 'company' means the fact or condition of being with another or others, especially in a way that provides friendship and enjoyment." +
            "<br><br>" +
            "(C) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(D) 'crowds' means large groups of people gathered together.",
        chinese_explanation: "(B) '孤独' 一词意味着独处的状态或情况。" +
            "<br><br>" +
            "(A) '陪伴' 意味着与他人或他人在一起的事实或情况，尤其是提供友谊和享受的方式。" +
            "<br><br>" +
            "(C) '混乱' 意味着完全的混乱和混乱。" +
            "<br><br>" +
            "(D) '人群' 意味着聚集在一起的大群人。"
    },
    {
        id: 10,
        question: "The wild animals went on a __________ through the village, causing extensive damage to property.",
        chinese_question: "野生动物在村庄里进行了一场 __________，造成了大量财产损失。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "rampage", chinese_answer: "横冲直撞", chinese_romanization: "héngchōngzhízhuàng" },
            { option: "C", answer: "stroll", chinese_answer: "散步", chinese_romanization: "sànbù" },
            { option: "D", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rampage' means rush around in a violent and uncontrollable manner." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'stroll' means walk in a leisurely way." +
            "<br><br>" +
            "(D) 'rest' means cease work or movement in order to relax, refresh oneself, or recover strength.",
        chinese_explanation: "(B) '横冲直撞' 一词意味着以暴力和无法控制的方式到处乱跑。" +
            "<br><br>" +
            "(A) '平静' 意味着不显示或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(C) '散步' 意味着以悠闲的方式行走。" +
            "<br><br>" +
            "(D) '休息' 意味着停止工作或运动以放松、恢复精力或恢复体力。"
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
