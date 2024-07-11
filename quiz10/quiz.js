// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The chef was known for being __________, ensuring every detail of the dish was perfect before serving it.",
        chinese_question: "这位厨师以 __________ 而闻名，在上菜前确保每道菜的每一个细节都完美无缺。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "sloppy", chinese_answer: "马虎", chinese_romanization: "mǎhu" },
            { option: "C", answer: "fastidious", chinese_answer: "挑剔", chinese_romanization: "tiāotì" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fastidious' means very attentive to and concerned about accuracy and detail." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '挑剔' 一词意味着非常注意和关注准确性和细节。" +
            "<br><br>" +
            "'粗心' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "'马虎' 意味着粗心和无系统的；过于随便的。" +
            "<br><br>" +
            "'漠不关心' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 2,
        question: "His __________ attitude often got him into fights and conflicts with others.",
        chinese_question: "他的 __________ 态度经常让他与他人发生争执和冲突。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "pugnacious", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "D", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pugnacious' means eager or quick to argue, quarrel, or fight." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(C) '好斗' 一词意味着急于或迅速争论、争吵或打架。" +
            "<br><br>" +
            "'和平' 意味着没有干扰；宁静。" +
            "<br><br>" +
            "'平静' 意味着不表现或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "'友好' 意味着友善和愉快的。"
    },
    {
        id: 3,
        question: "The storm was __________, leaving the sky clear and sunny within an hour.",
        chinese_question: "风暴是 __________ 的，一个小时内天空就变得晴朗了。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "B", answer: "lasting", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "C", answer: "enduring", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "D", answer: "transient", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'transient' means lasting only for a short time; impermanent." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(B) 'lasting' means enduring or able to endure over a long period of time." +
            "<br><br>" +
            "(C) 'enduring' means continuing or long-lasting.",
        chinese_explanation: "(D) '短暂' 一词意味着只持续很短时间的；不持久的。" +
            "<br><br>" +
            "'永久' 意味着持续或打算无限期地持续或保持不变。" +
            "<br><br>" +
            "'持久' 意味着在很长一段时间内持久或能够持久。" +
            "<br><br>" +
            "'持续' 意味着持续或持久的。"
    },
    {
        id: 4,
        question: "Her __________ behavior made it difficult for her colleagues to predict her actions.",
        chinese_question: "她 __________ 的行为使得同事们难以预测她的行动。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "B", answer: "erratic", chinese_answer: "古怪", chinese_romanization: "gǔguài" },
            { option: "C", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'erratic' means not even or regular in pattern or movement; unpredictable." +
            "<br><br>" +
            "(A) 'consistent' means acting or done in the same way over time." +
            "<br><br>" +
            "(C) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(B) '古怪' 一词意味着模式或运动不均匀或不规律的；不可预测的。" +
            "<br><br>" +
            "(A) '一致' 意味着随着时间的推移以相同的方式行事。" +
            "<br><br>" +
            "(C) '稳定' 意味着不太可能改变或失败；牢固确立的。" +
            "<br><br>" +
            "(D) '可预测' 意味着能够预测的。"
    },
    {
        id: 5,
        question: "The film was criticized for its __________ violence, which added nothing to the story.",
        chinese_question: "这部电影因其 __________ 的暴力而受到批评，这对故事没有任何帮助。",
        answers: [
            { option: "A", answer: "necessary", chinese_answer: "必要", chinese_romanization: "bìyào" },
            { option: "B", answer: "gratuitous", chinese_answer: "无端", chinese_romanization: "wúduān" },
            { option: "C", answer: "justified", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "D", answer: "warranted", chinese_answer: "正当", chinese_romanization: "zhèngdàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gratuitous' means uncalled for; lacking good reason; unwarranted." +
            "<br><br>" +
            "(A) 'necessary' means required to be done, achieved, or present; needed; essential." +
            "<br><br>" +
            "(C) 'justified' means having, done for, or marked by a good or legitimate reason." +
            "<br><br>" +
            "(D) 'warranted' means justified or necessitated (a certain course of action).",
        chinese_explanation: "(B) '无端' 一词意味着无缘无故的；没有正当理由的；不必要的。" +
            "<br><br>" +
            "'必要' 意味着需要完成、实现或存在；需要的；必不可少的。" +
            "<br><br>" +
            "'合理' 意味着有、为或标志着一个好的或合法的理由。" +
            "<br><br>" +
            "'正当' 意味着正当或必要（某一行动方案）。"
    },
    {
        id: 6,
        question: "The population of the small town was quite __________, with most residents sharing the same cultural background.",
        chinese_question: "这个小镇的人口相当 __________，大多数居民有相同的文化背景。",
        answers: [
            { option: "A", answer: "diverse", chinese_answer: "多样", chinese_romanization: "duōyàng" },
            { option: "B", answer: "heterogeneous", chinese_answer: "异质", chinese_romanization: "yìzhì" },
            { option: "C", answer: "homogeneous", chinese_answer: "同质", chinese_romanization: "tóngzhì" },
            { option: "D", answer: "varied", chinese_answer: "多变", chinese_romanization: "duōbiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'homogeneous' means of the same kind; alike." +
            "<br><br>" +
            "(A) 'diverse' means showing a great deal of variety; very different." +
            "<br><br>" +
            "(B) 'heterogeneous' means diverse in character or content." +
            "<br><br>" +
            "(D) 'varied' means incorporating a number of different types or elements; showing variation or variety.",
        chinese_explanation: "(C) '同质' 一词意味着同类的；相似的。" +
            "<br><br>" +
            "'多样' 意味着显示出大量的变化；非常不同的。" +
            "<br><br>" +
            "'异质' 意味着在性质或内容上多样化的。" +
            "<br><br>" +
            "'多变' 意味着包含多种不同类型或元素；显示出变化或多样性。"
    },
    {
        id: 7,
        question: "His __________ response left everyone unsure of his true feelings about the proposal.",
        chinese_question: "他的 __________ 回应让每个人都不确定他对这个提议的真实感受。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "unequivocal", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "C", answer: "equivocal", chinese_answer: "模棱两可", chinese_romanization: "móléng liǎng kě" },
            { option: "D", answer: "certain", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equivocal' means open to more than one interpretation; ambiguous." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'unequivocal' means leaving no doubt; unambiguous." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(C) '模棱两可' 一词意味着有多种解释的；含糊不清的。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '明确' 意味着毫无疑问的；清楚的。" +
            "<br><br>" +
            "(D) '确定' 意味着确定无疑的；没有疑问的。"
    },
    {
        id: 8,
        question: "His __________ quest for the fountain of youth led him on a journey across continents, searching for mythical waters.",
        chinese_question: "他对追求青春之泉的 __________ 追求使他踏上了跨越大陆的旅程，寻找神话中的水域。",
        answers: [
            { option: "A", answer: "practical", chinese_answer: "实际", chinese_romanization: "shíjì" },
            { option: "B", answer: "quixotic", chinese_answer: "不切实际", chinese_romanization: "bù qièshíjì" },
            { option: "C", answer: "pragmatic", chinese_answer: "实用", chinese_romanization: "shíyòng" },
            { option: "D", answer: "sensible", chinese_answer: "明智", chinese_romanization: "míngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
            "<br><br>" +
            "(A) 'practical' means likely to succeed or be effective in real circumstances; feasible." +
            "<br><br>" +
            "(C) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
            "<br><br>" +
            "(D) 'sensible' means chosen in accordance with wisdom or prudence; likely to be of benefit.",
        chinese_explanation: "(B) '不切实际' 一词意味着过分理想主义；不切实际和不现实的。" +
            "<br><br>" +
            "(A) '实际' 意味着在现实情况下可能成功或有效；可行的。" +
            "<br><br>" +
            "(C) '实用' 意味着以实际而不是理论上的考虑方式来明智和实际地处理事情。" +
            "<br><br>" +
            "(D) '明智' 意味着根据智慧或谨慎选择的；可能有益的。"
    },
    {
        id: 9,
        question: "The CEO's __________ speech, filled with big words and grand promises, left the employees skeptical about real changes.",
        chinese_question: "首席执行官的 __________ 演讲充满了大词和宏大的承诺，使员工对实际的变化持怀疑态度。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "grandiloquent", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" },
            { option: "C", answer: "plain", chinese_answer: "朴素", chinese_romanization: "pǔsù" },
            { option: "D", answer: "straightforward", chinese_answer: "直率", chinese_romanization: "zhíshuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grandiloquent' means pompous or extravagant in language, style, or manner, especially in a way that is intended to impress." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'plain' means not decorated or elaborate; simple or basic in character." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(B) '夸张' 一词意味着语言、风格或方式上夸张或华丽的，特别是意在给人留下深刻印象的。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或完成；没有困难的。" +
            "<br><br>" +
            "(C) '朴素' 意味着不装饰或复杂；简单或基本的。" +
            "<br><br>" +
            "(D) '直率' 意味着不复杂且易于完成或理解的。"
    },
    {
        id: 10,
        question: "The teacher implemented new __________ strategies to improve student engagement and learning outcomes.",
        chinese_question: "老师实施了新的 __________ 策略，以提高学生的参与度和学习效果。",
        answers: [
            { option: "A", answer: "financial", chinese_answer: "财务", chinese_romanization: "cáiwù" },
            { option: "B", answer: "managerial", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
            { option: "C", answer: "pedagogical", chinese_answer: "教学", chinese_romanization: "jiàoxué" },
            { option: "D", answer: "operational", chinese_answer: "运营", chinese_romanization: "yùnyíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pedagogical' means relating to teaching." +
            "<br><br>" +
            "(A) 'financial' means relating to finance." +
            "<br><br>" +
            "(B) 'managerial' means relating to management or managers." +
            "<br><br>" +
            "(D) 'operational' means relating to the routine functioning and activities of an organization.",
        chinese_explanation: "(C) '教学' 一词意味着与教学有关的。" +
            "<br><br>" +
            "(A) '财务' 意味着与财务有关的。" +
            "<br><br>" +
            "(B) '管理' 意味着与管理或经理有关的。" +
            "<br><br>" +
            "(D) '运营' 意味着与组织的日常运作和活动有关的。"
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
