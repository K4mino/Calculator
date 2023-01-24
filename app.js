const btns = document.querySelectorAll('.number') ;
const plus = document.getElementById('plus');
const equal =  document.getElementById('equal');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide =document.getElementById('divide');

let resultShow = document.querySelector('.result');
let resultShow2 = document.querySelector('.result2');

let firstInput = [];

const arrBtns = Array.from(btns);



//const result = arr.map((item) => parseInt(item.value)).reduce((res,item) => res + item);

    let num1;
    let num2;

    plus.addEventListener('click', ()=>{
        if(num2 !== undefined){
        resultShow2.innerHTML += resultShow.textContent + '+';
        resultShow.innerHTML = "";
        num1 = parseFloat(resultShow2.textContent);
        }else{
            alert('write number')
        }

    })

    minus.addEventListener('click',()=>{
        if(num2 !== undefined){
        resultShow2.innerHTML += resultShow.textContent + '-';
        resultShow.innerHTML = "";
        num1 = parseFloat(resultShow2.textContent);
        }
        else {
            alert('write number')
        }
    })

    multiply.addEventListener('click',()=>{
        if(num2 !== undefined){
        resultShow2.innerHTML += resultShow.textContent + '*';
        resultShow.innerHTML = "";
        num1 = parseFloat(resultShow2.textContent);
        }
        else {
            alert('write number')
        }
    })

    divide.addEventListener('click',()=>{
        if(num2 !== undefined){
        resultShow2.innerHTML += resultShow.textContent + '/';
        resultShow.innerHTML = "";
        num1 = parseFloat(resultShow2.textContent);
        }
        else {
            alert('write number')
        }
    })

  

    arrBtns.forEach((btn) => btn.addEventListener('click', (e)=>{
        //num2 =e.target.value;
        resultShow.innerHTML += e.target.value;
        num2 = parseFloat(resultShow.textContent)
    }))


equal.addEventListener('click', ()=>{

    if(resultShow2.textContent.includes('+')){
        num2 = parseFloat(resultShow.textContent)
        resultShow.innerHTML="";
        resultShow2.innerHTML="";   
        resultShow.innerHTML += num1 + num2;
        num1 = 0;
        num2 = 0;
    }else if (resultShow2.textContent.includes('-')){
        num2 = parseFloat(resultShow.textContent)
        resultShow.innerHTML="";
        resultShow2.innerHTML="";   
        resultShow.innerHTML += num1 - num2;
        num1 = 0;
        num2 = 0;
    }else if (resultShow2.textContent.includes('*')){
        num2 = parseFloat(resultShow.textContent)
        resultShow.innerHTML="";
        resultShow2.innerHTML="";   
        resultShow.innerHTML += num1 * num2;
        num1 = 0;
        num2 = 0;
    }else if (resultShow2.textContent.includes('/')){
        num2 = parseFloat(resultShow.textContent)
        resultShow.innerHTML="";
        resultShow2.innerHTML="";   
        resultShow.innerHTML += num1 / num2;
        num1 = 0;
        num2 = 0;
    }
})