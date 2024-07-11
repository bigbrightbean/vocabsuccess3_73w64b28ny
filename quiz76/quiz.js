// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ in the plan became evident only after they had started implementing it, such as budget overestimations and unanticipated logistical challenges.",
        chinese_question: "只有在开始实施计划后，计划中的__________才显现出来，例如预算高估和意料之外的物流挑战。",
        answers: [
            { option: "A", answer: "strengths", chinese_answer: "优点", chinese_romanization: "yōudiǎn" },
            { option: "B", answer: "assets", chinese_answer: "资产", chinese_romanization: "zīchǎn" },
            { option: "C", answer: "flaws", chinese_answer: "缺陷", chinese_romanization: "quēxiàn" },
            { option: "D", answer: "benefits", chinese_answer: "利益", chinese_romanization: "lìyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flaws' means a mark, blemish, or other imperfection that mars a substance or object. Figuratively, it can mean a mistake or weakness in a plan, system, or design." + 
            "<br><br>" + 
            "(A) 'strengths' means the quality or state of being physically strong." + 
            "<br><br>" + 
            "(B) 'assets' means a useful or valuable thing, person, or quality." + 
            "<br><br>" + 
            "(D) 'benefits' means an advantage or profit gained from something.",
        chinese_explanation: "(C) '缺陷'一词意味着玷污物质或物体的标记、瑕疵或其他缺陷。比喻地，它可以表示计划、系统或设计中的错误或弱点。" + 
            "<br><br>" + 
            "(A) '优点' 意味着身体强壮的质量或状态。" + 
            "<br><br>" + 
            "(B) '资产' 意味着有用或有价值的东西、人物或品质。" + 
            "<br><br>" + 
            "(D) '利益' 意味着从某事中获得的优势或利润。"
    },
    {
        id: 2,
        question: "The novel explores the __________ of good and evil within a single character.",
        chinese_question: "这部小说探讨了一个角色内在的善与恶的 __________。",
        answers: [
            { option: "A", answer: "duality", chinese_answer: "双重性", chinese_romanization: "shuāngchóng xìng" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "D", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'duality' metaphorically means the presence of two contrasting aspects within one entity." + 
            "<br><br>" + 
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." + 
            "<br><br>" + 
            "(C) 'monotony' means lack of variety and interest; tedious repetition and routine." + 
            "<br><br>" + 
            "(D) 'simplicity' means the quality or condition of being easy to understand or do.",
        chinese_explanation: "(A) '双重性' 比喻在一个实体中存在两种对比的方面。" + 
            "<br><br>" + 
            "(B) '和谐' 意味着同时发声的音乐音符的组合，产生和弦和和弦进程，具有令人愉悦的效果。" + 
            "<br><br>" + 
            "(C) '单调' 意味着缺乏多样性和兴趣；乏味的重复和常规。" + 
            "<br><br>" + 
            "(D) '简单' 意味着容易理解或做的质量或状态。"
    },
    {
        id: 3,
        question: "Researchers found a strong __________ between smoking and lung cancer in their study.",
        chinese_question: "研究人员在他们的研究中发现了吸烟和肺癌之间的强烈 __________。",
        answers: [
            { option: "A", answer: "correlation", chinese_answer: "相关性", chinese_romanization: "xiāngguān xìng" },
            { option: "B", answer: "difference", chinese_answer: "差异", chinese_romanization: "chāyì" },
            { option: "C", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "D", answer: "distinction", chinese_answer: "区别", chinese_romanization: "qūbié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'correlation' means a mutual relationship or connection between two or more things." +
            "<br><br>" +
            "(B) 'difference' means a point or way in which people or things are not the same." +
            "<br><br>" +
            "(C) 'disagreement' means lack of consensus or approval." +
            "<br><br>" +
            "(D) 'distinction' means a difference or contrast between similar things or people.",
        chinese_explanation: "(A) '相关性' 一词意味着两件或多件事物之间的相互关系或联系。" +
            "<br><br>" +
            "(B) '差异' 意味着人或事物之间不同的地方或方式。" +
            "<br><br>" +
            "(C) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(D) '区别' 意味着相似事物或人之间的差异或对比。"
    },
    {
        id: 4,
        question: "Using the phrase 'passed away' instead of 'died' is a common __________ to soften the impact of the news.",
        chinese_question: "使用 '去世' 这个词而不是 '死亡' 是一种常见的 __________，以减轻新闻的冲击。",
        answers: [
            { option: "A", answer: "directness", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "B", answer: "euphemism", chinese_answer: "委婉语", chinese_romanization: "wěiwǎn yǔ" },
            { option: "C", answer: "bluntness", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "D", answer: "straightforwardness", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'euphemism' means a mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing." +
            "<br><br>" +
            "(A) 'directness' means the quality of being straightforward and honest." +
            "<br><br>" +
            "(C) 'bluntness' means the quality of being uncompromisingly forthright." +
            "<br><br>" +
            "(D) 'straightforwardness' means the quality of being easy to understand or honest.",
        chinese_explanation: "(B) '委婉语' 一词意味着用温和或间接的词语或表达替代被认为太过严厉或直接的词语或表达，当提到不愉快或尴尬的事情时。" +
            "<br><br>" +
            "(A) '直接' 意味着直率和诚实的品质。" +
            "<br><br>" +
            "(C) '直率' 意味着毫不妥协的坦率品质。" +
            "<br><br>" +
            "(D) '坦率' 意味着容易理解或诚实的品质。"
    },
    {
        id: 5,
        question: "In __________, she realized that quitting her job without another offer was a risky move.",
        chinese_question: "在 __________ 中，她意识到在没有其他工作的情况下辞职是一个冒险的举动。",
        answers: [
            { option: "A", answer: "anticipation", chinese_answer: "预期", chinese_romanization: "yùqī" },
            { option: "B", answer: "retrospect", chinese_answer: "回顾", chinese_romanization: "huígù" },
            { option: "C", answer: "foresight", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" },
            { option: "D", answer: "projection", chinese_answer: "预测", chinese_romanization: "yùcè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retrospect' means a survey or review of a past course of events or period of time." +
            "<br><br>" +
            "(A) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(C) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future." +
            "<br><br>" +
            "(D) 'projection' means an estimate or forecast of a future situation based on a study of present trends.",
        chinese_explanation: "(B) '回顾' 一词意味着对过去事件或时期的回顾或审查。" +
            "<br><br>" +
            "(A) '预期' 意味着预期某事的行为；期望或预测。" +
            "<br><br>" +
            "(C) '远见' 意味着预测或预测未来将发生什么或需要什么的能力。" +
            "<br><br>" +
            "(D) '预测' 意味着基于对当前趋势的研究对未来情况的估计或预测。"
    },
    {
        id: 6,
        question: "The two companies formed a strategic __________ to collaborate on new technology and expand their market reach.",
        chinese_question: "两家公司形成了战略 __________，合作开发新技术并扩大市场覆盖范围。",
        answers: [
            { option: "A", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "competition", chinese_answer: "竞赛", chinese_romanization: "jìngsài" },
            { option: "C", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations." +
            "<br><br>" +
            "(A) 'rivalry' means competition for the same objective or for superiority in the same field." +
            "<br><br>" +
            "(B) 'competition' means the activity or condition of striving to gain or win something by defeating or establishing superiority over others." +
            "<br><br>" +
            "(D) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(C) '联盟' 一词意味着为了共同利益而形成的联合或协会，尤其是在国家或组织之间。" +
            "<br><br>" +
            "(A) '竞争' 意味着争取同一目标或在同一领域争夺优越性的竞争。" +
            "<br><br>" +
            "(B) '竞赛' 意味着通过击败或确立优越地位来争取或赢得某物的活动或状态。" +
            "<br><br>" +
            "(D) '冲突' 意味着严重的分歧或争论，通常是长期的。"
    },
    {
        id: 7,
        question: "The hero's journey is a common __________ in literature, representing the protagonist's adventure and personal growth.",
        chinese_question: "英雄的旅程是文学中常见的 __________，代表着主人公的冒险和个人成长。",
        answers: [
            { option: "A", answer: "stereotype", chinese_answer: "刻板印象", chinese_romanization: "kèbǎn yìnxiàng" },
            { option: "B", answer: "archetype", chinese_answer: "原型", chinese_romanization: "yuánxíng" },
            { option: "C", answer: "exception", chinese_answer: "例外", chinese_romanization: "lìwài" },
            { option: "D", answer: "variation", chinese_answer: "变体", chinese_romanization: "biàntǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'archetype' means a very typical example of a certain person or thing." +
            "<br><br>" +
            "(A) 'stereotype' means a widely held but fixed and oversimplified image or idea of a particular type of person or thing." +
            "<br><br>" +
            "(C) 'exception' means a person or thing that is excluded from a general statement or does not follow a rule." +
            "<br><br>" +
            "(D) 'variation' means a change or difference in condition, amount, or level, typically with certain limits.",
        chinese_explanation: "(B) '原型' 一词意味着某类人的非常典型的例子。" +
            "<br><br>" +
            "(A) '刻板印象' 意味着对某类人的广泛持有但固定和过于简单化的形象或观念。" +
            "<br><br>" +
            "(C) '例外' 意味着从一般陈述中排除的或不遵循规则的人或事物。" +
            "<br><br>" +
            "(D) '变体' 意味着在某些限制范围内的条件、数量或水平的变化或差异。"
    },
    {
        id: 8,
        question: "His __________ was evident in the way he turned up his nose at anyone who didn't share his refined tastes.",
        chinese_question: "他对任何不分享他精致品味的人都嗤之以鼻，他的 __________ 显而易见。",
        answers: [
            { option: "A", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "B", answer: "kindness", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "C", answer: "snobbery", chinese_answer: "势利", chinese_romanization: "shìlì" },
            { option: "D", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'snobbery' means the character or quality of being a snob; arrogance or pretentiousness." +
            "<br><br>" +
            "(A) 'humility' means a modest or low view of one's own importance; humbleness." +
            "<br><br>" +
            "(B) 'kindness' means the quality of being friendly, generous, and considerate." +
            "<br><br>" +
            "(D) 'generosity' means the quality of being kind and generous.",
        chinese_explanation: "(C) '势利' 一词意味着成为势利小人的性格或品质；傲慢或自命不凡。" +
            "<br><br>" +
            "(A) '谦逊' 意味着对自己重要性的谦逊或低看；谦卑。" +
            "<br><br>" +
            "(B) '善良' 意味着友好、慷慨和体贴的品质。" +
            "<br><br>" +
            "(D) '慷慨' 意味着善良和慷慨的品质。"
    },
    {
        id: 9,
        question: "Her writing career had a spectacular __________ with her first novel becoming a bestseller.",
        chinese_question: "她的写作生涯以她的第一本小说成为畅销书而精彩地 __________。",
        answers: [
            { option: "A", answer: "debut", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" },
            { option: "C", answer: "hiatus", chinese_answer: "间歇", chinese_romanization: "jiànxiē" },
            { option: "D", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'debut' metaphorically means the beginning or first attempt at something." +
            "<br><br>" +
            "(B) 'conclusion' means the end or finish of an event, process, or text." +
            "<br><br>" +
            "(C) 'hiatus' means a pause or gap in a sequence, series, or process." +
            "<br><br>" +
            "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
        chinese_explanation: "(A) '开始' 比喻某事的开始或首次尝试。" +
            "<br><br>" +
            "(B) '结论' 意味着事件、过程或文本的结束或完成。" +
            "<br><br>" +
            "(C) '间歇' 意味着序列、系列或过程中的暂停或间隙。" +
            "<br><br>" +
            "(D) '下降' 意味着力量、数量、质量或价值的逐渐和持续损失。"
    },
    {
        id: 10,
        question: "There was a __________ between the two departments over budget allocations, leading to heated discussions and delays in project approvals.",
        chinese_question: "两个部门之间在预算分配上存在 __________，导致了激烈的讨论和项目审批的延误。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(A) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出的音符的结合，产生令人愉悦的效果。" +
            "<br><br>" +
            "(C) '合作' 意味着为同一目标共同努力的过程。" +
            "<br><br>" +
            "(D) '一致' 意味着意见或感情上的和谐或一致。"
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
