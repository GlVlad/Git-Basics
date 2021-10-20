document.addEventListener('click' , e => {
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)
    console.log(red, green, blue)
    e.target.style.background = `rgb(${red},${green},${blue})`
    setTimeout(() => {
        e.target.style.background = 'transparent'
    }, 1000)
})