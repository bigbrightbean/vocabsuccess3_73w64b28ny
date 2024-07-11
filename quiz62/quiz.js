// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The negotiations reached a __________ when neither side was willing to compromise, leaving them stuck in a difficult situation.",
        chinese_question: "谈判陷入了 __________，因为双方都不愿妥协，使他们陷入困境。",
        answers: [
            { option: "A", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
            { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "C", answer: "quagmire", chinese_answer: "泥潭", chinese_romanization: "nítán" },
            { option: "D", answer: "resolution", chinese_answer: "决议", chinese_romanization: "juéyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quagmire' literally means a soft, boggy area of land that gives way underfoot. Metaphorically, it means a complex or hazardous situation." +
            "<br><br>" +
            "(A) 'breakthrough' means a sudden, dramatic, and important discovery or development." +
            "<br><br>" +
            "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(D) 'resolution' means a firm decision to do or not to do something.",
        chinese_explanation: "(C) '泥潭' 字面意思是脚下松软的湿地。比喻上，它意味着复杂或危险的情况。" +
            "<br><br>" +
            "(A) '突破' 意味着突然、戏剧性和重要的发现或发展。" +
            "<br><br>" +
            "(B) '解决方案' 意味着解决问题或处理困难情况的手段。" +
            "<br><br>" +
            "(D) '决议' 意味着坚定的决定做或不做某事。"
    },
    {
        id: 2,
        question: "The successful collaboration was the result of the __________ of ideas and efforts from all team members.",
        chinese_question: "成功的合作是所有团队成员的想法和努力 __________ 的结果。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "concurrence", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "C", answer: "discord", chinese_answer: "不和", chinese_romanization: "bù hé" },
            { option: "D", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concurrence' means the simultaneous occurrence of events or circumstances; agreement or consistency." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(C) 'discord' means disagreement between people." +
            "<br><br>" +
            "(D) 'disagreement' means lack of consensus or approval.",
        chinese_explanation: "(B) '一致' 一词意味着事件或情况的同时发生；一致或一致性。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(C) '不和' 意味着人们之间的分歧。" +
            "<br><br>" +
            "(D) '分歧' 意味着缺乏共识或批准。"
    },
    {
        id: 3,
        question: "Being a __________, he often convinced himself he was gravely ill despite reassurances from his doctor.",
        chinese_question: "作为一个 __________，尽管医生再三安慰，他仍常常相信自己病得很重。",
        answers: [
            { option: "A", answer: "realist", chinese_answer: "现实主义者", chinese_romanization: "xiànshí zhǔyì zhě" },
            { option: "B", answer: "hypochondriac", chinese_answer: "疑病症患者", chinese_romanization: "yíbìng zhèng huànzhě" },
            { option: "C", answer: "optimist", chinese_answer: "乐观主义者", chinese_romanization: "lèguān zhǔyì zhě" },
            { option: "D", answer: "skeptic", chinese_answer: "怀疑论者", chinese_romanization: "huáiyí lùn zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hypochondriac' means a person who is abnormally anxious about their health." +
            "<br><br>" +
            "(A) 'realist' means a person who accepts a situation as it is and is prepared to deal with it accordingly." +
            "<br><br>" +
            "(C) 'optimist' means a person who tends to be hopeful and confident about the future or the success of something." +
            "<br><br>" +
            "(D) 'skeptic' means a person inclined to question or doubt accepted opinions.",
        chinese_explanation: "(B) '疑病症患者' 一词意味着对自己健康异常焦虑的人。" +
            "<br><br>" +
            "(A) '现实主义者' 意味着接受现实情况并准备相应处理的人。" +
            "<br><br>" +
            "(C) '乐观主义者' 意味着对未来或某事成功抱有希望和信心的人。" +
            "<br><br>" +
            "(D) '怀疑论者' 意味着倾向于质疑或怀疑公认观点的人。"
    },
    {
        id: 4,
        question: "The international community imposed __________ on the country in response to its aggressive actions.",
        chinese_question: "国际社会对该国的侵略行动实施了 __________。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "aid", chinese_answer: "援助", chinese_romanization: "yuánzhù" },
            { option: "C", answer: "sanctions", chinese_answer: "制裁", chinese_romanization: "zhìcái" },
            { option: "D", answer: "rewards", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sanctions' means measures taken by a country to enforce international law." +
            "<br><br>" +
            "(A) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'aid' means help, typically of a practical nature." +
            "<br><br>" +
            "(D) 'rewards' means a thing given in recognition of service, effort, or achievement.",
        chinese_explanation: "(C) '制裁' 一词意味着一国为执行国际法而采取的措施。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '援助' 意味着通常是实用性质的帮助。" +
            "<br><br>" +
            "(D) '奖励' 意味着因服务、努力或成就而给予的东西。"
    },
    {
        id: 5,
        question: "She worked her way up through the corporate __________ to become one of the top executives in the company.",
        chinese_question: "她通过公司 __________ 不断努力，成为公司顶级高管之一。",
        answers: [
            { option: "A", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "B", answer: "plateau", chinese_answer: "平稳", chinese_romanization: "píngwěn" },
            { option: "C", answer: "echelon", chinese_answer: "阶层", chinese_romanization: "jiēcéng" },
            { option: "D", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'echelon' means a level or rank in an organization, a profession, or society." +
            "<br><br>" +
            "(A) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(B) 'plateau' means a state of little or no change following a period of activity or progress." +
            "<br><br>" +
            "(D) 'obstacle' means a thing that blocks one's way or prevents or hinders progress.",
        chinese_explanation: "(C) '阶层' 一词意味着组织、职业或社会中的等级或级别。" +
            "<br><br>" +
            "(A) '下降' 意味着力量、数量、质量或价值的逐渐和持续损失。" +
            "<br><br>" +
            "(B) '平稳' 意味着在一段时间的活动或进步之后几乎没有变化的状态。" +
            "<br><br>" +
            "(D) '障碍' 意味着挡住道路或阻止或妨碍进步的事物。"
    },
    {
        id: 6,
        question: "As a skilled __________, he entertained the guests with his fascinating stories and witty anecdotes.",
        chinese_question: "作为一名熟练的 __________，他用引人入胜的故事和机智的轶事娱乐客人。",
        answers: [
            { option: "A", answer: "listener", chinese_answer: "听众", chinese_romanization: "tīngzhòng" },
            { option: "B", answer: "raconteur", chinese_answer: "讲故事的人", chinese_romanization: "jiǎng gùshì de rén" },
            { option: "C", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" },
            { option: "D", answer: "critic", chinese_answer: "评论家", chinese_romanization: "pínglùn jiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'raconteur' means a person who tells anecdotes in a skillful and amusing way." +
            "<br><br>" +
            "(A) 'listener' means a person who listens." +
            "<br><br>" +
            "(C) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(D) 'critic' means a person who expresses an unfavorable opinion of something.",
        chinese_explanation: "'讲故事的人' 一词意味着以技巧和有趣的方式讲述轶事的人。" +
            "<br><br>" +
            "(A) '听众' 意味着一个听的人。" +
            "<br><br>" +
            "(C) '观察者' 意味着观察或注意到某事的人。" +
            "<br><br>" +
            "(D) '评论家' 意味着对某事表达不赞成意见的人。"
    },
    {
        id: 7,
        question: "The __________ of the speech was appreciated by the audience, who were eager to move on to the main event.",
        chinese_question: "演讲的 __________ 得到了观众的赞赏，他们急于进入主要活动。",
        answers: [
            { option: "A", answer: "lengthiness", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "B", answer: "verbosity", chinese_answer: "啰嗦", chinese_romanization: "luōsuō" },
            { option: "C", answer: "brevity", chinese_answer: "简短", chinese_romanization: "jiǎnduǎn" },
            { option: "D", answer: "wordiness", chinese_answer: "赘言", chinese_romanization: "zhuì yán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(A) 'lengthiness' means the quality of being long and drawn-out." +
            "<br><br>" +
            "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
            "<br><br>" +
            "(D) 'wordiness' means the use of too many words to express an idea.",
        chinese_explanation: "(C) '简短' 意味着在写作或演讲中使用简明和准确的词语。" +
            "<br><br>" +
            "(A) '冗长' 意味着长而冗长的质量。" +
            "<br><br>" +
            "(B) '啰嗦' 意味着使用比需要的更多的词的质量；冗长。" +
            "<br><br>" +
            "(D) '赘言' 意味着使用太多词语来表达一个想法。"
    },
    {
        id: 8,
        question: "The new policy faced significant __________ from both the public and government officials, leading to heated debates.",
        chinese_question: "新政策面临来自公众和政府官员的显著 __________，导致了激烈的辩论。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "endorsement", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opposition' means resistance or dissent, expressed in action or argument." +
            "<br><br>" +
            "(A) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(D) 'endorsement' means an act of giving one's public approval or support to someone or something.",
        chinese_explanation: "(C) '反对' 一词意味着在行动或争论中表达的抵抗或异议。" +
            "<br><br>" +
            "(A) '支持' 意味着承受所有或部分重量；支撑。" +
            "<br><br>" +
            "(B) '同意' 意味着在意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(D) '认可' 意味着公开批准或支持某人或某事的行为。"
    },
    {
        id: 9,
        question: "The once thriving garden was now covered in __________, causing the plants to wither and die.",
        chinese_question: "曾经繁茂的花园现在被 __________ 覆盖，导致植物枯萎死亡。",
        answers: [
            { option: "A", answer: "bloom", chinese_answer: "开花", chinese_romanization: "kāihuā" },
            { option: "B", answer: "greenery", chinese_answer: "绿叶", chinese_romanization: "lǜyè" },
            { option: "C", answer: "blight", chinese_answer: "枯萎病", chinese_romanization: "kūwěibìng" },
            { option: "D", answer: "growth", chinese_answer: "生长", chinese_romanization: "shēngzhǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'blight' means a plant disease, typically one caused by fungi such as mildews, rusts, and smuts." +
            "<br><br>" +
            "(A) 'bloom' means the state or period of flowering." +
            "<br><br>" +
            "(B) 'greenery' means green foliage, growing plants, or vegetation." +
            "<br><br>" +
            "(D) 'growth' means the process of increasing in physical size.",
        chinese_explanation: "(C) '枯萎病' 一词意味着植物疾病，通常由霉菌如霉、锈病和黑粉病引起。" +
            "<br><br>" +
            "(A) '开花' 意味着开花的状态或时期。" +
            "<br><br>" +
            "(B) '绿叶' 意味着绿色的叶子，生长的植物或植被。" +
            "<br><br>" +
            "(D) '生长' 意味着物理大小的增加过程。"
    },
    {
        id: 10,
        question: "The new CEO had big shoes to fill, as her __________ had led the company to great success.",
        chinese_question: "新任CEO责任重大，因为她的 __________ 曾带领公司取得巨大成功。",
        answers: [
            { option: "A", answer: "successor", chinese_answer: "继任者", chinese_romanization: "jìrèn zhě" },
            { option: "B", answer: "contemporary", chinese_answer: "同时代的人", chinese_romanization: "tóng shídài de rén" },
            { option: "C", answer: "predecessor", chinese_answer: "前任", chinese_romanization: "qiánrèn" },
            { option: "D", answer: "rival", chinese_answer: "对手", chinese_romanization: "duìshǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'predecessor' means a person who held a job or office before the current holder." +
            "<br><br>" +
            "(A) 'successor' means a person or thing that succeeds another." +
            "<br><br>" +
            "(B) 'contemporary' means a person or thing living or existing at the same time as another." +
            "<br><br>" +
            "(D) 'rival' means a person or thing competing with another for the same objective or for superiority in the same field.",
        chinese_explanation: "(C) '前任' 意味着在现任者之前担任职位或职务的人。" +
            "<br><br>" +
            "(A) '继任者' 意味着接替另一人的人或物。" +
            "<br><br>" +
            "(B) '同时代的人' 意味着与另一人或物同时生活或存在的人或物。" +
            "<br><br>" +
            "(D) '对手' 意味着在同一目标或同一领域竞争的另一个人或物。"
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
