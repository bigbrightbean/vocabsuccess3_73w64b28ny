// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager explained the __________ behind the new policy to ensure everyone understood the reasons for the change.",
        chinese_question: "经理解释了新政策背后的 __________，以确保每个人都理解变更的原因。",
        answers: [
            { option: "A", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "B", answer: "rationale", chinese_answer: "理由", chinese_romanization: "lǐyóu" },
            { option: "C", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
            { option: "D", answer: "effect", chinese_answer: "效果", chinese_romanization: "xiàoguǒ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rationale' means a set of reasons or a logical basis for a course of action or belief." +
            "<br><br>" +
            "(A) 'consequence' means a result or effect, typically one that is unwelcome or unpleasant." +
            "<br><br>" +
            "(C) 'impact' means the action of one object coming forcibly into contact with another." +
            "<br><br>" +
            "(D) 'effect' means a change that is a result or consequence of an action or other cause.",
        chinese_explanation: "(B) '理由' 一词意味着行动或信仰的原因或逻辑基础。" +
            "<br><br>" +
            "(A) '结果' 意味着通常是不受欢迎或不愉快的结果或效果。" +
            "<br><br>" +
            "(C) '影响' 意味着一个物体与另一个物体强行接触的动作。" +
            "<br><br>" +
            "(D) '效果' 意味着变化是行动或其他原因的结果或后果。"
    },
    {
        id: 2,
        question: "The conference celebrated the __________ of ideas and cultures, bringing together people from all over the world.",
        chinese_question: "这次会议庆祝了思想和文化的 __________，汇聚了来自世界各地的人们。",
        answers: [
            { option: "A", answer: "similarity", chinese_answer: "相似性", chinese_romanization: "xiāngsì xìng" },
            { option: "B", answer: "uniformity", chinese_answer: "统一性", chinese_romanization: "tǒngyī xìng" },
            { option: "C", answer: "diversity", chinese_answer: "多样性", chinese_romanization: "duōyàng xìng" },
            { option: "D", answer: "sameness", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diversity' means the state of being diverse; variety." +
            "<br><br>" +
            "(A) 'similarity' means the state or fact of being similar." +
            "<br><br>" +
            "(B) 'uniformity' means the quality or state of being uniform." +
            "<br><br>" +
            "(D) 'sameness' means the quality or state of being the same as another.",
        chinese_explanation: "(C) '多样性' 一词意味着多样化的状态；多样性。" +
            "<br><br>" +
            "(A) '相似性' 意味着相似的状态或事实。" +
            "<br><br>" +
            "(B) '统一性' 意味着一致的质量或状态。" +
            "<br><br>" +
            "(D) '一致性' 意味着与另一事物相同的质量或状态。"
    },
    {
        id: 3,
        question: "The country's period of __________ required strict economic measures to reduce the national debt.",
        chinese_question: "国家的 __________ 时期需要严格的经济措施来减少国债。",
        answers: [
            { option: "A", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "C", answer: "austerity", chinese_answer: "紧缩", chinese_romanization: "jǐnsuō" },
            { option: "D", answer: "extravagance", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'austerity' means sternness or severity of manner or attitude; extreme plainness and simplicity of style or appearance; conditions characterized by severity, sternness, or asceticism." +
            "<br><br>" +
            "(A) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(B) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(D) 'extravagance' means lack of restraint in spending money or using resources.",
        chinese_explanation: "(C) '紧缩' 一词意味着态度的严厉或严肃；风格或外观的极端简朴；以严厉、严格或苦行主义为特征的条件。" +
            "<br><br>" +
            "(A) '繁荣' 意味着繁荣的状态。" +
            "<br><br>" +
            "(B) '丰富' 意味着数量非常大。" +
            "<br><br>" +
            "(D) '奢侈' 意味着在花钱或使用资源方面缺乏节制。"
    },
    {
        id: 4,
        question: "The shelves were filled with __________, each one holding a special memory for the family.",
        chinese_question: "架子上摆满了 __________，每一个都承载着家庭的特别记忆。",
        answers: [
            { option: "A", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" },
            { option: "B", answer: "knickknacks", chinese_answer: "小摆设", chinese_romanization: "xiǎo bǎishè" },
            { option: "C", answer: "tools", chinese_answer: "工具", chinese_romanization: "gōngjù" },
            { option: "D", answer: "books", chinese_answer: "书", chinese_romanization: "shū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'knickknacks' means small worthless objects, especially household ornaments." +
            "<br><br>" +
            "(A) 'furniture' means large movable equipment, such as tables and chairs, used to make a house, office, or other space suitable for living or working." +
            "<br><br>" +
            "(C) 'tools' means devices or implements used to carry out a particular function." +
            "<br><br>" +
            "(D) 'books' means written or printed works consisting of pages glued or sewn together along one side and bound in covers.",
        chinese_explanation: "(B) '小摆设' 一词意味着小而无价值的物品，特别是家居装饰品。" +
            "<br><br>" +
            "(A) '家具' 意味着大的可移动设备，如桌子和椅子，用来使房子、办公室或其他空间适合居住或工作。" +
            "<br><br>" +
            "(C) '工具' 意味着用于执行特定功能的设备或器具。" +
            "<br><br>" +
            "(D) '书' 意味着由一侧粘合或缝合在一起并装订成封面的书面或印刷作品。"
    },
    {
        id: 5,
        question: "The company appointed a __________ to facilitate communication between the different departments.",
        chinese_question: "公司任命了一名 __________ 来促进各部门之间的沟通。",
        answers: [
            { option: "A", answer: "critic", chinese_answer: "评论员", chinese_romanization: "pínglùn yuán" },
            { option: "B", answer: "liaison", chinese_answer: "联络人", chinese_romanization: "liánluò rén" },
            { option: "C", answer: "supervisor", chinese_answer: "监督", chinese_romanization: "jiāndū" },
            { option: "D", answer: "manager", chinese_answer: "经理", chinese_romanization: "jīnglǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'liaison' means communication or cooperation that facilitates a close working relationship between people or organizations." +
            "<br><br>" +
            "(A) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(C) 'supervisor' means a person who supervises a person or an activity." +
            "<br><br>" +
            "(D) 'manager' means a person responsible for controlling or administering an organization or group of staff.",
        chinese_explanation: "(B) '联络人' 一词意味着促进人与组织之间密切工作关系的沟通或合作。" +
            "<br><br>" +
            "(A) '评论员' 意味着对某事表达不赞成意见的人。" +
            "<br><br>" +
            "(C) 监督' 意味着监督一个人或活动的人。" +
            "<br><br>" +
            "(D) '经理' 意味着负责控制或管理一个组织或一组员工的人。"
    },
    {
        id: 6,
        question: "The team's __________ was evident as they worked together seamlessly, supporting each other through challenges.",
        chinese_question: "团队的 __________ 显而易见，他们无缝合作，在挑战中相互支持。",
        answers: [
            { option: "A", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "camaraderie", chinese_answer: "友情", chinese_romanization: "yǒuqíng" },
            { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "D", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'camaraderie' means mutual trust and friendship among people who spend a lot of time together." +
            "<br><br>" +
            "(A)'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(C) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(D) 'rivalry' means competition for the same objective or for superiority in the same field.",
        chinese_explanation: "(B) '友情' 一词意味着花很多时间在一起的人之间的相互信任和友谊。" +
            "<br><br>" +
            "(A) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(C) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(D) '竞争' 意味着为相同的目标或在同一领域争夺优越性的竞争。"
    },
    {
        id: 7,
        question: "The __________ of the crowd outside the stadium grew louder as the game went into overtime, with fans shouting and cheering.",
        chinese_question: "当比赛进入加时赛时，体育场外的 __________ 声越来越大，粉丝们大声喊叫和欢呼。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "clamour", chinese_answer: "喧嚣", chinese_romanization: "xuānxiāo" },
            { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clamour' means a loud and confused noise, especially that of people shouting vehemently." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(C) 'calm' means the absence of strong emotions; peacefulness." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '喧嚣' 一词意味着一种大声且混乱的噪音，尤其是人们激烈地喊叫。" +
            "<br><br>" +
            "(A) '安静' 意味着完全没有声音。" +
            "<br><br>" +
            "(C) '平静' 意味着没有强烈的情绪；平和。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 8,
        question: "He acted like a __________ in helping his friend work through emotional struggles.",
        chinese_question: "他像 __________ 一样帮助朋友度过情感挣扎。",
        answers: [
            { option: "A", answer: "counselor", chinese_answer: "顾问", chinese_romanization: "gùwèn" },
            { option: "B", answer: "psychiatrist", chinese_answer: "精神科医生", chinese_romanization: "jīngshén kē yīshēng" },
            { option: "C", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" },
            { option: "D", answer: "teacher", chinese_answer: "教师", chinese_romanization: "jiàoshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'psychiatrist' figuratively means someone who provides mental and emotional support." +
            "<br><br>" +
            "(A) 'counselor' means a person trained to give guidance on personal, social, or psychological problems." +
            "<br><br>" +
            "(C) 'mentor' means an experienced and trusted advisor." +
            "<br><br>" +
            "(D) 'teacher' means a person who teaches, especially in a school.",
        chinese_explanation: "(B) '精神科医生' 在比喻意义上意味着提供心理和情感支持的人。" +
            "<br><br>" +
            "(A) '顾问' 意味着受过训练为个人、社会或心理问题提供指导的人。" +
            "<br><br>" +
            "(C) '导师' 意味着经验丰富且值得信赖的顾问。" +
            "<br><br>" +
            "(D) '教师' 意味着教授的人，特别是在学校里。"
    },
    {
        id: 9,
        question: "The disagreement over policy led to a __________ within the organization, splitting it into two factions.",
        chinese_question: "对政策的分歧导致组织内的 __________，将其分裂成两个派系。",
        answers: [
            { option: "A", answer: "union", chinese_answer: "联合", chinese_romanization: "liánhé" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "schism", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "D", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'schism' means a split or division between strongly opposed sections or parties, caused by differences in opinion or belief." +
            "<br><br>" +
            "(A) 'union' means the action of joining together or the fact of being joined together." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(D) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations.",
        chinese_explanation: "(C) '分裂' 一词意味着由于意见或信仰的分歧而导致的强烈对立的部分或党派之间的分裂或分裂。" +
            "<br><br>" +
            "(A) '联合' 意味着联合起来的行动或联合的事实。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出声音的音符组合以产生愉快的效果。" +
            "<br><br>" +
            "(D) '联盟' 意味着为共同利益而形成的联合或协会，特别是国家或组织之间的。"
    },
    {
        id: 10,
        question: "Her teaching style is a __________ of traditional methods and modern technology.",
        chinese_question: "她的教学风格是传统方法和现代技术的 __________。",
        answers: [
            { option: "A", answer: "hybrid", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "B", answer: "relic", chinese_answer: "遗物", chinese_romanization: "yíwù" },
            { option: "C", answer: "fragment", chinese_answer: "碎片", chinese_romanization: "suìpiàn" },
            { option: "D", answer: "remnant", chinese_answer: "残余", chinese_romanization: "cányú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hybrid' metaphorically means a combination of two different elements." +
            "<br><br>" +
            "(B) 'relic' means an object surviving from an earlier time, especially one of historical or sentimental interest." +
            "<br><br>" +
            "(C) 'fragment' means a small part broken off or separated from something." +
            "<br><br>" +
            "(D) 'remnant' means a small remaining quantity of something.",
        chinese_explanation: "(A) '混合' 比喻两种不同元素的结合。" +
            "<br><br>" +
            "(B) '遗物' 意味着从早期时代保存下来的物体，特别是具有历史或情感意义的物体。" +
            "<br><br>" +
            "(C) '碎片' 意味着从某物上破裂或分离出来的小部分。" +
            "<br><br>" +
            "(D) '残余' 意味着某物的小剩余量。"
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
