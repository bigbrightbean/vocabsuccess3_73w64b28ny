// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The actress delivered her lines with _______ grace and elegance.",
        chinese_question: "女演员以 _______ 的优雅和风度说出了台词。",
        answers: [
            { option: "A", answer: "awkward", chinese_answer: "笨拙", chinese_romanization: "bènzhuó" },
            { option: "B", answer: "effortless", chinese_answer: "毫不费力", chinese_romanization: "háobù fèilì" },
            { option: "C", answer: "clumsy", chinese_answer: "笨手笨脚", chinese_romanization: "bènshǒu bènjiǎo" },
            { option: "D", answer: "inelegant", chinese_answer: "不优雅", chinese_romanization: "bù yōuyǎ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'effortless' means requiring or involving no effort; displaying grace and ease." +
            "<br><br>" +
            "(A) 'awkward' means lacking skill or dexterity; clumsy." +
            "<br><br>" +
            "(C) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(D) 'inelegant' means lacking in refinement or grace.",
        chinese_explanation: "(B) '毫不费力' 意味着不需要或涉及任何努力；显示出优雅和轻松。" +
            "<br><br>" +
            "(A) '笨拙' 意味着缺乏技巧或灵巧；笨拙。" +
            "<br><br>" +
            "(C) '笨手笨脚' 意味着动作笨拙或处理事物笨拙。" +
            "<br><br>" +
            "(D) '不优雅' 意味着缺乏精致或优雅。"
    },
    {
        id: 2,
        question: "Her __________ plan to start a new business in the middle of an economic downturn surprised everyone.",
        chinese_question: "她在经济衰退中创业的 __________ 计划让每个人都感到惊讶。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "audacious", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "D", answer: "conservative", chinese_answer: "保守", chinese_romanization: "bǎoshǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'audacious' means showing a willingness to take surprisingly bold risks." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation.",
        chinese_explanation: "(C) '大胆' 一词意味着表现出愿意冒惊人的大胆风险。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '胆小' 意味着缺乏勇气或信心；容易害怕。" +
            "<br><br>" +
            "(D) '保守' 意味着坚持传统态度和价值观，对变化或创新持谨慎态度。"
    },
    {
        id: 3,
        question: "The politician’s __________ promises during the campaign were met with skepticism by the public.",
        chinese_question: "政治家在竞选期间的 __________ 承诺遭到了公众的怀疑。",
        answers: [
            { option: "A", answer: "grandiose", chinese_answer: "宏伟", chinese_romanization: "hóngwěi" },
            { option: "B", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "reluctant", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grandiose' means impressive but not practical." +
            "<br><br>" +
            "(B) 'modest' means humble and not boastful." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(D) 'reluctant' means unwilling and hesitant.",
        chinese_explanation: "(A) '宏伟'一词意味着令人印象深刻但不切实际。" +
            "<br><br>" +
            "(B) '谦虚' 意味着谦逊，不自夸。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(D) '不情愿' 意味着不愿意和犹豫。"
    },
    {
        id: 4,
        question: "The student’s __________ participation in class discussions helped foster a lively and engaging learning environment.",
        chinese_question: "学生在课堂讨论中的 __________ 参与有助于营造一个生动有趣的学习环境。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "reluctant", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" },
            { option: "C", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(B) 'reluctant' means unwilling and hesitant; disinclined." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(A) '热情'一词意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(B) '不情愿' 意味着不愿意和犹豫；不倾向。" +
            "<br><br>" +
            "(C) '最小' 意味着最小的数量、数量或程度；微不足道。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或他人所做的事情，而没有积极的回应或抵抗。"
    },
    {
        id: 5,
        question: "The accountant was __________ in his work, ensuring that every transaction was recorded accurately.",
        chinese_question: "这位会计工作 __________，确保每一笔交易都准确记录。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "scrupulous", chinese_answer: "认真", chinese_romanization: "rènzhēn" },
            { option: "C", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "sloppy", chinese_answer: "草率", chinese_romanization: "cǎoshuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scrupulous' means diligent, thorough, and extremely attentive to details." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'sloppy' means careless and unsystematic; excessively casual.",
        chinese_explanation: "(B) '认真' 一词意味着勤奋、彻底和极其注意细节。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '疏忽' 意味着在做某事时未能尽适当的注意。" +
            "<br><br>" +
            "(D) '草率' 意味着粗心和不系统的；过于随意的。"
    },
    {
        id: 6,
        question: "The __________ weather made it perfect for a day at the beach.",
        chinese_question: "__________ 的天气使得在海滩上的一天变得完美。",
        answers: [
            { option: "A", answer: "inclement", chinese_answer: "恶劣", chinese_romanization: "èliè" },
            { option: "B", answer: "scorching", chinese_answer: "灼热", chinese_romanization: "zhuórè" },
            { option: "C", answer: "frigid", chinese_answer: "寒冷", chinese_romanization: "hánlěng" },
            { option: "D", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(A) 'inclement' means unpleasantly cold or wet." +
            "<br><br>" +
            "(B) 'scorching' means very hot." +
            "<br><br>" +
            "(C) 'frigid' means very cold.",
        chinese_explanation: "(D) '温和' 意味着不严厉、严重或苛刻。" +
            "<br><br>" +
            "(A) '恶劣' 意味着不愉快的冷或湿。" +
            "<br><br>" +
            "(B) '灼热' 意味着非常热。" +
            "<br><br>" +
            "(C) '寒冷' 意味着非常冷。"
    },
    {
        id: 7,
        question: "The student’s __________ attitude towards learning resulted in impressive academic achievements.",
        chinese_question: "学生对学习的 __________ 态度带来了令人印象深刻的学术成就。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "B", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "lackadaisical", chinese_answer: "懒散", chinese_romanization: "lǎnsǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diligent' means showing care in one’s work." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest." +
            "<br><br>" +
            "(D) 'lackadaisical' means lacking enthusiasm.",
        chinese_explanation: "(A) '勤奋'一词意味着在工作中表现出关心。" +
            "<br><br>" +
            "(B) '粗心' 意味着没有给予足够的关注。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣。" +
            "<br><br>" +
            "(D) '懒散' 意味着缺乏热情。"
    },
    {
        id: 8,
        question: "The politician’s __________ speech inspired hope and unity among the diverse crowd gathered at the rally.",
        chinese_question: "政治家的 __________ 演讲在集会的多样人群中激发了希望和团结。",
        answers: [
            { option: "A", answer: "eloquent", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" },
            { option: "B", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "C", answer: "uninspired", chinese_answer: "无创意", chinese_romanization: "wú chuàngyì" },
            { option: "D", answer: "disjointed", chinese_answer: "支离破碎", chinese_romanization: "zhīlí pòsuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eloquent' means fluent or persuasive in speaking or writing." +
            "<br><br>" +
            "(B) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'uninspired' means lacking in imagination or originality." +
            "<br><br>" +
            "(D) 'disjointed' means lacking a coherent sequence or connection.",
        chinese_explanation: "(A) '雄辩'一词意味着在讲话或写作中流利或有说服力。" +
            "<br><br>" +
            "(B) '单调' 意味着乏味、沉闷、重复；缺乏变化和兴趣。" +
            "<br><br>" +
            "(C) '无创意' 意味着缺乏想象力或独创性。" +
            "<br><br>" +
            "(D) '支离破碎' 意味着缺乏连贯的顺序或连接。"
    },
    {
        id: 9,
        question: "The plot of the movie was so __________ that everyone guessed the ending within the first few minutes.",
        chinese_question: "电影的情节如此 __________，每个人在最初几分钟内就猜到了结局。",
        answers: [
            { option: "A", answer: "unpredictable", chinese_answer: "不可预测", chinese_romanization: "bùkě yùcè" },
            { option: "B", answer: "surprising", chinese_answer: "令人惊讶", chinese_romanization: "lìng rén jīngyà" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(A) 'unpredictable' means not able to be predicted." +
            "<br><br>" +
            "(B) 'surprising' means causing surprise; unexpected." +
            "<br><br>" +
            "(C) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(D) '可预测' 一词意味着可以预测的。" +
            "<br><br>" +
            "(A) '不可预测' 意味着不能预测的。" +
            "<br><br>" +
            "(B) '令人惊讶' 意味着引起惊讶的；意想不到的。" +
            "<br><br>" +
            "(C) '混乱' 意味着完全混乱和无序的状态。"
    },
    {
        id: 10,
        question: "The __________ glow of the fireflies created a magical atmosphere in the garden.",
        chinese_question: "萤火虫的 __________ 光芒在花园中营造了一种神奇的氛围。",
        answers: [
            { option: "A", answer: "dim", chinese_answer: "昏暗", chinese_romanization: "hūn'àn" },
            { option: "B", answer: "dark", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
            { option: "C", answer: "luminous", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
            { option: "D", answer: "dull", chinese_answer: "暗淡", chinese_romanization: "àndàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'luminous' means full of or shedding light; bright or shining, especially in the dark." +
            "<br><br>" +
            "(A) 'dim' means not bright or clear." +
            "<br><br>" +
            "(B) 'dark' means with little or no light." +
            "<br><br>" +
            "(D) 'dull' means lacking brightness, vividness, or sheen.",
        chinese_explanation: "(C) '明亮' 一词意味着充满光或发出光；明亮的或闪耀的，特别是在黑暗中。" +
            "<br><br>" +
            "'昏暗' 意味着不明亮或不清楚的。" +
            "<br><br>" +
            "'黑暗' 意味着光线很少或没有光线的。" +
            "<br><br>" +
            "'暗淡' 意味着缺乏亮度、生动性或光泽的。"
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
