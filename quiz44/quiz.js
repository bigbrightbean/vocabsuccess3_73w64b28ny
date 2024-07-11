// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist's __________ research, which introduced innovative techniques and methodologies, provided new insights into the field of genetics.",
        chinese_question: "科学家 __________ 的研究，引入了创新的技术和方法，为遗传学领域提供了新的见解。",
        answers: [
            { option: "A", answer: "groundbreaking", chinese_answer: "开创性", chinese_romanization: "kāichuàngxìng" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "C", answer: "redundant", chinese_answer: "多余", chinese_romanization: "duōyú" },
            { option: "D", answer: "superficial", chinese_answer: "表面", chinese_romanization: "biǎomiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'groundbreaking' means introducing new ideas or methods." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'redundant' means no longer needed or useful; superfluous." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(A) '开创性'一词意味着引入新想法或方法。" +
            "<br><br>" +
            "(B) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(C) '多余' 意味着不再需要或无用；过多。" +
            "<br><br>" +
            "(D) '表面' 意味着存在或发生在表面上。"
    },
    {
        id: 2,
        question: "The athlete's __________ training regimen, which included a mix of strength and endurance exercises, ensured peak performance during competitions.",
        chinese_question: "这位运动员的 __________ 训练方案，包括力量和耐力练习，确保了比赛期间的最佳表现。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "B", answer: "rigorous", chinese_answer: "严格", chinese_romanization: "yángé" },
            { option: "C", answer: "lenient", chinese_answer: "宽松", chinese_romanization: "kuānsōng" },
            { option: "D", answer: "haphazard", chinese_answer: "杂乱", chinese_romanization: "záluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rigorous' means extremely thorough and careful." +
            "<br><br>" +
            "(A) 'sporadic' means occurring at irregular intervals or only in a few places." +
            "<br><br>" +
            "(C) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(B) '严格'一词意味着非常彻底和小心。" +
            "<br><br>" +
            "(A) '零星' 意味着不定期或仅在少数地方发生。" +
            "<br><br>" +
            "(C) '宽松' 意味着比预期更仁慈或宽容。" +
            "<br><br>" +
            "(D) '杂乱' 意味着缺乏明显的组织原则。"
    },
    {
        id: 3,
        question: "The chef's __________ cuisine combined traditional flavors with innovative cooking techniques, resulting in dishes that delighted both the palate and the eye.",
        chinese_question: "厨师的 __________ 美食将传统口味与创新烹饪技术相结合，使菜肴既能满足味蕾又赏心悦目。",
        answers: [
            { option: "A", answer: "fusion", chinese_answer: "融合的", chinese_romanization: "róng hé de" },
            { option: "B", answer: "orthodox", chinese_answer: "正统的", chinese_romanization: "zhèngtǒng de" },
            { option: "C", answer: "derivative", chinese_answer: "模仿的", chinese_romanization: "mófǎng de" },
            { option: "D", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fusion' means the blending or combination of different culinary traditions or styles." +
            "<br><br>" +
            "(B) 'orthodox' means conforming to what is generally or traditionally accepted as right or true; established and approved." +
            "<br><br>" +
            "(C) 'derivative' means imitative of the work of another person, and usually disapproved of for that reason." +
            "<br><br>" +
            "(D) 'conventional' means based on or in accordance with what is generally done or believed; traditional.",
        chinese_explanation: "(A) '融合的' 意味着不同烹饪传统或风格的混合或结合。" +
            "<br><br>" +
            "(B) '正统的' 意味着符合通常或传统上被接受为正确或真实的；已被认可的。" +
            "<br><br>" +
            "(C) '模仿的' 意味着模仿他人的作品，通常因此而不受欢迎。" +
            "<br><br>" +
            "(D) '传统的' 意味着基于或符合通常做法或信仰；传统的。"
    },
    {
        id: 4,
        question: "The astronomer's __________ discovery of a new celestial phenomenon sparked excitement and curiosity among scientists worldwide.",
        chinese_question: "天文学家对新的天文现象的 __________ 发现在全球科学家中引发了兴奋和好奇。",
        answers: [
            { option: "A", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "groundbreaking", chinese_answer: "突破性的", chinese_romanization: "tūpòxìng de" },
            { option: "C", answer: "banal", chinese_answer: "陈腐的", chinese_romanization: "chénfǔ de" },
            { option: "D", answer: "enigmatic", chinese_answer: "神秘的", chinese_romanization: "shénmì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'groundbreaking' means innovative; pioneering; revolutionary." +
            "<br><br>" +
            "(A) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(C) 'banal' means lacking in originality; boring." +
            "<br><br>" +
            "(D) 'enigmatic' means mysterious; difficult to understand.",
        chinese_explanation: "(B) '突破性的' 意味着创新的；开创性的；革命性的。" +
            "<br><br>" +
            "(A) '平凡的' 意味着缺乏兴趣或刺激；乏味。" +
            "<br><br>" +
            "(C) '陈腐的' 意味着缺乏原创性；乏味。" +
            "<br><br>" +
            "(D) '神秘的' 意味着神秘的；难以理解。"
    },
    {
        id: 5,
        question: "The historian's __________ research, which included examining primary sources and cross-referencing facts, provided a comprehensive view of the ancient civilization.",
        chinese_question: "历史学家的 __________ 研究，包括检查原始资料和交叉引用事实，提供了对古代文明的全面看法。",
        answers: [
            { option: "A", answer: "cursory", chinese_answer: "粗略", chinese_romanization: "cūlüè" },
            { option: "B", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "C", answer: "thorough", chinese_answer: "彻底", chinese_romanization: "chèdǐ" },
            { option: "D", answer: "incomplete", chinese_answer: "不完整", chinese_romanization: "bù wánzhěng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(A) 'cursory' means hasty and therefore not thorough or detailed." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at the surface." +
            "<br><br>" +
            "(D) 'incomplete' means not having all the necessary or appropriate parts.",
        chinese_explanation: "(C) '彻底'一词意味着对每个细节都很全面；不表面或部分的。" +
            "<br><br>" +
            "(A) '粗略' 意味着仓促，因此不彻底或不详细。" +
            "<br><br>" +
            "(B) '肤浅' 意味着存在或发生在表面。" +
            "<br><br>" +
            "(D) '不完整' 意味着没有所有必要或适当的部分。"
    },
    {
        id: 6,
        question: "The palace was decorated with __________ details, making it a marvel of architecture.",
        chinese_question: "宫殿装饰有 __________ 的细节，使其成为建筑的奇迹。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "plain", chinese_answer: "朴素", chinese_romanization: "pǔsù" },
            { option: "C", answer: "ornate", chinese_answer: "华丽", chinese_romanization: "huálì" },
            { option: "D", answer: "austere", chinese_answer: "简朴", chinese_romanization: "jiǎnpǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ornate' means made in an intricate shape or decorated with complex patterns." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'austere' means severe or strict in manner, attitude, or appearance.",
        chinese_explanation: "(C) '华丽' 一词意味着形状复杂或装饰有复杂图案。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或做；没有难度。" +
            "<br><br>" +
            "(B) '朴素' 意味着没有装饰或精心设计；简单或普通的性格。" +
            "<br><br>" +
            "(D) '简朴' 意味着在方式、态度或外表上严格或严格。"
    },
    {
        id: 7,
        question: "The coach appreciated the player's __________ attitude on the field, but it sometimes led to unnecessary confrontations.",
        chinese_question: "教练欣赏这名球员在场上的 __________ 态度，但有时也会导致不必要的对抗。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "pugnacious", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pugnacious' means eager or quick to argue, quarrel, or fight." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '好斗' 一词意味着急于或迅速争论、争吵或打斗。" +
            "<br><br>" +
            "(A) '和平' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(B) '胆小' 意味着表现出缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(D) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感的。"
    },
    {
        id: 8,
        question: "The professor's __________ approach to teaching often felt more like a lecture than an interactive class.",
        chinese_question: "教授的 __________ 教学方法经常让人感觉更像是一场讲座而不是互动课堂。",
        answers: [
            { option: "A", answer: "entertaining", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "B", answer: "didactic", chinese_answer: "教导", chinese_romanization: "jiàodǎo" },
            { option: "C", answer: "engaging", chinese_answer: "吸引人", chinese_romanization: "xīyǐn rén" },
            { option: "D", answer: "interactive", chinese_answer: "互动", chinese_romanization: "hùdòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'didactic' means intended to teach, particularly in having moral instruction as an ulterior motive." +
            "<br><br>" +
            "(A) 'entertaining' means providing amusement or enjoyment." +
            "<br><br>" +
            "(C) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(D) 'interactive' means (of two people or things) influencing or having an effect on each other.",
        chinese_explanation: "(B) '教导' 一词意味着旨在教授，特别是具有道德教育为潜在动机的。" +
            "<br><br>" +
            "(A) '娱乐' 意味着提供娱乐或享受。" +
            "<br><br>" +
            "(C) '吸引人' 意味着迷人和有吸引力的。" +
            "<br><br>" +
            "(D) '互动' 意味着（两个人或事物）相互影响或产生效果的。"
    },
    {
        id: 9,
        question: "The child's __________ nature led her to ask endless questions about how the world works, much to the delight of her parents.",
        chinese_question: "孩子 __________ 的天性让她对世界如何运作提出了无尽的问题，这让她的父母非常高兴。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "apathetic", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" },
            { option: "C", answer: "inquisitive", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inquisitive' means having or showing an interest in learning things; curious." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(C) '好奇' 一词意味着对学习事物有兴趣或表现出兴趣。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着没有表现或感到兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 10,
        question: "After years of dealing with difficult clients and stressful deadlines, she felt __________ and lost her passion for the job.",
        chinese_question: "多年处理棘手的客户和紧张的最后期限后，她感到 __________，失去了对工作的热情。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "jaded", chinese_answer: "厌倦", chinese_romanization: "yànjuàn" },
            { option: "C", answer: "excited", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "eager", chinese_answer: "渴望", chinese_romanization: "kěwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jaded' means tired, bored, or lacking enthusiasm, typically after having had too much of something." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(D) 'eager' means wanting to do or have something very much.",
        chinese_explanation: "(B) '厌倦' 一词意味着疲倦、无聊或缺乏热情，通常是在对某事过度体验之后。" +
            "<br><br>" +
            "(A) '热情' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '兴奋' 意味着非常热情和渴望。" +
            "<br><br>" +
            "(D) '渴望' 意味着非常想要做或拥有某物。"
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
