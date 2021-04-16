function ageInDays() {

    var birthYear=prompt('What year were you born?');

    var myAgeInDays = (2021-birthYear) * 365;

    //dynamic text based on input

    var h1 = document.createElement('h1');

    var resultText = document.createTextNode('You are ' + myAgeInDays + ' years old.');

    h1.appendChild(resultText);

    h1.setAttribute('id','ageInDays');
    h1.setAttribute('class','testClass');
    h1.setAttribute('style', 'color:red');
 
    document.getElementById('resultP').appendChild(h1);
    // console.log(resultText);
}

function resetH1() {
    document.getElementById('ageInDays').remove();
}

function generateDog() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-dog-gen');
    image.src="./images/dog.jpg";

    div.appendChild(image);

}


