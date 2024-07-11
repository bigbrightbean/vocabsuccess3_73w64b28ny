// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new policy was considered __________, as it aligned with the long-standing traditions of the company.",
        chinese_question: "新政策被认为是 __________ 的，因为它符合公司的长期传统。",
        answers: [
            { option: "A", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "B", answer: "radical", chinese_answer: "激进", chinese_romanization: "jījìn" },
            { option: "C", answer: "unconventional", chinese_answer: "非传统", chinese_romanization: "fēi chuántǒng" },
            { option: "D", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(A) 'innovative' means introducing new ideas or methods." +
            "<br><br>" +
            "(B) 'radical' means relating to or affecting the fundamental nature of something." +
            "<br><br>" +
            "(C) 'unconventional' means not based on or conforming to what is generally done or believed.",
        chinese_explanation: "(D) '传统' 一词意味着基于或符合通常做的或相信的事情。" +
            "<br><br>" +
            "(A) '创新' 意味着引入新思想或方法。" +
            "<br><br>" +
            "(B) '激进' 意味着与某事物的基本性质有关或影响其基本性质。" +
            "<br><br>" +
            "(C) '非传统' 意味着不基于或不符合通常做的或相信的。"
    },
    {
        id: 2,
        question: "The dog was surprisingly __________, easily following commands and never showing aggression.",
        chinese_question: "这只狗出奇地 __________，轻松地听从指令，从不表现出攻击性。",
        answers: [
            { option: "A", answer: "aggressive", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "B", answer: "docile", chinese_answer: "温顺", chinese_romanization: "wēnshùn" },
            { option: "C", answer: "ferocious", chinese_answer: "凶猛", chinese_romanization: "xiōngměng" },
            { option: "D", answer: "wild", chinese_answer: "野生", chinese_romanization: "yěshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'docile' means ready to accept control or instruction; submissive." +
            "<br><br>" +
            "(A) 'aggressive' means ready or likely to attack." +
            "<br><br>" +
            "(C) 'ferocious' means savagely fierce." +
            "<br><br>" +
            "(D) 'wild' means living or growing in the natural environment.",
        chinese_explanation: "(B) '温顺' 一词意味着准备接受控制或指示；顺从的。" +
            "<br><br>" +
            "(A) '好斗' 意味着准备或可能攻击。" +
            "<br><br>" +
            "(C) '凶猛' 意味着野蛮的凶猛。" +
            "<br><br>" +
            "(D) '野生' 意味着在自然环境中生长或生长的。"
    },
    {
        id: 3,
        question: "The detective's __________ observation skills led to the capture of the elusive criminal.",
        chinese_question: "侦探 __________ 的观察力导致了难以捉摸的罪犯的捕获。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "B", answer: "sharp", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "C", answer: "oblivious", chinese_answer: "无视", chinese_romanization: "wúshì" },
            { option: "D", answer: "distracted", chinese_answer: "分心", chinese_romanization: "fēn xīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sharp' means having or showing a quick-witted intelligence." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought." +
            "<br><br>" +
            "(C) 'oblivious' means not aware of or not concerned about what is happening." +
            "<br><br>" +
            "(D) 'distracted' means unable to concentrate because one is preoccupied.",
        chinese_explanation: "(B) '敏锐' 意味着拥有或表现出迅速的智慧。" +
            "<br><br>" +
            "(A) '粗心' 意味着没有给予足够的注意或思考。" +
            "<br><br>" +
            "(C) '无视' 意味着没有意识到或不关心正在发生的事情。" +
            "<br><br>" +
            "(D) '分心' 意味着无法集中注意力，因为心事重重。"
    },
    {
        id: 4,
        question: "The intern’s __________ review of the documents missed several critical errors that needed correction.",
        chinese_question: "实习生对文件的 __________ 审查遗漏了几个需要纠正的重要错误。",
        answers: [
            { option: "A", answer: "cursory", chinese_answer: "粗略", chinese_romanization: "cūlüè" },
            { option: "B", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "C", answer: "meticulous", chinese_answer: "细致", chinese_romanization: "xìzhì" },
            { option: "D", answer: "detailed", chinese_answer: "详细", chinese_romanization: "xiángxì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cursory' means hasty and not detailed." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail." +
            "<br><br>" +
            "(D) 'detailed' means fully and thoroughly described.",
        chinese_explanation: "(A) '粗略'一词意味着匆忙且不详细。" +
            "<br><br>" +
            "(B) '彻底' 意味着对每个细节的完全关注。" +
            "<br><br>" +
            "(C) '细致' 意味着非常注重细节。" +
            "<br><br>" +
            "(D) '详细' 意味着完全且彻底描述。"
    },
    {
        id: 5,
        question: "The journalist’s __________ report shed light on the corruption within the government, sparking public outrage.",
        chinese_question: "记者的 __________ 报道揭示了政府内部的腐败，引发了公众的愤怒。",
        answers: [
            { option: "A", answer: "revealing", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "B", answer: "superficial", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "C", answer: "biased", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "dull", chinese_answer: "枯燥", chinese_romanization: "kūzào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'revealing' means making known something previously unknown." +
            "<br><br>" +
            "(B) 'superficial' means only on the surface; not deep." +
            "<br><br>" +
            "(C) 'biased' means unfairly prejudiced for or against something." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(A) '揭示'一词意味着揭示以前未知的东西。" +
            "<br><br>" +
            "(B) '表面' 意味着仅在表面上；不深入。" +
            "<br><br>" +
            "(C) '偏见' 意味着对某事物的不公平偏见。" +
            "<br><br>" +
            "(D) '枯燥' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 6,
        question: "The scientist's __________ explanation left the audience more confused than enlightened.",
        chinese_question: "这位科学家的 __________ 解释让观众更加困惑而不是受到启发。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚", chinese_romanization: "qīngchǔ" },
            { option: "B", answer: "straightforward", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "enigmatic", chinese_answer: "神秘", chinese_romanization: "shénmì" },
            { option: "D", answer: "simple", chinese_answer: "直接", chinese_romanization: "zhíjiē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'enigmatic' means difficult to interpret or understand; mysterious." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '神秘' 一词意味着难以解释或理解的；神秘的。" +
            "<br><br>" +
            "(A) '清楚' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(D) '直接' 意味着不复杂且易于完成或理解。"
    },
    {
        id: 7,
        question: "She has a __________ sense of smell and can detect even the faintest odors.",
        chinese_question: "她的嗅觉非常 __________，甚至能察觉到最微弱的气味。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "B", answer: "keen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "C", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "D", answer: "blunt", chinese_answer: "钝", chinese_romanization: "dùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'keen' means having or showing eagerness or enthusiasm, or highly developed and acute." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(D) 'blunt' means (of a knife, pencil, etc.) having a worn-down edge or point; not sharp.",
        chinese_explanation: "(B) '敏锐' 一词意味着表现出热情或兴趣，或高度发达和敏锐的。" +
            "<br><br>" +
            "(A) '迟钝' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '弱' 意味着缺乏执行体力劳动的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(D) '钝' 意味着（指刀、铅笔等）具有磨损的边缘或尖端；不锋利的。"
    },
    {
        id: 8,
        question: "His __________ remarks during the serious discussion were not well-received by his colleagues.",
        chinese_question: "在严肃的讨论中，他的 __________ 言论并未受到同事们的欢迎。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "C", answer: "facetious", chinese_answer: "滑稽", chinese_romanization: "huájī" },
            { option: "D", answer: "earnest", chinese_answer: "认真", chinese_romanization: "rènzhēn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'facetious' means treating serious issues with deliberately inappropriate humor; flippant." +
            "<br><br>" +
            "(A) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(B) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(D) 'earnest' means resulting from or showing sincere and intense conviction.",
        chinese_explanation: "(C) '滑稽' 一词意味着以故意不适当的幽默处理严肃问题；轻率的。" +
            "<br><br>" +
            "(A) '严肃' 意味着性格或态度庄重或深思熟虑的。" +
            "<br><br>" +
            "(B) '真诚' 意味着没有伪装或欺骗；源于真实感情的。" +
            "<br><br>" +
            "(D) '认真' 意味着由真诚和强烈信念产生或表现出的。"
    },
    {
        id: 9,
        question: "She was __________ about her personal life, preferring to keep details private.",
        chinese_question: "她对个人生活非常 __________，喜欢保持细节的私密。",
        answers: [
            { option: "A", answer: "open", chinese_answer: "开放", chinese_romanization: "kāifàng" },
            { option: "B", answer: "talkative", chinese_answer: "健谈", chinese_romanization: "jiàntán" },
            { option: "C", answer: "reticent", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" },
            { option: "D", answer: "outgoing", chinese_answer: "外向", chinese_romanization: "wàixiàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reticent' means not revealing one's thoughts or feelings readily." +
            "<br><br>" +
            "(A) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up." +
            "<br><br>" +
            "(B) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(D) 'outgoing' means friendly and socially confident.",
        chinese_explanation: "(C) '沉默寡言' 一词意味着不轻易透露自己的想法或感情。" +
            "<br><br>" +
            "(A) '开放' 意味着允许进入、通过或观看；不封闭或阻塞。" +
            "<br><br>" +
            "(B) '健谈' 意味着喜欢或倾向于谈话。" +
            "<br><br>" +
            "(D) '外向' 意味着友好和社交自信的。"
    },
    {
        id: 10,
        question: "The weather was __________, with constant rain and overcast skies making the day feel long and depressing.",
        chinese_question: "天气 __________，不断的雨和阴天让这一天感觉漫长而压抑。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
            { option: "B", answer: "sunny", chinese_answer: "阳光", chinese_romanization: "yángguāng" },
            { option: "C", answer: "dreary", chinese_answer: "沉闷", chinese_romanization: "chénmèn" },
            { option: "D", answer: "cheerful", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dreary' means dull, bleak, and lifeless; depressing." +
            "<br><br>" +
            "(A) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(B) 'sunny' means bright with sunlight." +
            "<br><br>" +
            "(D) 'cheerful' means noticeably happy and optimistic.",
        chinese_explanation: "(C) '沉闷' 一词意味着阴沉、荒凉和无生气；压抑的。" +
            "<br><br>" +
            "(A) '明亮' 意味着发出或反射大量的光；闪亮的。" +
            "<br><br>" +
            "(B) '阳光' 意味着阳光明媚。" +
            "<br><br>" +
            "(D) '快乐' 意味着明显的快乐和乐观。"
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
