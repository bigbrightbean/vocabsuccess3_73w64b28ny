// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The project’s __________ results exceeded everyone’s expectations and set a new standard for future work.",
        chinese_question: "项目的 __________ 结果超出了所有人的预期，并为未来的工作设定了新的标准。",
        answers: [
            { option: "A", answer: "exceptional", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "C", answer: "subpar", chinese_answer: "次等", chinese_romanization: "cìděng" },
            { option: "D", answer: "flawed", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exceptional' means unusually good." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality." +
            "<br><br>" +
            "(C) 'subpar' means below an average level." +
            "<br><br>" +
            "(D) 'flawed' means having imperfections.",
        chinese_explanation: "(A) '杰出'一词意味着异常好。" +
            "<br><br>" +
            "(B) '平庸' 意味着质量中等。" +
            "<br><br>" +
            "(C) '次等' 意味着低于平均水平。" +
            "<br><br>" +
            "(D) '有缺陷' 意味着有缺陷。"
    },
    {
        id: 2,
        question: "The company's financial situation was __________, with profits fluctuating wildly.",
        chinese_question: "公司的财务状况 __________，利润波动剧烈。",
        answers: [
            { option: "A", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "B", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'turbulent' metaphorically means marked by disorder or instability." +
            "<br><br>" +
            "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(A) '动荡的' 比喻以混乱或不稳定为特征的。" +
            "<br><br>" +
            "(B) '安全的' 意味着固定或系紧，不会倒塌、松动或丢失。" +
            "<br><br>" +
            "(C) '稳定的' 意味着牢固固定、支撑或平衡；不摇晃或移动的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着能够被预测的。"
    },
    {
        id: 3,
        question: "The mysteries of the universe remain __________, with many questions still unanswered.",
        chinese_question: "宇宙的奥秘仍然是 __________ 的，许多问题仍未得到解答。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "C", answer: "comprehensible", chinese_answer: "可理解", chinese_romanization: "kě lǐjiě" },
            { option: "D", answer: "unfathomable", chinese_answer: "深不可测", chinese_romanization: "shēn bù kě cè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unfathomable' means incapable of being fully explored or understood." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'comprehensible' means able to be understood; intelligible.",
        chinese_explanation: "(D) '深不可测' 意味着无法被完全探索或理解。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '明显' 意味着容易感知或理解；清楚、自明或显而易见的。" +
            "<br><br>" +
            "(C) '可理解' 意味着能够被理解的；明白的。"
    },
    {
        id: 4,
        question: "The bride looked __________ in her spotless white gown, ready for her perfect day.",
        chinese_question: "新娘穿着洁白无瑕的礼服，看起来 __________，准备迎接她完美的一天。",
        answers: [
            { option: "A", answer: "dirty", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
            { option: "B", answer: "immaculate", chinese_answer: "无瑕", chinese_romanization: "wúxiá" },
            { option: "C", answer: "stained", chinese_answer: "有污渍", chinese_romanization: "yǒu wūzì" },
            { option: "D", answer: "untidy", chinese_answer: "不整洁", chinese_romanization: "bù zhěngjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'immaculate' means perfectly clean, neat, or tidy." +
            "<br><br>" +
            "(A) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(C) 'stained' means marked or colored with something that is difficult to remove." +
            "<br><br>" +
            "(D) 'untidy' means not arranged neatly and in order.",
        chinese_explanation: "(B) '无瑕' 一词意味着完美地干净、整洁或整齐。" +
            "<br><br>" +
            "(A) '肮脏' 意味着覆盖或标有不洁物质。" +
            "<br><br>" +
            "(C) '有污渍' 意味着被难以去除的东西标记或染色的。" +
            "<br><br>" +
            "(D) '不整洁' 意味着没有整齐地排列和有序的。"
    },
    {
        id: 5,
        question: "The film was criticized for its __________ content, which many found inappropriate and offensive.",
        chinese_question: "这部电影因其 __________ 的内容而受到批评，很多人觉得不合适且令人反感。",
        answers: [
            { option: "A", answer: "restrained", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "B", answer: "licentious", chinese_answer: "放荡", chinese_romanization: "fàngdàng" },
            { option: "C", answer: "chaste", chinese_answer: "贞洁", chinese_romanization: "zhēnjié" },
            { option: "D", answer: "decent", chinese_answer: "体面", chinese_romanization: "tǐmiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'licentious' means promiscuous and unprincipled in sexual matters." +
            "<br><br>" +
            "(A) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(C) 'chaste' means abstaining from extramarital, or from all, sexual intercourse." +
            "<br><br>" +
            "(D) 'decent' means conforming with generally accepted standards of respectable or moral behavior.",
        chinese_explanation: "(B) '放荡' 一词意味着在性问题上放荡和无原则的。" +
            "<br><br>" +
            "(A) '克制' 意味着以保留或适度为特征的；不带情感或冷静的。" +
            "<br><br>" +
            "(C) '贞洁' 意味着戒除婚外或所有性行为的。" +
            "<br><br>" +
            "(D) '体面' 意味着符合普遍接受的尊重或道德行为标准的。"
    },
    {
        id: 6,
        question: "The __________ child refused to sit still during the lesson, constantly getting up from his seat and wandering around the classroom.",
        chinese_question: "这个 __________ 孩子拒绝在课堂上坐着不动，不断地从座位上站起来在教室里到处闲逛。",
        answers: [
            { option: "A", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "B", answer: "obedient", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "compliant", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "D", answer: "refractory", chinese_answer: "难以驾驭", chinese_romanization: "nán yǐ jiàyù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'refractory' means stubborn or unmanageable, especially with regard to discipline or control." +
            "<br><br>" +
            "(A) 'cooperative' means involving mutual assistance in working towards a common goal." +
            "<br><br>" +
            "(B) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(C) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree.",
        chinese_explanation: "(D) '难以驾驭' 一词意味着固执或难以控制，尤其是在纪律或控制方面。" +
            "<br><br>" +
            "(A) '合作' 意味着在朝着共同目标互相帮助的过程中。" +
            "<br><br>" +
            "(B) '服从' 意味着遵守或愿意遵守命令或请求；顺从他人的意志。" +
            "<br><br>" +
            "(C) '顺从' 意味着倾向于同意他人或服从规则，尤其是过度程度的。"
    },
    {
        id: 7,
        question: "She felt a deep __________ for the days of her childhood, when life was simpler and carefree.",
        chinese_question: "她对童年时光有一种深深的 __________，那时生活简单而无忧无虑。",
        answers: [
            { option: "A", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "B", answer: "yearning", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "C", answer: "contentment", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "D", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yearning' means a feeling of intense longing for something." +
            "<br><br>" +
            "(A) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
            "<br><br>" +
            "(C) 'contentment' means a state of happiness and satisfaction." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '渴望' 一词意味着对某事物的强烈渴望。" +
            "<br><br>" +
            "(A) '满足' 意味着实现一个人的愿望、期望或需求。" +
            "<br><br>" +
            "(C) '满意' 意味着幸福和满足的状态。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 8,
        question: "The water in the mountain stream was so __________ that you could see the pebbles on the bottom clearly.",
        chinese_question: "山间小溪的水非常 __________，你可以清楚地看到底部的鹅卵石。",
        answers: [
            { option: "A", answer: "murky", chinese_answer: "浑浊", chinese_romanization: "húnzhuó" },
            { option: "B", answer: "opaque", chinese_answer: "不透明", chinese_romanization: "bù tòumíng" },
            { option: "C", answer: "pellucid", chinese_answer: "清澈", chinese_romanization: "qīngchè" },
            { option: "D", answer: "cloudy", chinese_answer: "浑浊", chinese_romanization: "húnzhuó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pellucid' means translucently clear." +
            "<br><br>" +
            "(A) 'murky' means dark and gloomy, especially due to thick mist." +
            "<br><br>" +
            "(B) 'opaque' means not able to be seen through; not transparent." +
            "<br><br>" +
            "(D) 'cloudy' means (of a liquid) not transparent or clear.",
        chinese_explanation: "(C) '清澈' 一词意味着半透明的清澈。" +
            "<br><br>" +
            "(A) '浑浊' 意味着黑暗和阴沉的，特别是由于浓雾。" +
            "<br><br>" +
            "(B) '不透明' 意味着无法看到；不透明的。" +
            "<br><br>" +
            "(D) '浑浊' 意味着（指液体）不透明或清澈的。"
    },
    {
        id: 9,
        question: "His __________ view on world politics often prevented him from appreciating the larger, global context.",
        chinese_question: "他对世界政治的 __________ 观点经常使他无法欣赏更大的全球背景。",
        answers: [
            { option: "A", answer: "broad", chinese_answer: "广泛", chinese_romanization: "guǎngfàn" },
            { option: "B", answer: "universal", chinese_answer: "普遍", chinese_romanization: "pǔbiàn" },
            { option: "C", answer: "parochial", chinese_answer: "狭隘", chinese_romanization: "xiá'ài" },
            { option: "D", answer: "open-minded", chinese_answer: "思想开明", chinese_romanization: "sīxiǎng kāimíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'parochial' means having a limited or narrow outlook or scope." +
            "<br><br>" +
            "(A) 'broad' means having an ample distance from side to side; wide." +
            "<br><br>" +
            "(B) 'universal' means applicable to all cases." +
            "<br><br>" +
            "(D) 'open-minded' means willing to consider new ideas; unprejudiced.",
        chinese_explanation: "(C) '狭隘' 一词意味着视野或范围有限或狭窄的。" +
            "<br><br>" +
            "(A) '广泛' 意味着从一侧到另一侧有充足的距离；宽的。" +
            "<br><br>" +
            "(B) '普遍' 意味着适用于所有情况的。" +
            "<br><br>" +
            "(D) '思想开明' 意味着愿意考虑新想法；没有偏见的。"
    },
    {
        id: 10,
        question: "His __________ behavior towards the boss earned him the promotion, but lost him the respect of his colleagues.",
        chinese_question: "他对老板的 __________ 行为让他得到了晋升，但失去了同事们的尊重。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "B", answer: "sycophantic", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
            { option: "C", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "sincere", chinese_answer: "诚挚", chinese_romanization: "chéngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sycophantic' means behaving or done in an obsequious way to gain advantage." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '谄媚' 一词意味着以谄媚的方式行事或做事以获得优势。" +
            "<br><br>" +
            "(A) '尊重' 意味着感到或表现出敬意。" +
            "<br><br>" +
            "(C) '真诚' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(D) '诚挚' 意味着没有虚伪或欺骗的；源自真实感情的。"
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
