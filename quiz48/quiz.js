// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The dancer's __________ performance conveyed a range of emotions, each movement evoking a different feeling in the audience.",
        chinese_question: "舞者的 __________ 表演传达了各种情感，每一个动作都唤起了观众不同的感觉。",
        answers: [
            { option: "A", answer: "evocative", chinese_answer: "唤起的", chinese_romanization: "huànqǐ de" },
            { option: "B", answer: "graceful", chinese_answer: "优美的", chinese_romanization: "yōuměi de" },
            { option: "C", answer: "mechanical", chinese_answer: "机械的", chinese_romanization: "jīxiè de" },
            { option: "D", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evocative' means bringing strong images, memories, or feelings to mind." +
            "<br><br>" +
            "(B) 'graceful' means showing elegance and poise in movement, manner, or style." +
            "<br><br>" +
            "(C) 'mechanical' means lacking spontaneity or emotion; automatic." +
            "<br><br>" +
            "(D) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest.",
        chinese_explanation: "(A) '唤起的' 意味着使人想起强烈的形象、回忆或感觉。" +
            "<br><br>" +
            "(B) '优美的' 意味着在动作、方式或风格上展现优雅和优雅。" +
            "<br><br>" +
            "(C) '机械的' 意味着缺乏自发性或情感；自动的。" +
            "<br><br>" +
            "(D) '单调的' 意味着枯燥、乏味和重复；缺乏变化和兴趣。"
    },
    {
        id: 2,
        question: "The professor's __________ lecture on ancient tax codes, delivered in a monotone voice, caused several students to nod off in their seats.",
        chinese_question: "教授用单调的声音讲授古代税法的 __________ 讲座，导致几名学生在座位上打瞌睡。",
        answers: [
            { option: "A", answer: "stimulating", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "B", answer: "exciting", chinese_answer: "令人兴奋", chinese_romanization: "lìng rén xīngfèn" },
            { option: "C", answer: "invigorating", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
            { option: "D", answer: "soporific", chinese_answer: "催眠", chinese_romanization: "cuīmián" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'soporific' means tending to induce drowsiness or sleep." +
            "<br><br>" +
            "(A) 'stimulating' means encouraging or arousing interest or enthusiasm." +
            "<br><br>" +
            "(B) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'invigorating' means making one feel strong, healthy, and full of energy.",
        chinese_explanation: "(D) '催眠' 一词意味着引起困倦或睡意的。" +
            "<br><br>" +
            "(A) '刺激' 意味着鼓励或激发兴趣或热情的。" +
            "<br><br>" +
            "(B) '令人兴奋' 意味着引起极大热情和渴望的。" +
            "<br><br>" +
            "(C) '振奋' 意味着使人感到强壮、健康和充满能量的。"
    },
    {
        id: 3,
        question: "The performance received __________ reviews because the actors seemed uninspired and the plot was dull.",
        chinese_question: "演出获得了 __________ 的评价，因为演员们显得没有灵感，情节也很平淡。",
        answers: [
            { option: "A", answer: "brilliant", chinese_answer: "辉煌", chinese_romanization: "huīhuáng" },
            { option: "B", answer: "dazzling", chinese_answer: "耀眼", chinese_romanization: "yàoyǎn" },
            { option: "C", answer: "lackluster", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "D", answer: "captivating", chinese_answer: "吸引人", chinese_romanization: "xīyǐn rén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring." +
            "<br><br>" +
            "(A) 'brilliant' means exceptionally clever or talented." +
            "<br><br>" +
            "(B) 'dazzling' means extremely bright, especially so as to blind the eyes temporarily." +
            "<br><br>" +
            "(D) 'captivating' means capable of attracting and holding interest; charming.",
        chinese_explanation: "(C) '平淡' 一词意味着缺乏活力、力量或信念的；没有灵感或不激动人心的。" +
            "<br><br>" +
            "(A) '辉煌' 意味着异常聪明或有才华的。" +
            "<br><br>" +
            "(B) '耀眼' 意味着非常明亮，特别是以至于暂时致盲。" +
            "<br><br>" +
            "(D) '吸引人' 意味着能够吸引并保持兴趣的；迷人的。"
    },
    {
        id: 4,
        question: "The politician's __________ views appealed to voters who were looking for balanced and practical solutions.",
        chinese_question: "这位政治家的 __________ 观点吸引了那些寻找平衡和实际解决方案的选民。",
        answers: [
            { option: "A", answer: "extreme", chinese_answer: "极端", chinese_romanization: "jíduān" },
            { option: "B", answer: "radical", chinese_answer: "激进", chinese_romanization: "jījìn" },
            { option: "C", answer: "fanatical", chinese_answer: "狂热", chinese_romanization: "kuángrè" },
            { option: "D", answer: "moderate", chinese_answer: "温和", chinese_romanization: "wēnhé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(A) 'extreme' means reaching a high or the highest degree; very great." +
            "<br><br>" +
            "(B) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(C) 'fanatical' means filled with excessive and single-minded zeal.",
        chinese_explanation: "(D) '温和' 一词意味着在数量、强度、质量或程度上是平均的。" +
            "<br><br>" +
            "(A) '极端' 意味着达到很高或最高程度的；非常大的。" +
            "<br><br>" +
            "(B) '激进' 意味着影响某事物的基本性质的；深远或彻底的。" +
            "<br><br>" +
            "(C) '狂热' 意味着充满过分和一心一意的热情。"
    },
    {
        id: 5,
        question: "Her __________ approach to problem-solving involved breaking down each issue into manageable parts and addressing them one by one.",
        chinese_question: "她 __________ 的解决问题的方法包括将每个问题分解成可管理的部分，然后逐一解决。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "haphazard", chinese_answer: "杂乱无章", chinese_romanization: "záluàn wúzhāng" },
            { option: "C", answer: "systematic", chinese_answer: "系统", chinese_romanization: "xìtǒng" },
            { option: "D", answer: "random", chinese_answer: "随机", chinese_romanization: "suíjī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'systematic' means done or acting according to a fixed plan or system; methodical." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
        chinese_explanation: "(C) '系统' 一词意味着按照固定计划或系统进行的；有条不紊的。" +
            "<br><br>" +
            "(A) '混乱' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '杂乱无章' 意味着缺乏任何明显的组织原则的。" +
            "<br><br>" +
            "(D) '随机' 意味着没有方法或有意识决定的情况下进行的。"
    },
    {
        id: 6,
        question: "The film director's __________ style, combining traditional techniques with modern technology, captivated audiences worldwide and won numerous awards.",
        chinese_question: "这位电影导演的 __________ 风格，将传统技术与现代科技相结合，吸引了全世界的观众，并赢得了无数奖项。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "B", answer: "avant-garde", chinese_answer: "前卫", chinese_romanization: "qiánwèi" },
            { option: "C", answer: "rudimentary", chinese_answer: "基本", chinese_romanization: "jīběn" },
            { option: "D", answer: "amateur", chinese_answer: "业余", chinese_romanization: "yèyú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'avant-garde' means favoring or introducing experimental or unusual ideas." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'rudimentary' means involving or limited to basic principles." +
            "<br><br>" +
            "(D) 'amateur' means engaging or engaged in without payment; non-professional.",
        chinese_explanation: "(B) '前卫'一词意味着支持或引入实验性或不寻常的想法。" +
            "<br><br>" +
            "(A) '传统' 意味着基于或符合一般做法或信仰。" +
            "<br><br>" +
            "(C) '基本' 意味着涉及或限于基本原则。" +
            "<br><br>" +
            "(D) '业余' 意味着没有报酬的参与或参与；非专业的。"
    },
    {
        id: 7,
        question: "The students were reminded that using cell phones during exams was strictly __________, and anyone caught would face severe consequences.",
        chinese_question: "学生们被提醒在考试期间使用手机是严格 __________ 的，任何被抓到的人都会面临严重后果。",
        answers: [
            { option: "A", answer: "allowed", chinese_answer: "允许的", chinese_romanization: "yǔnxǔ de" },
            { option: "B", answer: "encouraged", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
            { option: "C", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "D", answer: "forbidden", chinese_answer: "禁止的", chinese_romanization: "jìnzhǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forbidden' means not allowed; banned." +
            "<br><br>" +
            "(A) 'allowed' means permitted." +
            "<br><br>" +
            "(B) 'encouraged' means given support, confidence, or hope." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory.",
        chinese_explanation: "(D) '禁止的' 意味着不允许的；被禁止的。" +
            "<br><br>" +
            "(A) '允许的' 意味着被允许的。" +
            "<br><br>" +
            "(B) '鼓励的' 意味着给予支持、信心或希望的。" +
            "<br><br>" +
            "(C) '可选的' 意味着可以选择但不是强制的。"
    },
    {
        id: 8,
        question: "The musician's __________ performance captivated the audience with its emotional depth.",
        chinese_question: "音乐家的 __________ 演奏以其情感深度吸引了观众。",
        answers: [
            { option: "A", answer: "melodious", chinese_answer: "悦耳的", chinese_romanization: "yuè'ěr de" },
            { option: "B", answer: "cacophonous", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "discordant", chinese_answer: "不和谐的", chinese_romanization: "bù héxié de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'melodious' means pleasant-sounding; musical." +
            "<br><br>" +
            "(B) 'cacophonous' means harsh-sounding; discordant." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'discordant' means disagreeing or incongruous; harsh and jarring.",
        chinese_explanation: "(A) '悦耳的' 意味着声音悦耳动听；音乐性。" +
            "<br><br>" +
            "(B) '刺耳的' 意味着声音刺耳难听；不和谐。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(D) '不和谐的' 意味着不一致或不协调；刺耳而不协调。"
    },
    {
        id: 9,
        question: "The speaker's __________ address moved the audience with its inspiring message of hope and resilience.",
        chinese_question: "演讲者的 __________ 演讲以其鼓舞人心的希望和韧性的信息感动了观众。",
        answers: [
            { option: "A", answer: "somber", chinese_answer: "沉重的", chinese_romanization: "chénzhòng de" },
            { option: "B", answer: "uplifting", chinese_answer: "振奋人心的", chinese_romanization: "zhènfèn rénxīn de" },
            { option: "C", answer: "dreary", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "D", answer: "melancholic", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'uplifting' means inspiring happiness, hope, or optimism." +
            "<br><br>" +
            "(A) 'somber' means dark, gloomy, or serious." +
            "<br><br>" +
            "(C) 'dreary' means dull, bleak, or depressing." +
            "<br><br>" +
            "(D) 'melancholic' means expressing sadness or depression; mournful.",
        chinese_explanation: "(B) '振奋人心的' 意味着激励幸福、希望或乐观。" +
            "<br><br>" +
            "(A) '沉重的' 意味着黑暗、阴郁或严肃。" +
            "<br><br>" +
            "(C) '乏味的' 意味着枯燥、阴郁或沮丧。" +
            "<br><br>" +
            "(D) '忧郁的' 意味着表达悲伤或沮丧；忧郁。"
    },
    {
        id: 10,
        question: "The journalist’s __________ reporting style brought the complex issue into clear focus for the readers.",
        chinese_question: "记者的 __________ 报道风格使复杂的问题清晰地展现在读者面前。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "B", answer: "convoluted", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "C", answer: "ambiguous", chinese_answer: "模棱两可", chinese_romanization: "móléng liǎngkě" },
            { option: "D", answer: "lucid", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lucid' means expressed clearly; easy to understand." +
            "<br><br>" +
            "(A) 'vague' means unclear or not precise." +
            "<br><br>" +
            "(B) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation.",
        chinese_explanation: "(D) '清晰'一词意味着表达清楚；易于理解。" +
            "<br><br>" +
            "(A) '模糊' 意味着不清楚或不精确。" +
            "<br><br>" +
            "(B) '复杂' 意味着极其复杂和难以理解。" +
            "<br><br>" +
            "(C) '模棱两可' 意味着可以有不止一种解释。"
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
