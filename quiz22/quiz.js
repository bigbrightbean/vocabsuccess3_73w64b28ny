// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After hearing the disappointing news, he felt utterly __________ and struggled to find motivation.",
        chinese_question: "听到令人失望的消息后，他感到极度 __________，难以找到动力。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "optimistic", chinese_answer: "乐观", chinese_romanization: "lèguān" },
            { option: "C", answer: "despondent", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
            { option: "D", answer: "hopeful", chinese_answer: "有希望", chinese_romanization: "yǒu xīwàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'despondent' means in low spirits from loss of hope or courage." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(D) 'hopeful' means feeling or inspiring optimism about a future event.",
        chinese_explanation: "(C) '沮丧' 一词意味着因失去希望或勇气而情绪低落。" +
            "<br><br>" +
            "(A) '快乐' 意味着感到、表达或引起极大的愉悦和幸福。" +
            "<br><br>" +
            "(B) '乐观' 意味着对未来充满希望和信心。" +
            "<br><br>" +
            "(D) '有希望' 意味着对未来事件感到或激发乐观。"
    },
    {
        id: 2,
        question: "The __________ businessman was willing to cheat his customers to make a profit.",
        chinese_question: "这个 __________ 的商人为了盈利愿意欺骗顾客。",
        answers: [
            { option: "A", answer: "incorruptible", chinese_answer: "廉洁", chinese_romanization: "liánjié" },
            { option: "B", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "principled", chinese_answer: "有原则", chinese_romanization: "yǒu yuánzé" },
            { option: "D", answer: "venal", chinese_answer: "贪污", chinese_romanization: "tānwū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'venal' means showing or motivated by susceptibility to bribery." +
            "<br><br>" +
            "(A) 'incorruptible' means not susceptible to corruption, especially by bribery." +
            "<br><br>" +
            "(B) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(C) 'principled' means acting in accordance with morality and showing recognition of right and wrong.",
        chinese_explanation: "(D) '贪污' 意味着表现或受贿动机驱使的。" +
            "<br><br>" +
            "(A) '廉洁' 意味着不易受腐败影响，尤其是受贿的影响。" +
            "<br><br>" +
            "(B) '诚实' 意味着没有欺骗和虚伪；真诚的。" +
            "<br><br>" +
            "(C) '有原则' 意味着按照道德行事，并表现出对是非的认识。"
    },
    {
        id: 3,
        question: "The novel was written in an __________ format, consisting of letters between the main characters.",
        chinese_question: "这部小说采用 __________ 形式写成，由主角之间的信件组成。",
        answers: [
            { option: "A", answer: "epistolary", chinese_answer: "书信", chinese_romanization: "shūxìn" },
            { option: "B", answer: "descriptive", chinese_answer: "描写", chinese_romanization: "miáoxiě" },
            { option: "C", answer: "narrative", chinese_answer: "叙述", chinese_romanization: "xùshù" },
            { option: "D", answer: "expository", chinese_answer: "说明", chinese_romanization: "shuōmíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'epistolary' means relating to the writing of letters or literary works in the form of letters." +
            "<br><br>" +
            "(B) 'descriptive' means serving or seeking to describe." +
            "<br><br>" +
            "(C) 'narrative' means a spoken or written account of connected events; a story." +
            "<br><br>" +
            "(D) 'expository' means intended to explain or describe something.",
        chinese_explanation: "(A) '书信' 一词意味着与写信或以信件形式创作的文学作品相关的。" +
            "<br><br>" +
            "(B) '描写' 意味着描述或试图描述的。" +
            "<br><br>" +
            "(C) '叙述' 意味着连贯事件的口头或书面描述；故事。" +
            "<br><br>" +
            "(D) '说明' 意味着旨在解释或描述某事的。"
    },
    {
        id: 4,
        question: "The __________ storm caused widespread damage and left many areas without power.",
        chinese_question: "这场 __________ 的风暴造成了广泛的破坏，许多地区断电。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" },
            { option: "C", answer: "ferocious", chinese_answer: "凶猛", chinese_romanization: "xiōngměng" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ferocious' means savagely fierce, cruel, or violent." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '凶猛' 一词意味着野蛮的凶猛、残忍或暴力的。" +
            "<br><br>" +
            "'温和' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "'温柔' 意味着有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "'平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。"
    },
    {
        id: 5,
        question: "Her __________ attitude towards her schoolwork resulted in poor grades.",
        chinese_question: "她对学业的 __________ 态度导致成绩不佳。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "C", answer: "attentive", chinese_answer: "细心", chinese_romanization: "xìxīn" },
            { option: "D", answer: "lackadaisical", chinese_answer: "懒散", chinese_romanization: "lǎnsǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lackadaisical' means lacking enthusiasm and determination; carelessly lazy." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(B) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(C) 'attentive' means paying close attention to something.",
        chinese_explanation: "(D) '懒散' 一词意味着缺乏热情和决心；漫不经心的懒惰。" +
            "<br><br>" +
            "'热情' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "'勤奋' 意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "'细心' 意味着对某事密切关注。"
    },
    {
        id: 6,
        question: "His speech was filled with __________ statements that offered no real insight or inspiration.",
        chinese_question: "他的演讲充满了 __________ 的陈词滥调，没有提供真正的见解或启示。",
        answers: [
            { option: "A", answer: "original", chinese_answer: "原创", chinese_romanization: "yuánchuàng" },
            { option: "B", answer: "insightful", chinese_answer: "有见地", chinese_romanization: "yǒu jiàndì" },
            { option: "C", answer: "platitudinous", chinese_answer: "陈词滥调", chinese_romanization: "chéncí làndiào" },
            { option: "D", answer: "profound", chinese_answer: "深刻", chinese_romanization: "shēnkè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'platitudinous' means (of a remark or statement) used too often to be interesting or thoughtful; hackneyed." +
            "<br><br>" +
            "(A) 'original' means present or existing from the beginning; first or earliest." +
            "<br><br>" +
            "(B) 'insightful' means having or showing an accurate and deep understanding; perceptive." +
            "<br><br>" +
            "(D) 'profound' means (of a state, quality, or emotion) very great or intense.",
        chinese_explanation: "(C) '陈词滥调' 一词意味着（指评论或陈述）使用过于频繁以至于不再有趣或有思想的；陈腐的。" +
            "<br><br>" +
            "'原创' 意味着从一开始就存在的；最早的。" +
            "<br><br>" +
            "'有见地' 意味着具有或显示出准确和深刻理解的；有洞察力的。" +
            "<br><br>" +
            "'深刻' 意味着（指状态、质量或情感）非常伟大或强烈的。"
    },
    {
        id: 7,
        question: "Her __________ efforts in preparing for the exam paid off when she received the highest score in the class.",
        chinese_question: "她在备考中的 __________ 努力得到了回报，她获得了全班最高分。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "sedulous", chinese_answer: "勤勉", chinese_romanization: "qínmiǎn" },
            { option: "C", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sedulous' means showing dedication and diligence." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '勤勉' 一词意味着表现出奉献和勤奋的。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿工作或使用精力的。" +
            "<br><br>" +
            "(C) '疏忽' 意味着在做某事时未能尽适当的注意。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 8,
        question: "The actor's __________ expression during the interview made it clear that he was not interested in the topic.",
        chinese_question: "演员在采访中的 __________ 表情表明他对这个话题不感兴趣。",
        answers: [
            { option: "A", answer: "expressive", chinese_answer: "表情丰富", chinese_romanization: "biǎoqíng fēngfù" },
            { option: "B", answer: "animated", chinese_answer: "生动", chinese_romanization: "shēngdòng" },
            { option: "C", answer: "vacuous", chinese_answer: "茫然", chinese_romanization: "mángrán" },
            { option: "D", answer: "lively", chinese_answer: "活泼", chinese_romanization: "huópō" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vacuous' means having or showing a lack of thought or intelligence; mindless." +
            "<br><br>" +
            "(A) 'expressive' means effectively conveying thought or feeling." +
            "<br><br>" +
            "(B) 'animated' means full of life or excitement; lively." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(C) '茫然' 一词意味着缺乏思想或智慧；无意识的。" +
            "<br><br>" +
            "(A) '表情丰富' 意味着有效传达思想或感情的。" +
            "<br><br>" +
            "(B) '生动' 意味着充满生命或兴奋的；活泼的。" +
            "<br><br>" +
            "(D) '活泼' 意味着充满生命和能量的；活跃和外向的。"
    },
    {
        id: 9,
        question: "With a __________ expression, he commented on the irony of the situation, his dry humor evident.",
        chinese_question: "他带着 __________ 的表情评论了这种情况的讽刺，他的干涩幽默显而易见。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "wry", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
            { option: "C", answer: "joyful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "somber", chinese_answer: "阴沉", chinese_romanization: "yīnchén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wry' means using or expressing dry, especially mocking, humor." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(C) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(B) '嘲讽' 一词意味着使用或表达干涩的，特别是嘲讽的幽默。" +
            "<br><br>" +
            "(A) '真诚' 意味着没有虚伪或欺骗的；源自真实感情的。" +
            "<br><br>" +
            "(C) '快乐' 意味着感到、表达或引起极大快乐和幸福的。" +
            "<br><br>"+
            "(D) '阴沉' 意味着颜色或色调黑暗或暗淡的；阴郁的。"
    },
    {
        id: 10,
        question: "The director's __________ approach to filmmaking broke away from traditional methods, creating a unique style.",
        chinese_question: "这位导演的 __________ 电影制作方法打破了传统方法，创造了一种独特的风格。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "B", answer: "traditional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "C", answer: "iconoclastic", chinese_answer: "打破旧习", chinese_romanization: "dǎpò jiùxí" },
            { option: "D", answer: "orthodox", chinese_answer: "正统", chinese_romanization: "zhèngtǒng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'iconoclastic' means characterized by attack on cherished beliefs or institutions." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(D) 'orthodox' means conforming to what is generally or traditionally accepted as right or true; established and approved.",
        chinese_explanation: "(C) '打破旧习' 一词意味着以攻击珍视的信仰或机构为特征。" +
            "<br><br>" +
            "(A) '常规' 意味着基于或符合通常所做或所相信的。" +
            "<br><br>" +
            "(B) '传统' 意味着存在于或作为传统的一部分；长期存在的。" +
            "<br><br>" +
            "(D) '正统' 意味着符合通常或传统上被认为正确或真实的；已建立和认可的。"
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
