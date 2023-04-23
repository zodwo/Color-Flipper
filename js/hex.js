const colors = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];


const buttons = document.getElementById("button")
const text_color = document.getElementById("color")

buttons.addEventListener("click", () => {
    let hex = "#"

    for(let i = 0; i < 6; i++){
        hex += colors[ranmdoms()]
    }
    
    text_color.textContent = hex
    document.body.style.backgroundColor = hex
})



function ranmdoms(){
    return Math.floor(Math.random() * colors.length)
}