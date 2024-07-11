// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In the office politics, he was seen as a __________, always manipulating situations for his benefit.",
        chinese_question: "在办公室政治中，他被视为 __________，总是操纵局势以获取利益。",
        answers: [
            { option: "A", answer: "saint", chinese_answer: "圣人", chinese_romanization: "shèngrén" },
            { option: "B", answer: "leader", chinese_answer: "领导", chinese_romanization: "lǐngdǎo" },
            { option: "C", answer: "villain", chinese_answer: "反派", chinese_romanization: "fǎnpài" },
            { option: "D", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'villain' figuratively means a person who does bad things and has a negative influence." +
            "<br><br>" +
            "(A) 'saint' means a person acknowledged as holy or virtuous and typically regarded as being in heaven after death." +
            "<br><br>" +
            "(B) 'leader' means the person who leads or commands a group, organization, or country." +
            "<br><br>" +
            "(D) 'bystander' means a person who is present at an event or incident but does not take part.",
        chinese_explanation: "(C) '反派' 在比喻意义上意味着做坏事并有负面影响的人。" +
            "<br><br>" +
            "(A) '圣人' 意味着被公认为圣洁或美德的人，通常被认为死后在天堂。" +
            "<br><br>" +
            "(B) '领导' 意味着领导或指挥团体、组织或国家的人。" +
            "<br><br>" +
            "(D) '旁观者' 意味着在事件或事故现场但不参与的人。"
    },
    {
        id: 2,
        question: "His actions became an __________ of bravery, inspiring many to follow his example.",
        chinese_question: "他的行为成为勇敢的 __________，激励了许多人效仿他的榜样。",
        answers: [
            { option: "A", answer: "emblem", chinese_answer: "象征", chinese_romanization: "xiàngzhēng" },
            { option: "B", answer: "insignificance", chinese_answer: "无足轻重", chinese_romanization: "wú zú qīngzhòng" },
            { option: "C", answer: "aberration", chinese_answer: "偏离", chinese_romanization: "piānlí" },
            { option: "D", answer: "deviation", chinese_answer: "背离", chinese_romanization: "bèilí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emblem' metaphorically means a thing serving as a symbolic representation of a particular quality or concept." + 
            "<br><br>" + 
            "(B) 'insignificance' means the quality of being too small or unimportant to be worth consideration." + 
            "<br><br>" + 
            "(C) 'aberration' means a departure from what is normal, usual, or expected, typically one that is unwelcome." + 
            "<br><br>" + 
            "(D) 'deviation' means the action of departing from an established course or accepted standard.",
        chinese_explanation: "(A) '象征' 比喻作为某种品质或概念的象征表示的事物。" + 
            "<br><br>" + 
            "(B) '无足轻重' 意味着太小或不重要而不值得考虑的品质。" + 
            "<br><br>" + 
            "(C) '偏离' 意味着偏离正常、通常或预期的情况，通常是不受欢迎的。" + 
            "<br><br>" + 
            "(D) '背离' 意味着偏离既定路线或接受标准的行为。"
    },
    {
        id: 3,
        question: "The diplomat's impeccable __________ made him highly respected at international gatherings, where proper behavior and manners were essential.",
        chinese_question: "这位外交官无可挑剔的 __________ 使他在国际会议上备受尊敬，在这些场合，适当的行为和礼仪至关重要。",
        answers: [
            { option: "A", answer: "impoliteness", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
            { option: "B", answer: "etiquette", chinese_answer: "礼仪", chinese_romanization: "lǐyí" },
            { option: "C", answer: "rudeness", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "D", answer: "discourtesy", chinese_answer: "失礼", chinese_romanization: "shīlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'etiquette' means the customary code of polite behavior in society or among members of a particular profession or group." +
            "<br><br>" +
            "(A) 'impoliteness' means lack of courteous behavior." +
            "<br><br>" +
            "(C) 'rudeness' means lack of manners or discourtesy." +
            "<br><br>" +
            "(D) 'discourtesy' means rude and inconsiderate behavior.",
        chinese_explanation: "(B) '礼仪' 一词意味着社会上或某一特定职业或团体成员中习惯性的礼貌行为规范。" +
            "<br><br>" +
            "(A) '无礼' 意味着缺乏礼貌行为。" +
            "<br><br>" +
            "(C) '粗鲁' 意味着缺乏礼貌或礼貌。" +
            "<br><br>" +
            "(D) '失礼' 意味着粗鲁和不体贴的行为。"
    },
    {
        id: 4,
        question: "The scientist was labeled a __________ by the religious community for proposing theories that contradicted established beliefs.",
        chinese_question: "这位科学家因提出与既定信仰相矛盾的理论而被宗教团体称为 __________。",
        answers: [
            { option: "A", answer: "believer", chinese_answer: "信徒", chinese_romanization: "xìntú" },
            { option: "B", answer: "orthodox", chinese_answer: "正统的", chinese_romanization: "zhèngtǒng de" },
            { option: "C", answer: "heretic", chinese_answer: "异端", chinese_romanization: "yìduān" },
            { option: "D", answer: "conformist", chinese_answer: "墨守成规者", chinese_romanization: "mòshǒu chéngguī zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'heretic' means a person holding an opinion at odds with what is generally accepted." +
            "<br><br>" +
            "(A) 'believer' means a person who believes that a specified thing is effective, proper, or desirable." +
            "<br><br>" +
            "(B) 'orthodox' means conforming to what is generally or traditionally accepted as right or true; established and approved." +
            "<br><br>" +
            "(D) 'conformist' means a person who conforms to accepted behavior or established practices.",
        chinese_explanation: "(C) '异端' 一词意味着持有与普遍接受的观点相悖的观点的人。" +
            "<br><br>" +
            "(A) '信徒' 意味着相信特定事物有效、合适或可取的人。" +
            "<br><br>" +
            "(B) '正统的' 意味着符合一般或传统上被认为是正确或真实的；既定和认可的。" +
            "<br><br>" +
            "(D) '墨守成规者' 意味着遵守被接受的行为或既定做法的人。"
    },
    {
        id: 5,
        question: "The __________ of affordable housing in the city has forced many families to move to the suburbs.",
        chinese_question: "城市中缺乏 __________ 的住房迫使许多家庭搬到郊区。",
        answers: [
            { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "D", answer: "plenty", chinese_answer: "足够", chinese_romanization: "zúgòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dearth' means a scarcity or lack of something." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'surplus' means an amount of something left over when requirements have been met." +
            "<br><br>" +
            "(D) 'plenty' means a large or sufficient amount or quantity; more than enough.",
        chinese_explanation: "(B) '缺乏' 一词意味着某物的稀缺或缺乏。" +
            "<br><br>" +
            "(A) '丰富' 意味着某物的数量非常大。" +
            "<br><br>" +
            "(C) '过剩' 意味着在满足需求后剩余的数量。" +
            "<br><br>" +
            "(D) '足够' 意味着足够或数量足够的；绰绰有余。"
    },
    {
        id: 6,
        question: "A gentle __________ blew through the open window, bringing the scent of blooming flowers into the room.",
        chinese_question: "一阵温柔的 __________ 吹过打开的窗户，带来了花开的香气。",
        answers: [
            { option: "A", answer: "gale", chinese_answer: "狂风", chinese_romanization: "kuángfēng" },
            { option: "B", answer: "storm", chinese_answer: "暴风", chinese_romanization: "bàofēng" },
            { option: "C", answer: "zephyr", chinese_answer: "微风", chinese_romanization: "wēifēng" },
            { option: "D", answer: "gust", chinese_answer: "阵风", chinese_romanization: "zhènfēng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zephyr' means a soft gentle breeze." +
            "<br><br>" +
            "(A) 'gale' means a very strong wind." +
            "<br><br>" +
            "(B) 'storm' means a violent disturbance of the atmosphere with strong winds and usually rain, thunder, lightning, or snow." +
            "<br><br>" +
            "(D) 'gust' means a brief, strong rush of wind.",
        chinese_explanation: "(C) '微风' 意味着温和的微风。" +
            "<br><br>" +
            "(A) '狂风' 意味着非常强的风。" +
            "<br><br>" +
            "(B) '暴风' 意味着强风和通常是雨、雷、闪电或雪的剧烈大气扰动。" +
            "<br><br>" +
            "(D) '阵风' 意味着一阵强风。"
    },
    {
        id: 7,
        question: "He finally faced his greatest __________ in the championship match, knowing it would be a fierce battle.",
        chinese_question: "他终于在冠军赛中面对了他最强大的 __________，知道这将是一场激烈的战斗。",
        answers: [
            { option: "A", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "B", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" },
            { option: "C", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adversary' means one's opponent in a contest, conflict, or dispute." +
            "<br><br>" +
            "(A) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(B) 'mentor' means an experienced and trusted adviser." +
            "<br><br>" +
            "(D) 'supporter' means a person who approves of and encourages someone or something.",
        chinese_explanation: "(C) '对手' 一词意味着在比赛、冲突或争议中的对手。" +
            "<br><br>" +
            "(A) '盟友' 意味着一个国家正式与另一个国家合作进行军事或其他目的。" +
            "<br><br>" +
            "(B) '导师' 意味着有经验和值得信赖的顾问。" +
            "<br><br>" +
            "(D) '支持者' 意味着批准并鼓励某人或某事的人。"
    },
    {
        id: 8,
        question: "The journalist was sued for __________ after publishing false statements that damaged the politician's reputation.",
        chinese_question: "记者因发表损害政治家声誉的虚假声明而被控 __________。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "libel", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'libel' means a published false statement that is damaging to a person's reputation." +
            "<br><br>" +
            "(A) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of." +
            "<br><br>" +
            "(D) 'admiration' means respect and warm approval.",
        chinese_explanation: "(B) '诽谤' 一词意味着发布损害某人声誉的虚假声明。" +
            "<br><br>" +
            "(A) '赞扬' 意味着对某人或某事表示赞同或钦佩。" +
            "<br><br>" +
            "(C) '支持' 意味着承担全部或部分重量。" +
            "<br><br>" +
            "(D) '钦佩' 意味着尊重和热情赞同。"
    },
    {
        id: 9,
        question: "She had a strong __________ for adventure, always looking for new places to explore.",
        chinese_question: "她对冒险有强烈的 __________，总是在寻找新的探索地。",
        answers: [
            { option: "A", answer: "dislike", chinese_answer: "反感", chinese_romanization: "fǎngǎn" },
            { option: "B", answer: "yen", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yen' means a longing or yearning." +
            "<br><br>" +
            "(A) 'dislike' means a feeling of distaste or hostility." +
            "<br><br>" +
            "(C) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(D) 'reluctance' means unwillingness or disinclination to do something.",
        chinese_explanation: "(B) '渴望' 意味着一种渴望或向往。" +
            "<br><br>" +
            "(A) '反感' 意味着厌恶或敌意的感觉。" +
            "<br><br>" +
            "(C) '厌恶' 意味着强烈的不喜欢或不情愿。" +
            "<br><br>" +
            "(D) '不情愿' 意味着不愿意做某事。"
    },
    {
        id: 10,
        question: "She expressed her __________ about the outcome of the experiment, convinced that it would be a success.",
        chinese_question: "她对实验结果表示 __________，确信会成功。",
        answers: [
            { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "C", answer: "certitude", chinese_answer: "确信", chinese_romanization: "quèxìn" },
            { option: "D", answer: "indecision", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'certitude' means absolute certainty or conviction that something is the case." +
            "<br><br>" +
            "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(B) 'uncertainty' means the state of being uncertain." +
            "<br><br>" +
            "(D) 'indecision' means the inability to make a decision quickly.",
        chinese_explanation: "'确信' 一词意味着对某事的绝对确定或信念。" +
            "<br><br>" +
            "(A) '怀疑' 意味着不确定或缺乏信念的感觉。" +
            "<br><br>" +
            "(B) '不确定' 意味着不确定的状态。" +
            "<br><br>" +
            "(D) '犹豫' 意味着无法快速做出决定。"
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
