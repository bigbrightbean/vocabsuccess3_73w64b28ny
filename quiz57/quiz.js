// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The riddle posed a real __________, leaving everyone puzzled and unable to find a solution.",
        chinese_question: "这个谜语确实是个 __________，让大家感到困惑，无法找到解决办法。",
        answers: [
            { option: "A", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "B", answer: "conundrum", chinese_answer: "难题", chinese_romanization: "nántí" },
            { option: "C", answer: "answer", chinese_answer: "答案", chinese_romanization: "dá'àn" },
            { option: "D", answer: "explanation", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conundrum' means a confusing and difficult problem or question." +
            "<br><br>" +
            "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(C) 'answer' means a thing said, written, or done to deal with or as a reaction to a question, statement, or situation." +
            "<br><br>" +
            "(D) 'explanation' means a statement or account that makes something clear.",
        chinese_explanation: "(B) '难题' 一词意味着一个令人困惑和难以解决的问题或问题。" +
            "<br><br>" +
            "(A) '解决方案' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(C) '答案' 意味着为应对问题、声明或情况而说、写或做的事情。" +
            "<br><br>" +
            "(D) '解释' 意味着使某事清楚的陈述或说明。"
    },
    {
        id: 2,
        question: "The new company policy aims to prevent __________ in the workplace, such as unwanted advances and bullying, by establishing clear reporting procedures.",
        chinese_question: "新公司政策旨在通过建立明确的报告程序来防止工作场所的 __________，例如不受欢迎的追求和欺凌。",
        answers: [
            { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "harassment", chinese_answer: "骚扰", chinese_romanization: "sāorǎo" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'harassment' means aggressive pressure or intimidation." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(D) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.",
        chinese_explanation: "(B) '骚扰' 一词意味着施加压力或恐吓。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发出的音乐音符的组合，以产生悦耳的效果。" +
            "<br><br>" +
            "(C) '合作' 意味着为了同一个目标而共同努力的过程。" +
            "<br><br>" +
            "(D) '尊重' 意味着因某人的能力、品质或成就而产生的深深的钦佩。"
    },
    {
        id: 3,
        question: "Acts of kindness and compassion are what define our __________, making us different from other species.",
        chinese_question: "善良和同情的行为定义了我们的 __________，使我们与其他物种不同。",
        answers: [
            { option: "A", answer: "technology", chinese_answer: "技术", chinese_romanization: "jìshù" },
            { option: "B", answer: "humanity", chinese_answer: "人性", chinese_romanization: "rénxìng" },
            { option: "C", answer: "environment", chinese_answer: "环境", chinese_romanization: "huánjìng" },
            { option: "D", answer: "machinery", chinese_answer: "机械", chinese_romanization: "jīxiè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'humanity' means the quality of being humane; benevolence." +
            "<br><br>" +
            "(A) 'technology' means the application of scientific knowledge for practical purposes, especially in industry." +
            "<br><br>" +
            "(C) 'environment' means the surroundings or conditions in which a person, animal, or plant lives or operates." +
            "<br><br>" +
            "(D) 'machinery' means machines collectively.",
        chinese_explanation: "(B) '人性' 一词意味着仁慈的品质；慈善。" +
            "<br><br>" +
            "(A) '技术' 意味着科学知识在实际应用中的应用，特别是在工业中。" +
            "<br><br>" +
            "(C) '环境' 意味着人、动物或植物生活或操作的周围环境或条件。" +
            "<br><br>" +
            "(D) '机械' 意味着机器的总称。"
    },
    {
        id: 4,
        question: "Despite his cheerful __________, he had moments when he felt deeply melancholic.",
        chinese_question: "尽管他性格 __________，但他也有感到深深忧郁的时刻。",
        answers: [
            { option: "A", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidù" },
            { option: "B", answer: "disposition", chinese_answer: "性格", chinese_romanization: "xìnggé" },
            { option: "C", answer: "appearance", chinese_answer: "外表", chinese_romanization: "wàibiǎo" },
            { option: "D", answer: "habit", chinese_answer: "习惯", chinese_romanization: "xíguàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disposition' means a person's inherent qualities of mind and character." +
            "<br><br>" +
            "(A) 'attitude' means a settled way of thinking or feeling about something." +
            "<br><br>" +
            "(C) 'appearance' means the way that someone or something looks." +
            "<br><br>" +
            "(D) 'habit' means a regular tendency or practice, especially one that is hard to give up.",
        chinese_explanation: "(B) '性格' 一词意味着一个人固有的思维和性格品质。" +
            "<br><br>" +
            "(A) '态度' 意味着对某事物的固定看法或感受方式。" +
            "<br><br>" +
            "(C) '外表' 意味着某人或某物的外观。" +
            "<br><br>" +
            "(D) '习惯' 意味着一种难以放弃的常规倾向或习惯。"
    },
    {
        id: 5,
        question: "After the celebrity announced her new project, she was overwhelmed by a __________ of emails and messages from fans.",
        chinese_question: "这位名人宣布她的新项目后，被粉丝们的电子邮件和消息 __________ 。",
        answers: [
            { option: "A", answer: "trickle", chinese_answer: "细流", chinese_romanization: "xìliú" },
            { option: "B", answer: "drought", chinese_answer: "干旱", chinese_romanization: "gānhàn" },
            { option: "C", answer: "deluge", chinese_answer: "洪水般涌来", chinese_romanization: "hóngshuǐ bān yǒnglái" },
            { option: "D", answer: "sprinkle", chinese_answer: "少量", chinese_romanization: "shǎoliàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deluge' means a great quantity of something arriving at the same time." +
            "<br><br>" +
            "(A) 'trickle' means a small flow of liquid or a small number of things arriving slowly." +
            "<br><br>" +
            "(B) 'drought' means a prolonged period of abnormally low rainfall; a shortage." +
            "<br><br>" +
            "(D) 'sprinkle' means a small amount of something scattered or distributed.",
        chinese_explanation: "(C) '洪水般涌来' 一词意味着大量的某物同时到来。" +
            "<br><br>" +
            "(A) '细流' 意味着少量液体流动或少量事物慢慢到来。" +
            "<br><br>" +
            "(B) '干旱' 意味着长时间降雨异常少；短缺。" +
            "<br><br>" +
            "(D) '少量' 意味着少量的某物散布或分布。"
    },
    {
        id: 6,
        question: "The company's __________ of funds for the project was carefully monitored to ensure proper use.",
        chinese_question: "公司对项目资金的 __________ 被仔细监控，以确保正确使用。",
        answers: [
            { option: "A", answer: "collection", chinese_answer: "收集", chinese_romanization: "shōují" },
            { option: "B", answer: "disbursement", chinese_answer: "支付", chinese_romanization: "zhīfù" },
            { option: "C", answer: "saving", chinese_answer: "节省", chinese_romanization: "jiéshěng" },
            { option: "D", answer: "withholding", chinese_answer: "扣留", chinese_romanization: "kòuliú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disbursement' means the payment of money from a fund." +
            "<br><br>" +
            "(A) 'collection' means the action or process of collecting someone or something." +
            "<br><br>" +
            "(C) 'saving' means an economy of or reduction in money, time, or another resource." +
            "<br><br>" +
            "(D) 'withholding' means refuse to give (something that is due to or is desired by another).",
        chinese_explanation: "(B) '支付' 一词意味着从基金中支付钱。" +
            "<br><br>" +
            "(A) '收集' 意味着收集某人或某物的行为或过程。" +
            "<br><br>" +
            "(C) '节省' 意味着减少金钱、时间或其他资源的经济。" +
            "<br><br>" +
            "(D) '扣留' 意味着拒绝给予（应得或他人想要的东西）。"
    },
    {
        id: 7,
        question: "The __________ of his argument was lost on the audience, who preferred more direct and straightforward points.",
        chinese_question: "他的论点的 __________ 被观众忽视了，他们更喜欢更直接和直截了当的观点。",
        answers: [
            { option: "A", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "subtlety", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "obviousness", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'subtlety' figuratively means the use of clever and indirect methods to achieve something." +
            "<br><br>" +
            "(A) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(C) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(D) 'obviousness' means the quality of being easily perceived or understood; clear, self-evident.",
        chinese_explanation: "(B) '微妙' 在比喻意义上意味着使用巧妙和间接的方法来实现某事。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或做的质量或条件。" +
            "<br><br>" +
            "(C) '清晰' 意味着清晰的品质，特别是。" +
            "<br><br>" +
            "(D) '明显' 意味着容易被感知或理解的质量；清楚的，自明的。"
    },
    {
        id: 8,
        question: "There was a __________ of cheap goods at the market, making it difficult for any vendor to make a profit.",
        chinese_question: "市场上有 __________ 的廉价商品，使得任何摊主都难以获利。",
        answers: [
            { option: "A", answer: "shortage", chinese_answer: "短缺", chinese_romanization: "duǎnquē" },
            { option: "B", answer: "glut", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "C", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "D", answer: "lack", chinese_answer: "不足", chinese_romanization: "bùzú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glut' means an excessively abundant supply of something." +
            "<br><br>" +
            "(A) 'shortage' means a state or situation in which something needed cannot be obtained in sufficient amounts." +
            "<br><br>" +
            "(C) 'dearth' means a scarcity or lack of something." +
            "<br><br>" +
            "(D) 'lack' means the state of being without or not having enough of something.",
        chinese_explanation: "(B) '过剩' 一词意味着某物的供应过于丰富。" +
            "<br><br>" +
            "(A) '短缺' 意味着需要的东西无法获得足够数量的状态或情况。" +
            "<br><br>" +
            "(C) '缺乏' 意味着某物的稀缺或不足。" +
            "<br><br>" +
            "(D) '不足' 意味着缺乏或没有足够的某物的状态。"
    },
    {
        id: 9,
        question: "As a __________, he made numerous mistakes in his first public performance, stumbling over notes and forgetting lines.",
        chinese_question: "作为一名__________，他在首次公开演出中犯了很多错误，错过了音符，忘记了台词。",
        answers: [
            { option: "A", answer: "maestro", chinese_answer: "大师", chinese_romanization: "dàshī" },
            { option: "B", answer: "virtuoso", chinese_answer: "名家", chinese_romanization: "míngjiā" },
            { option: "C", answer: "ace", chinese_answer: "高手", chinese_romanization: "gāoshǒu" },
            { option: "D", answer: "tyro", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tyro' refers to a beginner or novice, especially in learning or mastering a new skill." +
            "<br><br>" +
            "(A) 'maestro' refers to a distinguished conductor or performer of classical music." +
            "<br><br>" +
            "(B) 'virtuoso' refers to a person highly skilled in music or another artistic pursuit." +
            "<br><br>" +
            "(C) 'ace' refers to a person who excels at a particular activity.",
        chinese_explanation: "(D) '新手' 指的是一位初学者或新手，尤其是在学习或掌握新技能方面。" +
            "<br><br>" +
            "(A) '大师' 指的是杰出的指挥家或古典音乐演奏家。" +
            "<br><br>" +
            "(B) '名家' 指的是在音乐或其他艺术追求方面非常熟练的人。" +
            "<br><br>" +
            "(C) '高手' 指的是在某一活动中表现出色的人。"
    },
    {
        id: 10,
        question: "Even a __________ of kindness can make a significant difference in someone's day, lifting their spirits and giving them hope.",
        chinese_question: "即使是一点点 __________ 的善意也能对某人的一天产生重大影响，提升他们的精神并给予他们希望。",
        answers: [
            { option: "A", answer: "mountain", chinese_answer: "山", chinese_romanization: "shān" },
            { option: "B", answer: "modicum", chinese_answer: "少量", chinese_romanization: "shǎoliàng" },
            { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "D", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'modicum' means a small quantity of a particular thing, especially something considered desirable or valuable." +
            "<br><br>" +
            "(A) 'mountain' means a large natural elevation of the earth's surface rising abruptly from the surrounding level." +
            "<br><br>" +
            "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
            "<br><br>" +
            "(D) 'wealth' means an abundance of valuable possessions or money.",
        chinese_explanation: "(B) '少量' 一词意味着某种特定事物的小数量，尤其是被认为有价值或有益的事物。" +
            "<br><br>" +
            "(A) '山' 意味着地球表面突然从周围水平升起的高大的自然高地。" +
            "<br><br>" +
            "(C) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" +
            "<br><br>" +
            "(D) '财富' 意味着大量的有价值的财产或金钱。"
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
