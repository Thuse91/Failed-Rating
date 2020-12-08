
let progressBarFull = document.getElementById('progressBarFull');

let questionCounter = 0;
let MAX_QUESTIONS = 0;
progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;






    function one() {
        questionCounter += 1;
        MAX_QUESTIONS += 5;
        console.log(questionCounter)
        console.log(progressBarFull.style.width)
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }

    function two() {
        questionCounter += 2;
        MAX_QUESTIONS += 5;
        console.log(questionCounter)
        console.log(progressBarFull.style.width)
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }

    function three() {
        questionCounter += 3;
        MAX_QUESTIONS += 5;
        console.log(questionCounter)
        console.log(progressBarFull.style.width)
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }

    function four() {
        questionCounter += 4;
        MAX_QUESTIONS += 5;
        console.log(questionCounter)
        console.log(progressBarFull.style.width)
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }

    function five() {
        questionCounter += 5;
        MAX_QUESTIONS += 5;
        console.log(questionCounter)
        console.log(progressBarFull.style.width)
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }


