const setOfWords = [
    "Can you imagine an imaginary menagerie manager imagining managing an imaginary menagerie?",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "He thrusts his fists against the posts and still insists he sees the ghosts. Peter Piper picked a peck of pickled peppers.",
    "If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?"
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();

    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed a total of " + speed + " words per minute. ";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index) {
        if (item === words2[index]) {
            cnt++;
        }
    });

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".");
}

const wordCounter = (str) => {
    let response = str.trim().split(/\s+/).length;
    return response;
}

btn.addEventListener('click', function() {
    console.log(this);

    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        typeWords.value = ""; 
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
});
