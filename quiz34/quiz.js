// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ speech was full of grandiose claims and exaggerated statements, but lacked substance.",
        chinese_question: "他的演讲充满了 __________ 的言辞，夸大其词，但缺乏实质内容。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "modest", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
            { option: "D", answer: "bombastic", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bombastic' means high-sounding but with little meaning; inflated." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(D) '夸张' 一词意味着高调但意义不大；膨胀的。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估。" +
            "<br><br>" +
            "(B) '谦逊' 意味着对自己的能力或成就不自负或适度。" +
            "<br><br>" +
            "(C) '矜持' 意味着缓慢地表现出情感或意见。"
    },
    {
        id: 2,
        question: "Despite the excitement of traveling, there are many __________ tasks like packing and waiting in lines.",
        chinese_question: "尽管旅行很兴奋，但有许多 __________ 的任务，比如打包和排队。",
        answers: [
            { option: "A", answer: "exhilarating", chinese_answer: "令人兴奋", chinese_romanization: "lìng rén xīngfèn" },
            { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "thrilling", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "D", answer: "captivating", chinese_answer: "吸引人", chinese_romanization: "xīyǐnrén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mundane' means lacking interest or excitement." +
            "<br><br>" +
            "(A) 'exhilarating' means making one feel very happy or animated." +
            "<br><br>" +
            "(C) 'thrilling' means causing excitement and pleasure." +
            "<br><br>" +
            "(D) 'captivating' means capable of attracting and holding interest.",
        chinese_explanation: "(B) '平凡' 一词意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(A) '令人兴奋' 意味着使人感到非常快乐或激动。" +
            "<br><br>" +
            "(C) '激动' 意味着引起兴奋和愉悦。" +
            "<br><br>" +
            "(D) '吸引人' 意味着能够吸引并保持兴趣。"
    },
    {
        id: 3,
        question: "The __________ speech moved everyone in the audience to tears.",
        chinese_question: "__________ 的演讲让在场的每个人都感动得流泪。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷", chinese_romanization: "chénmèn" },
            { option: "B", answer: "inspiring", chinese_answer: "鼓舞人心", chinese_romanization: "gǔwǔ rénxīn" },
            { option: "C", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inspiring' means having the effect of inspiring someone." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '鼓舞人心' 意味着具有激励某人的效果。" +
            "<br><br>" +
            "(A) '沉闷' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '平凡' 意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(D) '琐碎' 意味着价值或重要性很小。"
    },
    {
        id: 4,
        question: "The scientist’s __________ findings in the research paper provided new insights into the disease.",
        chinese_question: "科学家在研究论文中的 __________ 发现为该疾病提供了新的见解。",
        answers: [
            { option: "A", answer: "groundbreaking", chinese_answer: "开创性", chinese_romanization: "kāichuàngxìng" },
            { option: "B", answer: "outdated", chinese_answer: "过时", chinese_romanization: "guòshí" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "superficial", chinese_answer: "表面", chinese_romanization: "biǎomiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'groundbreaking' means introducing new ideas or methods." +
            "<br><br>" +
            "(B) 'outdated' means no longer current." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected to the subject." +
            "<br><br>" +
            "(D) 'superficial' means only on the surface.",
        chinese_explanation: "(A) '开创性'一词意味着引入新想法或方法。" +
            "<br><br>" +
            "(B) '过时' 意味着不再当前。" +
            "<br><br>" +
            "(C) '无关' 意味着与主题无关。" +
            "<br><br>" +
            "(D) '表面' 意味着仅在表面上。"
    },
    {
        id: 5,
        question: "The lecture was filled with __________ information, understood by only a few scholars in the audience.",
        chinese_question: "讲座中充满了 __________ 的信息，只有观众中少数学者能理解。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "esoteric", chinese_answer: "深奥", chinese_romanization: "shēn'ào" },
            { option: "D", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge or interest." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '深奥' 一词意味着仅为少数具有专门知识或兴趣的人所理解。" +
            "<br><br>" +
            "(A) '常见' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(D) '明显' 意味着容易感知或理解；清楚的、自明的或显而易见的。"
    },
    {
        id: 6,
        question: "The computer software was so __________ that it couldn't run the latest applications.",
        chinese_question: "电脑软件太 __________ 了，无法运行最新的应用程序。",
        answers: [
            { option: "A", answer: "advanced", chinese_answer: "先进", chinese_romanization: "xiānjìn" },
            { option: "B", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "C", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "D", answer: "outdated", chinese_answer: "过时", chinese_romanization: "guòshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'outdated' means no longer produced or used; out of date." +
            "<br><br>" +
            "(A) 'advanced' means far on in progress or development." +
            "<br><br>" +
            "(B) 'innovative' means introducing new ideas or methods." +
            "<br><br>" +
            "(C) 'modern' means relating to the present or recent times as opposed to the remote past.",
        chinese_explanation: "(D) '过时' 一词意味着不再生产或使用；过时的。" +
            "<br><br>" +
            "(A) '先进' 意味着在进步或发展方面很远。" +
            "<br><br>" +
            "(B) '创新' 意味着引入新思想或方法。" +
            "<br><br>" +
            "(C) '现代' 意味着与现在或近期有关，而不是遥远的过去。"
    },
    {
        id: 7,
        question: "The __________ cheerleader rallied the crowd with her infectious energy and enthusiasm during the game.",
        chinese_question: "这位 __________ 的拉拉队员在比赛中以她那充满感染力的能量和热情激励了观众。",
        answers: [
            { option: "A", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "reserved", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "D", answer: "ebullient", chinese_answer: "热情洋溢的", chinese_romanization: "rèqíng yángyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ebullient' means cheerful and full of energy." +
            "<br><br>" +
            "(A) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(D) '热情洋溢的' 意味着充满活力和热情的。" +
            "<br><br>" +
            "(A) '压抑的' 意味着安静且相当深思或沮丧的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '保守的' 意味着慢于表达情感或意见的。"
    },
    {
        id: 8,
        question: "During the debate, he made a __________ argument against the proposed law, passionately defending his position.",
        chinese_question: "在辩论中，他对提议的法律进行了 __________ 的辩论，充满激情地捍卫了自己的立场。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "vehement", chinese_answer: "强烈", chinese_romanization: "qiángliè" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vehement' means showing strong feeling; forceful, passionate, or intense." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '强烈' 一词意味着表现出强烈的感情；有力的、充满激情的或强烈的。" +
            "<br><br>" +
            "(A) '温和' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(B) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 9,
        question: "The music had an __________ quality, making listeners feel as if they were floating on air.",
        chinese_question: "这音乐具有 __________ 的品质，让听众感觉好像在空中飘浮。",
        answers: [
            { option: "A", answer: "heavy", chinese_answer: "沉重", chinese_romanization: "chénzhòng" },
            { option: "B", answer: "solid", chinese_answer: "坚固", chinese_romanization: "jiāngù" },
            { option: "C", answer: "tangible", chinese_answer: "有形", chinese_romanization: "yǒuxíng" },
            { option: "D", answer: "ethereal", chinese_answer: "轻飘", chinese_romanization: "qīngpiāo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ethereal' means extremely delicate and light in a way that seems too perfect for this world." +
            "<br><br>" +
            "(A) 'heavy' means of great weight; difficult to lift or move." +
            "<br><br>" +
            "(B) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(C) 'tangible' means perceptible by touch.",
        chinese_explanation: "(D) '轻飘' 一词意味着极其精致和轻盈，似乎完美得不属于这个世界。" +
            "<br><br>" +
            "(A) '沉重' 意味着重量大；难以举起或移动。" +
            "<br><br>" +
            "(B) '坚固' 意味着形状牢固且稳定；不是液体或流体。" +
            "<br><br>" +
            "(C) '有形' 意味着可触知的。"
    },
    {
        id: 10,
      question: "The __________ delays caused by the frequent breakdowns of the machine frustrated the workers.",
        chinese_question: "机器频繁故障引起的 __________ 延误让工人们感到沮丧。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "B", answer: "soothing", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "vexatious", chinese_answer: "令人烦恼", chinese_romanization: "lìng rén fánnǎo" },
            { option: "D", answer: "delightful", chinese_answer: "令人高兴", chinese_romanization: "lìng rén gāoxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vexatious' means causing or tending to cause annoyance, frustration, or worry." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(C) '令人烦恼' 意味着引起或倾向于引起烦恼、沮丧或担忧的。" +
            "<br><br>" +
            "(A) '愉快' 意味着带来快乐满足感或享受。" +
            "<br><br>" +
            "(B) '安慰' 意味着有温和的平静效果的。" +
            "<br><br>" +
            "(D) '令人高兴' 意味着引起喜悦的；迷人的。"
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
