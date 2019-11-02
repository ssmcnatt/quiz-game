function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

function displayQuestion() {
    var quest = questions[Math.floor(Math.random() * questions.length)];
    console.log(quest.question);
    for (let answer of quest.answers) {
        console.log(answer);
    }

    return quest;
}

function getAnswer(quest) {
    var ans = prompt("Enter the correct answer, enter 'exit' to quit");
    if (ans === "exit") {
        return ans;
    } else if (ans == quest.correct + 1) {
        console.log("You are correct! The answer is " + quest.answers[question.correct] + "!");
        score++;
    } else {
        console.log("You are wrong! The answer is " + quest.answers[question.correct] + "!");
    }
    return ans;
}

var question,
    answer = "0",
    score = 0, 
    questions = [];

questions.push(new Question("Who performs the song 'Faithfully'?", ["1 - Styx", "2 - Tom Petty", "3 - Journey"], 2));
questions.push(new Question("Who performs the song 'Mr. Roboto'?", ["1 - Styx", "2 - Run DMC", "3 - Tom Petty"], 0));
questions.push(new Question("Who performs the song 'Free Falling'?", ["1 - Ratt", "2 - Tom Petty", "3 - Pink Floyd"], 1));


while (answer !== "exit") {
    question = displayQuestion();
    answer = getAnswer(question);
    console.log("Your score: " + score);
}

