const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['#F45B69', '#22181C', '#5A0001', '#f28482', '#e36414', '#118ab2', '#603808', '#c9184a', '#3c6e71', '#ffadad', '#014f86', '#57cc99', '#7209b7']

button.addEventListener('click', () =>{
    const changeB = parseInt(Math.random()*color.length)
    body.style.background = color[changeB]
})