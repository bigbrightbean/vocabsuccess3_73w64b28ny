// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The student made a __________ glance at his friend's paper during the exam, hoping the teacher wouldn't notice.",
        chinese_question: "学生在考试期间 __________ 地瞥了一眼朋友的试卷，希望老师不会注意到。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "open", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "D", answer: "furtive", chinese_answer: "偷偷摸摸的", chinese_romanization: "tōutōu mōmō de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'furtive' means attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'open' means not concealed or secret.",
        chinese_explanation: "(D) '偷偷摸摸的' 意味着试图避免注意或关注，通常是因为内疚或认为被发现会导致麻烦；秘密的。" +
            "<br><br>" +
            "(A) '明显的' 意味着容易察觉或理解的；清晰、自明或显而易见的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(C) '公开的' 意味着没有隐藏或秘密的。"
    },
    {
        id: 2,
        question: "The ballroom was __________ with glittering chandeliers and elegant decorations for the gala.",
        chinese_question: "为了晚会，舞厅被 __________ 的水晶吊灯和优雅的装饰所点缀。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
            { option: "B", answer: "resplendent", chinese_answer: "光辉灿烂", chinese_romanization: "guānghuī cànlàn" },
            { option: "C", answer: "drab", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "shabby", chinese_answer: "破旧", chinese_romanization: "pòjiù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resplendent' means attractive and impressive through being richly colorful or sumptuous." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'drab' means lacking brightness or interest; drearily dull." +
            "<br><br>" +
            "(D) 'shabby' means in poor condition through long or hard use or lack of care.",
        chinese_explanation: "(B) '光辉灿烂' 一词意味着通过丰富的色彩或华丽的外观而吸引人和令人印象深刻的。" +
            "<br><br>" +
            "(A) '暗淡' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '单调' 意味着缺乏亮度或兴趣的；阴郁的。" +
            "<br><br>" +
            "(D) '破旧' 意味着由于长时间或艰苦使用或缺乏护理而处于不良状态的。"
    },
    {
        id: 3,
        question: "Her __________ mannerisms and ostentatious dress made her seem arrogant and self-important.",
        chinese_question: "她 __________ 的举止和炫耀的穿着使她看起来傲慢且自大。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "modest", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "unassuming", chinese_answer: "不装腔作势", chinese_romanization: "bù zhuāng qiāng zuò shì" },
            { option: "D", answer: "pretentious", chinese_answer: "自命不凡", chinese_romanization: "zìmìng bù fán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'unassuming' means not pretentious or arrogant; modest.",
        chinese_explanation: "(D) '自命不凡' 一词意味着通过影响更大的重要性、才华、文化等来试图给人留下深刻印象。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估的。" +
            "<br><br>" +
            "(B) '谦逊' 意味着对自己的能力或成就没有过高估计或自负的。" +
            "<br><br>" +
            "(C) '不装腔作势' 意味着不装腔作势或傲慢的；谦逊的。"
    },
    {
        id: 4,
        question: "The novel's __________ descriptions of crime scenes made it a bestseller among thriller enthusiasts.",
        chinese_question: "这部小说对犯罪现场的 __________ 描述使它成为惊悚小说爱好者的畅销书。",
        answers: [
            { option: "A", answer: "restrained", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "B", answer: "subtle", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "C", answer: "lurid", chinese_answer: "骇人听闻", chinese_romanization: "hàirén tīngwén" },
            { option: "D", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lurid' means very vivid in color, especially so as to create an unpleasantly harsh or unnatural effect, or presented in vividly shocking or sensational terms." +
            "<br><br>" +
            "(A) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(C) '骇人听闻' 一词意味着颜色非常鲜艳，尤其是造成令人不悦的刺眼或不自然的效果，或以生动的惊人或耸人听闻的术语呈现的。" +
            "<br><br>" +
           "'克制' 意味着以保留或适度为特征的；不带情感或冷静的。" +
            "<br><br>" +
            "'微妙' 意味着如此精细或精确，以至于难以分析或描述的。" +
            "<br><br>" +
            "'温和' 意味着不严厉、严重或苛刻的。"
    },
    {
        id: 5,
        question: "Despite facing numerous challenges, her __________ spirit never wavered.",
        chinese_question: "尽管面临诸多挑战，她的 __________ 精神从未动摇。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "indomitable", chinese_answer: "不屈不挠", chinese_romanization: "bù qū bù náo" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indomitable' means impossible to subdue or defeat." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(C) '不屈不挠' 一词意味着不可压制或打败的。" +
            "<br><br>" +
            "(A) '弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(B) '胆小' 意味着缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(D) '脆弱' 意味着容易破裂或损坏的。"
    },
    {
        id: 6,
        question: "Her __________ attitude made her unpopular among her peers, who found her arrogance off-putting.",
        chinese_question: "她的 __________ 态度让她在同龄人中不受欢迎，他们觉得她的傲慢令人反感。",
        answers: [
            { option: "A", answer: "haughty", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
            { option: "B", answer: "modest", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "D", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haughty' means arrogantly superior and disdainful." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(A) '傲慢' 一词意味着傲慢地优越和轻蔑的。" +
            "<br><br>" +
            "(B) '谦逊' 意味着对自己的能力或成就不自负或适度的。" +
            "<br><br>" +
            "(C) '谦虚' 意味着对自己的重要性有或表现出适度或低估的。" +
            "<br><br>" +
            "(D) '尊重' 意味着感到或表现出敬意。"
    },
    {
        id: 7,
        question: "After years in the wild, the once-tame cat had become completely __________.",
        chinese_question: "经过多年的野外生活，这只曾经驯服的猫变得完全 __________。",
        answers: [
            { option: "A", answer: "domesticated", chinese_answer: "驯养", chinese_romanization: "xùnyǎng" },
            { option: "B", answer: "feral", chinese_answer: "野生", chinese_romanization: "yěshēng" },
            { option: "C", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" },
            { option: "D", answer: "tame", chinese_answer: "驯服", chinese_romanization: "xùnfú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feral' means in a wild state, especially after escape from captivity or domestication." +
            "<br><br>" +
            "(A) 'domesticated' means tamed and kept as a pet or on a farm." +
            "<br><br>" +
            "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'tame' means (of an animal) not dangerous or frightened of people; domesticated.",
        chinese_explanation: "(B) '野生' 一词意味着处于野生状态，特别是在逃离囚禁或驯养后。" +
            "<br><br>" +
            "(A) '驯养' 意味着驯服并作为宠物或在农场饲养。" +
            "<br><br>" +
            "(C) '温柔' 意味着有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(D) '驯服' 意味着（动物）不危险或不害怕人；驯服的。"
    },
    {
        id: 8,
        question: "The doctor advised the __________ patient to adopt a healthier diet and exercise regimen.",
        chinese_question: "医生建议 __________ 的病人采取更健康的饮食和锻炼计划。",
        answers: [
            { option: "A", answer: "slender", chinese_answer: "苗条", chinese_romanization: "miáotiáo" },
            { option: "B", answer: "corpulent", chinese_answer: "肥胖", chinese_romanization: "féipàng" },
            { option: "C", answer: "fit", chinese_answer: "健康", chinese_romanization: "jiànkāng" },
            { option: "D", answer: "lean", chinese_answer: "瘦", chinese_romanization: "shòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corpulent' means fat." +
            "<br><br>" +
            "(A) 'slender' means gracefully thin." +
            "<br><br>" +
            "(C) 'fit' means in good health, especially because of regular physical exercise." +
            "<br><br>" +
            "(D) 'lean' means thin but strong and healthy.",
        chinese_explanation: "(B) '肥胖' 意味着胖。" +
            "<br><br>" +
            "(A) '苗条' 意味着优雅地瘦。" +
            "<br><br>" +
            "(C) '健康' 意味着因为经常锻炼而身体健康。" +
            "<br><br>" +
            "(D) '瘦' 意味着瘦但强壮和健康的。"
    },
    {
        id: 9,
        question: "She gazed out the window with a __________ expression, longing for the days of her youth.",
        chinese_question: "她带着 __________ 的表情望向窗外，怀念她的青春岁月。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "content", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "C", answer: "wistful", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "D", answer: "cheerful", chinese_answer: "愉快", chinese_romanization: "yúkuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wistful' means having or showing a feeling of vague or regretful longing." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(D) 'cheerful' means noticeably happy and optimistic.",
        chinese_explanation: "(C) '渴望' 一词意味着有或表现出模糊或遗憾的渴望。" +
            "<br><br>" +
            "(A) '快乐' 意味着感到、表达或引起极大的愉悦和幸福。" +
            "<br><br>" +
            "(B) '满足' 意味着处于和平幸福的状态。" +
            "<br><br>" +
            "(D) '愉快' 意味着明显的快乐和乐观。"
    },
    {
        id: 10,
        question: "The __________ kitten hid under the bed, afraid of the new surroundings.",
        chinese_question: "那只 __________ 的小猫躲在床下，害怕新的环境。",
        answers: [
            { option: "A", answer: "brave", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "B", answer: "fearless", chinese_answer: "无畏", chinese_romanization: "wúwèi" },
            { option: "C", answer: "timorous", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "D", answer: "bold", chinese_answer: "大胆", chinese_romanization: "dàdǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
            "<br><br>" +
            "(A) 'brave' means ready to face and endure danger or pain; showing courage." +
            "<br><br>" +
            "(B) 'fearless' means lacking fear." +
            "<br><br>" +
            "(D) 'bold' means showing an ability to take risks; confident and courageous.",
        chinese_explanation: "(C) '胆小' 一词意味着表现出或遭受紧张、恐惧或缺乏信心。" +
            "<br><br>" +
            "'勇敢' 意味着准备面对和忍受危险或痛苦；表现出勇气。" +
            "<br><br>" +
            "'无畏' 意味着缺乏恐惧。" +
            "<br><br>" +
            "'大胆' 意味着表现出冒险的能力；自信和勇敢的。"
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
