// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After the government collapsed, the country was plunged into __________, with riots breaking out and no central authority to maintain order.",
        chinese_question: "政府垮台后，国家陷入了 __________，爆发了骚乱，没有中央权威来维持秩序。",
        answers: [
            { option: "A", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "B", answer: "anarchy", chinese_answer: "无政府状态", chinese_romanization: "wú zhèngfǔ zhuàngtài" },
            { option: "C", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "D", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anarchy' means a state of disorder due to absence or nonrecognition of authority." +
            "<br><br>" +
            "(A) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(C) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(D) 'stability' means the state of being stable.",
        chinese_explanation: "(B) '无政府状态' 一词意味着由于缺乏或不承认权威而导致的混乱状态。" +
            "<br><br>" +
            "(A) '秩序' 意味着人或物相互之间根据特定顺序、模式或方法的安排或排列。" +
            "<br><br>" +
            "(C) '和平' 意味着没有干扰的自由；宁静。" +
            "<br><br>" +
            "(D) '稳定' 意味着稳定的状态。"
    },
    {
        id: 2,
        question: "Her __________ was revealed when it was discovered that she had been secretly working for the rival company.",
        chinese_question: "当发现她一直在为竞争公司秘密工作时，她的 __________ 被揭露了。",
        answers: [
            { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "duplicity", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
            { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'duplicity' means deceitfulness; double-dealing." +
            "<br><br>" +
            "(A) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(B) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(D) 'integrity' means the quality of being honest and having strong moral principles; moral uprightness.",
        chinese_explanation: "(C) '欺诈' 一词意味着欺骗性；双重交易。" +
            "<br><br>" +
            "(A) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(B) '透明' 意味着透明的条件。" +
            "<br><br>" +
            "(D) '正直' 意味着诚实和具有强烈道德原则的品质；道德正直。"
    },
    {
        id: 3,
        question: "Writing in her journal provided a __________ for her, allowing her to release pent-up emotions and feel more at peace.",
        chinese_question: "写日记给她提供了 __________，让她释放压抑的情感，感到更加平静。",
        answers: [
            { option: "A", answer: "suppression", chinese_answer: "压抑", chinese_romanization: "yāyì" },
            { option: "B", answer: "catharsis", chinese_answer: "宣泄", chinese_romanization: "xuānxiè" },
            { option: "C", answer: "repression", chinese_answer: "镇压", chinese_romanization: "zhènyā" },
            { option: "D", answer: "restraint", chinese_answer: "克制", chinese_romanization: "kèzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'catharsis' means the process of releasing, and thereby providing relief from, strong or repressed emotions." +
            "<br><br>" +
            "(A) 'suppression' means the action of suppressing something such as an activity or publication." +
            "<br><br>" +
            "(C) 'repression' means the action of subduing someone or something by force." +
            "<br><br>" +
            "(D) 'restraint' means a measure or condition that keeps someone or something under control or within limits.",
        chinese_explanation: "(B) '宣泄' 一词意味着释放强烈或被压抑的情感的过程，从而提供缓解。" +
            "<br><br>" +
            "(A) '压抑' 意味着压制某事（如活动或出版物）的行为。" +
            "<br><br>" +
            "(C) '镇压' 意味着通过武力镇压某人或某物的行为。" +
            "<br><br>" +
            "(D) '克制' 意味着使某人或某物保持在控制之内或在限度之内的措施或条件。"
    },
    {
        id: 4,
        question: "During his lecture, the professor's __________ about his travels in Europe captivated the students more than the main topic.",
        chinese_question: "在他的讲座中，教授关于他在欧洲旅行的 __________ 比主要话题更吸引学生。",
        answers: [
            { option: "A", answer: "summary", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
            { option: "B", answer: "digression", chinese_answer: "离题", chinese_romanization: "lítí" },
            { option: "C", answer: "focus", chinese_answer: "重点", chinese_romanization: "zhòngdiǎn" },
            { option: "D", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'digression' means a temporary departure from the main subject in speech or writing." +
            "<br><br>" +
            "(A) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(C) 'focus' means the center of interest or activity." +
            "<br><br>" +
            "(D) 'conclusion' means the end or finish of an event, process, or text.",
        chinese_explanation: "(B) '离题' 一词意味着在演讲或写作中暂时偏离主题。" +
            "<br><br>" +
            "(A) '总结' 意味着对某事要点的简短陈述或说明。" +
            "<br><br>" +
            "(C) '重点' 意味着兴趣或活动的中心。" +
            "<br><br>" +
            "(D) '结论' 意味着事件、过程或文本的结束或完结。"
    },
    {
        id: 5,
        question: "As a __________, he always doubted people's motives, believing they acted only out of self-interest.",
        chinese_question: "作为一个 __________，他总是怀疑人们的动机，认为他们的行为只是出于自利。",
        answers: [
            { option: "A", answer: "optimist", chinese_answer: "乐观主义者", chinese_romanization: "lèguān zhǔyì zhě" },
            { option: "B", answer: "believer", chinese_answer: "信徒", chinese_romanization: "xìntú" },
            { option: "C", answer: "cynic", chinese_answer: "愤世嫉俗者", chinese_romanization: "fènshìjísú zhě" },
            { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cynic' means a person who believes that people are motivated purely by self-interest rather than acting for honorable or unselfish reasons." +
            "<br><br>" +
            "(A) 'optimist' means a person who tends to be hopeful and confident about the future or the success of something." +
            "<br><br>" +
            "(B) 'believer' means a person who believes that a specified thing is effective, proper, or desirable." +
            "<br><br>" +
            "(D) 'supporter' means a person who approves of and encourages a public figure, political party, policy, etc.",
        chinese_explanation: "(C) '愤世嫉俗者' 一词意味着相信人们纯粹是出于自利而行动的人，而不是为了荣誉或无私的原因。" +
            "<br><br>" +
            "(A) '乐观主义者' 意味着对未来或某事的成功充满希望和信心的人。" +
            "<br><br>" +
            "(B) '信徒' 意味着相信某种特定事物是有效、适当或可取的人。" +
            "<br><br>" +
            "(D) '支持者' 意味着赞成并鼓励公众人物、政党、政策等的人。"
    },
    {
        id: 6,
        question: "The medical report was filled with so much technical __________ that the patient found it difficult to understand.",
        chinese_question: "医疗报告中充满了大量的技术 __________，使患者难以理解。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "jargon", chinese_answer: "行话", chinese_romanization: "hánghuà" },
            { option: "C", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "plainness", chinese_answer: "明了", chinese_romanization: "míngliǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jargon' means special words or expressions used by a profession or group that are difficult for others to understand." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(C) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(D) 'plainness' means the quality of being clear or obvious.",
        chinese_explanation: "(B) '行话' 意味着一个职业或群体使用的，其他人难以理解的专门词汇或表达。" +
            "<br><br>" +
            "(A) '清晰' 意味着特别清楚的质量。" +
            "<br><br>" +
            "(C) '简单' 意味着容易理解或做的质量或条件。" +
            "<br><br>" +
            "(D) '明了' 意味着清楚或明显的质量。"
    },
    {
        id: 7,
        question: "She cherished the __________ of her mountain cabin, finding peace and inspiration in the quiet surroundings.",
        chinese_question: "她珍惜山间小屋的 __________，在宁静的环境中找到平和和灵感。",
        answers: [
            { option: "A", answer: "company", chinese_answer: "陪伴", chinese_romanization: "péibàn" },
            { option: "B", answer: "noise", chinese_answer: "噪音", chinese_romanization: "zàoyīn" },
            { option: "C", answer: "crowd", chinese_answer: "人群", chinese_romanization: "rénqún" },
            { option: "D", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'solitude' means the state or situation of being alone." +
            "<br><br>" +
            "(A) 'company' means the fact or condition of being with another or others, especially in a way that provides friendship and enjoyment." +
            "<br><br>" +
            "(B) 'noise' means a sound, especially one that is loud or unpleasant or that causes disturbance." +
            "<br><br>" +
            "(C) 'crowd' means a large number of people gathered together, typically in a disorganized or unruly way.",
        chinese_explanation: "(D) '孤独' 意味着独处的状态或情况。" +
            "<br><br>" +
            "(A) '陪伴' 意味着与他人一起的事实或情况，特别是以提供友谊和享受的方式。" +
            "<br><br>" +
            "(B) '噪音' 意味着一种声音，特别是嘈杂或不愉快或引起干扰的声音。" +
            "<br><br>" +
            "(C) '人群' 意味着聚集在一起的许多人，通常是杂乱无章的方式。"
    },
    {
        id: 8,
        question: "The economic downturn created a sense of __________ among the population, leading to widespread uncertainty and concern.",
        chinese_question: "经济衰退在民众中造成了一种 __________ 感，导致广泛的不确定性和担忧。",
        answers: [
            { option: "A", answer: "well-being", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "malaise", chinese_answer: "不安", chinese_romanization: "bù'ān" },
            { option: "D", answer: "contentment", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malaise' means a general feeling of discomfort, illness, or unease whose exact cause is difficult to identify." +
            "<br><br>" +
            "(A) 'well-being' means the state of being comfortable, healthy, or happy." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'contentment' means a state of happiness and satisfaction.",
        chinese_explanation: "(C) '不安' 意味着一种难以确定其确切原因的不适、疾病或不安的普遍感觉。" +
            "<br><br>" +
            "(A) '幸福' 意味着舒适、健康或快乐的状态。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(D) '满足' 意味着幸福和满足的状态。"
    },
    {
        id: 9,
        question: "The judge granted an __________ to stop the demolition of the historic building until further review.",
        chinese_question: "法官授予一个__________，以停止拆除这座历史建筑，直至进一步审查。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "B", answer: "consent", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "C", answer: "authorization", chinese_answer: "授权", chinese_romanization: "shòuquán" },
            { option: "D", answer: "injunction", chinese_answer: "禁令", chinese_romanization: "jìnlìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'injunction' refers to an authoritative warning or order, especially a judicial order that restrains a person from beginning or continuing an action threatening or invading the legal right of another." +
            "<br><br>" +
            "(A) 'approval' refers to the action of officially agreeing to something." +
            "<br><br>" +
            "(B) 'consent' refers to permission for something to happen or agreement to do something." +
            "<br><br>" +
            "(C) 'authorization' refers to the action or fact of authorizing or being authorized.",
        chinese_explanation: "(D) '禁令' 指的是权威的警告或命令，尤其是限制某人开始或继续威胁或侵犯他人合法权利的行为的司法命令。" +
            "<br><br>" +
            "(A) '批准' 指的是正式同意某事的行为。" +
            "<br><br>" +
            "(B) '同意' 指的是对某事发生或同意做某事的许可。" +
            "<br><br>" +
            "(C) '授权' 指的是授权或被授权的行为或事实。"
    },
    {
        id: 10,
        question: "The scientist was hailed as a technological __________ for his groundbreaking inventions in robotics.",
        chinese_question: "这位科学家因其在机器人技术领域的开创性发明而被誉为技术__________。",
        answers: [
            { option: "A", answer: "ignoramus", chinese_answer: "无知者", chinese_romanization: "wúzhī zhě" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "dabbler", chinese_answer: "涉猎者", chinese_romanization: "shèlǜe zhě" },
            { option: "D", answer: "savant", chinese_answer: "天才", chinese_romanization: "tiāncái" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'savant' refers to a person with profound or extensive learning, especially one with exceptional skill or knowledge in a particular field." +
            "<br><br>" +
            "(A) 'ignoramus' refers to an ignorant or stupid person." +
            "<br><br>" +
            "(B) 'novice' refers to someone who is new to a field or activity." +
            "<br><br>" +
            "(C) 'dabbler' refers to someone who engages in an activity without serious intentions or commitment.",
        chinese_explanation: "(D) '天才' 指的是具有深厚或广泛知识的人，尤其是在特定领域具有非凡技能或知识的人。" +
            "<br><br>" +
            "(A) '无知者' 指的是无知或愚蠢的人。" +
            "<br><br>" +
            "(B) '新手' 指的是刚进入一个领域或活动的人。" +
            "<br><br>" +
            "(C) '涉猎者' 指的是没有认真意图或承诺从事某项活动的人。"
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
