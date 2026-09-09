let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let player = true;
const box = document.querySelectorAll(".box")


box.forEach((box) => {
    box.addEventListener('click', () => {
    if(box.innerHTML == ''){
    if(player){
        box.innerText = 'X'
        player = false;
        
        }

    else{
        box.innerHTML = 'O'
        player = true;
        
    }
    checkWin()
}
     
})
})

const checkWin = () => {
    for (let pattern of winningPatterns) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(`winner ${pos1}` );
                disableBox()
                
            }
        }
    }
};

const disableBox = () => {
    box.forEach((box) => {
        box.style.pointerEvents = 'none';
    });
};

const enableBox = () => {
    box.forEach((box) => {
        box.style.pointerEvents = 'all';
    });
};

let reset = document.querySelector('.resetBtn')

reset.addEventListener('click', () => {
    box.forEach((box) => {
        box.innerHTML= ''
    })
    enableBox()
})