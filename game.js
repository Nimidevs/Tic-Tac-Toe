const game = (() => {
    const gameBoard = (num) => {
        const boardContainer = document.querySelector('.container')
        for(let i = 0; i < num; i++){
            const box = document.createElement('div')
            box.classList.add('cell')
            box.setAttribute('data-index', i)
            boardContainer.appendChild(box)
        }
    }
    const player = (name, marker) => {
        const getName = name;
        const getMarker = marker
        return {getName, getMarker};
    }
    const player1 = player('player x','x')
    const player2 = player('player o', 'o')

    const gamePlay = () => {
        const box1 = document.querySelector('[data-index = "0"]');
        const box2 = document.querySelector('[data-index = "1"]');
        const box3 = document.querySelector('[data-index = "2"]'); 
        const box4 = document.querySelector('[data-index = "3"]');
        const box5 = document.querySelector('[data-index = "4"]');
        const box6 = document.querySelector('[data-index = "5"]');
        const box7 = document.querySelector('[data-index = "6"]');
        const box8 = document.querySelector('[data-index = "7"]');
        const box9 = document.querySelector('[data-index = "8"]');
        
        const replayBtn = document.querySelector('.replay-btn')
        const message = document.querySelector('.message')
        const cellBox = document.querySelectorAll('.cell')
        let currentPlayer = player1
        const makeMark = function (){
            
            if(currentPlayer === player1){
                message.innerHTML = "Player O'S Turn"
                this.innerHTML = player1.getMarker
                currentPlayer = player2
            }else{
                message.innerHTML = "Player X'S Turn"
                this.innerHTML = player2.getMarker
                currentPlayer = player1
            }
            
            if((box1.textContent !== "" && box2.textContent !== "" && box3.textContent !== "" && box1.textContent === box2.textContent && box2.textContent === box3.textContent && box3.textContent === "x") || 
               (box4.textContent !== "" && box5.textContent !== "" && box6.textContent !== "" && box4.textContent === box5.textContent && box5.textContent === box6.textContent && box6.textContent === "x") || 
               (box7.textContent !== "" && box8.textContent !== "" && box9.textContent !== "" && box7.textContent === box8.textContent && box8.textContent === box9.textContent && box9.textContent === "x") ||
               (box1.textContent !== "" && box4.textContent !== "" && box7.textContent !== "" && box1.textContent === box4.textContent && box4.textContent === box7.textContent && box7.textContent === "x") ||
               (box2.textContent !== "" && box5.textContent !== "" && box8.textContent !== "" && box2.textContent === box5.textContent && box5.textContent === box8.textContent && box8.textContent === "x") ||
               (box3.textContent !== "" && box6.textContent !== "" && box9.textContent !== "" && box3.textContent === box6.textContent && box6.textContent === box9.textContent && box9.textContent === "x") ||
               (box1.textContent !== "" && box5.textContent !== "" && box9.textContent !== "" && box1.textContent === box5.textContent && box5.textContent === box9.textContent && box9.textContent === "x") ||
               (box3.textContent !== "" && box5.textContent !== "" && box7.textContent !== "" && box3.textContent === box5.textContent && box5.textContent === box7.textContent && box7.textContent === "x")){
                message.innerHTML = "PLAYER X HAS WON"
            } else if((box1.textContent !== "" && box2.textContent !== "" && box3.textContent !== "" && box1.textContent === box2.textContent && box2.textContent === box3.textContent && box3.textContent === "x") || 
            (box4.textContent !== "" && box5.textContent !== "" && box6.textContent !== "" && box4.textContent === box5.textContent && box5.textContent === box6.textContent && box6.textContent === "o") || 
            (box7.textContent !== "" && box8.textContent !== "" && box9.textContent !== "" && box7.textContent === box8.textContent && box8.textContent === box9.textContent && box9.textContent === "o") ||
            (box1.textContent !== "" && box4.textContent !== "" && box7.textContent !== "" && box1.textContent === box4.textContent && box4.textContent === box7.textContent && box7.textContent === "o") ||
            (box2.textContent !== "" && box5.textContent !== "" && box8.textContent !== "" && box2.textContent === box5.textContent && box5.textContent === box8.textContent && box8.textContent === "o") ||
            (box3.textContent !== "" && box6.textContent !== "" && box9.textContent !== "" && box3.textContent === box6.textContent && box6.textContent === box9.textContent && box9.textContent === "o") ||
            (box1.textContent !== "" && box5.textContent !== "" && box9.textContent !== "" && box1.textContent === box5.textContent && box5.textContent === box9.textContent && box9.textContent === "o") ||
            (box3.textContent !== "" && box5.textContent !== "" && box7.textContent !== "" && box3.textContent === box5.textContent && box5.textContent === box7.textContent && box7.textContent === "o")){
                message.innerHTML = "PLAYER O HAS WON"
            }
            if(message.innerHTML === "PLAYER X HAS WON" || message.innerHTML === "PLAYER O HAS WON"){
                replayBtn.classList.add('active')
                cellBox.forEach((element) => {
                    if(element.innerHTML === ""){
                        element.removeEventListener('click', makeMark)
                    }
                })
            }
            if((box1.textContent !== "" && box2.textContent !== "" && box3.textContent !== "" && box4.textContent !== "" && box5.textContent !== "" && box6.textContent !== "" && box7.textContent !== "" && box8.textContent !== "" && box9.textContent !== "" && message.innerHTML !== "PLAYER X HAS WON" && message.innerHTML !== "PLAYER O HAS WON")){
                message.innerHTML = "ITS A TIE"
            }
            if(message.innerHTML === "ITS A TIE"){
                replayBtn.classList.add('active')
            }
            this.removeEventListener('click', makeMark)
        }
        cellBox.forEach((element) => {
            element.addEventListener('click', makeMark)
        })    
        
        replayBtn.addEventListener('click', function(){
            message.innerHTML = "Player x's Turn"
            cellBox.forEach((element) => {
                element.textContent = ""
                currentPlayer = player1
                replayBtn.classList.remove('active')
                element.addEventListener('click', makeMark)
            })
        })
           
    }
    return{gameBoard,gamePlay}

})()
game.gameBoard(9)
game.gamePlay()

