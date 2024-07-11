// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
          question: "The speaker's __________ presentation, which was both informative and entertaining, held the audience's attention throughout the entire event.",
        chinese_question: "演讲者的 __________ 演讲，既有信息量又有趣味性，吸引了观众的注意力贯穿整个活动。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "B", answer: "tedious", chinese_answer: "乏味", chinese_romanization: "fáwèi" },
            { option: "C", answer: "engaging", chinese_answer: "引人入胜", chinese_romanization: "yǐnrénrùshèng" },
            { option: "D", answer: "lackluster", chinese_answer: "无光泽", chinese_romanization: "wú guāngzé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious." +
            "<br><br>" +
            "(B) 'tedious' means too long, slow, or dull." +
            "<br><br>" +
            "(D) 'lackluster' means lacking in vitality, force, or conviction.",
        chinese_explanation: "(C) '引人入胜'一词意味着迷人和有吸引力。" +
            "<br><br>" +
            "(A) '单调' 意味着枯燥乏味，重复。" +
            "<br><br>" +
            "(B) '乏味' 意味着太长、太慢或乏味。" +
            "<br><br>" +
            "(D) '无光泽' 意味着缺乏活力、力量或信念。"
    },
    {
        id: 2,
        question: "The employee remained __________ during the meeting, not voicing any opinions or concerns.",
        chinese_question: "员工在会议期间保持 __________，没有表达任何意见或担忧。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "C", answer: "dominant", chinese_answer: "主导", chinese_romanization: "zhǔdǎo" },
            { option: "D", answer: "vocal", chinese_answer: "直言不讳", chinese_romanization: "zhí yán bù huì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'passive' means accepting or allowing what happens without active response." +
            "<br><br>" +
            "(A) 'assertive' means having a confident and forceful personality." +
            "<br><br>" +
            "(C) 'dominant' means most important, powerful, or influential." +
            "<br><br>" +
            "(D) 'vocal' means expressing opinions or feelings freely.",
        chinese_explanation: "(B) '被动' 一词意味着接受或允许发生的事情而没有积极回应。" +
            "<br><br>" +
            "(A) '自信' 意味着有自信和果断的性格。" +
            "<br><br>" +
            "(C) '主导' 意味着最重要、最有力量或最有影响力的。" +
            "<br><br>" +
            "(D) '直言不讳' 意味着自由地表达意见或感受。"
    },
    {
        id: 3,
        question: "She was known for her __________ attention to detail, which made her an excellent editor.",
        chinese_question: "她以对细节的 __________ 注意而闻名，这使她成为一名出色的编辑。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "sloppy", chinese_answer: "马虎", chinese_romanization: "mǎhǔ" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟", chinese_romanization: "yīsī bùgǒu" },
            { option: "D", answer: "haphazard", chinese_answer: "随意", chinese_romanization: "suíyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(C) '一丝不苟' 一词意味着表现出对细节的极大关注；非常仔细和精确的。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '马虎' 意味着粗心和不系统的；过于随意的。" +
            "<br><br>" +
            "(D) '随意' 意味着缺乏任何明显的组织原则的。"
    },
    {
        id: 4,
        question: "The __________ storm wreaked havoc on the coastal town, causing widespread damage and power outages.",
        chinese_question: "__________ 的风暴给沿海城镇带来了巨大破坏，导致大面积损毁和停电。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "C", answer: "tumultuous", chinese_answer: "喧嚣", chinese_romanization: "xuānxiāo" },
            { option: "D", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tumultuous' means making a loud, confused noise; uproarious." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(D) 'serene' means calm, peaceful, and untroubled.",
        chinese_explanation: "(C) '喧嚣' 一词意味着发出响亮、混乱的声音；喧闹的。" +
            "<br><br>" +
            "(A) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(B) '和平' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(D) '宁静' 意味着平静、和平和安宁的。"
    },
    {
        id: 5,
        question: "He had a __________ reaction to the news, feeling an intense surge of emotion that he couldn't explain.",
        chinese_question: "他对这个消息有一种 __________ 的反应，感受到一种无法解释的强烈情感。",
        answers: [
            { option: "A", answer: "visceral", chinese_answer: "本能", chinese_romanization: "běnnéng" },
            { option: "B", answer: "calculated", chinese_answer: "经过计算", chinese_romanization: "jīngguò jìsuàn" },
            { option: "C", answer: "logical", chinese_answer: "合乎逻辑", chinese_romanization: "héhū luóji" },
            { option: "D", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'visceral' means relating to deep inward feelings rather than to the intellect." +
            "<br><br>" +
            "(C) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(B) 'calculated' means (of an action) done with full awareness of the likely consequences." +
            "<br><br>" +
            "(D) 'rational' means based on or in accordance with reason or logic.",
        chinese_explanation: "(A) '本能' 一词意味着与内心深处的感觉而不是智力有关的。" +
            "<br><br>" +
            "(C) '合乎逻辑' 意味着符合逻辑或正式论证的规则。" +
            "<br><br>" +
            "(B) '经过计算' 意味着（行为）在完全意识到可能的后果的情况下完成的。" +
            "<br><br>" +
            "(D) '理性的' 意味着基于或符合理由或逻辑的。"
    },
    {
        id: 6,
        question: "Her __________ taste in art was evident from her collection of rare and exquisite paintings from around the world.",
        chinese_question: "她对艺术的 __________ 品味从她收藏的世界各地稀有而精致的画作中显而易见。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "unsophisticated", chinese_answer: "不复杂", chinese_romanization: "bù fùzá" },
            { option: "C", answer: "sophisticated", chinese_answer: "老练", chinese_romanization: "lǎoliàn" },
            { option: "D", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'unsophisticated' means lacking refined worldly knowledge or tastes." +
            "<br><br>" +
            "(D) 'naive' means (of a person or action) showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(C) '老练' 一词意味着具有、展示或源自大量的世俗经验和对时尚和文化的知识。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或完成；没有困难的。" +
            "<br><br>" +
            "(B) '不复杂' 意味着缺乏精致的世俗知识或品味的。" +
            "<br><br>" +
            "(D) '天真' 意味着（指人或行为）表现出缺乏经验、智慧或判断力的。"
    },
    {
        id: 7,
        question: "The office became __________ when the new project was announced, with everyone scrambling to meet the sudden deadlines.",
        chinese_question: "新项目宣布后，办公室变得 __________，每个人都在忙着赶突然的截止日期。",
        answers: [
            { option: "A", answer: "orderly", chinese_answer: "有序", chinese_romanization: "yǒuxù" },
            { option: "B", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "organized", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
            { option: "D", answer: "systematic", chinese_answer: "系统", chinese_romanization: "xìtǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(A) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(C) 'organized' means arranged or structured in a systematic way." +
            "<br><br>" +
            "(D) 'systematic' means done or acting according to a fixed plan or system; methodical.",
        chinese_explanation: "(B) '混乱' 一词意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(A) '有序' 意味着整齐和有条理地安排的。" +
            "<br><br>" +
            "(C) '组织' 意味着以系统的方式安排或结构化的。" +
            "<br><br>" +
            "(D) '系统' 意味着根据固定计划或系统进行的；有条理的。"
    },
    {
        id: 8,
        question: "The politician’s __________ speeches often drowned out his opponents' arguments, making it hard for them to be heard.",
        chinese_question: "那位政客的 __________ 演讲经常淹没对手的论点，使他们很难被听到。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "vociferous", chinese_answer: "喧嚣", chinese_romanization: "xuānxiāo" },
            { option: "D", answer: "subdued", chinese_answer: "克制", chinese_romanization: "kèzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vociferous' means vehement or clamorous." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(C) '喧嚣' 一词意味着激烈或喧闹的。" +
            "<br><br>" +
            "(A) '安静' 意味着几乎没有声音。" +
            "<br><br>" +
            "(B) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(D) '克制' 意味着安静而相当深思或抑郁的。"
        },
        {
        id: 9,
        question: "At noon, the sun reached its __________ point, casting the shortest shadows of the day.",
        chinese_question: "中午时，太阳到达了 __________ 点，投下了全天最短的影子。",
        answers: [
            { option: "A", answer: "lowest", chinese_answer: "最低", chinese_romanization: "zuìdī" },
            { option: "B", answer: "zenithal", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
            { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "D", answer: "base", chinese_answer: "基础", chinese_romanization: "jīchǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zenithal' means relating to or located at the zenith, the highest point in the sky reached by the sun." +
            "<br><br>" +
            "(A) 'lowest' means situated, placed, or occurring not far above the ground, or below the normal level." +
            "<br><br>" +
            "(C) 'average' means the result obtained by adding several quantities together and then dividing this total by the number of quantities." +
            "<br><br>" +
            "(D) 'base' means the lowest part or edge of something, especially the part on which it rests or is supported.",
        chinese_explanation: "(B) '顶点' 一词意味着与或位于天顶，即太阳在天空中达到的最高点有关。" +
            "<br><br>" +
            "(A) '最低' 意味着位于、放置或发生在不高于地面或低于正常水平。" +
            "<br><br>" +
            "(C) '平均' 意味着通过将几个数量加在一起然后将此总数除以数量来获得的结果。" +
            "<br><br>" +
            "(D) '基础' 意味着某物的最低部分或边缘，特别是它所支撑或支持的部分。"
    },
    {
        id: 10,
        question: "As a __________ person, she loved attending parties and socializing with large groups of people.",
        chinese_question: "作为一个 __________ 的人，她喜欢参加聚会并与一大群人交往。",
        answers: [
            { option: "A", answer: "introverted", chinese_answer: "内向", chinese_romanization: "nèixiàng" },
            { option: "B", answer: "reserved", chinese_answer: "矜持", chinese_romanization: "jīnchí" },
            { option: "C", answer: "gregarious", chinese_answer: "合群", chinese_romanization: "héqún" },
            { option: "D", answer: "shy", chinese_answer: "害羞", chinese_romanization: "hàixiū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gregarious' means fond of company; sociable." +
            "<br><br>" +
            "(A) 'introverted' means shy, reticent, and typically self-centered." +
            "<br><br>" +
            "(B) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people.",
        chinese_explanation: "(C) '合群' 一词意味着喜欢与人相处；社交的。" +
            "<br><br>" +
            "(A) '内向' 意味着害羞、沉默寡言，通常以自我为中心。" +
            "<br><br>" +
            "(B) '矜持' 意味着慢于表露情感或意见。" +
            "<br><br>" +
            "(D) '害羞' 意味着在与他人相处时表现出矜持或紧张。"
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
