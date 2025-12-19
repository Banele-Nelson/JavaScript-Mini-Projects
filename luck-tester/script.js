
const numbers = [0,1,2,3,4,];
const colors = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(255,255,0)', 'rgb(0,0,0)', 'rgb(0,0,255)'];
const alphabets = ['A', 'B', 'C', 'D', 'E'];

const categoryTitle = document.getElementById('categoryTitle')


function numbersCategory() {
    categoryTitle.textContent = "numbers"
    const optionDiv = document.getElementById('options')
    optionDiv.innerHTML = ""
   for (let i = 0; i < 5; i++) {
        const button = document.createElement('button');
        button.textContent = numbers[i];
        button.style.backgroundColor = "lightgreen";
        button.className = "optionBtn";
        button.value = i
        optionDiv.appendChild(button)
        button.addEventListener('click', handleClick)
   }
  
} 
function colorsCategory() {
    categoryTitle.textContent = "colors"
    const optionDiv = document.getElementById('options')
    optionDiv.innerHTML = ""
    
    for (let i = 0; i < 5; i++) {
        const button = document.createElement('button');
        button.textContent = colors[i];
        button.style.backgroundColor = colors[i];
        button.className = "optionBtn";
        button.style.color = "grey"
        button.value = i
        optionDiv.appendChild(button)
        button.addEventListener('click', handleClick)
    }
    
}
function alphabetCategory() {
    categoryTitle.textContent = "alphabets"
    const optionDiv = document.getElementById('options')
    optionDiv.innerHTML = ""
    
    for (let i = 0; i < 5; i++) {
        const button = document.createElement('button');
        button.textContent = alphabets[i];
        button.style.backgroundColor = "lightgreen";
        button.className = "optionBtn";
        button.value = i
        optionDiv.appendChild(button)
        button.addEventListener('click', handleClick)
    } 
}

let clicks = 0

function handleClick(e) {
    
    let score = parseInt(document.getElementById('score').textContent)
    const randomNum = Math.floor(Math.random() * 5)
    let scoreSpan = document.getElementById('score')
    const choice = parseInt(e.target.value)
    
    if(choice === randomNum) {
        score++
        resetGame()
     } else {
        resetGame()
     }

    clicks++ 
    scoreSpan.textContent = `${score}/${clicks}`

    const percentage = ((score / clicks) * 100)
    const comment = document.getElementById('comment')
    
    if( percentage >= 50 && percentage < 70 ) {
        document.body.style.backgroundColor = "green"
        comment.textContent = "Lucky"
    } else if (percentage >= 70 ) {
        document.body.style.backgroundColor = "darkgreen"
        comment.textContent = "Very Lucky"
    } else if ( percentage > 20 && percentage < 50) {
        document.body.style.backgroundColor = "limegreen"
        comment.textContent = "Not So Lucky"
    } else {
        document.body.style.backgroundColor = "lightgreen"
        comment.textContent = "Bad Luck"
    }
};

function resetGame() {
    document.getElementById('options').innerHTML = ""
}







 