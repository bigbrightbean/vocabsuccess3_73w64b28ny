// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "One of the __________ features of the proposal is its focus on sustainable development, which addresses the community's environmental concerns.",
        chinese_question: "该提案的一个 __________ 特点是其关注可持续发展，这解决了社区的环境问题。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "B", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "C", answer: "salient", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'salient' means most noticeable or important." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(C) '显著' 一词意味着最显眼或最重要的。" +
            "<br><br>" +
            "(A) '模糊' 意味着未被发现或不为人知的；不确定的。" +
            "<br><br>" +
            "(B) '次要' 意味着在重要性、严重性或意义上较低的。" +
            "<br><br>" +
            "(D) '无关' 意味着与某事无关的。"
    },
    {
        id: 2,
        question: "Her __________ decision to save a portion of her earnings for emergencies ensured she was financially stable during the unexpected job loss.",
        chinese_question: "她 __________ 的决定是把一部分收入存起来以备不时之需，这确保了她在意外失业期间的财务稳定。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "prudent", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "D", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(A) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '谨慎' 一词意味着对未来表现出关心和考虑的行为。" +
            "<br><br>" +
            "(A) '鲁莽' 意味着不顾危险或后果的行为；轻率或急躁。" +
            "<br><br>" +
            "(B) '冲动' 意味着没有经过深思熟虑的行为或行动。" +
            "<br><br>" +
            "(D) '粗心' 意味着没有给予足够的注意或考虑以避免伤害或错误。"
    },
    {
        id: 3,
        question: "The debate became increasingly __________, with each side hurling insults and accusations.",
        chinese_question: "辩论变得越来越 __________，双方都在互相辱骂和指责。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" },
            { option: "C", answer: "vitriolic", chinese_answer: "刻薄", chinese_romanization: "kèbó" },
            { option: "D", answer: "soothing", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vitriolic' means filled with bitter criticism or malice." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(C) '刻薄' 一词意味着充满尖刻的批评或恶意。" +
            "<br><br>" +
            "(A) '温和' 意味着温柔且不易被激怒。" +
            "<br><br>" +
            "(B) '温柔' 意味着具有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(D) '安慰' 意味着有温和的平静效果。"
    },
    {
        id: 4,
        question: "The __________ thief managed to evade capture for years, despite numerous attempts by the police.",
        chinese_question: "那个 __________ 的小偷尽管警方多次尝试，仍然多年未被捕。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "B", answer: "clear", chinese_answer: "清楚", chinese_romanization: "qīngchǔ" },
            { option: "C", answer: "straightforward", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "elusive", chinese_answer: "难以捉摸", chinese_romanization: "nányǐ zhuōmō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'elusive' means difficult to find, catch, or achieve." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(D) '难以捉摸' 一词意味着难以找到、抓住或实现的。" +
            "<br><br>" +
            "(A) '明显' 意味着容易感知或理解；清楚、自明或显而易见的。" +
            "<br><br>" +
            "(B) '清楚' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(C) '简单' 意味着不复杂且易于完成或理解。"
    },
    {
        id: 5,
        question: "After years of working long hours in a high-stress job, he felt completely __________ and uninterested in his work.",
        chinese_question: "在高压工作中长时间工作多年后，他感到完全 __________，对工作毫无兴趣。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "jaded", chinese_answer: "厌倦", chinese_romanization: "yànjuàn" },
            { option: "C", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "D", answer: "inspired", chinese_answer: "有灵感", chinese_romanization: "yǒu línggǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jaded' means tired, bored, or lacking enthusiasm, typically after having had too much of something." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'inspired' means of extraordinary quality, as if arising from some external creative impulse.",
        chinese_explanation: "(B) '厌倦' 一词意味着疲倦、厌烦或缺乏热情，通常是在经历过多之后。" +
            "<br><br>" +
            "'热情' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "'精力充沛' 意味着表现出或涉及极大的活动或活力。" +
            "<br><br>" +
            "'有灵感' 意味着质量非凡的，仿佛源自某种外部创造性的冲动。"
    },
    {
        id: 6,
        question: "His __________ reply indicated that he was not interested in continuing the conversation.",
        chinese_question: "他 __________ 的回答表明他不想继续谈话。",
        answers: [
            { option: "A", answer: "verbose", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "B", answer: "laconic", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "C", answer: "wordy", chinese_answer: "啰嗦", chinese_romanization: "luōsuo" },
            { option: "D", answer: "loquacious", chinese_answer: "健谈", chinese_romanization: "jiàntán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'laconic' means using very few words." +
            "<br><br>" +
            "(A) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(C) 'wordy' means using or expressed in too many words." +
            "<br><br>" +
            "(D) 'loquacious' means tending to talk a great deal; talkative.",
        chinese_explanation: "(B) '简洁' 一词意味着使用很少的话。" +
            "<br><br>" +
            "'冗长' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "'啰嗦' 意味着使用或表达的词太多。" +
            "<br><br>" +
            "'健谈' 意味着倾向于大量谈话的；健谈的。"
    },
    {
        id: 7,
        question: "The manager was __________ in his duties, often forgetting important tasks and deadlines.",
        chinese_question: "经理在履行职责时 __________，经常忘记重要的任务和最后期限。",
        answers: [
            { option: "A", answer: "remiss", chinese_answer: "玩忽职守", chinese_romanization: "wánhū zhíshǒu" },
            { option: "B", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟", chinese_romanization: "yīsī bùgǒu" },
            { option: "D", answer: "attentive", chinese_answer: "专心", chinese_romanization: "zhuānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remiss' means lacking care or attention to duty; negligent." +
            "<br><br>" +
            "(B) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(A) '玩忽职守' 一词意味着缺乏对职责的关心或注意；疏忽的。" +
            "<br><br>" +
            "(B) '勤奋' 意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "(C) '一丝不苟' 意味着表现出对细节的极大关注；非常仔细和精确的。" +
            "<br><br>" +
            "(D) '专心' 意味着对某事密切关注。"
    },
    {
        id: 8,
        question: "Their relationship became __________ after the argument, with both sides avoiding each other and refusing to communicate.",
        chinese_question: "争吵之后，他们的关系变得 __________，双方互相回避，不愿交流。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "B", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "easygoing", chinese_answer: "随和", chinese_romanization: "suíhé" },
            { option: "D", answer: "strained", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'strained' means (of a relationship) not relaxed or comfortable; tense or uneasy." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(B) 'harmonious' means free from disagreement or dissent." +
            "<br><br>" +
            "(C) 'easygoing' means relaxed and tolerant in attitude or manner.",
        chinese_explanation: "(D) '紧张' 一词意味着（指关系）不轻松或舒适的；紧张或不安的。" +
            "<br><br>" +
            "(A) '放松' 意味着没有紧张和焦虑的；自在的。" +
            "<br><br>" +
            "(B) '和谐' 意味着没有分歧或异议的。" +
            "<br><br>" +
            "(C) '随和' 意味着态度或举止放松和宽容的。"
    },
    {
        id: 9,
        question: "The __________ crowd at the concert made it impossible to hear anything but their cheers and shouts.",
        chinese_question: "演唱会上的 __________ 人群让人除了他们的欢呼声和叫喊声，什么也听不到。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "vociferous", chinese_answer: "喧嚣", chinese_romanization: "xuānxiāo" },
            { option: "C", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "subdued", chinese_answer: "压抑", chinese_romanization: "yāyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vociferous' means vehement or clamorous." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(C) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(D) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(B) '喧嚣' 一词意味着激烈或喧闹的。" +
            "<br><br>" +
            "(A) '安静' 意味着几乎没有声音。" +
            "<br><br>" +
            "(C) '沉默' 意味着没有发出或伴随任何声音。" +
            "<br><br>" +
            "(D) '压抑' 意味着安静而相当深思或抑郁的。"
    },
    {
        id: 10,
        question: "The atmosphere in the room was __________ after the shocking news was announced, with everyone speaking in hushed tones.",
        chinese_question: "宣布震惊消息后，房间里的气氛变得 __________，每个人都在低声细语。",
        answers: [
            { option: "A", answer: "lively", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "B", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "subdued", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "D", answer: "vibrant", chinese_answer: "生机勃勃", chinese_romanization: "shēngjī bóbó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(A) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(B) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(D) 'vibrant' means full of energy and enthusiasm.",
        chinese_explanation: "(C) '克制' 一词意味着安静而相当深思或抑郁的。" +
            "<br><br>" +
            "(A) '活跃' 意味着充满生命和能量的；活跃和外向的。" +
            "<br><br>" +
            "(B) '混乱' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(D) '生机勃勃' 意味着充满能量和热情的。"
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
