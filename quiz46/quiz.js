// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ efforts in organizing the charity event were recognized with a special award for outstanding community service.",
        chinese_question: "她在组织慈善活动中的 __________ 努力获得了杰出社区服务特别奖的认可。",
        answers: [
            { option: "A", answer: "dishonorable", chinese_answer: "可耻", chinese_romanization: "kěchǐ" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "C", answer: "meritorious", chinese_answer: "值得称赞", chinese_romanization: "zhídé chēngzàn" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meritorious' means deserving reward or praise." +
            "<br><br>" +
            "(A) 'dishonorable' means bringing shame or disgrace." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '值得称赞' 一词意味着值得奖励或赞扬的。" +
            "<br><br>" +
            "(A) '可耻' 意味着带来耻辱或耻辱的。" +
            "<br><br>" +
            "(B) '微不足道' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '无关紧要' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 2,
        question: "The city is known for its __________ population, which includes people from many different cultural and ethnic backgrounds.",
        chinese_question: "这座城市以其 __________ 的人口而闻名，包括来自许多不同文化和种族背景的人。",
        answers: [
            { option: "A", answer: "homogeneous", chinese_answer: "同质", chinese_romanization: "tóngzhì" },
            { option: "B", answer: "uniform", chinese_answer: "统一", chinese_romanization: "tǒngyī" },
            { option: "C", answer: "heterogeneous", chinese_answer: "异质", chinese_romanization: "yìzhì" },
            { option: "D", answer: "similar", chinese_answer: "相似", chinese_romanization: "xiāngsì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'heterogeneous' means diverse in character or content." +
            "<br><br>" +
            "(A) 'homogeneous' means of the same kind; alike." +
            "<br><br>" +
            "(B) 'uniform' means not changing in form or character; remaining the same in all cases and at all times." +
            "<br><br>" +
            "(D) 'similar' means resembling without being identical.",
        chinese_explanation: "(C) '异质' 一词意味着在特征或内容上多样的。" +
            "<br><br>" +
            "(A) '同质' 意味着同类的；相似的。" +
            "<br><br>" +
            "(B) '统一' 意味着在形式或特征上不变的；在所有情况下和所有时间都保持相同。" +
            "<br><br>" +
            "(D) '相似' 意味着相似但不完全相同。"
    },
    {
        id: 3,
        question: "The team's __________ victory in the championship was celebrated with a grand parade and festivities throughout the city.",
        chinese_question: "球队在锦标赛上的 __________ 胜利通过盛大的游行和全城的庆祝活动来庆祝。",
        answers: [
            { option: "A", answer: "inglorious", chinese_answer: "耻辱", chinese_romanization: "chǐrǔ" },
            { option: "B", answer: "glorious", chinese_answer: "辉煌", chinese_romanization: "huīhuáng" },
            { option: "C", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "D", answer: "unimpressive", chinese_answer: "不令人印象深刻", chinese_romanization: "bù lìng rén yìnxiàng shēnkè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glorious' means having, worthy of, or bringing fame or admiration." +
            "<br><br>" +
            "(A) 'inglorious' means causing shame or a loss of honor." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'unimpressive' means evoking no admiration or respect; not striking.",
        chinese_explanation: "(B) '辉煌' 一词意味着有、值得或带来名誉或钦佩的。" +
            "<br><br>" +
            "(A) '耻辱' 意味着造成羞耻或失去荣誉的。" +
            "<br><br>" +
            "(C) '普通' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '不令人印象深刻' 意味着不引起钦佩或尊重的；不突出的。"
    },
    {
        id: 4,
        question: "His __________ speech confused the audience because it lacked a clear structure and logical flow.",
        chinese_question: "他 __________ 的演讲让观众感到困惑，因为缺乏明确的结构和逻辑流。",
        answers: [
            { option: "A", answer: "coherent", chinese_answer: "连贯", chinese_romanization: "liánguàn" },
            { option: "B", answer: "organized", chinese_answer: "有组织", chinese_romanization: "yǒu zǔzhī" },
            { option: "C", answer: "disjointed", chinese_answer: "支离破碎", chinese_romanization: "zhīlí pòsuì" },
            { option: "D", answer: "fluent", chinese_answer: "流利", chinese_romanization: "liúlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disjointed' means lacking a coherent sequence or connection." +
            "<br><br>" +
            "(A) 'coherent' means logically connected or consistent." +
            "<br><br>" +
            "(B) 'organized' means arranged in a systematic way, especially on a large scale." +
            "<br><br>" +
            "(D) 'fluent' means able to express oneself easily and articulately.",
        chinese_explanation: "(C) '支离破碎' 一词意味着缺乏连贯的顺序或连接。" +
            "<br><br>" +
            "(A) '连贯' 意味着逻辑上连接或一致的。" +
            "<br><br>" +
            "(B) '有组织' 意味着以系统的方式安排的，尤其是在大规模上。" +
            "<br><br>" +
            "(D) '流利' 意味着能够轻松和清晰地表达自己。"
    },
    {
        id: 5,
        question: "His __________ understanding of the complex issue led to ineffective solutions that didn't address the root problems.",
        chinese_question: "他对这个复杂问题的 __________ 了解导致了无效的解决方案，未能解决根本问题。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "B", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "C", answer: "deep", chinese_answer: "深刻", chinese_romanization: "shēnkè" },
            { option: "D", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'deep' means extending far down from the top or surface." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(D) 'comprehensive' means complete; including all or nearly all elements or aspects of something.",
        chinese_explanation: "(A) '表面的' 一词意味着存在或发生在表面上。" +
            "<br><br>" +
            "(C) '深刻' 意味着从顶部或表面向下延伸得很深。" +
            "<br><br>" +
            "(B) '彻底' 意味着在每个细节上都很完整的；不表面或部分的。" +
            "<br><br>" +
            "(D) '全面的' 意味着完整的；包括所有或几乎所有的元素或方面的。"
    },
    {
        id: 6,
        question: "The spokesperson was very __________, clearly expressing the company's position on the controversial issue.",
        chinese_question: "发言人非常 __________，清楚地表达了公司在这一有争议问题上的立场。",
        answers: [
            { option: "A", answer: "inarticulate", chinese_answer: "不善言辞", chinese_romanization: "bù shàn yán cí" },
            { option: "B", answer: "unclear", chinese_answer: "不清楚", chinese_romanization: "bù qīngchǔ" },
            { option: "C", answer: "articulate", chinese_answer: "口齿清晰", chinese_romanization: "kǒuchǐ qīngxī" },
            { option: "D", answer: "confusing", chinese_answer: "令人困惑", chinese_romanization: "lìng rén kùnhuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'articulate' means having or showing the ability to speak fluently and coherently." +
            "<br><br>" +
            "(A) 'inarticulate' means unable to speak distinctly or express oneself clearly." +
            "<br><br>" +
            "(B) 'unclear' means not easy to see, hear, or understand." +
            "<br><br>" +
            "(D) 'confusing' means bewildering or perplexing.",
        chinese_explanation: "(C) '口齿清晰' 一词意味着具有或表现出流利和连贯地说话的能力。" +
            "<br><br>" +
            "(A) '不善言辞' 意味着不能清楚地说话或表达自己。" +
            "<br><br>" +
            "(B) '不清楚' 意味着不容易看到、听到或理解。" +
            "<br><br>" +
            "(D) '令人困惑' 意味着令人困惑或迷惑。"
    },
    {
        id: 7,
        question: "The __________ design of the new building, with its clean lines and open spaces, was both elegant and functional.",
        chinese_question: "新建筑的 __________ 设计，具有简洁的线条和开阔的空间，既优雅又实用。",
        answers: [
            { option: "A", answer: "elaborate", chinese_answer: "精细", chinese_romanization: "jīngxì" },
            { option: "B", answer: "ornate", chinese_answer: "华丽", chinese_romanization: "huálì" },
            { option: "C", answer: "cluttered", chinese_answer: "杂乱", chinese_romanization: "záluàn" },
            { option: "D", answer: "minimalist", chinese_answer: "极简", chinese_romanization: "jí jiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'minimalist' means characterized by simplicity and lack of decoration." +
            "<br><br>" +
            "(A) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning." +
            "<br><br>" +
            "(B) 'ornate' means made in an intricate shape or decorated with complex patterns." +
            "<br><br>" +
            "(C) 'cluttered' means crowded; untidy; filled with too many things.",
        chinese_explanation: "(D) '极简' 一词意味着以简单和缺乏装饰为特征的。" +
            "<br><br>" +
            "(A) '精细' 意味着包含许多精心安排的部分或细节；设计和规划复杂的。" +
            "<br><br>" +
            "(B) '华丽' 意味着以复杂的形状制作或装饰有复杂图案的。" +
            "<br><br>" +
            "(C) '杂乱' 意味着拥挤的；不整洁的；充满了太多东西的。"
    },
    {
        id: 8,
        question: "His __________ work on the report was full of errors and lacked attention to detail, making it unusable.",
        chinese_question: "他对报告的 __________ 工作充满了错误，缺乏细节关注，使其无法使用。",
        answers: [
            { option: "A", answer: "meticulous", chinese_answer: "一丝不苟", chinese_romanization: "yīsībùgǒu" },
            { option: "B", answer: "precise", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "C", answer: "sloppy", chinese_answer: "马虎", chinese_romanization: "mǎhǔ" },
            { option: "D", answer: "careful", chinese_answer: "仔细", chinese_romanization: "zǐxì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(A) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(B) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(D) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious.",
        chinese_explanation: "(C) '马虎' 一词意味着粗心和不系统的；过于随意的。" +
            "<br><br>" +
            "(A) '一丝不苟' 意味着对细节表现出极大的关注；非常小心和精确。" +
            "<br><br>" +
            "(B) '精确' 意味着表达或细节的准确性和精确性。" +
            "<br><br>" +
            "(D) '仔细' 意味着确保避免潜在的危险、事故或伤害；谨慎。"
    },
    {
        id: 9,
        question: "The __________ weather made it perfect for a relaxing day at the beach with gentle breezes and warm sun.",
        chinese_question: "__________ 的天气非常适合在海滩上度过一个放松的日子，微风轻拂，阳光温暖。",
        answers: [
            { option: "A", answer: "frigid", chinese_answer: "寒冷", chinese_romanization: "hánlěng" },
            { option: "B", answer: "stormy", chinese_answer: "暴风雨", chinese_romanization: "bàofēngyǔ" },
            { option: "C", answer: "balmy", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "D", answer: "inclement", chinese_answer: "恶劣", chinese_romanization: "èliè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'balmy' means mild and pleasant." +
            "<br><br>" +
            "(A) 'frigid' means very cold in temperature." +
            "<br><br>" +
            "(B) 'stormy' means characterized by strong winds and usually rain, thunder, lightning, or snow." +
            "<br><br>" +
            "(D) 'inclement' means harsh or severe (usually weather).",
        chinese_explanation: "(C) '温和' 一词意味着温暖宜人。" +
            "<br><br>" +
            "(A) '寒冷' 意味着温度非常低。" +
            "<br><br>" +
            "(B) '暴风雨' 意味着伴有强风和通常是雨、雷、电或雪。" +
            "<br><br>" +
            "(D) '恶劣' 意味着恶劣或严酷的（通常指天气）。"
    },
    {
        id: 10,
        question: "Her __________ moods made it challenging for her friends to keep up with her ever-changing emotions.",
        chinese_question: "她 __________ 的情绪变化使得朋友们很难跟上她不断变化的情感。",
        answers: [
            { option: "A", answer: "mercurial", chinese_answer: "善变", chinese_romanization: "shànbiàn" },
            { option: "B", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "C", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mercurial' means subject to sudden or unpredictable changes of mood or mind." +
            "<br><br>" +
            "(C) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(A) '善变' 一词意味着情绪或思维突然或不可预测的变化。" +
            "<br><br>" +
            "(C) '稳定' 意味着不太可能改变或失败的；牢固确立的。" +
            "<br><br>" +
            "(B) '一致' 意味着以相同的方式随着时间的推移而行动或完成的，特别是为了公平或准确。" +
            "<br><br>" +
            "(D) '可预测' 意味着能够预测的。"
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
