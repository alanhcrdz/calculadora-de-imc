const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    var weight = document.querySelector('#weight').value;
    var height = document.querySelector('#height').value;
    var age = document.querySelector('#quantity').value;

    weight = parseFloat(weight);
    height = parseFloat(height);
    age = parseInt(age);


    
        calculateBMI(weight, height, age);
    
  


  
})


function calculateBMI(wght, hght, age){
var bmi = wght / (hght * hght);
bmi = parseFloat(bmi).toFixed(2);

var span = document.querySelector('#span');


switch (true) {
    case (bmi < 18.5) :
        span.innerHTML = "Seu IMC é de: " + bmi + '. ' + 'Atenção! você está abaixo do peso adequado.'
        span.style.color = 'hsl(33.33, 88.39%, 56.08%)';
        break;

        case (bmi >= 18.5  && bmi <= 24.9) :
            span.innerHTML = "Seu IMC é de: " + bmi + '.' + ' Parabéns, você está dentro do peso adequado.'
            span.style.color = 'hsl(165.17, 82.08%, 41.57%)';
        break;

        case (bmi >= 24.9  && bmi <= 30) :
            span.innerHTML = "Seu IMC é de: " + bmi + '.' + ' Atenção, você está acima do peso adequado.'
        span.style.color = 'hsl(33.33, 88.39%, 56.08%)';
            break;

            case (bmi > 30) :
                span.innerHTML = "Seu IMC é de: " + bmi + '.' + ' Cuidado, você está muito acima do peso adequado.'
                span.style.color = 'hsl(0, 100%, 55.29%)';  
            break;

    default:
        break;
}




}/**/








