(function(){

    var myButton = document.getElementById('submit');
    myButton.addEventListener('click', compute);

    var mySlider = document.getElementById('rate');
    var myValue = document.getElementById('value');
    myValue.innerHTML = mySlider.value + '%';
    mySlider.oninput = function() {
        myValue.innerHTML = this.value + '%';
    }

})();

function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    
    var interest = (principal * rate * years)/100;
    
    years += new Date().getFullYear();
    
    var mySection = document.getElementById('calculator');
    
    var myDiv = document.createElement('div');
    myDiv.id = "output";
    
    var myPara = document.createElement('p');
    myPara.innerHTML =  `If you deposit <mark>${principal}</mark>,<br>at an interest rate of <mark>rate ${3.5}%</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br>in the year <mark>${years}</mark>`;
    myDiv.appendChild(myPara);
    
    var myOutput = document.getElementById('output');
    if(myOutput) {
        mySection.replaceChild(myDiv, myOutput);
    }
    else {
        mySection.appendChild(myDiv);
    }
}
        