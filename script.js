const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');
const resTitle = document.querySelector('.card_adviceTitle');


window.onload = () =>{
    getAdvice();
}
resBtn.addEventListener('click', () =>{
    getAdvice(); 
    console.log('clicked !');
})

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
        return response.json();
    }).then(adviceData =>{
        const adviceObj = adviceData.slip;
        resDiv.innerHTML = `<p>${adviceObj.advice}</p>`;
        resTitle.innerHTML = `ADVICE #${adviceObj.id}`;
        console.log(adviceObj.advice);
    }).catch(error =>{
        console.log(error);
    })
}