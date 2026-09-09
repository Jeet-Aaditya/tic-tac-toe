let winningPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let player = true;
const box = document.querySelectorAll(".box")


box.forEach((box) => {
    box.addEventListener('click', () => {
    
    if(player){
        box.innerText = 'X'
        player = false;
        }

    else{
        box.innerHTML = 'O'
        player = true;
    }
    console.log('e')    
})
})
