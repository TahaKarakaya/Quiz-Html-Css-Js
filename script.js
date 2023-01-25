const quiz = document.getElementById("quiz")
const answerEl = document.querySelectorAll(".answer")
const questionEl = document.getElementById("sorular")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
let currentQuiz = 0
let score = 0

const quizData = [

    {
        question: "Front-End Dillerinin İskeleti Hangi Dildir?",
        a: "Html",
        b: "Css",
        c: "Js",
        d: "Php",
        correct: "a",
    },

    {
        question: "Back-End Dillerinin İskeleti Hangi Dildir?",
        a: "Html",
        b: "Css",
        c: "Js",
        d: "Php",
        correct: "d",
    },

    {
        question: "Türkiyenin Başkenti Neresidir?",
        a: "Ankara",
        b: "İzmir",
        c: "İstanbul",
        d: "Konya",
        correct: "a",
    },

    {
        question: "Web Sitelerinde Depolama veya Datalama için Hangi Dil kullanılır?",
        a: "Html",
        b: "Css",
        c: "SQL",
        d: "Php",
        correct: "c",
    },

    


]


loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEl.forEach(answerEl => answerEl.checked= false)
}


function getSelected(){
    let answer
    answerEl.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> Senin Sorularının ${score} / ${quizData.length} Doğru !!!</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
