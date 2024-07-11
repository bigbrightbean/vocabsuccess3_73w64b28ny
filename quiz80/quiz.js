// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ presented his case to the court, seeking compensation for damages caused by the accident.",
        chinese_question: "__________ 向法庭陈述了他的案子，寻求事故造成的损害赔偿。",
        answers: [
            { option: "A", answer: "defendant", chinese_answer: "被告", chinese_romanization: "bèigào" },
            { option: "B", answer: "plaintiff", chinese_answer: "原告", chinese_romanization: "yuángào" },
            { option: "C", answer: "witness", chinese_answer: "证人", chinese_romanization: "zhèngrén" },
            { option: "D", answer: "juror", chinese_answer: "陪审员", chinese_romanization: "péishěnyuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plaintiff' means a person who brings a case against another in a court of law." +
            "<br><br>" +
            "(A) 'defendant' means an individual, company, or institution sued or accused in a court of law." +
            "<br><br>" +
            "(C) 'witness' means a person who sees an event, typically a crime or accident, take place." +
            "<br><br>" +
            "(D) 'juror' means a member of a jury.",
        chinese_explanation: "(B) '原告' 一词意味着在法庭上对他人提起诉讼的人。" +
            "<br><br>" +
            "(A) '被告' 意味着在法庭上被起诉或被指控的个人、公司或机构。" +
            "<br><br>" +
            "(C) '证人' 意味着目睹事件（通常是犯罪或事故）发生的人。" +
            "<br><br>" +
            "(D) '陪审员' 意味着陪审团的一员。"
    },
    {
        id: 2,
        question: "The __________ of the recording was so high that it captured even the subtlest of sounds.",
        chinese_question: "录音的__________如此之高，甚至捕捉到了最细微的声音。",
        answers: [
            { option: "A", answer: "distortion", chinese_answer: "失真", chinese_romanization: "shīzhēn" },
            { option: "B", answer: "inaccuracy", chinese_answer: "不准确", chinese_romanization: "bù zhǔnquè" },
            { option: "C", answer: "falsity", chinese_answer: "虚假", chinese_romanization: "xūjiǎ" },
            { option: "D", answer: "fidelity", chinese_answer: "逼真", chinese_romanization: "zhōngchéng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fidelity' refers to the degree of exactness with which something is copied or reproduced." +
            "<br><br>" +
            "(A) 'distortion' refers to the action of distorting or the state of being distorted." +
            "<br><br>" +
            "(B) 'inaccuracy' refers to the quality or state of being inaccurate." +
            "<br><br>" +
            "(C) 'falsity' refers to the quality of being false or untrue.",
        chinese_explanation: "(D) '逼真' 指的是某物被复制或再现的精确程度。" +
            "<br><br>" +
            "(A) '失真' 指的是扭曲的行为或状态。" +
            "<br><br>" +
            "(B) '不准确' 指的是不准确的质量或状态。" +
            "<br><br>" +
            "(C) '虚假' 指的是虚假或不真实的品质。"
    },
    {
        id: 3,
        question: "After the trial, the criminal was sentenced to ten years in the state __________.",
        chinese_question: "审判结束后，罪犯被判处在州 __________ 服刑十年。",
        answers: [
            { option: "A", answer: "school", chinese_answer: "学校", chinese_romanization: "xuéxiào" },
            { option: "B", answer: "hospital", chinese_answer: "医院", chinese_romanization: "yīyuàn" },
            { option: "C", answer: "penitentiary", chinese_answer: "监狱", chinese_romanization: "jiānyù" },
            { option: "D", answer: "university", chinese_answer: "大学", chinese_romanization: "dàxué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'penitentiary' means a prison for people convicted of serious crimes." +
            "<br><br>" +
            "(A) 'school' means an institution for educating children." +
            "<br><br>" +
            "(B) 'hospital' means an institution providing medical and surgical treatment and nursing care for sick or injured people." +
            "<br><br>" +
            "(D) 'university' means an institution of higher education and research, which awards academic degrees in various academic disciplines.",
        chinese_explanation: "(C) '监狱' 一词意味着关押被判有严重罪行的人的监狱。" +
            "<br><br>" +
            "(A) '学校' 意味着教育儿童的机构。" +
            "<br><br>" +
            "(B) '医院' 意味着提供医疗和外科治疗以及护理病人或受伤的人。" +
            "<br><br>" +
            "(D) '大学' 意味着高等教育和研究机构，授予各种学术学科的学位。"
    },
    {
        id: 4,
        question: "Her opinion carried the weight of __________ within the company.",
        chinese_question: "在公司内，她的意见具有 __________ 的分量。",
        answers: [
            { option: "A", answer: "authority", chinese_answer: "权威", chinese_romanization: "quánwēi" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'authority' metaphorically means the power or right to give orders, make decisions, and enforce obedience." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'defiance' means open resistance; bold disobedience." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(A) '权威' 比喻有权力或权利来发号施令、做决定和强制执行。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '反抗' 意味着公开的抵抗；大胆的不服从。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 5,
        question: "In the struggle for civil rights, she emerged as a key __________, often leading protests and advocating for change.",
        chinese_question: "在争取民权的斗争中，她成为了一个关键的 __________，经常领导抗议并倡导变革。",
        answers: [
            { option: "A", answer: "protagonist", chinese_answer: "主角", chinese_romanization: "zhǔjiǎo" },
            { option: "B", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuí zhě" },
            { option: "C", answer: "detractor", chinese_answer: "贬低者", chinese_romanization: "biǎndī zhě" },
            { option: "D", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'protagonist' metaphorically means a leading or principal figure in a movement or cause." +
            "<br><br>" +
            "(B) 'follower' means a person who supports and admires a particular person or set of ideas." +
            "<br><br>" +
            "(C) 'detractor' means a person who disparages someone or something." +
            "<br><br>" +
            "(D) 'adversary' means one's opponent in a contest, conflict, or dispute.",
        chinese_explanation: "(A) '主角' 比喻运动或事业中的主要人物。" +
            "<br><br>" +
            "(B) '追随者' 意味着支持和钦佩特定人或一套想法的人。" +
            "<br><br>" +
            "(C) '贬低者' 意味着贬低某人或某事的人。" +
            "<br><br>" +
            "(D) '对手' 意味着在比赛、冲突或争端中的对手。"
    },
    {
        id: 6,
        question: "His daily __________ of his goals and values helped him stay focused and motivated.",
        chinese_question: "他每天对目标和价值观的 __________ 帮助他保持专注和动力。",
        answers: [
            { option: "A", answer: "negation", chinese_answer: "否定", chinese_romanization: "fǒudìng" },
            { option: "B", answer: "affirmation", chinese_answer: "肯定", chinese_romanization: "kěndìng" },
            { option: "C", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'affirmation' means the action or process of affirming something or being affirmed." +
            "<br><br>" +
            "(A) 'negation' means the contradiction or denial of something." +
            "<br><br>" +
            "(C) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(D) 'refusal' means an act or instance of refusing.",
        chinese_explanation: "(B) '肯定' 一词意味着肯定某事的行为或过程。" +
            "<br><br>" +
            "(A) '否定' 意味着对某事的否定或否认。" +
            "<br><br>" +
            "(C) '否认' 意味着宣布某事不真实的行为。" +
            "<br><br>" +
            "(D) '拒绝' 意味着拒绝的行为或实例。"
    },
    {
        id: 7,
        question: "The scientist received a prestigious __________ for her groundbreaking research in renewable energy.",
        chinese_question: "这位科学家因其在可再生能源方面的开创性研究而获得了一个有声望的 __________。",
        answers: [
            { option: "A", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
            { option: "B", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "accolade", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "D", answer: "rebuke", chinese_answer: "斥责", chinese_romanization: "chìzé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accolade' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
            "<br><br>" +
            "(A) 'reprimand' means a formal expression of disapproval." +
            "<br><br>" +
            "(B) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(D) 'rebuke' means an expression of sharp disapproval or criticism.",
        chinese_explanation: "(C) '荣誉' 一词意味着授予特殊荣誉或承认功绩的奖励或特权。" +
            "<br><br>" +
            "(A) '训斥' 意味着正式表达不赞成。" +
            "<br><br>" +
            "(B) '批评' 意味着基于感知的错误或错误对某人或某事表达不赞成。" +
            "<br><br>" +
            "(D) '斥责' 意味着尖锐的谴责或批评。"
    },
    {
        id: 8,
        question: "The artist's use of __________ in his paintings allowed viewers to interpret the images in various ways, making each piece unique.",
        chinese_question: "艺术家在画作中使用 __________ 使观众能够以不同的方式解释图像，使每件作品都独一无二。",
        answers: [
            { option: "A", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" },
            { option: "B", answer: "detail", chinese_answer: "细节", chinese_romanization: "xìjié" },
            { option: "C", answer: "abstraction", chinese_answer: "抽象", chinese_romanization: "chōuxiàng" },
            { option: "D", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abstraction' means the quality of dealing with ideas rather than events." +
            "<br><br>" +
            "(A) 'realism' means the attitude or practice of accepting a situation as it is and being prepared to deal with it accordingly." +
            "<br><br>" +
            "(B) 'detail' means an individual feature, fact, or item." +
            "<br><br>" +
            "(D) 'precision' means the quality, condition, or fact of being exact and accurate.",
        chinese_explanation: "(C) '抽象' 一词意味着处理想法而非事件的品质。" +
            "<br><br>" +
            "(A) '现实主义' 意味着接受事物原貌并准备相应处理的态度或做法。" +
            "<br><br>" +
            "(B) '细节' 意味着一个单独的特征、事实或项目。" +
            "<br><br>" +
            "(D) '精确' 意味着准确和精确的质量、条件或事实。"
    },
    {
        id: 9,
        question: "The celebrity was surrounded by fans whose __________ made it difficult for her to move through the crowd.",
        chinese_question: "这位名人被粉丝们包围，他们的 __________ 使她难以在人群中移动。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "adulation", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adulation' means excessive admiration or praise." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'hostility' means hostile behavior; unfriendliness or opposition.",
        chinese_explanation: "(B) '奉承' 一词意味着过度的钦佩或赞美。" +
            "<br><br>" +
            "(A) '批评' 意味着基于感知到的错误或缺点对某人或某事的反对表达。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '敌意' 意味着敌对行为；不友好或反对。"
    },
    {
        id: 10,
        question: "The __________ delivered his lines with such passion and skill that the audience was completely captivated.",
        chinese_question: "这位 __________ 充满激情和技巧地朗诵他的台词，令观众完全入迷。",
        answers: [
            { option: "A", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "B", answer: "thespian", chinese_answer: "演员", chinese_romanization: "yǎnyuán" },
            { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "layperson", chinese_answer: "外行", chinese_romanization: "wàiháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'thespian' means relating to drama and the theater; an actor or actress." +
            "<br><br>" +
            "(A) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(C) 'novice' means a person new to and inexperienced in a job or situation." +
            "<br><br>" +
            "(D) 'layperson' means a nonordained member of a church; a person without professional or specialized knowledge in a particular subject.",
        chinese_explanation: "(B) '演员' 一词意味着与戏剧和剧院有关的；演员或女演员。" +
            "<br><br>" +
            "(A) '业余爱好者' 意味着从事追求的人，尤其是未付费的运动。" +
            "<br><br>" +
            "(C) '新手' 意味着在工作或情况中新来且没有经验的人。" +
            "<br><br>" +
            "(D) '外行' 意味着非教会任命的成员；在特定主题中没有专业或专业知识的人。"
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
