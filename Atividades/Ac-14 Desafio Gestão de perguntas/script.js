let slenzie = {
    nameEvent: "",
    questions: [
        {
            user: "asdas",
            userQuestion: "asdasd",
            vote: 0
        }
    ]
};
let question = {
    user: "",
    userQuestion: "",
    vote: 0
};

function createEvent(slenzie){
    let str = prompt("Digite um texto")
    if(str !=  Number){
        slenzie.nameEvent = str;
        return slenzie
    }else{
        return "The input value is invalid"
    }
}
// console.log(createEvent(slenzie));

function addQuestion(slenzie,question){
    let userName = prompt("Digite seu nome");
    let quest = prompt("Digite sua pergunta");
    question.user = userName;
    question.userQuestion = quest;
    if(question.user == ""){
        return "the user can`t be empty";
    }if(question.userQuestion == ""){
        return "The question can't be null";
    }
    slenzie.questions.push(question);
    return slenzie
}
console.log(addQuestion(slenzie,question));

function addVoteToQuestion(n,slenzie){
    if(n > slenzie.questions.length || n < slenzie.questions.length){
        return "Question not found.";
    }else{
        slenzie.questions[n].vote = +1;
        return "vote registered successfully";
    }
    
}
// addVoteToQuestion(0,slenzie);

function questionAnswered(n,slenzie){
if(n > slenzie.questions.length){
    return "question not found"
}
   return slenzie.questions[n].answered = true;
}
console.log(questionAnswered(0,slenzie));

function unasweredQuestions(slenzie){
    let output = [];
    for(i=0; i < slenzie.questions.length; i++){
        if(slenzie.questions[i].answered != true){
            output.push(slenzie.questions[i]);
        }
    }
return output;
}
console.log(unasweredQuestions(slenzie));