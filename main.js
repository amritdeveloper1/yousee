function randomText(){
    var text = ("A❤S")
    letters =text[Math.floor(Math.random() * text.length)];
    return letters;
}

function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 300)
    let size = Math.random() * 1.9;
    let duration = Math.random() *1.1;

    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.6+size +'em';
    e.style.animationDuration = 1+duration+'s';

      setTimeout(function(){
      cloud.removeChild(e)
      },1900)
}

setInterval(function(){
    rain()
},40);
